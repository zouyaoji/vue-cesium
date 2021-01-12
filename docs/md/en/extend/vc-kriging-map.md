# VcKrigingMap

The `vc-kriging-map` component is used to load VcKrigingMap, based on `kriging.js` and`turf.js` implementation.

## Example

### Load a VcKrigingMap

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-kriging-map v-if="values.length !== 0" :breaks="breaks" :values="values" :lngs="lngs" :lats="lats" :colors="colors" @ready="subReady" clipCoords="./statics/SampleData/shp/china/guilin.json">
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
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          let data = await Cesium.Resource.fetchJson({url: './statics/SampleData/weather/precipitation/guilin.json'})
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

#### Code

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
          clipCoords="./statics/SampleData/shp/china/guilin.json"
        >
          <!-- <vc-kriging-map ref="krigingmap" v-if="values.length !== 0" :breaks="breaks" :values="values" :lngs="lngs" :lats="lats" :colors="colors"      @ready="subReady" :clipCoords="[109.61826, 24.25883, 111.49207, 26.38528]"> -->
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
          let data = await Cesium.Resource.fetchJson({url: './statics/SampleData/weather/precipitation/guilin.json'})
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

## Instance Properties

| name          | type          | default         | description                                                                                            |
| ------------- | ------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| krigingModel  | string        | `'exponential'` | `optional` Specify the name of the kriging model. The value is 'gaussian', 'spherical', 'exponential'. |
| krigingSigma2 | Number        |                 | `optional` Specify the kriging interpolation sigma parameter.                                          |
| krigingAlpha  | Number        |                 | `optional` Specifies the kriging interpolation alpha parameter.                                        |
| canvasAlpha   | Number        | `1`             | `optional` Specify the alpha parameter when rendering.                                                 |
| colors        | Array         |                 | `optional` Specifies the patch color segmented color array.                                            |
| breaks        | Array         |                 | `optional` Specify a patched array of color patches.                                                   |
| clipCoords    | Array\|String | `[]`            | `required` Specifies the coordinate array or json file address of the colormap crop.                   |
| show          | Boolean       | `true`          | `optional` Specifies whether the speckle map is displayed.                                             |
| cell          | Number        |                 | `optional` Specify the interpolation resolution.                                                       |

---

## Events

| name  | parameter                       | description                                                                                                       |
| ----- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject } | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
