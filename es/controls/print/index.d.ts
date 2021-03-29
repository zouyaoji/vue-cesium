declare const _default: import("vue").DefineComponent<{
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
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("beforeLoad" | "ready" | "destroyed" | "printEvt")[], "beforeLoad" | "ready" | "destroyed" | "printEvt", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name: string;
    size: string;
    color: string;
    background: string;
    round: boolean;
    flat: boolean;
    stack: boolean;
    tooltip: {
        delay: number;
        anchor: string;
        offset: number[];
    };
    position: string;
    showCredit: boolean;
    printAutomatically: boolean;
    showPrintView: boolean;
    downloadAutomatically: boolean;
} & {
    label?: string;
    offset?: unknown[];
}>, {
    name: string;
    size: string;
    color: string;
    background: string;
    round: boolean;
    flat: boolean;
    stack: boolean;
    tooltip: {
        delay: number;
        anchor: string;
        offset: number[];
    };
    position: string;
    showCredit: boolean;
    printAutomatically: boolean;
    showPrintView: boolean;
    downloadAutomatically: boolean;
}>;
export default _default;
