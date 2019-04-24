<script>
import mergeDescriptors from '../../util/mergeDescriptors'
import cmp from '../../mixins/virtualCmp'
import CHInstance from '../../libs/heatmap/CHInstance.js'

export default {
  name: 'cesium-heatmap',
  data () {
    return {
      defaults: {
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
      WMP: null
    }
  },
  mixins: [cmp],
  props: {
    bounds: Object,
    options: Object,
    min: Number,
    max: Number,
    data: Array
  },
  watch: {
    bounds (val) {
      // this.reload()
    },
    options (val) {
      this.heatMapInstance._heatmap.configure(val)
      this.heatMapInstance._heatmap.repaint()
    },
    data (val) {
      this.reload()
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, bounds, options, min, max, data } = this
      this.WMP = new Cesium.WebMercatorProjection()
      let heatMapInstance = this.create(
        bounds,
        options
      )

      if (heatMapInstance.setWGS84Data(min, max, data)) {
        this.$emit('dataSeted', heatMapInstance._layer)
      }
      return heatMapInstance
    },
    mount () {
      // const { viewer, entity } = this
    },
    unload () {
      this.heatMapInstance.remove()
    },

    getServices () {
      const vm = this
      return mergeDescriptors(
        cmp.methods.getServices.call(this),
        {
          get heatMap () { return vm.heatMap },
          get heatMapContainer () { return vm }
        }
      )
    },
    /*  Create a CesiumHeatmap instance
      *
      *  cesium:  the CesiumWidget or Viewer instance
      *  bb:      the WGS84 bounding box like {north, east, south, west}
      *  options: a heatmap.js options object (see http://www.patrick-wied.at/static/heatmapjs/docs.html#h337-create)
      */
    create (bounds, options) {
      const { Cesium, viewer } = this
      let instance = new CHInstance(viewer, bounds, options, Cesium, this)
      return instance
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
    getImageryProvider (instance) {
      // var n = (new Date()).getTime();
      var d = instance._heatmap.getDataURL()
      // console.log("Create data URL: " + ((new Date()).getTime() - n));

      // var n = (new Date()).getTime();
      var imgprov = new Cesium.SingleTileImageryProvider({
        url: d,
        rectangle: instance._rectangle
      })
      // console.log("Create imageryprovider: " + ((new Date()).getTime() - n));

      imgprov._tilingScheme = new Cesium.WebMercatorTilingScheme({
        rectangleSouthwestInMeters: new Cesium.Cartesian2(instance._mbounds.west, instance._mbounds.south),
        rectangleNortheastInMeters: new Cesium.Cartesian2(instance._mbounds.east, instance._mbounds.north)
      })

      return imgprov
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
      var mp = this.WMP.project(Cesium.Cartographic.fromDegrees(p.x, p.y))
      return {
        x: mp.x,
        y: mp.y
      }
    },
    /*  Convert a WGS84 bounding box into a mercator bounding box
      *
      *  bb: the WGS84 bounding box like {north, east, south, west}
      */
    wgs84ToMercatorBB  (bb) {
      var sw = this.WMP.project(Cesium.Cartographic.fromDegrees(bb.west, bb.south))
      var ne = this.WMP.project(Cesium.Cartographic.fromDegrees(bb.east, bb.north))
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
      var wp = this.WMP.unproject(new Cesium.Cartesian3(p.x, p.y))
      return {
        x: wp.longitude,
        y: wp.latitude
      }
    },

    /*  Convert a mercator bounding box into a WGS84 bounding box
      *
      *  bb: the mercator bounding box like {north, east, south, west}
      */
    mercatorToWgs84BB  (bb) {
      var sw = this.WMP.unproject(new Cesium.Cartesian3(bb.west, bb.south))
      var ne = this.WMP.unproject(new Cesium.Cartesian3(bb.east, bb.north))
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
