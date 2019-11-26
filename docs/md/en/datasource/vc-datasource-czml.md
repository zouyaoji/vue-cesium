# CzmlDataSource

The `vc-datasource-czml` component is used to load a dataSource which processes [CZML](https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide).

## Example

### Load a CzmlDataSource with `vc-datasource-czml`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer :shouldAnimate="true" @ready="ready">
        <vc-datasource-czml czml="./statics/SampleData/simple.czml" @ready="subReady" :show="show"></vc-datasource-czml>
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
        ready(cesiumInstance) {},
        subReady(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          viewer.camera.flyHome(0)
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer :shouldAnimate="true" @ready="ready">
      <vc-datasource-czml czml="./statics/SampleData/simple.czml" @ready="subReady" :show="show"></vc-datasource-czml>
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
      ready(cesiumInstance) {},
      subReady(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.camera.flyHome(0)
      }
    }
  }
</script>
```

## Instance Properties

| name      | type           | default | description                                                          |
| --------- | -------------- | ------- | -------------------------------------------------------------------- |
| czml      | String\|Object |         | `required` A url or CZML object to be processed..                    |
| show      | Boolean        | `true`  | `optional` Gets whether or not this data source should be displayed. |
| options   | Object         |         | `optional` An object with the following properties:                  |
| sourceUri | String         |         |                                                                      |
| credit    | String\|Object |         |                                                                      |

---

- Refer to the official document: **[CzmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| changedEvent | | Triggers when the underlying data changes. |
| errorEvent | | Triggers if an error is encountered during processing. |
| loadingEvent | | Triggers the data source either starts or stops loading. |

---
