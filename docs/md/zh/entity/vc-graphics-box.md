# BoxGraphics

`vc-graphics-box` 组件用于加载立方体。需要作为 `vc-entity` 的子组件使用。

## 示例

### 添加立方体盒子

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :position="position1" :description="description" :box.sync="box1">
          <vc-graphics-box :dimensions="dimensions1" :material="material1"></vc-graphics-box>
        </vc-entity>
        <vc-entity :position="position2" :description="description" :box.sync="box2">
          <vc-graphics-box :dimensions="dimensions2" :material="material2" :outlineColor="outlineColor2" :outline="true"></vc-graphics-box>
        </vc-entity>
        <vc-entity :position="position3" :description="description" :box.sync="box3">
          <vc-graphics-box :dimensions="dimensions3" :outlineColor="outlineColor3" :fill="false" :outline="true"></vc-graphics-box>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          box1: {},
          position1: { lng: 105.0, lat: 40.0, height: 300000.0 },
          dimensions1: { x: 400000.0, y: 300000.0, z: 500000.0 },
          material1: 'BLUE',

          box2: {},
          position2: { lng: 110.0, lat: 40.0, height: 300000.0 },
          dimensions2: { x: 400000.0, y: 300000.0, z: 500000.0 },
          material2: {},
          outlineColor2: 'BLACK',

          box3: {},
          position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
          dimensions3: { x: 400000.0, y: 300000.0, z: 500000.0 },
          outlineColor3: 'YELLOW'
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.material2 = Cesium.Color.RED.withAlpha(0.5)
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
      <vc-entity :position="position1" :description="description" :box.sync="box1">
        <vc-graphics-box :dimensions="dimensions1" :material="material1"></vc-graphics-box>
      </vc-entity>
      <vc-entity :position="position2" :description="description" :box.sync="box2">
        <vc-graphics-box
          :dimensions="dimensions2"
          :material="material2"
          :outlineColor="outlineColor2"
          :outline="true"
        ></vc-graphics-box>
      </vc-entity>
      <vc-entity :position="position3" :description="description" :box.sync="box3">
        <vc-graphics-box :dimensions="dimensions3" :outlineColor="outlineColor3" :fill="false" :outline="true"></vc-graphics-box>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        box1: {},
        position1: { lng: 105.0, lat: 40.0, height: 300000.0 },
        dimensions1: { x: 400000.0, y: 300000.0, z: 500000.0 },
        material1: 'BLUE',

        box2: {},
        position2: { lng: 110.0, lat: 40.0, height: 300000.0 },
        dimensions2: { x: 400000.0, y: 300000.0, z: 500000.0 },
        material2: {},
        outlineColor2: 'BLACK',

        box3: {},
        position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
        dimensions3: { x: 400000.0, y: 300000.0, z: 500000.0 },
        outlineColor3: 'YELLOW'
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material2 = Cesium.Color.RED.withAlpha(0.5)
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------------------ | --------------------- | --------- | ---------------------------------------------------------------------- |
| show | Boolean | `true` | `optional` 指定 box 是否可见。 |
| dimensions | Object | | `optional` 指定 box 的长宽高。 **结构：{ x: number, y: number, z: number }** |
| heightReference | Number | | `optional` 指定 box 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| fill | Boolean | `true` | `optional` 指定 box 是否按提供的材质填充。 |
| material | Object\|String\|Array | `'WHITE'` | `optional` 指定 box 材质。 |
| outline | Boolean | `false` | `optional` 指定是否绘制 box 轮廓线。 |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` 指定是否绘制 box 轮廓线的颜色。 |
| outlineWidth | Number | `1.0` | `optional` 指定绘制 box 轮廓线的宽度。 |
| shadows | Number | `0` | `optional` 指定这些是否投射或接收来自每个光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` 指定 box 显示条件。 **结构：{ near: number, far: number }** |

---

参考官方文档： [BoxGraphics](https://cesium.com/docs/cesiumjs-ref-doc/BoxGraphics.html)

## 事件

| 事件名            | 参数                           | 描述                                                                             |
| ----------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| definitionChanged |                                | 每当更改或修改属性或子属性时触发该事件。                                         |

---
