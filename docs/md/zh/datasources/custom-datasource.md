# Custom 数据源

`custom-datasource` 一个 DataSource 实例，可用于手动管理一组实体。

## 示例

### 添加 Custom 数据源到场景

#### 预览

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

#### 代码

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

## 属性

| 属性名 | 类型   | 默认值 | 描述                            |
| ------ | ------ | ------ | ------------------------------- |
| name   | String |        | `optional` 指定数据源的名称。   |
| show   | Object |        | `optional` 指定数据源是否显示。 |

---

- 官方文档 [CustomDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CustomDataSource.html)

## 事件

| 事件名 | 参数                            | 描述                   |
| ------ | ------------------------------- | ---------------------- |
| ready  | {Cesium, viewer, cesiumObject } | 该组件渲染完毕时触发。 |
