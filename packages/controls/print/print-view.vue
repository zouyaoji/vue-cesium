<template>
  <div>
    <p>
      <img :src="options && options.image" :alt="t('vc.navigation.screenshot')" class="vc-map-image">
    </p>
    <h1 v-if="options.credits.length && options.showCredit">{{ t('vc.navigation.credit') }}</h1>
    <ul v-if="options.credits.length && options.showCredit">
      <li v-for="(credit, index) in credits" :key="'credit' + index" v-html="credit"></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { t } from '@vue-cesium/locale'

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
    // methods
    const checkForImagesReady = () => {
      if (ready.value) {
        return
      }

      const imageTags = props.options.printWindow.document.getElementsByTagName('img')
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
          if (props.options.readyCallback) {
            props.options.readyCallback(props.options.printWindow)
          }
          printingStarted.value = true
        }
      }
    }

    let _stopCheckingForImages = undefined

    const stopCheckingForImages = () => {
      if (_stopCheckingForImages) {
        _stopCheckingForImages()
      }
    }

    onMounted(() => {
      const printWindow = props.options.printWindow
      const mainWindow = window

      const printWindowIntervalId = printWindow?.setInterval(checkForImagesReady, 200)
      const mainWindowIntervalId = mainWindow.setInterval(checkForImagesReady, 200)

      _stopCheckingForImages = () => {
        printWindow.clearInterval(printWindowIntervalId)
        mainWindow.clearInterval(mainWindowIntervalId)
        _stopCheckingForImages = undefined
      }
    })

    onUnmounted(() => {
      stopCheckingForImages()
    })
    return {
      t
    }
  }
})

export default VcPrintView
</script>
