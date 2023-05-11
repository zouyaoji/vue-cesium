/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-04-19 17:40:17
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2023-04-19 17:45:33
 * @FilePath: \vue-cesium@next\packages\shared\widgets\TimelineHighlightRange.ts
 */
export default class VcTimelineHighlightRange {
  _color: any
  _height: any
  _base: any
  _start: any
  _stop: any
  constructor(color, heightInPx, base) {
    this._color = color
    this._height = heightInPx
    this._base = Cesium.defaultValue(base, 0)
  }

  getHeight() {
    return this._height
  }

  getBase() {
    return this._base
  }

  getStartTime() {
    return this._start
  }

  getStopTime() {
    return this._stop
  }

  setRange(start, stop) {
    this._start = start
    this._stop = stop
  }

  render(renderState) {
    let range = ''
    const { JulianDate } = Cesium
    if (this._start && this._stop && this._color) {
      const highlightStart = JulianDate.secondsDifference(this._start, renderState.epochJulian)
      let highlightLeft = Math.round(renderState.timeBarWidth * renderState.getAlpha(highlightStart))
      const highlightStop = JulianDate.secondsDifference(this._stop, renderState.epochJulian)
      let highlightWidth = Math.round(renderState.timeBarWidth * renderState.getAlpha(highlightStop)) - highlightLeft
      if (highlightLeft < 0) {
        highlightWidth += highlightLeft
        highlightLeft = 0
      }
      if (highlightLeft + highlightWidth > renderState.timeBarWidth) {
        highlightWidth = renderState.timeBarWidth - highlightLeft
      }
      if (highlightWidth > 0) {
        range = `<span class="cesium-timeline-highlight" style="left: ${highlightLeft.toString()}px; width: ${highlightWidth.toString()}px; bottom: ${this._base.toString()}px; height: ${
          this._height
        }px; background-color: ${this._color};"></span>`
      }
    }
    return range
  }
}
