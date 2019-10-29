# RectangleGraphics

`rectangle-graphics` Add an entity containing a rectangle object to the viewer as a subcomponent of `entity`. Describes graphics for a Rectangle. The rectangle conforms to the curvature of the globe and can be placed on the surface or at altitude and can optionally be extruded into a volume. As shown in the example below.

## Examples

### add a RectangleGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :description="description" :rectangle.sync="rectangle1">
          <rectangle-graphics :coordinates="coordinates1" :material="material1"></rectangle-graphics>
        </entity>
        <entity :description="description" :rectangle.sync="rectangle2">
          <rectangle-graphics
            :coordinates="coordinates2"
            :material="material2"
            :rotation="rotation2"
            :extrudedHeight="300000.0"
            :height="100000.0"
            :outline="true"
            :outlineColor="outlineColor2"
          ></rectangle-graphics>
        </entity>
        <entity :description="description" :rectangle.sync="rectangle3">
          <rectangle-graphics
            :coordinates="coordinates3"
            :material="material3"
            :rotation="rotation3"
            :stRotation="stRotation3"
            :classificationType="classificationType3"
            @ready="subReady"
          ></rectangle-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          rotation: 0,
          rectangle1: {},
          coordinates1: { west: -110, south: 20, east: -80, north: 25 },
          material1: {},

          rectangle2: {},
          coordinates2: { west: -110, south: 30, east: -100, north: 40 },
          material2: {},
          rotation2: {},
          outlineColor2: {},

          rectangle3: {},
          coordinates3: { west: -92.0, south: 30.0, east: -82.0, north: 40.0 },
          material3: {},
          rotation3: {},
          stRotation3: {},
          classificationType3: 0
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.rotation = Cesium.Math.toRadians(30)
          this.material1 = Cesium.Color.RED.withAlpha(0.5)

          this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
          this.rotation2 = Cesium.Math.toRadians(45)
          this.outlineColor2 = Cesium.Color.BLACK

          this.material3 = 'https://zouyaoji.top/vue-cesium/favicon.png'
          this.outlineColor3 = `BLACK`
          this.rotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
          this.stRotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
          this.classificationType3 = Cesium.ClassificationType.TERRAIN
        },
        getRotationValue() {
          this.rotation += 0.005
          return this.rotation
        },
        subReady(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
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
    <cesium-viewer @ready="ready">
      <entity :description="description" :rectangle.sync="rectangle1">
        <rectangle-graphics :coordinates="coordinates1" :material="material1"></rectangle-graphics>
      </entity>
      <entity :description="description" :rectangle.sync="rectangle2">
        <rectangle-graphics
          :coordinates="coordinates2"
          :material="material2"
          :rotation="rotation2"
          :extrudedHeight="300000.0"
          :height="100000.0"
          :outline="true"
          :outlineColor="outlineColor2"
        ></rectangle-graphics>
      </entity>
      <entity :description="description" :rectangle.sync="rectangle3">
        <rectangle-graphics
          :coordinates="coordinates3"
          :material="material3"
          :rotation="rotation3"
          :stRotation="stRotation3"
          :classificationType="classificationType3"
          @ready="subReady"
        ></rectangle-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        rotation: 0,
        rectangle1: {},
        coordinates1: { west: -110, south: 20, east: -80, north: 25 },
        material1: {},

        rectangle2: {},
        coordinates2: { west: -110, south: 30, east: -100, north: 40 },
        material2: {},
        rotation2: {},
        outlineColor2: {},

        rectangle3: {},
        coordinates3: { west: -92.0, south: 30.0, east: -82.0, north: 40.0 },
        material3: {},
        rotation3: {},
        stRotation3: {},
        classificationType3: 0
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.rotation = Cesium.Math.toRadians(30)
        this.material1 = Cesium.Color.RED.withAlpha(0.5)

        this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
        this.rotation2 = Cesium.Math.toRadians(45)
        this.outlineColor2 = Cesium.Color.BLACK

        this.material3 = 'https://zouyaoji.top/vue-cesium/favicon.png'
        this.outlineColor3 = `BLACK`
        this.rotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
        this.stRotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
        this.classificationType3 = Cesium.ClassificationType.TERRAIN
      },
      getRotationValue() {
        this.rotation += 0.005
        return this.rotation
      },
      subReady(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.zoomTo(viewer.entities)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ------------------------ | ------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the rectangle. |
| coordinates | Object | | `optional` The Property specifying the Rectangle. **structure: { west: number, south: number, east: number, north: number } in degrees** |
| height | Number | `0` | `optional` A numeric Property specifying the altitude of the rectangle relative to the ellipsoid surface. |
| heightReference | Number | `true` | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| extrudedHeight | Number | | `optional` A numeric Property specifying the altitude of the rectangle's extruded face relative to the ellipsoid surface. |
| extrudedHeightReference | Number | | `optional` A Property specifying what the extrudedHeight is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| rotation | Number | `0.0` | `optional` A numeric property specifying the rotation of the rectangle clockwise from north. |
| stRotation | Number | `0.0` | `optional` A numeric property specifying the rotation of the rectangle texture counter-clockwise from north. |
| granularity | Number | | `optional` A numeric Property specifying the angular distance between points on the rectangle. |
| fill | Boolean | `true` | `optional` A boolean Property specifying whether the rectangle is filled with the provided material. |
| material | Object\|String\|Array | `'WHITE'` | `optional` A Property specifying the material used to fill the rectangle. |
| outline | Boolean | `false` | `optional` A boolean Property specifying whether the rectangle is outlined. |
| outlineColor | Object\|String\|Array | `'BALCK'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | Number | `0` | `optional` An enum Property specifying whether the rectangle casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this box will be displayed. **structure: { near: number, far: number }** |
| classificationType | Number | `2` | `optional` An enum Property specifying whether this rectangle will classify terrain, 3D Tiles, or both when on the ground. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3** |
| zIndex | Number | `0` | `optional` A Property specifying the zIndex used for ordering ground geometry. Only has an effect if the rectangle is constant and neither height or extrudedHeight are specified. |

---

> `coordinates` can be `Cesium.Rectangle` or an array of latitude and longitude describing the rectangle structure [west,south,east,north]

- Reference official document [RectangleGraphics](https://cesium.com/docs/cesiumjs-ref-doc/RectangleGraphics.html)

## Events

| name  | parameter        | description                                                                                 |
| ----- | ---------------- | ------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance. |
