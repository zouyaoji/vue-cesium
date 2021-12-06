## VcPrimitive

加载通用图元，相当于初始化一个 `Cesium.Primitive` 实例，通常用于挂载几何体(`vc-geometry-xxx`)对象。

### 基础用法

图元组件的基础用法。

:::demo 使用 `vc-primitive` 标签在三维球上添加矩形和圆。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive ref="primitive" @click="onClicked" :appearance="appearance" :geometryInstances="geometryInstances">
      <vc-instance-geometry>
        <vc-geometry-circle ref="geometryRef" :center="[103, 32]" :radius="250000"></vc-geometry-circle>
      </vc-instance-geometry>
    </vc-primitive>
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
        geometryInstances: {},
        appearance: {}
      }
    },
    methods: {
      onViewerReady({ Cesium, viewer }) {
        const rectangle = { west: 105.5, south: 29.5, east: 115.5, north: 35.5 }
        this.geometryInstances = new Cesium.GeometryInstance({
          geometry: new Cesium.RectangleGeometry({
            rectangle: Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north)
          })
        })
        this.appearance = new Cesium.MaterialAppearance({
          material: Cesium.Material.fromType('Checkerboard', {
            repeat: new Cesium.Cartesian2(20.0, 6.0)
          }),
          materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
        })
      },
      onClicked(e) {
        console.log(e)
      },
      unload() {
        this.$refs.primitive.unload()
      },
      load() {
        this.$refs.primitive.load()
      },
      reload() {
        this.$refs.primitive.reload()
      }
    }
  }
</script>
```

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ------ | ---- | ------ | ---- |---|
| geometryInstances | Object\|Array | | `optional` 指定要渲染的几何体实例或者几何体实例集合。 |
| appearance | Object | | `optional` 指定图元的外观参数。 |
| depthFailAppearance | Object | | `optional` 指定图元在深度测试失败后的外观。 |
| show | Boolean | `true` | `optional` 指定图元是否显示。 |
| modelMatrix | Object | | `optional` 指定图元从模型坐标转换为世界坐标的 4 x 4 矩阵。 |
| vertexCacheOptimize | Boolean | `false` | `optional` 指定是否优化几何体顶点着色器之前和之后的缓存。 |
| interleave | Boolean | `false` | `optional` 指定是否交错几何体顶点属性，true 时可以稍微改善渲染性能，但会增加加载时间。 |
| compressVertices | Boolean | `true` | `optional` 指定是否压缩几何体顶点，压缩可以以节省内存。 |
| releaseGeometryInstances | Boolean | `true` | `optional` 指定是否保留图元对几何体实例的输入，不保留可以节省内存。 |
| allowPicking | Boolean | `true` | `optional` 指定图元是否可以被 Scene.pick 拾取，关闭拾取可以节省内存。 |
| cull | Boolean | `true` | `optional` 指定是否能被渲染器视锥体剔除。 |
| asynchronous | Boolean | `true` | `optional` 指定图元时异步加载还是同步加载。 |
| debugShowBoundingVolume | Boolean | `false` | `optional` 指定是否显示图元的边界球，用于调试使用。 |
| shadows | Number | `0` | `optional` 指定图元是否投射或接收来自每个光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| enableMouseEvent | Boolean | `true` | `optional` 指定鼠标事件是否生效。 |

### 事件

| 事件名     | 参数                                                       | 描述                       |
| ---------- | ---------------------------------------------------------- | -------------------------- |
| beforeLoad | Vue Instance                                               | 对象加载前触发。           |
| ready      | {Cesium, viewer, cesiumObject, vm}                         | 对象加载成功时触发。       |
| destroyed  | Vue Instance                                               | 对象销毁时触发。           |
| mousedown  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上按下时触发。 |
| mouseup    | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上弹起时触发。 |
| click      | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元时触发。     |
| clickout   | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元外部时触发。 |
| dblclick   | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标左键双击该图元时触发。 |
| mousemove  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上移动时触发。 |
| mouseover  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移动到该图元时触发。   |
| mouseout   | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移出该图元时触发。     |

### 插槽

<!-- prettier-ignore -->
| 插槽名 | 描述 | 子组件 |
| ---- | ----------- | ------- |
| default | 用于挂载 vc-instance-geometry 组件。 | vc-instance-geometry |

### 参考

- 官方文档： **[Primitive](https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html)**
