# Primitive

The `vc-primitive` component is used to load a primitive that represents geometry in the Scene.

## Example

### Load Primitive with `vc-primitive`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive @click="clicked" :appearance="appearance" :geometryInstances="geometryInstances"></vc-primitive>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          appearance: null,
          geometryInstances: null,
          geometry: null,
          polygonHierarchy: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 108.2, lat: 35.5 },
            { lng: 102.1, lat: 33.5 }
          ],
          height: 200,
          rectangle: { west: 100.5, south: 29.5, east: 115.5, north: 35.5 }
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance

          this.geometryInstances = new Cesium.GeometryInstance({
            geometry: new Cesium.RectangleGeometry({
              rectangle: Cesium.Rectangle.fromDegrees(
                this.rectangle.west,
                this.rectangle.south,
                this.rectangle.east,
                this.rectangle.north
              )
            })
          })
          this.appearance = new Cesium.MaterialAppearance({
            material: Cesium.Material.fromType('Checkerboard', {
              repeat: new Cesium.Cartesian2(20.0, 6.0)
            }),
            materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
          })
        },
        clicked(e) {
          console.log(e)
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
      <vc-primitive @click="clicked" :appearance="appearance" :geometryInstances="geometryInstances"></vc-primitive>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: null,
        geometryInstances: null,
        geometry: null,
        polygonHierarchy: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 108.2, lat: 35.5 },
          { lng: 102.1, lat: 33.5 }
        ],
        height: 200,
        rectangle: { west: 100.5, south: 29.5, east: 115.5, north: 35.5 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance

        this.geometryInstances = new Cesium.GeometryInstance({
          geometry: new Cesium.RectangleGeometry({
            rectangle: Cesium.Rectangle.fromDegrees(
              this.rectangle.west,
              this.rectangle.south,
              this.rectangle.east,
              this.rectangle.north
            )
          })
        })
        this.appearance = new Cesium.MaterialAppearance({
          material: Cesium.Material.fromType('Checkerboard', {
            repeat: new Cesium.Cartesian2(20.0, 6.0)
          }),
          materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
        })
      },
      clicked(e) {
        console.log(e)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ------------------- | ------------- | ------- | ------------------------------------------------------------------------------------ |
| geometryInstances | Object\|Array | | `optional` The geometry instances - or a single geometry instance - to render. |
| appearance | Object | | `optional` The appearance used to render the primitive. |
| depthFailAppearance | Object | | `optional` The appearance used to shade this primitive when it fails the depth test. |
| show | Boolean | `true` | `optional` Determines if this primitive will be shown. |
| modelMatrix | Object | | `optional` The 4x4 transformation matrix that transforms the primitive (all geometry instances) from model to world coordinates. |
| vertexCacheOptimize | Boolean | `false` | `optional` When true, geometry vertices are optimized for the pre and post-vertex-shader caches. |
| interleave | Boolean | `false` | `optional` When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time. |
| compressVertices | Boolean | `true` | `optional` When true, the geometry vertices are compressed, which will save memory. |
| releaseGeometryInstances | Boolean | `true` | `optional` When true, the primitive does not keep a reference to the input geometryInstances to save memory. |
| allowPicking | Boolean | `true` | `optional` When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved. |
| cull | Boolean | `true` | `optional` When true, the renderer frustum culls and horizon culls the primitive's commands based on their bounding volume. Set this to false for a small performance gain if you are manually culling the primitive. |
| asynchronous | Boolean | `true` | `optional` Determines if the primitive will be created asynchronously or block until ready. |
| debugShowBoundingVolume | Boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. |
| shadows | Number | `0` | `optional` Determines whether this primitive casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |

---

Refer to the official document: **[Primitive](https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| mousedown | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse is pressed on this primitive. |
| mouseup | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse bounces on the primitive. |
| click | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse clicks on the primitive. |
| clickout | {button,surfacePosition,pickedFeature,type,windowPosition} | Touch when the mouse clicks outside the primitive.|
| dblclick | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the left mouse button double-clicks the primitive. |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves on this primitive. |
| mouseover | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves to this primitive. |
| mouseout | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves out of the primitive. |

---
