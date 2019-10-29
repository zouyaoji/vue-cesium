# BoxGeometry

`box-geometry` Describes a cube centered at the origin.

## Example

### add BoxGeometry to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <cesium-terrain-provider></cesium-terrain-provider>
        <primitive :appearance="appearance">
          <geometry-instance :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <box-geometry :dimensions="dimensions"></box-geometry>
          </geometry-instance>
        </primitive>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          appearance: null,
          attributes: null,
          geometry: null,
          modelMatrix: null,
          dimensions: [400000.0, 300000.0, 500000.0]
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          this.attributes = {
            color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.5))
          }
          this.appearance = new Cesium.PerInstanceColorAppearance({
            closed: true,
            translucent : true
          })
          this.modelMatrix = Cesium.Matrix4.multiplyByTranslation(
            Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105.0, 40.0)),
            new Cesium.Cartesian3(0.0, 0.0, 250000), new Cesium.Matrix4())
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready">
      <cesium-terrain-provider></cesium-terrain-provider>
      <primitive :appearance="appearance">
        <geometry-instance :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
          <box-geometry :dimensions="dimensions"></box-geometry>
        </geometry-instance>
      </primitive>
    </cesium-viewer>
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
        dimensions: [400000.0, 300000.0, 500000.0]
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
      }
    }
  }
</script>
```

## Instance Properties

Reference official document [BoxGeometry](https://cesium.com/docs/cesiumjs-ref-doc/BoxGeometry.html)

## Events

| name  | parameter        | description                                                                                 |
| ----- | ---------------- | ------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance. |
