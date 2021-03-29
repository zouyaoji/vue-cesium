import { VcComponentInternalInstance } from '@vue-cesium/utils/types';
export default function (props: any, { emit }: {
    emit: any;
}, vcInstance: VcComponentInternalInstance): {
    heading: import("vue").Ref<number>;
    orbitCursorAngle: import("vue").Ref<number>;
    orbitCursorOpacity: import("vue").Ref<number>;
    handleDoubleClick: (e: any) => boolean;
    handleMouseDown: (e: MouseEvent | TouchEvent) => boolean;
    resetRotater: () => void;
    onTooltipBeforeShow: (e: any) => void;
    viewerChange: (instance: VcComponentInternalInstance) => void;
    load: (viewer: any) => Promise<boolean>;
    unload: () => Promise<boolean>;
    iconOuterTooltipRef: import("vue").Ref<import("vue").DefineComponent<{
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
    iconInnerTooltipRef: import("vue").Ref<import("vue").DefineComponent<{
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
