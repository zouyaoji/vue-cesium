<template>
  <div>
    <p>
      <img :src="mapImageDataUrl" alt="Map snaphot" class="vc-map-image" />
    </p>
    <h1 v-if="credits.length > 0 && options.showCredit">Map Credits</h1>
    <ul v-if="credits.length > 0 && options.showCredit">
      <template v-for="(credit, index) in credits ">
        <li :key="'credit' + index" v-html="credit"></li>
      </template>
    </ul>
  </div>
</template>

<script>
import { captureScreenshot, getAllAttribution } from '../../../utils/util'
export default {
  props: {
    options: Object
  },
  data () {
    return {
      mapImageDataUrl: undefined,
      ready: false,
      credits: []
    }
  },
  mounted () {
    captureScreenshot(this.options.viewer).then(mapImageDataUrl => {
      // We need to periodically check whether all images are loaded.
      // We can theoretically do that either with a setInterval on the original TerriaJS window,
      // or on the print view window. But:
      //    * Chrome (as of v66.0.3359.139 anyway) seems to aggressively suspend setInterval calls in background
      // tabs, so only a setInterval on the print view window works reliably.
      //    * Internet Explorer 11 does not seem to allow a cross-window setInterval call, so only a setInterval
      // on the original TerriaJS window works reliably.
      // So, we'll do both.
      const printWindow = this.options.printWindow
      const mainWindow = window

      const printWindowIntervalId = printWindow.setInterval(
        this.checkForImagesReady,
        200
      )
      const mainWindowIntervalId = mainWindow.setInterval(
        this.checkForImagesReady,
        200
      )

      this._stopCheckingForImages = () => {
        printWindow.clearInterval(printWindowIntervalId)
        mainWindow.clearInterval(mainWindowIntervalId)
        this._stopCheckingForImages = undefined
      }

      this.mapImageDataUrl = mapImageDataUrl
    })
    this.credits = getAllAttribution(this.options.viewer)
  },
  methods: {
    checkForImagesReady () {
      if (this.ready) {
        return
      }
      const imageTags = this.options.printWindow.document.getElementsByTagName('img')
      if (imageTags.length === 0) {
        return
      }

      let allImagesReady = true
      for (let i = 0; allImagesReady && i < imageTags.length; ++i) {
        allImagesReady = imageTags[i].complete
      }

      if (allImagesReady) {
        this.stopCheckingForImages()
        this.ready = allImagesReady
        this.$emit('ready', this.options.printWindow)
      }
    },
    stopCheckingForImages () {
      if (this._stopCheckingForImages) {
        this._stopCheckingForImages()
      }
    }
  },
  destroyed () {
    this.stopCheckingForImages()
  }
}
</script>
