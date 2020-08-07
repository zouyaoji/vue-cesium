# 闪点

`vc-shine-point` 组件用于加载闪点效果，实质是通过 `vc-entity` 和 `vc-graphics-point` 添加一个实体点，然后不停改变点的颜色透明度实现。参考 [ysCesium|跃焱邵隼](https://www.wellyyss.cn/ysCesium/main/app.html) 。

## 示例

### 加载闪点效果

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-shine-point @ready="subReady" :position="position" color="red"></vc-shine-point>
        <vc-layer-imagery>
          <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          position: { lng: 117.217124, lat: 31.809777, height: 200 }
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
        },
        subReady() {
          const { Cesium, viewer } = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          viewer.zoomTo(viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90), 1000))
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
      <vc-shine-point @ready="subReady" :position="position" color="red"></vc-shine-point>
      <vc-layer-imagery>
        <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        position: { lng: 117.217124, lat: 31.809777, height: 200 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
      },
      subReady() {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.zoomTo(viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90), 1000))
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| position | Object | | `required` 指定闪点效果实体添加的位置。结构：{ lng: number, lat: number, height: number } 或者 Cesium.Cartesian3 |
| show | Boolean | `true` | `optional` 指定闪点效果是否可见。|
| pixelSize | Number | `10` | `optional` 指定闪点的像素大小。|
| color | Object\|String\|Array | `'white'` | `optional` 指定闪点效果颜色。 |
| deviationAlpha | Number | `0.05` | `optional` 指定闪点效果颜色 Alpha 值改变尺度，值越大闪得越快。取值范围: (0, 1)|

---

## 事件

| 事件名 | 参数                           | 描述                                                                  |
| ------ | ------------------------------ | --------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例, 以及闪圆实体实例。 |
