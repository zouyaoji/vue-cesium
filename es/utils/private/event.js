const listenOpts = {
    hasPassive: false,
    passiveCapture: true,
    notPassiveCapture: true,
    passive: undefined
};
try {
    const opts = Object.defineProperty({}, 'passive', {
        get() {
            Object.assign(listenOpts, {
                hasPassive: true,
                passive: { passive: true },
                notPassive: { passive: false },
                passiveCapture: { passive: true, capture: true },
                notPassiveCapture: { passive: false, capture: true }
            });
        }
    });
    window.addEventListener('qtest', null, opts);
    window.removeEventListener('qtest', null, opts);
}
catch (e) { }
function noop() { }
function leftClick(e) {
    return e.button === 0;
}
function middleClick(e) {
    return e.button === 1;
}
function rightClick(e) {
    return e.button === 2;
}
function position(e) {
    if (e.touches && e.touches[0]) {
        e = e.touches[0];
    }
    else if (e.changedTouches && e.changedTouches[0]) {
        e = e.changedTouches[0];
    }
    else if (e.targetTouches && e.targetTouches[0]) {
        e = e.targetTouches[0];
    }
    return {
        top: e.clientY,
        left: e.clientX
    };
}
function getEventPath(e) {
    if (e.path) {
        return e.path;
    }
    if (e.composedPath) {
        return e.composedPath();
    }
    const path = [];
    let el = e.target;
    while (el) {
        path.push(el);
        if (el.tagName === 'HTML') {
            path.push(document);
            path.push(window);
            return path;
        }
        el = el.parentElement;
    }
}
const LINE_HEIGHT = 40, PAGE_HEIGHT = 800;
function getMouseWheelDistance(e) {
    let x = e.deltaX, y = e.deltaY;
    if ((x || y) && e.deltaMode) {
        const multiplier = e.deltaMode === 1 ? LINE_HEIGHT : PAGE_HEIGHT;
        x *= multiplier;
        y *= multiplier;
    }
    if (e.shiftKey && !x) {
        [y, x] = [x, y];
    }
    return { x, y };
}
function stop(e) {
    e.stopPropagation();
}
function prevent(e) {
    e.cancelable !== false && e.preventDefault();
}
function stopAndPrevent(e) {
    e.cancelable !== false && e.preventDefault();
    e.stopPropagation();
}
function preventDraggable(el, status) {
    if (el === void 0 || (status === true && el.__dragPrevented === true)) {
        return;
    }
    const fn = status === true
        ? el => {
            el.__dragPrevented = true;
            el.addEventListener('dragstart', prevent, listenOpts.notPassiveCapture);
        }
        : el => {
            delete el.__dragPrevented;
            el.removeEventListener('dragstart', prevent, listenOpts.notPassiveCapture);
        };
    el.querySelectorAll('a, img').forEach(fn);
}
function addEvt(ctx, targetName, events) {
    const name = `__vc_${targetName}_evt`;
    ctx[name] = ctx[name] !== void 0 ? ctx[name].concat(events) : events;
    events.forEach(evt => {
        evt[0].addEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
    });
}
function cleanEvt(ctx, targetName) {
    const name = `__vc_${targetName}_evt`;
    if (ctx[name] !== void 0) {
        ctx[name].forEach(evt => {
            evt[0].removeEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
        });
        ctx[name] = void 0;
    }
}
var event = {
    listenOpts,
    leftClick,
    middleClick,
    rightClick,
    position,
    getEventPath,
    getMouseWheelDistance,
    stop,
    prevent,
    stopAndPrevent,
    preventDraggable
};

export default event;
export { addEvt, cleanEvt, getEventPath, getMouseWheelDistance, leftClick, listenOpts, middleClick, noop, position, prevent, preventDraggable, rightClick, stop, stopAndPrevent };
