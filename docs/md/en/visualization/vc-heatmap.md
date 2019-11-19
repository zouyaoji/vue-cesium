# VcHeatMap

The `vc-heatmap` component is used to load the heat map. Implemented by `heatmap.js`.

## Example

### Load a VcHeatMap

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" :terrainProvider="terrainProvider">
        <vc-heatmap ref="heatMap" :bounds="bounds" :options="options" :min="min" :max="max" :data="data"> </vc-heatmap>
      </vc-viewer>
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
          Cesium.Resource.fetchJson({ url: './statics/SampleData/heatmapData/19042808_t.json' }).then((data) => {
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
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready" :terrainProvider="terrainProvider">
      <vc-heatmap ref="heatMap" :bounds="bounds" :options="options" :min="min" :max="max" :data="data"> </vc-heatmap>
    </vc-viewer>
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
        Cesium.Resource.fetchJson({ url: './statics/SampleData/heatmapData/19042808_t.json' }).then((data) => {
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

## Instance Properties

| name    | type   | default | description                                                                                               |
| ------- | ------ | ------- | --------------------------------------------------------------------------------------------------------- |
| type    | Number | 0       | `optional` set type of heatmap, 0: RectangleGeometry, 1: RectangleGraphics, 2: SingleTileImageryProvider. |
| bounds  | Object |         | `optional` set bounds of heatmap.                                                                         |
| options | Object | true    | `optional` set heatmap param。                                                                            |
| min     | Number |         | `optional` set min vaule.                                                                                 |
| max     | Number |         | `optional` set max vaule.                                                                                 |
| data    | Array  | true    | `optional` set heatmap data.                                                                              |

---

## Events

| name  | parameter        | description                                                                                   |
| ----- | ---------------- | --------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when Cesium3DTileset is ready. It returns a core class of Cesium, a viewer instance. |
