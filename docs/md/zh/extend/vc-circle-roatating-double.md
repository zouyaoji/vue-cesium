# 双圆旋转

`vc-circle-roatating-double` 组件用于加载双圆涟漪效果，实质是通过 `vc-entity` 和 `vc-graphics-ellipse` 按加载 2 个圆，分别给赋予圆图片，并旋转，组合出的效果。参考 [ysCesium|跃焱邵隼](https://www.wellyyss.cn/ysCesium/main/app.html) 。

## 示例

### 加载双圆旋转效果

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-circle-roatating-double
          @ready="subReady"
          material1="./statics/SampleData/images/circle1.png"
          material2="./statics/SampleData/images/circle2.png"
          :position="position"
          ref="circle"
          v-if="flag"
        ></vc-circle-roatating-double>
        <vc-circle-roatating-double
          @ready="subReady"
          material1="./statics/SampleData/images/circle1.png"
          material2="./statics/SampleData/images/circle2.png"
          :position="position"
          ref="circle"
          v-if="flag"
          :height="3000"
        ></vc-circle-roatating-double>
        <vc-entity>
          <vc-graphics-polyline :positions="positions" :width="5" :material="material"></vc-graphics-polyline>
        </vc-entity>
        <vc-layer-imagery>
          <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0" :maximumLevel="17"></vc-provider-imagery-tianditu>
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
          },
          flag: true
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          window.vm = this
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
      <vc-circle-roatating-double
        @ready="subReady"
        material1="./statics/SampleData/images/circle1.png"
        material2="./statics/SampleData/images/circle2.png"
        :position="position"
        ref="circle"
        v-if="flag"
      ></vc-circle-roatating-double>
      <vc-entity>
        <vc-graphics-polyline :positions="positions" :width="5" :material="material"></vc-graphics-polyline>
      </vc-entity>
      <vc-layer-imagery>
        <vc-provider-imagery-tianditu
          mapStyle="img_c"
          token="436ce7e50d27eede2f2929307e6b33c0"
          :maximumLevel="17"
        ></vc-provider-imagery-tianditu>
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
        },
        flag: true
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        // 方便测试使用
        // vm.flag = false
        // vm.$refs.circle.unload()
        // vm.$refs.circle.load()
        // vm.$refs.circle.reload()
        window.vm = this
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
| position | Object | | `required` 指定双圆旋转效果实体添加的位置。结构：{ lng: number, lat: number, height: number } 或者 Cesium.Cartesian3 |
| show | Boolean | `true` | `optional` 指定双圆旋转效果是否可见。|
| height | Number | `undefined` | `optional` 指定双圆旋转效果圆高度。单位米。|
| radius1 | Number | `1500` | `optional` 指定内圆半径，单位米。|
| radius2 | Number | `3000` | `optional` 指定外圆半径，单位米。|
| material1 | Object\|String\|Array | | `optional` 指定内圆材质。|
| material2 | Object\|String\|Array | | `optional` 指定外圆材质。|
| deviationRotation1 | Number | `-0.03` | `optional` 指定内旋转角改变的差值。 |
| deviationRotation2 | String | `0.05` | `optional` 指定外圆旋转角改变的差值。 |

---

## 事件

| 事件名 | 参数                           | 描述                                                              |
| ------ | ------------------------------ | ----------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例, 以及实体数组。 |
