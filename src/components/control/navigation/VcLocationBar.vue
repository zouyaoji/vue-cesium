<template>
  <button @click="toggleUseProjection" class="vc-legend vc-bar-location" type="button">
    <template v-if="!mouseCoords.useProjection">
      <div class="vc-section">
        <span>{{$vc.lang.navigation.legend.lon}}</span>
        <span>{{ mouseCoords.longitude }}</span>
      </div>
      <div class="vc-section">
        <span>{{$vc.lang.navigation.legend.lat}}</span>
        <span>{{ mouseCoords.latitude }}</span>
      </div>
    </template>
    <template v-else>
      <div class="vc-section-short">
        <span>{{$vc.lang.navigation.legend.zone}}</span>
        <span>{{ mouseCoords.utmZone }}</span>
      </div>
      <div class="vc-section">
        <span>{{$vc.lang.navigation.legend.e}}</span>
        <span>{{ mouseCoords.east }}</span>
      </div>
      <div class="vc-section">
        <span>{{$vc.lang.navigation.legend.n}}</span>
        <span>{{ mouseCoords.north }}</span>
      </div>
    </template>
    <div class="vc-section-long" v-if="mouseCoords.elevation">
      <span>{{$vc.lang.navigation.legend.elev}}</span>
      <span>{{ mouseCoords.elevation }}</span>
    </div>
    <div class="vc-section-long" v-if="cameraHeight < 20000000">
      <span>{{$vc.lang.navigation.legend.cameraHeight}}</span>
      <span>{{ cameraHeight }}</span>
    </div>
  </button>
</template>

<script>
import '../../../assets/styles/components/legend.scss'
export default {
  name: 'vc-bar-location',
  data () {
    return {
      cameraHeight: 0
    }
  },
  props: {
    showUtmZone: {
      type: Boolean,
      default: true
    },
    mouseCoords: Object
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      this.viewer = viewer
      this.lastMouseX = -1
      this.lastMouseY = -1
      this.viewer._element.addEventListener('mousemove', this.onMouseMove, false)
      this.viewer._element.addEventListener('touchmove', this.onMouseMove, false)
      this.cameraHeight = this.viewer.camera.positionCartographic.height.toFixed(2)
      this.viewer.camera.changed.addEventListener(() => {
        this.cameraHeight = this.viewer.camera.positionCartographic.height.toFixed(2)
      })
    })
  },
  methods: {
    toggleUseProjection () {
      this.mouseCoords.toggleUseProjection()
    },
    onMouseMove (event) {
      const { Cartesian2 } = Cesium

      let clientX = event.type === 'mousemove' ? event.clientX : event.changedTouches[0].clientX
      let clientY = event.type === 'mousemove' ? event.clientY : event.changedTouches[0].clientY
      if (clientX === this.lastMouseX && clientY === this.lastMouseY) {
        return
      }

      this.lastMouseX = clientX
      this.lastMouseY = clientY

      if (this.viewer) {
        const rect = this.viewer._element.getBoundingClientRect()
        const position = new Cartesian2(clientX - rect.left, clientY - rect.top)
        this.mouseCoords.updateCoordinatesFromCesium(this.viewer, position)
      }
    }
  },
  destroyed () {
    this.viewer._element.removeEventListener('mousemove', this.onMouseMove, false)
    this.viewer._element.removeEventListener('touchmove', this.onMouseMove, false)
  }
}
</script>
