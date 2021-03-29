export declare const useBtnProps: {
    type: {
        type: StringConstructor;
        default: string;
    };
    label: (StringConstructor | NumberConstructor)[];
    icon: StringConstructor;
    iconRight: StringConstructor;
    round: BooleanConstructor;
    outline: BooleanConstructor;
    flat: BooleanConstructor;
    unelevated: BooleanConstructor;
    rounded: BooleanConstructor;
    push: BooleanConstructor;
    glossy: BooleanConstructor;
    size: StringConstructor;
    fab: BooleanConstructor;
    fabMini: BooleanConstructor;
    padding: StringConstructor;
    color: StringConstructor;
    textColor: StringConstructor;
    noCaps: BooleanConstructor;
    noWrap: BooleanConstructor;
    dense: BooleanConstructor;
    tabindex: (StringConstructor | NumberConstructor)[];
    ripple: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
    align: {
        default: string;
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
    stack: BooleanConstructor;
    stretch: BooleanConstructor;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    disable: BooleanConstructor;
};
export default function (props: any): {
    classes: import("vue").ComputedRef<string>;
    style: import("vue").ComputedRef<{}>;
    innerClasses: import("vue").ComputedRef<string>;
    attributes: import("vue").ComputedRef<any>;
    isActionable: import("vue").ComputedRef<boolean>;
};
