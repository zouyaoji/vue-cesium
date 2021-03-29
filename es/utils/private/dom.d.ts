export declare function offset(el: any): {
    top: any;
    left: any;
};
export declare function style(el: any, property: any): string;
export declare function height(el: any): any;
export declare function width(el: any): any;
export declare function css(element: any, css: any): void;
export declare function cssBatch(elements: any, style: any): void;
export declare function ready(fn: any): any;
export declare function getElement(el: any): any;
export declare function childHasFocus(el: any, focusedEl: any): boolean;
declare const _default: {
    offset: typeof offset;
    style: typeof style;
    height: typeof height;
    width: typeof width;
    css: typeof css;
    cssBatch: typeof cssBatch;
    ready: typeof ready;
};
export default _default;
