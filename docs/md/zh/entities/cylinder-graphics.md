# 圆柱（锥）体

`cylinder-graphics` 圆柱（锥）体组件，作为`entity`的子组件添加包含圆柱（锥）体对象的实体到场景。描述由长度，顶部半径和底部半径定义的圆柱体，截锥体或圆锥体。 中心位置和方向由包含实体确定，如示例所示。

## 示例

### 添加圆柱（锥）体到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :cylinder.sync="cylinder1">
          <cylinder-graphics :length="400000.0" :topRadius="200000.0" :bottomRadius="200000.0" :material="material1"
            :outline="true" :outlineColor="outlineColor1"></cylinder-graphics>
        </entity>
        <entity :position="position2" :description="description" :cylinder.sync="cylinder2">
          <cylinder-graphics :length="400000.0" :topRadius="0.0" :bottomRadius="200000.0" :material="material2" @ready="subReady"></cylinder-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          cylinder1: {},
          position1: { lng: 105.0, lat: 40.0, height: 200000.0 },
          outlineColor1: 'DARK_GREEN',
          material1: {},

          cylinder2: {},
          position2: { lng: 110.0, lat: 40.0, height: 200000.0 },
          material2: 'RED'
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.material1 = Cesium.Color.GREEN.withAlpha(0.5)
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
      <entity :position="position1" :description="description" :cylinder.sync="cylinder1">
        <cylinder-graphics
          :length="400000.0"
          :topRadius="200000.0"
          :bottomRadius="200000.0"
          :material="material1"
          :outline="true"
          :outlineColor="outlineColor1"
        ></cylinder-graphics>
      </entity>
      <entity :position="position2" :description="description" :cylinder.sync="cylinder2">
        <cylinder-graphics
          :length="400000.0"
          :topRadius="0.0"
          :bottomRadius="200000.0"
          :material="material2"
          @ready="subReady"
        ></cylinder-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        cylinder1: {},
        position1: { lng: 105.0, lat: 40.0, height: 200000.0 },
        outlineColor1: 'DARK_GREEN',
        material1: {},

        cylinder2: {},
        position2: { lng: 110.0, lat: 40.0, height: 200000.0 },
        material2: 'RED'
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material1 = Cesium.Color.GREEN.withAlpha(0.5)
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
| ------------------------ | --------------------- | --------- | --------------------------------------------------------- |
| show | Boolean | `true` | `optional` 指定 cylinder 是否显示。 |
| length | Array | | `optional` 指定 cylinder 的长。 |
| topRadius | Number | | `optional` 指定 cylinder 的顶部半径。 |
| bottomRadius | Number | | `optional` 指定 cylinder 的底部半径。 |
| heightReference | Number | | `optional` 指定 cylinder 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| fill | Boolean | `true` | `optional` 指定 cylinder 是否填充材质。 |
| material | Object\|String\|Array | `'WHITE'` | `optional` 指定 cylinder 的材质。 |
| outline | Boolean | `false` | `optional` 指定 cylinder 是否绘制轮廓线。 |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` 指定 cylinder 轮廓线颜色。 |
| outlineWidth | Number | `1.0` | `optional` 指定 cylinder 轮廓线宽度。 |
| numberOfVerticalLines | Number | `16` | `optional` 指定沿轮廓线周长绘制的垂直线数。 |
| slices | Number | `128` | `optional` 指定 cylinder 边节点数量。 |
| shadows | Number | `0` | `optional` 指定 cylinder 是否投射或接收每个点光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` 指定 cylinder 随相机距离显示条件。 **结构：{ near: number, far: number }** |

---

- 官方文档 [CylinderGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html)

## 事件

| 事件名            | 参数             | 描述                                                |
| ----------------- | ---------------- | --------------------------------------------------- |
| ready             | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
| definitionChanged |                  | 每当更改或修改属性或子属性时触发该事件。            |
