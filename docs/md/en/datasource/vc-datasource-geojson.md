# GeoJsonDataSource

The `vc-datasource-geojson` component is used to load a dataSource which processes both [GeoJSON](https://geojson.org/) and [TopoJSON](https://github.com/topojson/topojson) data. simplestyle-spec properties will also be used if they are present.

## Example

### Load a GeoJsonDataSource with `vc-datasource-geojson`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-datasource-geojson
          data="./statics/SampleData/lineData/streamline.json"
          @ready="subReady"
          :show="show"
        ></vc-datasource-geojson>
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
        },
        subReady(cesiumInstance) {
          cesiumInstance.viewer.zoomTo(cesiumInstance.cesiumObject)
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
      <vc-datasource-geojson
        data="./statics/SampleData/lineData/streamline.json"
        @ready="subReady"
        :show="show"
      ></vc-datasource-geojson>
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
      },
      subReady(cesiumInstance) {
        cesiumInstance.viewer.zoomTo(cesiumInstance.cesiumObject)
      }
    }
  }
</script>
```

## Instance Properties

| name          | type                  | default | description                                                          |
| ------------- | --------------------- | ------- | -------------------------------------------------------------------- |
| data          | String\|Object        |         | `required` A url, GeoJSON object, or TopoJSON object to be loaded.   |
| show          | Boolean               | `true`  | `optional` Gets whether or not this data source should be displayed. |
| options       | Object                |         | `optional` An object with the following properties:                  |
| sourceUri     | String                |         | The default size of the map pin created for each point, in pixels.   |
| markerSize    | Number                |         |                                                                      |
| markerSymbol  | String                |         |                                                                      |
| markerColor   | String\|Object\|Array |         |                                                                      |
| stroke        | String\|Object\|Array |         |                                                                      |
| strokeWidth   | Number                |         |                                                                      |
| fill          | String\|Object\|Array |         |                                                                      |
| clampToGround | Boolean               | `false` |                                                                      |
| credit        | String\|Object        |         |                                                                      |

---

- Refer to the official document: **[GeoJsonDataSource](https://cesium.com/docs/cesiumjs-ref-doc/GeoJsonDataSource.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| changedEvent | | Triggers when the underlying data changes. |
| errorEvent | | Triggers if an error is encountered during processing. |
| loadingEvent | | Triggers the data source either starts or stops loading. |
| clusterEvent | (clusteredEntities, cluster) | Gets the event that is fired when entities are added or removed from the collection.|
| collectionChanged | (collection, added, removed, changed) | Gets the event that will be raised when a new cluster will be displayed.|
---
