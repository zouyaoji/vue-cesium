# GeoJsonDataSource

`vc-datasource-geojson` 组件用于加载 [GeoJSON](https://geojson.org/) 和 [TopoJSON](https://github.com/topojson/topojson) 格式的数据。

## 示例

### 加载 GeoJSON 格式数据源

#### 预览

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

#### 代码

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

## 属性

| 属性名        | 类型                  | 默认值  | 描述                                                   |
| ------------- | --------------------- | ------- | ------------------------------------------------------ |
| data          | String\|Object        |         | `required` 指定要加载的 GeoJSON 或者 TopoJSON 的 url。 |
| show          | Boolean               | `true`  | `optional` 指定数据源是否显示。                        |
| options       | Object                |         | `optional` 指定以下属性：                              |
| sourceUri     | String                |         |                                                        |
| markerSize    | Number                |         |                                                        |
| markerSymbol  | String                |         |                                                        |
| markerColor   | String\|Object\|Array |         |                                                        |
| stroke        | String\|Object\|Array |         |                                                        |
| strokeWidth   | Number                |         |                                                        |
| fill          | String\|Object\|Array |         |                                                        |
| clampToGround | Boolean               | `false` |                                                        |
| credit        | String\|Object        |         |                                                        |

---

- 参考官方文档： [GeoJsonDataSource](https://cesium.com/docs/cesiumjs-ref-doc/GeoJsonDataSource.html)

## 事件

| 事件名       | 参数                           | 描述                                                                             |
| ------------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| changedEvent |                                | 数据源改变时触发。                                                               |
| errorEvent   |                                | 数据源发生错误时触发。                                                           |
| loadingEvent |                                | 数据源开始或结束加载时触发。                                                     |

---
