# VcDoubleRotatingCircle

The `vc-circle-roatating-double` component is used to load the double-circle rippling effect. The essence is to load 2 circles through `vc-entity` and `vc-graphics-ellipse`, respectively, give the circle pictures, rotate them, and combine them Out effect. Refer to [ysCesium|跃焱邵隼](https://www.wellyyss.cn/ysCesium/main/app.html) 。

## Example

### Load a VcDoubleRotatingCircle

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-circle-roatating-double
          @ready="subReady"
          material1="./statics/SampleData/images/circle1.png"
          material2="./statics/SampleData/images/circle2.png"
          :position="position"
          ref="circle"
          v-if="flag"
        ></vc-circle-roatating-double>
        <vc-entity>
          <vc-graphics-polyline :positions="positions" :width="5" :material="material"></vc-graphics-polyline>
        </vc-entity>
        <vc-layer-imagery>
          <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0" :maximumLevel="17"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          position: { lng: 117.217124, lat: 31.809777 },
          positions: [{ lng: 117.217124, lat: 31.809777, height: 0 }, { lng: 117.217124, lat: 31.809777, height: 3000 }],
          material: {
            fabric: {
              type: 'PolylineGlow',
              uniforms: { color: 'red', glowPower: 0.5 }
            }
          },
          flag: true
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          window.vm = this
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
      <vc-circle-roatating-double
        @ready="subReady"
        material1="./statics/SampleData/images/circle1.png"
        material2="./statics/SampleData/images/circle2.png"
        :position="position"
        ref="circle"
        v-if="flag"
      ></vc-circle-roatating-double>
      <vc-entity>
        <vc-graphics-polyline :positions="positions" :width="5" :material="material"></vc-graphics-polyline>
      </vc-entity>
      <vc-layer-imagery>
        <vc-provider-imagery-tianditu
          mapStyle="img_c"
          token="436ce7e50d27eede2f2929307e6b33c0"
          :maximumLevel="17"
        ></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        position: { lng: 117.217124, lat: 31.809777 },
        positions: [{ lng: 117.217124, lat: 31.809777, height: 0 }, { lng: 117.217124, lat: 31.809777, height: 3000 }],
        material: {
          fabric: {
            type: 'PolylineGlow',
            uniforms: { color: 'red', glowPower: 0.5 }
          }
        },
        flag: true
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        // Easy to test and use
        // vm.flag = false
        // vm.$refs.circle.unload()
        // vm.$refs.circle.load()
        // vm.$refs.circle.reload()
        window.vm = this
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
| position | Object | | `required` Specify the position where the double circle rotation effect entity is added. structure: { lng: number, lat: number, height: number } or Cesium.Cartesian3 |
| show | Boolean | `true` | `optional` Specify whether the double circle rotation effect is visible.|
| height | Number | `undefined` | `optional` Specify the height of the double circle rotation effect circle in meters.|
| radius1 | Number | `1500` | `optional` Specify the radius of the inner circle in meters.|
| radius2 | Number | `3000` | `optional` Specify the radius of the outer circle in meters.|
| material1 | Object\|String\|Array | | `optional` Specify the inner circle material.|
| material2 | Object\|String\|Array | | `optional` Specify the outer circle material.|
| deviationRotation1 | Number | `-0.03` | `optional` Specify the difference in internal rotation angle change. |
| deviationRotation2 | String | `0.05` | `optional` Specify the difference of the rotation angle of the outer circle. |

---

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and an Entity array. |
