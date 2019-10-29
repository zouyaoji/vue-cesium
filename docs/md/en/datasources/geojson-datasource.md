# GeoJsonDataSource

`geojson-datasource` Creates a Promise to a new instance loaded with the provided GeoJSON or TopoJSON data.

## Example

### Add a datasource to viewer by GeoJsonDataSource

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
          const { Cesium, viewer, cesiumObject } = cesiumInstance
          viewer.zoomTo(cesiumObject)
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
        const { Cesium, viewer, cesiumObject } = cesiumInstance
        viewer.zoomTo(cesiumObject)
      }
    }
  }
</script>
```

## Instance Properties

| name          | type                  | default | description                                                                |
| ------------- | --------------------- | ------- | -------------------------------------------------------------------------- |
| data          | String\|Object        |         | `required` A url, GeoJSON object, or TopoJSON object to be loaded.         |
| show          | Boolean               | `true`  | `optional` A boolean Property specifying the visibility of the dataSource. |
| options       | Object                |         | `optional` An object with the following properties:                        |
| sourceUri     | String                |         |                                                                            |
| markerSize    | Number                |         |                                                                            |
| markerSymbol  | String                |         |                                                                            |
| markerColor   | String\|Object\|Array |         |                                                                            |
| stroke        | String\|Object\|Array |         |                                                                            |
| strokeWidth   | Number                |         |                                                                            |
| fill          | String\|Object\|Array |         |                                                                            |
| clampToGround | Boolean               |         |                                                                            |

- Reference official document [GeoJsonDataSource](https://cesium.com/docs/cesiumjs-ref-doc/GeoJsonDataSource.html)

## Events

| name  | parameter                       | description                           |
| ----- | ------------------------------- | ------------------------------------- |
| ready | {Cesium, viewer, cesiumObject } | Triggers when the component is ready. |
