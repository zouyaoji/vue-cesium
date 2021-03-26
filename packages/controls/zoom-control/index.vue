<template>
  <div
    v-if="canRender"
    ref="rootRef"
    class="vc-zoom-control"
    :style="rootStyle"
    :class="classes"
  >
    <ul class="vc-list">
      <li>
        <vc-btn
          ref="zoomInRef"
          :size="zoomInSize"
          dense
          :flat="zoomInFlat"
          :stack="zoomInStack"
          :round="zoomInRound"
          :style="{ color: zoomInColor, background: zoomInBackground }"
          @click="zoomIn"
        >
          <vc-icon :name="zoomInName" :size="zoomInSize" />
          <div>{{ zoomInLabel }}</div>
          <vc-tooltip
            v-if="zoomInTooltip"
            ref="zoomInTooltipRef"
            :delay="zoomInTooltip.delay"
            :anchor="zoomInTooltip.anchor"
            :offset="zoomInTooltip.offset"
          >
            <strong>{{ t('vc.navigation.zoomCotrol.zoomInTip') }}</strong>
          </vc-tooltip>
        </vc-btn>
      </li>
      <li v-if="enableResetButton">
        <vc-btn
          ref="zoomResetRef"
          :size="resetSize"
          dense
          :flat="resetFlat"
          :stack="resetStack"
          :round="resetRound"
          :style="{ color: resetColor, background: resetBackground }"
          @click="zoomReset"
        >
          <vc-icon :name="resetName" :size="resetSize" />
          <div>{{ resetLabel }}</div>
          <vc-tooltip
            v-if="resetTooltip"
            ref="resetTooltipRef"
            :delay="resetTooltip.delay"
            :anchor="resetTooltip.anchor"
            :offset="resetTooltip.offset"
          >
            <strong>{{ t('vc.navigation.zoomCotrol.zoomResetTip') }}</strong>
          </vc-tooltip>
        </vc-btn>
      </li>
      <li>
        <vc-btn
          ref="zoomOutRef"
          :size="zoomOutSize"
          dense
          :flat="zoomOutFlat"
          :stack="zoomOutStack"
          :round="zoomOutRound"
          :style="{ color: zoomOutColor, background: zoomOutBackground }"
          @click="zoomOut"
        >
          <vc-icon :name="zoomOutName" :size="zoomOutSize" :style="{ color: zoomOutColor }" />
          <div>{{ zoomOutLabel }}</div>
          <vc-tooltip
            v-if="zoomOutTooltip"
            ref="zoomOutTooltipRef"
            :delay="zoomOutTooltip.delay"
            :anchor="zoomOutTooltip.anchor"
            :offset="zoomOutTooltip.offset"
          >
            <strong>{{ t('vc.navigation.zoomCotrol.zoomOutTip') }}</strong>
          </vc-tooltip>
        </vc-btn>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, nextTick, ref, CSSProperties } from 'vue'
import { CameraObj, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { getInstanceListener, $, getVcParentInstance  } from '@vue-cesium/utils/private/vm'
import { setViewerCamera, flyToCamera } from '@vue-cesium/utils/cesiumHelpers'
import usePosition from '@vue-cesium/composables/private/use-position'
import { VcBtn, VcIcon, VcTooltip } from '@vue-cesium/ui'
import { useCommon } from '@vue-cesium/composables'
import { defaultProps , defaultOptions } from './defaultProps'
import { t } from '@vue-cesium/locale'

export default defineComponent({
  name: 'VcZoomControl',
  components: {
    VcBtn,
    VcIcon,
    VcTooltip
  },
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'zoomEvt'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcZoomControl'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    const { $services } = commonState
    const positionState = usePosition(props, $services)
    const rootRef = ref<HTMLElement>(null)
    const zoomInTooltipRef = ref<typeof VcTooltip>(null)
    const zoomOutTooltipRef = ref<typeof VcTooltip>(null)
    const resetTooltipRef = ref<typeof VcTooltip>(null)
    const zoomInRef = ref<typeof VcBtn>(null)
    const zoomResetRef = ref<typeof VcBtn>(null)
    const zoomOutRef = ref<typeof VcBtn>(null)
    const parentInstance = getVcParentInstance(instance)
    const hasVcNavigation = parentInstance.proxy.$options.name === 'VcNavigation'
    const canRender = ref(hasVcNavigation ? true : false)

    // computed
    const rootStyle = computed(() => {
      const css: CSSProperties = positionState.style.value
      css.flexDirection = props.direction === 'vertical' ? 'column' : 'row'
      css.background = props.background
      css.borderRadius = props.borderRadius
      css.border = props.border

      if (!hasVcNavigation) {
        const zoomInTarget = $(zoomInRef)?.$el as HTMLElement
        const zoomResetTarget = $(zoomResetRef)?.$el as HTMLElement
        const zoomOutTarget = $(zoomOutRef)?.$el as HTMLElement
        let width = 0
        let height = 0

        if (zoomInTarget !== void 0) {
          const zoomInClientRect = zoomInTarget.getBoundingClientRect()
          if (props.direction === 'horizontal') {
            width += zoomInClientRect.width
            height = zoomInClientRect.height > height ? zoomInClientRect.height : height
          } else {
            height += zoomInClientRect.height
            width = zoomInClientRect.width > width ? zoomInClientRect.width : width
          }
        }

        if (zoomResetTarget !== void 0) {
          const zoomResetClientRect = zoomResetTarget.getBoundingClientRect()
          if (props.direction === 'horizontal') {
            width += zoomResetClientRect.width
            height = zoomResetClientRect.height > height ? zoomResetClientRect.height : height
          } else {
            height += zoomResetClientRect.height
            width = zoomResetClientRect.width > width ? zoomResetClientRect.width : width
          }
        }

        if (zoomOutTarget !== void 0) {
          const zoomOutClientRect = zoomOutTarget.getBoundingClientRect()
          if (props.direction === 'horizontal') {
            width += zoomOutClientRect.width
            height = zoomOutClientRect.height > height ? zoomOutClientRect.height : height
          } else {
            height += zoomOutClientRect.height
            width = zoomOutClientRect.width > width ? zoomOutClientRect.width : width
          }
        }

        css.width = `${width + 4}px`
        css.height = `${height + 4}px`

        const side = positionState.attach.value
        if ((side.bottom || side.top) && !side.left && !side.right) {
          css.left = '50%'
          css.transform = 'translate(-50%, 0)'
        }

        if ((side.left || side.right) && !side.top && !side.bottom) {
          css.top = '50%'
          css.transform = 'translate(0, -50%)'
        }
      }
      return css
    })

    // methods
    instance.createCesiumObject = async () => {
      return new Promise((resolve, reject) => {
        canRender.value = true
        nextTick(() => {
          const { viewer } = $services
          if (props.overrideViewerCamera) {
            const resetView: CameraObj = props.defaultResetView
            setViewerCamera(viewer, resetView)
          }

          if (!hasVcNavigation) {
            const viewerElement = (viewer as any)._element
            viewerElement.appendChild($(rootRef))
            resolve($(rootRef))
          } else {
            resolve($(rootRef))
          }

          viewer.viewerWidgetResized.raiseEvent({
            type: instance.cesiumClass,
            status: 'added',
            target: $(rootRef)
          })
        })
      })
    }
    instance.unmount = async () => {
      const { viewer } = $services
      if (!hasVcNavigation) {
        const viewerElement = (viewer as any)._element
        viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef))
      }

      viewer.viewerWidgetResized.raiseEvent({
        type: instance.cesiumClass,
        status: 'added',
        target: $(rootRef)
      })

      return true
    }

    const zoomIn = () => {
      zoom(1 / props.zoomAmount)
    }

    const zoomOut = () => {
      zoom(props.zoomAmount)
    }

    const zoom = relativeAmount => {
      $(zoomInTooltipRef)?.hide()
      $(zoomOutTooltipRef)?.hide()

      const { Cartesian3, defined, IntersectionTests, Ray, SceneMode } = Cesium
      const { viewer } = $services
      if (defined(viewer)) {
        const scene = viewer.scene
        const sscc = scene.screenSpaceCameraController
        // do not zoom if it is disabled
        if (!sscc.enableInputs || !sscc.enableZoom) {
          return
        }
        // TODO
        if (scene.mode === SceneMode.COLUMBUS_VIEW && !sscc.enableTranslate) {
          return
        }

        const camera = scene.camera
        let orientation

        switch (scene.mode) {
          case SceneMode.MORPHING: {
            break
          }
          case SceneMode.SCENE2D: {
            camera.zoomIn(camera.positionCartographic.height * (1 - relativeAmount))
            break
          }
          default: {
            let focus

            if (defined(viewer.trackedEntity)) {
              focus = new Cesium.Cartesian3()
            } else {
              focus = getCameraFocus(viewer)
            }

            if (!Cesium.defined(focus)) {
              // Camera direction is not pointing at the globe, so use the ellipsoid horizon point as
              // the focal point.
              const ray = new Ray(
                camera.worldToCameraCoordinatesPoint(scene.globe.ellipsoid.cartographicToCartesian(camera.positionCartographic)),
                camera.directionWC
              )
              focus = IntersectionTests.grazingAltitudeLocation(ray, scene.globe.ellipsoid)

              orientation = {
                heading: camera.heading,
                pitch: camera.pitch,
                roll: camera.roll
              }
            } else {
              orientation = {
                direction: camera.direction,
                up: camera.up
              }
            }
            const cartesian3Scratch = new Cartesian3()
            const direction = Cartesian3.subtract(camera.position, focus, cartesian3Scratch)
            const movementVector = Cartesian3.multiplyByScalar(direction, relativeAmount, direction)
            const endPosition = Cartesian3.add(focus, movementVector, focus)
            const type = relativeAmount < 1 ? 'zoomIn' : 'zoomOut'
            const listener = getInstanceListener(instance, 'zoomEvt')
            listener && ctx.emit('zoomEvt', {
              type: type,
              camera: viewer.camera,
              status: 'start'
            })
            if (Cesium.defined(viewer.trackedEntity) || scene.mode === SceneMode.COLUMBUS_VIEW) {
              // sometimes flyTo does not work (jumps to wrong position) so just set the position without any animation
              // do not use flyTo when tracking an entity because during animatiuon the position of the entity may change
              camera.position = endPosition
            } else {
              camera.flyTo({
                destination: endPosition,
                orientation: orientation,
                duration: props.duration,
                convert: false,
                complete: () => {
                  listener && ctx.emit('zoomEvt', {
                    type: type,
                    camera: viewer.camera,
                    status: 'complete'
                  })
                },
                cancel: () => {
                  listener && ctx.emit('zoomEvt', {
                    type: type,
                    camera: viewer.camera,
                    status: 'cancel'
                  })
                }
              })
            }
          }
        }
      }
    }

    const zoomReset = () => {
      (instance.proxy.$refs.resetTooltipRef as any)?.hide()
      const { viewer } = $services
      const scene = viewer.scene
      const sscc = scene.screenSpaceCameraController
      if (!sscc.enableInputs) {
        return
      }

      if (Cesium.defined(viewer.trackedEntity)) {
        // when tracking do not reset to default view but to default view of tracked entity
        const trackedEntity = viewer.trackedEntity
        viewer.trackedEntity = undefined
        viewer.trackedEntity = trackedEntity
      } else {
        const listener = getInstanceListener(instance, 'zoomEvt')
        // reset to a default position or view defined in the options
        listener && ctx.emit('zoomEvt', {
          type: 'zoomReset',
          camera: viewer.camera,
          status: 'start'
        })

        const complete = () => {
          listener && ctx.emit('zoomEvt', {
            type: 'zoomReset',
            camera: viewer.camera,
            status: 'complete'
          })
        }
        const cancel = () => {
          listener && ctx.emit('zoomEvt', {
            type: 'zoomReset',
            camera: viewer.camera,
            status: 'cancel'
          })
        }

        const resetView: CameraObj = props.defaultResetView
        const options = {
          duration: props.durationReset,
          complete: complete,
          cancel: cancel
        }
        flyToCamera(viewer, resetView, options)
      }
    }

    const getCameraFocus = scene => {
      const { defined, Ellipsoid, IntersectionTests, Ray } = Cesium
      const ray = new Ray(scene.camera.positionWC, scene.camera.directionWC)
      const intersections = IntersectionTests.rayEllipsoid(ray, Ellipsoid.WGS84)
      if (defined(intersections)) {
        return Ray.getPoint(ray, intersections.start)
      }
      // Camera direction is not pointing at the globe, so use the ellipsoid horizon point as
      // the focal point.
      return IntersectionTests.grazingAltitudeLocation(ray, Ellipsoid.WGS84)
    }

    return {
      createPromise: commonState.createPromise,
      load: commonState.load,
      unload: commonState.unload,
      reload: commonState.reload,
      getCesiumObject: () => instance.cesiumObject,
      rootStyle,
      classes: positionState.classes,
      zoomIn,
      zoomOut,
      zoomReset,
      t,
      canRender,
      rootRef,
      zoomInTooltipRef,
      zoomOutTooltipRef,
      resetTooltipRef,
      zoomInRef,
      zoomResetRef,
      zoomOutRef
    }
  }
})
</script>
