# PolygonGeometry

`polygon-geometry` A description of a polygon on the ellipsoid. The polygon is defined by a polygon hierarchy. Polygon geometry can be rendered with both `Primitive` and `GroundPrimitive`.

## Example

### Add a polygonGeometry to viewer with GroundPrimitive

#### Preview

<doc-preview>
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
      data () {
        return {
          appearance: null,
          attributes: null,
          geometry: null,
          polygonHierarchy: [
            102.1, 29.5,
            106.2, 29.5,
            106.2, 33.5,
            108.2, 35.5,
            102.1, 33.5
          ]
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          viewer.camera.setView({
            destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
            orientation: {
              heading: 6.20312220367255,
              pitch: -0.9937536846355606,
              roll: 0.002443376981836387
            }
          })
          this.attributes = {
            color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.4))
          }
          this.appearance = new Cesium.PerInstanceColorAppearance({
            flat : true,
            translucent : true
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
    data () {
      return {
        appearance: null,
        attributes: null,
        geometry: null,
        polygonHierarchy: [
          102.1, 29.5,
          106.2, 29.5,
          106.2, 33.5,
          108.2, 35.5,
          102.1, 33.5
        ]
      }
    },
    methods: {
      ready (cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const {Cesium, viewer} = this.cesiumInstance
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
          orientation: {
            heading: 6.20312220367255,
            pitch: -0.9937536846355606,
            roll: 0.002443376981836387
          }
        })
        this.attributes = {
          color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.4))
        }
        this.appearance = new Cesium.PerInstanceColorAppearance({
          flat : true,
          translucent : true
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

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.|
