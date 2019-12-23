<template>
  <div class="vc-tool-btn">
    <button @click="handleCick" class="vc-btn" :title="$vc.lang.navigation.printView" type="button">
      <vc-icon-svg name="share"></vc-icon-svg>
    </button>
  </div>
</template>
<script>
import './icon/share'
import printWindow from '../../../exts/printWindow'
import '../../../assets/styles/components/toolButton.scss'
import VcIconSvg from './icon/VcIconSvg.vue'
import VcPrintView from './VcPrintView.vue'
import Vue from 'vue'
export default {
  name: 'vc-view-print',
  components: {
    VcIconSvg,
    VcPrintView
  },
  props: {
    printAutomatically: Boolean,
    showCredit: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      this.viewer = viewer
    })
  },
  methods: {
    handleCick () {
      this.createPrintView(this.printAutomatically, this.printAutomatically)
    },
    createPrintView (hidden, printAutomatically) {
      const { viewer, showCredit } = this
      this.creatingPrintView = true
      let iframe
      if (hidden) {
        iframe = document.createElement('iframe')
        document.body.appendChild(iframe)
      }
      const newWindow = createWindow({
        printWindow: iframe ? iframe.contentWindow : undefined,
        closeCallback: (windowToPrint) => {
          if (hidden) {
            this.creatingPrintView = false
          }
        }
      })
      new Vue({
        components: { VcPrintView },
        template: `
          <vc-print-view :options="options" @ready="printViewReady"></vc-print-view>
        `,
        data () {
          return {
            options: {
              viewer: viewer,
              printWindow: newWindow,
              showCredit: showCredit
            }
          }
        },
        methods: {
          printViewReady (windowToPrint) {
            if (printAutomatically) {
              printWindow(windowToPrint)
                .otherwise((e) => {
                  console.error(e)
                })
                .always(() => {
                  if (iframe) {
                    document.body.removeChild(iframe)
                  }
                  if (hidden) {
                    this.creatingPrintView = false
                  }
                })
            }
          }
        }
      }).$mount(newWindow.document.getElementById('print'))
      if (!hidden) {
        this.creatingPrintView = false
      }
    },
    printViewClosed (windowToPrint) {
      if (this.hidden) {
        this.creatingPrintView = false
      }
    }
  }
}

function createWindow (options) {
  const { printWindow = window.open(), closeCallback } = options
  if (closeCallback) {
    printWindow.addEventListener('unload', () => {
      closeCallback(printWindow)
    })
  }

  // Open and immediately close the document. This works around a problem in Firefox that is
  // captured here: https://bugzilla.mozilla.org/show_bug.cgi?id=667227.
  // Essentially, when we first create an iframe, it has no document loaded and asynchronously
  // starts a load of "about:blank". If we access the document object and start manipulating it
  // before that async load completes, a new document will be automatically created. But then
  // when the async load completes, the original, automatically-created document gets unloaded
  // and the new "about:blank" gets swapped in. End result: everything we add to the DOM before
  // the async load complete gets lost and Firefox ends up printing a blank page.
  // Explicitly opening and then closing a new document _seems_ to avoid this.
  printWindow.document.open()
  printWindow.document.close()
  printWindow.document.head.innerHTML = `
    <meta charset="UTF-8">
    <title>VueCesium Print View</title>
    <style>
      .background {
        width: 100%;
        fill: rgba(255, 255, 255, 1.0);
      }
      .map-image {
        max-width: 95vw;
        max-height: 95vh;
      }
      h1, h2, h3 {
        clear: both;
      }
      </style>
    `
  printWindow.document.body.innerHTML = '<div id="print"></div>'
  return printWindow
}
</script>
