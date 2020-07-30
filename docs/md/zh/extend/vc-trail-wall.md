# 流动墙

`vc-trail-wall` 组件用于加载流动墙效果。实质是通过`vc-entity` 和 `vc-graphics-wall` 加载墙，并赋予自定义材质 `PolylineTrailMaterialProperty`实现。参考 [ysCesium|跃焱邵隼](https://www.wellyyss.cn/ysCesium/main/app.html)。

## 示例

### 加载流动墙效果

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-trail-wall
          :positions="positions"
          color="yellow"
          :minimumHeights="minimumHeights"
          imageUrl="./statics/SampleData/images/colors1.png"
          ref="wall"
          :interval="1000"
        ></vc-trail-wall>
        <vc-layer-imagery>
          <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </template>
  <script>
    const lat = 30.598026044
    const lng = 114.302312702
    export default {
      data() {
        return {
          positions: [
            { lng: lng - 0.5, lat: lat - 0.5, height: 50000 },
            { lng: lng - 3, lat: lat, height: 0 },
            { lng: lng - 3, lat: lat - 1, height: 50000 },
            { lng: lng - 1, lat: lat - 3, height: 50000 },
            { lng: lng - 0.5, lat: lat - 0.5, height: 50000 }
          ],
          minimumHeights: [0, 0, 0, 0, 0]
        }
      },
      mounted() {
        this.$refs.wall.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
          viewer.zoomTo(viewer.entities)
        })
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
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
      <vc-trail-wall
        :positions="positions"
        color="yellow"
        :minimumHeights="minimumHeights"
        imageUrl="./statics/SampleData/images/colors1.png"
        ref="wall"
        :interval="1000"
      ></vc-trail-wall>
      <vc-layer-imagery>
        <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
  const lat = 30.598026044
  const lng = 114.302312702
  export default {
    data() {
      return {
        positions: [
          { lng: lng - 0.5, lat: lat - 0.5, height: 50000 },
          { lng: lng - 3, lat: lat, height: 0 },
          { lng: lng - 3, lat: lat - 1, height: 50000 },
          { lng: lng - 1, lat: lat - 3, height: 50000 },
          { lng: lng - 0.5, lat: lat - 0.5, height: 50000 }
        ],
        minimumHeights: [0, 0, 0, 0, 0]
      }
    },
    mounted() {
      this.$refs.wall.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
        viewer.zoomTo(viewer.entities)
      })
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| positions | Array | | `optional` 指定墙的位置数组。 **结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| minimumHeights | Array | | `optional` 指定 wall 底部的高度数组。 |
| maximumHeights | Array | | `optional` 指定 wall 顶部的高度数组。 |
| outline | Boolean | `false` | `optional` 指定 wall 是否绘制轮廓线。 |
| color | Object\|String\|Array | `'yellow'` | `optional` 指定墙的颜色。 |
| interval | Number | `3000` | `optional` 指定墙材质流动一个周期的时间，单位毫秒。|
| imageUrl | String | `''` | `optional` 指定墙的图片材质。 |
| loop | Boolean | `true` | `optional` 指定墙的流动效果是否循环。 |

---

## 事件

| 事件名 | 参数                           | 描述                                                                |
| ------ | ------------------------------ | ------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例, 以及线实体实例。 |
