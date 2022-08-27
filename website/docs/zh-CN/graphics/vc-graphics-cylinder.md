## VcGraphicsCylinder

加载圆柱、圆锥、圆台实体，相当于初始化一个 `Cesium.CylinderGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

圆柱(锥)体组件的基础用法。

:::demo 使用 `vc-graphics-cylinder` 标签在三维球上添加圆柱和圆锥体。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity
      ref="entity1"
      :position="[105, 40, 200000]"
      description="Hello Vue Cesium"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <vc-graphics-cylinder
        :length="400000.0"
        :topRadius="200000.0"
        :bottomRadius="200000.0"
        :material="[0,128,0,125]"
        :outline="true"
        outlineColor="#006400"
      ></vc-graphics-cylinder>
    </vc-entity>
    <vc-entity ref="entity2" :position="[110, 40, 200000]" description="Hello Vue Cesium">
      <vc-graphics-cylinder :length="400000.0" :topRadius="0.0" :bottomRadius="200000.0" material="RED"></vc-graphics-cylinder>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const entity1 = ref(null)
      const entity2 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }
      // life cycle
      onMounted(() => {
        Promise.all([entity1.value.creatingPromise, entity2.value.creatingPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        entity1,
        entity2,
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
| ---- | ----- | ----- | ----- | ----  |
| show | boolean | `true` | `optional` 指定 cylinder 是否显示。 |
| length | Array | | `optional` 指定 cylinder 的长。 |
| topRadius | number | | `optional` 指定 cylinder 的顶部半径。 |
| bottomRadius | number | | `optional` 指定 cylinder 的底部半径。 |
| heightReference | number | | `optional` 指定 cylinder 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2**|0/1/2|
| fill | boolean | `true` | `optional` 指定 cylinder 是否填充材质。 |
| material | Object\|string\|Array | `'WHITE'` | `optional` 指定 cylinder 的材质。 |
| outline | boolean | `false` | `optional` 指定 cylinder 是否绘制轮廓线。 |
| outlineColor | Object\|string\|Array | `'BLACK'` | `optional` 指定 cylinder 轮廓线颜色。 |
| outlineWidth | number | `1.0` | `optional` 指定 cylinder 轮廓线宽度。 |
| numberOfVerticalLines | number | `16` | `optional` 指定沿轮廓线周长绘制的垂直线数。 |
| slices | number | `128` | `optional` 指定 cylinder 边节点数量。 |
| shadows | number | `0` | `optional` 指定 cylinder 是否投射或接收每个点光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | Object\|Array | | `optional` 指定 cylinder 随相机距离显示条件。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[CylinderGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html)**
