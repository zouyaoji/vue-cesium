<template>
  <div id="app">
    <div style="height: 100%">
      <vc-viewer ref="viewer" animation timeline @ready="ready">
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
        <vc-layer-imagery>
          <vc-provider-imagery-mapbox mapId="mapbox.streets"></vc-provider-imagery-mapbox>
        </vc-layer-imagery>
        <vc-datasource-custom name="custom" ref="custom">
          <vc-entity :position="position" :billboard="billboard" :description="description" :id="id"></vc-entity>
          <vc-entity :position="position1" :description="description" :cylinder.sync="cylinder1">
            <vc-graphics-cylinder ref="cylinder" :length="400000.0" :topRadius="200000.0" :bottomRadius="200000.0" :material="material1" :outline="true" :outlineColor="outlineColor1"></vc-graphics-cylinder>
          </vc-entity>
          <vc-entity :position="position2" :description="description" :cylinder.sync="cylinder2">
            <vc-graphics-cylinder :length="400000.0" :topRadius="0.0" :bottomRadius="200000.0" :material="material2" @ready="subReady"></vc-graphics-cylinder>
          </vc-entity>
        </vc-datasource-custom>
      </vc-viewer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      show: true,
      id: 'This is a billboard',
      description: 'Hello Vue Cesium',
      image: 'https://zouyaoji.top/vue-cesium/favicon.png',
      position: { lng: 108, lat: 35, height: 100 },
      billboard: {},
      description: 'Hello Vue Cesium',
      cylinder1: {},
      position1: { lng: 105.0, lat: 40.0, height: 200000.0 },
      outlineColor1: 'DARK_GREEN',
      material1: {},

      cylinder2: {},
      position2: { lng: 110.0, lat: 40.0, height: 200000.0 },
      material2: 'RED'
    }
  },
  computed: {
  },
  methods: {
    ready (cesiumInstance) {
      const { Cesium, viewer } = cesiumInstance
      this.material1 = Cesium.Color.GREEN.withAlpha(0.5)
      this.billboard = new Cesium.BillboardGraphics({
        image: 'https://zouyaoji.top/vue-cesium/favicon.png', // default: undefined
        show: true, // default
        pixelOffset: new Cesium.Cartesian2(0, -50), // default: (0, 0)
        eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
        scale: 0.5, // default: 1.0
        color: Cesium.Color.LIME, // default: WHITE
        alignedAxis: Cesium.Cartesian3.ZERO // default
      })
    }
  },
  mounted () {
  },
}
</script>

<style lang="scss" rel="stylesheet/scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  overflow: hidden;

  * {
    box-sizing: border-box;
  }
}

.panel {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 70vw;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 20px rgba(2, 2, 2, 0.1);
  padding: 5px;
  text-align: center;
  z-index: 1;

  > button {
    margin: 5px;
    padding: 5px 10px;
    text-transform: uppercase;
  }
}

.smooth-transition {
  transition: all 0.3s ease-in-out;
}
</style>
