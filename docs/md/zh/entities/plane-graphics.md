# 平面

`plane-graphics` 平面组件，作为`entity`的子组件添加包含平面的实体到场景。描述一个平面，中心位置和方向由包含实体确定。如示例所示。

## 示例

### 添加平面到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :plane.sync="planeEntity1">
          <plane-graphics :plane="plane1" :dimensions="dimensions1" :material="material1"></plane-graphics>
        </entity>
        <entity :position="position2" :description="description" :plane.sync="planeEntity2">
          <plane-graphics :plane="plane2" :dimensions="dimensions2" :material="material2" :outline="true" :outlineColor="outlineColor2"></plane-graphics>
        </entity>
        <entity :position="position3" :description="description" :plane.sync="planeEntity3">
          <plane-graphics :plane="plane3" :dimensions="dimensions3" :fill="false" :outline="true" :outlineColor="outlineColor3" @ready="subReady"></plane-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          position1: { lng: 114.0, lat: 40.0, height: 300000.0 },
          planeEntity1: {},
          plane1: { normal: { x: 1, y: 0, z: 0 }, distance: 0.0 },
          dimensions1: { x: 400000.0, y: 300000.0 },
          material1: 'BLUE',

          position2: { lng: 107.0, lat: 40.0, height: 300000.0 },
          planeEntity2: {},
          plane2: { normal: { x: 0, y: 1, z: 0 }, distance: 0.0 },
          dimensions2: { x: 400000.0, y: 300000.0 },
          material2: {},
          outlineColor2: 'BLACK',

          position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
          planeEntity3: {},
          plane3: { normal: { x: 0, y: 0, z: 1 }, distance: 0.0 },
          dimensions3: { x: 400000.0, y: 300000.0 },
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
      <entity :position="position1" :description="description" :plane.sync="planeEntity1">
        <plane-graphics :plane="plane1" :dimensions="dimensions1" :material="material1"></plane-graphics>
      </entity>
      <entity :position="position2" :description="description" :plane.sync="planeEntity2">
        <plane-graphics
          :plane="plane2"
          :dimensions="dimensions2"
          :material="material2"
          :outline="true"
          :outlineColor="outlineColor2"
        ></plane-graphics>
      </entity>
      <entity :position="position3" :description="description" :plane.sync="planeEntity3">
        <plane-graphics
          :plane="plane3"
          :dimensions="dimensions3"
          :fill="false"
          :outline="true"
          :outlineColor="outlineColor3"
          @ready="subReady"
        ></plane-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        position1: { lng: 114.0, lat: 40.0, height: 300000.0 },
        planeEntity1: {},
        plane1: { normal: { x: 1, y: 0, z: 0 }, distance: 0.0 },
        dimensions1: { x: 400000.0, y: 300000.0 },
        material1: 'BLUE',

        position2: { lng: 107.0, lat: 40.0, height: 300000.0 },
        planeEntity2: {},
        plane2: { normal: { x: 0, y: 1, z: 0 }, distance: 0.0 },
        dimensions2: { x: 400000.0, y: 300000.0 },
        material2: {},
        outlineColor2: 'BLACK',

        position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
        planeEntity3: {},
        plane3: { normal: { x: 0, y: 0, z: 1 }, distance: 0.0 },
        dimensions3: { x: 400000.0, y: 300000.0 },
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
| ------------------------ | ------------- | ----------- | ------------------------------------------------ |
| show | Boolean | `true` | `optional` 指定 plane 是否显示。 |
| plane | Object | | `optional` 指定 plane 的法线和距离。 **结构：{ normal: { x: number, y: number, z: number }, distance: number }** |
| dimensions | Object | | `optional` 指定 plane 的宽和高。 **结构：{ x: number, y: number }** |
| fill | Boolean | `true` | `optional` 指定 plane 是否填充材质。 |
| material | Object\|String\|Array | `'WHITE'` | `optional` 指定 plane 的材质。 |
| outline | Boolean | `false` | `optional` 指定 plane 是否绘制轮廓线。 |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` 指定 plane 轮廓线颜色。 |
| outlineWidth | Number | `1.0` | `optional` 指定 plane 轮廓线宽度。 |
| shadows | Number | `0` | `optional` 指定 plane 是否投射或接收阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` 指定 plane 随相机距离改变的显示条件。 **结构：{ near: number, far: number }** |

---

- 官方文档 [PlaneGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PlaneGraphics.html)

## 事件

| 事件名            | 参数             | 描述                                                |
| ----------------- | ---------------- | --------------------------------------------------- |
| ready             | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
| definitionChanged |                  | 每当更改或修改属性或子属性时触发该事件。            |
