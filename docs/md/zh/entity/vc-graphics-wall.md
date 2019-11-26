# WallGraphics

`vc-graphics-wall` 组件用于加载二维墙。需要作为 `vc-entity` 的子组件使用。

## 示例

### 加载围墙

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :description="description" :wall.sync="wall1">
          <vc-graphics-wall :positions="positions1" :material="material1" :minimumHeights="[100000.0, 100000.0]"></vc-graphics-wall>
        </vc-entity>
        <vc-entity :description="description" :wall.sync="wall2">
          <vc-graphics-wall :positions="positions2" :material="material2" :outline="true" heightPositions></vc-graphics-wall>
        </vc-entity>
        <vc-entity :description="description" :wall.sync="wall3">
          <vc-graphics-wall
            :positions="positions3"
            :material="material3"
            :outline="true"
            :outlineColor="outlineColor3"
            :maximumHeights="[100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000]"
            :minimumHeights="[0, 100000,  0, 100000, 0, 100000, 0, 100000, 0, 100000]"
            @ready="subReady"
          ></vc-graphics-wall>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          wall1: {},
          positions1: [
            { lng: -115.0, lat: 44.0, height: 200000.0 },
            { lng: -90.0, lat: 44.0, height: 200000.0 }
          ],
          material1: 'RED',

          wall2: {},
          positions2: [
            { lng: -107.0, lat: 43.0, height: 100000.0 },
            { lng: -97.0, lat: 43.0, height: 100000.0 },
            { lng: -97.0, lat: 40.0, height: 100000.0 },
            { lng: -107.0, lat: 40.0, height: 100000.0 },
            { lng: -107.0, lat: 43.0, height: 100000.0 }
          ],
          material2: {},

          wall3: {},
          positions3: [
            { lng: -115.0, lat: 50.0 },
            { lng: -112.0, lat: 50.0 },
            { lng: -107.5, lat: 50.0 },
            { lng: -105.0, lat: 50.0 },
            { lng: -102.5, lat: 50.0 },
            { lng: -100.0, lat: 50.0 },
            { lng: -97.5, lat: 50.0 },
            { lng: -95.0, lat: 50.0 },
            { lng: -92.5, lat: 50.0 },
            { lng: -90.0, lat: 50.0 }
          ],
          material3: {},
          outlineColor3: {}
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.material1 = Cesium.Color.RED
          this.material2 = Cesium.Color.GREEN
          this.material3 = Cesium.Color.BLUE.withAlpha(0.5)
          this.outlineColor3 = Cesium.Color.BLACK
        },
        subReady(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
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
      <vc-entity :description="description" :wall.sync="wall1">
        <vc-graphics-wall :positions="positions1" :material="material1" :minimumHeights="[100000.0, 100000.0]"></vc-graphics-wall>
      </vc-entity>
      <vc-entity :description="description" :wall.sync="wall2">
        <vc-graphics-wall :positions="positions2" :material="material2" :outline="true" heightPositions></vc-graphics-wall>
      </vc-entity>
      <vc-entity :description="description" :wall.sync="wall3">
        <vc-graphics-wall
          :positions="positions3"
          :material="material3"
          :outline="true"
          :outlineColor="outlineColor3"
          :maximumHeights="[100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000]"
          :minimumHeights="[0, 100000,  0, 100000, 0, 100000, 0, 100000, 0, 100000]"
          @ready="subReady"
        ></vc-graphics-wall>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        wall1: {},
        positions1: [
          { lng: -115.0, lat: 44.0, height: 200000.0 },
          { lng: -90.0, lat: 44.0, height: 200000.0 }
        ],
        material1: 'RED',

        wall2: {},
        positions2: [
          { lng: -107.0, lat: 43.0, height: 100000.0 },
          { lng: -97.0, lat: 43.0, height: 100000.0 },
          { lng: -97.0, lat: 40.0, height: 100000.0 },
          { lng: -107.0, lat: 40.0, height: 100000.0 },
          { lng: -107.0, lat: 43.0, height: 100000.0 }
        ],
        material2: {},

        wall3: {},
        positions3: [
          { lng: -115.0, lat: 50.0 },
          { lng: -112.0, lat: 50.0 },
          { lng: -107.5, lat: 50.0 },
          { lng: -105.0, lat: 50.0 },
          { lng: -102.5, lat: 50.0 },
          { lng: -100.0, lat: 50.0 },
          { lng: -97.5, lat: 50.0 },
          { lng: -95.0, lat: 50.0 },
          { lng: -92.5, lat: 50.0 },
          { lng: -90.0, lat: 50.0 }
        ],
        material3: {},
        outlineColor3: {}
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material1 = Cesium.Color.RED
        this.material2 = Cesium.Color.GREEN
        this.material3 = Cesium.Color.BLUE.withAlpha(0.5)
        this.outlineColor3 = Cesium.Color.BLACK
      },
      subReady(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.zoomTo(viewer.entities)
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------------------ | ------- | ----------- | -------------------------------------------------- |
| show | Boolean | `true` | `optional` 指定 wall 是否显示。 |
| positions | Array | | `optional` 指定 wall 顶部的位置数组。 **结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| minimumHeights | Array | | `optional` 指定 wall 底部的高度数组。 |
| maximumHeights | Array | | `optional` 指定 wall 顶部的高度数组。 |
| granularity | Number | | `optional` 指定每个纬度和经度之间的角距离。 |
| fill | Boolean | `true` | `optional` 指定 wall 是否填充材质。 |
| material | Object\|String\|Array | `'WHITE'` | `optional` 指定 wall 材质。 |
| outline | Boolean | `false` | `optional` 指定 wall 是否绘制轮廓线。 |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` 指定 wall 轮廓线颜色。 |
| outlineWidth | Number | `1.0` | `optional` 指定 wall 轮廓线宽度。 |
| shadows | Number | `0` | `optional` 指定 wall 是否投射或接收阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` 指定 wall 随相机距离改变的显示条件。 **结构：{ near: number, far: number }** |

---

- 参考官方文档： **[WallGraphics](https://cesium.com/docs/cesiumjs-ref-doc/WallGraphics.html)**

## 事件

| 事件名            | 参数                           | 描述                                                                             |
| ----------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| definitionChanged |                                | 每当更改或修改属性或子属性时触发该事件。                                         |

---
