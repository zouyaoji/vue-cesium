# 克里金插值色斑图

`vc-kriging-map` 组件用于加载克里金插值色斑图，基于 `kriging.js` 和 `turf.js` 实现。

## 示例

### 添加热力图到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-kriging-map ref="krigingmap" v-if="values.length !== 0" :breaks="breaks" :values="values" :lngs="lngs" :lats="lats" :colors="colors" @ready="subReady" clipCoords="./statics/SampleData/shp/guilin.json">
        </vc-kriging-map>
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          values: [],
          lngs: [],
          lats: [],
          breaks: [0.1, 10, 25, 50, 100, 250, 500],
          colors: ["#A5F38D", "#3DB93F", '#63B8F9', "#0002E2", "#FA00FA", "#7F0140"]
        }
      },
      methods: {
        async ready (cesiumInstance) {
          window.vm = this
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          let data = await Cesium.Resource.fetchJson({url: './statics/SampleData/weather/guilin.json'})
          let lngs = []
          let lats = []
          let values = []
          data.reduce((pre, cur) => {
            lngs.push(parseFloat(cur.lon))
            lats.push(parseFloat(cur.lat))
            values.push(parseFloat(cur.value))
          }, [])
          this.lngs = lngs
          this.lats = lats
          this.values = values
        },
        subReady ({ Cesium, viewer, cesiumObject }) {
          viewer.zoomTo(viewer.dataSources.get(0))
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-kriging-map
          v-if="values.length !== 0"
          :breaks="breaks"
          :values="values"
          :lngs="lngs"
          :lats="lats"
          :colors="colors"
          @ready="subReady"
          clipCoords="./statics/SampleData/shp/guilin.json"
        >
        </vc-kriging-map>
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          values: [],
          lngs: [],
          lats: [],
          breaks: [0.1, 10, 25, 50, 100, 250, 500],
          colors: ['#A5F38D', '#3DB93F', '#63B8F9', '#0002E2', '#FA00FA', '#7F0140']
        }
      },
      methods: {
        async ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance
          let data = await Cesium.Resource.fetchJson({ url: './statics/SampleData/weather/guilin.json' })
          let lngs = []
          let lats = []
          let values = []
          data.reduce((pre, cur) => {
            lngs.push(parseFloat(cur.lon))
            lats.push(parseFloat(cur.lat))
            values.push(parseFloat(cur.value))
          }, [])
          this.lngs = lngs
          this.lats = lats
          this.values = values
        },
        subReady({ Cesium, viewer, cesiumObject }) {
          viewer.zoomTo(viewer.dataSources.get(0))
        }
      }
    }
  </script></template
>
```

## 属性

| 属性名        | 类型          | 默认值          | 描述                                                                       |
| ------------- | ------------- | --------------- | -------------------------------------------------------------------------- |
| krigingModel  | string        | `'exponential'` | `optional` 指定克里金模型名字，取 'gaussian', 'spherical', 'exponential'。 |
| krigingSigma2 | Object        |                 | `optional` 指定克里金插值 sigma 参数。                                     |
| krigingAlpha  | Object        |                 | `optional` 指定克里金插值 alpha 参数。                                     |
| colors        | Array         |                 | `optional` 指定色斑图分段颜色数组。                                        |
| breaks        | Array         |                 | `optional` 指定色斑图分段数组。                                            |
| clipCoords    | Array\|String | `[]`            | `optional` 指定色斑图裁剪的坐标数组或 json 文件地址。                      |
| show          | Boolean       | `true`          | `optional` 指定色斑图是否显示。                                            |

---

## 事件

| 事件名 | 参数                            | 描述                                                |
| ------ | ------------------------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject } | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
