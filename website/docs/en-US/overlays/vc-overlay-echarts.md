<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-12 10:31:24
 * @LastEditTime: 2021-12-07 13:12:58
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\en-US\overlays\vc-overlay-echarts.md
-->

## VcOverlayEcharts

Load the Echart overlay according to the Cesium coordinate system.

**Note:** This component depends on echarts, and echarts needs to be installed additionally before using this component on the project:

```bash
# npm can be replaced with your favorite tool
npm install echarts --save
```

If it is introduced by umd, please [reference](https://zouyaoji.top/vue-cesium/umd.html).

### Basic usage

Basic usage of VcOverlayEcharts component.

:::demo Use the `vc-overlay-echarts` tag to add a chart overlay to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer :camera="camera">
    <vc-overlay-echarts ref="echartOverlay" :options="options"> </vc-overlay-echarts>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const camera = ref({
        position: [107.033, 26.976, 5725046.53],
        heading: 14,
        pitch: -79,
        roll: 0.06
      })
      const echartOverlay = ref(null)
      const datas = [
        {
          level: 1,
          name: 'Beijing',
          label: 'beijing',
          value: [116.4551, 40.2539],
          symbol: '',
          symbolSize: [30, 30]
        },
        {
          level: 1,
          symbol: '',
          name: 'Langfang',
          label: 'langfang',
          category: 0,
          active: !0,
          speed: 6,
          value: [116.521, 39.0509],
          belong: 'Beijing'
        },
        {
          level: 1,
          symbol: '',
          name: 'Urumqi',
          category: 0,
          active: !0,
          speed: 6,
          value: [87.9236, 43.5883],
          belong: 'Beijing'
        },
        {
          level: 1,
          symbol: '',
          name: 'Lanzhou',
          category: 0,
          active: !0,
          speed: 6,
          value: [103.5901, 36.3043],
          belong: 'Beijing'
        },
        {
          level: 1,
          symbol: '',
          name: 'Hangzhou',
          category: 0,
          active: !0,
          speed: 6,
          value: [119.5313, 29.8773],
          belong: 'Beijing'
        },
        {
          level: 1,
          symbol: '',
          name: 'Sichuan',
          category: 0,
          active: !0,
          speed: 6,
          value: [103.9526, 30.7617],
          belong: 'Beijing'
        },
        {
          level: 2,
          symbol: '',
          name: 'Chongqing',
          category: 0,
          active: !0,
          speed: 6,
          value: [107.7539, 30.1904],
          belong: 'Chongqing'
        },
        {
          level: 1,
          symbol: '',
          name: 'Xiamen',
          category: 0,
          active: !0,
          speed: 6,
          value: [118.1689, 24.6478],
          belong: 'Beijing'
        },
        {
          level: 1,
          symbol: '',
          name: 'Baotou',
          category: 0,
          active: !0,
          speed: 6,
          value: [110.3467, 41.4899],
          belong: 'Beijing'
        },
        {
          level: 1,
          symbol: '',
          name: 'Wenzhou',
          category: 0,
          active: !0,
          speed: 6,
          value: [120.498, 27.8119],
          belong: 'Hangzhou'
        },
        {
          level: 2,
          symbol: '',
          name: 'Zhoushan',
          category: 0,
          active: !0,
          speed: 6,
          value: [122.2559, 30.2234],
          belong: 'Hangzhou'
        }
      ]

      const lineColors = ['#fff', '#f6fb05', '#00fcff']
      const stationSymbols = [
        'image://https://zouyaoji.top/vue-cesium/images/station-blue.png',
        'image://https://zouyaoji.top/vue-cesium/images/station-yellow.png'
      ]
      const lineSymbols = [
        'image://https://zouyaoji.top/vue-cesium/images/symbol-white.png',
        'image://https://zouyaoji.top/vue-cesium/images/symbol-yellow.png'
      ]
      datas.forEach(data => {
        data.symbol = stationSymbols[data.level - 1]
      })

      const arrs = [[], [], []]

      datas.forEach(data => {
        if (data.belong) {
          const belongs = Array.isArray(data.belong) ? data.belong : [data.belong]
          belongs.forEach(belong => {
            datas.forEach(item => {
              if (belong === item.name) {
                arrs[data.level - 1].push([
                  {
                    coord: item.value
                  },
                  {
                    coord: data.value
                  }
                ])
              }
            })
          })
        }
      })

      const seriesEffectScatter = [
        {
          type: 'effectScatter',
          coordinateSystem: 'cesium',
          symbolSize: [20, 20],
          symbolOffset: [0, -10],
          z: 3,
          circular: { rotateLabel: !0 },
          label: {
            normal: {
              show: !0,
              position: 'right',
              formatter: '{b}',
              fontSize: 24,
              color: '#fff',
              textBorderColor: '#2aa4e8',
              textBorderWidth: 2,
              offset: [0, 20]
            }
          },
          itemStyle: { normal: { shadowColor: 'none' } },
          data: datas
        }
      ]
      const seriesLines = []
      arrs.forEach((arr, index) => {
        console.log(arr)
        seriesLines.push({
          name: '',
          type: 'lines',
          coordinateSystem: 'cesium',
          z: 1,
          effect: {
            show: !0,
            smooth: !1,
            trailLength: 0,
            symbol: lineSymbols[index],
            symbolSize: [10, 30],
            period: 4
          },
          lineStyle: { width: 2, color: lineColors[index], curveness: -0.2 },
          data: arr
        })
      })

      const options = { animation: !1, series: [...seriesEffectScatter, ...seriesLines] }
      const unload = () => {
        echartOverlay.value.unload()
      }
      const load = () => {
        echartOverlay.value.load()
      }
      const reload = () => {
        echartOverlay.value.reload()
      }
      return {
        camera,
        options,
        unload,
        load,
        reload,
        echartOverlay
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| options | Object | | `required` Specify the configuration items of the Echart. |
| autoHidden | Boolean | `true` | `optional` Specify whether Echart elements are automatically hidden when they are on the back of the viewer. |
| coordinateSystem | String | `'cesium'` | `optional` Specify the name of the custom coordinate system when Echart is initialized. |
| customClass | String | | `optional` Specify div class of echart. |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |
