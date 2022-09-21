## VcGraphicsPoint

加载点实体，相当于初始化一个 `Cesium.PointGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

点实体组件的基础用法。

:::demo 使用 `vc-graphics-point` 标签在三维球上添加点实体对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity :position="[-75.59777, 40.03883]" description="Hello Vue Cesium">
      <vc-graphics-point ref="point1" color="red" :pixel-size="8"></vc-graphics-point>
    </vc-entity>
    <vc-entity :position="[-80.5, 35.14]" description="Hello Vue Cesium">
      <vc-graphics-point ref="point2" color="blue" :pixel-size="16"></vc-graphics-point>
    </vc-entity>
    <vc-entity :position="[-80.12, 25.46]" description="Hello Vue Cesium">
      <vc-graphics-point ref="point3" color="lime" :pixel-size="32"></vc-graphics-point>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const point1 = ref(null)
      const point2 = ref(null)
      const point3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }
      // life cycle
      onMounted(() => {
        Promise.all([point1.value.creatingPromise, point2.value.creatingPromise, point3.value.creatingPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        point1,
        point2,
        point3,
        onViewerReady
      }
    }
  }
</script>
```

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ------- | --- | ----- | ------ | --- |
| show | boolean | `true` | `optional` 指定 point 是否显示。 |
| pixelSize | number | `1` | `optional` 指定 point 像素大小。 |
| heightReference | number | `0` | `optional` 指定 point 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2**|0/1/2|
| color | VcColor\|string\|Array | `'white'` | `optional` 指定 point 颜色。 |
| outlineColor | VcColor\|string\|Array | `'black'` | `optional` 指定 point 轮廓颜色。 |
| outlineWidth | number | `0` | `optional` 指定 point 轮廓像素宽度。 |
| scaleByDistance | VcNearFarScalar\|Array | | `optional` 指定 point 随相机距离改变的缩放参数。 |
| translucencyByDistance | VcNearFarScalar\|Array | | `optional` 指定 point 随相机距离改变的透明度参数。 |
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` 指定 point 随相机距离显隐参数。 |
| disableDepthTestDistance | number | | `optional` 指定 point 深度测试参数。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[PointGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PointGraphics.html)**
