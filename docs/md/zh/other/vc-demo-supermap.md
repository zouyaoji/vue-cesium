# 超图例子

使用超图版本开发时只需要在引入 vue-cesium 时通过配置项 `cesiumPath` 指定为超图版本路径即可:

```js
Vue.use(VueCesium, {
  cesiumPath: './statics/SupermapCesium/Cesium.js'
})

// 如果是局部引入，也可以这样:
import { Viewer } from 'vue-cesium'
Vue.use(Viewer, {
  cesiumPath: './statics/SupermapCesium/Cesium.js'
})
```

或者是直接在 `vc-viewer` 组件上指定 `cesiumPath` 属性，如下面的例子：

## 示例

### 用超图版本加载 vc-viewer 组件

#### 预览

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
        :logo="true"
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
        <span>动画部件</span>
        <md-switch v-model="animation"></md-switch>
        <span>时间轴部件</span>
        <md-switch v-model="timeline"></md-switch>
        <span>基础图层拾取器</span>
        <md-switch v-model="baseLayerPicker"></md-switch>
        <span>全屏按钮</span>
        <md-switch v-model="fullscreenButton"></md-switch>
        <span>信息提示框</span>
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
          cesiumPath: './statics/SuperMapCesium/Cesium.js'
        }
      },
      mounted() {
        this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {
          console.log('viewer is loaded.')
        })
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
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
        }
      }
    }
  </script>
</doc-preview>

#### 代码

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
      <span>动画部件</span>
      <md-switch v-model="animation"></md-switch>
      <span>时间轴部件</span>
      <md-switch v-model="timeline"></md-switch>
      <span>基础图层拾取器</span>
      <md-switch v-model="baseLayerPicker"></md-switch>
      <span>全屏按钮</span>
      <md-switch v-model="fullscreenButton"></md-switch>
      <span>信息提示框</span>
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
        cesiumPath: './statics/SuperMapCesium/Cesium.js'
      }
    },
    mounted() {
      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {
        console.log('viewer is loaded.')
      })
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
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
      }
    }
  }
</script>
```

---

- 参考超图官方文档： [SuperMap iClient 3D for WebGL](http://support.supermap.com.cn:8090/webgl/)
