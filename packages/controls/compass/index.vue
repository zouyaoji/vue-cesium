<template>
  <div
    v-if="canRender"
    ref="rootRef"
    class="vc-compass"
    :style="rootStyle"
    :class="classes"
    @dblclick="handleDoubleClick"
    @mousedown="handleMouseDown"
    @mouseup="resetRotater"
    @touchend="resetRotater"
    @touchstart="handleMouseDown"
  >
    <vc-btn
      ref="outerRingRef"
      class="vc-compass-outerRing absolute-center"
      :style="outerCircleStyle"
      :size="outerSize"
      dense
      round
    >
      <vc-icon :size="outerSize" :name="outerName" />
      <vc-tooltip
        v-if="outerTooltip"
        ref="iconOuterTooltipRef"
        :delay="outerTooltip.delay"
        :anchor="outerTooltip.anchor"
        :offset="outerTooltip.offset"
        @before-show="tooltipBeforeShow"
      >
        <strong>{{ t('vc.navigation.compass.outerTip') }}</strong>
      </vc-tooltip>
    </vc-btn>
    <vc-btn
      class="vc-compass-innerRing absolute-center"
      :style="innerRingStyle"
      :size="innerSize"
      round
      dense
    >
      <vc-icon :size="innerSize" :name="innerName" />
      <vc-tooltip
        v-if="innerTooltip"
        ref="iconInnerTooltipRef"
        :delay="innerTooltip.delay"
        :anchor="innerTooltip.anchor"
        :offset="innerTooltip.offset"
        @before-show="tooltipBeforeShow"
      >
        <strong>{{ t('vc.navigation.compass.innerTip') }}</strong>
      </vc-tooltip>
    </vc-btn>
    <vc-btn v-if="rotationMarkerStyle.opacity" class="vc-compass-rotation-marker absolute-center" round dense>
      <vc-icon :size="markerSize" :name="markerName" :style="rotationMarkerStyle" />
    </vc-btn>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, ref, computed, nextTick, CSSProperties, watch, reactive } from 'vue'
import usePosition from '@vue-cesium/composables/private/use-position'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { $, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import { VcBtn, VcIcon, VcTooltip } from '@vue-cesium/ui'
import { useCommon } from '@vue-cesium/composables'
import useCompass from './use-compass'
import { t } from '@vue-cesium/locale'
import defaultProps from './defaultProps'

export default defineComponent({
  name: 'VcCompass',
  components: {
    VcBtn,
    VcIcon,
    VcTooltip
  },
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'compassEvt'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcCompass'
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const parentInstance = getVcParentInstance(instance)
    const { $services } = commonState
    const compassState = useCompass(props, ctx, instance)
    const positionState = usePosition(props, $services)
    const rootRef = ref<HTMLElement>(null)
    const outerRingRef = ref<typeof VcBtn>(null)
    const hasVcNavigation = parentInstance.proxy.$options.name === 'VcNavigation'
    const canRender = ref(hasVcNavigation ? true : false)
    const rootStyle = reactive<CSSProperties>({})
    // computed
    const innerRingStyle = computed(() => {
      const css: CSSProperties = {
        background: props.innerBackground,
        color: props.innerColor
      }
      return css
    })

    // methods
    instance.createCesiumObject = async () => {
      canRender.value = true
      const { viewer } = $services
      return new Promise((resolve, reject) => {
        nextTick(() => {
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
    instance.mount = async () => {
      updateStyle()
      return compassState.load($services.viewer)
    }
    instance.unmount = async () => {
      const { viewer } = $services
      const viewerElement = (viewer as any)._element
      if (!hasVcNavigation) {
        viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef))
      }

      viewer.viewerWidgetResized.raiseEvent({
        type: instance.cesiumClass,
        status: 'removed',
        target: $(rootRef)
      })
      return compassState.unload()
    }

    const updateStyle = () => {
      console.log('updateStyle')
      const css: CSSProperties = positionState.style.value
      // if (!hasVcNavigation) {
      const side = positionState.attach.value
      const outerRingTarget = $(outerRingRef)?.$el as HTMLElement
      if (outerRingTarget !== void 0) {
        const clientRect = outerRingTarget.getBoundingClientRect()
        css.width = `${clientRect.width}px`
        css.height = `${clientRect.height}px`

        if ((side.bottom || side.top) && !side.left && !side.right) {
          css.left = '50%'
          css.transform = 'translate(-50%, 0)'
        }

        if ((side.left || side.right) && !side.top && !side.bottom) {
          css.top = '50%'
          css.transform = 'translate(0, -50%)'
        }
      }

      Object.assign(rootStyle, css)
    }

    return {
      handleDoubleClick: compassState.handleDoubleClick,
      handleMouseDown: compassState.handleMouseDown,
      resetRotater: compassState.resetRotater,
      outerCircleStyle: compassState.outerCircleStyle,
      rotationMarkerStyle: compassState.rotationMarkerStyle,
      tooltipBeforeShow: compassState.onTooltipBeforeShow,
      iconOuterTooltipRef: compassState.iconOuterTooltipRef,
      iconInnerTooltipRef: compassState.iconInnerTooltipRef,
      load: commonState.load,
      unload: commonState.unload,
      reload: commonState.reload,
      classes: positionState.classes,
      rootStyle,
      innerRingStyle,
      rootRef,
      outerRingRef,
      canRender,
      t,
      getCesiumObject: () => instance.cesiumObject
    }
  }
})
</script>
