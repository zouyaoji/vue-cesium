const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
function humanStorageSize(bytes) {
    let u = 0;
    while (parseInt(bytes, 10) >= 1024 && u < units.length - 1) {
        bytes /= 1024;
        ++u;
    }
    return `${bytes.toFixed(1)}${units[u]}`;
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function between(v, min, max) {
    return max <= min ? min : Math.min(max, Math.max(min, v));
}
function normalizeToInterval(v, min, max) {
    if (max <= min) {
        return min;
    }
    const size = max - min + 1;
    let index = min + ((v - min) % size);
    if (index < min) {
        index = size + index;
    }
    return index === 0 ? 0 : index;
}
function pad(v, length = 2, char = '0') {
    if (v === void 0 || v === null) {
        return v;
    }
    const val = '' + v;
    return val.length >= length ? val : new Array(length - val.length + 1).join(char) + val;
}
var format = {
    humanStorageSize,
    capitalize,
    between,
    normalizeToInterval,
    pad
};

export default format;
export { between, capitalize, humanStorageSize, normalizeToInterval, pad };
