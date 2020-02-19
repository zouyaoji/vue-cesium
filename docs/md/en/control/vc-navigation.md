# VcNavigation

The `vc-navigation` component is used to load the navigation compass widget. **Note:** This component requires `import 'vue-cesium/lib/vc-navigation.css'`, Requires `css-loader`.

## Example

### Load a VcNavigation

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-navigation ref="navigation" :options="options"></vc-navigation>
        <vc-layer-imagery>
          <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>EnableCompass</span>
        <md-switch v-model="options.enableCompass"></md-switch>
        <span>EnableZoomControl</span>
        <md-switch v-model="options.enableZoomControl"></md-switch>
        <span>EnableDistanceLegend</span>
        <md-switch v-model="options.enableDistanceLegend"></md-switch>
        <span>EnableLocationBar</span>
        <md-switch v-model="options.enableLocationBar"></md-switch>
        <span>EnableCompassOuterRing</span>
        <md-switch v-model="options.enableCompassOuterRing"></md-switch>
      </div>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          options: {
            enableCompass: true,
            enableZoomControl: true,
            // enableZoomControl: {
            //   // scaling ratio
            //   zoomAmount: 2,
            //   option used to set a default view when resetting the map view with the reset navigation control.{lng: number, lat: number, height: number} or rectangle{west: number,south: number,east: number,north: number}
            //   defaultResetView: {
            //     lng: 105, lat: 29.999999999999993, height: 19059568.497290563
            //   }
            // },
            enableDistanceLegend: true,
            enableLocationBar: true,
            // enableLocationBar: {
            //   // Get more accurate elevation
            //   gridFileUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/WW15MGH.DAC'
            // },
            enableCompassOuterRing: true,
            enablePrintView: true,
            // enablePrintView: {
            //   // show Credit
            //   showCredit: true,
            //   // print automatically
            //   printAutomatically: false
            // },
            enableMyLocation: true
          }
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
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
      <vc-navigation ref="navigation" :options="options"></vc-navigation>
      <vc-layer-imagery>
        <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>EnableCompass</span>
      <md-switch v-model="options.enableCompass"></md-switch>
      <span>EnableZoomControl</span>
      <md-switch v-model="options.enableZoomControl"></md-switch>
      <span>EnableDistanceLegend</span>
      <md-switch v-model="options.enableDistanceLegend"></md-switch>
      <span>EnableLocationBar</span>
      <md-switch v-model="options.enableLocationBar"></md-switch>
      <span>EnableCompassOuterRing</span>
      <md-switch v-model="options.enableCompassOuterRing"></md-switch>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: {
          enableCompass: true,
          enableZoomControl: true,
          // enableZoomControl: {
          //   // scaling ratio
          //   zoomAmount: 2,
          //   option used to set a default view when resetting the map view with the reset navigation control.{lng: number, lat: number, height: number} or rectangle{west: number,south: number,east: number,north: number}
          //   defaultResetView: {
          //     lng: 105, lat: 29.999999999999993, height: 19059568.497290563
          //   }
          // },
          enableDistanceLegend: true,
          enableLocationBar: true,
          // enableLocationBar: {
          //   // Get more accurate elevation
          //   gridFileUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/WW15MGH.DAC'
          // },
          enableCompassOuterRing: true,
          enablePrintView: true,
          // enablePrintView: {
          //   // show Credit
          //   showCredit: true,
          //   // print automatically
          //   printAutomatically: false
          // },
          enableMyLocation: true
        }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| enableCompass | Boolean | `true` | `optional` option used to enable or disable the compass. |
| enableZoomControl | Boolean\|Object | `true` | `optional` option used to enable or disable the zoom control. |
| enableDistanceLegend | Boolean | `true` | `optional` option used to enable or disable the distance legend. |
| enableLocationBar | Boolean\|Object | `true` | `optional` option used to enable or disable the LocationBar. |
| enableCompassOuterRing | Boolean | `true` | `optional` option used to enable or disable the Compass Outer Ring. |
| enablePrintView | Boolean\|Object | `true` | `optional` option used to enable or disable the PrintView. |
| overrideCamera | Boolean | `false` | `optional` Whether the default camera position parameter of the zoom control overrides the camera parameter on the vc-viewer. |

---

## Event

| name  | parameter        | description                                                                                    |
| ----- | ---------------- | ---------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance. |
