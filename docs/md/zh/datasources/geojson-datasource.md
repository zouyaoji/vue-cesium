# GeoJSON 数据源

`geojson-datasource`

## 示例

### 添加 GeoJSON 数据源到场景

#### 预览

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

#### 代码

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

## 属性

| 属性名        | 类型                  | 默认值 | 描述                                                   |
| ------------- | --------------------- | ------ | ------------------------------------------------------ |
| data          | String\|Object        |        | `required` 指定要加载的 GeoJSON 或者 TopoJSON 的 url。 |
| options       | Object                |        | `optional` 指定以下属性                                |
| sourceUri     | String                |        |                                                        |
| markerSize    | Number                |        |                                                        |
| markerSymbol  | String                |        |                                                        |
| markerColor   | String\|Object\|Array |        |                                                        |
| stroke        | String\|Object\|Array |        |                                                        |
| strokeWidth   | Number                |        |                                                        |
| fill          | String\|Object\|Array |        |                                                        |
| clampToGround | Boolean               |        |                                                        |
| show          | Boolean               | `true` | `optional` 指定该数据源是否显示。                      |

- 官方文档 [GeoJsonDataSource](https://cesium.com/docs/cesiumjs-ref-doc/GeoJsonDataSource.html)

## 事件

| 事件名 | 参数                            | 描述                   |
| ------ | ------------------------------- | ---------------------- |
| ready  | {Cesium, viewer, cesiumObject } | 该组件渲染完毕时触发。 |
