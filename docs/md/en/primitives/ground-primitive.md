# GroundPrimitive

`ground-primitive` The component loads the geometry object of the `Primitive API`. According to the Cesium organization, you need to wrap `geometry-instance` as an intermediate component to add the collection object `Geometry`. Compared to `primitive`, `ground-primitive` supports adding geodetic objects, `CircleGeometry`, `CorridorGeometry`, `EllipseGeometry`, `PolygonGeometry`, and `RectangleGeometry`.

## Example

### add a RectangleGeometry to viewer

#### Preview

<doc-preview>
<template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <cesium-terrain-provider></cesium-terrain-provider>
        <ground-primitive :appearance="appearance" :asynchronous="asynchronous" :interleave="interleave">
          <geometry-instance :geometry="geometry">
            <rectangle-geometry :rectangle="rectangle"></rectangle-geometry>
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
          geometry: null,
          image: 'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
          rectangle: {west: 102.5, south: 29.5, east: 106.5,  north: 33.5},
          interleave: true,
          asynchronous: true
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
        play () {
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
    <cesium-viewer @ready="ready">
      <cesium-terrain-provider></cesium-terrain-provider>
      <ground-primitive :appearance="appearance" :asynchronous="asynchronous" :interleave="interleave">
        <geometry-instance :geometry="geometry">
          <rectangle-geometry :rectangle="rectangle"></rectangle-geometry>
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
        geometry: null,
        image: 'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
        rectangle: { west: 102.5, south: 29.5, east: 106.5, north: 33.5 },
        interleave: true,
        asynchronous: true
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

Reference official document [GroundPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/GroundPrimitive.html)

<!-- |属性名|类型|默认值|描述|
|------|-----|-----|----| -->

---

## Events

| name  | parameter        | description                                                                                    |
| ----- | ---------------- | ---------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance. |
