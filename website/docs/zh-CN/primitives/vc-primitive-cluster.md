## VcPrimitiveCluster

聚合图元。用图元 API 对点、布告板、标签进行聚合。

### 基础用法

聚合图元组件的基础用法。

:::demo 使用 `vc-primitive-cluster` 组件在三维球上添加 billboard 并聚合。

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
        :labels="labels"
        :minimum-cluster-size="minimumClusterSize"
        @cluster-event="onClusterEvent"
        @click="onClicked"
        @mouseover="onMouseOver"
      ></vc-primitive-cluster>
    </vc-collection-primitive>

    <vc-selection-indicator ref="indicatorRef" @pickEvt="pickEvt"></vc-selection-indicator>
    <!-- 注记层 -->
    <vc-layer-imagery :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" ref="provider"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <div class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">销毁</el-button>
      <el-button type="danger" round @click="load">加载</el-button>
      <el-button type="danger" round @click="reload">重载</el-button>
      <el-switch v-model="show" active-color="#13ce66" inactive-text="显示/隐藏"> </el-switch>
      <el-switch v-model="enabled" active-color="#13ce66" inactive-text="开启/关闭"> </el-switch>
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
      const labels = ref([])
      const primitiveClusterRef = ref(null)
      const indicatorRef = ref(null)
      const minimumClusterSize = ref(3)
      // methods
      const onClicked = e => {
        console.log('onClicked', e)
      }
      const onMouseOver = e => {
        console.log('onMouseOver', e)
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
        Cesium.Resource.fetchJson('https://zouyaoji.top/vue-cesium/SampleData/json/schools.geojson').then(res => {
          const { features } = res
          for (let i = 0; i < features.length; i++) {
            const feature = features[i]
            const coordinates = feature.geometry.coordinates

            labels.value.push({
              show: true,
              scale: 1,
              showBackground: true,
              backgroundColor: Cesium.Color.fromCssColorString('#000000').withAlpha(0.8),
              verticalOrigin: 1,
              horizontalOrigin: 0,
              pixelOffset: new Cesium.Cartesian2(0, -10),
              font: '16px sans-serif',
              position: [coordinates[0], coordinates[1]],
              disableDepthTestDistance: Number.POSITIVE_INFINITY,
              distanceDisplayCondition: [0, Number.POSITIVE_INFINITY],
              text: 'label'
            })

            billboards.value.push({
              image: 'https://zouyaoji.top/vue-cesium/images/mark-icon.png',
              width: 32,
              height: 32,
              position: [coordinates[0], coordinates[1]],
              onClick: e => {
                console.log(e)
              }
            })
          }
        })
      }

      const onClusterEvent = (ids, cluster) => {
        console.log('asd')
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
        cluster.billboard.id = ids
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
          // 异常判断
          try {
            ctx.drawImage(image, 0, 0)
          } catch (e) {
            console.log(e)
          }

          // 渲染字体
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
        onMouseOver,
        onViewerReady,
        labels,
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

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ------ | ---- | ------ | ---- |---|
| show | boolean | `true` | `optional` 指定图元是否显示。 |
| enabled | boolean | `true` | `optional` 指定聚合是否生效。 |
| pixelRange | number | `80` | `optional` 指定聚合生效的像素范围。 |
| minimumClusterSize | number | `2` | `optional` 指定可以聚合的屏幕空间对象的最小数量。 |
| clusterBillboards | boolean | `true` | `optional` 指定布告板图元对象聚合是否生效。 |
| clusterLabels | boolean | `true` | `optional` 指定标签图元对象聚合是否生效。 |
| clusterPoints | boolean | `true` | `optional` 指定点图元对象聚合是否生效。|
| billboards | VcBillboardProps[] | `[]` | `optional` 指定布告板图元数组。数组对象结构与 [vc-billboard](https://zouyaoji.top/vue-cesium/#/zh-CN/component/primitives/vc-collection-billboard#vcbillboard-props) 保持一致。 |
| labels | VcLabelProps[] | `[]` | `optional` 指定标签图元数组。数组对象结构与 [vc-label](https://zouyaoji.top/vue-cesium/#/zh-CN/component/primitives/vc-collection-label#vclabel-props) 保持一致。 |
| points | VcPointProps[] | `[]` | `optional` 指定点图元数组。数组对象结构与[vc-point](https://zouyaoji.top/vue-cesium/#/zh-CN/component/primitives/vc-collection-point#vcpoint-props) 保持一致。 |
| enableMouseEvent | boolean | `true` | `optional` 指定鼠标事件是否生效。 |

### 事件

| 事件名       | 参数                                    | 描述                       |
| ------------ | --------------------------------------- | -------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。           |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。       |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。           |
| readyPromise |                                         | 模型对象可用时触发。       |
| mousedown    | (evt: VcPickEvent)                      | 鼠标在该图元上按下时触发。 |
| mouseup      | (evt: VcPickEvent)                      | 鼠标在该图元上弹起时触发。 |
| click        | (evt: VcPickEvent)                      | 鼠标单击该图元时触发。     |
| clickout     | (evt: VcPickEvent)                      | 鼠标单击该图元外部时触发。 |
| dblclick     | (evt: VcPickEvent)                      | 鼠标左键双击该图元时触发。 |
| mousemove    | (evt: VcPickEvent)                      | 鼠标在该图元上移动时触发。 |
| mouseover    | (evt: VcPickEvent)                      | 鼠标移动到该图元时触发。   |
| mouseout     | (evt: VcPickEvent)                      | 鼠标移出该图元时触发。     |

### 参考

- 原出处: **[tingyuxuan2302/cesium-vue3-vite](https://github.com/tingyuxuan2302/cesium-vue3-vite/blob/github/src/utils/cesiumCtrl/primitiveCluster.js)**
