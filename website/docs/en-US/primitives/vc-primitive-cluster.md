## VcPrimitiveCluster

Clustering points, billboards, labels with primitive API.

### Basic usage

Basic usage of VcPrimitiveCluster component.

:::demo uses the `vc-primitive-cluster` tag to add billboard and cluster.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-collection-primitive>
      <vc-primitive-cluster
        ref="primitiveClusterRef"
        :show="show"
        :enabled="enabled"
        v-if="billboards.length"
        :billboards="billboards"
        :minimum-cluster-size="minimumClusterSize"
        @cluster-event="onClusterEvent"
        @click="onClicked"
      ></vc-primitive-cluster>
    </vc-collection-primitive>

    <vc-selection-indicator ref="indicatorRef" @pickEvt="pickEvt"></vc-selection-indicator>
    <!-- lanel -->
    <vc-layer-imagery :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" ref="provider"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <div class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">Unload</el-button>
      <el-button type="danger" round @click="load">Load</el-button>
      <el-button type="danger" round @click="reload">Reload</el-button>
      <el-switch v-model="show" active-color="#13ce66" inactive-text="SHOW/HIDE"> </el-switch>
      <el-switch v-model="enabled" active-color="#13ce66" inactive-text="ENABLED/DISENABLED"> </el-switch>
    </el-row>
  </div>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const show = ref(true)
      const enabled = ref(true)
      const billboards = ref([])
      const primitiveClusterRef = ref(null)
      const indicatorRef = ref(null)
      const minimumClusterSize = ref(3)
      // methods
      const onClicked = e => {
        console.log(e)
      }
      const unload = () => {
        primitiveClusterRef.value.unload()
      }
      const reload = () => {
        primitiveClusterRef.value.reload()
      }
      const load = () => {
        primitiveClusterRef.value.load()
      }

      const onViewerReady = ({ Cesium, viewer }) => {
        Cesium.Resource.fetchJson('/SampleData/json/schools.geojson').then(res => {
          const { features } = res
          for (let i = 0; i < features.length; i++) {
            const feature = features[i]
            const coordinates = feature.geometry.coordinates

            billboards.value.push({
              image: '/images/mark-icon.png',
              width: 32,
              height: 32,
              position: [coordinates[0], coordinates[1]]
            })
          }
        })
      }

      const onClusterEvent = (ids, cluster) => {
        // 关闭自带的显示聚合数量的标签
        // cluster.label.show = false
        // cluster.billboard.show = true
        // cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM
        // // 根据聚合数量的多少设置不同层级的图片以及大小
        // // cluster.billboard.image = combineIconAndLabel('/images/school-icon.png', ids.length, 64)
        // cluster.billboard.image = '/images/school-icon.png'
        // cluster.billboard._imageHeight = 60
        // cluster.billboard._imageWidth = 60
        // cluster.billboard._dirty = false
        // cluster.billboard.width = 40
        // cluster.billboard.height = 40

        cluster.billboard.show = true
        cluster.label.show = false
        cluster.billboard.id = cluster.label.id
        cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.CENTER
        ids.length >= 300
          ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/300+.png')
          : ids.length >= 150
          ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/150+.png')
          : ids.length >= 90
          ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/90+.png')
          : ids.length >= 30
          ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/30+.png')
          : ids.length > 10
          ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/10+.png')
          : (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/' + ids.length + '.png')
      }

      const combineIconAndLabel = (url, label, size) => {
        let canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        let ctx = canvas.getContext('2d')

        let promise = new Cesium.Resource.fetchImage(url).then(image => {
          try {
            ctx.drawImage(image, 0, 0)
          } catch (e) {
            console.log(e)
          }

          // font属性设置顺序：font-style, font-variant, font-weight, font-size, line-height, font-family
          ctx.fillStyle = Cesium.Color.BLACK.toCssColorString()
          ctx.font = 'bold 20px Microsoft YaHei'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(label, size / 2, size / 2)

          return canvas
        })
        return promise
      }
      const pickEvt = e => {
        console.log(e)
      }

      return {
        primitiveClusterRef,
        show,
        enabled,
        unload,
        reload,
        load,
        show,
        onClicked,
        onViewerReady,
        billboards,
        pickEvt,
        indicatorRef,
        onClusterEvent,
        minimumClusterSize
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | 
| ---- | ---- | ------- | ----------- | 
| show | boolean | `true` | `optional` Determines if this primitive will be shown. |
| enabled | boolean | `true` | `optional` Specify whether clustering is enabled. |
| pixelRange | number | `80` | `optional` Specify the pixel range to extend the screen space bounding box. |
| minimumClusterSize | number | `2` | `optional` Specify the minimum number of screen space objects that can be clustered. |
| clusterBillboards | boolean | `true` | `optional` Specify whether clustering billboard primitive is enabled. |
| clusterLabels | boolean | `true` | `optional` Specify whether clustering label primitive is enabled. |
| clusterPoints | boolean | `true` | `optional` Specify whether clustering point primitive is enabled. |
| billboards | VcBillboardProps[] | `[]` | `optional` Specify an array of billboard collections. The structure of the array object is the same as the attribute of the [vc-billboard](https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-billboard#vcbillboard-props) component. |
| labels | VcLabelProps[] | `[]` | `optional` Specify an array of label collections. The structure of the array object is the same as the attribute of the [vc-label](https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-label#vclabel-props) component. |
| points | VcPointProps[] | `[]` | `optional` Specify an array of points collections. The structure of the array object is the same as the attribute of the [vc-point](https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-point#vcpoint-props) component. |
| enableMouseEvent | boolean | `true` | `optional` Specifies whether to respond to mouse pick events. |

### Events

| Name       | Parameters                              | Description                                                      |
| ---------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| mousedown  | (evt: VcPickEvent)                      | Triggers when the mouse is pressed on this primitive.            |
| mouseup    | (evt: VcPickEvent)                      | Triggers when the mouse bounces up on this primitive.            |
| click      | (evt: VcPickEvent)                      | Triggers when the mouse clicks on the primitive.                 |
| clickout   | (evt: VcPickEvent)                      | Triggers when the mouse clicks outside the primitive.            |
| dblclick   | (evt: VcPickEvent)                      | Triggers when the left mouse button double-clicks the primitive. |
| mousemove  | (evt: VcPickEvent)                      | Triggers when the mouse moves on this primitive.                 |
| mouseover  | (evt: VcPickEvent)                      | Triggers when the mouse moves to this primitive.                 |
| mouseout   | (evt: VcPickEvent)                      | Triggers when the mouse moves out of this primitive.             |

### Reference

- Refer to the official documentation: **[tingyuxuan2302/cesium-vue3-vite](https://github.com/tingyuxuan2302/cesium-vue3-vite/blob/github/src/utils/cesiumCtrl/primitiveCluster.js)**
