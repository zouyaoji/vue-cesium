# EllipseGraphics

`ellipse-graphics` Add an entity containing a ellipse object to the viewer as a subcomponent of `entity`. Describes an ellipse defined by a center point and semi-major and semi-minor axes. The ellipse conforms to the curvature of the globe and can be placed on the surface or at altitude and can optionally be extruded into a volume. The center point is determined by the containing Entity. As shown in the example below.

## Examples

### add an EllipseGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :ellipse.sync="ellipse1">
          <ellipse-graphics
            :semiMinorAxis="300000.0"
            :semiMajorAxis="300000.0"
            :height="200000.0"
            :material="material1"
            :outline="true"
          ></ellipse-graphics>
        </entity>
        <entity :position="position2" :description="description" :ellipse.sync="ellipse2">
          <ellipse-graphics :semiMinorAxis="250000.0" :semiMajorAxis="400000.0" :material="material2"></ellipse-graphics>
        </entity>
        <entity :position="position3" :description="description" :ellipse.sync="ellipse3">
          <ellipse-graphics
            :semiMinorAxis="150000.0"
            :semiMajorAxis="300000.0"
            :extrudedHeight="200000.0"
            :rotation="rotation3"
            :material="material3"
            :outline="true"
          ></ellipse-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          ellipse1: {},
          position1: { lng: 111.0, lat: 40.0, height: 150000.0 },
          material1: 'GREEN',

          ellipse2: {},
          position2: { lng: 103.0, lat: 40.0 },
          material2: undefined,

          ellipse3: {},
          position3: { lng: 95.0, lat: 40.0, height: 100000.0 },
          rotation3: 0,
          material3: {}
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.material2 = Cesium.Color.RED.withAlpha(0.5)

          this.material3 = Cesium.Color.BLUE.withAlpha(0.5)
          this.rotation3 = Cesium.Math.toRadians(45)
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
      <entity :position="position1" :description="description" :ellipse.sync="ellipse1">
        <ellipse-graphics
          :semiMinorAxis="300000.0"
          :semiMajorAxis="300000.0"
          :height="200000.0"
          :material="material1"
          :outline="true"
        ></ellipse-graphics>
      </entity>
      <entity :position="position2" :description="description" :ellipse.sync="ellipse2">
        <ellipse-graphics :semiMinorAxis="250000.0" :semiMajorAxis="400000.0" :material="material2"></ellipse-graphics>
      </entity>
      <entity :position="position3" :description="description" :ellipse.sync="ellipse3">
        <ellipse-graphics
          :semiMinorAxis="150000.0"
          :semiMajorAxis="300000.0"
          :extrudedHeight="200000.0"
          :rotation="rotation3"
          :material="material3"
          :outline="true"
        ></ellipse-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        ellipse1: {},
        position1: { lng: 111.0, lat: 40.0, height: 150000.0 },
        material1: 'GREEN',

        ellipse2: {},
        position2: { lng: 103.0, lat: 40.0 },
        material2: undefined,

        ellipse3: {},
        position3: { lng: 95.0, lat: 40.0, height: 100000.0 },
        rotation3: 0,
        material3: {}
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material2 = Cesium.Color.RED.withAlpha(0.5)

        this.material3 = Cesium.Color.BLUE.withAlpha(0.5)
        this.rotation3 = Cesium.Math.toRadians(45)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ------------------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the ellipse. |
| semiMajorAxis | Number | | `optional` The numeric Property specifying the semi-major axis. |
| semiMinorAxis | Number | | `optional` The numeric Property specifying the semi-minor axis. |
| height | Number | `0` | `optional` A numeric Property specifying the altitude of the ellipse relative to the ellipsoid surface. |
| heightReference | Number | | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| extrudedHeight | Number | | `optional` A numeric Property specifying the altitude of the ellipse's extruded face relative to the ellipsoid surface. |
| extrudedHeightReference | Number | | `optional` A Property specifying what the extrudedHeight is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| rotation | Number | `0.0` | `optional` A numeric property specifying the rotation of the ellipse counter-clockwise from north. |
| stRotation | Number\|Object | `0.0` | `optional` A numeric property specifying the rotation of the ellipse texture counter-clockwise from north. |
| granularity | Number | | `optional` A numeric Property specifying the angular distance between points on the ellipse. |
| fill | Boolean | `true` | `optional` A boolean Property specifying whether the ellipse is filled with the provided material. |
| material | Object\|String\|Array | `'white'` | `optional` A Property specifying the material used to fill the ellipse. |
| outline | Boolean | `false` | `optional` A boolean Property specifying whether the ellipse is outlined. |
| outlineColor | Object\|String\|Array | `'black'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| numberOfVerticalLines | Number | `16` | `optional` A numeric Property specifying the number of vertical lines to draw along the perimeter for the outline. |
| shadows | Number | `0` | `optional` An enum Property specifying whether the ellipse casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this ellipse will be displayed. **structure: { near: number, far: number }** |
| classificationType | Number | `2` | `optional` An enum Property specifying whether this ellipse will classify terrain, 3D Tiles, or both when on the ground. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3** |
| zIndex | Number | | `optional` A property specifying the zIndex of the Ellipse. Used for ordering ground geometry. Only has an effect if the ellipse is constant and neither height or exturdedHeight are specified. |

---

- Reference official document [EllipseGraphics](https://cesium.com/docs/cesiumjs-ref-doc/EllipseGraphics.html)

## Events

| name              | parameter        | description                                                                                    |
| ----------------- | ---------------- | ---------------------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer} | Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance. |
| definitionChanged |                  | Gets the event that is raised whenever a property or sub-property is changed or modified.      |
