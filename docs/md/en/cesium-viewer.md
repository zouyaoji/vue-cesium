# CesiumViewer

`CesiumViewer`is a container of Cesium core class and instance. It's the root component of other components of vue-cesium.
The container is an empty DOM node which used to mount other components or DOM nodes.

## Examples

### Init CesiumViewer and control Widget

#### Preview

<doc-preview>
  <template>
    <div class="viewer" ref="myViewer">
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
</doc-preview>

#### Code

```html
<template>
  <div class="viewer" ref="myViewer">
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
```

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
|accessToken|String||`optional`set accessToken of Cesium ion|
|logo|Boolean|true| `optional` Determines if default logo is displayed on the viewer.|
---

## Events

|name|parameter|description|source|
|----|---------|-----------|------|
|selectedEntityChanged|Entity| Gets the event that is raised when the selected entity changes. |Viewer|
|trackedEntityChanged|Entity| Gets the event that is raised when the tracked entity changes. |Viewer|
|layerAdded|imageryLayer, index|An event that is raised when a layer is added to the collection. Event handlers are passed the layer that was added and the index at which it was added.|Viewer.imageryLayers|
|layerMoved|imageryLayer, newIndex, oldIndex|An event that is raised when a layer changes position in the collection. Event handlers are passed the layer that was moved, its new index after the move, and its old index prior to the move.|Viewer.imageryLayers|
|layerRemoved|imageryLayer, index|An event that is raised when a layer is removed from the collection. Event handlers are passed the layer that was removed and the index from which it was removed.|Viewer.imageryLayers|
|layerShownOrHidden|imageryLayer, index, flag|An event that is raised when a layer is shown or hidden by setting the ImageryLayer#show property. Event handlers are passed a reference to this layer, the index of the layer in the collection, and a flag that is true if the layer is now shown or false if it is now hidden.|iewer.imageryLayers|
|dataSourceAdded|dataSource|An event that is raised when a data source is added to the collection. Event handlers are passed the data source that was added.|Viewer.dataSources|
|dataSourceMoved|dataSource|An event that is raised when a data source changes position in the collection. Event handlers are passed the data source that was moved, its new index after the move, and its old index prior to the move.|Viewer.dataSources|
|dataSourceRemoved|dataSource|An event that is raised when a data source is removed from the collection. Event handlers are passed the data source that was removed.|Viewer.entities|
|collectionChanged|collection, added, removed, changed|Gets the event that is fired when entities are added or removed from the collection. The generated event is a EntityCollection.collectionChangedEventCallback.|Viewer.entities|
|morphComplete|object|The event fired at the completion of a scene transition.|Viewer.scene|
|morphStart|object|The event fired at the beginning of a scene transition.|Viewer.scene|
|postRender|scene|Gets the event that will be raised immediately after the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.|Viewer.scene|
|preRender|scene|Gets the event that will be raised after the scene is updated and immediately before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.|Viewer.scene|
|postUpdate|scene|Gets the event that will be raised immediately after the scene is updated and before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.|Viewer.scene|
|preUpdate|scene|Gets the event that will be raised before the scene is updated or rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.|Viewer.scene|
|renderError|scene, error|Gets the event that will be raised when an error is thrown inside the render function. The Scene instance and the thrown error are the only two parameters passed to the event handler. By default, errors are not rethrown after this event is raised, but that can be changed by setting the rethrowRenderErrors property.|Viewer.scene|
|terrainProviderChanged||Gets an event that's raised when the terrain provider is changed.|Viewer.scene|
|changed|number|Gets the event that will be raised when the camera has changed by percentageChanged.|Viewer.camera|
|moveEnd||Gets the event that will be raised when the camera has stopped moving.|Viewer.camera|
|moveStart||Gets the event that will be raised at when the camera starts to move.|Viewer.camera|
|onStop||An Event that is fired whenever Clock#stopTime is reached.|Viewer.clock|
|onTick||An Event that is fired whenever Clock#tick is called.|Viewer.clock|
|errorEvent||Gets an event that is raised when the terrain provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.|Viewer.terrainProvider|
|LEFT_CLICK|{position: point}|Represents a mouse left click event.|ScreenSpaceEventType|
|LEFT_DOUBLE_CLICK|{position: point}|Represents a mouse left double click event.|ScreenSpaceEventType|
|LEFT_DOWN|{position: point}|Represents a mouse left button down event.|ScreenSpaceEventType|
|LEFT_UP|{position: point}|Represents a mouse left button up event.|ScreenSpaceEventType|
|MIDDLE_CLICK|{position: point}|Represents a mouse middle click event.|ScreenSpaceEventType|
|MIDDLE_DOWN|{position: point}|Represents a mouse middle button down event.|ScreenSpaceEventType|
|MIDDLE_UP|{position: point}|Represents a mouse middle button up event.|ScreenSpaceEventType|
|MOUSE_MOVE|{startPosition: point, endPosition: point}|Represents a mouse move event.|ScreenSpaceEventType|
|PINCH_END||Represents the end of a two-finger event on a touch surface.|ScreenSpaceEventType|
|PINCH_MOVE|{distance: {startPosition: point, endPosition: point}, angleAndHeight: {startPosition: point, endPosition: point}}|Represents a change of a two-finger event on a touch surface.|ScreenSpaceEventType|
|PINCH_START|{position1: point, position2: point}|Represents the start of a two-finger event on a touch surface.|ScreenSpaceEventType|
|RIGHT_CLICK|{position: point}|Represents a mouse right click event.|ScreenSpaceEventType|
|RIGHT_DOWN|{position: point}|Represents a mouse left button down event.|ScreenSpaceEventType|
|RIGHT_UP|{position: point}|Represents a mouse right button up event.|ScreenSpaceEventType|
|WHEEL|delta|Represents a mouse wheel event.|ScreenSpaceEventType|
---