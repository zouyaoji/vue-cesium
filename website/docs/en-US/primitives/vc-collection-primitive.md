## VcCollectionPrimitive

加载通用图元集合，相当于初始化一个 `Cesium.PrimitiveCollection` 实例。

:::tip
`vc-viewer` 初始化得到的 `Viewer` 实例自带的一个成员属性 `Scene.primitives(PrimitiveCollection)`。它可作为一切图元的父组件，如有需要也可以作为子集嵌套一层或多层。
:::

### 基础用法

通用图元集合组件的基础用法。

:::demo 使用 `vc-collection-primitive` 标签在三维球上添加布告板图元集合和模型图元。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-collection-primitive @click="onClicked" :show="show" ref="collectionRef">
      <vc-collection-billboard :billboards="billboards1"></vc-collection-billboard>
      <vc-collection-primitive>
        <vc-collection-billboard :billboards="billboards2"></vc-collection-billboard>
      </vc-collection-primitive>
    </vc-collection-primitive>
    <vc-collection-primitive>
      <vc-primitive-model
        @click="onClicked"
        url="./SampleData/models/CesiumAir/Cesium_Air.glb"
        :modelMatrix="modelMatrix"
        :scale="10000"
        :minimumPixelSize="128"
        :maximumScale="200000"
      >
      </vc-primitive-model>
    </vc-collection-primitive>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
    <el-switch v-model="show" active-color="#13ce66" inactive-text="显示/隐藏"> </el-switch>
  </el-row>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const collectionRef = ref(null)
      const billboards1 = ref([])
      const billboards2 = ref([])
      const modelMatrix = ref(null)
      const show = ref(true)
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
        for (var i = 0; i < 100; i++) {
          let billboard1 = {}
          billboard1.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
          billboard1.scale = 0.1
          billboards1.value.push(billboard1)

          let billboard2 = {}
          billboard2.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
          billboard2.scale = 0.15
          billboards2.value.push(billboard2)
        }

        modelMatrix.value = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
      }

      return {
        unload,
        reload,
        load,
        onClicked,
        onViewerReady,
        collectionRef,
        billboards1,
        billboards2,
        modelMatrix,
        show
      }
    }
  }
</script>
```

:::

### 属性

| 属性名            | 类型    | 默认值 | 描述                                                |
| ----------------- | ------- | ------ | --------------------------------------------------- |
| show              | Boolean | `true` | `optional` 指定图元集合中的图元是否显示。           |
| destroyPrimitives | Boolean | `true` | `optional` 指定移除图元集合时是否销毁集合中的图元。 |
| enableMouseEvent  | Boolean | `true` | `optional` 指定鼠标事件是否生效。                   |

### 事件

| 事件名     | 参数                                                       | 描述                       |
| ---------- | ---------------------------------------------------------- | -------------------------- |
| beforeLoad | Vue Instance                                               | 对象加载前触发。           |
| ready      | {Cesium, viewer, cesiumObject, vm}                         | 对象加载成功时触发。       |
| destroyed  | Vue Instance                                               | 对象销毁时触发。           |
| mousedown  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上按下时触发。 |
| mouseup    | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上弹起时触发。 |
| click      | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元时触发。     |
| clickout   | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元外部时触。   |
| dblclick   | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标左键双击该图元时触发。 |
| mousemove  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上移动时触发。 |
| mouseover  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移动到该图元时触发。   |
| mouseout   | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移出该图元时触发。     |

### 参考

- 官方文档： **[PrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html)**
