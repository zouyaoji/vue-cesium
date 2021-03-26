<template>
  <vc-btn
    v-if="canRender"
    ref="rootRef"
    class="vc-location-bar"
    :class="classes"
    :style="rootStyle"
    no-caps
    @click="toggleUseProjection"
  >
    <template v-if="showMouseInfo">
      <template v-if="!mouseCoordsInfo?.useProjection">
        <div class="vc-section ellipsis">
          <span>{{ t('vc.navigation.locationbar.lng') }}</span>
          <span>{{ mouseCoordsInfo?.longitude }}</span>
        </div>
        <div class="vc-section ellipsis">
          <span>{{ t('vc.navigation.locationbar.lat') }}</span>
          <span>{{ mouseCoordsInfo?.latitude }}</span>
        </div>
      </template>
      <template v-else>
        <div class="vc-section-short">
          <span>{{ t('vc.navigation.locationbar.zone') }}</span>
          <span>{{ mouseCoordsInfo?.utmZone }}</span>
        </div>
        <div class="vc-section">
          <span>{{ t('vc.navigation.locationbar.e') }}</span>
          <span>{{ mouseCoordsInfo?.east }}</span>
        </div>
        <div class="vc-section">
          <span>{{ t('vc.navigation.locationbar.n') }}</span>
          <span>{{ mouseCoordsInfo?.north }}</span>
        </div>
      </template>
      <div v-if="mouseCoordsInfo?.elevation" class="vc-section ellipsis">
        <span>{{ t('vc.navigation.locationbar.elev') }}</span>
        <span>{{ mouseCoordsInfo?.elevation }}</span>
      </div>
    </template>

    <template v-if="showCameraInfo">
      <div class="vc-section-short-mini">
        <span>{{ t('vc.navigation.locationbar.level') }}</span>
        <span>{{ cameraInfo.level }}</span>
      </div>
      <div class="vc-section-short">
        <span>{{ t('vc.navigation.locationbar.heading') }}</span>
        <span>{{ cameraInfo.heading }}°</span>
      </div>
      <div class="vc-section-short">
        <span>{{ t('vc.navigation.locationbar.pitch') }}</span>
        <span>{{ cameraInfo.pitch }}°</span>
      </div>
      <div class="vc-section-short">
        <span>{{ t('vc.navigation.locationbar.roll') }}</span>
        <span>{{ cameraInfo.roll }}°</span>
      </div>
      <div class="vc-section ellipsis">
        <span>{{ t('vc.navigation.locationbar.cameraHeight') }}</span>
        <span>{{ cameraInfo.height }}m</span>
      </div>
    </template>
    <template v-if="showPerformanceInfo">
      <div class="vc-section-short-mini">
        <span>{{ performanceInfo.ms }}</span>
      </div>
      <div class="vc-section-short-mini">
        <span>{{ performanceInfo.fps }}</span>
      </div>
    </template>
    <vc-tooltip
      v-if="tooltip && showMouseInfo"
      ref="tooltipRef"
      :delay="tooltip.delay"
      :anchor="tooltip.anchor"
      :offset="tooltip.offset"
    >
      <strong>{{ t('vc.navigation.locationbar.tip') }}</strong>
    </vc-tooltip>
  </vc-btn>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent, getCurrentInstance, nextTick, ref, reactive, ExtractPropTypes } from 'vue'
import { $, getVcParentInstance, getInstanceListener } from '@vue-cesium/utils/private/vm'
import usePosition from '@vue-cesium/composables/private/use-position'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import MouseCoords, { extendForMouseCoords } from './MouseCoords'
import throttle from '@vue-cesium/utils/private/throttle'
import { useCommon } from '@vue-cesium/composables'
import { VcBtn, VcTooltip } from '@vue-cesium/ui'
import defaultProps from './defaultProps'
import { t } from '@vue-cesium/locale'

export default defineComponent({
  name: 'VcLocationBar',
  components: { VcTooltip, VcBtn },
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'locationBarEvt'],
  setup(props: ExtractPropTypes<typeof defaultProps>, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcLocationBar'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const rootRef = ref<typeof VcBtn>(null)
    const tooltipRef = ref<typeof VcTooltip>(null)

    let lastMouseX = -1
    let lastMouseY = -1
    const cameraInfo = reactive({
      heading: 'NaN',
      pitch: 'NaN',
      roll: 'NaN',
      height: 'NaN',
      level: 'NaN'
    })
    const performanceInfo = reactive({
      fps: 'NaN',
      ms: 'NaN'
    })
    const mouseCoordsInfo = ref(null)
    const positionState = usePosition(props, $services)
    const parentInstance = getVcParentInstance(instance)
    const canRender = ref(false)
    let showPerformanceInfoLast = undefined
    // computed
    const rootStyle = computed(() => {
      const css: CSSProperties = positionState.style.value
      css.background = props.background
      css.color = props.color
      const side = positionState.attach.value

      if ((side.bottom || side.top) && !side.left && !side.right) {
        css.left = '50%'
        css.transform = 'translate(-50%, 0)'
      }

      if ((side.left || side.right) && !side.top && !side.bottom) {
        css.top = '50%'
        css.transform = 'translate(0, -50%)'
      }
      return css
    })
    // methods
    instance.createCesiumObject = async () => {
      canRender.value = true
      const { viewer } = $services

      const viewerElement = (viewer as any)._element as HTMLElement

      if (props.showMouseInfo) {
        mouseCoordsInfo.value = new MouseCoords({ gridFileUrl: props.gridFileUrl })

        viewerElement.addEventListener('wheel', onMouseMove, false)
        viewerElement.addEventListener('mousemove', onMouseMove, false)
        viewerElement.addEventListener('touchmove', onMouseMove, false)
        extendForMouseCoords()
      }

      if (props.showCameraInfo) {
        viewer.camera.changed.addEventListener(onCameraChanged)
        onCameraChanged()
      }

      if (props.showPerformanceInfo) {
        showPerformanceInfoLast = viewer.scene.debugShowFramesPerSecond
        viewer.scene.debugShowFramesPerSecond = true
        viewer.scene.postRender.addEventListener(onScenePostRender)
      }

      return new Promise((resolve, reject) => {
        nextTick(() => {
          viewerElement.appendChild($(rootRef)?.$el)
          resolve($(rootRef)?.$el)
          viewer.viewerWidgetResized.raiseEvent({
            type: instance.cesiumClass,
            status: 'added',
            target: $(rootRef)?.$el
          })
        })
      })
    }
    instance.unmount = async () => {
      const { viewer } = $services
      const viewerElement = (viewer as any)._element as HTMLElement
      if (props.showMouseInfo) {
        mouseCoordsInfo.value = undefined
        viewerElement.removeEventListener('wheel', onMouseMove)
        viewerElement.removeEventListener('mousemove', onMouseMove)
        viewerElement.removeEventListener('touchmove', onMouseMove)
      }

      if (props.showCameraInfo) {
        viewer.camera.changed.removeEventListener(onCameraChanged)
      }

      if (props.showPerformanceInfo) {
        viewer.scene.debugShowFramesPerSecond = showPerformanceInfoLast
        viewer.scene._performanceDisplay._container.style.display = 'block'
        viewer.scene.postRender.removeEventListener(onScenePostRender)
      }

      // if (!hasVcNavigation) {
      viewerElement.contains($(rootRef)?.$el) && viewerElement.removeChild($(rootRef)?.$el)
      // }

      viewer.viewerWidgetResized.raiseEvent({
        type: instance.cesiumClass,
        status: 'removed',
        target: $(rootRef)?.$el
      })

      return true
    }

    const onScenePostRender  = throttle(scene => {
      performanceInfo.fps = scene._performanceDisplay?._fpsText.nodeValue
      performanceInfo.ms = scene._performanceDisplay?._msText.nodeValue
      scene._performanceDisplay._container.style.display = 'none'
    }, 500)

    // 粗略计算
    const heightToLevel = altitude => {
      var A = 40487.57
      var B = 0.00007096758
      var C = 91610.74
      var D = -40467.74

      return Math.round(D + (A - D) / (1 + Math.pow(altitude / C, B)))
    }

    const onCameraChanged = () => {
      const { viewer } = $services
      const { Math: CesiumMath } = Cesium
      cameraInfo.heading = CesiumMath.toDegrees(viewer.camera.heading).toFixed(1)
      cameraInfo.pitch = CesiumMath.toDegrees(viewer.camera.pitch).toFixed(1)
      cameraInfo.roll = CesiumMath.toDegrees(viewer.camera.roll).toFixed(1)
      cameraInfo.height = viewer.camera.positionCartographic.height.toFixed(2)
      cameraInfo.level = heightToLevel(cameraInfo.height).toFixed(0)
    }

    const onMouseMove = e => {
      const { Cartesian2 } = Cesium
      const { viewer } = $services

      const clientX = e.type === 'mousemove' || e.type === 'wheel' ? e.clientX : e.changedTouches[0].clientX
      const clientY = e.type === 'mousemove' || e.type === 'wheel' ? e.clientY : e.changedTouches[0].clientY

      if (clientX === lastMouseX && clientY === lastMouseY) {
        return
      }

      lastMouseX = clientX
      lastMouseY = clientY

      const viewerElement = (viewer as any)._element as HTMLElement

      if (viewer) {
        if (props.showMouseInfo) {
          const rect = viewerElement.getBoundingClientRect()
          const position = new Cartesian2(clientX - rect.left, clientY - rect.top)
          mouseCoordsInfo.value.updateCoordinatesFromCesium(viewer, position)
        }
        const listener = getInstanceListener(instance, 'locationBarEvt')
        listener &&
          ctx.emit('locationBarEvt', {
            type: 'locationBar',
            mouseCoordsInfo: mouseCoordsInfo.value,
            cameraInfo: cameraInfo,
            performanceInfo: performanceInfo,
            statue: 'complete'
          })
      }
    }

    const toggleUseProjection = () => {
      $(tooltipRef)?.hide()
      if (props.showMouseInfo){
        mouseCoordsInfo.value.toggleUseProjection()
      }
    }

    return {
      createPromise: commonState.createPromise,
      load: commonState.load,
      unload: commonState.unload,
      reload: commonState.reload,
      getCesiumObject: () => instance.cesiumObject,
      classes: positionState.classes,
      rootStyle,
      mouseCoordsInfo,
      toggleUseProjection,
      canRender,
      rootRef,
      tooltipRef,
      cameraInfo,
      performanceInfo,
      t
    }
  }
})
</script>
