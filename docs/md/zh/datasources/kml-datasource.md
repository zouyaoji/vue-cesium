# Kml 数据源

`kml-datasource` 一个处理 Keyhole 标记语言 2.2（KML）的数据源。

## 示例

### 添加 Kml 数据源到场景

#### 预览

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

#### 代码

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

## 属性

| 属性名        | 类型           | 默认值  | 描述                                                                                 |
| ------------- | -------------- | ------- | ------------------------------------------------------------------------------------ |
| data          | String\|Object |         | `required` 包含二进制 KMZ 数据的 URL，已解析的 KML 文档或 Blob 或已解析的 KML 文档。 |
| show          | Boolean        | `true`  | `optional` 指定该数据源是否显示。                                                    |
| options       | Object         |         | `optional` 指定以下属性：                                                            |
| camera        | Object         |         | `optional` 指定相机参数。                                                            |
| canvas        | Object         |         | `optional` 指定 cavas。                                                              |
| sourceUri     | String         |         | `optional` 指定相对链接地址。                                                        |
| clampToGround | Boolean        | `false` | `optional` 指定是否贴地。                                                            |
| ellipsoid     | Object         |         | `optional` 指定椭球体参数。                                                          |
| credit        | String\|Object |         | `optional` 指定描述信息。                                                            |

- 官方文档 [KmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/KmlDataSource.html)

## 事件

| 事件名 | 参数                            | 描述                   |
| ------ | ------------------------------- | ---------------------- |
| ready  | {Cesium, viewer, cesiumObject } | 该组件渲染完毕时触发。 |
