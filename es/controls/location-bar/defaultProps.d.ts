import { PropType } from 'vue';
declare const _default: {
    gridFileUrl: {
        type: StringConstructor;
        default: string;
    };
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
    showCameraInfo: {
        type: PropType<boolean>;
        default: boolean;
    };
    showMouseInfo: {
        type: PropType<boolean>;
        default: boolean;
    };
    showPerformanceInfo: {
        type: PropType<boolean>;
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
};
export default _default;
