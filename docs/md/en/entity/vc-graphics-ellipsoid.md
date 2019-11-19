# EllipsoidGraphics

The `vc-graphics-ellipsoid` component is used to load an ellipsoid or spheres. Need to be used as a subcomponent of `vc-entity`.

## Example

### Load EllipsoidGraphics with `vc-graphics-ellipsoid`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :position="position1" :description="description" :ellipsoid.sync="ellipsoid1">
          <vc-graphics-ellipsoid :radii="radii1" :material="material1" :outline="true"></vc-graphics-ellipsoid>
        </vc-entity>
        <vc-entity :position="position2" :description="description" :ellipsoid.sync="ellipsoid2">
          <vc-graphics-ellipsoid :radii="radii2" :outline="true" :material="material2" :outlineColor="outlineColor2"></vc-graphics-ellipsoid>
        </vc-entity>
        <vc-entity :position="position3" :description="description" :ellipsoid.sync="ellipsoid3">
          <vc-graphics-ellipsoid
            :radii="radii3"
            :fill="false"
            :outline="true"
            :outlineColor="outlineColor3"
            :slicePartitions="24"
            :stackPartitions="36"
            @ready="subReady"
          ></vc-graphics-ellipsoid>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          ellipsoid1: {},
          position1: { lng: 114.0, lat: 40.0, height: 300000.0 },
          radii1: { x: 200000.0, y: 200000.0, z: 300000.0 },
          material1: 'BLUE',

          ellipsoid2: {},
          position2: { lng: 107.0, lat: 40.0, height: 300000.0 },
          radii2: { x: 300000.0, y: 300000.0, z: 300000.0 },
          outlineColor2: 'BLACK',
          material2: {},

          ellipsoid3: {},
          position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
          radii3: { x: 200000.0, y: 200000.0, z: 300000.0 },
          outlineColor3: 'YELLOW'
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.material2 = Cesium.Color.RED.withAlpha(0.5)
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
    <vc-viewer @ready="ready">
      <vc-entity :position="position1" :description="description" :ellipsoid.sync="ellipsoid1">
        <vc-graphics-ellipsoid :radii="radii1" :material="material1" :outline="true"></vc-graphics-ellipsoid>
      </vc-entity>
      <vc-entity :position="position2" :description="description" :ellipsoid.sync="ellipsoid2">
        <vc-graphics-ellipsoid :radii="radii2" :outline="true" :material="material2" :outlineColor="outlineColor2"></vc-graphics-ellipsoid>
      </vc-entity>
      <vc-entity :position="position3" :description="description" :ellipsoid.sync="ellipsoid3">
        <vc-graphics-ellipsoid
          :radii="radii3"
          :fill="false"
          :outline="true"
          :outlineColor="outlineColor3"
          :slicePartitions="24"
          :stackPartitions="36"
          @ready="subReady"
        ></vc-graphics-ellipsoid>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        ellipsoid1: {},
        position1: { lng: 114.0, lat: 40.0, height: 300000.0 },
        radii1: { x: 200000.0, y: 200000.0, z: 300000.0 },
        material1: 'BLUE',

        ellipsoid2: {},
        position2: { lng: 107.0, lat: 40.0, height: 300000.0 },
        radii2: { x: 300000.0, y: 300000.0, z: 300000.0 },
        outlineColor2: 'BLACK',
        material2: {},

        ellipsoid3: {},
        position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
        radii3: { x: 200000.0, y: 200000.0, z: 300000.0 },
        outlineColor3: 'YELLOW'
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material2 = Cesium.Color.RED.withAlpha(0.5)
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
| ---- | ---- | ------- | ----------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the ellipsoid. |
| radii | Object | | `optional` A Cartesian3 Property specifying the radii of the ellipsoid. **structure: { x: number, y: number, z: number }** |
| heightReference | Number | | `optional` A Property specifying what the height from the entity position is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| fill | Boolean | `true` | `optional` A boolean Property specifying whether the ellipsoid is filled with the provided material. |
| material | Object\|String\|Array | `'WHITE'` | `optional` A Property specifying the material used to fill the ellipsoid. |
| outline | Boolean | `false` | `optional` A boolean Property specifying whether the ellipsoid is outlined. |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| stackPartitions | Number | `64` | `optional` A Property specifying the number of stacks. |
| slicePartitions | Number | `64` | `optional` A Property specifying the number of radial slices. |
| subdivisions | Number | `128` | `optional` A Property specifying the number of samples per outline ring, determining the granularity of the curvature. |
| shadows | Number | `0` | `optional` An enum Property specifying whether the ellipsoid casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this ellipsoid will be displayed.  **结构：{ near: number, far: number }** |

---

- Refer to the official document: [EllipsoidGraphics](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGraphics.html)

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| definitionChanged | | Triggers whenever a property or sub-property is changed or modified. |

---
