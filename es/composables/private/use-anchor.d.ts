export declare const useAnchorProps: {
    target: {
        default: boolean;
    };
    noParentEvent: BooleanConstructor;
    contextMenu: BooleanConstructor;
};
export default function ({ showing, avoidEmit, configureAnchorEl }: {
    showing: any;
    avoidEmit: any;
    configureAnchorEl: any;
}): {
    anchorEl: any;
    canShow: (evt: any) => boolean;
    anchorEvents: any;
};
