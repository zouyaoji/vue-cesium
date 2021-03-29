import { computed, defineComponent, getCurrentInstance, nextTick, ref, CSSProperties, createCommentVNode, h, reactive, watch } from 'vue'
import { CameraObj, VcComponentInternalInstance, VcBtnOptions } from '@vue-cesium/utils/types'
import usePosition from '@vue-cesium/composables/private/use-position'
import { $, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import { setViewerCamera } from '@vue-cesium/utils/cesium-helpers'
import { hMergeSlot } from '@vue-cesium/utils/private/render'
import { defaultProps, defaultOptions } from './defaultProps'
import { VcBtn, VcIcon, VcTooltip } from '@vue-cesium/ui'
import { useCommon } from '@vue-cesium/composables'
import useZoomControl from './use-zoom-control'
import { t } from '@vue-cesium/locale'

export default defineComponent({
  name: 'VcZoomControl',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'zoomEvt'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcZoomControl'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    const { $services } = commonState
    const zoomControlState = useZoomControl(props, ctx, instance, $services)
    const positionState = usePosition(props, $services)
    const rootRef = ref<HTMLElement>(null)
    const zoomInRef = ref<typeof VcBtn>(null)
    const zoomResetRef = ref<typeof VcBtn>(null)
    const zoomOutRef = ref<typeof VcBtn>(null)
    const parentInstance = getVcParentInstance(instance)
    const hasVcNavigation = parentInstance.proxy.$options.name === 'VcNavigation'
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
    const zoomOutOptions = computed(
      () => Object.assign({}, defaultOptions.zoomOutOptions, props.zoomOutOptions)
    )
    const zoomInOptions = computed(
      () => Object.assign({}, defaultOptions.zoomInOptions, props.zoomInOptions)
    )
    const zoomResetOptions = computed(
      () => Object.assign({}, defaultOptions.zoomResetOptions, props.zoomResetOptions)
    )
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
        })
      })
    }
    instance.mount = async () => {
      updateRootStyle()
      const { viewer } = $services
      viewer.viewerWidgetResized.raiseEvent({
        type: instance.cesiumClass,
        status: 'mounted',
        target: $(rootRef)
      })
      return true
    }
    instance.unmount = async () => {
      const { viewer } = $services
      if (!hasVcNavigation) {
        const viewerElement = (viewer as any)._element
        viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef))
      }

      viewer.viewerWidgetResized.raiseEvent({
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
      Object.assign(rootStyle, css)
    }

    const getContent = (options: VcBtnOptions, type) => {
      let btnRef = void 0
      let tooltipRef = void 0
      let tip = void 0
      let onClick = void 0
      if (type === 'zoomIn') {
        btnRef = zoomInRef
        tooltipRef = zoomControlState.zoomInTooltipRef
        tip = t('vc.navigation.zoomCotrol.zoomInTip')
        onClick = zoomControlState.zoomIn
      } else if (type === 'zoomOut') {
        btnRef = zoomOutRef
        tooltipRef = zoomControlState.zoomOutTooltipRef
        tip = t('vc.navigation.zoomCotrol.zoomOutTip')
        onClick = zoomControlState.zoomOut
      } else if (type === 'zoomReset') {
        btnRef = zoomResetRef
        tooltipRef = zoomControlState.resetTooltipRef
        tip = t('vc.navigation.zoomCotrol.zoomResetTip')
        onClick = zoomControlState.zoomReset
      }
      const inner = []

      inner.push(
        h(VcIcon, {
          name: options.name,
          size: options.size
        })
      )
      inner.push(
        h('div', null, options.label)
      )
      if (options.tooltip) {
        inner.push(
          h(VcTooltip, {
            ref: tooltipRef,
            ...options.tooltip
          },
          () => h('strong', null, tip))
        )
      } else {
        inner.push(createCommentVNode('v-if'))
      }

      const content = h(VcBtn, {
        ref: btnRef,
        size: options.size,
        flat: options.flat,
        stack: options.stack,
        round: options.round,
        dense: true,
        style: { color: options.color, background: options.background },
        onClick: onClick
      }, () => hMergeSlot(ctx.slots.default, inner))

      return content
    }

    // expose public methods
    Object.assign(instance.proxy, {
      createPromise: commonState.createPromise,
      load: commonState.load,
      unload: commonState.unload,
      reload: commonState.reload,
      getCesiumObject: () => instance.cesiumObject
    })

    return () => {
      if (canRender.value) {
        const children = []
        children.push(
          h('li', null, getContent(zoomInOptions.value, 'zoomIn'))
        )
        if (props.enableResetButton) {
          children.push(
            h('li', null, getContent(zoomResetOptions.value, 'zoomReset'))
          )
        } else {
          children.push(createCommentVNode('v-if'))
        }
        children.push(
          h('li', null, getContent(zoomOutOptions.value, 'zoomOut'))
        )

        return h('div', {
          ref: rootRef,
          class: 'vc-zoom-control ' + positionState.classes.value,
          style: rootStyle
        }, h('ul', {
          class: 'vc-list'
        }, children))
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})
