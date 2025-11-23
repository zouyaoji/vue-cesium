/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:02
 * @LastEditTime: 2021-10-02 23:16:08
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\private\selection.ts
 */
import { platform } from '../platform'

export function clearSelection() {
  if (window.getSelection !== void 0) {
    const selection = window.getSelection()
    if (selection?.empty !== void 0) {
      selection.empty()
    }
    else if (selection?.removeAllRanges !== void 0) {
      selection.removeAllRanges()
      platform().isPhone !== true && selection.addRange(document.createRange())
    }
  }
  else if ((document as any).selection !== void 0) {
    ;(document as any).selection.empty()
  }
}
