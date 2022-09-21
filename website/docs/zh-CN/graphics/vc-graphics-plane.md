## VcGraphicsPlane

加载平面实体，相当于初始化一个 `Cesium.PlaneGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

平面实体组件的基础用法。

:::demo 使用 `vc-graphics-plane` 标签在三维球上添加平面实体对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity :position="[114, 40, 300000]" description="Hello Vue Cesium">
      <vc-graphics-plane
        ref="plane1"
        :plane="{normal: { x: 1, y: 0, z: 0 }, distance: 0.0}"
        :dimensions="[400000, 300000]"
        material="blue"
      ></vc-graphics-plane>
    </vc-entity>
    <vc-entity :position="[107,40, 300000]" description="Hello Vue Cesium">
      <vc-graphics-plane
        ref="plane2"
        :plane="[{ x: 0, y: 1, z: 0 }, 0]"
        :dimensions="[400000, 300000]"
        :material="[255, 0, 0, 125]"
        :outline="true"
        outlineColor="black"
      ></vc-graphics-plane>
    </vc-entity>
    <vc-entity :position="[100, 40, 300000]" description="Hello Vue Cesium">
      <vc-graphics-plane
        ref="plane3"
        :plane="{ normal: { x: 0, y: 0, z: 1 }, distance: 0.0 }"
        :dimensions="{ x: 400000.0, y: 300000.0 }"
        :fill="false"
        :outline="true"
        outlineColor="yellow"
      ></vc-graphics-plane>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const plane1 = ref(null)
      const plane2 = ref(null)
      const plane3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }
      // life cycle
      onMounted(() => {
        Promise.all([plane1.value.creatingPromise, plane2.value.creatingPromise, plane3.value.creatingPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        plane1,
        plane2,
        plane3,
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
| --- | -------- | ------ | -------- | --- |
| show | boolean | `true` | `optional` 指定 plane 是否显示。 |
| plane | VcPlane\|Array | | `optional` 指定 plane 的法线和距离。 |
| dimensions   | VcPosition\|Array | | `optional` 指定 plane 的宽和高。 |
| fill | boolean | `true` | `optional` 指定 plane 是否填充材质。 |
| material | VcMaterial\|string\|Array | `'WHITE'` | `optional` 指定 plane 的材质。 |
| outline | boolean | `false` | `optional` 指定 plane 是否绘制轮廓线。 |
| outlineColor | VcColor\|string\|Array | `'BLACK'` | `optional` 指定 plane 轮廓线颜色。 |
| outlineWidth | number | `1.0` | `optional` 指定 plane 轮廓线宽度。 |
| shadows | number | `0` | `optional` 指定 plane 是否投射或接收阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3**|0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` 指定 plane 随相机距离改变的显示条件。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[PlaneGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PlaneGraphics.html)**
