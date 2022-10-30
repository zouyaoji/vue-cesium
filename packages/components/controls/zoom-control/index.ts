import { CSSProperties, Teleport, VNode } from 'vue'
import { computed, defineComponent, getCurrentInstance, nextTick, ref, createCommentVNode, h, reactive, watch } from 'vue'
import type {
  VcCamera,
  VcComponentInternalInstance,
  VcZoomEvt,
  VcBtnTooltipProps,
  VcReadyObject,
  VcComponentPublicInstance
} from '@vue-cesium/utils/types'
import usePosition from '@vue-cesium/composables/private/use-position'
import { $, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import { setViewerCamera } from '@vue-cesium/utils/cesium-helpers'
import { hMergeSlot } from '@vue-cesium/utils/private/render'
import { defaultProps, defaultOptions } from './defaultProps'
import type { VcBtnRef } from '@vue-cesium/components/ui'
import { VcBtn, VcIcon, VcTooltip } from '@vue-cesium/components/ui'
import { useCommon, useLocale } from '@vue-cesium/composables'
import useZoomControl from './use-zoom-control'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'

const emits = {
  ...commonEmits,
  zoomEvt: (evt: VcZoomEvt) => true
}
export const zoomControlProps = defaultProps
export default defineComponent({
  name: 'VcZoomControl',
  props: zoomControlProps,
  emits: emits,
  setup(props: VcZoomControlProps, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcZoomControl'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === undefined) {
      return
    }
    const { t } = useLocale()
    const { $services } = commonState
    const zoomControlState = useZoomControl(props, ctx, instance, $services)
    const positionState = usePosition(props, $services)
    const rootRef = ref<HTMLElement>(null)
    const zoomInRef = ref<VcBtnRef>(null)
    const zoomResetRef = ref<VcBtnRef>(null)
    const zoomOutRef = ref<VcBtnRef>(null)
    const parentInstance = getVcParentInstance(instance)
    const hasVcNavigation = parentInstance.proxy?.$options.name === 'VcNavigation'
    const canRender = ref(hasVcNavigation)
    const rootStyle = reactive<CSSProperties>({})

    // watch
    watch(
      () => props,
      val => {
        nextTick(() => {
          if (!instance.mounted) {
            return
          }
          updateRootStyle()
        })
      },
      {
        deep: true
      }
    )
    // computed
    const zoomOutOptions = computed(() => Object.assign({}, defaultOptions.zoomOutOptions, props.zoomOutOptions))
    const zoomInOptions = computed(() => Object.assign({}, defaultOptions.zoomInOptions, props.zoomInOptions))
    const zoomResetOptions = computed(() => Object.assign({}, defaultOptions.zoomResetOptions, props.zoomResetOptions))
    // methods
    instance.createCesiumObject = async () => {
      const { viewer } = $services
      if (props.overrideViewerCamera) {
        const resetView: VcCamera = props.defaultResetView
        setViewerCamera(viewer, resetView)
      }

      return $(rootRef)
    }
    instance.mount = async () => {
      canRender.value = true
      nextTick(() => {
        updateRootStyle()
      })
      const { viewer } = $services
      viewer.viewerWidgetResized?.raiseEvent({
        type: instance.cesiumClass,
        status: 'mounted',
        target: $(rootRef)
      })
      return true
    }
    instance.unmount = async () => {
      canRender.value = false
      const { viewer } = $services
      viewer.viewerWidgetResized?.raiseEvent({
        type: instance.cesiumClass,
        status: 'unmounted',
        target: $(rootRef)
      })

      return true
    }

    const updateRootStyle = () => {
      const css: CSSProperties = positionState.style.value
      rootStyle.left = css.left
      rootStyle.top = css.top
      rootStyle.transform = css.transform

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

        if (typeof props.teleportToViewer === 'undefined' || props.teleportToViewer) {
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
      }
      Object.assign(rootStyle, css)
    }

    const getContent = (options: VcBtnTooltipProps, type) => {
      let btnRef
      let tooltipRef
      let tip
      let onClick
      if (type === 'zoomIn') {
        btnRef = zoomInRef
        tooltipRef = zoomControlState.zoomInTooltipRef
        tip = options.tooltip?.tip || t('vc.navigation.zoomCotrol.zoomInTip')
        onClick = zoomControlState.zoomIn
      } else if (type === 'zoomOut') {
        btnRef = zoomOutRef
        tooltipRef = zoomControlState.zoomOutTooltipRef
        tip = options.tooltip?.tip || t('vc.navigation.zoomCotrol.zoomOutTip')
        onClick = zoomControlState.zoomOut
      } else if (type === 'zoomReset') {
        btnRef = zoomResetRef
        tooltipRef = zoomControlState.resetTooltipRef
        tip = options.tooltip?.tip || t('vc.navigation.zoomCotrol.zoomResetTip')
        onClick = zoomControlState.zoomReset
      }
      const inner: Array<VNode> = []

      inner.push(
        h(VcIcon, {
          name: options.icon,
          size: options.size
        })
      )
      inner.push(h('div', null, options.label))
      if (options.tooltip) {
        inner.push(
          h(
            VcTooltip,
            {
              ref: tooltipRef,
              ...(options.tooltip as any)
            },
            () => h('strong', null, tip)
          )
        )
      } else {
        inner.push(createCommentVNode('v-if'))
      }

      const content = h(
        VcBtn,
        {
          class: `vc-${kebabCase(type)}`,
          ref: btnRef,
          size: options.size,
          flat: options.flat,
          stack: options.stack,
          round: options.round,
          dense: true,
          style: { color: options.color, background: options.background },
          onClick: onClick
        },
        () => hMergeSlot(ctx.slots.default, inner)
      )

      return content
    }

    Object.assign(instance.proxy, {
      zoomIn: () => zoomControlState.zoomIn,
      zoomOut: () => zoomControlState.zoomOut,
      zoomReset: () => zoomControlState.zoomReset
    })

    return () => {
      if (canRender.value) {
        const children: Array<VNode> = []
        children.push(h('li', null, getContent(zoomInOptions.value, 'zoomIn')))
        if (props.enableResetButton) {
          children.push(h('li', null, getContent(zoomResetOptions.value, 'zoomReset')))
        } else {
          children.push(createCommentVNode('v-if'))
        }
        children.push(h('li', null, getContent(zoomOutOptions.value, 'zoomOut')))

        const renderContent = h(
          'div',
          {
            ref: rootRef,
            class: `vc-zoom-control ${positionState.classes.value} ${props.customClass}`,
            style: rootStyle
          },
          h(
            'ul',
            {
              class: 'vc-list'
            },
            children
          )
        )
        return !hasVcNavigation && props.teleportToViewer ? h(Teleport, { to: $services.viewer._element }, renderContent) : renderContent
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})

export type VcZoomControlEmits = typeof emits

export type VcZoomControlProps = {
  /**
   * Specify the position of the VcZoomControl.
   * Default value: top-right
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'
  /**
   * An array of two numbers to offset the VcZoomControl horizontally and vertically in pixels.
   * Default value: [0, 0]
   */
  offset?: [number, number]
  /**
   * Specify whether to enable the reset button.
   * Default value: true
   */
  enableResetButton?: boolean
  /**
   * Specify the zoom amount of zoom in and zoom out.
   * Default value: 2
   */
  zoomAmount?: number
  /**
   * Specify the time of the zoom-in and zoom-out process, in seconds.
   * Default value: 0.5
   */
  duration?: number
  /**
   * Specify the time to reset to the default camera position, in seconds.
   * Default value: 1.5
   */
  durationReset?: number
  /**
   * Specify the reset camera view.
   * Default value:
   * {
   *    position: {
   *      lng: 105,
   *      lat: 30,
   *      height: 19059568.5
   *    }
   * }
   */
  defaultResetView?: VcCamera
  /**
   * Specify whether to override the camera attribute on the vc-viewer during initialization.
   * Default value: false
   */
  overrideViewerCamera?: boolean
  /**
   * Specifies the css background of the VcZoomControl.
   * Default value: #3f4854
   */
  background?: string
  /**
   * Specifies the css border of the VcZoomControl.
   * Default value: solid 1px rgba(255, 255, 255, 0.2)
   */
  border?: string
  /**
   * Specifies the css border radius of the VcZoomControl.
   * Default value: 100px
   */
  borderRadius?: string
  /**
   * Specify the direction of the VcZoomControl.
   * Default value: vertical
   */
  direction?: 'vertical' | 'horizontal'
  /**
   * Specify the zoom in parameters.
   */
  zoomInOptions?: VcBtnTooltipProps
  /**
   * Specify the zoom out parameters.
   */
  zoomOutOptions?: VcBtnTooltipProps
  /**
   * Specify the reset button parameters.
   */
  zoomResetOptions?: VcBtnTooltipProps
  /**
   * Specify the customClass of the vc-zoom-control.
   */
  customClass?: string
  /**
   * Specify whether to add to the cesium-viewer node.
   * Default value: true
   */
  teleportToViewer?: boolean
  /**
   * Triggers before the VcZoomControl is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcZoomControl is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcZoomControl is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * 	Triggers when the VcZoomControl is operated.
   */
  onZoomEvt?: (evt: VcZoomEvt) => void
}

export type VcZoomControlRef = VcComponentPublicInstance<VcZoomControlProps>
