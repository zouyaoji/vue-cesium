/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-24 11:38:18
 * @LastEditTime: 2023-06-30 16:50:14
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\overlays\dynamic\index.ts
 */
import { WatchStopHandle, PropType, toRaw, ComponentPublicInstance } from 'vue'
import { defineComponent, getCurrentInstance, createCommentVNode, onUnmounted, ref, watch } from 'vue'
import {
  DynamicOverlayOpts,
  SampledPosition,
  TrackViewOpts,
  VcComponentInternalInstance,
  VcHeadingPitchRange,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { show } from '@vue-cesium/utils/cesium-props'
import { addCustomProperty, kebabCase } from '@vue-cesium/utils/util'
import DynamicOverlay from '@vue-cesium/shared/src/DynamicOverlay'
import {
  getPolylineSegmentHeading,
  getPolylineSegmentPitch,
  makeCartesian3,
  makeHeadingPitchRang,
  makeJulianDate
} from '@vue-cesium/utils/cesium-helpers'
import { cloneDeep, differenceBy, remove, find } from 'lodash-unified'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'
import { commonEmits } from '@vue-cesium/utils/emits'

export const dynamicOverlayProps = {
  ...show,
  name: {
    type: String,
    default: '__vc__overlay__dynamic__'
  },
  startTime: {
    type: [Object, String, Date] as PropType<Cesium.JulianDate | string | Date>
  },
  stopTime: {
    type: [Object, String, Date] as PropType<Cesium.JulianDate | string | Date>
  },
  currentTime: {
    type: [Object, String, Date] as PropType<Cesium.JulianDate | string | Date>
  },
  clockRange: {
    type: Number as PropType<number | Cesium.ClockRange>,
    default: 0
  },
  clockStep: {
    type: Number as PropType<number | Cesium.ClockStep>,
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
  },
  stopArrivedFlag: {
    type: String as PropType<'time' | 'position' | 'both' | 'or'>,
    default: 'time'
  },
  positionPrecision: {
    type: Number,
    default: 0.0000001
  },
  timePrecision: {
    type: Number,
    default: 0.01
  }
}
const emits = {
  ...commonEmits,
  'update:currentTime': (currentTime: Cesium.JulianDate) => true,
  'update:shouldAnimate': (shouldAnimate: boolean) => true,
  'update:canAnimate': (canAnimate: boolean) => true,
  'update:clockRange': (clockRange: number | Cesium.ClockRange) => true,
  'update:clockStep': (clockStep: number | Cesium.ClockStep) => true,
  'update:multiplier': (multiplier: number) => true,
  'update:startTime': (startTime: Cesium.JulianDate) => true,
  'update:stopTime': (stopTime: Cesium.JulianDate) => true,
  onStop: (clock: Cesium.Clock) => true,
  stopArrived: (e: {
    overlay: DynamicOverlay
    position: SampledPosition
    offset: Cesium.HeadingPitchRange
    clock: Cesium.Clock
    indexOverlay: number
    indexPosition: number
  }) => true
}
export default defineComponent({
  name: 'VcOverlayDynamic',
  props: dynamicOverlayProps,
  emits: emits,
  setup(props: VcOverlayDynamicProps, ctx) {
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
    const trackingOverlay = ref<DynamicOverlay>(null)
    const trackView = ref<TrackViewOpts>(null)
    let lastOffset
    let lastPosition
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
              // 该属性不支持动态响应
              const testReplace = (key, value) => {
                if (key !== 'nodeTransformations' && key !== '_definitionChanged') {
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
              if (Cesium.defined(modifyEntity)) {
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

                const dynamicOverlay = find(overlays.value, v => v.id === modifyEntity.id)
                if (Cesium.defined(dynamicOverlay)) {
                  const oldSampledPositions = v.oldOptions.sampledPositions
                  const newSampledPositions = v.newOptions.sampledPositions
                  const sampledPositionAdds: any = differenceBy(newSampledPositions, oldSampledPositions, 'id')
                  const sampledPositionDeletes: any = differenceBy(oldSampledPositions, newSampledPositions, 'id')

                  sampledPositionDeletes.forEach(sampledPosition => {
                    sampledPosition.time && dynamicOverlay._sampledPosition.removeSample(sampledPosition.time)
                  })

                  sampledPositionAdds.forEach((sampledPosition: SampledPosition) => {
                    if (sampledPosition.time) {
                      dynamicOverlay.addPosition(sampledPosition.position, sampledPosition.time)
                    } else if (sampledPosition.interval) {
                      dynamicOverlay.addPosition(sampledPosition.position, sampledPosition.interval || props.defaultInterval)
                    }
                  })
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
      !makeJulianDate(props.currentTime).equalsEpsilon(clock.currentTime, 0.001) && listener && emit('update:currentTime', clock.currentTime)

      listener = getInstanceListener(instance, 'update:shouldAnimate')
      props.shouldAnimate !== clock.shouldAnimate && listener && emit('update:shouldAnimate', clock.shouldAnimate)

      listener = getInstanceListener(instance, 'update:canAnimate')
      props.canAnimate !== clock.canAnimate && listener && emit('update:canAnimate', clock.canAnimate)

      listener = getInstanceListener(instance, 'update:clockRange')
      props.clockRange !== clock.clockRange && listener && emit('update:clockRange', clock.clockRange)

      listener = getInstanceListener(instance, 'update:clockStep')
      props.clockStep !== clock.clockStep && listener && emit('update:clockStep', clock.clockStep)

      listener = getInstanceListener(instance, 'update:multiplier')
      props.multiplier !== clock.multiplier && listener && emit('update:multiplier', clock.multiplier)

      listener = getInstanceListener(instance, 'update:startTime')
      !makeJulianDate(props.startTime).equalsEpsilon(clock.startTime, 0.001) && listener && emit('update:startTime', clock.startTime)

      listener = getInstanceListener(instance, 'update:stopTime')
      !makeJulianDate(props.stopTime).equalsEpsilon(clock.stopTime, 0.001) && listener && emit('update:stopTime', clock.stopTime)

      setTrackView(clock)

      const { JulianDate, Cartesian3 } = Cesium
      listener = getInstanceListener(instance, 'stopArrived')
      if (listener && props.shouldAnimate) {
        for (let i = 0; i < overlays.value.length; i++) {
          const overlay: DynamicOverlay = overlays.value[i]
          const currentPosition = overlay._sampledPosition.getValue(clock.currentTime)

          const dynamicOverlayOpts = props.dynamicOverlays[i]
          for (let j = 0; j < dynamicOverlayOpts.sampledPositions.length; j++) {
            const sampledPosition = dynamicOverlayOpts.sampledPositions[j]
            const stopPostion = makeCartesian3(sampledPosition.position) as Cesium.Cartesian3
            const stopTime = makeJulianDate(sampledPosition.time)

            const positionFlag = Cartesian3.equalsEpsilon(currentPosition, stopPostion, props.positionPrecision)
            const timeFlag = JulianDate.equalsEpsilon(clock.currentTime, stopTime, props.timePrecision)
            let arrivedFlag = false
            switch (props.stopArrivedFlag) {
              case 'time':
                arrivedFlag = timeFlag
                break
              case 'position':
                arrivedFlag = positionFlag
                break
              case 'both':
                arrivedFlag = timeFlag && positionFlag
                break
              case 'or':
                arrivedFlag = timeFlag || positionFlag
                break
            }

            if (arrivedFlag) {
              emit('stopArrived', {
                overlay,
                position: sampledPosition,
                offset: lastOffset,
                clock,
                indexOverlay: i,
                indexPosition: j
              })
              break
            }
          }
        }
      }
    }

    const addDynamicOverlays = (datasource: Cesium.CustomDataSource, dynamicOverlays: Array<DynamicOverlayOpts>) => {
      for (let i = 0; i < dynamicOverlays.length; i++) {
        const entityOptions = dynamicOverlays[i] as any
        const entityOptionsTransform = commonState.transformProps<DynamicOverlayOpts>(entityOptions)
        const dynamicOverlay = new DynamicOverlay(entityOptionsTransform)
        overlays.value.push(dynamicOverlay)
        const entity = datasource.entities.add(dynamicOverlay._entity)
        entityOptionsTransform.sampledPositions.forEach((sampledPosition: SampledPosition) => {
          if (sampledPosition.time) {
            dynamicOverlay.addPosition(sampledPosition.position, sampledPosition.time)
          } else if (sampledPosition.interval) {
            sampledPosition.time = dynamicOverlay.addPosition(sampledPosition.position, sampledPosition.interval || props.defaultInterval)
          }
        })
        entityOptions.id !== entity.id && (entityOptions.id = entity.id)
        addCustomProperty(entity, entityOptionsTransform, ['id'])
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
        const listener = getInstanceListener(instance, 'onStop')
        listener && viewer.clock.onStop.addEventListener(listener)
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
      const listener = getInstanceListener(instance, 'onStop')
      listener && viewer.clock.onStop.removeEventListener(listener)
      trackingOverlay.value && (viewer.trackedEntity = undefined)
      return true
    }

    const setTrackView = (clock: Cesium.Clock) => {
      if (trackView.value && trackingOverlay.value) {
        const { viewer } = $services

        if (Cesium.JulianDate.greaterThan(clock.currentTime, clock.stopTime)) {
          // viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
          // if (lastOffset && lastPosition) {
          //   viewer.camera.lookAt(lastPosition, lastOffset)
          // }
          trackingOverlay.value = null
          return
        }
        const position = trackingOverlay.value._sampledPosition.getValue(clock.currentTime)
        let offset: Cesium.HeadingPitchRange = new Cesium.HeadingPitchRange()
        switch (trackView.value.mode) {
          case 'TP':
            offset.heading = 0
            offset.pitch = trackView.value?.offset?.pitch || Cesium.Math.toRadians(-90)
            offset.range = trackView.value?.offset?.range || 1000
            break
          case 'FP': {
            const nextTickTime = Cesium.JulianDate.addSeconds(clock.currentTime, 1 / 60, new Cesium.JulianDate())
            const nextTickPosition = trackingOverlay.value._sampledPosition.getValue(nextTickTime) || position

            if (position.equals(nextTickPosition) && lastOffset) {
              offset = lastOffset
            } else {
              offset.heading = Cesium.Math.toRadians(getPolylineSegmentHeading(position, nextTickPosition))
              offset.pitch = (trackView.value?.offset?.pitch || Cesium.Math.toRadians(-45.0)) + getPolylineSegmentPitch(position, nextTickPosition)
              offset.range = trackView.value?.offset?.range || 500
            }

            break
          }
          case 'CUSTOM':
            offset = makeHeadingPitchRang(trackView.value.offset)
        }
        lastOffset = offset
        lastPosition = position
        viewer.camera.lookAt(position, offset)
      }
    }

    const trackOverlay = (trackOverlay?: DynamicOverlay | string | number, trackViewOpts?: TrackViewOpts) => {
      const { viewer } = $services
      trackViewOpts = trackViewOpts || {
        mode: trackView.value === null ? 'FP' : 'FREE'
      }

      if (trackViewOpts.mode === 'FREE') {
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
        if (trackingOverlay.value) {
          viewer.trackedEntity = undefined
          trackingOverlay.value = null
          trackView.value = null
        }
        return
      }

      trackingOverlay.value = getOverlay(trackOverlay)

      viewer.trackedEntity = toRaw(trackingOverlay.value._entity)
      if (trackViewOpts.mode === 'TRACKED') {
        if (trackViewOpts?.viewFrom?.length) {
          viewer.trackedEntity.viewFrom = new Cesium.Cartesian3(
            trackViewOpts.viewFrom[0],
            trackViewOpts.viewFrom[1],
            trackViewOpts.viewFrom[2]
          ) as any
        }
        trackView.value = null
      } else {
        trackView.value = trackViewOpts
      }
    }

    const getOverlay = (e: number | string | DynamicOverlay) => {
      if (e instanceof DynamicOverlay) {
        return e
      } else if (typeof e === 'string') {
        return find(overlays.value, v => v.id === e)
      } else if (typeof e === 'number') {
        return overlays.value[e]
      } else {
        return overlays.value[0]
      }
    }

    const flyToOverlay = (
      overlays?: number | string | DynamicOverlay | Array<DynamicOverlay | number | string>,
      options?: {
        duration?: number
        maximumHeight?: number
        offset?: VcHeadingPitchRange
      }
    ) => {
      const { viewer } = $services
      if (trackingOverlay.value) {
        viewer.trackedEntity = undefined
        trackingOverlay.value = null
      }
      let target: Cesium.Entity | Array<Cesium.Entity> | Cesium.CustomDataSource
      if (Cesium.defined(overlays)) {
        if (Array.isArray(overlays)) {
          if (overlays.length) {
            const targets: Array<Cesium.Entity> = []
            overlays.forEach(viewOverlay => {
              const target = toRaw(getOverlay(viewOverlay)._entity)
              targets.push(target)
            })
            target = targets
          } else {
            target = instance.cesiumObject as Cesium.CustomDataSource
          }
        } else {
          target = toRaw(getOverlay(overlays)._entity)
        }
      } else {
        target = instance.cesiumObject as Cesium.CustomDataSource
      }

      options = options || {
        duration: 3.0
      }

      if (Cesium.defined(options.offset)) {
        options.offset = makeHeadingPitchRang(options.offset)
      }

      return viewer.flyTo(target, options as any)
    }

    const zoomToOverlay = (overlays?: number | string | DynamicOverlay | Array<DynamicOverlay | number | string>, offset?: VcHeadingPitchRange) => {
      const { viewer } = $services
      if (trackingOverlay.value) {
        viewer.trackedEntity = undefined
        trackingOverlay.value = null
      }
      let target: Cesium.Entity | Array<Cesium.Entity> | Cesium.CustomDataSource
      if (Cesium.defined(overlays)) {
        if (Array.isArray(overlays)) {
          if (overlays.length) {
            const targets: Array<Cesium.Entity> = []
            overlays.forEach(viewOverlay => {
              const target = toRaw(getOverlay(viewOverlay)._entity)
              targets.push(target)
            })
            target = targets
          } else {
            target = instance.cesiumObject as Cesium.CustomDataSource
          }
        } else {
          target = toRaw(getOverlay(overlays)._entity)
        }
      } else {
        target = instance.cesiumObject as Cesium.CustomDataSource
      }

      return viewer.zoomTo(target, Cesium.defined(offset) ? makeHeadingPitchRang(offset) : undefined)
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    // expose public methods
    Object.assign(instance.proxy, { getOverlays: () => overlays.value, getOverlay, trackOverlay, zoomToOverlay, flyToOverlay })

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export interface VcOverlayDynamicProps {
  /**
   * Specify whether to display the CustomDataSource that hosts the dynamic overlays.
   * Default value: true
   */
  show?: boolean
  /**
   * Specify the name of the CustomDataSource.
   * Default value: __vc__overlay__dynamic__
   */
  name?: string
  /**
   * Specify the start time of the clock.
   */
  startTime?: Cesium.JulianDate | string | Date
  /**
   * Specify the stop time of the clock.
   */
  stopTime?: Cesium.JulianDate | string | Date
  /**
   * Specify the current time.
   */
  currentTime?: Cesium.JulianDate | string | Date
  /**
   * Determines how the clock should behave when Clock#startTime or Clock#stopTime is reached.
   * Default value: 0
   */
  clockRange?: number | Cesium.ClockRange
  /**
   * Determines if calls to Clock#tick are frame dependent or system clock dependent.
   * Default value: 1
   */
  clockStep?: number | Cesium.ClockStep
  /**
   * Indicates whether Clock#tick should attempt to advance time. The clock will only tick when both Clock#canAnimate and Clock#shouldAnimate are true.
   * Default value: true
   */
  shouldAnimate?: boolean
  /**
   * Indicates whether Clock#tick can advance time. This could be false if data is being buffered, for example. The clock will only tick when both Clock#canAnimate and Clock#shouldAnimate are true.
   * Default value: true
   */
  canAnimate?: boolean
  /**
   * Determines how much time advances when Clock#tick is called, negative values allow for advancing backwards.
   * Default value: 1.0
   */
  multiplier?: number
  /**
   * Specify the dynamicOverlays array.
   */
  dynamicOverlays?: Array<DynamicOverlayOpts>
  /**
   * Specify the default refresh interval of the default position information, and it is available to change the position of the dynamic overlays in real time.
   * Default value: 3.0
   */
  defaultInterval?: number
  /**
   * Specify the decision flag for the stopArrived event.
   * Default value: time
   */
  stopArrivedFlag?: 'time' | 'position' | 'both' | 'or'
  /**
   * Specify position accuracy.
   * Default value: 0.0000001
   */
  positionPrecision?: number
  /**
   * Specify time accuracy.
   * 0.01
   */
  timePrecision?: number
  /**
   * Triggers before the VcOverlayDynamic is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcOverlayDynamic is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcOverlayDynamic is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when Clock#stopTime is reached.
   */
  onOnStop?: (clock: Cesium.Clock) => void
  /**
   * Triggers when a stop is reached.
   */
  onStopArrived?: (e: {
    overlay: DynamicOverlay
    position: SampledPosition
    offset: Cesium.HeadingPitchRange
    clock: Cesium.Clock
    indexOverlay: number
    indexPosition: number
  }) => void
  /**
   * Triggers when currentTime changed.
   */
  'onUpdate:currentTime'?: (currentTime: Cesium.JulianDate) => void
  /**
   * Triggers when shouldAnimate changed.
   */
  'onUpdate:shouldAnimate'?: (shouldAnimate: boolean) => void
  /**
   * Triggers when canAnimate changed.
   */
  'onUpdate:canAnimate'?: (canAnimate: boolean) => void
  /**
   * Triggers when clockRange changed.
   */
  'onUpdate:clockRange'?: (clockRange: number | Cesium.ClockRange) => void
  /**
   * Triggers when clockStep changed.
   */
  'onUpdate:clockStep'?: (clockStep: number | Cesium.ClockStep) => void
  /**
   * Triggers when multiplier changed.
   */
  'onUpdate:multiplier'?: (multiplier: number) => void
  /**
   * Triggers when startTime changed.
   */
  'onUpdate:startTime'?: (startTime: Cesium.JulianDate) => void
  /**
   * Triggers when stopTime changed.
   */
  'onUpdate:stopTime'?: (stopTime: Cesium.JulianDate) => void
}

export type VcOverlayDynamicEmits = typeof emits

export interface VcOverlayDynamicRef extends ComponentPublicInstance<VcOverlayDynamicProps> {
  /**
   * Get overlay by id or index.
   * @param e id or index.
   */
  getOverlay: (e: number | string | DynamicOverlay) => DynamicOverlay
  /**
   * Get overlays.
   */
  getOverlays: () => Array<DynamicOverlay>
  /**
   * Track dynamic overlay.
   * @param trackOverlay tracked overlay or tracked overlay's id or index. If not passed, the first overlay is tracked by default.
   * @param trackViewOpts view parameters.
   */
  trackOverlay: (trackOverlay?: DynamicOverlay | string | number, trackViewOpts?: TrackViewOpts) => void
  /**
   * Zoom to dynamic overlay(s).
   * @param viewOverlays Dynamic overlays (index, id) or a collection of dynamic overlay (index, id). If you don't pass it or pass in an empty array (empty object), it scales to all overlays.
   * @param offset The camera offset to zoom to the overlay.
   */
  zoomToOverlay: (
    overlays: number | string | DynamicOverlay | Array<DynamicOverlay | number | string>,
    offset?: VcHeadingPitchRange
  ) => Promise<boolean>

  /**
   * Fly to dynamic overlay(s).
   * @param viewOverlays Dynamic overlays (index, id) or a collection of dynamic overlay (index, id). If you don't pass it or pass in an empty array (empty object), it scales to all overlays.
   * @param offset The camera offset to zoom to the overlay.
   */
  flyToOverlay: (
    overlays: number | string | DynamicOverlay | Array<DynamicOverlay | number | string>,
    options?: {
      duration?: number
      maximumHeight?: number
      offset?: VcHeadingPitchRange
    }
  ) => Promise<boolean>
}
