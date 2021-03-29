export default function (): {
    registerTick(fn: any): void;
    removeTick(): void;
    prepareTick(): void;
};
