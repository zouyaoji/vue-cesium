/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-11-25 22:01:04
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitive-collections\primitive-collection\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch, WatchStopHandle } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollections } from '@vue-cesium/composables'
import { show, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { addCustomProperty, kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import cloneDeep from 'lodash/cloneDeep'
import differenceBy from 'lodash/differenceBy'
import { PolygonPrimitive } from '@vue-cesium/shared'

export default defineComponent({
  name: 'VcCollectionPrimitive',
  props: {
    ...show,
    destroyPrimitives: {
      type: Boolean,
      default: true
    },
    ...enableMouseEvent,
    polygons: {
      type: Array,
      default: () => []
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PrimitiveCollection'
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance)

    if (primitiveCollectionsState === void 0) {
      return
    }

    // watcher
    instance.alreadyListening.push('polygons')
    let unwatchFns: Array<WatchStopHandle> = []

    unwatchFns.push(
      watch(
        () => cloneDeep(props.polygons),
        (newVal, oldVal) => {
          if (!instance.mounted) {
            return
          }
          const primitiveCollection = instance.cesiumObject as Cesium.PrimitiveCollection

          if (newVal.length === oldVal.length) {
            // 视为修改操作
            // Treated as modified
            const modifies: Array<any> = []
            for (let i = 0; i < newVal.length; i++) {
              const options = newVal[i]
              const oldOptions = oldVal[i]

              if (JSON.stringify(options) !== JSON.stringify(oldOptions)) {
                modifies.push({
                  newOptions: options,
                  oldOptions: oldOptions
                })
              }
            }

            modifies.forEach(modify => {
              const modifyPolygon = primitiveCollection._primitives.find(v => v._id === modify.oldOptions.id)
              modifyPolygon &&
                Object.keys(modify.newOptions).forEach(prop => {
                  if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
                    modifyPolygon[prop] = primitiveCollectionsState.transformProp(prop, modify.newOptions[prop])
                  }
                })
            })
          } else {
            const addeds: any = differenceBy(newVal, oldVal, 'id')
            const deletes: any = differenceBy(oldVal, newVal, 'id')
            const deletePolygons: Array<PolygonPrimitive> = []
            for (let i = 0; i < deletes.length; i++) {
              const deletePolygon = primitiveCollection._primitives.find((v: any) => v.id === deletes[i].id)
              deletePolygon && deletePolygons.push(deletePolygon)
            }

            deletePolygons.forEach(v => {
              primitiveCollection.remove(v)
            })

            addPolygons(primitiveCollection, addeds)
          }
        },
        {
          deep: true
        }
      )
    )

    // methods
    const addPolygons = (primitiveCollection: Cesium.PrimitiveCollection, polygons) => {
      for (let i = 0; i < polygons.length; i++) {
        const polygonOptions = polygons[i] as PolygonPrimitive
        polygonOptions.id = Cesium.defined(polygonOptions.id) ? polygonOptions.id : Cesium.createGuid()
        const polygonOptionsTransform = primitiveCollectionsState.transformProps(polygonOptions)
        const polygonPrimitive = new PolygonPrimitive(polygonOptionsTransform)
        ;(polygonPrimitive as any)._vcParent = primitiveCollection
        addCustomProperty(polygonPrimitive, polygonOptionsTransform)
        primitiveCollection.add(polygonPrimitive)
      }
    }

    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props)
      const primitiveCollection = new Cesium.PrimitiveCollection(options)
      addPolygons(primitiveCollection, props.polygons)
      return primitiveCollection
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    const name = instance.proxy?.$options.name || ''
    return () =>
      ctx.slots.default
        ? h(
            'i',
            {
              class: kebabCase(name),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(name))
  }
})
