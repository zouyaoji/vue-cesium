# RectangleGeometry

`rectangle-geometry` A description of a cartographic rectangle on an ellipsoid centered at the origin. Rectangle geometry can be rendered with both `Primitive` and `GroundPrimitive`.

## Examples

### add a rectangleGeometry to viewer

#### preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <primitive :appearance="appearance">
          <geometry-instance>
            <rectangle-geometry :rectangle="rectangle"></rectangle-geometry>
          </geometry-instance>
          <geometry-instance :geometry.sync="geometry">
            <polygon-geometry :polygonHierarchy="polygonHierarchy" :height="height"></polygon-geometry>
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
          geometry: null,
          polygonHierarchy: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 108.2, lat: 35.5 },
            { lng: 102.1, lat: 33.5 }
          ],
          height: 200,
          rectangle: {west: 110.5, south: 29.5, east: 115.5,  north: 34.5}
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          this.appearance = new Cesium.MaterialAppearance({
            material: Cesium.Material.fromType('Checkerboard', {
              repeat : new Cesium.Cartesian2(20.0, 6.0)
            }),
            materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
          })
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
      <primitive :appearance="appearance">
        <geometry-instance>
          <rectangle-geometry :rectangle="rectangle"></rectangle-geometry>
        </geometry-instance>
        <geometry-instance :geometry.sync="geometry">
          <polygon-geometry :polygonHierarchy="polygonHierarchy" :height="height"></polygon-geometry>
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
        geometry: null,
        polygonHierarchy: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 108.2, lat: 35.5 },
          { lng: 102.1, lat: 33.5 }
        ],
        height: 200,
        rectangle: { west: 110.5, south: 29.5, east: 115.5, north: 34.5 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        this.appearance = new Cesium.MaterialAppearance({
          material: Cesium.Material.fromType('Checkerboard', {
            repeat: new Cesium.Cartesian2(20.0, 6.0)
          }),
          materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
        })
      }
    }
  }
</script>
```

## Instance Properties

Reference official document [RectangleGeometry](https://cesiumjs.org/Cesium/Build/Documentation/RectangleGeometry.html)

<!-- |name|type|default|description|
|------|-----|-----|----|

--- -->

## Events

| name  | parameter        | description                                                                                   |
| ----- | ---------------- | --------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when Cesium3DTileset is ready. It returns a core class of Cesium, a viewer instance. |
