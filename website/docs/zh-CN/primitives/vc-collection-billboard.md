## VcCollectionBillboard

加载布告板图元集合，相当于初始化一个 `Cesium.BillboardCollection` 实例。渲染海量布告板时建议用 `billboards` 属性表达。

### 基础用法

布告板图元集合组件的基础用法。

:::demo 使用 `vc-collection-billboard` 标签在三维球上添加布告板图元集合对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-collection-billboard ref="billboardCollectionRef" @mouseout="onMouseout" @mouseover="onMouseover" :billboards="billboards">
      <vc-billboard
        :position="[108, 35, 10000]"
        :distanceDisplayCondition="[0, 20000000]"
        :scale="0.25"
        image="https://zouyaoji.top/vue-cesium/favicon.png"
      ></vc-billboard>
    </vc-collection-billboard>
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
      const billboardCollectionRef = ref(null)
      const billboards = ref([])
      const instance = getCurrentInstance()
      // methods
      const onClicked = e => {
        console.log(e)
      }
      const unload = () => {
        billboardCollectionRef.value.unload()
      }
      const reload = () => {
        billboardCollectionRef.value.reload()
      }
      const load = () => {
        billboardCollectionRef.value.load()
      }
      const onViewerReady = ({ Cesium, viewer }) => {
        for (var i = 0; i < 50; i++) {
          const billboard = {}
          billboard.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard.image = Cesium.writeTextToCanvas(i + 1, {
            font: '100px sans-serif',
            strokeWidth: 2
          }).toDataURL()
          billboard.scale = 0.25
          billboard.id = i
          billboards.value.push(billboard)
        }
      }

      const onMouseover = e => {
        console.log(e)
        if (e.cesiumObject instanceof Cesium.Billboard) {
          this.scale = 0.5 // or e.cesiumObject.scale = 0.5
          e.pickedFeature.primitive.scale = 0.5
        } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
          e.pickedFeature.primitive.scale = 0.5
        }
      }

      const onMouseout = e => {
        console.log(e)
        if (e.cesiumObject instanceof Cesium.Billboard) {
          this.scale = 0.25 // or e.cesiumObject.scale = 0.25
        } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
          e.pickedFeature.primitive.scale = 0.25
        }
      }

      return {
        unload,
        reload,
        load,
        onClicked,
        onMouseout,
        onMouseover,
        onViewerReady,
        billboardCollectionRef,
        billboards
      }
    }
  }
</script>
```

:::

### 属性

| 属性名                  | 类型    | 默认值  | 描述                                                                                   | 可选值 |
| ----------------------- | ------- | ------- | -------------------------------------------------------------------------------------- | ------ |
| modelMatrix             | Object  |         | `optional` 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。                           |
| debugShowBoundingVolume | Boolean | `false` | `optional` 指定是否显示此图元的 BoundingVolume， 仅调试使用。                          |
| blendOption             | Number  | `2`     | `optional` 指定颜色混合选项。 **OPAQUE: 0, TRANSLUCENT: 1, OPAQUE_AND_TRANSLUCENT: 2** | 0/1/2  |
| scene                   | Object  |         | `optional` 指定场景参数，使用深度检测或者高度参考时必须传该属性。                      |
| show                    | Boolean | `true`  | `optional` 指定该图元集合是否显示。                                                    |
| billboards              | Array   | `[]`    | `optional` 指定布告板集合数组。 数组对象结构与 `vc-billboard` 组件属性相同。           |
| enableMouseEvent        | Boolean | `true`  | `optional` 指定鼠标事件是否生效。                                                      |

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

| 插槽名  | 描述                         | 子组件       |
| ------- | ---------------------------- | ------------ |
| default | 用于挂载 vc-billboard 组件。 | vc-billboard |

### VcBillboard

加载布告板图元，相当于初始化一个 `Cesium.Billboard` 实例。

**注意：** 需要作为 `vc-collection-billboard` 的子组件才能正常加载。

### VcBillboard 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ------------------------ | ------- | ------------------ | ------------------------------------------- |---|
| alignedAxis | Object\|Array | `{x: 0, y: 0, z: 0}` | `optional` 指定 billboard 按单位矢量轴旋转参数。 |
| color | Object\|String\|Array | `'white'` | `optional` 指定 billboard 图片的颜色。 |
| disableDepthTestDistance | Number | | `optional` 指定 billboard 的深度检测距离。 |
| distanceDisplayCondition | Object\|Array | | `optional` 指定 billboard 显示条件随相机距离改变的参数。 |
| eyeOffset | Object\|Array | `{x: 0, y: 0, z: 0}` | `optional` 指定 billboard 视角偏移量。|
| height | Number | | `optional` 指定 billboard 的高度（像素）。 |
| heightReference | Number | `0` | `optional` 指定 billboard 高度模式。**NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| horizontalOrigin | Number | `0` | `optional` 指定 billboard 水平对齐方式。**CENTER: 0, LEFT: 1, RIGHT: -1** |0/1/2|
| id | \* | | `optional` 指定与 billboard 关联的信息，拾取时返回该属性值。 |
| image | String\|Object | | `optional` 指定 billboard 加载的的 Image、 URI 或者 Canvas。 |
| pixelOffset | Object\|Array | `{x: 0, y: 0}` | `optional` 指定 billboard 像素偏移量。 |
| pixelOffsetScaleByDistance | Object\|Array | | `optional` 指定 billboard 像素偏移量随相机距离改变的参数。|
| position | Object\|Array | | `optional` 指定 billboard 的位置。|
| rotation | Number | `0` | `optional` 指定 billboard 沿 x 轴方向旋转的角度。 |
| scale | Number | `1.0` | `optional` 指定 billboard 缩放比例。 |
| scaleByDistance | Object\|Array | | `optional` 指定 billboard 随缩比例随相机距离改变的参数。|
| show | Boolean | `true` | `optional` 指定 billboard 是否显示。 |
| sizeInMeters | Boolean | | `optional` 指定 billboard 的单位是否是米。 |
| translucencyByDistance | Object\|Array | | `optional` 指定 billboard 透明度随相机距离改变参数。|
| verticalOrigin | Number | `0` | `optional` 指定 billboard 垂直对齐方式。**CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1** |0/1/2/-1|
| width | Number | | `optional` 指定 billboard 的宽度（像素）。 |
| enableMouseEvent | Boolean | `true` | `optional` 指定鼠标事件是否生效。 |

### VcBillboard 事件

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

- 官方文档： **[BillboardCollection](https://cesium.com/docs/cesiumjs-ref-doc/BillboardCollection.html)**、**[Billboard](https://cesium.com/docs/cesiumjs-ref-doc/Billboard.html)**
