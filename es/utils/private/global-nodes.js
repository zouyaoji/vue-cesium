const globalNodes = [];
let target = document.body;
function createGlobalNode(id) {
    const el = document.createElement('div');
    if (id !== void 0) {
        el.id = id;
    }
    target.appendChild(el);
    globalNodes.push(el);
    return el;
}
function removeGlobalNode(el) {
    globalNodes.splice(globalNodes.indexOf(el), 1);
    el.remove();
}
function changeGlobalNodesTarget(el) {
    if (el !== target) {
        target = el;
        globalNodes.forEach(el => {
            if (el.contains(target) === false) {
                target.appendChild(el);
            }
        });
    }
}

export { changeGlobalNodesTarget, createGlobalNode, removeGlobalNode };
