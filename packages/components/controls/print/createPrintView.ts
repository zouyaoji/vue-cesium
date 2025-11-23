/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:13
 * @LastEditTime: 2022-02-09 16:40:15
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\controls\print\createPrintView.ts
 */
import { createApp } from 'vue'
import VcPrintView from './print-view'

const styles = `
  .background {
    width: 100%;
    fill: rgba(255, 255, 255, 1.0);
  }

  .map-image {
    max-width: 95vw;
    max-height: 95vh;
  }

  .layer-legends {
    display: inline;
    float: left;
    padding-left: 20px;
    padding-right: 20px;
  }

  .layer-title {
    font-weight: bold;
  }

  h1, h2, h3 {
    clear: both;
  }
`

function createPrintView(options) {
  const { printWindow = window.open(), closeCallback, title } = options
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
    <title>${options.title}</title>
    <style>${styles}</style>
    `
  printWindow.document.body.innerHTML = '<div id="print"></div>'

  options.printWindow = options.printWindow || printWindow

  const printViewProps = {
    options
  }

  const app = createApp(VcPrintView, printViewProps)
  app.mount(printWindow.document.getElementById('print'))
}

export default createPrintView
