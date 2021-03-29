import { defineComponent, getCurrentInstance, provide, h } from 'vue';
import { useCommon } from '../composables/index';
import { mergeDescriptors } from '../utils/merge-descriptors';
import { position, plane } from '../utils/cesium-props';
import { vcKey } from '../utils/config';
import { getInstanceListener } from '../utils/private/vm';
import { hSlot } from '../utils/private/render';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var Entity = defineComponent({
    name: 'VcEntity',
    props: Object.assign(Object.assign(Object.assign({}, position), plane), { id: String, name: String, availability: Object, show: {
            type: Boolean,
            default: true
        }, description: [String, Object], orientation: Object, viewFrom: Object, parent: Object, billboard: Object, corridor: Object, cylinder: Object, ellipse: Object, ellipsoid: Object, box: Object, label: Object, model: Object, tileset: Object, path: Object, point: Object, polygon: Object, polyline: Object, properties: Object, polylineVolume: Object, rectangle: Object, wall: Object, enableEvent: {
            type: Boolean,
            default: true
        } }),
    emits: [
        'beforeLoad',
        'ready',
        'destroyed',
        'update:billboard',
        'update:box',
        'update:corridor',
        'update:cylinder',
        'update:ellipse',
        'update:ellipsoid',
        'update:ellipse',
        'update:label',
        'update:model',
        'update:path',
        'update:plane',
        'update:point',
        'update:polygon',
        'update:polyline',
        'update:polylineVolume',
        'update:rectangle',
        'update:tileset',
        'update:wall'
    ],
    setup(props, ctx) {
        const instance = getCurrentInstance();
        instance.cesiumClass = 'Entity';
        instance.cesiumEvents = ['definitionChanged'];
        const commonState = useCommon(props, ctx, instance);
        if (commonState === void 0) {
            return;
        }
        const { $services } = commonState;
        const { emit } = ctx;
        instance.mount = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const entity = (_a = $services === null || $services === void 0 ? void 0 : $services.entities) === null || _a === void 0 ? void 0 : _a.add(instance.cesiumObject);
            return $services === null || $services === void 0 ? void 0 : $services.entities.contains(entity);
        });
        instance.unmount = () => __awaiter(this, void 0, void 0, function* () {
            var _b;
            return (_b = $services === null || $services === void 0 ? void 0 : $services.entities) === null || _b === void 0 ? void 0 : _b.remove(instance.cesiumObject);
        });
        const updateGraphics = (graphics, emitType) => {
            const listener = getInstanceListener(instance, emitType);
            if (listener) {
                emit(emitType, graphics);
            }
            else {
                instance.cesiumObject[emitType.substr(7)] = graphics;
            }
            return true;
        };
        const getServices = () => {
            return mergeDescriptors($services, {
                get entity() {
                    return instance.cesiumObject;
                },
                get entityViewModel() {
                    return instance.proxy;
                }
            });
        };
        provide(vcKey, getServices());
        Object.assign(instance.proxy, {
            createPromise: commonState.createPromise,
            load: commonState.load,
            unload: commonState.unload,
            reload: commonState.reload,
            getCesiumObject: () => instance.cesiumObject,
            __updateGraphics: updateGraphics
        });
        return () => (h('i', {
            class: instance.proxy.$options.name,
            style: { display: 'none !important' }
        }, hSlot(ctx.slots.default)));
    }
});

Entity.install = (app) => {
    app.component(Entity.name, Entity);
};

export default Entity;
