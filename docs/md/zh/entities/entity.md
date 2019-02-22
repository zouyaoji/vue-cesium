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
          position: {},
          billboard: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.position = Cesium.Cartesian3.fromDegrees(108, 35, 100)
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
        position: {},
        billboard: {}
      }
    },
    methods: {
      ready (cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.position = Cesium.Cartesian3.fromDegrees(108, 35, 100)
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
```

## 属性

参考官方文档 [Entity](https://cesiumjs.org/Cesium/Build/Documentation/Entity.html)
<!-- |属性名|类型|默认值|描述|
|------|-----|-----|----|
|positions|Property||`optional` 指定表示线条的Cartesian3位置数组。|
|followSurface|Property|true|`optional` 指定线段是弧线还是直线连接。|
|clampToGround|Property|false|`optional` 指定线是否贴地。|
|width|Property|1.0|`optional` 指定线的宽度（像素）。|
|show|Property|true|`optional` 指定线是否可显示。|
|material|MaterialProperty|Color.WHITE|`optional` 指定用于绘制线的材质。|
|depthFailMaterial|MaterialProperty||`optional` 指定用于绘制低于地形的线的材质。|
|granularity|Property|Cesium.Math.RADIANS_PER_DEGREE|`optional`指定每个纬度和经度之间的角距离，当followSurface为true时有效。|
|shadows|Property|ShadowMode.DISABLED|`optional` 指定这些是否投射或接收来自每个光源的阴影。|
|distanceDisplayCondition|Property||`optional` 指定相机到线的距离。|
|zIndex|Property|0|`optional` 指定用于排序地面几何的zIndex。 仅当`clampToGround`为真且支持地形上的折线时才有效。|
--- -->

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
|definitionChanged||每当更改或修改属性或子属性时触发该事件。|
