import type { VcBtnRef, VcTooltipRef } from '@vue-cesium/components/ui'
import type { VcViewerProps, VcViewerRef } from '@vue-cesium/components/viewer'
import type { VcBtnTooltipProps, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import type { CSSProperties, PropType, VNode, WatchStopHandle } from 'vue'
import { VcBtn, VcTooltip } from '@vue-cesium/components/ui'
import VcViewer from '@vue-cesium/components/viewer'
import { useCommon, useLocale } from '@vue-cesium/composables'
import usePosition from '@vue-cesium/composables/private/use-position'
import { compareCesiumVersion, makeColor } from '@vue-cesium/utils/cesium-helpers'
import { commonEmits } from '@vue-cesium/utils/emits'
import { hSlot } from '@vue-cesium/utils/private/render'
import { $ } from '@vue-cesium/utils/private/vm'
import { computed, createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, reactive, ref } from 'vue'

export const overviewProps = {
  position: {
    type: String as PropType<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>,
    default: 'bottom-right',
    validator: (v: string) => ['top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(v)
  },
  offset: {
    type: Array,
    validator: (v: Array<string>) => v.length === 2
  },
  width: {
    type: String,
    default: '150px'
  },
  height: {
    type: String,
    default: '150px'
  },
  border: {
    type: String,
    default: 'solid 4px rgb(255, 255, 255)'
  },
  borderRadius: {
    type: String
  },
  toggleOpts: {
    type: Object as PropType<VcBtnTooltipProps>
  },
  viewerOpts: {
    type: Object as PropType<VcViewerProps>
  },
  centerRectColor: {
    type: [Object, Array, String] as PropType<VcColor>,
    default: '#ff000080'
  },
  widthFactor: {
    type: Number,
    default: 2
  },
  heightFactor: {
    type: Number,
    default: 2
  },
  modelValue: {
    type: Boolean,
    default: true
  }
}
export default defineComponent({
  name: 'VcOverviewMap',
  props: overviewProps,
  emits: {
    ...commonEmits,
    'update:modelValue': (value: boolean) => true
  },
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcOverviewMap'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { t } = useLocale()
    const { $services } = commonState
    const rootRef = ref<HTMLElement>(null)
    const toggleBtnRef = ref<VcBtnRef>(null)
    const rootStyle = reactive<CSSProperties>({})
    const tooltipRef = ref<VcTooltipRef>(null)
    const viewerRef = ref<VcViewerRef>(null)
    const positionState = usePosition(props, $services)
    const showing = ref(props.modelValue)
    let unwatchFns: Array<WatchStopHandle> = []
    let overviewViewer: Cesium.Viewer
    let centerRect: Cesium.ViewportQuad

    // computed
    const toggleOpts = computed(() => {
      return Object.assign(
        {},
        {
          color: '#fff',
          background: '#3f4854',
          icon: 'vc-icons-overview-toggle',
          size: '15px',
          tooltip: {
            delay: 500,
            anchor: 'bottom middle',
            offset: [0, 20],
            tip: void 0
          } as any
        },
        props.toggleOpts
      )
    })

    const viewerOpts = computed(() => {
      return Object.assign(
        {},
        {
          removeCesiumScript: false,
          showCredit: false,
          sceneMode: 2,
          containerId: 'vc-overview-map'
        },
        props.viewerOpts
      )
    })
    // watch

    // methods
    instance.createCesiumObject = async () => {
      const { viewer } = $services
      const viewerElement = (viewer as any)._element
      viewerElement.appendChild($(rootRef))
      return [$(rootRef), $(viewerRef)]
    }

    instance.mount = async () => {
      updateRootStyle()
      const { viewer } = $services
      viewer.clock.onTick.addEventListener(onClockTick)
      return true
    }

    instance.unmount = async () => {
      const { viewer } = $services
      const viewerElement = (viewer as any)._element
      viewer.clock.onTick.removeEventListener(onClockTick)
      viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef))
      return true
    }

    const onClockTick = () => {
      if (overviewViewer) {
        const { viewer: parentViewer } = $services
        const parentCameraRectangle = parentViewer.camera.computeViewRectangle()
        const { defined } = Cesium
        if (!defined(parentCameraRectangle)) {
          return
        }
        const rectangle = parentCameraRectangle.expand(props.widthFactor, props.heightFactor)

        overviewViewer.camera.flyTo({
          destination: rectangle.clone(),
          // destination: parentViewer.camera.position,
          orientation: {
            heading: parentViewer.camera.heading,
            pitch: parentViewer.camera.pitch,
            roll: parentViewer.camera.roll
          },
          duration: 0.0
        })
        const { Cartesian3, SceneTransforms } = Cesium
        const wnPosition = Cartesian3.fromRadians(parentCameraRectangle.west, parentCameraRectangle.north)
        const enPosition = Cartesian3.fromRadians(parentCameraRectangle.east, parentCameraRectangle.north)
        const wsPosition = Cartesian3.fromRadians(parentCameraRectangle.west, parentCameraRectangle.south)
        const esPosition = Cartesian3.fromRadians(parentCameraRectangle.east, parentCameraRectangle.south)
        const scene = overviewViewer.scene

        compareCesiumVersion(Cesium.VERSION, '1.121')
          ? SceneTransforms.worldToWindowCoordinates(scene, wnPosition)
          : SceneTransforms['wgs84ToWindowCoordinates'](scene, wnPosition)

        const wnWindowPosition = compareCesiumVersion(Cesium.VERSION, '1.121')
          ? SceneTransforms.worldToWindowCoordinates(scene, wnPosition)
          : SceneTransforms['wgs84ToWindowCoordinates'](scene, wnPosition)
        const enWindowPosition = compareCesiumVersion(Cesium.VERSION, '1.121')
          ? SceneTransforms.worldToWindowCoordinates(scene, enPosition)
          : SceneTransforms['wgs84ToWindowCoordinates'](scene, enPosition)

        const wsWindowPosition = compareCesiumVersion(Cesium.VERSION, '1.121')
          ? SceneTransforms.worldToWindowCoordinates(scene, wsPosition)
          : SceneTransforms['wgs84ToWindowCoordinates'](scene, wsPosition)
        const esWindowPosition = compareCesiumVersion(Cesium.VERSION, '1.121')
          ? SceneTransforms.worldToWindowCoordinates(scene, esPosition)
          : SceneTransforms['wgs84ToWindowCoordinates'](scene, esPosition)

        if (!defined(wnWindowPosition) || !defined(enWindowPosition) || !defined(wsWindowPosition) || !defined(esWindowPosition)) {
          return
        }

        const width = enWindowPosition.x - wnWindowPosition.x
        const height = wsWindowPosition.y - wnWindowPosition.y
        const x = (wnWindowPosition.x + enWindowPosition.x) / 2 - width / 2
        const y = (wnWindowPosition.y + wsWindowPosition.y) / 2 - height / 2

        if (width <= 0 || height <= 0) {
          return
        }
        const boundingRectangle = new Cesium.BoundingRectangle(x, y, width, height)
        centerRect.rectangle = boundingRectangle
        centerRect.material.uniforms.color = makeColor(props.centerRectColor)
        centerRect.show = true
      }
    }

    const onViewerReady = (readyObj: VcReadyObject) => {
      const { viewer } = readyObj
      overviewViewer = viewer
      const control = viewer.scene.screenSpaceCameraController
      control.enableRotate = false
      control.enableTranslate = false
      control.enableZoom = false
      control.enableTilt = false
      control.enableLook = false

      overviewViewer.scene.highDynamicRange = false
      overviewViewer.scene.globe.enableLighting = false
      overviewViewer.scene.globe.showWaterEffect = false
      overviewViewer.scene.globe.depthTestAgainstTerrain = false
      overviewViewer.scene.skyAtmosphere.show = false
      overviewViewer.scene.fog.enabled = false
      overviewViewer.scene.skyBox.show = false
      overviewViewer.scene.sun.show = false
      overviewViewer.scene.moon.show = false
      overviewViewer.scene.highDynamicRange = false
      overviewViewer.scene.globe.showGroundAtmosphere = false

      centerRect = new Cesium.ViewportQuad(new Cesium.BoundingRectangle(150, 100, 100, 50))
      centerRect.show = false
      overviewViewer.scene.primitives.add(centerRect)
    }

    const updateRootStyle = () => {
      const css: CSSProperties = positionState.style.value
      rootStyle.left = css.left
      rootStyle.top = css.top
      rootStyle.transform = css.transform
      rootStyle['pointer-events'] = 'none'

      css.borderRadius = props.borderRadius
      css.border = props.border

      if (showing.value) {
        css.width = props.width
        css.height = props.height
      }
      else {
        const reg = /(\d+)/
        const regResult = reg.exec(props.border)
        const boder = regResult?.length ? Number.parseFloat(regResult[0]) : 0
        const toggleBtnRefStyle = getComputedStyle($(toggleBtnRef)?.$el)
        css.width = `${Number.parseFloat(toggleBtnRefStyle.width) + Number.parseFloat(toggleBtnRefStyle.padding) + boder}px`
        css.height = `${Number.parseFloat(toggleBtnRefStyle.height) + Number.parseFloat(toggleBtnRefStyle.padding) + boder}px`
      }
      Object.assign(rootStyle, css)
    }

    // const onTooltipBeforeShow = () => {

    // }

    const onToggle = () => {
      if (showing.value) {
        minimize()
      }
      else {
        restore()
      }
      showing.value = !showing.value
      ctx.emit('update:modelValue', showing.value)
    }

    const minimize = () => {
      const reg = /(\d+)/
      const regResult = reg.exec(props.border)
      const boder = regResult?.length ? Number.parseFloat(regResult[0]) : 0
      const toggleBtnRefStyle = getComputedStyle($(toggleBtnRef)?.$el)
      rootStyle.width = `${Number.parseFloat(toggleBtnRefStyle.width) + Number.parseFloat(toggleBtnRefStyle.padding) + boder}px`
      rootStyle.height = `${Number.parseFloat(toggleBtnRefStyle.height) + Number.parseFloat(toggleBtnRefStyle.padding) + boder}px`
    }

    const restore = () => {
      rootStyle.width = props.width
      rootStyle.height = props.height
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    return () => {
      const children: Array<VNode> = []
      children.push(
        h(
          VcBtn,
          {
            ref: toggleBtnRef,
            class: `toggle toggle-${props.position}${!showing.value ? ' minimized ' : ''}`,
            flat: true,
            dense: true,
            icon: toggleOpts.value.icon,
            size: toggleOpts.value.size,
            style: { 'color': toggleOpts.value.color, 'background': toggleOpts.value.background, 'pointer-events': 'auto' },
            onClick: onToggle
          },
          () =>
            toggleOpts.value.tooltip
              ? h(
                  VcTooltip,
                  {
                    ref: tooltipRef,
                    ...toggleOpts.value.tooltip
                    // onBeforeShow: onTooltipBeforeShow
                  },
                  () => h('strong', {}, toggleOpts.value.tooltip.tip || t(`vc.overview.${!showing.value ? 'show' : 'hidden'}`))
                )
              : createCommentVNode('v-if')
        )
      )
      children.push(
        h(
          VcViewer as any,
          {
            ref: viewerRef,
            ...viewerOpts.value,
            onReady: onViewerReady
          },
          () => hSlot(ctx.slots.default)
        )
      )
      return h(
        'div',
        {
          ref: rootRef,
          class: `vc-overview-map ${positionState.classes.value}`,
          style: rootStyle
        },
        children
      )
    }
  }
})

export interface VcOverviewMapProps {
  /**
   * Specify the position of the VcOverviewMap.
   * Default value: bottom-right
   */
  'position'?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'
  /**
   * An array of two numbers to offset the VcOverviewMap horizontally and vertically in pixels.
   * Default value: [0, 0]
   */
  'offset'?: [number, number]
  /**
   * Specify the width of the overviewmap component.
   * Default value: 150px
   */
  'width'?: string
  /**
   * Specify the height of the overviewmap component.
   * Default value: 150px
   */
  'height'?: string
  /**
   * Specify the border of the overviewmap component.
   * Default value: solid 4px rgb(255, 255, 255)
   */
  'border'?: string
  /**
   * Specify the border radius of the overviewmap component.
   */
  'borderRadius'?: string
  /**
   * Specify the toggle button options of the overviewmap component.
   */
  'toggleOpts'?: VcBtnTooltipProps
  /**
   * Specify the vc-viewer component options in the overviewmap component.
   */
  'viewerOpts'?: VcViewerProps
  /**
   * Specify the center rectangle color.
   * Default value: #ff000080
   */
  'centerRectColor'?: VcColor
  /**
   * Specify the width factor of center rectangle.
   * Default value: 2
   */
  'widthFactor'?: number
  /**
   * Specify the height factor of center rectangle.
   * Default value: 2
   */
  'heightFactor'?: number
  /**
   * Model of the component determining if VcOverviewMap should be expanded or not.
   * Default value: true
   */
  'modelValue'?: boolean
  /**
   * Triggers before the VcOverviewMap is loaded.
   * @param instance
   */
  'onBeforeLoad'?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcOverviewMap is successfully loaded.
   */
  'onReady'?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  'onUnready'?: (e: any) => void
  /**
   * Triggers when the VcOverviewMap is destroyed.
   */
  'onDestroyed'?: (instance: VcComponentInternalInstance) => void
  /**
   * Emitted when showing/hidden state changes; Is also used by v-model.
   * @param value New state (showing/hidden)
   */
  'onUpdate:modelValue'?: (value: boolean) => void
}

export interface VcOverviewMapSlots {
  /**
   * Default slot content of the component
   */
  default: () => VNode[]
}

export type VcOverviewMapRef = VcComponentPublicInstance<VcOverviewMapProps>
