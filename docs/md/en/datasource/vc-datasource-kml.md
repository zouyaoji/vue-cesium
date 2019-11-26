# KmlDataSource

The `vc-datasource-kml` component is used to load a dataSource which processes Keyhole Markup Language 2.2 (KML).KML support in Cesium is incomplete, but a large amount of the standard, as well as Google's gx extension namespace, is supported. See Github issue #873 for a detailed list of what is and isn't support. Cesium will also write information to the console when it encounters most unsupported features.

Non visual feature data, such as atom:author and ExtendedData is exposed via an instance of KmlFeatureData, which is added to each Entity under the kml property.

## Example

### Load a KmlDataSource with `vc-datasource-kml`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-datasource-kml data="./statics/SampleData/kml/gdpPerCapita2008.kmz" :show="show"></vc-datasource-kml>
      </vc-viewer>
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
      <vc-datasource-kml data="./statics/SampleData/kml/gdpPerCapita2008.kmz" :show="show"></vc-datasource-kml>
    </vc-viewer>
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
      }
    }
  }
</script>
```

## Instance Properties

| name          | type           | default | description                                                          |
| ------------- | -------------- | ------- | -------------------------------------------------------------------- |
| data          | String\|Object |         | `required` A url, GeoJSON object, or TopoJSON object to be loaded.   |
| show          | Boolean        | `true`  | `optional` Gets whether or not this data source should be displayed. |
| options       | Object         |         | `optional` An object with the following properties:                  |
| camera        | Object         |         |                                                                      |
| canvas        | Object         |         |                                                                      |
| sourceUri     | String         |         |                                                                      |
| clampToGround | Boolean        | `false` |                                                                      |
| ellipsoid     | Object         |         |                                                                      |
| credit        | String\|Object |         |                                                                      |

---

- Refer to the official document: **[KmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/KmlDataSource.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| changedEvent | | Triggers when the underlying data changes. |
| errorEvent | | Triggers if an error is encountered during processing. |
| loadingEvent | | Triggers the data source either starts or stops loading. |

---
