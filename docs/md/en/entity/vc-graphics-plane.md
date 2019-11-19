# PlaneGraphics

The `vc-graphics-plane` component is used to load a plane. Need to be used as a subcomponent of `vc-entity`.

## Example

### Load PlaneGraphics with `vc-graphics-plane`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :position="position1" :description="description" :plane.sync="planeEntity1">
          <vc-graphics-plane :plane="plane1" :dimensions="dimensions1" :material="material1"></vc-graphics-plane>
        </vc-entity>
        <vc-entity :position="position2" :description="description" :plane.sync="planeEntity2">
          <vc-graphics-plane
            :plane="plane2"
            :dimensions="dimensions2"
            :material="material2"
            :outline="true"
            :outlineColor="outlineColor2"
          ></vc-graphics-plane>
        </vc-entity>
        <vc-entity :position="position3" :description="description" :plane.sync="planeEntity3">
          <vc-graphics-plane
            :plane="plane3"
            :dimensions="dimensions3"
            :fill="false"
            :outline="true"
            :outlineColor="outlineColor3"
            @ready="subReady"
          ></vc-graphics-plane>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          position1: { lng: 114.0, lat: 40.0, height: 300000.0 },
          planeEntity1: {},
          plane1: { normal: { x: 1, y: 0, z: 0 }, distance: 0.0 },
          dimensions1: { x: 400000.0, y: 300000.0 },
          material1: 'BLUE',

          position2: { lng: 107.0, lat: 40.0, height: 300000.0 },
          planeEntity2: {},
          plane2: { normal: { x: 0, y: 1, z: 0 }, distance: 0.0 },
          dimensions2: { x: 400000.0, y: 300000.0 },
          material2: {},
          outlineColor2: 'BLACK',

          position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
          planeEntity3: {},
          plane3: { normal: { x: 0, y: 0, z: 1 }, distance: 0.0 },
          dimensions3: { x: 400000.0, y: 300000.0 },
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
      <vc-entity :position="position1" :description="description" :plane.sync="planeEntity1">
        <vc-graphics-plane :plane="plane1" :dimensions="dimensions1" :material="material1"></vc-graphics-plane>
      </vc-entity>
      <vc-entity :position="position2" :description="description" :plane.sync="planeEntity2">
        <vc-graphics-plane
          :plane="plane2"
          :dimensions="dimensions2"
          :material="material2"
          :outline="true"
          :outlineColor="outlineColor2"
        ></vc-graphics-plane>
      </vc-entity>
      <vc-entity :position="position3" :description="description" :plane.sync="planeEntity3">
        <vc-graphics-plane
          :plane="plane3"
          :dimensions="dimensions3"
          :fill="false"
          :outline="true"
          :outlineColor="outlineColor3"
          @ready="subReady"
        ></vc-graphics-plane>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        position1: { lng: 114.0, lat: 40.0, height: 300000.0 },
        planeEntity1: {},
        plane1: { normal: { x: 1, y: 0, z: 0 }, distance: 0.0 },
        dimensions1: { x: 400000.0, y: 300000.0 },
        material1: 'BLUE',

        position2: { lng: 107.0, lat: 40.0, height: 300000.0 },
        planeEntity2: {},
        plane2: { normal: { x: 0, y: 1, z: 0 }, distance: 0.0 },
        dimensions2: { x: 400000.0, y: 300000.0 },
        material2: {},
        outlineColor2: 'BLACK',

        position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
        planeEntity3: {},
        plane3: { normal: { x: 0, y: 0, z: 1 }, distance: 0.0 },
        dimensions3: { x: 400000.0, y: 300000.0 },
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
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the plane. |
| plane | Object | | `optional` A Plane Property specifying the normal and distance for the plane. **structure: { normal: { x: number, y: number, z: number }, distance: number }** |
| dimensions | Object | | `optional` A Cartesian2 Property specifying the width and height of the plane. **structure: { x: number, y: number }** |
| fill | Boolean | `true` | `optional` A boolean Property specifying whether the plane is filled with the provided material. |
| material | Object\|String\|Array | `'WHITE'` | `optional` A Property specifying the material used to fill the plane. |
| outline | Boolean | `false` | `optional` A boolean Property specifying whether the plane is outlined. |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | Number | `0` | `optional` An enum Property specifying whether the plane casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this plane will be displayed. **structure: { near: number, far: number }** |

---

- Refer to the official document: [PlaneGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PlaneGraphics.html)

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| definitionChanged | | Triggers whenever a property or sub-property is changed or modified. |

---
