export declare const alignMap: {
    left: string;
    center: string;
    right: string;
    between: string;
    around: string;
    evenly: string;
    stretch: string;
};
export declare const alignValues: string[];
export declare const useAlignProps: {
    align: {
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
};
export default function (props: any): import("vue").ComputedRef<string>;
