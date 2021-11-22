/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-19 22:09:27
 * @LastEditTime: 2021-11-22 13:25:29
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitive-collections\polygon\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance, onUnmounted, PropType, watch, WatchStopHandle } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollectionItems } from '@vue-cesium/composables'
import { color, id, show, enableMouseEvent, positions, classificationType, polygonHierarchy } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { PolygonPrimitive } from '@vue-cesium/shared'
import { makeCartesian3Array, makeColor } from '@vue-cesium/utils/cesium-helpers'

export default defineComponent({
  name: 'VcPolygon',
  props: {
    ...positions,
    ...polygonHierarchy,
    ...color,
    ...show,
    ...id,
    ...classificationType,
    ...enableMouseEvent,
    depthFailColor: {
      type: [Object, String, Array, Function] as PropType<Cesium.Color>,
      default: 'white',
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolygonPrimitive'
    const primitiveCollectionItemsState = usePrimitiveCollectionItems(props, ctx, instance)

    if (primitiveCollectionItemsState === void 0) {
      return
    }

    // watcch
    let unwatchFns: Array<WatchStopHandle> = []
    unwatchFns.push(
      watch(
        () => props.positions,
        val => {
          const polygonPrimitive = instance.cesiumObject as PolygonPrimitive
          polygonPrimitive.positions = makeCartesian3Array(val!) as Array<Cesium.Cartesian3>
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.color,
        val => {
          const polygonPrimitive = instance.cesiumObject as PolygonPrimitive
          polygonPrimitive.color = makeColor(val) as Cesium.Color
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.depthFailColor,
        val => {
          const polygonPrimitive = instance.cesiumObject as PolygonPrimitive
          polygonPrimitive.depthFailColor = makeColor(val) as Cesium.Color
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.show,
        val => {
          const polygonPrimitive = instance.cesiumObject as PolygonPrimitive
          polygonPrimitive.show = val
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.classificationType,
        val => {
          const polygonPrimitive = instance.cesiumObject as PolygonPrimitive
          polygonPrimitive.classificationType = val as number
        }
      )
    )

    // methods
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionItemsState.transformProps(props)
      return new PolygonPrimitive(options)
    }

    instance.mount = async () => {
      const primitives = primitiveCollectionItemsState.$services.primitives
      const collectionItem = instance.cesiumObject
      ;(collectionItem as any)._vcParent = primitives
      return primitives && primitives.add(collectionItem)
    }

    instance.unmount = async () => {
      const primitives = primitiveCollectionItemsState.$services.primitives
      const collectionItem = instance.cesiumObject
      return primitives && !primitives.isDestroyed() && primitives.remove(collectionItem)
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})
