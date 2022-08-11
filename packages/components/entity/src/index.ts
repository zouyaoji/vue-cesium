import type { PropType, VNode } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import type {
  AnyObject,
  EntityEmitType,
  VcCallbackPropertyFunction,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcGraphics,
  VcPickEvent,
  VcPosition,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables/index'
import { position, enableMouseEvent, show, viewFrom } from '@vue-cesium/utils/cesium-props'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'
import { hSlot } from '@vue-cesium/utils/private/render'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits, pickEventEmits } from '@vue-cesium/utils/emits'
import {
  VcGraphicsBillboardProps,
  VcGraphicsBoxProps,
  VcGraphicsCorridorProps,
  VcGraphicsCylinderProps,
  VcGraphicsEllipseProps,
  VcGraphicsEllipsoidProps,
  VcGraphicsEllipsoidRef,
  VcGraphicsLabelProps,
  VcGraphicsModelProps,
  VcGraphicsPathProps,
  VcGraphicsPlaneProps,
  VcGraphicsPointProps,
  VcGraphicsPolygonProps,
  VcGraphicsPolylineProps,
  VcGraphicsPolylineVolumeProps,
  VcGraphicsRectangleProps,
  VcGraphicsTilesetProps,
  VcGraphicsWallProps
} from '../../graphics'

export const entityProps = {
  id: String,
  name: String,
  availability: Object as PropType<Cesium.TimeIntervalCollection>,
  ...show,
  description: [String, Object] as PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>>,
  ...position,
  orientation: Object as PropType<Cesium.Quaternion | Cesium.VelocityOrientationProperty | Cesium.CallbackProperty>,
  ...viewFrom,
  parent: Object as PropType<Cesium.Entity>,
  billboard: Object as PropType<Cesium.BillboardGraphics | VcGraphicsBillboardProps>,
  box: Object as PropType<Cesium.BoxGraphics | VcGraphicsBoxProps>,
  corridor: Object as PropType<Cesium.CorridorGraphics | VcGraphicsCorridorProps>,
  cylinder: Object as PropType<Cesium.CylinderGraphics | VcGraphicsCylinderProps>,
  ellipse: Object as PropType<Cesium.EllipseGraphics | VcGraphicsEllipseProps>,
  ellipsoid: Object as PropType<Cesium.EllipsoidGraphics | VcGraphicsEllipsoidRef>,
  label: Object as PropType<Cesium.LabelGraphics | VcGraphicsLabelProps>,
  model: Object as PropType<Cesium.ModelGraphics | VcGraphicsModelProps>,
  tileset: Object as PropType<Cesium.Cesium3DTilesetGraphics | VcGraphicsTilesetProps>,
  path: Object as PropType<Cesium.PathGraphics | VcGraphicsPathProps>,
  plane: Object as PropType<Cesium.PlaneGraphics | VcGraphicsPlaneProps>,
  point: Object as PropType<Cesium.PointGraphics | VcGraphicsPointProps>,
  polygon: Object as PropType<Cesium.PolygonGraphics | VcGraphicsPolygonProps>,
  polyline: Object as PropType<Cesium.PolylineGraphics | VcGraphicsPolylineProps>,
  properties: Object,
  polylineVolume: Object as PropType<Cesium.PolylineVolumeGraphics | VcGraphicsPolylineVolumeProps>,
  rectangle: Object as PropType<Cesium.RectangleGraphics | VcGraphicsRectangleProps>,
  wall: Object as PropType<Cesium.WallGraphics | VcGraphicsWallProps>,
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

export type VcEntityEmits = typeof emits

export type VcEntityProps = {
  /**
   * A unique identifier for this object. If none is provided, a GUID is generated.
   */
  id?: string
  /**
   * A human readable name to display to users. It does not have to be unique.
   */
  name?: string
  /**
   * The availability, if any, associated with this object.
   */
  availability?: Cesium.TimeIntervalCollection
  /**
   * A boolean value indicating if the entity and its children are displayed.
   */
  show?: boolean
  /**
   * A string Property specifying an HTML description for this entity.
   */
  description?: string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>
  /**
   * A Property specifying the entity position.
   */
  position?: VcPosition
  /**
   * A Property specifying the entity orientation.
   */
  orientation?: Cesium.Quaternion | Cesium.VelocityOrientationProperty | Cesium.CallbackProperty
  /**
   * A suggested initial offset for viewing this object.
   */
  viewFrom?: VcPosition | Cesium.CallbackProperty
  /**
   * A parent entity to associate with this entity.
   */
  parent?: Cesium.Entity
  /**
   * A billboard to associate with this entity.
   */
  billboard?: Cesium.BillboardGraphics | VcGraphicsBillboardProps
  /**
   * A box to associate with this entity.
   */
  box?: Cesium.BoxGraphics | VcGraphicsBoxProps
  /**
   * A corridor to associate with this entity.
   */
  corridor?: Cesium.CorridorGraphics | VcGraphicsCorridorProps
  /**
   * A cylinder to associate with this entity.
   */
  cylinder?: Cesium.CylinderGraphics | VcGraphicsCylinderProps
  /**
   * A ellipse to associate with this entity.
   */
  ellipse?: Cesium.EllipseGraphics | VcGraphicsEllipseProps
  /**
   * A ellipsoid to associate with this entity.
   */
  ellipsoid?: Cesium.EllipsoidGraphics | VcGraphicsEllipsoidProps
  /**
   * A options.label to associate with this entity.
   */
  label?: Cesium.LabelGraphics | VcGraphicsLabelProps
  /**
   * A model to associate with this entity.
   */
  model?: Cesium.ModelGraphics | VcGraphicsModelProps
  /**
   * A 3D Tiles tileset to associate with this entity.
   */
  tileset?: Cesium.Cesium3DTilesetGraphics | VcGraphicsTilesetProps
  /**
   * A path to associate with this entity.
   */
  path?: Cesium.PathGraphics | VcGraphicsPathProps
  /**
   * A plane to associate with this entity.
   */
  plane?: Cesium.PlaneGraphics | VcGraphicsPlaneProps
  /**
   * A point to associate with this entity.
   */
  point?: Cesium.PointGraphics | VcGraphicsPointProps
  /**
   * A polygon to associate with this entity.
   */
  polygon?: Cesium.PolygonGraphics | VcGraphicsPolygonProps
  /**
   * A polyline to associate with this entity.
   */
  polyline?: Cesium.PolylineGraphics | VcGraphicsPolylineProps
  /**
   * Arbitrary properties to associate with this entity.
   */
  properties?: AnyObject
  /**
   * A polylineVolume to associate with this entity.
   */
  polylineVolume?: Cesium.PolylineVolumeGraphics | VcGraphicsPolylineVolumeProps
  /**
   * A rectangle to associate with this entity.
   */
  rectangle?: Cesium.RectangleGraphics | VcGraphicsRectangleProps
  /**
   * A wall to associate with this entity.
   */
  wall?: Cesium.WallGraphics | VcGraphicsWallProps
  /**
   * Triggers before the VcEntity is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcEntity is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcEntity is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
  /**
   * Triggers when the mouse is pressed on this entity.
   */
  onMousedown?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse bounces up on this entity.
   */
  onMouseup?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks on this entity.
   */
  onClick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks outside this entity.
   */
  onClickout?: (evt: VcPickEvent) => void
  /**
   * Triggers when the left mouse button double-clicks this entity.
   */
  onDblclick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves on this entity.
   */
  onMousemove?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves over to this entity.
   */
  onMouseover?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves out of this entity.
   */
  onMouseout?: (evt: VcPickEvent) => void
}
export interface VcEntityRef extends VcComponentPublicInstance<VcEntityProps> {
  /**
   * private method, update graphic.
   * @param graphics
   * @param type
   */
  __updateGraphics: (graphics: VcGraphics | undefined, type: EntityEmitType) => boolean
}

export interface VcEntitySlots {
  /**
   * Slot for vc-graphics-xxx.
   */
  default: () => VNode[]
}
