# EarthSDK Demo

When developing with CesiumLab's EarthSDK, you only need to specify the EarthSDK path through the configuration item `cesiumPath` when introducing vue-cesium:

```js
Vue.use(VueCesium, {
  cesiumPath: './statics/EarthSDK/XbsjEarth/XbsjEarth.js'
})

// or
import { Viewer } from 'vue-cesium'
Vue.use(Viewer, {
  cesiumPath: './statics/EarthSDK/XbsjEarth/XbsjEarth.js'
})
```

Or you can directly specify the `cesiumPath` attribute on the `vc-viewer` component. **Note** is that if you want to use the EarthSDK API, you can only use the EarthSDK method to load it, and you can't put it in the Cesium native method. `vc-viewer` will return {Cesium, viewer, earth} after loading successfully, and you can use the `earth` for related development, as shown in the following example:

## Example

### Load the vc-viewer component with EarthSDK

#### Preview

<doc-preview>
  <template>
    <div class="viewer" ref="viewerContainer">
      <vc-viewer
        ref="vcViewer"
        :animation="animation"
        :baseLayerPicker="baseLayerPicker"
        :timeline="timeline"
        :cesiumPath="cesiumPath"
        :fullscreenButton="fullscreenButton"
        :fullscreenElement="fullscreenElement"
        :infoBox="infoBox"
        @ready="ready"
      >
        <vc-navigation></vc-navigation>
        <vc-layer-imagery>
          <vc-provider-imagery-tianditu mapStyle="img_c" :token="tk"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
        <vc-layer-imagery ref="layerText">
          <vc-provider-imagery-tianditu mapStyle="cia_c" :token="tk"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>animation</span>
        <md-switch v-model="animation"></md-switch>
        <span>timeline</span>
        <md-switch v-model="timeline"></md-switch>
        <span>baseLayerPicker</span>
        <md-switch v-model="baseLayerPicker"></md-switch>
        <span>fullscreenButton</span>
        <md-switch v-model="fullscreenButton"></md-switch>
        <span>infoBox</span>
        <md-switch v-model="infoBox"></md-switch>
      </div>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          animation: true,
          timeline: true,
          baseLayerPicker: false,
          fullscreenButton: true,
          infoBox: true,
          fullscreenElement: document.body,
          tk: '436ce7e50d27eede2f2929307e6b33c0',
          cesiumPath: './statics/EarthSDK/XbsjEarth/XbsjEarth.js'
        }
      },
      mounted() {
        this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {
          console.log('viewer is loaded.')
        })
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer, earth } = cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          viewer.scene.globe.enableLighting = true
          this.fullscreenElement = this.$refs.viewerContainer
          viewer.entities.add({
            id: '成都欢迎你',
            position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
            billboard: new Cesium.BillboardGraphics({
              image: 'https://zouyaoji.top/vue-cesium/favicon.png',
              scale: 0.1
            }),
            label: new Cesium.LabelGraphics({
              text: 'Hello Cesium',
              font: '24px sans-serif',
              horizontalOrigin: 1,
              outlineColor: new Cesium.Color(0, 0, 0, 1),
              outlineWidth: 2,
              pixelOffset: new Cesium.Cartesian2(17, -5),
              style: Cesium.LabelStyle.FILL
            })
          })
          // 1.1.2 场景配置
          earth.sceneTree.root = {
            expand: true,
            title: '预览场景',
            children: [
              {
                ref: 'polyline1',
                czmObject: {
                  xbsjType: 'Polyline',
                  positions: [
                    [1.6049052178907162, 0.4547675537396452, 0],
                    [2.266206367018494, 0.4857724702174004, -5.6841204016160695e-9],
                    [2.8083374819013205, 0.9842980731992482, -6.859619106471648e-9]
                  ]
                }
              },
              {
                czmObject: {
                  name: '默认影像',
                  xbsjType: 'Imagery',
                  xbsjImageryProvider: XE.Obj.Imagery.defaultImageryProviderConfig
                }
              }
            ]
          }
          var polyline1 = earth.sceneTree.$refs.polyline1.czmObject
          // 1.1.3 设置相机位置
          // earth.camera.position.toString()和earth.camera.toAllJSONStr()这两个方法可获取相机位置
          earth.camera.position = [1.9801824720243058, 0.5645924417726427, 8556103.623693792]
          earth.camera.rotation = [2.6645352591003757e-15, -1.5694528555019995, 0]
          // 1.1.3 设置初始值
          polyline1.width = 4
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer" ref="viewerContainer">
    <vc-viewer
      ref="vcViewer"
      :animation="animation"
      :baseLayerPicker="baseLayerPicker"
      :timeline="timeline"
      :cesiumPath="cesiumPath"
      :fullscreenButton="fullscreenButton"
      :fullscreenElement="fullscreenElement"
      :infoBox="infoBox"
      @ready="ready"
    >
      <vc-navigation></vc-navigation>
      <vc-layer-imagery>
        <vc-provider-imagery-tianditu mapStyle="img_c" :token="tk"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
      <vc-layer-imagery ref="layerText">
        <vc-provider-imagery-tianditu mapStyle="cia_c" :token="tk"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>animation</span>
      <md-switch v-model="animation"></md-switch>
      <span>timeline</span>
      <md-switch v-model="timeline"></md-switch>
      <span>baseLayerPicker</span>
      <md-switch v-model="baseLayerPicker"></md-switch>
      <span>fullscreenButton</span>
      <md-switch v-model="fullscreenButton"></md-switch>
      <span>infoBox</span>
      <md-switch v-model="infoBox"></md-switch>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        animation: true,
        timeline: true,
        baseLayerPicker: false,
        fullscreenButton: true,
        infoBox: true,
        fullscreenElement: document.body,
        tk: '436ce7e50d27eede2f2929307e6b33c0',
        cesiumPath: './statics/EarthSDK/XbsjEarth/XbsjEarth.js'
      }
    },
    mounted() {
      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {
        console.log('viewer is loaded.')
      })
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer, earth } = cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.scene.globe.enableLighting = true
        this.fullscreenElement = this.$refs.viewerContainer
        viewer.entities.add({
          id: '成都欢迎你',
          position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
          billboard: new Cesium.BillboardGraphics({
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.1
          }),
          label: new Cesium.LabelGraphics({
            text: 'Hello Cesium',
            font: '24px sans-serif',
            horizontalOrigin: 1,
            outlineColor: new Cesium.Color(0, 0, 0, 1),
            outlineWidth: 2,
            pixelOffset: new Cesium.Cartesian2(17, -5),
            style: Cesium.LabelStyle.FILL
          })
        })
        // 1.1.2 场景配置
        earth.sceneTree.root = {
          expand: true,
          title: '预览场景',
          children: [
            {
              ref: 'polyline1',
              czmObject: {
                xbsjType: 'Polyline',
                positions: [
                  [1.6049052178907162, 0.4547675537396452, 0],
                  [2.266206367018494, 0.4857724702174004, -5.6841204016160695e-9],
                  [2.8083374819013205, 0.9842980731992482, -6.859619106471648e-9]
                ]
              }
            },
            {
              czmObject: {
                name: '默认影像',
                xbsjType: 'Imagery',
                xbsjImageryProvider: XE.Obj.Imagery.defaultImageryProviderConfig
              }
            }
          ]
        }
        var polyline1 = earth.sceneTree.$refs.polyline1.czmObject
        // 1.1.3 设置相机位置
        // earth.camera.position.toString()和earth.camera.toAllJSONStr()这两个方法可获取相机位置
        earth.camera.position = [1.9801824720243058, 0.5645924417726427, 8556103.623693792]
        earth.camera.rotation = [2.6645352591003757e-15, -1.5694528555019995, 0]
        // 1.1.3 设置初始值
        polyline1.width = 4
      }
    }
  }
</script>
```

- Refer to：[EarthSDK DEMO](http://earthsdk.com/v/last/Apps/Examples/?menu=true&url=./startup-createEarth.html)
