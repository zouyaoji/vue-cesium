# KmlDataSource

`kml-datasource` A DataSource which processes Keyhole Markup Language 2.2 (KML).

## Example

### Add a datasource to viewer by KmlDataSource

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <kml-datasource data="./statics/SampleData/kml/facilities/facilities.kml" @ready="subReady" :options="options" :show="show"></kml-datasource>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          show: true,
          options: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
        },
        subReady (cesiumInstance){
          const { Cesium, viewer, cesiumObject } = cesiumInstance
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
      <kml-datasource
        data="./statics/SampleData/kml/facilities/facilities.kml"
        @ready="subReady"
        :options="options"
        :show="show"
      ></kml-datasource>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        options: {}
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
      },
      subReady(cesiumInstance) {
        const { Cesium, viewer, cesiumObject } = cesiumInstance
      }
    }
  }
</script>
```

## Instance Properties

| name          | type           | default | description                                                                                                     |
| ------------- | -------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| data          | String\|Object |         | `required` A url, parsed KML document, or Blob containing binary KMZ data or a parsed KML document.             |
| show          | Boolean        | `true`  | `optional` A boolean Property specifying the visibility of the dataSource.                                      |
| options       | Object         |         | `optional` An object with the following properties:                                                             |
| camera        | Object         |         | `optional` The camera that is used for viewRefreshModes and sending camera properties to network links.         |
| canvas        | Object         |         | `optional` The canvas that is used for sending viewer properties to network links.                              |
| sourceUri     | String         |         | `optional` Overrides the url to use for resolving relative links and other KML network features.                |
| clampToGround | Boolean        | `false` | `optional` true if we want the geometry features (Polygons, LineStrings and LinearRings) clamped to the ground. |
| ellipsoid     | Object         |         | `optional` The global ellipsoid used for geographical calculations.                                             |
| credit        | String\|Object |         | `optional` A credit for the data source, which is displayed on the canvas.                                      |

- Reference official document [KmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/KmlDataSource.html)

## Events

| name  | parameter                       | description                           |
| ----- | ------------------------------- | ------------------------------------- |
| ready | {Cesium, viewer, cesiumObject } | Triggers when the component is ready. |
