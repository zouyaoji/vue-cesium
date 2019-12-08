# RectangleGraphics

`vc-graphics-rectangle` 组件用于加载矩形，可以拉伸成体。需要作为 `vc-entity` 的子组件使用。

## 示例

### 加载矩形

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :description="description" :rectangle.sync="rectangle1">
          <vc-graphics-rectangle ref="rectangle1" :coordinates="coordinates1" :material="material1"></vc-graphics-rectangle>
        </vc-entity>
        <vc-entity :description="description" :rectangle.sync="rectangle2">
          <vc-graphics-rectangle
            :coordinates="coordinates2"
            :material="material2"
            :rotation="rotation2"
            :extrudedHeight="300000.0"
            :height="100000.0"
            :outline="true"
            :outlineColor="outlineColor2"
            ref="rectangle2"
          ></vc-graphics-rectangle>
        </vc-entity>
        <vc-entity :description="description" :rectangle.sync="rectangle3">
          <vc-graphics-rectangle
            :coordinates="coordinates3"
            :material="material3"
            :rotation="rotation3"
            :stRotation="stRotation3"
            :classificationType="classificationType3"
            ref="rectangle3"
          ></vc-graphics-rectangle>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          rotation: 0,
          rectangle1: {},
          coordinates1: { west: -110, south: 20, east: -80, north: 25 },
          material1: {},

          rectangle2: {},
          coordinates2: { west: -110, south: 30, east: -100, north: 40 },
          material2: {},
          rotation2: {},
          outlineColor2: {},

          rectangle3: {},
          coordinates3: { west: -92.0, south: 30.0, east: -82.0, north: 40.0 },
          material3: {},
          rotation3: {},
          stRotation3: {},
          classificationType3: 0
        }
      },
      mounted() {
        Promise.all([
          this.$refs.rectangle1.createPromise,
          this.$refs.rectangle2.createPromise,
          this.$refs.rectangle3.createPromise
        ]).then((instances) => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.rotation = Cesium.Math.toRadians(30)
          this.material1 = Cesium.Color.RED.withAlpha(0.5)

          this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
          this.rotation2 = Cesium.Math.toRadians(45)
          this.outlineColor2 = Cesium.Color.BLACK

          this.material3 = 'https://zouyaoji.top/vue-cesium/favicon.png'
          this.outlineColor3 = `BLACK`
          this.rotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
          this.stRotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
          this.classificationType3 = Cesium.ClassificationType.TERRAIN
        },
        getRotationValue() {
          this.rotation += 0.005
          return this.rotation
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
      <vc-entity :description="description" :rectangle.sync="rectangle1">
        <vc-graphics-rectangle ref="rectangle1" :coordinates="coordinates1" :material="material1"></vc-graphics-rectangle>
      </vc-entity>
      <vc-entity :description="description" :rectangle.sync="rectangle2">
        <vc-graphics-rectangle
          :coordinates="coordinates2"
          :material="material2"
          :rotation="rotation2"
          :extrudedHeight="300000.0"
          :height="100000.0"
          :outline="true"
          :outlineColor="outlineColor2"
          ref="rectangle2"
        ></vc-graphics-rectangle>
      </vc-entity>
      <vc-entity :description="description" :rectangle.sync="rectangle3">
        <vc-graphics-rectangle
          :coordinates="coordinates3"
          :material="material3"
          :rotation="rotation3"
          :stRotation="stRotation3"
          :classificationType="classificationType3"
          ref="rectangle3"
        ></vc-graphics-rectangle>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        rotation: 0,
        rectangle1: {},
        coordinates1: { west: -110, south: 20, east: -80, north: 25 },
        material1: {},

        rectangle2: {},
        coordinates2: { west: -110, south: 30, east: -100, north: 40 },
        material2: {},
        rotation2: {},
        outlineColor2: {},

        rectangle3: {},
        coordinates3: { west: -92.0, south: 30.0, east: -82.0, north: 40.0 },
        material3: {},
        rotation3: {},
        stRotation3: {},
        classificationType3: 0
      }
    },
    mounted() {
      Promise.all([
        this.$refs.rectangle1.createPromise,
        this.$refs.rectangle2.createPromise,
        this.$refs.rectangle3.createPromise
      ]).then((instances) => {
        instances[0].viewer.zoomTo(instances[0].viewer.entities)
      })
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.rotation = Cesium.Math.toRadians(30)
        this.material1 = Cesium.Color.RED.withAlpha(0.5)

        this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
        this.rotation2 = Cesium.Math.toRadians(45)
        this.outlineColor2 = Cesium.Color.BLACK

        this.material3 = 'https://zouyaoji.top/vue-cesium/favicon.png'
        this.outlineColor3 = `BLACK`
        this.rotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
        this.stRotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
        this.classificationType3 = Cesium.ClassificationType.TERRAIN
      },
      getRotationValue() {
        this.rotation += 0.005
        return this.rotation
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| show | Boolean | `true` | `optional` 指定 rectangle 是否显示。 |
| coordinates | Object | | `optional` 指定 rectangle 的 Rectangle 属性。**结构：{ west: number, south: number, east: number, north: number }** |
| height | Number | `0` | `optional` 指定 rectangle 高度。 |
| heightReference | Number | | `optional` 指定 rectangle 高度模式。**NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| extrudedHeight | Number | | `optional` 指定 rectangle 拉伸高度。 |
| extrudedHeightReference | Number | | `optional` 指定 rectangle 拉伸高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| rotation | Number | `0.0` | `optional` 指定 rectangle 按正北顺时针的旋转角。 |
| stRotation | Number | `0.0` | `optional` 指定 rectangle 按正北逆时针旋转纹理。 |
| granularity | Number | | `optional` 指定每个经纬度之间的采样粒度。 |
| fill | Boolean | `true` | `optional` 指定 rectangle 是否填充材质。 |
| material | Object\|String\|Array | `'WHITE'` | `optional` 指定 rectangle 材质。 |
| outline | Boolean | `false` | `optional` 指定 rectangle 是否绘制轮廓线。 |
| outlineColor | Object\|String\|Array | `'BALCK'` | `optional` 指定 rectangle 轮廓线颜色。 |
| outlineWidth | Number | `1.0` | `optional` 指定 rectangle 轮廓线宽度。 |
| shadows | Number | `0` | `optional` 指定 rectangle 是否投射或接收阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` 指定 rectangle 随相机距离改变是否显示参数。 **结构：{ near: number, far: number }** |
| classificationType | Number | `2` | `optional` 指定 rectangle 贴对象模式 。 **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3**  |
| zIndex | Number | `0` | `optional` 指定 rectangle 顺序，没设置高度和拉伸高度时有效。 |

---

- 参考官方文档： **[RectangleGraphics](https://cesium.com/docs/cesiumjs-ref-doc/RectangleGraphics.html)**

## 事件

| 事件名            | 参数                           | 描述                                                                             |
| ----------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| definitionChanged |                                | 每当更改或修改属性或子属性时触发该事件。                                         |

---
