# 绘制工具

- `vc-handler-draw-point` 组件用于绘制点。
- `vc-handler-draw-polyline` 组件用于绘制线。
- `vc-handler-draw-polygon` 组件用于绘制面。

## 示例

### 绘制线

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" scene3DOnly :infoBox="false">
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
        <md-button class="md-raised md-accent" @click="toggle('handlerPoint')">{{ pointDrawing ? '停止' : '点' }}</md-button>
        <md-button class="md-raised md-accent" @click="toggle('handlerLine')">{{ polylineDrawing ? '停止' : '线' }}</md-button>
        <md-button class="md-raised md-accent" @click="toggle('handlerPolygon')">{{ polygonDrawing ? '停止' : '面' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">清除</md-button>
        <md-checkbox v-model="editable" class="md-primary">编辑</md-checkbox>
        <md-checkbox v-model="clampToGround" class="md-primary">贴地(线、面)</md-checkbox>
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
          var scene = viewer.scene
          scene.debugShowFramesPerSecond = true
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
          // this.tooltip.showAt(windowPosition, '<p>左键绘制, 右键结束绘制.</p>')
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

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready" scene3DOnly :infoBox="false">
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
      <md-button class="md-raised md-accent" @click="toggle('handlerPoint')">{{ pointDrawing ? '停止' : '点' }}</md-button>
      <md-button class="md-raised md-accent" @click="toggle('handlerLine')">{{ polylineDrawing ? '停止' : '线' }}</md-button>
      <md-button class="md-raised md-accent" @click="toggle('handlerPolygon')">{{ polygonDrawing ? '停止' : '面' }}</md-button>
      <md-button class="md-raised md-accent" @click="clear">清除</md-button>
      <md-checkbox v-model="editable" class="md-primary">编辑</md-checkbox>
      <md-checkbox v-model="clampToGround" class="md-primary">贴地(线、面)</md-checkbox>
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
        var scene = viewer.scene
        scene.debugShowFramesPerSecond = true
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
        // this.tooltip.showAt(windowPosition, '<p>左键绘制, 右键结束绘制.</p>')
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

## 属性

### vc-handler-draw-point

| 属性名         | 类型                  | 默认值             | 描述                                                |
| -------------- | --------------------- | ------------------ | --------------------------------------------------- |
| mode           | Number                | `1`                | `optional` 绘制模式，0 连续绘制，1 绘制一次就结束。 |
| pointColor     | String\|Array\|Object | `'rgb(255,229,0)'` | `optional` 指定点颜色。                             |
| pointPixelSize | Number                | `8`                | `optional` 指定点的像素大小。                       |
| show           | Boolean               | `true`             | `optional` 指定绘制的点是否可见。                   |
| editable       | Boolean               | `false`            | `optional` 指定是否可编辑。                         |
| showDrawTip    | Boolean               | `true`             | `optional` 指定是否显示绘制提示。                   |

### vc-handler-draw-polyline

| 属性名           | 类型                  | 默认值                                                      | 描述                                                |
| ---------------- | --------------------- | ----------------------------------------------------------- | --------------------------------------------------- |
| mode             | Number                | `1`                                                         | `optional` 绘制模式，0 连续绘制，1 绘制一次就结束。 |
| depthTest        | Boolean               | `false`                                                     | `optional` 指定绘制的线对象是否参与深度测试。       |
| pointColor       | String\|Array\|Object | `'rgb(255,229,0)'`                                          | `optional` 指定点颜色。                             |
| pointPixelSize   | Number                | `8`                                                         | `optional` 指定点的像素大小。                       |
| polylineMaterial | Object                | `fabric: { type: 'Color', uniforms: { color: '#51ff00' } }` | `optional` 指定线材质。                             |
| polylineWidth    | Number                | `2`                                                         | `optional` 指定线宽度。                             |
| clampToGround    | Boolean               | `false`                                                     | `optional` 指定绘制的线是否贴地。                   |
| show             | Boolean               | `true`                                                      | `optional` 指定绘制的线是否可见。                   |
| editable         | Boolean               | `false`                                                     | `optional` 指定是否可编辑。                         |
| showDrawTip      | Boolean               | `true`                                                      | `optional` 指定是否显示绘制提示。                   |

### vc-handler-draw-polygon

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------- | --------------------- | ----------------------------------------------------------- | --------------------------------------------------- |
| mode | Number | `1` | `optional` 绘制模式，0 连续绘制，1 绘制一次就结束。 |
| depthTest | Boolean | `false` | `optional` 指定绘制的线对象是否参与深度测试。 |
| pointColor | String\|Array\|Object | `'rgb(255,229,0)'` | `optional` 指定点颜色。 |
| pointPixelSize | Number | `8` | `optional` 指定点的像素大小。 |
| polylineMaterial | Object | `fabric: { type: 'Color', uniforms: { color: '#51ff00' } }` | `optional` 指定线材质。 |
| polylineWidth | Number | `2` | `optional` 指定线宽度。 |
| polygonMaterial | Object | `fabric: { type: 'Color', uniforms: { color: 'rgba(255,165,0,0.25)' } }` | `optional` 指定面材质。 |
| clampToGround | Boolean | `false` | `optional` 指定绘制的面是否贴地。 |
| show | Boolean | `true` | `optional` 指定绘制的面是否可见。 |
| editable | Boolean | `false` | `optional` 指定是否可编辑。 |
| showDrawTip | Boolean | `true` | `optional` 指定是否显示绘制提示。 |

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
