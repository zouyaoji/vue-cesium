import 'vue';

function css(element, css) {
    const style = element.style;
    Object.keys(css).forEach(prop => {
        style[prop] = css[prop];
    });
}

let size;
function getScrollbarWidth() {
    if (size !== undefined) {
        return size;
    }
    const inner = document.createElement('p'), outer = document.createElement('div');
    css(inner, {
        width: '100%',
        height: '200px'
    });
    css(outer, {
        position: 'absolute',
        top: '0px',
        left: '0px',
        visibility: 'hidden',
        width: '200px',
        height: '150px',
        overflow: 'hidden'
    });
    outer.appendChild(inner);
    document.body.appendChild(outer);
    const w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    let w2 = inner.offsetWidth;
    if (w1 === w2) {
        w2 = outer.clientWidth;
    }
    outer.remove();
    size = w1 - w2;
    return size;
}

function platform() {
    const ua = navigator.userAgent;
    const isWindowsPhone = /(?:Windows Phone)/.test(ua);
    const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
    const isAndroid = /(?:Android)/.test(ua);
    const isFireFox = /(?:Firefox)/.test(ua);
    const isChrome = /(?:Chrome|CriOS)/.test(ua);
    const isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua));
    const isPhone = /(?:iPhone)/.test(ua) && !isTablet;
    const isPc = !isPhone && !isAndroid && !isSymbian;
    const isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc,
        isChrome: isChrome,
        isIOS
    };
}

let vpLeft, vpTop;
function validatePosition(pos) {
    const parts = pos.split(' ');
    if (parts.length !== 2) {
        return false;
    }
    if (['top', 'center', 'bottom'].includes(parts[0]) !== true) {
        console.error('Anchor/Self position must start with one of top/center/bottom');
        return false;
    }
    if (['left', 'middle', 'right', 'start', 'end'].includes(parts[1]) !== true) {
        console.error('Anchor/Self position must end with one of left/middle/right/start/end');
        return false;
    }
    return true;
}
function validateOffset(val) {
    if (!val) {
        return true;
    }
    if (val.length !== 2) {
        return false;
    }
    if (typeof val[0] !== 'number' || typeof val[1] !== 'number') {
        return false;
    }
    return true;
}
const horizontalPos = {
    'start#ltr': 'left',
    'start#rtl': 'right',
    'end#ltr': 'right',
    'end#rtl': 'left'
};
['left', 'middle', 'right'].forEach(pos => {
    horizontalPos[`${pos}#ltr`] = pos;
    horizontalPos[`${pos}#rtl`] = pos;
});
function parsePosition(pos, rtl) {
    const parts = pos.split(' ');
    return {
        vertical: parts[0],
        horizontal: horizontalPos[`${parts[1]}#${rtl === true ? 'rtl' : 'ltr'}`]
    };
}
function validateCover(val) {
    if (val === true || val === false) {
        return true;
    }
    return validatePosition(val);
}
function getAnchorProps(el, offset) {
    let { top, left, right, bottom, width, height } = el.getBoundingClientRect();
    if (offset !== void 0) {
        top -= offset[1];
        left -= offset[0];
        bottom += offset[1];
        right += offset[0];
        width += offset[0];
        height += offset[1];
    }
    return {
        top,
        left,
        right,
        bottom,
        width,
        height,
        middle: left + (right - left) / 2,
        center: top + (bottom - top) / 2
    };
}
function getTargetProps(el) {
    return {
        top: 0,
        center: el.offsetHeight / 2,
        bottom: el.offsetHeight,
        left: 0,
        middle: el.offsetWidth / 2,
        right: el.offsetWidth
    };
}
function setPosition(cfg) {
    if (platform().isIOS === true && window.visualViewport !== void 0) {
        const el = document.body.style;
        const { offsetLeft: left, offsetTop: top } = window.visualViewport;
        if (left !== vpLeft) {
            el.setProperty('--vc-pe-left', left + 'px');
            vpLeft = left;
        }
        if (top !== vpTop) {
            el.setProperty('--vc-pe-top', top + 'px');
            vpTop = top;
        }
    }
    let anchorProps = {};
    const { scrollLeft, scrollTop } = cfg.el;
    if (cfg.absoluteOffset === void 0) {
        anchorProps = getAnchorProps(cfg.anchorEl, cfg.cover === true ? [0, 0] : cfg.offset);
    }
    else {
        const { top: anchorTop, left: anchorLeft } = cfg.anchorEl.getBoundingClientRect(), top = anchorTop + cfg.absoluteOffset.top, left = anchorLeft + cfg.absoluteOffset.left;
        anchorProps = { top, left, width: 1, height: 1, right: left + 1, center: top, middle: left, bottom: top + 1 };
    }
    let elStyle = {
        maxHeight: cfg.maxHeight,
        maxWidth: cfg.maxWidth,
        visibility: 'visible'
    };
    if (cfg.fit === true || cfg.cover === true) {
        elStyle.minWidth = anchorProps.width + 'px';
        if (cfg.cover === true) {
            elStyle.minHeight = anchorProps.height + 'px';
        }
    }
    Object.assign(cfg.el.style, elStyle);
    const targetProps = getTargetProps(cfg.el), props = {
        top: anchorProps[cfg.anchorOrigin.vertical] - targetProps[cfg.selfOrigin.vertical],
        left: anchorProps[cfg.anchorOrigin.horizontal] - targetProps[cfg.selfOrigin.horizontal]
    };
    applyBoundaries(props, anchorProps, targetProps, cfg.anchorOrigin, cfg.selfOrigin);
    elStyle = {
        top: props.top + 'px',
        left: props.left + 'px'
    };
    if (props.maxHeight !== void 0) {
        elStyle.maxHeight = props.maxHeight + 'px';
        if (anchorProps.height > props.maxHeight) {
            elStyle.minHeight = elStyle.maxHeight;
        }
    }
    if (props.maxWidth !== void 0) {
        elStyle.maxWidth = props.maxWidth + 'px';
        if (anchorProps.width > props.maxWidth) {
            elStyle.minWidth = elStyle.maxWidth;
        }
    }
    Object.assign(cfg.el.style, elStyle);
    if (cfg.el.scrollTop !== scrollTop) {
        cfg.el.scrollTop = scrollTop;
    }
    if (cfg.el.scrollLeft !== scrollLeft) {
        cfg.el.scrollLeft = scrollLeft;
    }
}
function applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin) {
    const currentHeight = targetProps.bottom, currentWidth = targetProps.right, margin = getScrollbarWidth(), innerHeight = window.innerHeight - margin, innerWidth = document.body.clientWidth;
    if (props.top < 0 || props.top + currentHeight > innerHeight) {
        if (selfOrigin.vertical === 'center') {
            props.top = anchorProps[anchorOrigin.vertical] > innerHeight / 2 ? Math.max(0, innerHeight - currentHeight) : 0;
            props.maxHeight = Math.min(currentHeight, innerHeight);
        }
        else if (anchorProps[anchorOrigin.vertical] > innerHeight / 2) {
            const anchorY = Math.min(innerHeight, anchorOrigin.vertical === 'center'
                ? anchorProps.center
                : anchorOrigin.vertical === selfOrigin.vertical
                    ? anchorProps.bottom
                    : anchorProps.top);
            props.maxHeight = Math.min(currentHeight, anchorY);
            props.top = Math.max(0, anchorY - currentHeight);
        }
        else {
            props.top = Math.max(0, anchorOrigin.vertical === 'center'
                ? anchorProps.center
                : anchorOrigin.vertical === selfOrigin.vertical
                    ? anchorProps.top
                    : anchorProps.bottom);
            props.maxHeight = Math.min(currentHeight, innerHeight - props.top);
        }
    }
    if (props.left < 0 || props.left + currentWidth > innerWidth) {
        props.maxWidth = Math.min(currentWidth, innerWidth);
        if (selfOrigin.horizontal === 'middle') {
            props.left = anchorProps[anchorOrigin.horizontal] > innerWidth / 2 ? Math.max(0, innerWidth - currentWidth) : 0;
        }
        else if (anchorProps[anchorOrigin.horizontal] > innerWidth / 2) {
            const anchorX = Math.min(innerWidth, anchorOrigin.horizontal === 'middle'
                ? anchorProps.middle
                : anchorOrigin.horizontal === selfOrigin.horizontal
                    ? anchorProps.right
                    : anchorProps.left);
            props.maxWidth = Math.min(currentWidth, anchorX);
            props.left = Math.max(0, anchorX - props.maxWidth);
        }
        else {
            props.left = Math.max(0, anchorOrigin.horizontal === 'middle'
                ? anchorProps.middle
                : anchorOrigin.horizontal === selfOrigin.horizontal
                    ? anchorProps.left
                    : anchorProps.right);
            props.maxWidth = Math.min(currentWidth, innerWidth - props.left);
        }
    }
}

export { getAnchorProps, getTargetProps, parsePosition, setPosition, validateCover, validateOffset, validatePosition };
