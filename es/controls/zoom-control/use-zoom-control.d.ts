import { VcComponentInternalInstance } from '@vue-cesium/utils/types';
export default function (props: any, { emit }: {
    emit: any;
}, vcInstance: VcComponentInternalInstance, $services: any): {
    zoomIn: () => void;
    zoomOut: () => void;
    zoomReset: () => void;
    zoomInTooltipRef: import("vue").Ref<import("vue").DefineComponent<{
        maxHeight: {
            type: StringConstructor;
            default: any;
        };
        maxWidth: {
            type: StringConstructor;
            default: any;
        };
        transitionShow: {
            type: StringConstructor;
            default: string;
        };
        transitionHide: {
            type: StringConstructor;
            default: string;
        };
        anchor: {
            type: StringConstructor;
            default: string;
            validator: typeof import("@vue-cesium/utils/private/position-engine").validatePosition;
        };
        self: {
            type: StringConstructor;
            default: string;
            validator: typeof import("@vue-cesium/utils/private/position-engine").validatePosition;
        };
        offset: {
            type: ArrayConstructor;
            default: () => number[];
            validator: typeof import("@vue-cesium/utils/private/position-engine").validateOffset;
        };
        scrollTarget: ObjectConstructor;
        delay: {
            type: NumberConstructor;
            default: number;
        };
        hideDelay: {
            type: NumberConstructor;
            default: number;
        };
        persistent: {
            type: BooleanConstructor;
        };
        transitionDuration: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        modelValue: {
            type: BooleanConstructor;
            default: any;
        };
        target: {
            default: boolean;
        };
        noParentEvent: BooleanConstructor;
        contextMenu: BooleanConstructor;
    }, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        maxHeight: string;
        maxWidth: string;
        transitionShow: string;
        transitionHide: string;
        anchor: string;
        self: string;
        offset: unknown[];
        delay: number;
        hideDelay: number;
        persistent: boolean;
        transitionDuration: string | number;
        modelValue: boolean;
        target: boolean;
        noParentEvent: boolean;
        contextMenu: boolean;
    } & {
        scrollTarget?: Record<string, any>;
    }>, {
        maxHeight: string;
        maxWidth: string;
        transitionShow: string;
        transitionHide: string;
        anchor: string;
        self: string;
        offset: unknown[];
        delay: number;
        hideDelay: number;
        persistent: boolean;
        transitionDuration: string | number;
        modelValue: boolean;
        target: boolean;
        noParentEvent: boolean;
        contextMenu: boolean;
    }>>;
    zoomOutTooltipRef: import("vue").Ref<import("vue").DefineComponent<{
        maxHeight: {
            type: StringConstructor;
            default: any;
        };
        maxWidth: {
            type: StringConstructor;
            default: any;
        };
        transitionShow: {
            type: StringConstructor;
            default: string;
        };
        transitionHide: {
            type: StringConstructor;
            default: string;
        };
        anchor: {
            type: StringConstructor;
            default: string;
            validator: typeof import("@vue-cesium/utils/private/position-engine").validatePosition;
        };
        self: {
            type: StringConstructor;
            default: string;
            validator: typeof import("@vue-cesium/utils/private/position-engine").validatePosition;
        };
        offset: {
            type: ArrayConstructor;
            default: () => number[];
            validator: typeof import("@vue-cesium/utils/private/position-engine").validateOffset;
        };
        scrollTarget: ObjectConstructor;
        delay: {
            type: NumberConstructor;
            default: number;
        };
        hideDelay: {
            type: NumberConstructor;
            default: number;
        };
        persistent: {
            type: BooleanConstructor;
        };
        transitionDuration: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        modelValue: {
            type: BooleanConstructor;
            default: any;
        };
        target: {
            default: boolean;
        };
        noParentEvent: BooleanConstructor;
        contextMenu: BooleanConstructor;
    }, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        maxHeight: string;
        maxWidth: string;
        transitionShow: string;
        transitionHide: string;
        anchor: string;
        self: string;
        offset: unknown[];
        delay: number;
        hideDelay: number;
        persistent: boolean;
        transitionDuration: string | number;
        modelValue: boolean;
        target: boolean;
        noParentEvent: boolean;
        contextMenu: boolean;
    } & {
        scrollTarget?: Record<string, any>;
    }>, {
        maxHeight: string;
        maxWidth: string;
        transitionShow: string;
        transitionHide: string;
        anchor: string;
        self: string;
        offset: unknown[];
        delay: number;
        hideDelay: number;
        persistent: boolean;
        transitionDuration: string | number;
        modelValue: boolean;
        target: boolean;
        noParentEvent: boolean;
        contextMenu: boolean;
    }>>;
    resetTooltipRef: import("vue").Ref<import("vue").DefineComponent<{
        maxHeight: {
            type: StringConstructor;
            default: any;
        };
        maxWidth: {
            type: StringConstructor;
            default: any;
        };
        transitionShow: {
            type: StringConstructor;
            default: string;
        };
        transitionHide: {
            type: StringConstructor;
            default: string;
        };
        anchor: {
            type: StringConstructor;
            default: string;
            validator: typeof import("@vue-cesium/utils/private/position-engine").validatePosition;
        };
        self: {
            type: StringConstructor;
            default: string;
            validator: typeof import("@vue-cesium/utils/private/position-engine").validatePosition;
        };
        offset: {
            type: ArrayConstructor;
            default: () => number[];
            validator: typeof import("@vue-cesium/utils/private/position-engine").validateOffset;
        };
        scrollTarget: ObjectConstructor;
        delay: {
            type: NumberConstructor;
            default: number;
        };
        hideDelay: {
            type: NumberConstructor;
            default: number;
        };
        persistent: {
            type: BooleanConstructor;
        };
        transitionDuration: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        modelValue: {
            type: BooleanConstructor;
            default: any;
        };
        target: {
            default: boolean;
        };
        noParentEvent: BooleanConstructor;
        contextMenu: BooleanConstructor;
    }, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        maxHeight: string;
        maxWidth: string;
        transitionShow: string;
        transitionHide: string;
        anchor: string;
        self: string;
        offset: unknown[];
        delay: number;
        hideDelay: number;
        persistent: boolean;
        transitionDuration: string | number;
        modelValue: boolean;
        target: boolean;
        noParentEvent: boolean;
        contextMenu: boolean;
    } & {
        scrollTarget?: Record<string, any>;
    }>, {
        maxHeight: string;
        maxWidth: string;
        transitionShow: string;
        transitionHide: string;
        anchor: string;
        self: string;
        offset: unknown[];
        delay: number;
        hideDelay: number;
        persistent: boolean;
        transitionDuration: string | number;
        modelValue: boolean;
        target: boolean;
        noParentEvent: boolean;
        contextMenu: boolean;
    }>>;
};
