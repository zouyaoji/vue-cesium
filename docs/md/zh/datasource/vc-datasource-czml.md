# CzmlDataSource

`vc-datasource-czml` 组件用于加载 [CZML](https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide) 格式数据源。

## 示例

### 加载 CZML 数据源

#### 预览

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

#### 代码

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

## 属性

| 属性名    | 类型           | 默认值 | 描述                                |
| --------- | -------------- | ------ | ----------------------------------- |
| czml      | String\|Object |        | `required` 指定 czml 对象或者 url。 |
| show      | Boolean        | `true` | `optional` 指定数据源是否可见。     |
| options   | Object         |        | `optional` 指定以下属性：           |
| sourceUri | String         |        |                                     |
| credit    | String\|Object |        |                                     |

---

- 参考官方文档： [CzmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html)

## 事件

| 事件名       | 参数                           | 描述                                                                             |
| ------------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| changedEvent |                                | 数据源改变时触发。                                                               |
| errorEvent   |                                | 数据源发生错误时触发。                                                           |
| loadingEvent |                                | 数据源开始或结束加载时触发。                                                     |

---
