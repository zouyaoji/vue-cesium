# 多段线柱体

`polyline-volume-graphics` 折线组件，作为`entity`的子组件添加包含多段线柱体对象的实体到场景。描述定义为线条的折线体积和沿其挤出的相应二维形状。 得到的体积符合地球的曲率。如示例所示。

## 示例

### 添加多段线柱体到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :polylineVolume.sync="polylineVolume1">
          <polyline-volume-graphics :positions="positions1" :shape="shape1" :material="material1"></polyline-volume-graphics>
        </entity>
        <entity :polylineVolume.sync="polylineVolume2">
          <polyline-volume-graphics :positions="positions2" :shape="shape2" :material="material2" :outline="true" :outlineColor="outlineColor2" :cornerType="cornerType2"></polyline-volume-graphics>
        </entity>
        <entity :polylineVolume.sync="polylineVolume3">
          <polyline-volume-graphics :positions="positions3" :shape="shape3" :material="material3" :cornerType="cornerType3" @ready="subReady"></polyline-volume-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          polylineVolume1: {},
          positions1: [],
          shape1: [],
          material1: undefined,
          polylineVolume2: {},
          positions2: [],
          shape2: [],
          material2: undefined,
          cornerType2: 0,
          outlineColor2: {},
          polylineVolume3: {},
          shape3: [],
          positions3: [],
          material3: undefined,
          cornerType3: 0
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.positions1 =  Cesium.Cartesian3.fromDegreesArray(
            [
              -85.0, 32.0,
              -85.0, 36.0,
              -89.0, 36.0
            ])
          this.shape1 = this.computeCircle(60000.0)
          this.material1 = Cesium.Color.RED

          this.positions2 = Cesium.Cartesian3.fromDegreesArrayHeights(
            [
              -90.0, 32.0, 0.0,
              -90.0, 36.0, 100000.0,
              -94.0, 36.0, 0.0
            ])
          this.shape2 =
            [
              new Cesium.Cartesian2(-50000, -50000),
              new Cesium.Cartesian2(50000, -50000),
              new Cesium.Cartesian2(50000, 50000),
              new Cesium.Cartesian2(-50000, 50000
            )]
          this.cornerType2 = Cesium.CornerType.BEVELED
          this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
          this.outlineColor2 = Cesium.Color.BLACK

          this.positions3 = Cesium.Cartesian3.fromDegreesArrayHeights(
            [
              -95.0, 32.0, 0.0,
              -95.0, 36.0, 100000.0,
              -99.0, 36.0, 200000.0
            ])
          this.shape3 = this.computeStar(7, 70000, 50000)
          this.cornerType3 = Cesium.CornerType.MITERED
          this.material3 = Cesium.Color.BLUE
        },
        computeCircle(radius) {
          let positions = []
          for (let i = 0; i < 360; i++) {
              let radians = Cesium.Math.toRadians(i);
              positions.push(new Cesium.Cartesian2(radius * Math.cos(radians), radius * Math.sin(radians)))
          }
          return positions
        },
        computeStar(arms, rOuter, rInner) {
          let angle = Math.PI / arms;
          let length = 2 * arms;
          let positions = new Array(length);
          for (let i = 0; i < length; i++) {
              let r = (i % 2) === 0 ? rOuter : rInner;
              positions[i] = new Cesium.Cartesian2(Math.cos(i * angle) * r, Math.sin(i * angle) * r);
          }
          return positions
        },
        subReady (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          viewer.zoomTo(viewer.entities)
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
      <entity :polylineVolume.sync="polylineVolume1">
        <polyline-volume-graphics :positions="positions1" :shape="shape1" :material="material1"></polyline-volume-graphics>
      </entity>
      <entity :polylineVolume.sync="polylineVolume2">
        <polyline-volume-graphics :positions="positions2" :shape="shape2" :material="material2" :outline="true" :outlineColor="outlineColor2" :cornerType="cornerType2"></polyline-volume-graphics>
      </entity>
      <entity :polylineVolume.sync="polylineVolume3">
        <polyline-volume-graphics :positions="positions3" :shape="shape3" :material="material3" :cornerType="cornerType3" @ready="subReady"></polyline-volume-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        polylineVolume1: {},
        positions1: [],
        shape1: [],
        material1: undefined,
        polylineVolume2: {},
        positions2: [],
        shape2: [],
        material2: undefined,
        cornerType2: 0,
        outlineColor2: {},
        polylineVolume3: {},
        shape3: [],
        positions3: [],
        material3: undefined,
        cornerType3: 0
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.positions1 =  Cesium.Cartesian3.fromDegreesArray(
          [
            -85.0, 32.0,
            -85.0, 36.0,
            -89.0, 36.0
          ])
        this.shape1 = this.computeCircle(60000.0)
        this.material1 = Cesium.Color.RED

        this.positions2 = Cesium.Cartesian3.fromDegreesArrayHeights(
          [
            -90.0, 32.0, 0.0,
            -90.0, 36.0, 100000.0,
            -94.0, 36.0, 0.0
          ])
        this.shape2 =
          [
            new Cesium.Cartesian2(-50000, -50000),
            new Cesium.Cartesian2(50000, -50000),
            new Cesium.Cartesian2(50000, 50000),
            new Cesium.Cartesian2(-50000, 50000
          )]
        this.cornerType2 = Cesium.CornerType.BEVELED
        this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
        this.outlineColor2 = Cesium.Color.BLACK

        this.positions3 = Cesium.Cartesian3.fromDegreesArrayHeights(
          [
            -95.0, 32.0, 0.0,
            -95.0, 36.0, 100000.0,
            -99.0, 36.0, 200000.0
          ])
        this.shape3 = this.computeStar(7, 70000, 50000)
        this.cornerType3 = Cesium.CornerType.MITERED
        this.material3 = Cesium.Color.BLUE
      },
      computeCircle(radius) {
        let positions = []
        for (let i = 0; i < 360; i++) {
            let radians = Cesium.Math.toRadians(i);
            positions.push(new Cesium.Cartesian2(radius * Math.cos(radians), radius * Math.sin(radians)))
        }
        return positions
      },
      computeStar(arms, rOuter, rInner) {
        let angle = Math.PI / arms;
        let length = 2 * arms;
        let positions = new Array(length);
        for (let i = 0; i < length; i++) {
            let r = (i % 2) === 0 ? rOuter : rInner;
            positions[i] = new Cesium.Cartesian2(Math.cos(i * angle) * r, Math.sin(i * angle) * r);
        }
        return positions
      },
      subReady (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        viewer.zoomTo(viewer.entities)
      }
    }
  }
</script>
```

## 属性

参考官方文档 [PolylineVolumeGraphics](https://cesiumjs.org/Cesium/Build/Documentation/PolylineVolumeGraphics.html)
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
