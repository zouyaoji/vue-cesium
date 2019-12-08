# 导航罗盘

`vc-navigation` 组件用于加载导航罗盘部件。**注意：**此部件需要引入 `vue-cesium/lib/vc-navigation.css`，需要`css-loader`。

## 示例

### 加载导航罗盘部件

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-navigation ref="navigation" :options="options"></vc-navigation>
      </vc-viewer>
      <div class="demo-tool">
        <span>罗盘部件</span>
        <md-switch v-model="options.enableCompass"></md-switch>
        <span>缩放部件</span>
        <md-switch v-model="options.enableZoomControls"></md-switch>
        <span>比例尺部件</span>
        <md-switch v-model="options.enableDistanceLegend"></md-switch>
        <span>罗盘外环是否可用</span>
        <md-switch v-model="options.enableCompassOuterRing"></md-switch>
      </div>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          options: {
            // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是经纬度{lng: number, lat: number, height: number}或者 rectangle{west: number,south: number,east: number,north: number}
            defaultResetView: { lng: 105, lat: 29.999999999999993, height: 19059568.497290563 },
            // 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
            enableCompass: true,
            // 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
            enableZoomControls: true,
            // 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
            enableDistanceLegend: true,
            // 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
            enableCompassOuterRing: true
          }
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
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
      <vc-navigation ref="navigation" :options="options"></vc-navigation>
    </vc-viewer>
    <div class="demo-tool">
      <span>罗盘部件</span>
      <md-switch v-model="options.enableCompass"></md-switch>
      <span>缩放部件</span>
      <md-switch v-model="options.enableZoomControls"></md-switch>
      <span>比例尺部件</span>
      <md-switch v-model="options.enableDistanceLegend"></md-switch>
      <span>罗盘外环是否可用</span>
      <md-switch v-model="options.enableCompassOuterRing"></md-switch>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: {
          // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是经纬度{lng: number, lat: number, height: number}或者 rectangle{west: number,south: number,east: number,north: number}
          defaultResetView: { lng: 105, lat: 29.999999999999993, height: 19059568.497290563 },
          // 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
          enableCompass: true,
          // 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
          enableZoomControls: true,
          // 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
          enableDistanceLegend: true,
          // 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
          enableCompassOuterRing: true
        }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| defaultResetView | Object | 中国 | `optional` 指定重置按钮的位置。**结构：{lng: number, lat: number, height: number} or {west: number,south: number,east: number,north: number}** |
| enableCompass | Boolean | true | `optional` 指定是否启用罗盘部件。 |
| enableZoomControls | Boolean | true | `optional` 指定是否启用缩放部件。 |
| enableDistanceLegend | Boolean | true | `optional` 指定是否启用距离比例尺部件。 |
| enableCompassOuterRing | Boolean | true | `optional` 指定罗盘部件是否可用。 |

---

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
