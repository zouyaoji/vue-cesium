# Primitive

`primitive` The component loads the geometry object of the `Primitive API`. According to the Cesium organization, you need to wrap `geometry-instance` as an intermediate component to add the collection object `Geometry`.

## Example

### add a RectangleGeometry to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <cesium-terrain-provider></cesium-terrain-provider>
        <primitive :appearance="appearance">
          <geometry-instance :geometry="geometry">
            <rectangle-geometry :rectangle="rectangle"></rectangle-geometry>
          </geometry-instance>
        </primitive>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          geometryInstances: null,
          appearance: null,
          geometry: null,
          image: 'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
          rectangle: {west: 102.5, south: 29.5, east: 106.5,  north: 33.5}
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
      <primitive :appearance="appearance">
        <geometry-instance :geometry="geometry">
          <rectangle-geometry :rectangle="rectangle"></rectangle-geometry>
        </geometry-instance>
      </primitive>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        geometryInstances: null,
        appearance: null,
        geometry: null,
        image: 'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
        rectangle: {west: 102.5, south: 29.5, east: 106.5,  north: 33.5}
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
      }
    }
  }
</script>
```

## Instance Properties

Reference official document [Primitive](https://cesiumjs.org/Cesium/Build/Documentation/Primitive.html)

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.|
