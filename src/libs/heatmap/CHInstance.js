/*
 *  CesiumHeatmap.js v0.1 | Cesium Heatmap Library: https://github.com/manuelnas/CesiumHeatmap
 *
 *  Works with heatmap.js v2.0.0: http://www.patrick-wied.at/static/heatmapjs/
 */
const h337 = require('heatmap.js')
class CHInstance {
  constructor (c, bb, o, CesiumHeatmap) {
    if (!bb) {
      return null
    }
    if (!o) {
      o = {}
    }
    this._layer = undefined
    this.CesiumHeatmap = CesiumHeatmap
    this._cesium = c
    this._options = o
    this._id = CesiumHeatmap.getID()
    this._options.gradient = this._options.gradient
      ? this._options.gradient
      : CesiumHeatmap.defaults.gradient
    this._options.maxOpacity = this._options.maxOpacity
      ? this._options.maxOpacity
      : CesiumHeatmap.defaults.maxOpacity
    this._options.minOpacity = this._options.minOpacity
      ? this._options.minOpacity
      : CesiumHeatmap.defaults.minOpacity
    this._options.blur = this._options.blur
      ? this._options.blur
      : CesiumHeatmap.defaults.blur

    this._mbounds = CesiumHeatmap.wgs84ToMercatorBB(bb)
    this._setWidthAndHeight(this._mbounds)

    this._options.radius = Math.round(
      this._options.radius
        ? this._options.radius
        : this.width > this.height
          ? this.width / CesiumHeatmap.defaults.radiusFactor
          : this.height / CesiumHeatmap.defaults.radiusFactor
    )

    this._spacing = this._options.radius * CesiumHeatmap.defaults.spacingFactor
    this._xoffset = this._mbounds.west
    this._yoffset = this._mbounds.south

    this.width = Math.round(this.width + this._spacing * 2)
    this.height = Math.round(this.height + this._spacing * 2)

    this._mbounds.west -= this._spacing * this._factor
    this._mbounds.east += this._spacing * this._factor
    this._mbounds.south -= this._spacing * this._factor
    this._mbounds.north += this._spacing * this._factor

    this.bounds = CesiumHeatmap.mercatorToWgs84BB(this._mbounds)

    this._rectangle = Cesium.Rectangle.fromDegrees(
      this.bounds.west,
      this.bounds.south,
      this.bounds.east,
      this.bounds.north
    )
    this._container = CesiumHeatmap.getContainer(
      this.width,
      this.height,
      this._id
    )
    this._options.container = this._container
    this._heatmap = h337.create(this._options)
    this._container.children[0].setAttribute('id', this._id + '-hm')
  }
  /*  Convert a WGS84 location to the corresponding heatmap location
   *
   *  p: a WGS84 location like {x:lon, y:lat}
   */
  wgs84PointToHeatmapPoint (p) {
    return this.mercatorPointToHeatmapPoint(
      this.CesiumHeatmap.wgs84ToMercator(p)
    )
  }
  /*  Convert a mercator location to the corresponding heatmap location
   *
   *  p: a WGS84 location like {x: lon, y:lat}
   */
  mercatorPointToHeatmapPoint (p) {
    var pn = {}

    pn.x = Math.round((p.x - this._xoffset) / this._factor + this._spacing)
    pn.y = Math.round((p.y - this._yoffset) / this._factor + this._spacing)
    pn.y = this.height - pn.y

    return pn
  }

  _setWidthAndHeight (mbb) {
    const { CesiumHeatmap } = this
    this.width =
      mbb.east > 0 && mbb.west < 0
        ? mbb.east + Math.abs(mbb.west)
        : Math.abs(mbb.east - mbb.west)
    this.height =
      mbb.north > 0 && mbb.south < 0
        ? mbb.north + Math.abs(mbb.south)
        : Math.abs(mbb.north - mbb.south)
    this._factor = 1

    if (
      this.width > this.height &&
      this.width > CesiumHeatmap.defaults.maxCanvasSize
    ) {
      this._factor = this.width / CesiumHeatmap.defaults.maxCanvasSize

      if (this.height / this._factor < CesiumHeatmap.defaults.minCanvasSize) {
        this._factor = this.height / CesiumHeatmap.defaults.minCanvasSize
      }
    } else if (
      this.height > this.width &&
      this.height > CesiumHeatmap.defaults.maxCanvasSize
    ) {
      this._factor = this.height / CesiumHeatmap.defaults.maxCanvasSize

      if (this.width / this._factor < CesiumHeatmap.defaults.minCanvasSize) {
        this._factor = this.width / CesiumHeatmap.defaults.minCanvasSize
      }
    } else if (
      this.width < this.height &&
      this.width < CesiumHeatmap.defaults.minCanvasSize
    ) {
      this._factor = this.width / CesiumHeatmap.defaults.minCanvasSize

      if (this.height / this._factor > CesiumHeatmap.defaults.maxCanvasSize) {
        this._factor = this.height / CesiumHeatmap.defaults.maxCanvasSize
      }
    } else if (
      this.height < this.width &&
      this.height < CesiumHeatmap.defaults.minCanvasSize
    ) {
      this._factor = this.height / CesiumHeatmap.defaults.minCanvasSize

      if (this.width / this._factor > CesiumHeatmap.defaults.maxCanvasSize) {
        this._factor = this.width / CesiumHeatmap.defaults.maxCanvasSize
      }
    }

    this.width = this.width / this._factor
    this.height = this.height / this._factor
  }

  /*  Set an array of heatmap locations
   *
   *  min:  the minimum allowed value for the data values
   *  max:  the maximum allowed value for the data values
   *  data: an array of data points in heatmap coordinates and values like {x, y, value}
   */
  setData (min, max, data) {
    if (
      data &&
      data.length > 0 &&
      min !== null &&
      min !== false &&
      max !== null &&
      max !== false
    ) {
      this._heatmap.setData({
        min: min,
        max: max,
        data: data
      })

      // this.updateLayer()
      return true
    }

    return false
  }

  /*  Set an array of WGS84 locations
   *
   *  min:  the minimum allowed value for the data values
   *  max:  the maximum allowed value for the data values
   *  data: an array of data points in WGS84 coordinates and values like { x:lon, y:lat, value }
   */
  setWGS84Data (min, max, data) {
    if (
      data &&
      data.length > 0 &&
      min !== null &&
      min !== false &&
      max !== null &&
      max !== false
    ) {
      var convdata = []

      for (var i = 0; i < data.length; i++) {
        var gp = data[i]

        var hp = this.wgs84PointToHeatmapPoint(gp)
        if (gp.value || gp.value === 0) {
          hp.value = gp.value
        }

        convdata.push(hp)
      }

      return this.setData(min, max, convdata)
    }

    return false
  }

  /*  Set whether or not the heatmap is shown on the map
   *
   *  s: true means the heatmap is shown, false means the heatmap is hidden
   */
  show (s) {
    if (this._layer) {
      this._layer.show = s
    }
  }

  remove () {
    if (this._layer) {
      this._cesium.entities.remove(this._layer)
    }
  }

  /*  Update/(re)draw the heatmap
   */
  updateLayer () {
    // only works with a Viewer instance since the cesiumWidget
    // instance doesn't contain an entities property
    const { CesiumHeatmap } = this
    if (
      CesiumHeatmap.defaults.useEntitiesIfAvailable &&
      this._cesium.entities
    ) {
      if (this._layer) {
        this._cesium.entities.remove(this._layer)
      }

      // Work around issue with material rendering in Cesium
      // provided by https://github.com/criis
      let material = new Cesium.ImageMaterialProperty({
        image: this._heatmap._renderer.canvas
      })
      if (Cesium.VERSION >= '1.21') {
        material.transparent = true
      } else if (Cesium.VERSION >= '1.16') {
        material.alpha = 0.99
      }

      this._layer = this._cesium.entities.add({
        show: true,
        rectangle: {
          coordinates: this._rectangle,
          material: material
        }
      })
    } else {
      if (this._layer) {
        this._cesium.scene.imageryLayers.remove(this._layer)
      }

      this._layer = this._cesium.scene.imageryLayers.addImageryProvider(
        CesiumHeatmap.getImageryProvider(this)
      )
    }
  }
}

export default CHInstance
