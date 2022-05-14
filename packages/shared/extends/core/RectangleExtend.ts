/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-15 14:46:58
 * @LastEditTime: 2022-05-13 09:47:41
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\shared\extends\core\RectangleExtend.ts
 */

let isExtended = false
export default class RectangleExtend {
  static extend(viewer?: Cesium.Viewer) {
    if (isExtended) {
      return
    }
    const { Rectangle } = Cesium

    Rectangle.prototype.expand = function (widthFactor, heightFactor, result) {
      result = result && result instanceof Rectangle ? result : this.clone()
      widthFactor = (result.width * (1 - widthFactor)) / 2
      heightFactor = (result.height * (1 - heightFactor)) / 2

      result.west += widthFactor
      result.south += heightFactor
      result.east -= widthFactor
      result.north -= heightFactor
      result.west = result.west < -Math.PI ? -Math.PI : result.west
      result.east = result.east > Math.PI ? Math.PI : result.east
      result.north = result.north > Math.PI / 2 ? Math.PI / 2 : result.north
      result.south = result.south < -Math.PI / 2 ? -Math.PI / 2 : result.south

      return result
    }

    isExtended = true
  }

  static revoke(viewer?: Cesium.Viewer) {
    if (!isExtended) {
      return
    }

    const { Rectangle } = Cesium
    Rectangle.prototype.expand = undefined

    isExtended = false
  }
}
