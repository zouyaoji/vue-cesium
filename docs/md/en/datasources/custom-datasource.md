# CustomDatasource

`custom-datasource` A DataSource implementation which can be used to manually manage a group of entities.

## Example

### add a datasouce to viewer by CustomDatasource

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <custom-datasource name="customDs" @ready="subReady" :show="show"></custom-datasource>
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
          cesiumObject.entities.add({
            position : Cesium.Cartesian3.fromDegrees(108, 25, 1000),
            billboard : {
                image : 'https://zouyaoji.top/vue-cesium/favicon.png'
            }
          })
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
      <custom-datasource name="customDs" @ready="subReady" :show="show"></custom-datasource>
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
        cesiumObject.entities.add({
          position: Cesium.Cartesian3.fromDegrees(108, 25, 1000),
          billboard: {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png'
          }
        })
        viewer.zoomTo(cesiumObject)
      }
    }
  }
</script>
```

## Instance Properties

| name | type    | default | description                                                                |
| ---- | ------- | ------- | -------------------------------------------------------------------------- |
| name | String  |         | `required` Name of the datasource.                                         |
| show | Boolean | `true`  | `optional` A boolean Property specifying the visibility of the dataSource. |

- Reference official document [CustomDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CustomDataSource.html)

## Events

| name  | parameter                       | description                           |
| ----- | ------------------------------- | ------------------------------------- |
| ready | {Cesium, viewer, cesiumObject } | Triggers when the component is ready. |
