<template>
  <div
    v-if="canRender"
    ref="rootRef"
    class="vc-navigation"
    :class="classes"
    :style="rootStyle"
  >
    <div class="vc-navigation-controls">
      <div class="vc-navigation-control">
        <vc-compass
          v-if="defaultOptions.enableCompass"
          ref="compassRef"
          :enable-compass-outer-ring="defaultOptions.enableCompassOuterRing"
          @compass-evt="compassEvt"
        />
      </div>
      <div class="vc-navigation-control">
        <vc-zoom-control
          v-if="defaultOptions.enableZoomControl"
          ref="zoomControlRef"
          :default-reset-view="defaultOptions.enableZoomControl.defaultResetView"
          :override-camera="defaultOptions.enableZoomControl.overrideViewerCamera"
          :zoom-amount="defaultOptions.enableZoomControl.zoomAmount"
          @zoom-evt="zoomEvt"
        />
      </div>
      <div class="vc-navigation-control">
        <vc-print v-if="defaultOptions.enablePrintView" ref="printRef" @print-evt="printEvt" />
      </div>
      <div class="vc-navigation-control">
        <vc-my-location v-if="defaultOptions.enableMyLocation" ref="myLocationRef" @location-evt="locationEvt" />
      </div>
    </div>
    <!-- <div class="vc-navigation-controls">
      <div class="vc-navigation-control">
        <vc-print v-if="defaultOptions.enablePrintView" ref="printRef" @print-evt="printEvt" />
      </div>
      <div class="vc-navigation-control">
        <vc-my-location v-if="defaultOptions.enableMyLocation" ref="myLocationRef" @location-evt="locationEvt" />
      </div>
    </div> -->
  </div>
  <vc-location-bar />
  <vc-distance-legend />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, PropType, watch, nextTick, ref, CSSProperties, reactive } from 'vue'
import { NavigationOption, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import usePosition, { positionProps } from '@vue-cesium/composables/private/use-position'
import { $, getInstanceListener } from '@vue-cesium/utils/private/vm'
import VcZoomControl from '../zoom-control/index.vue'
import VcMyLocation from '../my-location/index.vue'
import VcLocationBar from '../location-bar/index.vue'
import VcDistanceLegend from '../distance-legend/index.vue'
import { useCommon } from '@vue-cesium/composables'
import VcCompass from '../compass/index.vue'
import VcPrint from '../print/index.vue'
import defaultOptions from './defaultOptions'

export default defineComponent({
  name: 'VcNavigation',
  components: {
    VcCompass,
    VcZoomControl,
    VcMyLocation,
    VcPrint,
    VcLocationBar,
    VcDistanceLegend
  },
  props: {
    options: Object as PropType<NavigationOption>,
    ...positionProps
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'zoomEvt', 'compassEvt', 'locationEvt', 'printEvt'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcNavigation'
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }

    const canRender = ref(false)
    const { $services } = commonState
    const positionState = usePosition(props, $services)
    const rootRef = ref<HTMLElement>(null)
    const compassRef = ref<typeof VcCompass>(null)
    const zoomControlRef = ref<typeof VcZoomControl>(null)
    const myLocationRef = ref<typeof VcMyLocation>(null)
    const printRef = ref<typeof VcPrint>(null)
    const rootStyle = reactive<CSSProperties>({})
    const { emit } = ctx
    // data
    // const defaultOptions: NavigationOption = defaultOptions
    console.log(defaultOptions)

    // watch
    watch(
      () => props.options,
      () => {
        commonState.reload().then(() => {
          $services.viewer.viewerWidgetResized.raiseEvent()
        })
      },
      {
        deep: true
      }
    )

    watch(
      () => positionState.style.value,
      val => {
        const css: CSSProperties = positionState.style.value
        const side = positionState.attach.value

        if ((side.bottom || side.top) && !side.left && !side.right) {
          css.left = '50%'
          css.transform = 'translate(-50%, 0)'
        }

        if ((side.left || side.right) && !side.top && !side.bottom) {
          css.top = '50%'
          css.transform = 'translate(0, -50%)'
        }

        Object.assign(rootStyle, css)
      },
      {
        deep: true,
        immediate: true
      }
    )
    // methods
    const compassEvt = e => {
      const listener = getInstanceListener(instance, 'compassEvt')
      listener && emit(e)
    }
    const zoomEvt = e => {
      const listener = getInstanceListener(instance, 'zoomEvt')
      listener && emit(e)
    }
    const printEvt = e => {
      const listener = getInstanceListener(instance, 'printEvt')
      listener && emit(e)
    }
    const locationEvt = e => {
      const listener = getInstanceListener(instance, 'locationEvt')
      listener && emit(e)
    }

    instance.createCesiumObject = async () => {
      canRender.value = true
      const { viewer } = $services
      Object.assign(defaultOptions, props.options)
      return new Promise((resolve, reject) => {
        nextTick(() => {
          const viewerElement = (viewer as any)._element
          viewerElement.appendChild($(rootRef))
          resolve($(rootRef))

          viewer.viewerWidgetResized.raiseEvent({
            type: instance.cesiumClass,
            status: 'added',
            target: $(rootRef)
          })
        })
      })
    }

    instance.mount = async () => {
      const compassTarget = $(compassRef)?.$el as HTMLElement
      let height = 0
      let marginX = 0
      if (compassTarget !== void 0) {
        const margin = getComputedStyle(compassTarget.parentNode as Element).margin
        marginX = parseInt(margin)
        height += compassTarget.getBoundingClientRect().height + marginX * 2
      }
      const zoomControlTarget = $(zoomControlRef)?.$el as HTMLElement
      if (zoomControlTarget !== void 0) {
        height += zoomControlTarget.getBoundingClientRect().height + marginX * 2
      }
      const printTarget = $(printRef)?.$el as HTMLElement
      if (printTarget !== void 0) {
        height += printTarget.getBoundingClientRect().height + marginX * 2
      }
      const myLocationTarget = $(myLocationRef)?.$el as HTMLElement
      if (myLocationTarget !== void 0) {
        height += myLocationTarget.getBoundingClientRect().height + marginX * 2
      }

      Object.assign(rootStyle, { height: `${height}px` })
      return true
    }

    instance.unmount = async () => {
      const { viewer } = $services
      const viewerElement = (viewer as any)._element
      viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef))
      viewer.viewerWidgetResized.raiseEvent({
        type: instance.cesiumClass,
        status: 'removed',
        target: $(rootRef)
      })
      return true
    }
    // life cycle
    return {
      createPromise: commonState.createPromise,
      load: commonState.load,
      unload: commonState.unload,
      reload: commonState.reload,
      getCesiumObject: () => instance.cesiumObject,
      compassEvt,
      zoomEvt,
      printEvt,
      locationEvt,
      rootRef,
      compassRef,
      zoomControlRef,
      myLocationRef,
      printRef,
      defaultOptions,
      rootStyle,
      canRender,
      classes: positionState.classes
    }
  },
  render: () => {
    console.log('render')
    return undefined
  }
})
</script>
