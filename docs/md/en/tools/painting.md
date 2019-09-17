# Painting

## Examples

### Draw polylines

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="toggle('handlerLine')">{{ polylineDrawing ? 'Stop' : 'DrawLine' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">Clear</md-button>
      </div>
      <cesium-viewer @ready="ready" scene3DOnly>
        <cesium-3dtileset :url="modelUrl" @readyPromise="readyPromise"></cesium-3dtileset>
        <draw-polyline-handler ref="handlerLine" @activeEvt="activeEvt" @movingEvt="movingEvt" @drawEvt="drawEvt"></draw-polyline-handler>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          polylineDrawing: false
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.cesiumInstance = cesiumInstance
          this.tooltip = createTooltip(viewer.cesiumWidget.container)
        },
        toggle (type) {
          this.$refs[type].drawing = !this.$refs[type].drawing
        },
        clear () {
          this.$refs.handlerLine.clear()
        },
        activeEvt (_) {
          this[_.type] = _.isActive
        },
        movingEvt(windowPosition) {
          this.tooltip.showAt(windowPosition,'<p>left click to draw, right click end.</p>')
        },
        drawEvt (polyline) {
          this.tooltip.setVisible(false);
        },
        readyPromise (tileset) {
          const {viewer} = this.cesiumInstance
          viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
        }
      }
    }
  </script>
  <style>
  .twipsy {
      display: block;
      position: absolute;
      visibility: visible;
      max-width: 200px;
      min-width: 100px;
      padding: 5px;
      font-size: 11px;
      z-index: 1000;
      opacity: 0.8;
      -khtml-opacity: 0.8;
      -moz-opacity: 0.8;
      filter: alpha(opacity=80);
  }
  .twipsy.left .twipsy-arrow {
      top: 50%;
      right: 0;
      margin-top: -5px;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 5px solid #000000;
  }
  .twipsy.right .twipsy-arrow {
      top: 50%;
      left: 0;
      margin-top: -5px;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-right: 5px solid #000000;
  }
  .twipsy-inner {
      padding: 3px 8px;
      background-color: #000000;
      color: white;
      text-align: center;
      max-width: 200px;
      text-decoration: none;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
  }
  .twipsy-arrow {
      position: absolute;
      width: 0;
      height: 0;
  }
  </style>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <div class="demo-tool">
      <md-button class="md-raised md-accent" @click="toggle('handlerLine')"
        >{{ polylineDrawing ? 'Stop' : 'DrawLine' }}</md-button
      >
      <md-button class="md-raised md-accent" @click="clear">Clear</md-button>
    </div>
    <cesium-viewer @ready="ready" scene3DOnly>
      <cesium-3dtileset :url="modelUrl" @readyPromise="readyPromise"></cesium-3dtileset>
      <draw-polyline-handler
        ref="handlerLine"
        @activeEvt="activeEvt"
        @movingEvt="movingEvt"
        @drawEvt="drawEvt"
      ></draw-polyline-handler>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
        polylineDrawing: false
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.cesiumInstance = cesiumInstance
        this.tooltip = new Tooltip(viewer.cesiumWidget.container)
      },
      toggle(type) {
        this.$refs[type].drawing = !this.$refs[type].drawing
      },
      clear() {
        this.$refs.handlerLine.clear()
      },
      activeEvt(_) {
        this[_.type] = _.isActive
      },
      movingEvt(windowPosition) {
        this.tooltip.showAt(windowPosition, '<p> left click to draw, right click end</p>')
      },
      drawEvt(polyline) {
        this.tooltip.setVisible(false)
      },
      readyPromise(tileset) {
        const { viewer } = this.cesiumInstance
        viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
      }
    }
  }
</script>
<style>
  .twipsy {
    display: block;
    position: absolute;
    visibility: visible;
    max-width: 200px;
    min-width: 100px;
    padding: 5px;
    font-size: 11px;
    z-index: 1000;
    opacity: 0.8;
    -khtml-opacity: 0.8;
    -moz-opacity: 0.8;
    filter: alpha(opacity=80);
  }
  .twipsy.left .twipsy-arrow {
    top: 50%;
    right: 0;
    margin-top: -5px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #000000;
  }
  .twipsy.right .twipsy-arrow {
    top: 50%;
    left: 0;
    margin-top: -5px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid #000000;
  }
  .twipsy-inner {
    padding: 3px 8px;
    background-color: #000000;
    color: white;
    text-align: center;
    max-width: 200px;
    text-decoration: none;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .twipsy-arrow {
    position: absolute;
    width: 0;
    height: 0;
  }
</style>
```

## 属性

### draw-polyline-handler

| name | type   | default | description                                                    |
| ---- | ------ | ------- | -------------------------------------------------------------- |
| mode | Number | `1`     | `optional` Draw mode, 0 draws continuously, 1 ends once drawn. |

---

## Event

<!-- prettier-ignore -->
| name | parameter | description |
| --------- | ----------------------------------- | ------------------------------------ |
| activeEvt | { type: String, isActive: Boolean } | Fires when the drawing starts or stops.               |
| movingEvt | Object                              | Triggered during the drawing process. Returns the mouse position.       |
| drawEvt   | Object                              | Draw the end trigger. Returns the coordinate points of the line drawn. |

## Method

| name  | parameter | description                                      |
| ----- | --------- | ------------------------------------------------ |
| clear |           | Clear the drawing object (and stopping drawing). |
