# 热力图

`cesium-heatmap` 热力图，实现热力图功能，目前暂时只支持矩形框。

## 示例

### 添加热力图到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready" :terrainProvider="terrainProvider">
        <cesium-heatmap ref="heatMap" :bounds="bounds" :options="options" :min="min" :max="max" :data="data" @dataSeted="dataSeted">
        </cesium-heatmap>
      </cesium-viewer>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          terrainProvider: null,
          bounds: {west: -109.0, south: 30.0, east: -80.0, north: 50.0},
          options: {
            backgroundColor: 'rgba(0,0,0,0)',
            gradient: {
              // enter n keys between 0 and 1 here
              // for gradient color customization
              '0.9': 'red',
              '0.8': 'orange',
              '0.7': 'yellow',
              '0.5': 'blue',
              '0.3': 'green'
            },
            // minCanvasSize: 10,
            // maxCanvasSize: 100,
            radius: 250,
            maxOpacity: 0.5,
            minOpacity: 0,
            blur: 0.75
          },
          data: [],
          min: 0,
          max: 0
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.cesiumInstance = cesiumInstance
          this.terrainProvider = Cesium.createWorldTerrain()
          let _this = this
          Cesium.Resource.fetchJson({url: './statics/SampleData/heatmapData/19042808_t.json'}).then((data)=>{
            _this.bounds = {
              west: data.left,
              south: data.bottom,
              east: data.right,
              north: data.top
            }
            _this.min = data.min
            _this.max = data.max
            _this.data = data.datas
             viewer.camera.flyTo({
              destination: Cesium.Cartesian3.fromDegrees(103.674645955002, 32.0725088139904, 40000.0)
            })
          })
        },
        getData (data) {
          var result = []
          let rows = data.rows
          let cols = data.cols
          let cellX = (data.right - data.left) / cols
          let cellY = (data.top - data.bottom) / rows
          for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
              let x = data.left + i * cellX
              let y = data.bottom + j * cellY
              let value = data.dvalues[i * cols + j]
              if (value !== data.noDataValue) {
                result.push({ x: x, y: y, value: value })
              }
            }
          }
          return result
        },
        dataSeted (entity){
          const {viewer} = this.cesiumInstance
          viewer.zoomTo(entity)
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready" :terrainProvider="terrainProvider">
      <cesium-heatmap ref="heatMap" :bounds="bounds" :options="options" :min="min" :max="max" :data="data" @dataSeted="dataSeted">
      </cesium-heatmap>
    </cesium-viewer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        terrainProvider: null,
        bounds: {west: -109.0, south: 30.0, east: -80.0, north: 50.0},
        options: {
          backgroundColor: 'rgba(0,0,0,0)',
          gradient: {
            // enter n keys between 0 and 1 here
            // for gradient color customization
            '0.9': 'red',
            '0.8': 'orange',
            '0.7': 'yellow',
            '0.5': 'blue',
            '0.3': 'green'
          },
          // minCanvasSize: 10,
          // maxCanvasSize: 100,
          radius: 25,
          maxOpacity: 0.5,
          minOpacity: 0,
          blur: 0.75
        },
        data: [],
        min: 0,
        max: 0
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.cesiumInstance = cesiumInstance
        this.terrainProvider = Cesium.createWorldTerrain()
        Cesium.Resource.fetchJson({url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/temperature.json'}).then((data)=>{
          this.bounds = {
            west: data.left,
            south: data.bottom,
            east: data.right,
            north: data.top
          }
          this.min = data.min
          this.max = data.max
          this.data = this.getData(data)
        })
      },
      getData (data) {
        var result = []
        let rows = data.rows
        let cols = data.cols
        let cellX = (data.right - data.left) / cols
        let cellY = (data.top - data.bottom) / rows
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            let x = data.left + i * cellX
            let y = data.bottom + j * cellY
            let value = data.dvalues[i * cols + j]
            if (value !== data.noDataValue) {
              result.push({ x: x, y: y, value: value })
            }
          }
        }
        return result
      },
      dataSeted (entity){
        const {viewer} = this.cesiumInstance
        viewer.zoomTo(entity)
      }
    }
  }
</script>
```

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|bounds|Object||`optional` 指定热力图矩形范围。|
|options|Object|true|`optional` 指定热力图的heatmap参数。|
|min|Number||`optional` 指定最小值。|
|max|Number||`optional` 指定最大值。|
|data|Array|true|`optional` 指定热力图数据。|
---

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
|dataSeted|Entity|每当设置数据集成功时触发, 返回Entity实例。|
