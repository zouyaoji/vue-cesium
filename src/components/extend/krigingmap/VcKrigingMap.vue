<template>
  <i :class="$options.name" style="display: none !important">
    <vc-datasource-geojson :data="data" :options="datasourceOptions" :show="show" ref="geojsonDatasource" v-if="data !== null"></vc-datasource-geojson>
    <!-- <vc-entity>
      <vc-graphics-polygon :hierarchy="hierarchy1" :material="material1" ref="polygon1"></vc-graphics-polygon>
    </vc-entity>-->
  </i>
</template>
<script>
import cmp from '../../../mixins/virtualCmp'
import kriging from '@sakitam-gis/kriging'
import { featureCollection, point } from '@turf/helpers'
import isobands from '@turf/isobands'
// import area from '@turf/area'
export default {
  name: 'vc-kriging-map',
  data () {
    return {
      material1: {},
      hierarchy1: {},
      data: null,
      datasourceOptions: {
        clampToGround: true
      },
      nowaiting: true
    }
  },
  mixins: [cmp],
  props: {
    values: Array,
    lngs: Array,
    lats: Array,
    krigingModel: {
      type: String,
      default: 'exponential' // gaussian spherical exponential
    },
    krigingSigma2: {
      type: Number,
      default: 0
    },
    krigingAlpha: {
      type: Number,
      default: 100
    },
    canvasAlpha: {
      type: Number,
      default: 0.75
    },
    colors: {
      type: Array,
      default: () => {
        return ['#006837', '#1a9850', '#66bd63', '#a6d96a', '#d9ef8b', '#ffffbf', '#fee08b', '#fdae61', '#f46d43', '#d73027', '#a50026']
      }
    },
    breaks: {
      type: Array,
      default: () => {
        return [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    },
    clipCoords: {
      type: Array | String,
      default: () => {
        return []
      }
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  created () {
    this._creatPromise = new Promise((resolve, reject) => {
      this._resolve = resolve
      this._reject = reject
    })
  },
  mounted () {
    this.$parent.createPromise.then(async ({ Cesium, viewer }) => {
      console.log('viewerReady')
      const { values, lngs, lats, krigingModel, krigingSigma2, krigingAlpha, breaks, clipCoords } = this
      const variogram = kriging.train(values, lngs, lats, krigingModel, krigingSigma2, krigingAlpha)

      let coordinates = []
      if (clipCoords instanceof Array) {
        coordinates = clipCoords
      } else if (typeof clipCoords === 'string') {
        let requstData = await Cesium.Resource.fetchJson(clipCoords)
        coordinates = requstData.features[0].geometry.coordinates
      }

      let coords = []
      for (let i = 0; i < coordinates[0].length; i++) {
        for (let j = 0; j < 2; j++) {
          coords.push(coordinates[0][i][j])
        }
      }

      let rectangle
      if (coords.length > 4) {
        rectangle = Cesium.PolygonGeometry.computeRectangle({
          polygonHierarchy: new Cesium.PolygonHierarchy(
            Cesium.Cartesian3.fromDegreesArray(coords)
          )
        })
      } else {
        rectangle = Cesium.Rectangle.fromDegrees(coords[0], coords[1], coords[2], coords[3])
      }
      // this.hierarchy1 = new Cesium.PolygonHierarchy(
      //   Cesium.Cartesian3.fromDegreesArray(coords)
      // )
      let extent = [
        Cesium.Math.toDegrees(rectangle.west),
        Cesium.Math.toDegrees(rectangle.south),
        Cesium.Math.toDegrees(rectangle.east),
        Cesium.Math.toDegrees(rectangle.north)
      ]

      let grid = kriging.grid(coordinates, variogram, (extent[2] - extent[0]) / 200)

      let fc = this.gridFeatureCollection(grid, [extent[0], extent[2]], [extent[1], extent[3]])
      var collection = featureCollection(fc)
      // console.log(collection)
      var isobandsResult = isobands(collection, breaks, { zProperty: 'value' })
      // console.log(isobandsResult)
      // function sortArea (a, b) {
      //   return area(b) - area(a)
      // }
      // 按照面积对图层进行排序，规避turf的一个bug
      // isobandsResult.features.sort(sortArea)
      this.data = isobandsResult
      this._resolve(true)
    })
  },
  methods: {
    async createCesiumObject () {
      return this._creatPromise.then(() => {
        return this.$refs.geojsonDatasource.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
          const { setPolygonColor } = this
          if (!this.$refs.geojsonDatasource._mounted) {
            return this.$refs.geojsonDatasource.load().then(({ Cesium, viewer, cesiumObject }) => {
              return setPolygonColor(cesiumObject)
            })
          } else {
            return setPolygonColor(cesiumObject)
          }
        })
      })
    },
    setPolygonColor (cesiumObject) {
      const { breaks, colors } = this
      cesiumObject.entities.values.reduce((pre, cur) => {
        const index = breaks.indexOf(parseFloat(cur.properties.getValue().value.split('-')[0]))
        cur.polygon.material = Cesium.Color.fromCssColorString(colors[index])
        cur.polygon.outline = false
      }, [])
      return cesiumObject
    },
    gridFeatureCollection (grid, xlim, ylim) {
      // var range = grid.zlim[1] - grid.zlim[0]
      var i, j, x, y, z
      var n = grid.data.length // 列数
      var m = grid.data[0].length // 行数
      var pointArray = []

      for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
          x = i * grid.width + grid.xlim[0]
          y = j * grid.width + grid.ylim[0]
          // z = (grid.data[i][j] - grid.zlim[0]) / range
          z = grid.data[i][j]
          // if (z < 0.0) z = 0.0
          // if (z > 1.0) z = 1.0
          pointArray.push(point([x, y], { value: z }))
        }
      }
      return pointArray
    },
    async mount () {
      return true
    },
    async unmount () {
      return this.$refs.geojsonDatasource && this.$refs.geojsonDatasource.unload()
    }
  }
}
</script>
