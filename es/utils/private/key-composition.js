let lastKeyCompositionStatus = false;
function onKeyDownComposition(evt) {
    lastKeyCompositionStatus = evt.isComposing === true;
}
function shouldIgnoreKey(evt) {
    return lastKeyCompositionStatus === true || evt !== Object(evt) || evt.isComposing === true || evt.qKeyEvent === true;
}
function isKeyCode(evt, keyCodes) {
    return shouldIgnoreKey(evt) === true ? false : [].concat(keyCodes).includes(evt.keyCode);
}

export { isKeyCode, onKeyDownComposition, shouldIgnoreKey };
