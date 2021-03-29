import { VcBtnOptions } from '@vue-cesium/utils/types';
import { PropType } from 'vue';
declare const defaultProps: {
    background: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    zoomInOptions: {
        type: PropType<VcBtnOptions>;
        default: () => {
            name: string;
            size: string;
            color: string;
            background: string;
            round: boolean;
            flat: boolean;
            label: any;
            stack: boolean;
            tooltip: {
                delay: number;
                anchor: string;
                offset: number[];
            };
        };
    };
    zoomOutOptions: {
        type: PropType<VcBtnOptions>;
        default: () => {
            name: string;
            size: string;
            color: string;
            background: string;
            round: boolean;
            flat: boolean;
            label: any;
            stack: boolean;
            tooltip: {
                delay: number;
                anchor: string;
                offset: number[];
            };
        };
    };
    zoomResetOptions: {
        type: PropType<VcBtnOptions>;
        default: () => {
            name: string;
            size: string;
            color: string;
            background: string;
            round: boolean;
            flat: boolean;
            label: any;
            stack: boolean;
            tooltip: {
                delay: number;
                anchor: string;
                offset: number[];
            };
        };
    };
    position: {
        type: PropType<string>;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: ArrayConstructor;
        validator: (v: any) => boolean;
    };
    enableResetButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomAmount: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    durationReset: {
        type: NumberConstructor;
    };
    defaultResetView: {
        type: ObjectConstructor;
        default: () => {
            position: {
                lng: number;
                lat: number;
                height: number;
            };
        };
    };
    overrideViewerCamera: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const defaultOptions: import("@vue-cesium/utils/types").AnyObject;
export { defaultProps, defaultOptions };
