# (椭)球体

`ellipsoid-graphics` (椭)球体组件，作为`entity`的子组件添加包含(椭)球体对象的实体到场景。描述一个椭圆体或球体。 中心位置和方向由包含实体确定。如示例所示。

## 示例

### 添加(椭)球体到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :ellipsoid.sync="ellipsoid1">
          <ellipsoid-graphics :radii="radii1":material="material1"
            :outline="true"></ellipsoid-graphics>
        </entity>
        <entity :position="position2" :description="description" :ellipsoid.sync="ellipsoid2">
          <ellipsoid-graphics :radii="radii2" :outline="true" :material="material2" :outlineColor="outlineColor2"></ellipsoid-graphics>
        </entity>
        <entity :position="position3" :description="description" :ellipsoid.sync="ellipsoid3">
          <ellipsoid-graphics :radii="radii3" :fill="false" :outline="true" :outlineColor="outlineColor3" :slicePartitions="24"
            :stackPartitions="36" @ready="subReady"></ellipsoid-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          ellipsoid1: {},
          position1: { lng: 114.0, lat: 40.0, height: 300000.0 },
          radii1: { x: 200000.0, y: 200000.0, z: 300000.0 },
          material1: 'BLUE',

          ellipsoid2: {},
          position2: { lng: 107.0, lat: 40.0, height: 300000.0 },
          radii2: { x: 300000.0, y: 300000.0, z: 300000.0 },
          outlineColor2: 'BLACK',
          material2: {},

          ellipsoid3: {},
          position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
          radii3: { x: 200000.0, y: 200000.0, z: 300000.0 },
          outlineColor3: 'YELLOW'
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.material2 = Cesium.Color.RED.withAlpha(0.5)
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
      <entity :position="position1" :description="description" :ellipsoid.sync="ellipsoid1">
        <ellipsoid-graphics :radii="radii1" :material="material1" :outline="true"></ellipsoid-graphics>
      </entity>
      <entity :position="position2" :description="description" :ellipsoid.sync="ellipsoid2">
        <ellipsoid-graphics
          :radii="radii2"
          :outline="true"
          :material="material2"
          :outlineColor="outlineColor2"
        ></ellipsoid-graphics>
      </entity>
      <entity :position="position3" :description="description" :ellipsoid.sync="ellipsoid3">
        <ellipsoid-graphics
          :radii="radii3"
          :fill="false"
          :outline="true"
          :outlineColor="outlineColor3"
          :slicePartitions="24"
          :stackPartitions="36"
          @ready="subReady"
        ></ellipsoid-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        ellipsoid1: {},
        position1: { lng: 114.0, lat: 40.0, height: 300000.0 },
        radii1: { x: 200000.0, y: 200000.0, z: 300000.0 },
        material1: 'BLUE',

        ellipsoid2: {},
        position2: { lng: 107.0, lat: 40.0, height: 300000.0 },
        radii2: { x: 300000.0, y: 300000.0, z: 300000.0 },
        outlineColor2: 'BLACK',
        material2: {},

        ellipsoid3: {},
        position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
        radii3: { x: 200000.0, y: 200000.0, z: 300000.0 },
        outlineColor3: 'YELLOW'
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material2 = Cesium.Color.RED.withAlpha(0.5)
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
| ------------------------ | ------- | --------- | ------------------------------------------------------------- |
| show | Boolean | `true` | `optional` 指定 ellipsoid 是否显示。 |
| radii | Object | | `optional` 指定 ellipsoid 的半径参数。 **结构： { x: number, y: number, z: number }** |
| heightReference | Number | | `optional` 指定 ellipsoid 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| fill | Boolean | `true` | `optional` 指定 ellipsoid 是否填充材质。 |
| material | Object\|String\|Array | `'WHITE'` | `optional` 指定 ellipsoid 材质。 |
| outline | Boolean | `false` | `optional` 指定 ellipsoid 是否绘制轮廓线。 |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` 指定 ellipsoid 轮廓线颜色。 |
| outlineWidth | Number | `1.0` | `optional` 指定 ellipsoid 轮廓线宽度。 |
| stackPartitions | Number | `64` | `optional` A Property specifying the number of stacks. |
| slicePartitions | Number | `64` | `optional` A Property specifying the number of radial slices. |
| subdivisions | Number | `128` | `optional` 指定 ellipsoid 每个轮环的样本数，确定曲率粒度。 |
| shadows | Number | `0` | `optional` 指定 ellipsoid 是否投射或接受每一个光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` 指定 ellipsoid 随相机距离的显示条件。 **结构：{ near: number, far: number }** |

---

- 官方文档 [EllipsoidGraphics](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGraphics.html)

## 事件

| 事件名            | 参数             | 描述                                                |
| ----------------- | ---------------- | --------------------------------------------------- |
| ready             | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
| definitionChanged |                  | 每当更改或修改属性或子属性时触发该事件。            |
