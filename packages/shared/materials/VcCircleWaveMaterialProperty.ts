/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-05-23 13:14:12
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2023-05-26 10:43:30
 * @FilePath: \vue-cesium\packages\shared\materials\VcCircleWaveMaterialProperty.ts
 */
import { VcColor } from '@vue-cesium/utils/types'
import { makeColor } from '@vue-cesium/utils/cesium-helpers'
export default class VcCircleWaveMaterialProperty {
  _definitionChanged: Cesium.Event<(...args: any[]) => void>
  _color: Cesium.ConstantProperty
  _duration: number
  _count: number
  _gradient: number
  _time: number
  constructor(options) {
    const { Event, defaultValue } = Cesium

    if (!Object.getOwnPropertyDescriptor(VcCircleWaveMaterialProperty.prototype, 'color')) {
      Object.defineProperties(VcCircleWaveMaterialProperty.prototype, {
        color: Cesium['createPropertyDescriptor']('color')
      })
    }

    this._definitionChanged = new Event()
    this._color = new Cesium.ConstantProperty(makeColor(options.color))
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

    this._init()
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
      this._color = new Cesium.ConstantProperty(makeColor(value as any))
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

  _init() {
    const CircleWaveMaterialType = 'VcCircleWave'
    const CircleWaveSource = `
      czm_material czm_getMaterial(czm_materialInput materialInput) {
      czm_material material = czm_getDefaultMaterial(materialInput);
      material.diffuse = 1.5 * color.rgb;
      vec2 st = materialInput.st;
      vec3 str = materialInput.str;
      float dis = distance(st, vec2(0.5, 0.5));
      float per = fract(time);
      if (abs(str.z) > 0.001) {
        discard;
      }
      if (dis > 0.5) {
        discard;
      } else {
        float perDis = 0.5 / count;
        float disNum;
        float bl = .0;
        for (int i = 0; i <= 9; i++) {
          if (float(i) <= count) {
            disNum = perDis *float(i) - dis + per / count;
            if (disNum > 0.0) {
              if (disNum < perDis) {
                bl = 1.0 - disNum / perDis;
              } else if(disNum - perDis < perDis) {
                bl = 1.0 - abs(1.0 - disNum / perDis);
              }
              material.alpha = pow(bl, gradient);
            }
          }
        }
      }
      return material;
    }`

    Cesium.Material['_materialCache'].addMaterial(CircleWaveMaterialType, {
      fabric: {
        type: CircleWaveMaterialType,
        uniforms: {
          color: new Cesium.Color(1, 0, 0, 1),
          time: 1,
          count: 1,
          gradient: 0.1
        },
        source: CircleWaveSource
      },
      translucent() {
        return true
      }
    })
  }
}
