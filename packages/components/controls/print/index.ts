import type { ExtractPropTypes, CSSProperties, VNode } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, nextTick, ref, h, watch, reactive } from 'vue'
import type { VcPrintEvt, VcComponentInternalInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { $, getVcParentInstance, getInstanceListener } from '@vue-cesium/utils/private/vm'
import usePosition from '@vue-cesium/composables/private/use-position'
import { captureScreenshot } from '@vue-cesium/utils/cesium-helpers'
import { VcBtn, VcTooltip, VcIcon, VcTooltipProps } from '@vue-cesium/components/ui'
import { useCommon, useLocale } from '@vue-cesium/composables'
import createPrintView from './createPrintView'
import defaultProps from './defaultProps'
import printWindow from './printWindow'
import { isPlainObject } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'

const emits = {
  ...commonEmits,
  printEvt: (evt: VcPrintEvt) => true
}
export const printProps = defaultProps
export default defineComponent({
  name: 'VcPrint',
  props: printProps,
  emits: emits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcPrint'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { t } = useLocale()
    const { $services } = commonState
    const rootRef = ref<HTMLElement | null>(null)
    const tooltipRef = ref<typeof VcTooltip | null>(null)
    const btnRef = ref<typeof VcBtn | null>(null)
    const positionState = usePosition(props, $services)
    const creatingPrintView = ref(false)
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
    // methods
    instance.createCesiumObject = async () => {
      return new Promise((resolve, reject) => {
        canRender.value = true
        nextTick(() => {
          const { viewer } = $services
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
      viewer.viewerWidgetResized?.raiseEvent({
        type: instance.cesiumClass,
        status: 'mounted',
        target: $(rootRef)
      })
      return true
    }
    instance.unmount = async () => {
      const viewerElement = ($services.viewer as any)._element
      if (!hasVcNavigation) {
        viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef))
      }

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

      if (!hasVcNavigation) {
        const side = positionState.attach.value
        const btnTarget = $(btnRef)?.$el
        if (btnTarget !== void 0) {
          // const clientRect = btnTarget.getBoundingClientRect()
          // css.width = `${clientRect.width}px`
          // css.height = `${clientRect.height}px`

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

    const onHandleClick = () => {
      $(tooltipRef)?.hide()

      const { viewer } = $services
      captureScreenshot(viewer).then(imgSrc => {
        if (props.downloadAutomatically) {
          const link = document.createElement('a')
          link.download = t('vc.navigation.screenshot') || '场景截图'
          link.style.display = 'none'
          link.href = imgSrc
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }

        if (props.printAutomatically || props.showPrintView) {
          if (props.showPrintView) {
            showPrintView(imgSrc)
          } else if (props.printAutomatically) {
            print(imgSrc)
          }
        }

        const listener = getInstanceListener(instance, 'printEvt')
        listener &&
          ctx.emit('printEvt', {
            type: 'capture',
            image: imgSrc,
            status: 'end'
          })
      })
    }

    const print = image => {
      create(true, true, image)
    }

    const showPrintView = image => {
      create(false, false, image)
    }

    const create = (hidden, printAutomatically, image) => {
      creatingPrintView.value = true
      let iframe
      if (hidden) {
        iframe = document.createElement('iframe')
        document.body.appendChild(iframe)
      }

      const { viewer } = $services

      createPrintView({
        image,
        showCredit: props.showCredit,
        credits: getCredits(viewer),
        printWindow: iframe ? iframe.contentWindow : undefined,
        title: t('vc.navigation.print.printViewTitle'),
        readyCallback: windowToPrint => {
          if (printAutomatically) {
            printWindow(windowToPrint)
              .otherwise(e => {
                commonState.logger.warn(e)
              })
              .always(() => {
                if (iframe) {
                  document.body.removeChild(iframe)
                }
                if (hidden) {
                  creatingPrintView.value = false
                }
              })
          }
        },
        closeCallback: windowToPrint => {
          if (hidden) {
            creatingPrintView.value = false
          }
        }
      })

      if (!hidden) {
        creatingPrintView.value = false
      }
    }

    const getCredits = viewer => {
      const credits = viewer.scene.frameState.creditDisplay._currentFrameCredits.screenCredits.values.concat(
        viewer.scene.frameState.creditDisplay._currentFrameCredits.lightboxCredits.values
      )
      return credits.map(credit => credit.html)
    }

    const onTooltipBeforeShow = e => {
      if (creatingPrintView.value) {
        e.cancel = true
      }
    }

    return () => {
      if (canRender.value) {
        const inner: Array<VNode> = []
        inner.push(
          h(VcIcon, {
            name: props.icon,
            size: props.size
          })
        )

        inner.push(h('div', null, props.label))
        if (isPlainObject(props.tooltip)) {
          inner.push(
            h(
              VcTooltip,
              {
                ref: tooltipRef,
                onBeforeShow: onTooltipBeforeShow,
                ...props.tooltip
              },
              () => h('strong', null, (isPlainObject(props.tooltip) && props.tooltip.tip) || t('vc.navigation.print.printTip'))
            )
          )
        } else {
          inner.push(createCommentVNode('v-if'))
        }

        const child = [
          h(
            VcBtn,
            {
              ref: btnRef,
              size: props.size,
              disabled: creatingPrintView.value,
              flat: props.flat,
              stack: props.stack,
              round: props.round,
              style: { color: props.color, background: props.background },
              dense: true,
              onClick: onHandleClick
            },
            () => inner
          )
        ]

        return h(
          'div',
          {
            ref: rootRef,
            class: 'vc-print ' + positionState.classes.value,
            style: rootStyle
          },
          child
        )
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})

// export type VcPrintProps = ExtractPropTypes<typeof printProps>
export type VcPrintEmits = typeof emits
export type VcPrintProps = {
  /**
   * Specify the position of the VcPrint.
   * Default value: top-right
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'
  /**
   * An array of two numbers to offset the VcPrint horizontally and vertically in pixels.
   * Default value: [0, 0]
   */
  offset?: [number, number]
  /**
   * Specify whether to display the copyright information of the loaded data when printing pictures.
   * Default value: true
   */
  showCredit?: boolean
  /**
   * Specify whether to print automatically. Need to set showPrintView to false.
   * Default value: false
   */
  printAutomatically?: boolean
  /**
   * Specify whether to display the print preview.
   * Default value: true
   */
  showPrintView?: boolean
  /**
   * Specify whether to download the printed pictures.
   * Default value: false
   */
  downloadAutomatically?: boolean
  /**
   * Specify the icon of the VcPrint.
   * Default value: vc-icons-geolocation
   */
  icon?: string
  /**
   * Specify the size of the VcPrint.
   * Default value: 24px
   */
  size?: string
  /**
   * Specify the css color of the VcPrint.
   * Default value: #3f4854
   */
  color?: string
  /**
   * Specify the css background of the VcPrint.
   * Default value: #fff
   */
  background?: string
  /**
   * Makes a circle shaped VcPrint.
   */
  round?: boolean
  /**
   * Use 'flat' design.
   */
  flat?: boolean
  /**
   * The text that will be shown on the VcPrint.
   */
  label?: string
  /**
   * Stack icon and label vertically instead of on same line.
   */
  stack?: boolean
  /**
   * The tooltip parameter.
   */
  tooltip?: false | VcTooltipProps
  /**
   * Triggers before the VcPrint is loaded.
   * @param instance
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcPrint is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcPrint is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the print button is clicked.
   */
  onPrintEvt?: (evt: VcPrintEvt) => void
}
