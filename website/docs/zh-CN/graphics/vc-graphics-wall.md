## VcGraphicsWall

加载墙实体，相当于初始化一个 `Cesium.WallGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

墙体组件的基础用法。

:::demo 使用 `vc-graphics-wall` 标签在三维球上添加墙体对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity description="Hello Vue Cesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
      <vc-graphics-wall
        ref="wall1"
        :positions="[[-115,44,200000],[-90,44,200000]]"
        material="red"
        :minimumHeights="[100000.0, 100000.0]"
      ></vc-graphics-wall>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-wall
        ref="wall2"
        :positions="[-107,43,100000,-97,43,100000,-97,40,100000,-107,40,100000,-107,43,100000]"
        material="green"
        :outline="true"
      ></vc-graphics-wall>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-wall
        :positions="[[-115,50],[-112,50],[-107.5,50],[-105,50],[-102.5,50],[-100,50],[-97.5,50],[-95,50],[-92.5,50],[-90,50]]"
        :material="[0,0,125,125]"
        :outline="true"
        outlineColor="black"
        :maximumHeights="[100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000]"
        :minimumHeights="[0, 100000,  0, 100000, 0, 100000, 0, 100000, 0, 100000]"
        ref="wall3"
      ></vc-graphics-wall>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const wall1 = ref(null)
      const wall2 = ref(null)
      const wall3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }
      // life cycle
      onMounted(() => {
        Promise.all([wall1.value.creatingPromise, wall2.value.creatingPromise, wall3.value.creatingPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        wall1,
        wall2,
        wall3,
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
| ------ | --- | ----- | ----- | ----- |
| show | boolean | `true` | `optional` 指定 wall 是否显示。 |
| positions | Array | | `optional` 指定 wall 顶部的位置数组。 |
| minimumHeights | Array | | `optional` 指定 wall 底部的高度数组。 |
| maximumHeights | Array | | `optional` 指定 wall 顶部的高度数组。 |
| granularity | number | | `optional` 指定每个纬度和经度之间的角距离。 |
| fill | boolean | `true` | `optional` 指定 wall 是否填充材质。 |
| material | VcMaterial\|string\|Array | `'white'` | `optional` 指定 wall 材质。 |
| outline | boolean | `false` | `optional` 指定 wall 是否绘制轮廓线。 |
| outlineColor | Object\|string\|Array | `'black'` | `optional` 指定 wall 轮廓线颜色。 |
| outlineWidth | number | `1.0` | `optional` 指定 wall 轮廓线宽度。 |
| shadows | number | `0` | `optional` 指定 wall 是否投射或接收阴影。**DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` 指定 wall 随相机距离改变的显示条件。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[WallGraphics](https://cesium.com/docs/cesiumjs-ref-doc/WallGraphics.html)**
