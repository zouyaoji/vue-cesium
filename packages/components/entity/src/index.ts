import type { ExtractPropTypes, PropType, ExtractDefaultPropTypes } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import type { EntityEmitType, VcComponentInternalInstance, VcComponentPublicInstance, VcGraphics } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables/index'
import { position, plane, enableMouseEvent, show, viewFrom } from '@vue-cesium/utils/cesium-props'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'
import { hSlot } from '@vue-cesium/utils/private/render'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits, pickEventEmits } from '@vue-cesium/utils/emits'
import { VcGraphicsBillboardProps } from '../../graphics'

export const entityProps = {
  id: String,
  name: String,
  availability: Object as PropType<Cesium.TimeIntervalCollection>,
  ...show,
  description: [String, Object],
  ...position,
  orientation: Object,
  ...viewFrom,
  parent: Object,
  billboard: Object as PropType<VcGraphicsBillboardProps>,
  corridor: Object,
  cylinder: Object,
  ellipse: Object,
  ellipsoid: Object,
  box: Object,
  label: Object,
  model: Object,
  tileset: Object,
  path: Object,
  ...plane,
  point: Object,
  polygon: Object,
  polyline: Object,
  properties: Object,
  polylineVolume: Object,
  rectangle: Object,
  wall: Object,
  ...enableMouseEvent
}

const emits = {
  ...commonEmits,
  ...pickEventEmits,
  definitionChanged: (property: Cesium.Property) => true,
  'update:billboard': (payload: Cesium.BillboardGraphics) => true,
  'update:box': (payload: Cesium.BoxGraphics) => true,
  'update:corridor': (payload: Cesium.CorridorGraphics) => true,
  'update:cylinder': (payload: Cesium.CylinderGraphics) => true,
  'update:ellipse': (payload: Cesium.EllipseGraphics) => true,
  'update:ellipsoid': (payload: Cesium.EllipsoidGraphics) => true,
  'update:label': (payload: Cesium.LabelGraphics) => true,
  'update:model': (payload: Cesium.ModelGraphics) => true,
  'update:path': (payload: Cesium.PathGraphics) => true,
  'update:plane': (payload: Cesium.PlaneGraphics) => true,
  'update:point': (payload: Cesium.PointGraphics) => true,
  'update:polygon': (payload: Cesium.PolygonGraphics) => true,
  'update:polyline': (payload: Cesium.PolylineGraphics) => true,
  'update:polylineVolume': (payload: Cesium.PolylineVolumeGraphics) => true,
  'update:rectangle': (payload: Cesium.RectangleGraphics) => true,
  'update:tileset': (payload: any) => true,
  'update:wall': (payload: Cesium.WallGraphics) => true
}

export default defineComponent({
  name: 'VcEntity',
  props: entityProps,
  emits: emits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Entity'
    instance.cesiumEvents = ['definitionChanged']
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx

    // methods
    instance.mount = async () => {
      const entity = $services?.entities?.add(instance.cesiumObject as Cesium.Entity)
      return $services?.entities.contains(entity)
    }

    instance.unmount = async () => {
      return $services?.entities?.remove(instance.cesiumObject as Cesium.Entity)
    }

    const updateGraphics = (graphics, emitType) => {
      const listener = getInstanceListener(instance, emitType)
      if (listener) {
        emit(emitType, graphics)
      } else {
        instance.cesiumObject && (instance.cesiumObject[emitType.substring(7)] = graphics)
      }
      graphics && (graphics._vcParent = instance.cesiumObject)
      return true
    }

    // expose public methods
    Object.assign(instance.proxy, {
      // private but needed by VcGraphicsXXX
      __updateGraphics: updateGraphics
    })

    return () =>
      ctx.slots.default
        ? h(
            'i',
            {
              class: kebabCase(instance.proxy?.$options.name || ''),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcEntityProps = ExtractPropTypes<typeof entityProps>
export type VcEntityEmits = typeof emits

export interface VcEntityRef extends VcComponentPublicInstance<VcEntityProps> {
  /**
   * private method, update graphic.
   * @param graphics
   * @param type
   */
  __updateGraphics: (graphics: VcGraphics | undefined, type: EntityEmitType) => boolean
}
