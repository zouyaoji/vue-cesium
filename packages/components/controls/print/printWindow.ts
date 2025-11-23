/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:13
 * @LastEditTime: 2022-04-06 16:01:23
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\controls\print\printWindow.ts
 */
import defer from '@vue-cesium/utils/defer'

/**
 * Tells the web browser to print a given window, which my be an iframe window, and
 * returns a promise that resolves when printing is safely over so that, for example
 * the window can be removed.
 * @param {Window} windowToPrint The window to print.
 * @returns {Promise} A promise that resolves when printing is safely over. The prommise is rejected if
 *                    there is no indication that the browser's print
 */
function printWindow(windowToPrint) {
  const deferred = defer()
  let printInProgressCount = 0

  const timeout = setTimeout(() => {
    deferred.reject(false)
  }, 10000)

  function cancelTimeout() {
    clearTimeout(timeout)
  }

  function resolveIfZero() {
    if (printInProgressCount <= 0) {
      deferred.resolve()
    }
  }

  if (windowToPrint.matchMedia) {
    windowToPrint.matchMedia('print').addListener((evt) => {
      cancelTimeout()
      if (evt.matches) {
        ++printInProgressCount
      }
      else {
        --printInProgressCount
        resolveIfZero()
      }
    })
  }

  windowToPrint.onbeforeprint = function () {
    cancelTimeout()
    ++printInProgressCount
  }
  windowToPrint.onafterprint = function () {
    cancelTimeout()
    --printInProgressCount
    resolveIfZero()
  }

  // First try printing with execCommand, because, in IE11, `printWindow.print()`
  // prints the entire page instead of just the embedded iframe (if the window
  // is an iframe, anyway).
  const result = windowToPrint.document.execCommand('print', true, null)
  if (!result) {
    windowToPrint.print()
  }

  return deferred.promise
}

export default printWindow
