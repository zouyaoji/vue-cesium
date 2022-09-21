## VcGraphicsEllipsoid

加载(椭)球实体，相当于初始化一个 `Cesium.EllipsoidGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

(椭)球体组件的基础用法。

:::demo 使用 `vc-graphics-ellipsoid` 标签在三维球上添加球体、椭球体。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity
      ref="entity1"
      :position="[114, 40, 300000]"
      description="Hello Vue Cesium"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <vc-graphics-ellipsoid :radii="{ x: 200000.0, y: 200000.0, z: 300000.0 }" material="blue" :outline="true"></vc-graphics-ellipsoid>
    </vc-entity>
    <vc-entity ref="entity2" :position="{lng: 107, lat: 40, height: 300000}" description="Hello Vue Cesium">
      <vc-graphics-ellipsoid
        :radii="{ x: 300000.0, y: 300000.0, z: 300000.0 }"
        :outline="true"
        :material="[255, 0, 0, 125]"
        outlineColor="black"
      ></vc-graphics-ellipsoid>
    </vc-entity>
    <vc-entity ref="entity3" :position="[100, 40, 300000]" description="Hello Vue Cesium">
      <vc-graphics-ellipsoid
        :radii="{ x: 200000.0, y: 200000.0, z: 300000.0 }"
        :fill="false"
        :outline="true"
        outlineColor="yellow"
        :slicePartitions="24"
        :stackPartitions="36"
      ></vc-graphics-ellipsoid>
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
      const entity3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
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
| ----- | ----- | ----- | --- | ------ |
| show | boolean | `true` | `optional` 指定 ellipsoid 是否显示。 |
| radii | VcPosition | | `optional` 指定 ellipsoid 的半径参数。 |
| heightReference | number | | `optional` 指定 ellipsoid 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** | 0/1/2 |
| fill | boolean | `true` | `optional` 指定 ellipsoid 是否填充材质。 |
| material | VcMaterial\|string\|Array | `'WHITE'` | `optional` 指定 ellipsoid 材质。 |
| outline | boolean | `false` | `optional` 指定 ellipsoid 是否绘制轮廓线。 |
| outlineColor | Object\|string\|Array | `'BLACK'` | `optional` 指定 ellipsoid 轮廓线颜色。 |
| outlineWidth | number | `1.0` | `optional` 指定 ellipsoid 轮廓线宽度。 |
| stackPartitions | number | `64` | `optional` 指定 ellipsoid 横向线数量。 |
| slicePartitions | number | `64` | `optional` 指定 ellipsoid 径向线数量。 |
| subdivisions | number | `128` | `optional` 指定 ellipsoid 每个轮环的样本数，确定曲率粒度。 |
| shadows | number | `0` | `optional` 指定 ellipsoid 是否投射或接受每一个光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` 指定 ellipsoid 随相机距离的显示条件。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[EllipsoidGraphics](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGraphics.html)**
