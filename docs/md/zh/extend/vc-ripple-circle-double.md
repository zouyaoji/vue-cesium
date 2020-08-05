# 双圆涟漪

`vc-ripple-circle-double` 组件用于加载双圆涟漪效果，实质是通过 `vc-entity` 和 `vc-graphics-ellipse` 按一定时间间隔加载 2 个圆，然后不停循环修改圆的半径及材质透明度实现。参考 [ysCesium|跃焱邵隼](https://www.wellyyss.cn/ysCesium/main/app.html) 。

## 示例

### 加载双圆涟漪效果

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-ripple-circle-double
          @ready="subReady"
          imageUrl="./statics/SampleData/images/redCircle2.png"
          :position="position"
        ></vc-ripple-circle-double>
        <vc-entity>
          <vc-graphics-polyline :positions="positions" :width="5" :material="material"></vc-graphics-polyline>
        </vc-entity>
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
          position: { lng: 117.217124, lat: 31.809777 },
          positions: [{ lng: 117.217124, lat: 31.809777, height: 0 }, { lng: 117.217124, lat: 31.809777, height: 3000 }],
          material: {
            fabric: {
              type: 'PolylineGlow',
              uniforms: { color: 'red', glowPower: 0.5 }
            }
          }
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
        },
        subReady() {
          const { Cesium, viewer } = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
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
    <vc-viewer @ready="ready">
      <vc-ripple-circle-double
        @ready="subReady"
        imageUrl="./statics/SampleData/images/redCircle2.png"
        :position="position"
      ></vc-ripple-circle-double>
      <vc-entity>
        <vc-graphics-polyline :positions="positions" :width="5" :material="material"></vc-graphics-polyline>
      </vc-entity>
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
        position: { lng: 117.217124, lat: 31.809777 },
        positions: [{ lng: 117.217124, lat: 31.809777, height: 0 }, { lng: 117.217124, lat: 31.809777, height: 3000 }],
        material: {
          fabric: {
            type: 'PolylineGlow',
            uniforms: { color: 'red', glowPower: 0.5 }
          }
        }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
      },
      subReady() {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.zoomTo(viewer.entities)
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| position | Object | | `required` 指定双圆涟漪效果实体添加的位置。结构：{ lng: number, lat: number, height: number } 或者 Cesium.Cartesian3 |
| show | Boolean | `true` | `optional` 指定双圆涟漪效果是否可见。|
| height | Number | `undefined` | `optional` 指定双圆涟漪效果椭圆高度。单位米。|
| minRadius | Number | `0` | `optional` 指定双圆涟漪效果最小半径。单位米。|
| maxRadius | Number | `3000` | `optional` 指定双圆涟漪效果最大半径。单位米。|
| deviationRadius | Number | `20` | `optional` 双圆半径改变大小的差值，值越大速度越快。|
| interval | Number | `3000` | `optional` 两个圆的时间间隔，单位毫秒。 |
| imageUrl | String | `''` | `optional` 指定用于表达双圆涟漪效果的图片。 |
| color | Object\|String\|Array | `'white'` | `optional` 指定双圆涟漪效果效果颜色。 |

---

## 事件

| 事件名 | 参数                           | 描述                                                              |
| ------ | ------------------------------ | ----------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例, 以及实体数组。 |
