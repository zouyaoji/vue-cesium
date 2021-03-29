export declare const listenOpts: {
    hasPassive: boolean;
    passiveCapture: boolean;
    notPassiveCapture: boolean;
    passive: any;
};
export declare function noop(): void;
export declare function leftClick(e: any): boolean;
export declare function middleClick(e: any): boolean;
export declare function rightClick(e: any): boolean;
export declare function position(e: any): {
    top: any;
    left: any;
};
export declare function getEventPath(e: any): any;
export declare function getMouseWheelDistance(e: any): {
    x: any;
    y: any;
};
export declare function stop(e: any): void;
export declare function prevent(e: any): void;
export declare function stopAndPrevent(e: any): void;
export declare function preventDraggable(el: any, status: any): void;
export declare function addEvt(ctx: any, targetName: any, events: any): void;
export declare function cleanEvt(ctx: any, targetName: any): void;
declare const _default: {
    listenOpts: {
        hasPassive: boolean;
        passiveCapture: boolean;
        notPassiveCapture: boolean;
        passive: any;
    };
    leftClick: typeof leftClick;
    middleClick: typeof middleClick;
    rightClick: typeof rightClick;
    position: typeof position;
    getEventPath: typeof getEventPath;
    getMouseWheelDistance: typeof getMouseWheelDistance;
    stop: typeof stop;
    prevent: typeof prevent;
    stopAndPrevent: typeof stopAndPrevent;
    preventDraggable: typeof preventDraggable;
};
export default _default;
