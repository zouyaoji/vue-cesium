<template>
  <div v-if="distanceLabel" class="baseLegend distanceLegend">
    <label>{{distanceLabel}}</label>
    <div :style="barStyle" class="bar" />
  </div>
</template>

<script>
import '../../../assets/styles/components/legend.scss'
export default {
  name: 'vc-legend-distance',
  data () {
    return {
      barWidth: 0,
      distanceLabel: undefined
    }
  },
  computed: {
    barStyle: function () {
      return {
        width: this.barWidth + 'px',
        left: 5 + (125 - this.barWidth) / 2 + 'px',
        height: '2px'
      }
    }
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      this.viewer = viewer
      this.viewerSubscriptions = []
      this.removeUpdateSubscription = undefined
      this._lastLegendUpdate = undefined

      this.viewerSubscriptions.push(
        this.viewer.beforeViewerChanged.addEventListener(() => {
          if (Cesium.defined(this.removeUpdateSubscription)) {
            this.removeUpdateSubscription()
            this.removeUpdateSubscription = undefined
          }
        })
      )

      this.addUpdateSubscription()

      this.viewerSubscriptions.push(
        this.viewer.afterViewerChanged.addEventListener(() => {
          this.addUpdateSubscription()
        })
      )
    })
  },
  methods: {
    addUpdateSubscription () {
      // const that = this
      const { defined } = Cesium
      if (defined(this.viewer)) {
        const scene = this.viewer.scene
        this.removeUpdateSubscription = scene.postRender.addEventListener(() => {
          this.updateDistanceLegendCesium(scene)
        })
      }
    },
    updateDistanceLegendCesium (scene) {
      const { Cartesian2, defined, getTimestamp } = Cesium
      const now = getTimestamp()
      if (now < this._lastLegendUpdate + 250) {
        return
      }

      this._lastLegendUpdate = now
      const geodesic = new Cesium.EllipsoidGeodesic()
      // Find the distance between two pixels at the bottom center of the screen.
      const width = scene.canvas.clientWidth
      const height = scene.canvas.clientHeight

      const left = scene.camera.getPickRay(
        new Cartesian2((width / 2) | 0, height - 1)
      )
      const right = scene.camera.getPickRay(
        new Cartesian2((1 + width / 2) | 0, height - 1)
      )

      const globe = scene.globe
      const leftPosition = globe.pick(left, scene)
      const rightPosition = globe.pick(right, scene)

      if (!defined(leftPosition) || !defined(rightPosition)) {
        this.barWidth = undefined
        this.distanceLabel = undefined
        return
      }

      const leftCartographic = globe.ellipsoid.cartesianToCartographic(
        leftPosition
      )
      const rightCartographic = globe.ellipsoid.cartesianToCartographic(
        rightPosition
      )

      geodesic.setEndPoints(leftCartographic, rightCartographic)
      const pixelDistance = geodesic.surfaceDistance

      // Find the first distance that makes the scale bar less than 100 pixels.
      const maxBarWidth = 100
      let distance
      for (let i = distances.length - 1; !defined(distance) && i >= 0; --i) {
        if (distances[i] / pixelDistance < maxBarWidth) {
          distance = distances[i]
        }
      }

      if (defined(distance)) {
        let label
        if (distance >= 1000) {
          label = (distance / 1000).toString() + ' km'
        } else {
          label = distance.toString() + ' m'
        }

        this.barWidth = (distance / pixelDistance) | 0
        this.distanceLabel = label
      } else {
        this.barWidth = undefined
        this.distanceLabel = undefined
      }
    }
  }
}
const distances = [
  1,
  2,
  3,
  5,
  10,
  20,
  30,
  50,
  100,
  200,
  300,
  500,
  1000,
  2000,
  3000,
  5000,
  10000,
  20000,
  30000,
  50000,
  100000,
  200000,
  300000,
  500000,
  1000000,
  2000000,
  3000000,
  5000000,
  10000000,
  20000000,
  30000000,
  50000000
]
</script>
