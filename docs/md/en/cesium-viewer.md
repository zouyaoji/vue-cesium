# CesiumViewer

`CesiumViewer`is a container of Cesium core class and instance. It's the root component of other components of vue-cesium.
The container is an empty DOM node which used to mount other components or DOM nodes.

## Instance Properties

|name|type|default|description|
|------|------|-----|---|
|animation|Boolean|false|`optional`If set to false, the Animation widget will not be created.|
|baseLayerPicker| Boolean|false|`optional`If set to false, the BaseLayerPicker widget will not be created.|
|fullscreenButton|Boolean| false| `optional`If set to false, the FullscreenButton widget will not be created.|
|vrButton|Boolean|false|`optional`If set to true, the VRButton widget will be created.|
|geocoder|Boolean|false|`optional`If set to false, the Geocoder widget will not be created.|
|homeButton|Boolean|false|`optional`If set to false, the HomeButton widget will not be created.|
|infoBox|Boolean|true|`optional`If set to false, the InfoBox widget will not be created.|
|sceneModePicker|Boolean|false|`optional`If set to false, the SceneModePicker widget will not be created.|
|selectionIndicator|Boolean|true|`optional`If set to false, the SelectionIndicator widget will not be created.|
|timeline|Boolean|false|`optional`If set to false, the Timeline widget will not be created.|
|navigation|Boolean|false|`optional`是否显示导航控件（SuperMap）|
|navigationHelpButton|Boolean|false|`optional`If set to false, the navigation help button will not be created.|
|navigationInstructionsInitiallyVisible|Boolean|false|`optional`True if the navigation instructions should initially be visible, or false if the should not be shown until the user explicitly clicks the button.|
|scene3DOnly|Boolean|false|`optional`When true, each geometry instance will only be rendered in 3D to save GPU memory.|
|shouldAnimate|Boolean|false|`optional`true if the clock should attempt to advance simulation time by default, false otherwise. |
|fullscreenElement|Element|document.body|`optional`The element or id to be placed into fullscreen mode when the full screen button is pressed.|
|useDefaultRenderLoop|Boolean|true|`optional`True if this widget should control the render loop, false otherwise.|
|targetFrameRate|Number||`optional`The target frame rate when using the default render loop.|
|showRenderLoopErrors|Boolean|true|`optional`If true, this widget will automatically display an HTML panel to the user containing the error, if a render loop error occurs.|
|automaticallyTrackDataSourceClocks|Boolean|true|`optional`If true, this widget will automatically track the clock settings of newly added DataSources, updating if the DataSource's clock changes. Set this to false if you want to configure the clock independently.|
|contextOptions|Object||`optional`Context and WebGL creation properties corresponding to options passed to Scene.|
|orderIndependentTranslucency|Boolean|true|`optional`If true and the configuration supports it, use order independent translucency.|
|creditContainer|Element \| String||`optional`The DOM element or ID that will contain the CreditDisplay. If not specified, the credits are added to the bottom of the widget itself.|
|creditViewport|Element \| String||`optional`The DOM element or ID that will contain the credit pop up created by the CreditDisplay. If not specified, it will appear over the widget itself.|
|terrainExaggeration|Number|1.0|`optional`A scalar used to exaggerate the terrain. Note that terrain exaggeration will not modify any other primitive as they are positioned relative to the ellipsoid.|
|shadows|Boolean|false|`optional`Determines if shadows are cast by the sun.|
|terrainShadows|Number|3|`optional`Determines if the terrain casts or receives shadows from the sun.|
|mapMode2D|Number|1|`optional`Determines if the 2D map is rotatable or can be scrolled infinitely in the horizontal direction.|
|projectionPicker|Boolean|false|`optional`If set to true, the ProjectionPicker widget will be created.|
---

## Events

|name|parameter|description|
|---|------|---|
|selectedEntityChanged|Entity| Gets the event that is raised when the selected entity changes. |
|trackedEntityChanged|Entity| Gets the event that is raised when the tracked entity changes. |
|dataSourceAdded|DataSource| An event that is raised when a data source is added to the collection. Event handlers are passed the data source that was added.|

## Examples

### Init CesiumViewer and control Widget

#### Code

```html
<template>
  <div class="viewer" ref="myViewer">
    <div class="row" style="position: absolute; left: 1%; top: 2%; width: 100%; z-index: 9999; color: white">
      <span>animation</span>
      <el-switch v-model="animation"></el-switch>
      <span>timeline</span>
      <el-switch v-model="timeline"></el-switch>
      <span>baseLayerPicker</span>
      <el-switch v-model="baseLayerPicker"></el-switch>
      <span>fullscreenButton</span>
      <el-switch v-model="fullscreenButton"></el-switch>
      <span>infoBox</span>
      <el-switch v-model="infoBox"></el-switch>
    </div>
    <cesium-viewer :animation="animation" :baseLayerPicker="baseLayerPicker" :timeline="timeline" 
      :fullscreenButton="fullscreenButton" :fullscreenElement="fullscreenElement" :infoBox="infoBox" @ready="ready">
    </cesium-viewer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        animation: true,
        timeline: true,
        baseLayerPicker: false,
        fullscreenButton: true,
        infoBox: true,
        fullscreenElement: document.body
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.fullscreenElement = this.$refs.myViewer
        viewer.entities.add({
          id: '成都欢迎你',
          position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
          billboard: new Cesium.BillboardGraphics({
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.1
          }),
          label: new Cesium.LabelGraphics ({
            text: 'Hello Word',
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

<style scoped>
.viewer {
  width: 100%;
  height: 400px;
}
</style>
```

#### Preview

<doc-preview>
  <template>
    <div class="viewer" ref="myViewer">
      <div class="row" style="position: absolute; left: 1%; top: 2%; width: 100%; z-index: 9999; color: white">
        <span>animation</span>
        <el-switch v-model="animation"></el-switch>
        <span>timeline</span>
        <el-switch v-model="timeline"></el-switch>
        <span>baseLayerPicker</span>
        <el-switch v-model="baseLayerPicker"></el-switch>
        <span>fullscreenButton</span>
        <el-switch v-model="fullscreenButton"></el-switch>
        <span>infoBox</span>
        <el-switch v-model="infoBox"></el-switch>
      </div>
      <cesium-viewer :animation="animation" :baseLayerPicker="baseLayerPicker" :timeline="timeline" 
        :fullscreenButton="fullscreenButton" :fullscreenElement="fullscreenElement" :infoBox="infoBox" @ready="ready">
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          animation: true,
          timeline: true,
          baseLayerPicker: false,
          fullscreenButton: true,
          infoBox: true,
          fullscreenElement: document.body
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.fullscreenElement = this.$refs.myViewer
          viewer.entities.add({
            id: '成都欢迎你',
            position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
            billboard: new Cesium.BillboardGraphics({
              image: 'https://zouyaoji.top/vue-cesium/favicon.png',
              scale: 0.1
            }),
            label: new Cesium.LabelGraphics ({
              text: 'Hello Word',
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

  <style scoped>
  .viewer {
    width: 100%;
    height: 400px;
  }
  </style>
</doc-preview>