## VcCollectionPoint

加载点图元集合，相当于初始化一个 `Cesium.PointPrimitiveCollection` 实例。渲染海量点时建议用 `points` 属性表达。

### 基础用法

点图元集合组件的基础用法。

:::demo 使用 `vc-collection-point` 标签在三维球上添加点图元集合。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-collection-point @click="onClicked" ref="collectionRef" :points="points">
      <!-- <template v-for="(polyline, index) of polylines">
        <template v-for="(position, subIndex) of polyline.positions">
          <vc-point :position="position" :color="[255, 229, 0]" :pixel-size="32"></vc-point>
        </template>
      </template> -->
    </vc-collection-point>
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
      const points = ref([])
      const instance = getCurrentInstance()
      const polylines = [
        {
          positions: [
            { lng: 105.24884033203125, lat: 25.313117980957031, height: 1183.3186645507812 },
            { lng: 108.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }
          ],
          area: 100000.3
        },
        {
          positions: [
            { lng: 109.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
            { lng: 112.24906555725632, lat: 35.31316741393502, height: 1183.6849884241819 }
          ],
          area: 8000.658
        },
        {
          positions: [
            { lng: 113.24884033203125, lat: 35.313655853271484, height: 1184.2783203125 },
            { lng: 116.24906555725632, lat: 40.313430628046348, height: 1184.1093236654997 }
          ],
          area: 200000.55
        }
      ]
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
        for (var i = 0; i < 5; i++) {
          let point = {}
          point.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          point.color = 'rgb(255,229,0)'
          point.pixelSize = 8
          points.value.push(point)
        }
        window.points = points
      }

      return {
        unload,
        reload,
        load,
        onClicked,
        onViewerReady,
        collectionRef,
        points,
        polylines
      }
    }
  }
</script>
```

:::

### 属性

| 属性名                  | 类型    | 默认值  | 描述                                                                                   | 可选值 |
| ----------------------- | ------- | ------- | -------------------------------------------------------------------------------------- | ------ |
| modelMatrix | Cesium.Matrix4  |         | `optional` 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。                           |
| debugShowBoundingVolume | boolean | `false` | `optional` 指定是否显示此图元的 BoundingVolume， 仅调试使用。                          |
| blendOption             | number  | `2`     | `optional` 指定颜色混合选项。 **OPAQUE: 0, TRANSLUCENT: 1, OPAQUE_AND_TRANSLUCENT: 2** | 0/1/2  |
| show                    | boolean | `true`  | `optional` 指定该图元集合是否显示。                                                    |
| enableMouseEvent        | boolean | `true`  | `optional` 指定鼠标事件是否生效。                                                      |
| points                  | Array   | `[]`    | `optional` 指定点集合数组。 数组对象结构与 `vc-point` 组件属性相同。                   |

### 事件

| 事件名     | 参数                                    | 描述                       |
| ---------- | --------------------------------------- | -------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。           |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。       |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。           |
| mousedown  | (evt: VcPickEvent)                      | 鼠标在该图元上按下时触发。 |
| mouseup    | (evt: VcPickEvent)                      | 鼠标在该图元上弹起时触发。 |
| click      | (evt: VcPickEvent)                      | 鼠标单击该图元时触发。     |
| clickout   | (evt: VcPickEvent)                      | 鼠标单击该图元外部时触发。 |
| dblclick   | (evt: VcPickEvent)                      | 鼠标左键双击该图元时触发。 |
| mousemove  | (evt: VcPickEvent)                      | 鼠标在该图元上移动时触发。 |
| mouseover  | (evt: VcPickEvent)                      | 鼠标移动到该图元时触发。   |
| mouseout   | (evt: VcPickEvent)                      | 鼠标移出该图元时触发。     |

### 插槽

| 插槽名  | 描述                     | 子组件   |
| ------- | ------------------------ | -------- |
| default | 用于挂载 vc-point 组件。 | vc-point |

### VcPoint

加载点图元，相当于初始化一个 `Cesium.PointPrimitive` 实例。

**注意：** 需要作为 `vc-collection-point` 的子组件才能正常加载。

### VcPoint 属性

| 属性名                   | 类型                      | 默认值    | 描述                                                     |
| ------------------------ | ------------------------- | --------- | -------------------------------------------------------- |
| color                    | Object\|Array\|string     | `'white'` | `optional` 指定 point 的颜色。                           |
| disableDepthTestDistance | number                    |           | `optional` 指定 point 深度检测距离。                     |
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array             |           | `optional` 指定 point 显示条件随相机距离改变的参数。     |
| id                       | \*                        |           | `optional` 指定与 point 关联的信息，拾取时返回该属性值。 |
| outlineColor | VcColor \| Array \| string | `'black'` | `optional` 指定 point 的轮廓颜色。                       |
| outlineWidth             | number                    | `0`       | `optional` 指定 point 的轮廓宽度。                       |
| pixelSize                | number                    | `1`       | `optional` 指定 point 的像素大小。                       |
| position       | VcPosition\|Array             |           | `optional` 指定 point 的位置。                           |
| scaleByDistance          | Object\|Array             |           | `optional` 指定 point 缩放比例随相机距离改变的参数。     |
| show                     | boolean                   | `true`    | `optional` 指定 point 是否显示。                         |
| translucencyByDistance   | Object\|Array             |           | `optional` 指定 point 透明度随相机距离改变的参数。       |
| enableMouseEvent         | boolean                   | `true`    | `optional` 指定鼠标事件是否生效。                        |

### VcPoint 事件

| 事件名     | 参数                                    | 描述                       |
| ---------- | --------------------------------------- | -------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。           |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。       |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。           |
| mousedown  | (evt: VcPickEvent)                      | 鼠标在该图元上按下时触发。 |
| mouseup    | (evt: VcPickEvent)                      | 鼠标在该图元上弹起时触发。 |
| click      | (evt: VcPickEvent)                      | 鼠标单击该图元时触发。     |
| clickout   | (evt: VcPickEvent)                      | 鼠标单击该图元外部时触发。 |
| dblclick   | (evt: VcPickEvent)                      | 鼠标左键双击该图元时触发。 |
| mousemove  | (evt: VcPickEvent)                      | 鼠标在该图元上移动时触发。 |
| mouseover  | (evt: VcPickEvent)                      | 鼠标移动到该图元时触发。   |
| mouseout   | (evt: VcPickEvent)                      | 鼠标移出该图元时触发。     |

### 参考

- 官方文档： **[PointPrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitiveCollection.html)**、**[PointPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitive.html)**
