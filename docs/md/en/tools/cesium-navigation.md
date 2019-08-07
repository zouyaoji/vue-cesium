# CesiumNavigation

`cesium-navigation` First of all the Cesiumjs sdk does not includes a compass, navigator (zoom in/out), and distance scale. You can use the mouse to navigate on the map, but this navigation plugin offers more navigation control and capabilities to the user. Some of the capabilities are: reset the compass to point to north, reset the orbit, and reset the view to a default bound. [es6-cesium-navigation](https://github.com/zouyaoji/es6-cesium-navigation)。

## Example

### Add a CesiumNavigation

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <cesium-navigation ref="navigation" :options="options"></cesium-navigation>
      </cesium-viewer>
      <div class="demo-tool">
        <span>EnableCompass</span>
        <md-switch v-model="options.enableCompass"></md-switch>
        <span>EnableZoomControls</span>
        <md-switch v-model="options.enableZoomControls"></md-switch>
        <span>EnableDistanceLegend</span>
        <md-switch v-model="options.enableDistanceLegend"></md-switch>
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
             // option used to set a default view when resetting the map view with the reset navigation control.[lon,lat,height] or [west,south,east,north]
            defaultResetView: [105, 29.999999999999993, 118, 35],
            // option used to enable or disable the compass.
            enableCompass: true,
            // option used to enable or disable the zoom controls.
            enableZoomControls: true,
            // option used to enable or disable the distance legend.
            enableDistanceLegend: true,
            // option used to enable or disable the Compass Outer Ring.
            enableCompassOuterRing: true
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

  <style>
    .cesium-svgPath-svg {
      height: 100% !important;
    }
  </style>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready">
      <cesium-navigation ref="navigation" :options="options"></cesium-navigation>
    </cesium-viewer>
    <div class="demo-tool">
      <span>EnableCompass</span>
      <md-switch v-model="options.enableCompass"></md-switch>
      <span>EnableZoomControls</span>
      <md-switch v-model="options.enableZoomControls"></md-switch>
      <span>EnableDistanceLegend</span>
      <md-switch v-model="options.enableDistanceLegend"></md-switch>
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
          // option used to set a default view when resetting the map view with the reset navigation control.[lon,lat,height] or [west,south,east,north]
          defaultResetView: [105, 29.999999999999993, 118, 35],
          // option used to enable or disable the compass.
          enableCompass: true,
          // option used to enable or disable the zoom controls.
          enableZoomControls: true,
          // option used to enable or disable the distance legend.
          enableDistanceLegend: true,
          // option used to enable or disable the Compass Outer Ring.
          enableCompassOuterRing: true
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

<style>
  .cesium-svgPath-svg {
    height: 100% !important;
  }
</style>
```

## Instance Properties

| name                   | type    | default | description                                                                                                                                          |     |
| ---------------------- | ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| defaultResetView       | Array   |         | `optional` option used to set a default view when resetting the map view with the reset navigation control. [lon,lat,height],[west,south,east,north] |
| enableCompass          | Boolean | true    | `optional` option used to enable or disable the compass.                                                                                             |
| enableZoomControls     | Boolean | true    | `optional` option used to enable or disable the zoom controls.                                                                                       |
| enableDistanceLegend   | Boolean | true    | `optional` option used to enable or disable the distance legend.                                                                                     |
| enableCompassOuterRing | Boolean | true    | `optional` option used to enable or disable the Compass Outer Ring.                                                                                  |

---

## Event

| name  | parameter        | description                                                                                    |
| ----- | ---------------- | ---------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance. |
