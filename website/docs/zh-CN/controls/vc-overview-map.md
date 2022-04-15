## VcOverviewMap

加载鹰眼图控件。

:::tip

提示：3.0 版本对鹰眼图组件进行了重构，鹰眼图实质是另外一个 `vc-viewer`，所以鹰眼图中仍然能加 VueCesium 的各子组件。

:::

### 基础用法

鹰眼图组件的基础用法。

:::demo 使用 `vc-overview-map` 标签在三维球上加载鹰眼图组件。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- 鹰眼图示例 1 -->
    <vc-overview-map @ready="onOverviewReady" ref="overview" :offset="[5, 5]">
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-amap map-style="7" :projectionTransforms="{ from: 'GCJ02', to: 'WGS84' }"></vc-imagery-provider-amap>
      </vc-layer-imagery>
      <vc-entity>
        <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
      </vc-entity>
    </vc-overview-map>
    <!-- 鹰眼图示例 2 -->
    <vc-overview-map position="bottom-left" width="300px" height="300px" :offset="[5, 5]">
      <vc-layer-imagery>
        <vc-imagery-provider-osm></vc-imagery-provider-osm>
      </vc-layer-imagery>
      <vc-entity>
        <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
      </vc-entity>
    </vc-overview-map>

    <vc-primitive-tileset url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"></vc-primitive-tileset>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-entity
      :billboard="billboard"
      :position="{lng: 108, lat: 32}"
      :point="point"
      :label="label"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
    </vc-entity>
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
        point: {
          pixelSize: 28,
          color: 'red'
        },
        label: {
          text: 'Hello World',
          pixelOffset: [0, 80]
        },
        billboard: {
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.5
        },
        projectionTransforms: {
          from: 'GCJ02',
          to: 'WGS84'
        },
        centerRectColor: 'red'
      }
    },
    methods: {
      onOverviewReady({ cesiumObject }) {
        console.log(cesiumObject)
      },
      onEntityEvt(e) {
        console.log(e)
        if (e.type === 'onmouseover') {
          this.billboard = {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.6
          }
        } else if (e.type === 'onmouseout') {
          this.billboard = {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.5
          }
        }
      },
      unload() {
        this.$refs.overview.unload()
      },
      load() {
        this.$refs.overview.load()
      },
      reload() {
        this.$refs.overview.reload()
      }
    }
  }
</script>
```

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | string | `'bottom-right'` | `optional` 指定鹰眼组件位置。 | top-right/top-left/bottom-right/bottom-left |
| offset | [number, number] | `[0, 0]` | `optional` 指定鹰眼组件基于位置的偏移量。 | |
| width | string | `'150px'` | `optional` 指定鹰眼组件宽度。 |
| height | string | `'150px'` | `optional` 指定鹰眼组件高度。 |
| border | string | `'solid 4px rgb(255, 255, 255)'` | `optional` 指定鹰眼组件边框。 |
| borderRadius | string | | `optional` 指定鹰眼组件圆角。 |
| toggleOpts | VcBtnTooltipProps & { show: boolean } | `show: true, color: '#fff', background: '#3f4854', icon: 'vc-icons-overview-toggle', size: '15px', tooltip: { delay: 500, anchor: 'bottom middle', offset: [0, 20], tip: void 0 } }` | `optional` 指定鹰眼组件切换按钮参数。 |
| viewerOpts | VcViewerProps |`{ removeCesiumScript: false, showCredit: false, sceneMode: 2 }` | `optional` 指定鹰眼组件中 vc-viewer 组件参数。|
| centerRectColor | VcColor | `'#ff000080'` | `optional` 指定矩形颜色。 |
| widthFactor | number | `2` | `optional` 指定矩形宽度因子。 |
| heightFactor | number | `2` | `optional` 指定矩形高度因子。 |

:::

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 方法

| 方法名             | 参数                                    | 描述                                        |
| ------------------ | --------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\> | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\> | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                | 手动卸载组件。                              |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                    | 获取该组件加载的 Cesium 对象。              |
