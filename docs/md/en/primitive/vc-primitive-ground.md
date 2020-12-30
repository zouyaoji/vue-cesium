# GroundPrimitive

The `vc-primitive-ground` component is used to load a ground primitive. It represents geometry draped over terrain or 3D Tiles in the Scene. A primitive combines geometry instances with an Appearance that describes the full shading, including Material and RenderState. Roughly, the geometry instance defines the structure and placement, and the appearance defines the visual characteristics. Decoupling geometry and appearance allows us to mix and match most of them and add a new geometry or appearance independently of each other. Valid geometries are CircleGeometry, CorridorGeometry, EllipseGeometry, PolygonGeometry, and RectangleGeometry.

## Example

### Load GroundPrimitive with `vc-primitive-ground`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
        <vc-primitive-ground :appearance="appearance" :asynchronous="asynchronous" :interleave="interleave">
          <vc-instance-geometry :geometry="geometry">
            <vc-geometry-rectangle :rectangle="rectangle"></vc-geometry-rectangle>
          </vc-instance-geometry>
        </vc-primitive-ground>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          appearance: null,
          geometry: null,
          image: 'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
          rectangle: { west: 102.5, south: 29.5, east: 106.5, north: 33.5 },
          interleave: true,
          asynchronous: false
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
          this.appearance = new Cesium.MaterialAppearance({
            material: new Cesium.Material({
              fabric: {
                type: 'Image',
                uniforms: {
                  image: this.image
                }
              }
            })
          })
          this.play()
        },
        play() {
          let urls = [
            'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
            'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/2.png',
            'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/3.png',
            'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/4.png',
            'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/5.png'
          ]
          let i = 0
          let _this = this
          setInterval(function() {
            _this.appearance.material.uniforms.image = urls[i]
            i++
            if (i === 5) i = 0
          }, 500)
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
      <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
      <vc-primitive-ground :appearance="appearance" :asynchronous="asynchronous" :interleave="interleave">
        <vc-instance-geometry :geometry="geometry">
          <vc-geometry-rectangle :rectangle="rectangle"></vc-geometry-rectangle>
        </vc-instance-geometry>
      </vc-primitive-ground>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: null,
        geometry: null,
        image: 'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
        rectangle: { west: 102.5, south: 29.5, east: 106.5, north: 33.5 },
        interleave: true,
        asynchronous: false
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
        this.appearance = new Cesium.MaterialAppearance({
          material: new Cesium.Material({
            fabric: {
              type: 'Image',
              uniforms: {
                image: this.image
              }
            }
          })
        })
        this.play()
      },
      play() {
        let urls = [
          'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
          'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/2.png',
          'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/3.png',
          'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/4.png',
          'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/5.png'
        ]
        let i = 0
        let _this = this
        setInterval(function() {
          _this.appearance.material.uniforms.image = urls[i]
          i++
          if (i === 5) i = 0
        }, 500)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ------------------- | ------------- | ------- | ------------------------------------------------------------------------------------ |
| geometryInstances | Object\|Array | | `optional` The geometry instances to render. |
| appearance | Object | | `optional` The appearance used to render the primitive. Defaults to a flat PerInstanceColorAppearance when GeometryInstances have a color attribute. |
| show | Boolean | `true` | `optional` Determines if this primitive will be shown. |
| vertexCacheOptimize | Boolean | `false` | `optional` When true, geometry vertices are optimized for the pre and post-vertex-shader caches. |
| interleave | Boolean | `false` | `optional` When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time. |
| compressVertices | Boolean | `true` | `optional` When true, the geometry vertices are compressed, which will save memory. |
| releaseGeometryInstances | Boolean | `true` | `optional` When true, the primitive does not keep a reference to the input geometryInstances to save memory. |
| allowPicking | Boolean | `true` | `optional` When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved. |
| asynchronous | Boolean | `true` | `optional` Determines if the primitive will be created asynchronously or block until ready.|
| classificationType | Number | `2` | `optional`Determines whether terrain, 3D Tiles or both will be classified. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |
| debugShowBoundingVolume | Boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. |
| debugShowShadowVolume | Boolean | `false` | `optional` For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation for the volumes to be created before the geometry is released or options.releaseGeometryInstance must be false. |

---

Refer to the official document: **[GroundPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/GroundPrimitive.html)**

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
