import type { DynamicOverlayOpts, VcPosition } from '@vue-cesium/utils/types'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-24 14:20:28
 * @LastEditTime: 2022-09-08 15:41:35
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\shared\src\DynamicOverlay.ts
 */
import { makeCartesian3, makeJulianDate } from '@vue-cesium/utils/cesium-helpers'

class DynamicOverlay {
  _sampledPosition: Cesium.SampledPositionProperty
  _entity: Cesium.Entity
  _cache: Cesium.JulianDate[]
  _maxCacheSize: number
  _lastTime: Cesium.JulianDate | undefined
  _velocityVectorProperty: Cesium.VelocityVectorProperty

  constructor(options: DynamicOverlayOpts) {
    const { SampledPositionProperty, Entity, ExtrapolationType, VelocityOrientationProperty, CallbackProperty } = Cesium
    this._lastTime = undefined
    this._sampledPosition = new SampledPositionProperty()
    this._sampledPosition.forwardExtrapolationType = options.forwardExtrapolationType || ExtrapolationType.HOLD
    this._sampledPosition.backwardExtrapolationType = options.backwardExtrapolationType || ExtrapolationType.HOLD
    this._cache = []
    this._maxCacheSize = options.maxCacheSize || 10

    const entity = new Entity(options)
    entity.position = this._sampledPosition

    if (!Cesium.defined(options.orientation)) {
      // entity.orientation = new VelocityOrientationProperty(this._sampledPosition)
      const orientation = new VelocityOrientationProperty(this._sampledPosition)
      // 停止时保持方向
      let lastOri
      entity.orientation = new CallbackProperty((time, result) => {
        const ori = orientation.getValue(time)
        if (ori) {
          lastOri = ori
        }
        else {
          return lastOri
        }
        return ori
      }, false)
    }

    this._entity = entity
    // A velocity vector property will give us the entity's speed and direction at any given time.
    this._velocityVectorProperty = new Cesium.VelocityVectorProperty(this._sampledPosition, false)
  }

  get id() {
    return this._entity.id
  }

  set id(id) {
    this._entity.id = id
  }

  set maxCacheSize(maxCacheSize) {
    this._maxCacheSize = maxCacheSize
  }

  get maxCacheSize() {
    return this._maxCacheSize
  }

  get position() {
    return this._sampledPosition.getValue(Cesium.JulianDate.now())
  }

  _removePosition() {
    if (this._cache.length > this._maxCacheSize) {
      const start = Cesium.JulianDate.addSeconds(this._cache[0], -0.2, new Cesium.JulianDate())
      const stop = Cesium.JulianDate.addSeconds(this._cache[this._cache.length - this._maxCacheSize], -0.2, new Cesium.JulianDate())
      this._sampledPosition.removeSamples(
        new Cesium.TimeInterval({
          start,
          stop
        })
      )
      this._cache.splice(0, this._cache.length - this._maxCacheSize)
    }
  }

  /**
   * Add a position to the sampled position property and returns the JulianDate of the added sample.
   * @param position The position to add
   * @param timeOrInterval A time (number of seconds) or an interval or date for the sample
   * @returns {Cesium.JulianDate} The JulianDate corresponding to the added sample
   */
  addPosition(position: VcPosition, timeOrInterval: string | number | Cesium.JulianDate | Date) {
    this._removePosition()
    let time: Cesium.JulianDate
    if (typeof timeOrInterval === 'number') {
      const now = Cesium.JulianDate.now()
      time = Cesium.JulianDate.addSeconds(now, timeOrInterval, new Cesium.JulianDate())
      Cesium.destroyObject(now)
    }
    else {
      time = makeJulianDate(timeOrInterval)
    }

    this._sampledPosition.addSample(time, makeCartesian3(position) as Cesium.Cartesian3)
    this._lastTime = time!
    this._cache.push(this._lastTime!)

    return time
  }
}

export default DynamicOverlay
