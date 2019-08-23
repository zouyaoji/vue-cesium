<template>
  <i style="display: none !important">
    <entity ref="1" v-if="type === 1" :show="show">
      <rectangle-graphics :coordinates="coordinates" :material="material"></rectangle-graphics>
    </entity>
    <ground-primitive ref="0" v-else-if="type === 0" :show="show" :appearance="appearance">
      <geometry-instance :geometry.sync="geometry">
        <rectangle-geometry :rectangle="coordinates"></rectangle-geometry>
      </geometry-instance>
    </ground-primitive>
    <imagery-layer ref="2" v-else-if="type === 2"  :show="show">
      <singletile-imagery-provider :url="layerUrl" :rectangle="coordinates"></singletile-imagery-provider>
    </imagery-layer>
  </i>
</template>
<script>
import cmp from '../../mixins/virtualCmp'
import h337 from '../../libs/heatmap/heatmap'
export default {
  name: 'cesium-heatmap',
  data () {
    return {
      defaultOptions: {
        useEntitiesIfAvailable: true, // whether to use entities if a Viewer is supplied or always use an ImageryProvider
        minCanvasSize: 700, // minimum size (in pixels) for the heatmap canvas
        maxCanvasSize: 2000, // maximum size (in pixels) for the heatmap canvas
        radiusFactor: 60, // data point size factor used if no radius is given (the greater of height and width divided by this number yields the used radius)
        spacingFactor: 1.5, // extra space around the borders (point radius multiplied by this number yields the spacing)
        maxOpacity: 0.8, // the maximum opacity used if not given in the heatmap options object
        minOpacity: 0.1, // the minimum opacity used if not given in the heatmap options object
        blur: 0.85, // the blur used if not given in the heatmap options object
        gradient: { // the gradient used if not given in the heatmap options object
          '.3': 'blue',
          '.65': 'yellow',
          '.8': 'orange',
          '.95': 'red'
        }
      },
      material: null,
      appearance: null,
      geometry: null,
      coordinates: { west: 0, south: 0, east: 0, north: 0 },
      layerUrl: ''
    }
  },
  mixins: [cmp],
  props: {
    type: {
      type: Number,
      default: 0
    },
    bounds: Object,
    options: Object,
    min: Number,
    max: Number,
    data: Array,
    show: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    changeProps () {
      const { bounds, options, min, max, data } = this
      return {
        bounds,
        options,
        min,
        max,
        data
      }
    }
  },
  watch: {
    changeProps: {
      handler (val, oldValue) {
        if (JSON.stringify(val) === JSON.stringify(oldValue)) return
        const { _heatmapInstance } = this
        if (JSON.stringify(val.bounds) !== JSON.stringify(oldValue.bounds)) {
          this.setBounds(val.bounds)
        }
        val.min !== oldValue.min && _heatmapInstance.setDataMin(val.min)
        val.max !== oldValue.max && _heatmapInstance.setDataMin(val.max)
        JSON.stringify(val.options) !== JSON.stringify(oldValue.options) && _heatmapInstance.configure(val.options)
        JSON.stringify(val.data) !== JSON.stringify(oldValue.data) && this.setWGS84Data(val.min, val.max, val.data)
        this.layerUrl = _heatmapInstance.getDataURL()
        this.appearance.material.uniforms.image = this.layerUrl
      },
      deep: true
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, bounds, options, min, max, data, defaultOptions } = this
      this._WMP = new Cesium.WebMercatorProjection()
      this._id = this.getID()
      options.gradient = options.gradient ? options.gradient : defaultOptions.gradient
      options.maxOpacity = options.maxOpacity ? options.maxOpacity : defaultOptions.maxOpacity
      options.minOpacity = options.minOpacity ? options.minOpacity : defaultOptions.minOpacity
      options.blur = options.blur ? options.blur : defaultOptions.blur
      this.setBounds(bounds)
      this._container = this.getContainer(
        this.width,
        this.height,
        this._id
      )
      this.options.container = this._container
      this._heatmapInstance = h337.create(this.options)
      this._container.children[0].setAttribute('id', this._id + '-hm')
      if (this.setWGS84Data(min, max, data)) {
        this.layerUrl = this._heatmapInstance.getDataURL()
      }
      this.material = new Cesium.ImageMaterialProperty({
        image: new Cesium.CallbackProperty(this.materialCallback, false),
        transparent: true
      })
      this.appearance = new Cesium.MaterialAppearance({
        material: new Cesium.Material({
          fabric: {
            type: 'Image',
            uniforms: {
              image: this.layerUrl
            }
          }
        })
      })
      return this._heatmapInstance
    },
    materialCallback () {
      return this.layerUrl
    },
    setBounds (bounds) {
      const { options, defaultOptions } = this
      this._mBounds = this.wgs84ToMercatorBounds(bounds)
      this.setWidthAndHeight(this._mBounds)
      options.radius = Math.round(options.radius ? options.radius : this.width > this.height
        ? this.width / defaultOptions.radiusFactor : this.height / defaultOptions.radiusFactor)
      this._spacing = options.radius * defaultOptions.spacingFactor
      this._xoffset = this._mBounds.west
      this._yoffset = this._mBounds.south
      this.width = Math.round(this.width + this._spacing * 2)
      this.height = Math.round(this.height + this._spacing * 2)
      this._mBounds.west -= this._spacing * this._factor
      this._mBounds.east += this._spacing * this._factor
      this._mBounds.south -= this._spacing * this._factor
      this._mBounds.north += this._spacing * this._factor
      this._bounds = this.mercatorToWgs84Bounds(this._mBounds)
      this.coordinates = this._bounds
    },
    mount () {},
    unload () {
      document.body.removeChild(this._container)
      const { type } = this
      this.$refs[type] && this.$refs[type].unload()
    },
    setWidthAndHeight (mbb) {
      const { defaultOptions } = this
      this.width = mbb.east > 0 && mbb.west < 0 ? mbb.east + Math.abs(mbb.west) : Math.abs(mbb.east - mbb.west)
      this.height = mbb.north > 0 && mbb.south < 0 ? mbb.north + Math.abs(mbb.south) : Math.abs(mbb.north - mbb.south)
      this._factor = 1
      if (this.width > this.height && this.width > defaultOptions.maxCanvasSize) {
        this._factor = this.width / defaultOptions.maxCanvasSize
        if (this.height / this._factor < defaultOptions.minCanvasSize) {
          this._factor = this.height / defaultOptions.minCanvasSize
        }
      } else if (this.height > this.width && this.height > defaultOptions.maxCanvasSize) {
        this._factor = this.height / defaultOptions.maxCanvasSize
        if (this.width / this._factor < defaultOptions.minCanvasSize) {
          this._factor = this.width / defaultOptions.minCanvasSize
        }
      } else if (this.width < this.height && this.width < defaultOptions.minCanvasSize) {
        this._factor = this.width / defaultOptions.minCanvasSize
        if (this.height / this._factor > defaultOptions.maxCanvasSize) {
          this._factor = this.height / defaultOptions.maxCanvasSize
        }
      } else if (this.height < this.width && this.height < defaultOptions.minCanvasSize) {
        this._factor = this.height / defaultOptions.minCanvasSize
        if (this.width / this._factor > defaultOptions.maxCanvasSize) {
          this._factor = this.width / defaultOptions.maxCanvasSize
        }
      }
      this.width = this.width / this._factor
      this.height = this.height / this._factor
    },
    getContainer (width, height, id) {
      var c = document.createElement('div')
      if (id) {
        c.setAttribute('id', id)
      }
      c.setAttribute('style', 'width: ' + width + 'px; height: ' + height + 'px; margin: 0px; display: none;')
      document.body.appendChild(c)
      return c
    },
    getID (len) {
      var text = ''
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (var i = 0; i < ((len) || 8); i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)) }

      return text
    },
    /*  Convert a WGS84 location into a mercator location
      *
      *  p: the WGS84 location like {x: lon, y: lat}
      */
    wgs84ToMercator  (p) {
      var mp = this._WMP.project(Cesium.Cartographic.fromDegrees(p.x, p.y))
      return {
        x: mp.x,
        y: mp.y
      }
    },
    /*  Convert a WGS84 bounding box into a mercator bounding box
      *
      *  bb: the WGS84 bounding box like {north, east, south, west}
      */
    wgs84ToMercatorBounds (bounds) {
      var sw = this._WMP.project(Cesium.Cartographic.fromDegrees(bounds.west, bounds.south))
      var ne = this._WMP.project(Cesium.Cartographic.fromDegrees(bounds.east, bounds.north))
      return {
        north: ne.y,
        east: ne.x,
        south: sw.y,
        west: sw.x
      }
    },
    /*  Convert a mercator location into a WGS84 location
      *
      *  p: the mercator lcation like {x, y}
      */
    mercatorToWgs84  (p) {
      var wp = this._WMP.unproject(new Cesium.Cartesian3(p.x, p.y))
      return {
        x: wp.longitude,
        y: wp.latitude
      }
    },

    /*  Convert a mercator bounding box into a WGS84 bounding box
      *
      *  bb: the mercator bounding box like {north, east, south, west}
      */
    mercatorToWgs84Bounds  (bb) {
      var sw = this._WMP.unproject(new Cesium.Cartesian3(bb.west, bb.south))
      var ne = this._WMP.unproject(new Cesium.Cartesian3(bb.east, bb.north))
      return {
        north: this.rad2deg(ne.latitude),
        east: this.rad2deg(ne.longitude),
        south: this.rad2deg(sw.latitude),
        west: this.rad2deg(sw.longitude)
      }
    },

    /*  Convert degrees into radians
      *
      *  d: the degrees to be converted to radians
      */
    deg2rad  (d) {
      var r = d * (Math.PI / 180.0)
      return r
    },

    /*  Convert radians into degrees
      *
      *  r: the radians to be converted to degrees
      */
    rad2deg  (r) {
      var d = r / (Math.PI / 180.0)
      return d
    },
    /*  Set an array of heatmap locations
     *
     *  min:  the minimum allowed value for the data values
     *  max:  the maximum allowed value for the data values
     *  data: an array of data points in heatmap coordinates and values like {x, y, value}
     */
    setData (min, max, data) {
      if (data && data.length > 0 && min !== null && min !== false && max !== null && max !== false) {
        this._heatmapInstance.setData({
          min: min,
          max: max,
          data: data
        })
        // this.updateLayer()
        return true
      }
      return false
    },
    /*  Set an array of WGS84 locations
     *
     *  min:  the minimum allowed value for the data values
     *  max:  the maximum allowed value for the data values
     *  data: an array of data points in WGS84 coordinates and values like { x:lon, y:lat, value }
     */
    setWGS84Data (min, max, data) {
      if (data && data.length > 0 && min !== null && min !== false && max !== null && max !== false) {
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
    },
    /*  Convert a WGS84 location to the corresponding heatmap location
     *
     *  p: a WGS84 location like {x:lon, y:lat}
     */
    wgs84PointToHeatmapPoint (p) {
      return this.mercatorPointToHeatmapPoint(
        this.wgs84ToMercator(p)
      )
    },
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
  },
  stubVNode: {
    attrs () {
      return {
        class: this.$options.name
      }
    }
  },
  created () {
    Object.defineProperties(this, {
      heatMapInstance: {
        enumerable: true,
        get: () => this.$services && this.cesiumObject
      }
    })
  }
}
</script>
