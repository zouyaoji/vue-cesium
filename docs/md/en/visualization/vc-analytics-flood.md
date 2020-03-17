# VcAnalysisFlood

The `vc-analytics-flood` component is used to simulate flood analysis. **Note** Scene loading terrain or 3DTiles is required for analysis.

## Example

### Load a VcAnalysisFlood

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-analytics-flood
          ref="flood"
          :minHeight="minHeight"
          :maxHeight="maxHeight"
          :speed="speed"
          :polygonHierarchy="polygonHierarchy"
          @activeEvt="activeEvt"
        >
        </vc-analytics-flood>
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
        <vc-layer-imagery>
          <vc-provider-imagery-bingmaps :url="url" :bmKey="bmKey" mapStyle="Aerial"></vc-provider-imagery-bingmaps>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <md-input-container>
          <label>minHeight</label>
          <md-input v-model.number="minHeight"></md-input>
        </md-input-container>
        <md-input-container>
          <label>maxHeight</label>
          <md-input v-model.number="maxHeight"></md-input>
        </md-input-container>
        <span>speed</span>
        <vue-slider v-model="speed" :min="1" :max="100" :interval="1"></vue-slider>
        <md-button class="md-raised md-accent" @click="toggle">{{ flooding ? 'Stop' : 'Start' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">Clear</md-button>
      </div>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          minHeight: 0,
          maxHeight: 4000,
          speed: 10,
          polygonHierarchy: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 102.1, lat: 33.5 }
          ],
          url: 'https://dev.virtualearth.net',
          bmKey: 'AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-', // 可到(https://www.bingmapsportal.com/)申请Key。
          flooding: false
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          viewer.camera.setView({
            destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
            orientation: {
              heading: 6.20312220367255,
              pitch: -0.9937536846355606,
              roll: 0.002443376981836387
            }
          })
        },
        toggle() {
          this.$refs.flood.flooding = !this.$refs.flood.flooding
        },
        activeEvt(_) {
          this.flooding = _.isActive
        },
        clear() {
          this.$refs.flood.unload()
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-analytics-flood
        ref="flood"
        :minHeight="minHeight"
        :maxHeight="maxHeight"
        :speed="speed"
        :polygonHierarchy="polygonHierarchy"
        @activeEvt="activeEvt"
      >
      </vc-analytics-flood>
      <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
      <vc-layer-imagery>
        <vc-provider-imagery-bingmaps :url="url" :bmKey="bmKey" mapStyle="Aerial"></vc-provider-imagery-bingmaps>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <md-input-container>
        <label>minHeight</label>
        <md-input v-model.number="minHeight"></md-input>
      </md-input-container>
      <md-input-container>
        <label>maxHeight</label>
        <md-input v-model.number="maxHeight"></md-input>
      </md-input-container>
      <span>speed</span>
      <vue-slider v-model="speed" :min="1" :max="100" :interval="1"></vue-slider>
      <md-button class="md-raised md-accent" @click="toggle">{{ flooding ? 'Stop' : 'Start' }}</md-button>
      <md-button class="md-raised md-accent" @click="clear">Clear</md-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        minHeight: 0,
        maxHeight: 4000,
        speed: 10,
        polygonHierarchy: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 102.1, lat: 33.5 }
        ],
        url: 'https://dev.virtualearth.net',
        bmKey: 'AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-', // 可到(https://www.bingmapsportal.com/)申请Key。
        flooding: false
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
          orientation: {
            heading: 6.20312220367255,
            pitch: -0.9937536846355606,
            roll: 0.002443376981836387
          }
        })
      },
      toggle() {
        this.$refs.flood.flooding = !this.$refs.flood.flooding
      },
      activeEvt(_) {
        this.flooding = _.isActive
      },
      clear() {
        this.$refs.flood.unload()
      }
    }
  }
</script>
```

## Instance Properties

| name             | type   | default | description                                                                                      |
| ---------------- | ------ | ------- | ------------------------------------------------------------------------------------------------ |
| minHeight        | Number | 0       | `optional` Minimum elevation.                                                                    |
| maxHeight        | Number |         | `require` Maximum elevation.                                                                     |
| speed            | Number | 10      | `optional` Submerged speed.                                                                      |
| polygonHierarchy | Array  |         | `require` Specifies the latitude and longitude array that builds the submerged analysis polygon. |

---

## Events

| name      | parameter           | description                                                                                                                 |
| --------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ready     | {Cesium, viewer}    | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.           |
| activeEvt | {isActive: Boolean} | Triggered when the `flooding` state changes in the flood analysis component, and returns whether the flood analysis starts. |
