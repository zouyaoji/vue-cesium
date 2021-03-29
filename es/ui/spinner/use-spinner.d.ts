export declare const useSpinnerProps: {
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    color: StringConstructor;
};
export default function useSpinner(props: any): {
    cSize: import("vue").ComputedRef<any>;
    classes: import("vue").ComputedRef<string>;
};
