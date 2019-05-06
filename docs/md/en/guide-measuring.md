# MeasureTool
`measure-distance` `measure-area` `measure-height`

## Example

### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="toggle('measureDistance')">{{ distanceMeasuring ? 'Stop' : 'Distance' }}</md-button>
        <md-button class="md-raised md-accent" @click="toggle('measureArea')">{{ areaMeasuring ? 'Stop' : 'Area' }}</md-button>
        <md-button class="md-raised md-accent" @click="toggle('measureHeight')">{{ heightMeasuring ? 'Stop' : 'Height' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">Clear</md-button>
      </div>
      <cesium-viewer @ready="ready" scene3DOnly>
        <cesium-3dtileset :url="modelUrl" @readyPromise="readyPromise"></cesium-3dtileset>
        <measure-distance ref="measureDistance" @activeEvt="activeEvt"></measure-distance>
        <measure-area :perPositionHeight="true" ref="measureArea" @activeEvt="activeEvt"></measure-area>
        <measure-height ref="measureHeight" @activeEvt="activeEvt"></measure-height>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          distanceMeasuring: false,
          areaMeasuring: false,
          heightMeasuring: false
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.cesiumInstance = cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
        },
        toggle (type) {
          this.$refs[type].measuring = !this.$refs[type].measuring
        },
        clear () {
          this.$refs.measureDistance.clear()
          this.$refs.measureArea.clear()
          this.$refs.measureHeight.clear()
        },
        activeEvt (_) {
          this[_.type] = _.isActive
        },
        readyPromise (tileset) {
          const {viewer} = this.cesiumInstance
          viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
        }
      }
    }
  </script>
</doc-preview>

### Code

```html
<template>
  <div class="viewer">
    <div class="demo-tool">
      <md-button class="md-raised md-accent" @click="toggle('measureDistance')">{{ distanceMeasuring ? 'Stop' : 'Distance' }}</md-button>
      <md-button class="md-raised md-accent" @click="toggle('measureArea')">{{ areaMeasuring ? 'Stop' : 'Area' }}</md-button>
      <md-button class="md-raised md-accent" @click="toggle('measureHeight')">{{ heightMeasuring ? 'Stop' : 'Height' }}</md-button>
      <md-button class="md-raised md-accent" @click="clear">Clear</md-button>
    </div>
    <cesium-viewer @ready="ready" scene3DOnly :terrainProvider="terrainProvider">
      <cesium-3dtileset :url="modelUrl" @readyPromise="readyPromise"></cesium-3dtileset>
      <measure-distance ref="measureDistance" @activeEvt="activeEvt"></measure-distance>
      <measure-area :perPositionHeight="true" ref="measureArea" @activeEvt="activeEvt"></measure-area>
      <measure-height ref="measureHeight" @activeEvt="activeEvt"></measure-height>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
        distanceMeasuring: false,
        areaMeasuring: false,
        heightMeasuring: false,
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.cesiumInstance = cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
      },
      toggle (type) {
        this.$refs[type].measuring = !this.$refs[type].measuring
      },
      clear () {
        this.$refs.measureDistance.clear()
        this.$refs.measureArea.clear()
        this.$refs.measureHeight.clear()
      },
      activeEvt (_) {
        this[_.type] = _.isActive
      },
      readyPromise (tileset) {
        const {viewer} = this.cesiumInstance
        viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
      }
    }
  }
</script>
```

## Instance Properties

### measure-area

|name|type|default|description|
|------|-----|-----|----|
|perPositionHeight|Boolean|true|`optional`A boolean specifying whether or not the the height of each position is used.|
