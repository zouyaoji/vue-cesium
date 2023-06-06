/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-05-31 16:51:54
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2023-06-06 01:29:54
 * @FilePath: \vue-cesium\packages\components\primitives\primitive-cluster\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, PropType, watch, WatchStopHandle } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcPickEvent, VcReadyObject } from '@vue-cesium/utils/types'
import { usePrimitives } from '@vue-cesium/composables'
import { VcBillboardProps, VcLabelProps, VcPointProps } from '@vue-cesium/components/primitive-collections'

import { show, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { addCustomProperty, kebabCase } from '@vue-cesium/utils/util'
import { primitiveEmits } from '@vue-cesium/utils/emits'
import { PrimitiveCluster } from '@vue-cesium/shared'
import { hSlot } from '@vue-cesium/utils/private/render'
import { cloneDeep, differenceBy } from 'lodash-unified'

export const primitiveClusterProps = {
  ...show,
  enabled: {
    type: Boolean,
    default: true
  },
  pixelRange: {
    type: Number,
    default: 80
  },
  minimumClusterSize: {
    type: Number,
    default: 2
  },
  clusterBillboards: {
    type: Boolean,
    default: true
  },
  clusterLabels: {
    type: Boolean,
    default: true
  },
  clusterPoints: {
    type: Boolean,
    default: true
  },
  billboards: {
    type: Array as PropType<Array<VcBillboardProps>>,
    default: () => []
  },
  labels: {
    type: Array as PropType<Array<VcLabelProps>>,
    default: () => []
  },
  points: {
    type: Array as PropType<Array<VcPointProps>>,
    default: () => []
  },
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPrimitiveCluster',
  props: primitiveClusterProps,
  emits: {
    ...primitiveEmits,
    clusterEvent: (ids: string[], cluster: { billboard: Cesium.Billboard; label: Cesium.Label; point: Cesium.PointPrimitive }) => true
  },
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcPrimitiveCluster'
    instance.cesiumEvents = ['clusterEvent']
    const primitivesState = usePrimitives(props, ctx, instance)

    const unwatchFns: Array<WatchStopHandle> = []

    unwatchFns.push(
      watch(
        () => props.show,
        val => {
          const primitiveCluster = instance.cesiumObject as PrimitiveCluster
          primitiveCluster.show = val
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.enabled,
        val => {
          const primitiveCluster = instance.cesiumObject as PrimitiveCluster
          primitiveCluster.enabled = val
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.minimumClusterSize,
        val => {
          const primitiveCluster = instance.cesiumObject as PrimitiveCluster
          primitiveCluster.minimumClusterSize = val
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.clusterBillboards,
        val => {
          const primitiveCluster = instance.cesiumObject as PrimitiveCluster
          primitiveCluster.clusterBillboards = val
          instance.proxy['reload']()
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.clusterLabels,
        val => {
          const primitiveCluster = instance.cesiumObject as PrimitiveCluster
          primitiveCluster.clusterLabels = val
          instance.proxy['reload']()
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.clusterBillboards,
        val => {
          const primitiveCluster = instance.cesiumObject as PrimitiveCluster
          primitiveCluster.clusterPoints = val
          instance.proxy['reload']()
        }
      )
    )

    unwatchFns.push(
      watch(
        () => cloneDeep(props.billboards),
        (newVal, oldVal) => {
          if (!instance.mounted) {
            return
          }
          const primitiveCluster = instance.cesiumObject as PrimitiveCluster
          const billboardCollection = primitiveCluster._billboardCollection as Cesium.BillboardCollection
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
              const modifyBillboard = billboardCollection._billboards.find(v => v.id === modify.oldOptions.id)
              modifyBillboard &&
                Object.keys(modify.newOptions).forEach(prop => {
                  if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
                    modifyBillboard[prop] = primitivesState?.transformProp(prop, modify.newOptions[prop])
                  }
                })
            })
          } else {
            const addeds: any = differenceBy(newVal, oldVal, 'id')
            const deletes: any = differenceBy(oldVal, newVal, 'id')
            const deleteBillboards: Array<Cesium.Billboard> = []
            for (let i = 0; i < deletes.length; i++) {
              const deleteBillboard = billboardCollection._billboards.find(v => v.id === deletes[i].id)
              deleteBillboard && deleteBillboards.push(deleteBillboard)
            }

            deleteBillboards.forEach(v => {
              billboardCollection.remove(v)
            })
            addBillboards(billboardCollection, addeds)

            setTimeout(() => {
              primitivesState.$services.viewer.scene.camera.changed.raiseEvent()
            })
          }
        },
        {
          deep: true
        }
      )
    )

    unwatchFns.push(
      watch(
        () => cloneDeep(props.labels),
        (newVal, oldVal) => {
          if (!instance.mounted) {
            return
          }
          const primitiveCluster = instance.cesiumObject as PrimitiveCluster
          const labelCollection = primitiveCluster._labelCollection as Cesium.LabelCollection

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
              const modifyLabel = labelCollection._labels.find(v => v.id === modify.oldOptions.id)
              modifyLabel &&
                Object.keys(modify.newOptions).forEach(prop => {
                  if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
                    modifyLabel[prop] = primitivesState.transformProp(prop, modify.newOptions[prop])
                  }
                })
            })
          } else {
            const addeds: any = differenceBy(newVal, oldVal, 'id')
            const deletes: any = differenceBy(oldVal, newVal, 'id')
            const deleteLabels: Array<Cesium.Label> = []
            for (let i = 0; i < deletes.length; i++) {
              const deleteLabel = labelCollection._labels.find(v => v.id === deletes[i].id)
              deleteLabel && deleteLabels.push(deleteLabel)
            }

            deleteLabels.forEach(v => {
              labelCollection.remove(v)
            })

            addLabels(labelCollection, addeds)

            setTimeout(() => {
              primitivesState.$services.viewer.scene.camera.changed.raiseEvent()
            })
          }
        },
        {
          deep: true
        }
      )
    )

    unwatchFns.push(
      watch(
        () => cloneDeep(props.points),
        (newVal, oldVal) => {
          if (!instance.mounted) {
            return
          }
          const primitiveCluster = instance.cesiumObject as PrimitiveCluster
          const pointCollection = primitiveCluster._pointCollection as Cesium.PointPrimitiveCollection
          if (newVal.length === oldVal.length) {
            // 视为修改操作
            // Treated as modified
            const modifies: Array<{
              newOptions: any
              oldOptions: any
            }> = []
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
              const modifyPoint = pointCollection._pointPrimitives.find(v => v && v.id === modify.oldOptions.id)
              modifyPoint &&
                Object.keys(modify.newOptions).forEach(prop => {
                  if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
                    modifyPoint[prop] = primitivesState.transformProp(prop, modify.newOptions[prop])
                  }
                })
            })
          } else {
            const addeds: any = differenceBy(newVal, oldVal, 'id')
            const deletes: any = differenceBy(oldVal, newVal, 'id')
            const deletePoints: Array<Cesium.PointPrimitive> = []
            for (let i = 0; i < deletes.length; i++) {
              const deletePoint = pointCollection._pointPrimitives.find(v => v.id === deletes[i].id)
              deletePoint && deletePoints.push(deletePoint)
            }

            deletePoints.forEach(v => {
              pointCollection.remove(v)
            })

            addPoints(pointCollection, addeds)

            setTimeout(() => {
              primitivesState.$services.viewer.scene.camera.changed.raiseEvent()
            })
          }
        },
        {
          deep: true
        }
      )
    )

    instance.createCesiumObject = async () => {
      const primitiveCluster = new PrimitiveCluster({
        show: props.show,
        enabled: props.enabled,
        pixelRange: props.pixelRange,
        minimumClusterSize: props.minimumClusterSize,
        clusterBillboards: props.clusterBillboards,
        clusterLabels: props.clusterLabels,
        clusterPoints: props.clusterPoints
      })

      const billboardCollection = new Cesium.BillboardCollection()
      addBillboards(billboardCollection, props.billboards)

      const labelCollection = new Cesium.LabelCollection()
      addLabels(labelCollection, props.labels)

      const pointCollection = new Cesium.PointPrimitiveCollection()
      addPoints(pointCollection, props.points)

      primitiveCluster._billboardCollection = billboardCollection
      primitiveCluster._labelCollection = labelCollection
      primitiveCluster._pointCollection = pointCollection

      primitiveCluster._initialize(primitivesState.$services.viewer.scene)

      setTimeout(() => {
        primitivesState.$services.viewer.scene.camera.changed.raiseEvent()
      })

      return primitiveCluster
    }

    const addPoints = (pointCollection: Cesium.PointPrimitiveCollection, points) => {
      for (let i = 0; i < points.length; i++) {
        const pointOptions = points[i] as Cesium.PointPrimitive
        pointOptions.id = Cesium.defined(pointOptions.id) ? pointOptions.id : Cesium.createGuid()
        const pointOptionsTransform = primitivesState.transformProps(pointOptions)
        const point = pointCollection.add(pointOptionsTransform)

        addCustomProperty(point, pointOptionsTransform)
      }
    }

    const addBillboards = (billboardCollection: Cesium.BillboardCollection, billboards) => {
      for (let i = 0; i < billboards.length; i++) {
        const billboardOptions = billboards[i] as Cesium.Billboard
        billboardOptions.id = Cesium.defined(billboardOptions.id) ? billboardOptions.id : Cesium.createGuid()
        const billboardOptionsTransform = primitivesState.transformProps(billboardOptions)
        const billboard = billboardCollection.add(billboardOptionsTransform)
        addCustomProperty(billboard, billboardOptionsTransform)
      }
    }

    const addLabels = (labelCollection: Cesium.LabelCollection, labels) => {
      for (let i = 0; i < labels.length; i++) {
        const labelOptions = labels[i] as Cesium.Label
        labelOptions.id = Cesium.defined(labelOptions.id) ? labelOptions.id : Cesium.createGuid()
        const labelOptionsTransform = primitivesState.transformProps(labelOptions)
        const label = labelCollection.add(labelOptionsTransform)
        addCustomProperty(label, labelOptionsTransform)
      }
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns.length = 0
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

export type VcPrimitiveClusterProps = {
  /**
   * Determines if this primitive will be shown.
   * Default value: true
   */
  show?: boolean
  /**
   * Specify whether clustering is enabled.
   */
  enabled?: boolean
  /**
   * Specify the pixel range to extend the screen space bounding box.
   * Default value: 80
   */
  pixelRange?: number
  /**
   * Specify the minimum number of screen space objects that can be clustered.
   * Default value: 2
   */
  minimumClusterSize?: number
  /**
   * Specify whether clustering billboard primitive is enabled.
   * Default value: true
   */
  clusterBillboards?: boolean
  /**
   * Specify whether clustering label primitive is enabled.
   * Default value: true
   */
  clusterLabels?: boolean
  /**
   * Specify whether clustering point primitive is enabled.
   * Default value: true
   */
  clusterPoints?: boolean
  /**
   * Specify an array of billboard collections. The structure of the array object is the same as the attribute of the [vc-billboard](https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-billboard#vcbillboard-props) component.
   */
  billboards?: Array<VcBillboardProps>
  /**
   * Specify an array of label collections. The structure of the array object is the same as the attribute of the [vc-label](https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-label#vclabel-props) component.
   */
  labels?: Array<VcLabelProps>
  /**
   * Specify an array of points collections. The structure of the array object is the same as the attribute of the [vc-point](https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-point#vcpoint-props) component.
   */
  points?: Array<VcPointProps>
  /**
   * Specifies whether to respond to mouse pick events.
   * Default Value: true
   */
  enableMouseEvent?: boolean
  /**
   * Triggers before the component is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the component is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the component is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the mouse is pressed on this primitive.
   */
  onMousedown?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse bounces up on this primitive.
   */
  onMouseup?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks on this primitive.
   */
  onClick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks outside this primitive.
   */
  onClickout?: (evt: VcPickEvent) => void
  /**
   * Triggers when the left mouse button double-clicks this primitive.
   */
  onDblclick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves on this primitive.
   */
  onMousemove?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves over to this primitive.
   */
  onMouseover?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves out of this primitive.
   */
  onMouseout?: (evt: VcPickEvent) => void
}

export type VcPrimitiveClusterRef = VcComponentPublicInstance<VcPrimitiveClusterProps>
