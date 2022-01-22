## VcPrimitiveClassification

加载分类图元，相当于初始化一个 `Cesium.ClassificationPrimitive` 实例，用于在场景中高亮表达一个闭合的几何体对象。

**注意：** 支持加载 BoxGeometry、 CylinderGeometry、 EllipsoidGeometry、PolylineVolumeGeometry 和 SphereGeometry；而 CircleGeometry、 CorridorGeometry、 EllipseGeometry、 PolygonGeometry 和 RectangleGeometry 需要拉伸才能正常渲染。

### 基础用法

分类图元组件的基础用法。

:::demo 使用 `vc-primitive-classification` 标签在三维球上添加拉伸的多边形。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady" v-model:camera="camera">
    <vc-primitive-classification ref="primitive" @click="onClicked" :asynchronous="false">
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-polygon
          :polygonHierarchy="[
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 102.1, lat: 33.5 }
          ]"
          :extrudedHeight="6000"
        ></vc-geometry-polygon>
      </vc-geometry-instance>
    </vc-primitive-classification>
    <vc-terrain-provider-cesium></vc-terrain-provider-cesium>
    <vc-layer-imagery>
      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>
    </vc-layer-imagery>
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
        attributes: null,
        camera: {
          position: {
            x: -1432246.8223880068,
            y: 5761224.588247942,
            z: 3297281.1889481535
          },
          heading: 6.20312220367255,
          pitch: -0.9937536846355606,
          roll: 0.002443376981836387
        }
      }
    },
    methods: {
      onViewerReady({ Cesium, viewer }) {
        viewer.scene.globe.depthTestAgainstTerrain = true
        this.attributes = {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))
        }
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
| show | Boolean | `true` | `optional` 指定图元是否显示。 |
| vertexCacheOptimize | Boolean | `false` | `optional` 指定是否优化几何体顶点着色器之前和之后的缓存。 |
| interleave | Boolean | `false` | `optional` 指定是否交错几何体顶点属性，true 时可以稍微改善渲染性能，但会增加加载时间。 |
| compressVertices | Boolean | `true` | `optional` 指定是否压缩几何体顶点，压缩可以以节省内存。 |
| releaseGeometryInstances | Boolean | `true` | `optional` 指定是否保留图元对几何体实例的输入，不保留可以节省内存。 |
| allowPicking | Boolean | `true` | `optional` 指定图元是否可以被 Scene.pick 拾取，关闭拾取可以节省内存。 |
| asynchronous | Boolean | `true` | `optional` 指定图元时异步加载还是同步加载。 |
| classificationType | Number | `2` | `optional` 指定是贴地形还是贴 3DTiles，还是两者都贴。 **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |0/1/2|
| debugShowBoundingVolume | Boolean | `false` | `optional` 指定是否显示图元的边界球，用于调试使用。 |
| debugShowShadowVolume | Boolean | `false` | `optional` 指定是否绘制图元中每个几何图形的阴影体积，用于调试使用。 |
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
| default | 用于挂载 vc-geometry-instance 组件。 | vc-geometry-instance |

### 参考

- 官方文档： **[ClassificationPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html)**
