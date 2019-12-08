# GeometryInstance

The `vc-instance-geometry` component is used to load a geometry. Geometry instancing allows one Geometry object to be positions in several different locations and colored uniquely. For example, one BoxGeometry can be instanced several times, each with a different modelMatrix to change its position, rotation, and scale.

## Example

### Load GeometryInstance with `vc-instance-geometry`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry
            id="top"
            :geometry="geometry"
            :color="color"
            :attributes="attributes"
            :modelMatrix="modelMatrix1"
          ></vc-instance-geometry>
          <vc-instance-geometry
            id="bottom"
            :geometry="geometry"
            :color="color"
            :attributes="attributes"
            :modelMatrix="modelMatrix2"
          ></vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance2" :geometryInstances.sync="geometryInstances">
          <vc-instance-geometry>
            <vc-geometry-rectangle :rectangle="rectangle"></vc-geometry-rectangle>
          </vc-instance-geometry>
          <vc-instance-geometry :geometry.sync="geometry2">
            <vc-geometry-polygon :polygonHierarchy="polygonHierarchy" :height="height"></vc-geometry-polygon>
          </vc-instance-geometry>
        </vc-primitive>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          appearance: {},
          geometry: {},
          color: {},
          attributes: {},
          modelMatrix1: {},
          modelMatrix2: {},
          appearance2: null,
          geometry2: null,
          geometryInstances: null,
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
          this.appearance = new Cesium.PerInstanceColorAppearance()
          this.attributes = {
            color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
          }
          this.geometry = Cesium.BoxGeometry.fromDimensions({
            vertexFormat: Cesium.VertexFormat.POSITION_AND_NORMAL,
            dimensions: new Cesium.Cartesian3(1000000.0, 1000000.0, 500000.0)
          })

          this.modelMatrix1 = Cesium.Matrix4.multiplyByTranslation(
            Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),
            new Cesium.Cartesian3(0.0, 0.0, 100000.0),
            new Cesium.Matrix4()
          )
          this.modelMatrix2 = Cesium.Matrix4.multiplyByTranslation(
            Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),
            new Cesium.Cartesian3(0.0, 0.0, 1500000.0),
            new Cesium.Matrix4()
          ),
          this.appearance2 = new Cesium.MaterialAppearance({
            material: Cesium.Material.fromType('Checkerboard', {
              repeat: new Cesium.Cartesian2(20.0, 6.0)
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
    <vc-viewer @ready="ready">
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry
          id="top"
          :geometry="geometry"
          :color="color"
          :attributes="attributes"
          :modelMatrix="modelMatrix1"
        ></vc-instance-geometry>
        <vc-instance-geometry
          id="bottom"
          :geometry="geometry"
          :color="color"
          :attributes="attributes"
          :modelMatrix="modelMatrix2"
        ></vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance2" :geometryInstances.sync="geometryInstances">
        <vc-instance-geometry>
          <vc-geometry-rectangle :rectangle="rectangle"></vc-geometry-rectangle>
        </vc-instance-geometry>
        <vc-instance-geometry :geometry.sync="geometry2">
          <vc-geometry-polygon :polygonHierarchy="polygonHierarchy" :height="height"></vc-geometry-polygon>
        </vc-instance-geometry>
      </vc-primitive>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: {},
        geometry: {},
        color: {},
        attributes: {},
        modelMatrix1: {},
        modelMatrix2: {},
        appearance2: null,
        geometry2: null,
        geometryInstances: null,
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
        this.appearance = new Cesium.PerInstanceColorAppearance()
        this.attributes = {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
        }
        this.geometry = Cesium.BoxGeometry.fromDimensions({
          vertexFormat: Cesium.VertexFormat.POSITION_AND_NORMAL,
          dimensions: new Cesium.Cartesian3(1000000.0, 1000000.0, 500000.0)
        })

        this.modelMatrix1 = Cesium.Matrix4.multiplyByTranslation(
          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),
          new Cesium.Cartesian3(0.0, 0.0, 100000.0),
          new Cesium.Matrix4()
        )
        ;(this.modelMatrix2 = Cesium.Matrix4.multiplyByTranslation(
          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),
          new Cesium.Cartesian3(0.0, 0.0, 1500000.0),
          new Cesium.Matrix4()
        )),
          (this.appearance2 = new Cesium.MaterialAppearance({
            material: Cesium.Material.fromType('Checkerboard', {
              repeat: new Cesium.Cartesian2(20.0, 6.0)
            }),
            materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
          }))
      }
    }
  }
</script>
```

## Instance Properties

| name        | type   | default | description                                                                                            |
| ----------- | ------ | ------- | ------------------------------------------------------------------------------------------------------ |
| geometry    | Object |         | `optional` The geometry to instance.                                                                   |
| modelMatrix | Object |         | `optional` The model matrix that transforms to transform the geometry from model to world coordinates. |
| id          | Object |         | `optional` A user-defined object to return when the instance is picked with `Scene#pick`.              |
| attributes  | Object |         | `optional` Per-instance attributes like a show or color attribute shown in the example below.          |

---

Refer to the official document: **[GeometryInstance](https://cesium.com/docs/cesiumjs-ref-doc/GeometryInstance.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
