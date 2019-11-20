# BoxGeometry

The `vc-geometry-box` component is used to load a box geometry that describes a cube centered at the origin. Need to be used as a subcomponent of `vc-instance-geometry`.

## Example

### Load a BoxGeometry with `vc-geometry-box`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <vc-geometry-box :dimensions="dimensions"></vc-geometry-box>
          </vc-instance-geometry>
        </vc-primitive>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          appearance: null,
          attributes: null,
          geometry: null,
          modelMatrix: null,
          dimensions: { x: 400000.0, y: 300000.0, z: 500000.0 }
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance
          this.attributes = {
            color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.5))
          }
          this.appearance = new Cesium.PerInstanceColorAppearance({
            closed: true,
            translucent: true
          })
          this.modelMatrix = Cesium.Matrix4.multiplyByTranslation(
            Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105.0, 40.0)),
            new Cesium.Cartesian3(0.0, 0.0, 250000),
            new Cesium.Matrix4()
          )
        },
        LEFT_CLICK(movement) {
          const feature = this.cesiumInstance.viewer.scene.pick(movement.position)
          console.log(feature)
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
          <vc-geometry-box :dimensions="dimensions"></vc-geometry-box>
        </vc-instance-geometry>
      </vc-primitive>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: null,
        attributes: null,
        geometry: null,
        modelMatrix: null,
        dimensions: { x: 400000.0, y: 300000.0, z: 500000.0 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        this.attributes = {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.5))
        }
        this.appearance = new Cesium.PerInstanceColorAppearance({
          closed: true,
          translucent: true
        })
        this.modelMatrix = Cesium.Matrix4.multiplyByTranslation(
          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105.0, 40.0)),
          new Cesium.Cartesian3(0.0, 0.0, 250000),
          new Cesium.Matrix4()
        )
      },
      LEFT_CLICK(movement) {
        const feature = this.cesiumInstance.viewer.scene.pick(movement.position)
        console.log(feature)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ------------ | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| dimensions | Object | | `required` The width, depth, and height of the box stored in the x, y, and z coordinates of the Cartesian3, respectively. **structure: { x: number, y: number, z: number }** |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |

---

Refer to the official document: **[BoxGeometry](https://cesium.com/docs/cesiumjs-ref-doc/BoxGeometry.html)**

## Events

| name  | parameter                      | description                                                                                                       |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
