declare class CameraFlightPath {
    static createTween(scene: any, options: any): {
        startObject: {};
        stopObject: {};
        duration: number;
        complete: any;
        cancel: any;
    } | {
        duration: any;
        easingFunction: any;
        startObject: {
            time: number;
        };
        stopObject: {
            time: any;
        };
        update: any;
        complete: () => void;
        cancel: () => void;
    };
}
export default CameraFlightPath;
