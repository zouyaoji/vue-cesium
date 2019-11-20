# MeasureTool

- The `measure-distance` component is used for distance measurement.
- The `measure-area` component is used for area measurement.
- The `measure-height` component is used for high measurement.

## Example

### Measuring distance, area, height

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="toggle('measureDistance')">{{ distanceMeasuring ? 'Stop' : 'Distance' }}</md-button>
        <md-button class="md-raised md-accent" @click="toggle('measureArea')">{{ areaMeasuring ? 'Stop' : 'Area' }}</md-button>
        <md-button class="md-raised md-accent" @click="toggle('measureHeight')">{{ heightMeasuring ? 'Stop' : 'Height' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">Clear</md-button>
      </div>
      <vc-viewer @ready="ready" scene3DOnly>
        <cesium-3dtileset :url="modelUrl" @readyPromise="readyPromise"></cesium-3dtileset>
        <measure-distance ref="measureDistance" distanceText="Distance: " @activeEvt="activeEvt" @measureEvt="measureEvt"></measure-distance>
        <measure-area ref="measureArea" areaText="Area: " @activeEvt="activeEvt" @measureEvt="measureEvt" :perPositionHeight="true"></measure-area>
        <measure-height ref="measureHeight" distanceHText="DistanceH:" distanceSText="DistanceS: " heightText="height: " @activeEvt="activeEvt"     @measureEvt="measureEvt"></measure-height>
      </vc-viewer>
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
        measureEvt(result) {
          console.log(result)
        },
        readyPromise (tileset) {
          const {viewer} = this.cesiumInstance
          viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <template>
    <div class="viewer">
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="toggle('measureDistance')"
          >{{ distanceMeasuring ? 'Stop' : 'Distance' }}</md-button
        >
        <md-button class="md-raised md-accent" @click="toggle('measureArea')">{{ areaMeasuring ? 'Stop' : 'Area' }}</md-button>
        <md-button class="md-raised md-accent" @click="toggle('measureHeight')"
          >{{ heightMeasuring ? 'Stop' : 'Height' }}</md-button
        >
        <md-button class="md-raised md-accent" @click="clear">Clear</md-button>
      </div>
      <vc-viewer @ready="ready" scene3DOnly>
        <cesium-3dtileset :url="modelUrl" @readyPromise="readyPromise"></cesium-3dtileset>
        <measure-distance
          ref="measureDistance"
          distanceText="Distance: "
          @activeEvt="activeEvt"
          @measureEvt="measureEvt"
        ></measure-distance>
        <measure-area
          ref="measureArea"
          areaText="Area: "
          @activeEvt="activeEvt"
          @measureEvt="measureEvt"
          :perPositionHeight="true"
        ></measure-area>
        <measure-height
          ref="measureHeight"
          distanceHText="DistanceH:"
          distanceSText="DistanceS: "
          heightText="height: "
          @activeEvt="activeEvt"
          @measureEvt="measureEvt"
        ></measure-height>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          distanceMeasuring: false,
          areaMeasuring: false,
          heightMeasuring: false
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.cesiumInstance = cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
        },
        toggle(type) {
          this.$refs[type].measuring = !this.$refs[type].measuring
        },
        clear() {
          this.$refs.measureDistance.clear()
          this.$refs.measureArea.clear()
          this.$refs.measureHeight.clear()
        },
        activeEvt(_) {
          this[_.type] = _.isActive
        },
        measureEvt(result) {
          console.log(result)
        },
        readyPromise(tileset) {
          const { viewer } = this.cesiumInstance
          viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
        }
      }
    }
  </script></template
>
```

## Instance Properties

### measure-distance

<!-- prettier-ignore -->
| name | type | default | description |
| ------------ | ------ | ------------------- | --------------------------------------------------- |
| mode         | Number | `1`                 | `optional` Measurement mode, 0 continuous measurement, 1 measurement ends once. |
| font         | String | `'100 20px SimSun'` | `optional` Specify the label CSS font.                      |
| distanceText | String | `'距离：'`          | `optional` Specify the distance text.                           |

---

### measure-area

<!-- prettier-ignore -->
| name | type | default | description |
| ----------------- | ------- | ------------------- | ------------------------------------------------------------------------------------------- |
| perPositionHeight | Boolean | `true` | `optional` Whether the face uses the height of each point, if not, the surface is drawn to the ground. (But the area algorithm is not the calculated floor area). |
| mode | Number | `1` | `optional` Measurement mode, 0 continuous measurement, 1 measurement ends once. |
| font | String | `'100 20px SimSun'` | `optional` Specify the area text. the label CSS font. |
| areaText | String | `'面积：'` | `optional` Specify the area text. |

---

### measure-height

<!-- prettier-ignore -->
| name | type | default | description |
| ------------- | ------ | ------------------- | --------------------------------------------------- |
| mode | Number | `1` | `optional` Measurement mode, 0 continuous measurement, 1 measurement ends once. |
| font | String | `'100 20px SimSun'` | `optional` Specify the label CSS font. |
| distanceHText | String | `'水平距离：'` | `optional` Specify horizontal distance text. |
| distanceSText | String | `'空间距离：'` | `optional` Specify the space distance text. |
| heightText | String | `'垂直高度：'` | `optional` Specify vertical height text. |

---

## Event

<!-- prettier-ignore -->
| name | parameter | description |
| ------- | --------|-------------- |
| activeEvt | { type: String, isActive: Boolean } | Triggered when the measurement starts or stops, and the return measurement type includes`'areaMeasuring'`、`'distanceMeasuring'`、`'heightMeasuring'`. |
| measureEvt | { polyline: Object, label: Object } | Triggered during the measurement process. Returns the result of the calculation, the text label object. You can get text label objects, custom text units, decimal points, and more. |

---

## Method

| name  | parameter | description                                                               |
| ----- | --------- | ------------------------------------------------------------------------- |
| clear |           | Clear the measurement result (and stop the measurement at the same time). |
