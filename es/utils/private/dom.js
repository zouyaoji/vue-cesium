import { isRef } from 'vue';

function offset(el) {
    if (el === window) {
        return { top: 0, left: 0 };
    }
    const { top, left } = el.getBoundingClientRect();
    return { top, left };
}
function style(el, property) {
    return window.getComputedStyle(el).getPropertyValue(property);
}
function height(el) {
    return el === window ? window.innerHeight : el.getBoundingClientRect().height;
}
function width(el) {
    return el === window ? window.innerWidth : el.getBoundingClientRect().width;
}
function css(element, css) {
    const style = element.style;
    Object.keys(css).forEach(prop => {
        style[prop] = css[prop];
    });
}
function cssBatch(elements, style) {
    elements.forEach(el => css(el, style));
}
function ready(fn) {
    if (typeof fn !== 'function') {
        return;
    }
    if (document.readyState !== 'loading') {
        return fn();
    }
    document.addEventListener('DOMContentLoaded', fn, false);
}
function getElement(el) {
    if (el === void 0 || el === null) {
        return void 0;
    }
    if (typeof el === 'string') {
        try {
            return document.querySelector(el) || void 0;
        }
        catch (err) {
            return void 0;
        }
    }
    const target = isRef(el) === true ? el.value : el;
    if (target) {
        return target.$el || target;
    }
}
function childHasFocus(el, focusedEl) {
    if (el === void 0 || el.contains(focusedEl) === true) {
        return true;
    }
    for (let next = el.nextElementSibling; next !== null; next = next.nextElementSibling) {
        if (next.contains(focusedEl)) {
            return true;
        }
    }
    return false;
}
var dom = {
    offset,
    style,
    height,
    width,
    css,
    cssBatch,
    ready
};

export default dom;
export { childHasFocus, css, cssBatch, getElement, height, offset, ready, style, width };
