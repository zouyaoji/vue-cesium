## VcGraphicsBox

加载立方盒实体，相当于初始化一个 `Cesium.BoxGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

立方盒组件的基础用法。

:::demo 使用 `vc-graphics-box` 标签在三维球上添加实体立方盒。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- 通过属性加载 和 子组件分别加载 -->
    <vc-entity
      ref="entity1"
      :position="options.position1"
      :description="options.description"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <vc-graphics-box :dimensions="options.dimensions1" :material="options.material1"></vc-graphics-box>
    </vc-entity>
    <vc-entity ref="entity2" :position="options.position2" :description="options.description">
      <vc-graphics-box
        :dimensions="options.dimensions2"
        :material="options.material2"
        :outline-color="options.outlineColor2"
        :outline="true"
      ></vc-graphics-box>
    </vc-entity>
    <vc-entity ref="entity3" :position="options.position3" :description="options.description">
      <vc-graphics-box :dimensions="options.dimensions3" :outline-color="options.outlineColor3" :fill="false" :outline="true"></vc-graphics-box>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const options = {
        description: 'Hello VueCesium',

        position1: { lng: 105.0, lat: 40.0, height: 300000.0 },
        dimensions1: { x: 400000.0, y: 300000.0, z: 500000.0 },
        material1: 'BLUE',

        position2: { lng: 110.0, lat: 40.0, height: 300000.0 },
        dimensions2: { x: 400000.0, y: 300000.0, z: 500000.0 },
        material2: 'RED',
        outlineColor2: 'BLACK',

        position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
        dimensions3: { x: 400000.0, y: 300000.0, z: 500000.0 },
        outlineColor3: 'YELLOW'
      }
      const entity1 = ref(null)
      const entity2 = ref(null)
      const entity3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      // life cycle
      onMounted(() => {
        Promise.all([entity1.value.creatingPromise, entity2.value.creatingPromise, entity3.value.creatingPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        entity1,
        entity2,
        entity3,
        options
      }
    }
  }
</script>
```

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | ---- | ------ | ------ | --- |
| show | boolean | `true` | `optional` 指定 box 是否可见。 |
| dimensions | VcPosition | | `optional` 指定 box 的长宽高。 |
| heightReference | number \| Cesium.HeightReference \| VcCallbackPropertyFunction\<number\> | | `optional` 指定 box 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| fill | boolean \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<boolean\> | `true` | `optional` 指定 box 是否按提供的材质填充。 |
| material | VcMaterial | `'WHITE'` | `optional` 指定 box 材质。 |
| outline | boolean \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<boolean\> | `false` | `optional` 指定是否绘制 box 轮廓线。 |
| outlineColor | VcColor | `'BLACK'` | `optional` 指定是否绘制 box 轮廓线的颜色。 |
| outlineWidth | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | `1.0` | `optional` 指定绘制 box 轮廓线的宽度。 |
| shadows | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | `0` | `optional` 指定这些是否投射或接收来自每个光源的阴影。**DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition | | `optional` 指定 box 显示条件。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[BoxGraphics](https://cesium.com/docs/cesiumjs-ref-doc/BoxGraphics.html)**
