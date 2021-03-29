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

const directions = ['left', 'right', 'up', 'down', 'horizontal', 'vertical'];
const modifiersAll = {
    left: true,
    right: true,
    up: true,
    down: true,
    horizontal: true,
    vertical: true,
    all: true
};
function getModifierDirections(mod) {
    const dir = {};
    directions.forEach(direction => {
        if (mod[direction]) {
            dir[direction] = true;
        }
    });
    if (Object.keys(dir).length === 0) {
        return modifiersAll;
    }
    if (dir.horizontal === true) {
        dir.left = dir.right = true;
    }
    if (dir.vertical === true) {
        dir.up = dir.down = true;
    }
    if (dir.left === true && dir.right === true) {
        dir.horizontal = true;
    }
    if (dir.up === true && dir.down === true) {
        dir.vertical = true;
    }
    if (dir.horizontal === true && dir.vertical === true) {
        dir.all = true;
    }
    return dir;
}
const getTouchTarget = (platform().isIOS || window.navigator.vendor.toLowerCase().indexOf('apple') > -1)
    ? () => document
    : target => target;
function shouldStart(evt, ctx) {
    return (ctx.event === void 0 &&
        evt.target !== void 0 &&
        evt.target.draggable !== true &&
        typeof ctx.handler === 'function' &&
        evt.target.nodeName.toUpperCase() !== 'INPUT' &&
        (evt.qClonedBy === void 0 || evt.qClonedBy.indexOf(ctx.uid) === -1));
}

export { getModifierDirections, getTouchTarget, shouldStart };
