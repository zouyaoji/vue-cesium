/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-24 14:20:28
 * @LastEditTime: 2021-11-25 23:20:26
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\shared\src\DynamicOverlay.ts
 */
import { makeCartesian3, makeJulianDate } from '@vue-cesium/utils/cesium-helpers'
import { Cartesian3Option, CartographicInDegreeOption, DynamicOverlayOpts } from '@vue-cesium/utils/types'

class DynamicOverlay {
  _sampledPosition: Cesium.SampledPositionProperty
  _entity: Cesium.Entity
  _cache: Cesium.JulianDate[]
  _maxCacheSize: number
  _lastTime: Cesium.JulianDate | undefined

  constructor(options: DynamicOverlayOpts) {
    const { SampledPositionProperty, Entity, ExtrapolationType, VelocityOrientationProperty } = Cesium
    this._lastTime = undefined
    this._sampledPosition = new SampledPositionProperty()
    this._sampledPosition.forwardExtrapolationType = options.forwardExtrapolationType || ExtrapolationType.HOLD
    this._sampledPosition.backwardExtrapolationType = options.backwardExtrapolationType || ExtrapolationType.HOLD
    this._cache = []
    this._maxCacheSize = options.maxCacheSize || 10

    const entity = new Entity(options)
    entity.position = this._sampledPosition
    entity.orientation = new VelocityOrientationProperty(this._sampledPosition)
    this._entity = entity
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
          start: start,
          stop: stop
        })
      )
      this._cache.splice(0, this._cache.length - this._maxCacheSize)
    }
  }
  /**
   *
   * @param position
   * @param interval
   * @returns
   */
  addPosition(
    position: Cesium.Cartesian3 | Cartesian3Option | CartographicInDegreeOption | Array<number>,
    timeOrInterval: string | number | Cesium.JulianDate
  ) {
    this._removePosition()
    let time
    if (typeof timeOrInterval === 'number') {
      const now = Cesium.JulianDate.now()
      time = Cesium.JulianDate.addSeconds(now, timeOrInterval, new Cesium.JulianDate())
    } else {
      time = makeJulianDate(timeOrInterval)
    }

    this._sampledPosition.addSample(time, makeCartesian3(position) as Cesium.Cartesian3)
    this._lastTime = time!
    this._cache.push(this._lastTime!)

    return this
  }
}

export default DynamicOverlay
