import { CSSProperties, PropType } from 'vue';
import { VcViewerProvider } from '@vue-cesium/utils/types';
export declare const positionProps: {
    position: {
        type: PropType<string>;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: ArrayConstructor;
        validator: (v: any) => boolean;
    };
};
export default function (props: any, $services: VcViewerProvider): {
    attach: import("vue").ComputedRef<{
        top: boolean;
        right: boolean;
        bottom: boolean;
        left: boolean;
        vertical: boolean;
        horizontal: boolean;
    }>;
    style: import("vue").ComputedRef<CSSProperties>;
    classes: import("vue").ComputedRef<string>;
};
