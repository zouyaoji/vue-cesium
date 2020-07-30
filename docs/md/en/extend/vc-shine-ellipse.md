# VcShineEllipse

The `vc-shine-ellipse` component is used to load the flash circle effect. Refer to [ysCesium|跃焱邵隼](https://www.wellyyss.cn/ysCesium/main/app.html).

## Example

### Load a VcShineEllipse

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-shine-ellipse @ready="subReady" :position="position" color="red"></vc-shine-ellipse>
        <vc-layer-imagery>
          <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          position: { lng: 117.217124, lat: 31.809777 }
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
        },
        subReady() {
          const { Cesium, viewer } = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          viewer.zoomTo(viewer.entities)
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-shine-ellipse @ready="subReady" :position="position" color="red"></vc-shine-ellipse>
      <vc-layer-imagery>
        <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        position: { lng: 117.217124, lat: 31.809777 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
      },
      subReady() {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.zoomTo(viewer.entities)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| position | Object | | `required` Specify the location where the flash circle effect entity is added. structure:{ lng: number, lat: number, height: number } or Cesium.Cartesian3 |
| height | Number | `undefined` | `optional` Specify the height of the ellipse for the flash circle effect in meters.|
| radius | Number | `0` | `optional` Specify the flash circle effect radius in meters.|
| color | Object\|String\|Array | `'white'` | `optional` Specify the color of the flash circle effect. |
| imageUrl | String | `''` | `optional` Specify the material image used to express the flash circle effect. |
| deviationAlpha | Number | `0.05` | `optional` Specify the flash circle effect color Alpha value to change the scale, the larger the value, the faster the flash. Ranges: (0, 1)|

---

## Events

| name  | parameter                       | description                                                                                                       |
| ----- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject } | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
