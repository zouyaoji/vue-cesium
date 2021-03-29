export declare const useTransitionProps: {
    transitionShow: {
        type: StringConstructor;
        default: string;
    };
    transitionHide: {
        type: StringConstructor;
        default: string;
    };
    transitionDuration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
};
export default function (props: any, showing: any): {
    transition: import("vue").ComputedRef<string>;
    transitionStyle: import("vue").ComputedRef<string>;
};
