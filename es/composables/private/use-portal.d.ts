export default function (vm: any, innerRef: any, renderPortalContent: any, checkGlobalDialog?: any): {
    showPortal: () => void;
    hidePortal: () => void;
    portalIsActive: import("vue").Ref<boolean>;
    renderPortal: () => any;
};
