# VcDrawHandlerPolyline

- `vc-handler-draw-polyline` 组件用于绘制线。

## 示例

### 绘制线

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="toggle('handlerLine')">{{ polylineDrawing ? '停止' : '绘制线' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">清除</md-button>
      </div>
      <vc-viewer @ready="ready" scene3DOnly>
        <vc-primitive-3dtileset :url="modelUrl" @readyPromise="readyPromise"></vc-primitive-3dtileset>
        <vc-handler-draw-polyline ref="handlerLine" @activeEvt="activeEvt" @movingEvt="movingEvt" @drawEvt="drawEvt"></vc-handler-draw-polyline>
      </vc-viewer>
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
          viewer.scene.globe.depthTestAgainstTerrain = true
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
          this.tooltip.showAt(windowPosition,'<p>左键绘制, 右键结束绘制.</p>')
        },
        drawEvt (result) {
          result.finished && this.tooltip.setVisible(false);
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

#### 代码

```html
<template>
  <div class="viewer">
    <div class="demo-tool">
      <md-button class="md-raised md-accent" @click="toggle('handlerLine')">{{ polylineDrawing ? '停止' : '绘制线' }}</md-button>
      <md-button class="md-raised md-accent" @click="clear">清除</md-button>
    </div>
    <vc-viewer @ready="ready" scene3DOnly>
      <cesium-3dtileset :url="modelUrl" @readyPromise="readyPromise"></cesium-3dtileset>
      <draw-polyline-handler
        ref="handlerLine"
        @activeEvt="activeEvt"
        @movingEvt="movingEvt"
        @drawEvt="drawEvt"
      ></draw-polyline-handler>
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
        this.tooltip = new Tooltip(viewer.cesiumWidget.container)
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
        this.tooltip.showAt(windowPosition, '<p>左键绘制, 右键结束绘制.</p>')
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

### vc-handler-draw-polyline

| 属性名        | 类型                  | 默认值      | 描述                                                |
| ------------- | --------------------- | ----------- | --------------------------------------------------- |
| mode          | Number                | `1`         | `optional` 绘制模式，0 连续绘制，1 绘制一次就结束。 |
| depthTest     | Boolean               | `true`      | `optional` 指定绘制的线对象是否参与深度测试。       |
| polylineColor | String\|Array\|Object | `'#51ff00'` | `optional` 指定线颜色。                             |
| polylineWidth | Number                | `2`         | `optional` 指定线宽度。                             |

---

## 事件

| 事件名    | 参数                                                  | 描述                                   |
| --------- | ----------------------------------------------------- | -------------------------------------- |
| activeEvt | { type: String, isActive: Boolean }                   | 绘制开始或停止时触发。                 |
| movingEvt | Object                                                | 绘制过程中触发。返回鼠标位置。         |
| drawEvt   | { polyline: Object, type: Object, finished: Boolean } | 绘制过程中触发。返回绘制的线的坐标点。 |

## 方法

| 方法名 | 参数 | 描述                           |
| ------ | ---- | ------------------------------ |
| clear  |      | 清除绘制对象（同时停止绘制）。 |
