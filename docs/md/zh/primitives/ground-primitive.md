# GroundPrimitive图元

`ground-primitive`组件加载`Primitive API`的几何对象。按照Cesium组织方式，需要包裹`geometry-instance`作为中间组件添加集合对象`Geometry`。相比`primitive`，`ground-primitive`支持添加贴地几何对象，`CircleGeometry`、 `CorridorGeometry`、 `EllipseGeometry`、 `PolygonGeometry`以及`RectangleGeometry`。

## 示例

### 添加RectangleGeometry到场景

#### 预览

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
          geometryInstances: null,
          appearance: null,
          geometry: null,
          image: 'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
          rectangle: {west: 102.5, south: 29.5, east: 106.5,  north: 33.5},
          interleave: false,
          asynchronous: false
        }
      },
      watch: {
        image (val) {
          this.appearance = new Cesium.MaterialAppearance({
            material: new Cesium.Material({
              fabric: {
                type: 'Image',
                uniforms: {
                  image: val
                }
              }
            })
          })
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

#### 代码

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
    data () {
      return {
        geometryInstances: null,
        appearance: null,
        geometry: null,
        image: 'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
        rectangle: {west: 102.5, south: 29.5, east: 106.5,  north: 33.5},
        interleave: false,
        asynchronous: false
      }
    },
    watch: {
      image (val) {
        this.appearance = new Cesium.MaterialAppearance({
          material: new Cesium.Material({
            fabric: {
              type: 'Image',
              uniforms: {
                image: val
              }
            }
          })
        })
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
```

## 属性

参考官方文档 [GroundPrimitive](https://cesiumjs.org/Cesium/Build/Documentation/GroundPrimitive.html)
<!-- |属性名|类型|默认值|描述|
|------|-----|-----|----|

--- -->

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
