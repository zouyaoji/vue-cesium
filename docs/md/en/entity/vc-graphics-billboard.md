# BillboardGraphics

The `vc-graphics-billboard` component is used to load billboard (a two dimensional icon) and needs to be used as a subcomponent of `vc-entity`.

## Example

### Load a BillboardGraphics with vc-graphics-billboard

#### Preview

<doc-preview>
 <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :position="position" :description="description" :id="id" :billboard.sync="billboard">
           <vc-graphics-billboard
            :image="image"
            :scale="0.1"
            :show="show"
            :distanceDisplayCondition="distanceDisplayCondition"
            :horizontalOrigin="horizontalOrigin"
          ></vc-graphics-billboard>
        </vc-entity>
      </vc-viewer>
      <div class="demo-tool">
        <span>{{ show ? 'Hide' : 'Show' }}</span>
        <md-switch v-model="show"></md-switch>
      </div>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          id: 'Hello Vue Cesium',
          description: 'This is a billboard',
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          position: { lng: 90, lat: 40, height: 10000 },
          billboard: {},
          show: true,
          distanceDisplayCondition: { near: 0, far: 20000000 },
          horizontalOrigin: 0
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
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
      <vc-entity :position="position" :description="description" :id="id" :billboard.sync="billboard">
        <vc-graphics-billboard
          :image="image"
          :scale="0.1"
          :show="show"
          :distanceDisplayCondition="distanceDisplayCondition"
          :horizontalOrigin="horizontalOrigin"
        ></vc-graphics-billboard>
      </vc-entity>
    </vc-viewer>
    <div class="demo-tool">
      <span>{{ show ? 'Hide' : 'Show' }}</span>
      <md-switch v-model="show"></md-switch>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: 'Hello Vue Cesium',
        description: 'This is a billboard',
        image: 'https://zouyaoji.top/vue-cesium/favicon.png',
        position: { lng: 90, lat: 40, height: 10000 },
        billboard: {},
        show: true,
        distanceDisplayCondition: { near: 0, far: 20000000 },
        horizontalOrigin: 0
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the billboard. |
| image | String\|Object | | `optional` A Property specifying the Image, URI, or Canvas to use for the billboard. |
| scale | Number | `1.0` | `optional` A numeric Property specifying the scale to apply to the image size. |
| pixelOffset | Object | `{x: 0, y: 0}` | `optional` A Cartesian2 Property specifying the pixel offset. **structure: { x: number, y: number }**|
| eyeOffset | Object | `{x: 0, y: 0, z: 0}` | `optional` A Cartesian3 Property specifying the eye offset. |
| horizontalOrigin | Number | `0` | `optional` A Property specifying the HorizontalOrigin. **CENTER: 0, LEFT: 1, RIGHT: -1** |
| verticalOrigin | Number | `0` | `optional` A Property specifying the VerticalOrigin. **CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1** |
| heightReference | Number | `0` | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| color | Object\|String | `'white'` | `optional` A Property specifying the tint Color of the image. |
| rotation | Number | `0` | `optional` A numeric Property specifying the rotation about the alignedAxis. **structure: { x: number, y: number, z: number }** |
| alignedAxis | Object | `{x: 0, y: 0, z: 0}` | `optional` A Cartesian3 Property specifying the unit vector axis of rotation. |
| sizeInMeters | Boolean | | `optional` A boolean Property specifying whether this billboard's size should be measured in meters. |
| width | Number | | `optional` A numeric Property specifying the width of the billboard in pixels, overriding the native size. |
| height | Number | | `optional` A numeric Property specifying the height of the billboard in pixels, overriding the native size. |
| scaleByDistance | Object | | `optional` A NearFarScalar Property used to scale the point based on distance from the camera. **structure: { near: number, nearValue: number, far: number, farValue: number }** |
| translucencyByDistance | Object | | `optional` A NearFarScalar Property used to set translucency based on distance from the camera. **structure: { near: number, nearValue: number, far: number, farValue: number }** |
| pixelOffsetScaleByDistance | Object | | `optional` A NearFarScalar Property used to set pixelOffset based on distance from the camera. **structure: { near: number, nearValue: number, far: number, farValue: number }** |
| imageSubRegion | Object | | `optional` A Property specifying a BoundingRectangle that defines a sub-region of the image to use for the billboard, rather than the entire image, measured in pixels from the bottom-left. |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this billboard will be displayed. **structure: { near: number, far: number }** |
| disableDepthTestDistance | Number | | `optional` A Property specifying the distance from the camera at which to disable the depth test to. |

---

- Refer to the official document: [BillboardGraphics](https://cesium.com/docs/cesiumjs-ref-doc/BillboardGraphics.html)

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| definitionChanged | | Triggers whenever a property or sub-property is changed or modified. |

---
