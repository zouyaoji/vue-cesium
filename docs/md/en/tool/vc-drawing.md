# DrawTools

The `vc-handler-draw-point` component is used to draw point.
The `vc-handler-draw-polyline` component is used to draw polyline.
The `vc-handler-draw-polygon` component is used to draw polygon.

## Example

### Draw Polyline

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" scene3DOnly>
        <vc-handler-draw-point
          ref="handlerPoint"
          @activeEvt="activeEvt"
          @movingEvt="movingEvt"
          @drawEvt="drawEvt"
          :editable="editable"
        ></vc-handler-draw-point>
        <vc-handler-draw-polyline
          :clampToGround="clampToGround"
          ref="handlerLine"
          @activeEvt="activeEvt"
          @movingEvt="movingEvt"
          @drawEvt="drawEvt"
          :editable="editable"
        ></vc-handler-draw-polyline>
        <vc-handler-draw-polygon
          :clampToGround="clampToGround"
          ref="handlerPolygon"
          @activeEvt="activeEvt"
          @movingEvt="movingEvt"
          @drawEvt="drawEvt"
          :editable="editable"
        ></vc-handler-draw-polygon>
        <vc-primitive-tileset :url="modelUrl" @readyPromise="readyPromise"></vc-primitive-tileset>
      </vc-viewer>
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="toggle('handlerPoint')">{{ pointDrawing ? 'Stop' : 'Point' }}</md-button>
        <md-button class="md-raised md-accent" @click="toggle('handlerLine')"
          >{{ polylineDrawing ? 'Stop' : 'Polyline' }}</md-button
        >
        <md-button class="md-raised md-accent" @click="toggle('handlerPolygon')"
          >{{ polygonDrawing ? 'Stop' : 'Polygon' }}</md-button
        >
        <md-button class="md-raised md-accent" @click="clear">clear</md-button>
        <md-checkbox v-model="editable" class="md-primary">Editable</md-checkbox>
        <md-checkbox v-model="clampToGround" class="md-primary">ClampToGround(Polyline、Polygon)</md-checkbox>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          pointDrawing: false,
          polylineDrawing: false,
          polygonDrawing: false,
          clampToGround: false,
          editable: false
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.cesiumInstance = cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
        },
        toggle(type) {
          console.log(type)
          this.$refs[type].drawing = !this.$refs[type].drawing
        },
        clear() {
          this.$refs.handlerPoint.clear()
          this.$refs.handlerLine.clear()
          this.$refs.handlerPolygon.clear()
        },
        activeEvt(_) {
          this[_.type] = _.isActive
        },
        movingEvt(windowPosition) {
          // this.tooltip.showAt(windowPosition, '<p>left click to draw, right click end.</p>')
        },
        drawEvt(result) {
          // result.finished && this.tooltip.setVisible(false)
          console.log(result)
        },
        readyPromise(tileset) {
          const { viewer } = this.cesiumInstance
          viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready" scene3DOnly>
      <vc-handler-draw-point
        ref="handlerPoint"
        @activeEvt="activeEvt"
        @movingEvt="movingEvt"
        @drawEvt="drawEvt"
        :editable="editable"
      ></vc-handler-draw-point>
      <vc-handler-draw-polyline
        :clampToGround="clampToGround"
        ref="handlerLine"
        @activeEvt="activeEvt"
        @movingEvt="movingEvt"
        @drawEvt="drawEvt"
        :editable="editable"
      ></vc-handler-draw-polyline>
      <vc-handler-draw-polygon
        :clampToGround="clampToGround"
        ref="handlerPolygon"
        @activeEvt="activeEvt"
        @movingEvt="movingEvt"
        @drawEvt="drawEvt"
        :editable="editable"
      ></vc-handler-draw-polygon>
      <vc-primitive-tileset :url="modelUrl" @readyPromise="readyPromise"></vc-primitive-tileset>
    </vc-viewer>
    <div class="demo-tool">
      <md-button class="md-raised md-accent" @click="toggle('handlerPoint')">{{ pointDrawing ? 'Stop' : 'Point' }}</md-button>
      <md-button class="md-raised md-accent" @click="toggle('handlerLine')"
        >{{ polylineDrawing ? 'Stop' : 'Polyline' }}</md-button
      >
      <md-button class="md-raised md-accent" @click="toggle('handlerPolygon')"
        >{{ polygonDrawing ? 'Stop' : 'Polygon' }}</md-button
      >
      <md-button class="md-raised md-accent" @click="clear">clear</md-button>
      <md-checkbox v-model="editable" class="md-primary">Editable</md-checkbox>
      <md-checkbox v-model="clampToGround" class="md-primary">ClampToGround(Polyline、Polygon)</md-checkbox>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
        pointDrawing: false,
        polylineDrawing: false,
        polygonDrawing: false,
        clampToGround: false,
        editable: false
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.cesiumInstance = cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
      },
      toggle(type) {
        console.log(type)
        this.$refs[type].drawing = !this.$refs[type].drawing
      },
      clear() {
        this.$refs.handlerPoint.clear()
        this.$refs.handlerLine.clear()
        this.$refs.handlerPolygon.clear()
      },
      activeEvt(_) {
        this[_.type] = _.isActive
      },
      movingEvt(windowPosition) {
        // this.tooltip.showAt(windowPosition, '<p>left click to draw, right click end.</p>')
      },
      drawEvt(result) {
        // result.finished && this.tooltip.setVisible(false)
        console.log(result)
      },
      readyPromise(tileset) {
        const { viewer } = this.cesiumInstance
        viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
      }
    }
  }
</script>
```

## Instance Properties

### vc-handler-draw-point

| name           | type                  | default            | description                                                    |
| -------------- | --------------------- | ------------------ | -------------------------------------------------------------- |
| mode           | Number                | `1`                | `optional` Draw mode, 0 draws continuously, 1 ends once drawn. |
| pointColor     | String\|Array\|Object | `'rgb(255,229,0)'` | `optional` Specify the point color.                            |
| pointPixelSize | Number                | `8`                | `optional` Specify the point pixel size.                       |
| editable       | Boolean               | `false`            | `optional` 指定是否可编辑。                                    |
| showDrawTip    | Boolean               | `true`             | `optional` 指定是否显示绘制提示。                              |

### vc-handler-draw-polyline

<!-- prettier-ignore -->
| name | type | default | description |
| ---------------- | --------------------- | ------------------ | ----------------------------------------------------------------------------------------- |
| mode | Number | `1` | `optional` Draw mode, 0 draws continuously, 1 ends once drawn. |
| depthTest | Boolean | `true` | `optional` Specifies whether drawn polyline objects participate in depth testing. |
| pointColor | String\|Array\|Object | `'rgb(255,229,0)'` | `optional` Specify the point color. |
| pointPixelSize | Number | `8` | `optional` Specify the point pixel size. |
| polylineMaterial | Object | `fabric: { type: 'Color', uniforms: { color: '#51ff00' } }` | `optional` Specify the material of polyline. |
| polylineWidth | Number | `2` | `optional` Specify the polyline width. |
| clampToGround | Boolean | `false` | `optional` Specifies whether the line drawn is grounded. Only method is valid for Entity. |
| editable | Boolean | `false` | `optional` Specify whether to enable editing. |
| showDrawTip | Boolean | `true` | `optional` Whether to show the drawing prompter. |

### vc-handler-draw-polygon

<!-- prettier-ignore -->
| name | type | default | description |
| ---------------- | --------------------- | ------------------------ | ----------------------------------------------------------------------------- |
| mode | Number | `1` | `optional` Draw mode, 0 draws continuously, 1 ends once drawn. |
| depthTest | Boolean | `true` | `optional` Specifies whether drawn line objects participate in depth testing. |
| pointColor | String\|Array\|Object | `'rgb(255,229,0)'` | `optional` Specify the point color. |
| pointPixelSize | Number | `8` | `optional` Specify the point pixel size. |
| polylineMaterial | Object | `fabric: { type: 'Color', uniforms: { color: '#51ff00' } }` | `optional` Specify the drawn line material。 |
| polylineWidth | Number | `2` | `optional` Specify the polyline width. |
| polygonMaterial | Object | `fabric: { type: 'Color', uniforms: { color: 'rgba(255,165,0,0.25)' } }` | `optional` Specify the face material. |
| clampToGround | Boolean | `false` | `optional` Specifies whether the drawn surface is ground-attached. |
| editable | Boolean | `false` | `optional` Specify whether to enable editing. |
| showDrawTip | Boolean | `true` | `optional` Whether to show the drawing prompter. |

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
