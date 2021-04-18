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
        Promise.all([plane1.value.createPromise, plane2.value.createPromise, plane3.value.createPromise]).then(instances => {
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

| 属性名                   | 类型                  | 默认值    | 描述                                             |
| ------------------------ | --------------------- | --------- | ------------------------------------------------ |
| show                     | Boolean               | `true`    | `optional` 指定 plane 是否显示。                 |
| plane                    | Object                |           | `optional` 指定 plane 的法线和距离。             |
| dimensions               | Object                |           | `optional` 指定 plane 的宽和高。                 |
| fill                     | Boolean               | `true`    | `optional` 指定 plane 是否填充材质。             |
| material                 | Object\|String\|Array | `'WHITE'` | `optional` 指定 plane 的材质。                   |
| outline                  | Boolean               | `false`   | `optional` 指定 plane 是否绘制轮廓线。           |
| outlineColor             | Object\|String\|Array | `'BLACK'` | `optional` 指定 plane 轮廓线颜色。               |
| outlineWidth             | Number                | `1.0`     | `optional` 指定 plane 轮廓线宽度。               |
| shadows                  | Number                | `0`       | `optional` 指定 plane 是否投射或接收阴影。       |
| distanceDisplayCondition | Object                |           | `optional` 指定 plane 随相机距离改变的显示条件。 |

### 事件

| 事件名            | 参数                               | 描述                                     |
| ----------------- | ---------------------------------- | ---------------------------------------- |
| beforeLoad        | Vue Instance                       | 对象加载前触发。                         |
| ready             | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。                     |
| destroyed         | Vue Instance                       | 对象销毁时触发。                         |
| definitionChanged |                                    | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[PlaneGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PlaneGraphics.html)**
