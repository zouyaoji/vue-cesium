declare const _default: {
    position: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: ArrayConstructor;
        validator: (v: any) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    barBackground: {
        type: StringConstructor;
        default: string;
    };
};
export default _default;
