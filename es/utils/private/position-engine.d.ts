export declare function validatePosition(pos: any): boolean;
export declare function validateOffset(val: any): boolean;
export declare function parsePosition(pos: any, rtl: any): {
    vertical: any;
    horizontal: any;
};
export declare function validateCover(val: any): boolean;
export declare function getAnchorProps(el: any, offset: any): {
    top: any;
    left: any;
    right: any;
    bottom: any;
    width: any;
    height: any;
    middle: any;
    center: any;
};
export declare function getTargetProps(el: any): {
    top: number;
    center: number;
    bottom: any;
    left: number;
    middle: number;
    right: any;
};
export declare function setPosition(cfg: any): void;
