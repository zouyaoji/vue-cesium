# PolylineGraphics

`vc-graphics-polyline` 组件用于加载多段线。需要作为 `vc-entity` 的子组件使用。

## 示例

### 加载折线

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :polyline.sync="polyline1">
          <vc-graphics-polyline
            :positions="positions1"
            :material="material1"
            :width="5"
            :clampToGround="false"
          ></vc-graphics-polyline>
        </vc-entity>
        <vc-entity :polyline.sync="polyline2">
          <vc-graphics-polyline :positions="positions2" :material="material2" :width="10"></vc-graphics-polyline>
        </vc-entity>
        <vc-entity :polyline.sync="polyline3">
          <vc-graphics-polyline :positions="positions3" :material="material3" :width="10"></vc-graphics-polyline>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          polyline1: {},
          positions1: [{ lng: 90, lat: 20, height: 10000 }, { lng: 120, lat: 20, height: 10000 }],
          material1: undefined,
          polyline2: {},
          positions2: [{ lng: 90, lat: 30, height: 10000 }, { lng: 120, lat: 30, height: 10000 }],
          material2: undefined,
          polyline3: {},
          positions3: [],
          material3: undefined
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.material1 = 'red'
          this.material2 = {
            fabric: {
              type: 'PolylineGlow',
              uniforms: {
                glowPower: 0.2,
                color: 'blue'
              }
            }
          }
          this.material3 = new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
          this.positions3 = [{ lng: 90, lat: 40, height: 10000 }, { lng: 120, lat: 40, height: 10000 }]
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
      <vc-entity :polyline.sync="polyline1">
        <vc-graphics-polyline
          :positions="positions1"
          :material="material1"
          :width="5"
          :clampToGround="false"
        ></vc-graphics-polyline>
      </vc-entity>
      <vc-entity :polyline.sync="polyline2">
        <vc-graphics-polyline :positions="positions2" :material="material2" :width="10"></vc-graphics-polyline>
      </vc-entity>
      <vc-entity :polyline.sync="polyline3">
        <vc-graphics-polyline :positions="positions3" :material="material3" :width="10"></vc-graphics-polyline>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        polyline1: {},
        positions1: [{ lng: 90, lat: 20, height: 10000 }, { lng: 120, lat: 20, height: 10000 }],
        material1: undefined,
        polyline2: {},
        positions2: [{ lng: 90, lat: 30, height: 10000 }, { lng: 120, lat: 30, height: 10000 }],
        material2: undefined,
        polyline3: {},
        positions3: [],
        material3: undefined
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material1 = 'red'
        this.material2 = {
          fabric: {
            type: 'PolylineGlow',
            uniforms: {
              glowPower: 0.2,
              color: 'blue'
            }
          }
        }
        this.material3 = new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
        this.positions3 = [{ lng: 90, lat: 40, height: 10000 }, { lng: 120, lat: 40, height: 10000 }]
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------------------ | ------- | --------- | ---------------------------------------------------------------------------------------------- |
| show | Boolean | `true` | `optional` 指定线是否可显示。 |
| positions | Array | | `optional` 指定表示线条的位置数组。 **结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| width | Number | `1.0` | `optional` 指定线的宽度（像素）。 |
| granularity | Number | | `optional` 指定每个经纬度之间的采样粒度。 arcType 不是 ArcType.NONE 时有效。 |
| material | Object\|String\|Array | `'WHITE'` | `optional` 指定用于绘制线的材质。 |
| depthFailMaterial | Object\|String\|Array | | `optional` 指定用于绘制低于地形的线的材质。 |
| arcType | Number | `1` | `optional` 指定线条类型。 **NONE: 0, GEODESIC: 1, RHUMB: 2** |
| clampToGround | Boolean | `false` | `optional` 指定线是否贴地。 |
| shadows | Number | | `optional` 指定这些是否投射或接收来自每个光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| classificationType | Number | `2` | `optional` 指定相机到线的距离。 **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3** |
| distanceDisplayCondition | Object | | `optional` 指定相机到线的距离。 **结构：{ near: number, far: number }** |
| zIndex | Number | `0` | `optional` 指定用于排序地面几何的 zIndex。 仅当`clampToGround`为真且支持地形上的折线时才有效。 |

---

- 参考官方文档： **[PolylineGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineGraphics.html)**

## 事件

| 事件名            | 参数                           | 描述                                                                             |
| ----------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| definitionChanged |                                | 每当更改或修改属性或子属性时触发该事件。                                         |

---
