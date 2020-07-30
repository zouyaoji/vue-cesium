# VcWallTrail

The `vc-trail-wall` is used to load the flowing wall effect. Refer to [ysCesium|跃焱邵隼](https://www.wellyyss.cn/ysCesium/main/app.html).

## Example

### Load a VcWallTrail

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-trail-wall
          :positions="positions"
          color="yellow"
          :minimumHeights="minimumHeights"
          imageUrl="./statics/SampleData/images/colors1.png"
          ref="wall"
          :interval="1000"
        ></vc-trail-wall>
        <vc-layer-imagery>
          <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </template>
  <script>
    const lat = 30.598026044
    const lng = 114.302312702
    export default {
      data() {
        return {
          positions: [
            { lng: lng - 0.5, lat: lat - 0.5, height: 50000 },
            { lng: lng - 3, lat: lat, height: 0 },
            { lng: lng - 3, lat: lat - 1, height: 50000 },
            { lng: lng - 1, lat: lat - 3, height: 50000 },
            { lng: lng - 0.5, lat: lat - 0.5, height: 50000 }
          ],
          minimumHeights: [0, 0, 0, 0, 0]
        }
      },
      mounted() {
        this.$refs.wall.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
          viewer.zoomTo(viewer.entities)
        })
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
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
      <vc-trail-wall
        :positions="positions"
        color="yellow"
        :minimumHeights="minimumHeights"
        imageUrl="./statics/SampleData/images/colors1.png"
        ref="wall"
        :interval="1000"
      ></vc-trail-wall>
      <vc-layer-imagery>
        <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
  const lat = 30.598026044
  const lng = 114.302312702
  export default {
    data() {
      return {
        positions: [
          { lng: lng - 0.5, lat: lat - 0.5, height: 50000 },
          { lng: lng - 3, lat: lat, height: 0 },
          { lng: lng - 3, lat: lat - 1, height: 50000 },
          { lng: lng - 1, lat: lat - 3, height: 50000 },
          { lng: lng - 0.5, lat: lat - 0.5, height: 50000 }
        ],
        minimumHeights: [0, 0, 0, 0, 0]
      }
    },
    mounted() {
      this.$refs.wall.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
        viewer.zoomTo(viewer.entities)
      })
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| positions | Array | | `optional` Specifies an array of positions representing wall. **Structure: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| minimumHeights | Array | | `optional` Specifies the height array of the bottom of the wall. |
| maximumHeights | Array | | `optional` Specifies the height array of the top of the wall. |
| outline | Boolean | `false` | `optional` Specifies whether the wall draws contour lines. |
| color | Object\|String\|Array | `'yellow'` | `optional` Specify the color of the line. |
| interval | Number | `3000` | `optional` Specify the time for the line material to flow for one cycle, in milliseconds.|
| imageUrl | String | `''` | `optional` Specify the picture material of the line. |
| loop | Boolean | `true` | `optional` Specifies whether the flow effect of the line is circular. |

---

## Events

| name  | parameter                       | description                                                                                                       |
| ----- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject } | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
