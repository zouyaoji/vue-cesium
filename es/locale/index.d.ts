export declare type TranslatePair = {
    [key: string]: string | string[] | TranslatePair;
};
export declare type Language = {
    name: string;
    nativeName: string;
    vc: TranslatePair;
};
export declare const i18n: (fn: (...args: any[]) => string) => void;
export declare const t: (...args: any[]) => string;
export declare const use: (l: Language) => void;
declare const _default: {
    use: (l: Language) => void;
    t: (...args: any[]) => string;
    i18n: (fn: (...args: any[]) => string) => void;
};
export default _default;
