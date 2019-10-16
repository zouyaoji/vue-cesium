# GeoJsonDataSource

`geojson-datasource` Creates a Promise to a new instance loaded with the provided GeoJSON or TopoJSON data.

## Code

### Add GeoJsonDataSource to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <geojson-datasource data="./statics/streamline.json" @ready="subReady" :show="show"></geojson-datasource>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          show: true
        }
      },
      methods: {
        ready (cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
        },
        subReady (cesiumInstance){
          cesiumInstance.cesiumObject.then(ds => {
            cesiumInstance.viewer.zoomTo(ds)
          })
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready">
      <geojson-datasource data="./statics/streamline.json" @ready="subReady" :show="show"></geojson-datasource>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
      },
      subReady(cesiumInstance) {
        cesiumInstance.cesiumObject.then(ds => {
          cesiumInstance.viewer.zoomTo(ds)
        })
      }
    }
  }
</script>
```

## Instance Properties

| name          | type                  | default | description                                                        |
| ------------- | --------------------- | ------- | ------------------------------------------------------------------ |
| data          | String\|Object        |         | `required` A url, GeoJSON object, or TopoJSON object to be loaded. |
| options       | Object                |         | `optional` An object with the following properties:                |
| sourceUri     | String                |         |                                                                    |
| markerSize    | Number                |         |                                                                    |
| markerSymbol  | String                |         |                                                                    |
| markerColor   | String\|Object\|Array |         |                                                                    |
| stroke        | String\|Object\|Array |         |                                                                    |
| strokeWidth   | Number                |         |                                                                    |
| fill          | String\|Object\|Array |         |                                                                    |
| clampToGround | Boolean               |         |                                                                    |

- Reference official document [GeoJsonDataSource](https://cesium.com/docs/cesiumjs-ref-doc/GeoJsonDataSource.html)

## Events

| name  | parameter                       | description                                            |
| ----- | ------------------------------- | ------------------------------------------------------ |
| ready | {Cesium, viewer, CesiumObject } | Triggers when ArcGisMapServerImageryProvider is ready. |
