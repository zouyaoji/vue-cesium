import { Ref } from 'vue';
import { AnyFunction, VcComponentInternalInstance } from '../types';
export declare function getParentVm(vm: any): any;
export declare function getNormalizedVNodes(vnodes: any): unknown[];
export declare function vmHasRouter(vm: any): boolean;
export declare function vmHasListener(vm: any, listenerName: any): boolean;
export declare function getInstanceListener(vcInstance: VcComponentInternalInstance, listenerName: string): AnyFunction;
export declare function $<T>(ref: Ref<T>): T;
export declare function getVcParentInstance(instance: VcComponentInternalInstance): VcComponentInternalInstance;
