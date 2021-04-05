## 实体

`vc-entity` 组件用于加载实体对象，相当于初始化一个 `Cesium.Entity` 实例。需要作为 `vc-viewer`, `vc-datasource-custom`, `vc-datasource-geojson`, `vc-datasource-kml`, `vc-datasource-czml` 的子组件才能正常加载。使用时可以直接指定 `vc-entity` 的各个 `graphic` 属性，也用 VueCesium 提供的 `vc-graphics-xxx` 系列组件作为 `vc-entity` 子组件挂载各个 `graphic`，但一个实体下同类型 `grahpic` 只能挂载一个。如果需要加载大量实体实例集合，建议添加到数据源组件下。

### 基础用法

实体实例组件的基础用法。

:::demo 使用 `vc-entity` 标签在三维球上添加点、布告板、标签、矩形实体实例，并响应一些鼠标事件。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- 通过属性加载 和 子组件分别加载 -->
    <vc-entity
      ref="entity"
      :billboard="billboard"
      :position="{lng: 108, lat: 32}"
      :point="point"
      :label="label"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <!-- :coordinates = "{ west: 130, south: 20, east: 80, north: 25 }" -->
      <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
    </vc-entity>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        point: {
          pixelSize: 28,
          color: 'red'
        },
        label: {
          text: 'Hello World',
          pixelOffset: [0, 80]
        },
        billboard: {
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.5
        }
      }
    },
    methods: {
      onEntityEvt(e) {
        console.log(e)
        if (e.type === 'onmouseover') {
          this.billboard = {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.6
          }
        } else if (e.type === 'onmouseout') {
          this.billboard = {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.5
          }
        }
      },
      unload() {
        this.$refs.entity.unload()
      },
      load() {
        this.$refs.entity.load()
      },
      reload() {
        this.$refs.entity.reload()
      }
    }
  }
</script>
```

:::

### 属性

| 属性名         | 类型       | 默认值 | 描述                                                             |
| -------------- | ---------- | ------ | ---------------------------------------------------------------- |
| id             | String     |        | `optional` 指定 entity 的唯一标识符。如果没有提供，则生成 GUID。 |
| name           | String     |        | `optional` 指定 entity 名称，名称可不必唯一。                    |
| availability   |            |        | `optional` 指定 entity 关联的可用性参数。                        |
| show           | Boolean    | `true` | `optional` 指定 entity 及其子项是否显示。                        |
| description    |            |        | `optional` 指定 entity 的 HTML 描述信息。                        |
| position       | Cartesian3 |        | `optional` 指定 entity 的位置。                                  |
| orientation    |            |        | `optional` 指定 entity 的方向。                                  |
| viewFrom       |            |        | `optional` 指定 entity 的初始偏移量。                            |
| parent         |            |        | `optional` 指定 entity 关联的父实体。                            |
| billboard      |            |        | `optional` 指定 entity 关联的布告板。                            |
| box            |            |        | `optional` 指定 entity 关联的盒子对象。                          |
| corridor       |            |        | `optional` 指定 entity 关联的走廊对象。                          |
| cylinder       |            |        | `optional` 指定 entity 关联的圆柱对象。                          |
| ellipse        |            |        | `optional` 指定 entity 关联的椭圆对象。                          |
| ellipsoid      |            |        | `optional` 指定 entity 关联的椭球体对象。                        |
| label          |            |        | `optional` 指定 entity 关联的标签对象。                          |
| model          |            |        | `optional` 指定 entity 关联的模型对象。                          |
| tileset        |            |        | `optional` 指定 entity 关联的 tileset 对象。                     |
| path           |            |        | `optional` 指定 entity 关联的路径对象。                          |
| plane          |            |        | `optional` 指定 entity 关联的平面对象。                          |
| point          |            |        | `optional` 指定 entity 关联的点对象。                            |
| polygon        |            |        | `optional` 指定 entity 关联的多边形对象。                        |
| polyline       |            |        | `optional` 指定 entity 关联的折线对象。                          |
| properties     |            |        | `optional` 指定 entity 关联的属性。                              |
| polylineVolume |            |        | `optional` 指定 entity 关联的多线段柱体对象。                    |
| rectangle      |            |        | `optional` 指定 entity 关联的矩形对象。                          |
| wall           |            |        | `optional` 指定 entity 关联的墙对象。                            |

:::tip

提示：`position` 属性除了可传 `Cesium.Cartesian3` 还可以传 `PlainObject(CartographicInDegreeOption|Cartesian3Option`) 和 `Array<number>` (度)

:::

:::tipflex

```js
// CartographicInDegreeOption
{
  lng: number,
  lat: number,
  height: number
}
```

```js
// Cartesian3Option
{
  x: number,
  y: number,
  z: number
}
```

```js
// Array<number> in degrees
;[number, number, number]
```

:::

### 事件

| 事件名            | 参数                                                       | 描述                                     |
| ----------------- | ---------------------------------------------------------- | ---------------------------------------- |
| definitionChanged |                                                            | 每当更改或修改属性或子属性时触发该事件。 |
| mousedown         | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该实体上按下时触发。               |
| mouseup           | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该实体上弹起时触发。               |
| click             | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该实体时触发。                   |
| clickout          | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该实体外部时触。                 |
| dblclick          | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标左键双击该实体时触发。               |
| mousemove         | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该实体上移动时触发。               |
| mouseover         | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移动到该实体时触发。                 |
| mouseout          | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移出该实体时触发。                   |

### 参考

- 官方文档： [Entity](https://cesium.com/docs/cesiumjs-ref-doc/Entity.html)
