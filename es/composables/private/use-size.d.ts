export declare const useSizeDefaults: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export declare const useSizeProps: {
    size: StringConstructor;
};
export default function (props: any, sizes?: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}): import("vue").ComputedRef<{
    fontSize: any;
}>;
