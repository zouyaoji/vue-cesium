
/**
 * Tells the web browser to print a given window, which my be an iframe window, and
 * returns a promise that resolves when printing is safely over so that, for example
 * the window can be removed.
 * @param {Window} windowToPrint The window to print.
 * @returns {Promise} A promise that resolves when printing is safely over. The prommise is rejected if
 *                    there is no indication that the browser's print
 */
function printWindow (windowToPrint) {
  const { when } = Cesium
  const deferred = when.defer()
  let printInProgressCount = 0

  const timeout = setTimeout(function () {
    deferred.reject(false)
  }, 10000)

  function cancelTimeout () {
    clearTimeout(timeout)
  }

  function resolveIfZero () {
    if (printInProgressCount <= 0) {
      deferred.resolve()
    }
  }

  if (windowToPrint.matchMedia) {
    windowToPrint.matchMedia('print').addListener(function (evt) {
      cancelTimeout()
      if (evt.matches) {
        // console.log(i18next.t('core.printWindow.printMediaStart'))
        ++printInProgressCount
      } else {
        // console.log(i18next.t('core.printWindow.printMediaEnd'))
        --printInProgressCount
        resolveIfZero()
      }
    })
  }

  windowToPrint.onbeforeprint = function () {
    cancelTimeout()
    // console.log(i18next.t('core.printWindow.onbeforeprint'))
    ++printInProgressCount
  }
  windowToPrint.onafterprint = function () {
    cancelTimeout()
    // console.log(i18next.t('core.printWindow.onafterprint'))
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
