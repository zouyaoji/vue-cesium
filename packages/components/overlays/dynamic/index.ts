/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-24 11:38:18
 * @LastEditTime: 2021-12-22 15:24:10
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\overlays\dynamic\index.ts
 */
import { defineComponent, getCurrentInstance, createCommentVNode, onUnmounted, WatchStopHandle, ref, PropType, watch } from 'vue'
import { DynamicOverlayOpts, SampledPosition, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { show } from '@vue-cesium/utils/cesium-props'
import { addCustomProperty, isPlainObject, kebabCase } from '@vue-cesium/utils/util'
import DynamicOverlay from '@vue-cesium/shared/src/DynamicOverlay'
import { makeJulianDate } from '@vue-cesium/utils/cesium-helpers'
import cloneDeep from 'lodash/cloneDeep'
import differenceBy from 'lodash/differenceBy'
import remove from 'lodash/remove'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'

export default defineComponent({
  name: 'VcOverlayDynamic',
  props: {
    ...show,
    name: {
      type: String,
      default: '__vc__overlay__dynamic__'
    },
    startTime: {
      type: [Object, String] as PropType<Cesium.JulianDate>
    },
    stopTime: {
      type: [Object, String] as PropType<Cesium.JulianDate>
    },
    currentTime: {
      type: [Object, String] as PropType<Cesium.JulianDate>
    },
    clockRange: {
      type: Number,
      default: 0
    },
    clockStep: {
      type: Number,
      default: 1
    },
    shouldAnimate: {
      type: Boolean,
      default: true
    },
    canAnimate: {
      type: Boolean,
      default: true
    },
    multiplier: {
      type: Number,
      default: 1.0
    },
    dynamicOverlays: {
      type: Array as PropType<DynamicOverlayOpts[]>,
      default: () => []
    },
    defaultInterval: {
      type: Number,
      default: 3
    }
  },
  emits: [
    'beforeLoad',
    'ready',
    'destroyed',
    'update:currentTime',
    'update:shouldAnimate',
    'update:canAnimate',
    'update:clockRange',
    'update:clockStep',
    'update:multiplier',
    'update:startTime',
    'update:stopTime'
  ],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcOverlayDynamic'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const overlays = ref<Array<DynamicOverlay>>([])
    const restoreClockOpts = ref<any>({})
    const { emit } = ctx

    // watcch
    let unwatchFns: Array<WatchStopHandle> = []
    unwatchFns.push(
      watch(
        () => props.show,
        val => {
          const datasource = instance.cesiumObject as Cesium.CustomDataSource
          datasource && (datasource.show = val)
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.name,
        val => {
          const datasource = instance.cesiumObject as Cesium.CustomDataSource
          datasource && (datasource.name = val)
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.startTime,
        val => {
          const { viewer } = $services
          if (Cesium.defined(viewer) && val) {
            viewer.clock.startTime = makeJulianDate(val)
          }
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.stopTime,
        val => {
          const { viewer } = $services
          if (Cesium.defined(viewer) && val) {
            viewer.clock.stopTime = makeJulianDate(val)
          }
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.currentTime,
        val => {
          const { viewer } = $services
          if (Cesium.defined(viewer) && val) {
            viewer.clock.currentTime = makeJulianDate(val)
          }
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.multiplier,
        val => {
          const { viewer } = $services
          if (Cesium.defined(viewer)) {
            viewer.clock.multiplier = val
          }
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.clockStep,
        val => {
          const { viewer } = $services
          if (Cesium.defined(viewer)) {
            viewer.clock.clockStep = val
          }
        }
      )
    )
    unwatchFns.push(
      watch(
        () => props.clockRange,
        val => {
          const { viewer } = $services
          if (Cesium.defined(viewer)) {
            viewer.clock.clockRange = val
          }
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.canAnimate,
        val => {
          const { viewer } = $services
          if (Cesium.defined(viewer)) {
            viewer.clock.canAnimate = val
          }
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.shouldAnimate,
        val => {
          const { viewer } = $services
          if (Cesium.defined(viewer)) {
            viewer.clock.shouldAnimate = val
          }
        }
      )
    )

    unwatchFns.push(
      watch(
        () => cloneDeep(props.dynamicOverlays),
        (newVal, oldVal) => {
          if (!instance.mounted) {
            return
          }
          const datasource = instance.cesiumObject as Cesium.CustomDataSource
          if (newVal.length === oldVal.length) {
            // 视为修改操作
            // Treated as modified
            const modifies: Array<any> = []
            for (let i = 0; i < newVal.length; i++) {
              const options = newVal[i]
              const oldOptions = oldVal[i]

              // 忽略 model 的 nodeTransformations
              // 即该属性不支持动态响应
              function testReplace(key, value) {
                if (key !== 'nodeTransformations') {
                  return value
                }
              }

              if (JSON.stringify(options, testReplace) !== JSON.stringify(oldOptions, testReplace)) {
                modifies.push({
                  newOptions: options,
                  oldOptions: oldOptions
                })
              }
            }

            modifies.forEach(v => {
              const modifyEntity = datasource.entities.getById(v.oldOptions.id)
              if (v.oldOptions.id === v.newOptions.id) {
                modifyEntity &&
                  Object.keys(v.newOptions).forEach(prop => {
                    if (v.oldOptions[prop] !== v.newOptions[prop]) {
                      modifyEntity[prop] = commonState.transformProp(prop, v.newOptions[prop])
                    }
                  })
              } else {
                // 改了 id
                if (modifyEntity) {
                  datasource.entities.remove(modifyEntity)
                  remove(overlays.value, overlay => overlay.id === modifyEntity.id)
                  const entityOptions = v.newOptions
                  addDynamicOverlays(datasource, [entityOptions])
                }
              }
            })
          } else {
            const adds: any = differenceBy(newVal, oldVal, 'id')
            const deletes: any = differenceBy(oldVal, newVal, 'id')
            const deletedEntities: Array<Cesium.Entity> = []
            for (let i = 0; i < deletes.length; i++) {
              const deleteEntity = datasource.entities.getById(deletes[i].id)
              deletedEntities.push(deleteEntity!)
            }

            deletedEntities.forEach(v => {
              datasource.entities.remove(v)
              remove(overlays.value, overlay => overlay.id === v.id)
            })

            addDynamicOverlays(datasource, adds)
          }
        },
        {
          deep: true
        }
      )
    )

    // methods
    instance.createCesiumObject = async () => {
      return new Cesium.CustomDataSource(props.name)
    }

    const onClockTick = (clock: Cesium.Clock) => {
      let listener = getInstanceListener(instance, 'update:currentTime')
      listener && emit('update:currentTime', clock.currentTime)

      listener = getInstanceListener(instance, 'update:shouldAnimate')
      listener && emit('update:shouldAnimate', clock.shouldAnimate)

      listener = getInstanceListener(instance, 'update:canAnimate')
      listener && emit('update:canAnimate', clock.canAnimate)

      listener = getInstanceListener(instance, 'update:clockRange')
      listener && emit('update:clockRange', clock.clockRange)

      listener = getInstanceListener(instance, 'update:clockStep')
      listener && emit('update:clockStep', clock.clockStep)

      listener = getInstanceListener(instance, 'update:multiplier')
      listener && emit('update:multiplier', clock.multiplier)

      listener = getInstanceListener(instance, 'update:startTime')
      listener && emit('update:startTime', clock.startTime)

      listener = getInstanceListener(instance, 'update:stopTime')
      listener && emit('update:stopTime', clock.stopTime)
    }

    const addDynamicOverlays = (datasource: Cesium.CustomDataSource, dynamicOverlays: Array<DynamicOverlayOpts>) => {
      for (let i = 0; i < dynamicOverlays.length; i++) {
        const entityOptions = dynamicOverlays[i] as any
        const entityOptionsTransform = commonState.transformProps<DynamicOverlayOpts>(entityOptions)
        const dynamicOverlay = new DynamicOverlay(entityOptionsTransform)
        overlays.value.push(dynamicOverlay)
        const entity = datasource.entities.add(dynamicOverlay._entity)
        entityOptionsTransform.sampledPositions.forEach((sampledPosition: SampledPosition) => {
          // 如果是数组认为是经纬度数组
          if (Array.isArray(sampledPosition) || sampledPosition instanceof Cesium.Cartesian3) {
            dynamicOverlay.addPosition(sampledPosition, props.defaultInterval)
          } else if (isPlainObject(sampledPosition)) {
            if (sampledPosition.time) {
              dynamicOverlay.addPosition(sampledPosition.position, sampledPosition.time)
            } else if (sampledPosition.interval) {
              dynamicOverlay.addPosition(sampledPosition.position, sampledPosition.interval)
            }
          }
        })
        entityOptions.id !== entity.id && (entityOptions.id = entity.id)
        addCustomProperty(entity, entityOptionsTransform)
      }
    }

    instance.mount = async () => {
      const { viewer } = $services
      const datasource = instance.cesiumObject as Cesium.CustomDataSource
      datasource.show = props.show
      addDynamicOverlays(datasource, props.dynamicOverlays)

      return viewer.dataSources.add(datasource).then(() => {
        restoreClockOpts.value.startTime = viewer.clock.startTime
        restoreClockOpts.value.stopTime = viewer.clock.stopTime
        restoreClockOpts.value.currentTime = viewer.clock.currentTime
        restoreClockOpts.value.multiplier = viewer.clock.multiplier
        restoreClockOpts.value.clockStep = viewer.clock.clockStep
        restoreClockOpts.value.clockRange = viewer.clock.clockRange
        restoreClockOpts.value.canAnimate = viewer.clock.canAnimate
        restoreClockOpts.value.shouldAnimate = viewer.clock.shouldAnimate

        if (props.startTime) {
          viewer.clock.startTime = makeJulianDate(props.startTime)
        }
        if (props.stopTime) {
          viewer.clock.stopTime = makeJulianDate(props.stopTime)
        }
        if (props.currentTime) {
          viewer.clock.currentTime = makeJulianDate(props.currentTime)
        }

        viewer.clock.multiplier = props.multiplier
        viewer.clock.clockStep = props.clockStep
        viewer.clock.clockRange = props.clockRange
        viewer.clock.canAnimate = false
        viewer.clock.shouldAnimate = props.shouldAnimate

        viewer.clock.onTick.addEventListener(onClockTick)
        return true
      })
    }

    instance.unmount = async () => {
      const { viewer } = $services
      const datasource = instance.cesiumObject as Cesium.CustomDataSource
      viewer.dataSources.remove(datasource, true)

      viewer.clock.startTime = restoreClockOpts.value.startTime
      viewer.clock.stopTime = restoreClockOpts.value.stopTime
      viewer.clock.multiplier = restoreClockOpts.value.multiplier
      viewer.clock.clockStep = restoreClockOpts.value.clockStep
      viewer.clock.clockRange = restoreClockOpts.value.clockRange
      viewer.clock.canAnimate = restoreClockOpts.value.canAnimate
      viewer.clock.shouldAnimate = restoreClockOpts.value.shouldAnimate
      overlays.value.length = 0
      viewer.clock.onTick.removeEventListener(onClockTick)
      return true
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    Object.assign(instance.proxy, { overlays })

    // expose public methods
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})
