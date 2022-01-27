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
    <vc-selection-indicator ref="selectionIndicator" @pickEvt="pickEvt"></vc-selection-indicator>
    <vc-collection-primitive @click="onClicked" :show="show" ref="collectionRef">
      <vc-collection-billboard :billboards="billboards1"></vc-collection-billboard>
      <vc-collection-primitive>
        <vc-collection-billboard :billboards="billboards2"></vc-collection-billboard>
      </vc-collection-primitive>
    </vc-collection-primitive>
    <vc-collection-primitive @click="onClicked" :polygons="polygons">
      <vc-primitive-model
        @click="onClicked"
        url="https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb"
        :modelMatrix="modelMatrix"
        :scale="10000"
        :minimumPixelSize="128"
        :maximumScale="200000"
      >
      </vc-primitive-model>
      <vc-polygon @click="onClicked" :positions="positions" color="yellow"></vc-polygon>
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
      const positions = ref([
        [105, 32],
        [106, 34],
        [107, 30]
      ])
      const polygons = ref([
        {
          positions: [
            [115, 37],
            [115, 32],
            [107, 33],
            [102, 31],
            [102, 35]
          ],
          appearance: {
            type: 'MaterialAppearance',
            options: {
              material: 'green'
            }
          }
        },
        {
          positions: [
            { lng: 108.0, lat: 42.0 },
            { lng: 100.0, lat: 42.0 },
            { lng: 104.0, lat: 40.0 }
          ],
          appearance: {
            type: 'MaterialAppearance',
            options: {
              material: 'red'
            }
          },
          depthFailAppearance: {
            type: 'MaterialAppearance',
            options: {
              material: 'red'
            }
          }
        },
        {
          positions: [90.0, 41.0, 0.0, 85.0, 41.0, 500000.0, 80.0, 41.0, 0.0],
          appearance: {
            type: 'MaterialAppearance',
            options: {
              material: 'blue'
            }
          }
        },
        {
          polygonHierarchy: {
            positions: [
              [99, 30],
              [85, 30],
              [85, 40],
              [99, 40]
            ],
            holes: [
              {
                positions: [
                  [97, 31],
                  [97, 39],
                  [87, 39],
                  [87, 31]
                ],
                holes: [
                  {
                    positions: [
                      [95, 33],
                      [89, 33],
                      [89, 37],
                      [95, 37]
                    ],
                    holes: [
                      {
                        positions: [
                          [93, 34],
                          [91, 34],
                          [91, 36],
                          [93, 36]
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          appearance: {
            type: 'MaterialAppearance',
            options: {
              material: 'yellow'
            }
          }
        }
      ])
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
      const pickEvt = e => {
        console.log(e)
      }
      return {
        pickEvt,
        unload,
        reload,
        load,
        onClicked,
        onViewerReady,
        collectionRef,
        billboards1,
        billboards2,
        modelMatrix,
        show,
        positions,
        polygons
      }
    }
  }
</script>
```

:::

### 属性

| 属性名            | 类型                      | 默认值 | 描述                                                                   |
| ----------------- | ------------------------- | ------ | ---------------------------------------------------------------------- |
| show              | Boolean                   | `true` | `optional` 指定图元集合中的图元是否显示。                              |
| destroyPrimitives | Boolean                   | `true` | `optional` 指定移除图元集合时是否销毁集合中的图元。                    |
| enableMouseEvent  | Boolean                   | `true` | `optional` 指定鼠标事件是否生效。                                      |
| polygons          | Array\<PolygonPrimitive\> | `[]`   | `optional` 指定面图元集合。 数组对象结构与 `vc-polygon` 组件属性相同。 |

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

<!-- prettier-ignore -->
| 插槽名 | 描述 | 子组件 |
| ---- | ----------- | ------- |
| default | 用于挂载相关图元子组件。 | vc-primitive/vc-primitive-classfication/vc-primitive-ground/vc-primitive-ground-polyline/vc-primitive-model/vc-primitive-tileset/vc-primitive-particle/vc-collection-billboard/vc-collection-label/vc-collection-point/vc-collection-polyline/vc-collection-primitive/vc-post-process-stage/vc-post-process-stage-scan/vc-post-process-stage-collection/vc-polygon |

### VcPolygon

加载面图元，相当于初始化一个 `PolygonPrimitive` 实例。

**注意：** 需要作为 `vc-collection-primitive` 的子组件才能正常加载。

### VcPolygon 属性

| 属性名             | 类型                  | 默认值 | 描述                                                         |
| ------------------ | --------------------- | ------ | ------------------------------------------------------------ |
| show               | Boolean               | `true` | `optional` 指定 polygon 是否显示。                           |
| positions          | Array                 |        | `optional` 指定 polygon 的位置属性。                         |
| polygonHierarchy   | Object                |        | `optional` 指定 polygon 的位置属性，岛洞多边形请用这个属性。 |
| id                 | Object                |        | `optional` 指定与 polygon 关联的信息，拾取时返回该属性值。   |
| classificationType | Number                |        | `optional` 指定 polygon 贴地/贴对象模式。                    |
| color              | Object\|Array\|String |        | `optional` 指定 polygon 颜色。                               |
| depthFailColor     | Object\|Array\|String |        | `optional` 指定 polygon 在深度检测无效时的颜色。             |
| enableMouseEvent   | Boolean               | `true` | `optional` 指定鼠标事件是否生效。                            |

### VcPolygon 事件

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

- 官方文档： **[PrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html)**
