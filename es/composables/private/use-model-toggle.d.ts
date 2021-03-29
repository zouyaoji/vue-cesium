export declare const useModelToggleProps: {
    modelValue: {
        type: BooleanConstructor;
        default: any;
    };
};
export declare const useModelToggleEmits: string[];
export default function ({ showing, canShow, hideOnRouteChange, handleShow, handleHide, processOnMount }: {
    showing: any;
    canShow: any;
    hideOnRouteChange: any;
    handleShow: any;
    handleHide: any;
    processOnMount: any;
}): {
    show: (evt: any) => void;
    hide: (evt?: any) => void;
    toggle: (evt: any) => void;
};
