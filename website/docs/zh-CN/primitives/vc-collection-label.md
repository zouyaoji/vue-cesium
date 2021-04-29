## VcCollectionLabel

加载标签图元集合，相当于初始化一个 `Cesium.LabelCollection` 实例。渲染海量文本标签时建议用 `labels` 属性表达。

### 基础用法

文本标签图元集合组件的基础用法。

:::demo 使用 `vc-collection-label` 标签在三维球上添加标签图元集合。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-collection-label @click="onClicked" ref="collectionRef" :labels="labels" @mouseout="onMouseout" @mouseover="onMouseover">
      <vc-label
        v-for="(polyline, index) of polylines"
        :position="polyline.positions[polyline.positions.length-1]"
        :key="'label'+index"
        :text="'面积'+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
        showBackground
        :horizontalOrigin="1"
      ></vc-label>
    </vc-collection-label>
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
      const labels = ref([])
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
        for (var i = 0; i < 100; i++) {
          let label = {}
          label.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          label.text = i.toString()
          labels.value.push(label)
        }
      }
      const onMouseover = e => {
        console.log(e)
        if (e.cesiumObject instanceof Cesium.Label) {
          this.scale = 1.5 // or e.cesiumObject.scale = 1.5
          e.pickedFeature.primitive.scale = 1.5
        } else if (e.cesiumObject instanceof Cesium.LabelCollection) {
          e.pickedFeature.primitive.scale = 1.5
        }
      }

      const onMouseout = e => {
        console.log(e)
        if (e.cesiumObject instanceof Cesium.Label) {
          this.scale = 1 // or e.cesiumObject.scale = 1
        } else if (e.cesiumObject instanceof Cesium.LabelCollection) {
          e.pickedFeature.primitive.scale = 1
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
        collectionRef,
        labels,
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
| modelMatrix             | Object  |         | `optional` 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。                           |
| debugShowBoundingVolume | Boolean | `false` | `optional` 指定是否显示此图元的 BoundingVolume， 仅调试使用。                          |
| blendOption             | Number  | `2`     | `optional` 指定颜色混合选项。 **OPAQUE: 0, TRANSLUCENT: 1, OPAQUE_AND_TRANSLUCENT: 2** | 0/1/2  |
| scene                   | Object  |         | `optional` 指定场景参数，使用深度检测或者高度参考时必须传该属性。                      |
| show                    | Boolean | `true`  | `optional` 指定该图元集合是否显示。                                                    |
| enableMouseEvent        | Boolean | `true`  | `optional` 指定鼠标事件是否生效。                                                      |
| labels                  | Array   | `[]`    | `optional` 指定标签集合数组。 数组对象结构与 `vc-label` 组件属性相同。                 |

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

### VcLabel

加载文本标签图元，相当于初始化一个 `Cesium.Label` 实例。

**注意：** 需要作为 `vc-collection-label` 的子组件才能正常加载。

### VcLabel 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ------------------------ | ------- | ------------------ | ------------------------------------------- |---|
| backgroundColor  | Object\|Array\|String | { x: 0.165, y: 0.165, z: 0.165, w: 0.8 } | `optional` 指定 label 背景颜色。 |
| backgroundPadding  | Object\|Array | | `optional` 指定 label 背景x、y方向偏移量。|
| disableDepthTestDistance | Number | | `optional` 指定 label 的深度检测距离。 |
| distanceDisplayCondition | Object\|Array | | `optional` 指定 label 显示条件随相机距离改变的参数。 |
| eyeOffset | Object\Array | `{x: 0, y: 0, z: 0}` | `optional` 指定 label 视角偏移量。|
| fillColor | Object\|String\|Array | `white` | `optional` 指定 label 填充颜色。 |
| font | String | `'30px sans-serif'` | `optional` 指定 label CSS 字体。 |
| heightReference | Number | `0` | `optional` 指定 label 高度模式。**NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| horizontalOrigin | Number | `0` | `optional` 指定 label 水平对齐方式。**CENTER: 0, LEFT: 1, RIGHT: -1** |0/1/-1|
| id | \* | | `optional` 指定与 label 关联的信息，拾取时返回该属性值。 |
| outlineColor | Object\|Array\|String | `'black'` | `optional` 指定 label 的轮廓颜色。 |
| outlineWidth | Number | `0` | `optional` 指定 label 的轮廓宽度。 |
| pixelOffset | Object\|Array | `{x: 0, y: 0}` | `optional` 指定 label 像素偏移量。 |
| pixelOffsetScaleByDistance | Object\|Array | | `optional` 指定 label 像素偏移量随相机距离改变的参数。|
| position | Object | | `optional` 指定 label 的位置。|
| scale | Number | `1.0` | `optional` 指定 label 缩放比例。 |
| scaleByDistance | Object\|Array | | `optional` 指定 label 的缩放比例随相机距离改变的参数。|
| show | Boolean | `true` | `optional` 指定 label 是否显示。 |
| showBackground | Boolean | `false` | `optional` 指定 label 是否显示背景。 |
| labelStyle | Number | `0` | `optional` 指定 label 绘制风格。**FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2** |0/1/2|
| text | String | | `optional` 指定 label 文字，支持'\n'换行符。 |
| totalScale  | Number | `1.0` | `optional` 获取 label 的总比例，该比例是标签的比例乘以所计算的所需字体的相对大小与生成的字形大小的比例。 |
| translucencyByDistance | Object\|Array | | `optional` 指定 label 透明度随相机距离改变的参数。|
| verticalOrigin | Number | `0` | `optional` 指定 label 垂直对齐方式。**CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1** |0/1/2/-1|
| enableMouseEvent | Boolean | `true` | `optional` 指定鼠标事件是否生效。 |

### VcLabel 事件

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

- 官方文档： **[LabelCollection](https://cesium.com/docs/cesiumjs-ref-doc/LabelCollection.html)**、**[Label](https://cesium.com/docs/cesiumjs-ref-doc/Label.html)**
