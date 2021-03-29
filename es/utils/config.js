const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
let $VueCesium = {};
const setConfig = (option) => {
    $VueCesium = option;
};
const getConfig = (key) => {
    return $VueCesium[key];
};
const vcKey = hasSymbol ? Symbol('VueCesium') : 'VueCesium';

export { getConfig, setConfig, vcKey };
