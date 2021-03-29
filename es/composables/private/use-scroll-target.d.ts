export default function (props: any, configureScrollTarget: any): {
    localScrollTarget: any;
    unconfigureScrollTarget: () => void;
    changeScrollEvent: (scrollTarget: any, fn?: any) => void;
};
