## VcOverlayHeatmap

加载热力图覆盖物。

基于 heatmapjs 实现。

### 基础用法

热力图覆盖物组件的基础用法。

:::demo 使用 `vc-overlay-heatmap` 标签在三维球上添加热力图。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="ready" sceneModePicker>
    <vc-overlay-heatmap
      v-if="data.length"
      ref="heatmap"
      :data="data"
      :rectangle="rectangle"
      :max="max"
      :min="min"
      :show="show"
      :options="options"
      @ready="onHeatmapReady"
      type="primitive"
      :segments="segments"
    >
    </vc-overlay-heatmap>
    <vc-layer-imagery :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-datasource-geojson data="https://zouyaoji.top/vue-cesium/SampleData/geojson/wuhou.json" stroke="red"></vc-datasource-geojson>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        show: true,
        data: [],
        max: 346.05413818359375,
        min: 0.5259535908699036,
        rectangle: [0, 0, 0, 0],
        segments: [
          [10, '#4A90C3'],
          [20, '#81AAAC'],
          [40, '#B2C899'],
          [60, '#E5EA84'],
          [100, '#F8DE6D'],
          [150, '#EFA451'],
          [200, '#E46C38'],
          [346, '#D53127']
        ],
        options: {
          backgroundColor: 'rgba(0,0,0,0)',
          // gradient: {
          //   // enter n keys between 0 and 1 here
          //   // for gradient color customization
          //   0.0289017: '#4A90C3', // 0-10
          //   0.0578035: '#81AAAC', // 11-20
          //   0.1156069: '#B2C899', // 21-40
          //   0.1734104: '#E5EA84', // 41-60
          //   0.2890173: '#F8DE6D', // 61-100
          //   0.433526: '#EFA451', // 101-150
          //   0.5780347: '#E46C38', // 151-200
          //   1: '#D53127' // 201-346
          // },
          opacity: 0.8,
          radius: 10,
          maxOpacity: 0.6,
          minOpacity: 0.3,
          blur: 0.75
        }
      }
    },
    methods: {
      ready({ Cesium, viewer }) {
        Cesium.Resource.fetchJson({ url: 'https://zouyaoji.top/vue-cesium/SampleData/heatmap/pop.json' }).then(res => {
          this.rectangle = res.bounds
          this.min = res.min
          this.max = res.max
          this.data = res.data
        })
      },
      onHeatmapReady({ Cesium, viewer, cesiumObject }) {
        this.$refs.heatmap.childRef.value.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
          console.log(cesiumObject)
          if (cesiumObject instanceof Cesium.GroundPrimitive) {
            const geometry = cesiumObject.geometryInstances.geometry.constructor.createGeometry(cesiumObject.geometryInstances.geometry)
            viewer.scene.camera.flyToBoundingSphere(geometry.boundingSphere)
          } else if (cesiumObject instanceof Cesium.Entity) {
            viewer.flyTo(cesiumObject)
          } else {
            viewer.camera.flyTo({ destination: cesiumObject.imageryProvider.rectangle })
          }
        })
      },
      unload() {
        this.$refs.heatmap.unload()
      },
      load() {
        this.$refs.heatmap.load()
      },
      reload() {
        this.$refs.heatmap.reload()
      }
    }
  }
</script>
```

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | ---- | ------ | --- | ------ |
| show | Boolean | `true` | `optional` 指定热力图是否显示。 |
| rectangle | Object\|Array | | `optional` 指定热力图四至参数。 |
| min | Number | `true` | `optional` 指定热力图数据最小值。 |
| max | Number | | `optional` 指定热力图数据最大值。 |
| data | Array<{x: number, y: number, value: number}> | `[]` | `optional` 指定热力图数据。如果不是 x, y, value 需要在 options 属性指明字段。|
| options | Object\|HeatmapConfiguration | | `optional` 指定热力图参数。 |
| type | String | `'primitive'` | `optional` 指定热力图对象的类型。**图元: primitive, 实体: entity, 影像图层: imagery-layer** | primitive/entity/imagery-layer |
| segments | Array\<VcColorSegments\> | | `optional` 指定热力图颜色分段。 |

:::tip

提示：`segments` 和 `options.gradient` 均表达颜色分段，指定其中一个就可以了。`segments` 分段是实际值，而 `options.gradient` 需要归一化处理，详见例子。

:::

:::tipflex

```js
// options 结构:
{
  backgroundColor: string,
  gradient: { [key: string]: string }
  radius: number
  opacity: number
  maxOpacity: number
  minOpacity: number
  blur: number
  xField: string // x
  yField: string // y
  valueField: string //value
}
```

```js
// segments 结构:
Array<[number, [number, number, number]] | [number, string | ColorInByteOption | Cartesian4Option | Cesium.Color]>
```

:::

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 资料： [heatmapjs](https://www.patrick-wied.at/static/heatmapjs/docs.html)
