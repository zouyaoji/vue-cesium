import VcBaseMaterialProperty from './VcBaseMaterialProperty'

/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-05-23 13:14:12
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2023-08-18 01:11:19
 * @FilePath: \vue-cesium\packages\shared\extends\materials\VcCircleWaveMaterialProperty.ts
 */
export default class VcCircleWaveMaterialProperty extends VcBaseMaterialProperty {
  _definitionChanged: Cesium.Event<(...args: any[]) => void>
  _color: Cesium.ConstantProperty
  _duration: number
  _count: number
  _gradient: number
  _time: number
  constructor(options) {
    super(options)
    const { Event, defaultValue } = Cesium

    if (!Object.getOwnPropertyDescriptor(VcCircleWaveMaterialProperty.prototype, 'color')) {
      Object.defineProperties(VcCircleWaveMaterialProperty.prototype, {
        color: Cesium['createPropertyDescriptor']('color')
      })
    }

    this._definitionChanged = new Event()
    this._color = new Cesium.ConstantProperty(options.color)
    this._duration = defaultValue(options.duration, 1000)
    this.count = defaultValue(options.count, 2)
    if (this.count <= 0) {
      this.count = 1
    }
    this._gradient = defaultValue(options.gradient, 0.1)
    if (this._gradient === 0) {
      this._gradient = 0
    }
    if (this._gradient > 1) {
      this._gradient = 1
    }
    this._time = new Date().getTime()
  }

  get isConstant() {
    return false
  }

  get definitionChanged() {
    return this._definitionChanged
  }

  get color() {
    return this._color
  }

  set color(value) {
    const oldValue = this._color

    if (oldValue !== value) {
      this._color = new Cesium.ConstantProperty(value as any)
      this._definitionChanged.raiseEvent(this, 'color', value, oldValue)
    }
  }

  get duration() {
    return this._duration
  }

  set duration(value) {
    const oldValue = this._duration

    if (oldValue !== value) {
      this._duration = value
      this._definitionChanged.raiseEvent(this, 'duration', value, oldValue)
    }
  }

  get count() {
    return this._count
  }

  set count(value) {
    const oldValue = this._count

    if (oldValue !== value) {
      this._count = value
      this._definitionChanged.raiseEvent(this, 'count', value, oldValue)
    }
  }

  getType() {
    return 'VcCircleWave'
  }

  getValue(time, result) {
    if (!Cesium.defined(result)) {
      result = {}
    }
    result.color = Cesium.Property['getValueOrClonedDefault'](this._color, time, Cesium.Color.YELLOW, result.color)
    result.time = ((new Date().getTime() - this._time) % this.duration) / this.duration
    result.count = this.count
    result.gradient = 1 + 10 * (1 - this._gradient)
    return result
  }

  equals(other) {
    const reData = this === other || (other instanceof VcCircleWaveMaterialProperty && Cesium.Property['equals'](this._color, other._color))
    return reData
  }
}
