# PolygonGeometry

`polygon-geometry` A description of a polygon on the ellipsoid. The polygon is defined by a polygon hierarchy. Polygon geometry can be rendered with both `Primitive` and `GroundPrimitive`.

## Example

### Add a polygonGeometry to viewer with GroundPrimitive

#### Preview

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
      <cesium-terrain-provider></cesium-terrain-provider>
      <ground-primitive :appearance="appearance">
        <geometry-instance :geometry.sync="geometry" :attributes="attributes">
          <polygon-geometry :polygonHierarchy="polygonHierarchy"></polygon-geometry>
        </geometry-instance>
      </ground-primitive>
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
        polygonHierarchy: [102.1, 29.5, 106.2, 29.5, 106.2, 33.5, 108.2, 35.5, 102.1, 33.5]
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
          orientation: {
            heading: 6.20312220367255,
            pitch: -0.9937536846355606,
            roll: 0.002443376981836387
          }
        })
        this.attributes = {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.4))
        }
        this.appearance = new Cesium.PerInstanceColorAppearance({
          flat: true,
          translucent: true
        })
      }
    }
  }
</script>
```

## Instance Properties

Reference official document [PolygonGeometry](https://cesiumjs.org/Cesium/Build/Documentation/PolygonGeometry.html)

<!-- |属性名|类型|默认值|描述|
|------|-----|-----|----|

--- -->

## Events

| name  | parameter        | description                                                                                    |
| ----- | ---------------- | ---------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance. |
