# VcShinePoint

The `vc-shine-point` component is used to load the flash point effect. Refer to [ysCesium|跃焱邵隼](https://www.wellyyss.cn/ysCesium/main/app.html).

## Example

### Load a VcShinePoint

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-shine-point @ready="subReady" :position="position" color="red"></vc-shine-point>
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
          position: { lng: 117.217124, lat: 31.809777, height: 200 }
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
        },
        subReady() {
          const { Cesium, viewer } = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          viewer.zoomTo(viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90), 1000))
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
      <vc-shine-point @ready="subReady" :position="position" color="red"></vc-shine-point>
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
        position: { lng: 117.217124, lat: 31.809777, height: 200 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
      },
      subReady() {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.zoomTo(viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90), 1000))
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| position | Object | | `required` Specify the location where the flash point effect entity is added. structure:{ lng: number, lat: number, height: number } or Cesium.Cartesian3 |
| show | Boolean | `true` | `optional` Specifies whether the point is visible. |
| pixelSize | Number | `10` | `optional` Specify the pixel value of the flash point effect point.|
| color | Object\|String\|Array | `'white'` | `optional` Specify the flash point effect color. |
| deviationAlpha | Number | `0.05` | `optional` Specify the flash point effect color Alpha value to change the scale, the larger the value, the faster the flash. Ranges: (0, 1)|

---

## Events

| name  | parameter                       | description                                                                                                       |
| ----- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject } | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
