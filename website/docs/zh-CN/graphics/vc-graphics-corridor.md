## VcGraphicsCorridor

加载走廊实体，相当于初始化一个 `Cesium.CorridorGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

走廊实体组件的基础用法。

:::demo 使用 `vc-graphics-corridor` 标签在三维球上添加走廊实体。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity
      ref="entity1"
      :name="options.name1"
      :description="options.description"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <vc-graphics-corridor :positions="options.positions1" :material="options.material1" :width="200000.0"></vc-graphics-corridor>
    </vc-entity>
    <vc-entity ref="entity2" :name="options.name2" :description="options.description">
      <vc-graphics-corridor
        :positions="options.positions2"
        :height="100000.0"
        :width="200000.0"
        :cornerType="0"
        material="GREEN"
        :outline="true"
      ></vc-graphics-corridor>
    </vc-entity>
    <vc-entity ref="entity3" :name="options.name3" :description="options.description">
      <vc-graphics-corridor
        :positions="options.positions3"
        :material="options.material3"
        outlineColor="WHITE"
        :outline="true"
        :height="200000.0"
        :extrudedHeight="100000.0"
        :width="200000.0"
        :cornerType="options.cornerType3"
      ></vc-graphics-corridor>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted, reactive } from 'vue'
  export default {
    setup() {
      // state
      const options = reactive({
        description: 'Hello Vue Cesium',

        corridor1: {},
        name1: 'Red corridor on surface with rounded corners',
        positions1: [
          { lng: 100.0, lat: 40.0 },
          { lng: 105.0, lat: 40.0 },
          { lng: 105.0, lat: 35.0 }
        ],
        material1: {},

        corridor2: {},
        name2: 'Green corridor at height with mitered corners and outline',
        positions2: [
          { lng: 90.0, lat: 40.0 },
          { lng: 95.0, lat: 40.0 },
          { lng: 95.0, lat: 35.0 }
        ],
        cornerType2: 0,

        corridor3: {},
        name3: 'Blue extruded corridor with beveled corners and outline',
        positions3: [
          { lng: 80.0, lat: 40.0 },
          { lng: 85.0, lat: 40.0 },
          { lng: 85.0, lat: 35.0 }
        ],
        cornerType3: 0,
        material3: {}
      })
      const entity1 = ref(null)
      const entity2 = ref(null)
      const entity3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        const { Cesium, viewer } = cesiumInstance
        options.material1 = Cesium.Color.RED.withAlpha(0.5)

        options.cornerType2 = Cesium.CornerType.MITERED

        options.cornerType3 = Cesium.CornerType.BEVELED
        options.material3 = Cesium.Color.BLUE.withAlpha(0.5)
      }
      // life cycle
      onMounted(() => {
        Promise.all([entity1.value.createPromise, entity2.value.createPromise, entity3.value.createPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        entity1,
        entity2,
        entity3,
        options,
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
| ------ | ----| ----- | ---- | ------ |
| show | Boolean | `true` | `optional` 指定 corridor 是否显示。 |
| positions | Array | | `optional` 指定描述 corridor 位置的经纬度(高度)数组。 |
| width | Number | | `optional` 指定 corridor 边之间的距离。 |
| height | Number | | `optional` 指定 corridor 高度。 |
| heightReference | Number | | `optional` 指定 corridor 高度模式。**NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| extrudedHeight | Number | | `optional` 指定 corridor 拉伸高度。 |
| extrudedHeightReference | Number | | `optional` 指定 corridor 拉伸高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2**|0/1/2|
| cornerType | Number | `0` | `optional` 指定 corridor 转角样式。 |
| granularity | Number | | `optional` 指定每个经纬度之间的采样粒度。 |
| fill | Boolean | `true` | `optional` 指定 corridor 是否填充材质。 |
| material | Object\|String\|Array | `'white'` | `optional` 指定 corridor 的材质。 |
| outline | Boolean | `false` | `optional` 指定 corridor 是否绘制轮廓线。 |
| outlineColor | Object\|String\|Array | `'black'` | `optional` 指定 corridor 轮廓线颜色。 |
| outlineWidth | Number | `1.0` | `optional` 指定 corridor 轮廓线宽度。 |
| shadows | Number | `0` | `optional` 指定 corridor 是否接收或者发射每个点光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3**|0/1/2/3|
| distanceDisplayCondition | Object\|Array\|Function | | `optional` 指定 corridor 随相机距离改变是否显示参数。 |
| classificationType | Number | `2` | `optional` 指定 corridor 的贴对象模式。 **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2**|0/1/2|
| zIndex | Number | | `optional` 指定 corridor 顺序，没有高度和拉伸高度才有效。 |

### 事件

| 事件名            | 参数                               | 描述                                     |
| ----------------- | ---------------------------------- | ---------------------------------------- |
| beforeLoad        | Vue Instance                       | 对象加载前触发。                         |
| ready             | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。                     |
| destroyed         | Vue Instance                       | 对象销毁时触发。                         |
| definitionChanged |                                    | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[CorridorGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGraphics.html)**
