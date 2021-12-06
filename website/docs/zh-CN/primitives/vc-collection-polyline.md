## VcCollectionPolyline

加载线图元集合，相当于初始化一个 `Cesium.PolylineCollection` 实例。渲染海量线图元时建议用 `polylines` 属性表达。

### 基础用法

线图元集合组件的基础用法。

:::demo 使用 `vc-collection-polyline` 标签在三维球上添加线图元集合。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-collection-polyline @click="onClicked" ref="collectionRef" :polylines="polylines">
      <vc-polyline
        :positions="[[90, 20, 10000], [120, 20, 10000]]"
        :material="{
          fabric: {
            type: 'Color',
            uniforms: {
              color: 'red'
            }
          }
        }"
        :width="5"
      ></vc-polyline>
      <vc-polyline
        :positions="[[90, 30, 10000], [120, 30, 10000]]"
        :material="{
          fabric: {
            type: 'PolylineGlow',
            uniforms: {
              color: 'blue'
            }
          }
        }"
        :width="10"
      ></vc-polyline>
      <vc-polyline
        :positions="[[90, 40, 10000], [120, 40, 10000]]"
        :material="{
          fabric: {
            type: 'PolylineArrow',
            uniforms: {
              color: 'purple'
            }
          }
        }"
        :width="10"
      ></vc-polyline>
    </vc-collection-polyline>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
  </el-row>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const collectionRef = ref(null)
      const polylines = ref([])
      const instance = getCurrentInstance()
      // methods
      const onClicked = e => {
        console.log(e)
      }
      const unload = () => {
        collectionRef.value.unload()
      }
      const reload = () => {
        collectionRef.value.reload()
      }
      const load = () => {
        collectionRef.value.load()
      }
      const onViewerReady = ({ Cesium, viewer }) => {
        for (var i = 0; i < 500; i++) {
          let polyline = {}
          let positions = []
          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
          polyline.positions = positions
          polyline.material = '#' + Math.random().toString(16).substr(2, 6).toUpperCase()
          polylines.value.push(polyline)
        }
      }

      return {
        unload,
        reload,
        load,
        onClicked,
        onViewerReady,
        collectionRef,
        polylines
      }
    }
  }
</script>
```

:::

### 属性

| 属性名                  | 类型    | 默认值  | 描述                                                                    |
| ----------------------- | ------- | ------- | ----------------------------------------------------------------------- |
| modelMatrix             | Object  |         | `optional` 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。            |
| debugShowBoundingVolume | Boolean | `false` | `optional` 指定是否显示此图元的 BoundingVolume， 仅调试使用。           |
| enableMouseEvent        | Boolean | `true`  | `optional` 指定鼠标事件是否生效。                                       |
| polylines               | Array   | `[]`    | `optional` 指定点集合数组。 数组对象结构与 `vc-polyline` 组件属性相同。 |

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

| 插槽名  | 描述                        | 子组件      |
| ------- | --------------------------- | ----------- |
| default | 用于挂载 vc-polyline 组件。 | vc-polyline |

### VcPolyline

加载线图元，相当于初始化一个 `Cesium.Polyline` 实例。

**注意：** 需要作为 `vc-collection-polyline` 的子组件才能正常加载。

### VcPolyline 属性

| 属性名                   | 类型                  | 默认值 | 描述                                                        |
| ------------------------ | --------------------- | ------ | ----------------------------------------------------------- |
| distanceDisplayCondition | Object\|Array         |        | `optional` 指定 polyline 显示条件随相机距离改变的参数。     |
| id                       | Object                |        | `optional` 指定与 polyline 关联的信息，拾取时返回该属性值。 |
| loop                     | Boolean               | false  | `optional` 指定 polyline 是否首尾相连。                     |
| material                 | Object\|Array\|String |        | `optional` 指定 polyline 材质。                             |
| positions                | Array                 |        | `optional` 指定 polyline 的位置。                           |
| show                     | Boolean               | true   | `optional` 指定 polyline 是否显示。                         |
| width                    | Number                | 1.0    | `optional` 指定 polyline 宽度。                             |
| enableMouseEvent         | Boolean               | `true` | `optional` 指定鼠标事件是否生效。                           |

### VcPolyline 事件

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

### 参考

- 官方文档： **[PolylineCollection](https://cesium.com/docs/cesiumjs-ref-doc/PolylineCollection.html)**、**[Polyline](https://cesium.com/docs/cesiumjs-ref-doc/Polyline.html)**
