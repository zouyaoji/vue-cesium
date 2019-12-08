# VcDrawHandlerPolyline

The `vc-handler-draw-polyline` component is used to draw polyline.

## Example

### Draw Polyline

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="toggle('handlerLine')">{{ polylineDrawing ? 'Stop' : 'DrawPolyline' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">Clear</md-button>
      </div>
      <vc-viewer @ready="ready" scene3DOnly>
        <vc-primitive-3dtileset :url="modelUrl" @readyPromise="readyPromise"></vc-primitive-3dtileset>
        <vc-handler-draw-polyline
          ref="handlerLine"
          @activeEvt="activeEvt"
          @movingEvt="movingEvt"
          @drawEvt="drawEvt"
        ></vc-handler-draw-polyline>
      </vc-viewer>
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
          this.tooltip = createTooltip(viewer.cesiumWidget.container)
          viewer.scene.globe.depthTestAgainstTerrain = true
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
          this.tooltip.showAt(windowPosition, '<p>left click to draw, right click end.</p>')
        },
        drawEvt (result) {
          result.finished && this.tooltip.setVisible(false);
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
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <div class="demo-tool">
      <md-button class="md-raised md-accent" @click="toggle('handlerLine')"
        >{{ polylineDrawing ? 'Stop' : 'DrawPolyline' }}</md-button
      >
      <md-button class="md-raised md-accent" @click="clear">Clear</md-button>
    </div>
    <vc-viewer @ready="ready" scene3DOnly>
      <vc-primitive-3dtileset :url="modelUrl" @readyPromise="readyPromise"></vc-primitive-3dtileset>
      <vc-handler-draw-polyline
        ref="handlerLine"
        @activeEvt="activeEvt"
        @movingEvt="movingEvt"
        @drawEvt="drawEvt"
      ></vc-handler-draw-polyline>
    </vc-viewer>
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
        this.tooltip = createTooltip(viewer.cesiumWidget.container)
        viewer.scene.globe.depthTestAgainstTerrain = true
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
        this.tooltip.showAt(windowPosition, '<p>left click to draw, right click end.</p>')
      },
      drawEvt(result) {
        result.finished && this.tooltip.setVisible(false)
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

## Instance Properties

### vc-handler-draw-polyline

| name          | type                  | default     | description                                                                   |
| ------------- | --------------------- | ----------- | ----------------------------------------------------------------------------- |
| mode          | Number                | `1`         | `optional` Draw mode, 0 draws continuously, 1 ends once drawn.                |
| depthTest     | Boolean               | `true`      | `optional` Specifies whether drawn line objects participate in depth testing. |
| polylineColor | String\|Array\|Object | `'#51ff00'` | `optional` Specify the line color.                                            |
| polylineWidth | Number                | `2`         | `optional` Specify the line width.                                            |

---

## Event

<!-- prettier-ignore -->
| name | parameter | description |
| --------- | ----------------------------------- | ------------------------------------ |
| activeEvt | { type: String, isActive: Boolean }                   | Fires when drawing starts or stops.                 |
| movingEvt | Object                              | Triggered during the drawing process. Returns the mouse position.       |
| drawEvt   | { polyline: Object, type: Object, finished: Boolean } | Triggered during drawing. Returns the coordinate points of the drawn line. |

## Method

| name  | parameter | description                                      |
| ----- | --------- | ------------------------------------------------ |
| clear |           | Clear the drawing object (and stopping drawing). |
