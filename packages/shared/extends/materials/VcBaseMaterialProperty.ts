/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-17 00:20:37
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2023-08-17 00:27:14
 * @FilePath: \vue-cesium\packages\shared\materials\VcBaseMaterialProperty.ts
 */
export default class BaseMaterialProperty {
  options: any
  _definitionChanged: Cesium.Event<(...args: any[]) => void>
  constructor(options = {}) {
    this.options = options
    this._definitionChanged = new Cesium.Event()
  }

  get isConstant() {
    return true
  }

  get definitionChanged() {
    return this._definitionChanged
  }

  getType(parameter) {
    return null
  }

  getValue(context, defaultValue = {}) {
    return defaultValue
  }

  equals(other) {
    return this === other
  }
}
