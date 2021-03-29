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

function clearSelection() {
    if (window.getSelection !== void 0) {
        const selection = window.getSelection();
        if (selection.empty !== void 0) {
            selection.empty();
        }
        else if (selection.removeAllRanges !== void 0) {
            selection.removeAllRanges();
            platform().isPhone !== true && selection.addRange(document.createRange());
        }
    }
    else if (document.selection !== void 0) {
        document.selection.empty();
    }
}

export { clearSelection };
