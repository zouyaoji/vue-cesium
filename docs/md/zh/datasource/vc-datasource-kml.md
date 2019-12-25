# KmlDataSource

`vc-datasource-kml` 组件用于加载 KML(2.2) 格式的数据。

## 示例

### 加载 KML 格式数据源

#### 预览

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

#### 代码

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

## 属性

| 属性名        | 类型           | 默认值  | 描述                                   |
| ------------- | -------------- | ------- | -------------------------------------- |
| data          | String\|Object |         | `required` 指定要加载的 KML 对象 url。 |
| show          | Boolean        | `true`  | `optional` 指定数据源是否显示。        |
| options       | Object         |         | `optional` 指定以下属性：              |
| camera        | Object         |         |                                        |
| canvas        | Object         |         |                                        |
| sourceUri     | String         |         |                                        |
| clampToGround | Boolean        | `false` |                                        |
| ellipsoid     | Object         |         |                                        |
| credit        | String\|Object |         |                                        |

---

- 参考官方文档： **[KmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/KmlDataSource.html)**

## 事件

| 事件名       | 参数                           | 描述                                                                             |
| ------------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| changedEvent |                                | 数据源改变时触发。                                                               |
| errorEvent   |                                | 数据源发生错误时触发。                                                           |
| loadingEvent |                                | 数据源开始或结束加载时触发。                                                     |
| clusterEvent      | (clusteredEntities, cluster)          | 数据源聚合事件。                                                                 |
| collectionChanged | (collection, added, removed, changed) | 数据源实体集合改变时触发。                                                       |
---
