import type { AnyFunction, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import type { VNode } from 'vue'
import { useLocale } from '@vue-cesium/composables'
import { createCommentVNode, defineComponent, getCurrentInstance, h, onMounted, onUnmounted, ref } from 'vue'

const VcPrintView = defineComponent({
  name: 'VcPrintView',
  props: {
    options: Object
  },
  setup(props) {
    // state
    const ready = ref(false)
    const printingStarted = ref(false)
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcPrintView'
    const { t } = useLocale()
    // methods
    const checkForImagesReady = () => {
      if (ready.value) {
        return
      }

      const imageTags = props.options?.printWindow.document.getElementsByTagName('img')
      if (imageTags.length === 0) {
        return
      }

      let allImagesReady = true
      for (let i = 0; allImagesReady && i < imageTags.length; ++i) {
        allImagesReady = imageTags[i].complete
      }

      if (allImagesReady) {
        stopCheckingForImages()
        ready.value = allImagesReady

        if (ready.value && !printingStarted.value) {
          if (props.options?.readyCallback) {
            props.options.readyCallback(props.options.printWindow)
          }
          printingStarted.value = true
        }
      }
    }

    let _stopCheckingForImages: AnyFunction<void>

    const stopCheckingForImages = () => {
      if (_stopCheckingForImages) {
        _stopCheckingForImages()
      }
    }

    onMounted(() => {
      const printWindow = props.options?.printWindow
      const mainWindow = window

      const printWindowIntervalId = printWindow?.setInterval(checkForImagesReady, 200)
      const mainWindowIntervalId = mainWindow.setInterval(checkForImagesReady, 200)

      _stopCheckingForImages = () => {
        printWindow.clearInterval(printWindowIntervalId)
        mainWindow.clearInterval(mainWindowIntervalId)
        ;(_stopCheckingForImages as any) = undefined
      }
    })

    onUnmounted(() => {
      stopCheckingForImages()
    })

    return () => {
      const child: Array<VNode> = []
      child.push(
        h(
          'p',
          {},
          h('img', {
            src: props.options?.image,
            alt: t('vc.navigation.screenshot'),
            class: 'vc-map-image'
          })
        )
      )
      if (props.options?.credits.length && props.options?.showCredit) {
        child.push(h('h1', {}, t('vc.navigation.credit')))
      }
      else {
        child.push(createCommentVNode('v-if'))
      }
      if (props.options?.credits.length && props.options?.showCredit) {
        const inner: Array<VNode> = []
        props.options?.credits.forEach((credit) => {
          inner.push(
            h('li', {
              innerHTML: credit
            })
          )
        })
        child.push(h('ul', {}, inner))
      }
      else {
        child.push(createCommentVNode('v-if'))
      }
      return h('div', {}, child)
    }
  }
})

export default VcPrintView
