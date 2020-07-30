# DoubleCircleRipple

The `vc-ripple-circle-double` component is used to load the double circle ripple effect. Refer to [ysCesium|跃焱邵隼](https://www.wellyyss.cn/ysCesium/main/app.html).

## Example

### Load a DoubleCircleRipple

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-ripple-circle-double
          @ready="subReady"
          imageUrl="/statics/SampleData/images/redCircle2.png"
          :position="position"
        ></vc-ripple-circle-double>
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
      <vc-ripple-circle-double
        @ready="subReady"
        :interval="1000"
        imageUrl="/statics/SampleData/images/redCircle2.png"
        :position="position"
      ></vc-ripple-circle-double>
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
| position | Object | | `required` Specify the location where the double circle ripple effect entity is added. structure: { lng: number, lat: number, height: number } or Cesium.Cartesian3 |
| height | Number | `undefined` | `optional` Specify the height of the double circle ripple effect ellipse. Unit: Meter.|
| minRadius | Number | `0` | `optional` Specify the minimum radius of the double circle ripple effect. Unit: Meter.|
| maxRadius | Number | `3000` | `optional` Specify the maximum radius of the double circle ripple effect. Unit: Meter.|
| deviationRadius | Number | `20` | `optional` Specify the difference between the radius of the double circle. The larger the value, the faster the speed.|
| interval | Number | `3000` | `optional` The time interval between two circles, in seconds. |
| imageUrl | String | `''` | `optional` Specify the picture used to express the double-circle ripple effect. |

---

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and an Entity array. |
