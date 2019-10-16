# ClassificationPrimitive

The `classification-primitive` component loads the geometry object of the `Primitive API`. According to the Cesium organization, you need to wrap `geometry-instance` as an intermediate component to add the collection object `Geometry`. Compared to `primitive` and `ground-primitive` components `classification-primitive` is mainly used to load stereoscopic objects such as `BoxGeometry`, `CylinderGeometry`, `EllipsoidGeometry`, `PolylineVolumeGeometry` and `SphereGeometry`. The `CircleGeometry`, `CorridorGeometry`, `EllipseGeometry`, `PolygonGeometry`, and `RectangleGeometry` require stretching to render properly.

## Example

### Add a polygonGeometry to viewer with classificationPrimitive

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <cesium-terrain-provider></cesium-terrain-provider>
        <classification-primitive :asynchronous="false">
          <geometry-instance  :geometry.sync="geometry" :attributes="attributes">
            <polygon-geometry :polygonHierarchy="polygonHierarchy" :extrudedHeight="extrudedHeight"></polygon-geometry>
          </geometry-instance>
        </classification-primitive>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          appearance: null,
          geometry: null,
          vertexFormat: null,
          attributes: null,
          extrudedHeight: 3000,
          polygonHierarchy: [
            102.1, 29.5,
            106.2, 29.5,
            106.2, 33.5,
            102.1, 33.5
          ]
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          viewer.camera.setView({
            destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
            orientation: {
              heading: 6.20312220367255,
              pitch: -0.9937536846355606,
              roll: 0.002443376981836387
            }
          })
          this.attributes = {
            color : Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))
          }
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
      <classification-primitive :asynchronous="false">
        <geometry-instance  :geometry.sync="geometry" :attributes="attributes">
          <polygon-geometry :polygonHierarchy="polygonHierarchy" :extrudedHeight="extrudedHeight"></polygon-geometry>
        </geometry-instance>
      </classification-primitive>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        appearance: null,
        geometry: null,
        vertexFormat: null,
        attributes: null,
        extrudedHeight: 3000,
        polygonHierarchy: [
          102.1, 29.5,
          106.2, 29.5,
          106.2, 33.5,
          102.1, 33.5
        ]
      }
    },
    methods: {
      ready (cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const {Cesium, viewer} = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
          orientation: {
            heading: 6.20312220367255,
            pitch: -0.9937536846355606,
            roll: 0.002443376981836387
          }
        })
        this.attributes = {
          color : Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))
        }
      }
    }
  }
</script>
```

## Instance Properties

Reference official document  [ClassificationPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html)
<!-- |属性名|类型|默认值|描述|
|------|-----|-----|----|

--- -->

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.|
