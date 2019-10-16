# PointGraphics

`point-graphics` Add an entity containing a point object to the viewer as a subcomponent of `entity`. Describes a graphical point located at the position of the containing Entity. As shown in the example below.

## Examples

### add a PointGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :point.sync="point1">
          <point-graphics :color="color1" :pixelSize="8"></point-graphics>
        </entity>
        <entity :position="position2" :description="description">
          <point-graphics :color="color2" :pixelSize="16"></point-graphics>
        </entity>
        <entity :position="position3" :description="description">
          <point-graphics :color="color3" :pixelSize="32" @ready="subReady"></point-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          point1: null,
          color1: {},
          position1: { lng: -75.59777, lat: 40.03883 },

          color2: {},
          position2: { lng: -80.5, lat: 35.14 },

          color3: {},
          position3: undefined
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.color1 = Cesium.Color.RED

          this.color2 = Cesium.Color.BLUE

          this.position3 = Cesium.Cartesian3.fromDegrees(-80.12, 25.46)
          this.color3 = Cesium.Color.LIME
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
      <entity :position="position1" :description="description" :point.sync="point1">
        <point-graphics :color="color1" :pixelSize="8"></point-graphics>
      </entity>
      <entity :position="position2" :description="description">
        <point-graphics :color="color2" :pixelSize="16"></point-graphics>
      </entity>
      <entity :position="position3" :description="description">
        <point-graphics :color="color3" :pixelSize="32" @ready="subReady"></point-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        point1: null,
        color1: {},
        position1: { lng: -75.59777, lat: 40.03883 },

        color2: {},
        position2: { lng: -80.5, lat: 35.14 },

        color3: {},
        position3: undefined
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.color1 = Cesium.Color.RED

        this.color2 = Cesium.Color.BLUE

        this.position3 = Cesium.Cartesian3.fromDegrees(-80.12, 25.46)
        this.color3 = Cesium.Color.LIME
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
| ------------------------ | ------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the point. |
| pixelSize | Number | `1` | `optional` A numeric Property specifying the size in pixels. |
| heightReference | Number | `0` | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| color | Object | `'WHITE'` | `optional` A Property specifying the Color of the point. |
| outlineColor | Object | `'BLACK'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `0` | `optional` A numeric Property specifying the the outline width in pixels. |
| scaleByDistance | Object | | `optional` A NearFarScalar Property used to scale the point based on distance. **structure: { near: number, nearValue: number, far: number, farValue: number }** |
| translucencyByDistance | Object | | `optional` A NearFarScalar Property used to set translucency based on distance from the camera. **structure: { near: number, nearValue: number, far: number, farValue: number }** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this point will be displayed. **structure: { near: number, far: number }** |
| disableDepthTestDistance | Number | | `optional` A Property specifying the distance from the camera at which to disable the depth test to. |

---

- Reference official document [PointGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PointGraphics.html)

## Events

| name              | parameter        | description                                                                                    |
| ----------------- | ---------------- | ---------------------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer} | Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance. |
| definitionChanged |                  | Gets the event that is raised whenever a property or sub-property is changed or modified.      |
