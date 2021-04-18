import type { Options } from './type';
export declare function hyphenate(str: string): string;
export declare function checkArray<T extends Array<unknown>>(item: T): T | undefined;
export declare function isFunction(val: unknown): val is Function;
export declare function getComponentsName(options: Options, title: string | undefined, fileName: string, path: string): string;
export declare function getDocUrl(options: Options, fileName: string, header?: string, path?: string): string | undefined;
