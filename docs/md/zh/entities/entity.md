# 实体

`entity` 实体实例类，它将多种可视化对象聚合到单个高级对象中

## 示例

### 添加布告板实体到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position" :billboard="billboard" :description="description" :id="id">
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          id: 'This is a billboard',
          description: 'Hello Vue Cesium',
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          position: { lng: 108, lat: 35, height: 100 },
          billboard: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.billboard = new Cesium.BillboardGraphics({
            image: 'https://zouyaoji.top/vue-cesium/favicon.png', // default: undefined
            show: true, // default
            pixelOffset: new Cesium.Cartesian2(0, -50), // default: (0, 0)
            eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
            scale: 0.5, // default: 1.0
            color: Cesium.Color.LIME, // default: WHITE
            // rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0
            alignedAxis: Cesium.Cartesian3.ZERO, // default
          })
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
      <entity :position="position" :billboard="billboard" :description="description" :id="id"> </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: 'This is a billboard',
        description: 'Hello Vue Cesium',
        image: 'https://zouyaoji.top/vue-cesium/favicon.png',
        position: { lng: 108, lat: 35, height: 100 },
        billboard: {}
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        // this.position = Cesium.Cartesian3.fromDegrees(108, 35, 100)
        this.billboard = new Cesium.BillboardGraphics({
          image: 'https://zouyaoji.top/vue-cesium/favicon.png', // default: undefined
          show: true, // default
          pixelOffset: new Cesium.Cartesian2(0, -50), // default: (0, 0)
          eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
          horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
          scale: 0.5, // default: 1.0
          color: Cesium.Color.LIME, // default: WHITE
          // rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0
          alignedAxis: Cesium.Cartesian3.ZERO // default
        })
      }
    }
  }
</script>
```

## 属性

| 属性名         | 类型    | 默认值 | 描述                                                                                   |
| -------------- | ------- | ------ | -------------------------------------------------------------------------------------- |
| id             | String  |        | `optional` 指定 entity 的唯一标识符。如果没有提供，则生成 GUID。                       |
| name           | String  |        | `optional` 指定 entity 名称，名称可不必唯一。                                          |
| availability   |         |        | `optional` 指定 entity 关联的可用性参数。                                              |
| show           | Boolean | `true` | `optional` 指定 entity 及其子项是否显示。                                              |
| description    |         |        | `optional` 指定 entity 的 HTML 描述信息。                                              |
| position       | Object  |        | `optional` 指定 entity 的位置。 **结构：{ lng: number, lat: number, height: number }** |
| orientation    |         |        | `optional` 指定 entity 的方向。                                                        |
| viewFrom       |         |        | `optional` 指定 entity 的初始偏移量。                                                  |
| parent         |         |        | `optional` 指定 entity 关联的父实体。                                                  |
| billboard      |         |        | `optional` 指定 entity 关联的布告板。                                                  |
| box            |         |        | `optional` 指定 entity 关联的盒子对象。                                                |
| corridor       |         |        | `optional` 指定 entity 关联的走廊对象。                                                |
| cylinder       |         |        | `optional` 指定 entity 关联的圆柱对象。                                                |
| ellipse        |         |        | `optional` 指定 entity 关联的椭圆对象。                                                |
| ellipsoid      |         |        | `optional` 指定 entity 关联的椭球体对象。                                              |
| label          |         |        | `optional` 指定 entity 关联的标签对象。                                                |
| model          |         |        | `optional` 指定 entity 关联的模型对象。                                                |
| path           |         |        | `optional` 指定 entity 关联的路径对象。                                                |
| plane          |         |        | `optional` 指定 entity 关联的平面对象。                                                |
| point          |         |        | `optional` 指定 entity 关联的点对象。                                                  |
| polygon        |         |        | `optional` 指定 entity 关联的多边形对象。                                              |
| polyline       |         |        | `optional` 指定 entity 关联的折线对象。                                                |
| properties     |         |        | `optional` 指定 entity 关联的属性。                                                    |
| polylineVolume |         |        | `optional` 指定 entity 关联的多线段柱体对象。                                          |
| rectangle      |         |        | `optional` 指定 entity 关联的矩形对象。                                                |
| wall           |         |        | `optional` 指定 entity 关联的墙对象。                                                  |

---

- 官方文档 [Entity](https://cesiumjs.org/Cesium/Build/Documentation/Entity.html)

## 事件

| 事件名            | 参数             | 描述                                                |
| ----------------- | ---------------- | --------------------------------------------------- |
| ready             | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
| definitionChanged |                  | 每当更改或修改属性或子属性时触发该事件。            |
