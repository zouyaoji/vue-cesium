# 热力图

`cesium-heatmap` 热力图组件，用`rectangle-graphics`、`rectangle-geometry`或者`singletile-imagery-provider`结合`heatmap.js`实现热力图功能。通过输入数据用`heatmap.js`生成热力图并作为组件的材质或者纹理贴图实现。默认加的是`rectangle-geometry`组件。

## 示例

### 添加热力图到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready" :terrainProvider="terrainProvider">
        <cesium-heatmap ref="heatMap" :bounds="bounds" :options="options" :min="min" :max="max" :data="data">
        </cesium-heatmap>
      </cesium-viewer>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          terrainProvider: null,
          bounds: {west: 80.0, south: 30.0, east: 109.0, north: 50.0},
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
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          viewer.camera.setView({
            destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
            orientation: {
              heading: 6.20312220367255,
              pitch: -0.9937536846355606,
              roll: 0.002443376981836387
            }
          })
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
      <cesium-heatmap ref="heatMap" :bounds="bounds" :options="options" :min="min" :max="max" :data="data">
      </cesium-heatmap>
    </cesium-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        terrainProvider: null,
        bounds: { west: 80.0, south: 30.0, east: 109.0, north: 50.0 },
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
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
          orientation: {
            heading: 6.20312220367255,
            pitch: -0.9937536846355606,
            roll: 0.002443376981836387
          }
        })
        this.terrainProvider = Cesium.createWorldTerrain()
        let _this = this
        Cesium.Resource.fetchJson({ url: './statics/SampleData/heatmapData/19042808_t.json' }).then(data => {
          _this.bounds = {
            west: data.left,
            south: data.bottom,
            east: data.right,
            north: data.top
          }
          _this.min = data.min
          _this.max = data.max
          _this.data = data.datas
        })
      },
      getData(data) {
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
      }
    }
  }
</script>
```

## 属性

| 属性名  | 类型   | 默认值 | 描述                                                                                                                    |
| ------- | ------ | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| type    | Number | 0      | `optional` 指定热力图加载的 Cesium 对象类型，0: RectangleGeometry, 1: RectangleGraphics, 2: SingleTileImageryProvider。 |
| bounds  | Object |        | `optional` 指定热力图矩形范围。                                                                                         |
| options | Object | true   | `optional` 指定热力图的 heatmap 参数。                                                                                  |
| min     | Number |        | `optional` 指定最小值。                                                                                                 |
| max     | Number |        | `optional` 指定最大值。                                                                                                 |
| data    | Array  | true   | `optional` 指定热力图数据。                                                                                             |

---

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
