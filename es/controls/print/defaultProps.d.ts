declare const _default: {
    name: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: () => {
            delay: number;
            anchor: string;
            offset: number[];
        };
    };
    position: {
        type: import("vue").PropType<string>;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: ArrayConstructor;
        validator: (v: any) => boolean;
    };
    showCredit: {
        type: BooleanConstructor;
        default: boolean;
    };
    printAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPrintView: {
        type: BooleanConstructor;
        default: boolean;
    };
    downloadAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export default _default;
