# 量算工具

- `vc-measure-distance` 组件用于距离量算。
- `vc-measure-area` 组件用于量算面积
- `vc-measure-height` 组件用于量算高程。

## 示例

### 测量距离、面积、高度

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" scene3DOnly>
        <vc-measure-distance
          :clampToGround="clampToGround"
          ref="measureDistance"
          @activeEvt="activeEvt"
          @measureEvt="measureEvt"
          @movingEvt="movingEvt"
        ></vc-measure-distance>
        <vc-measure-area
          ref="measureArea"
          @activeEvt="activeEvt"
          @measureEvt="measureEvt"
          @movingEvt="movingEvt"
          :clampToGround="clampToGround"
        ></vc-measure-area>
        <vc-measure-height
          ref="measureHeight"
          @activeEvt="activeEvt"
          @measureEvt="measureEvt"
          @movingEvt="movingEvt"
        ></vc-measure-height>
        <vc-primitive-tileset :url="modelUrl" @readyPromise="readyPromise"></vc-primitive-tileset>
      </vc-viewer>
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="toggle('measureDistance')"
          >{{ distanceMeasuring ? '停止' : '距离' }}</md-button
        >
        <md-button class="md-raised md-accent" @click="toggle('measureArea')">{{ areaMeasuring ? '停止' : '面积' }}</md-button>
        <md-button class="md-raised md-accent" @click="toggle('measureHeight')">{{ heightMeasuring ? '停止' : '高度' }}</md-button>
        <md-button class="md-raised md-accent" @click="clampToGround=!clampToGround">贴地</md-button>
        <md-button class="md-raised md-accent" @click="clear">清除</md-button>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          distanceMeasuring: false,
          areaMeasuring: false,
          heightMeasuring: false,
          clampToGround: false
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          var scene = viewer.scene
          scene.debugShowFramesPerSecond = true
          this.cesiumInstance = cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
        },
        toggle(type) {
          this.$refs[type].measuring = !this.$refs[type].measuring
        },
        clear() {
          this.$refs.measureDistance.clear()
          this.$refs.measureArea.clear()
          this.$refs.measureHeight.clear()
        },
        activeEvt(_) {
          this[_.type] = _.isActive
        },
        measureEvt(result) {
          console.log(result)
        },
        movingEvt(position) {
          console.log(position)
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
    <vc-viewer @ready="ready" scene3DOnly>
      <vc-measure-distance
        :clampToGround="clampToGround"
        ref="measureDistance"
        @activeEvt="activeEvt"
        @measureEvt="measureEvt"
        @movingEvt="movingEvt"
      ></vc-measure-distance>
      <vc-measure-area
        ref="measureArea"
        @activeEvt="activeEvt"
        @measureEvt="measureEvt"
        @movingEvt="movingEvt"
        :clampToGround="clampToGround"
      ></vc-measure-area>
      <vc-measure-height
        ref="measureHeight"
        @activeEvt="activeEvt"
        @measureEvt="measureEvt"
        @movingEvt="movingEvt"
      ></vc-measure-height>
      <vc-primitive-tileset :url="modelUrl" @readyPromise="readyPromise"></vc-primitive-tileset>
    </vc-viewer>
    <div class="demo-tool">
      <md-button class="md-raised md-accent" @click="toggle('measureDistance')"
        >{{ distanceMeasuring ? '停止' : '距离' }}</md-button
      >
      <md-button class="md-raised md-accent" @click="toggle('measureArea')">{{ areaMeasuring ? '停止' : '面积' }}</md-button>
      <md-button class="md-raised md-accent" @click="toggle('measureHeight')">{{ heightMeasuring ? '停止' : '高度' }}</md-button>
      <md-button class="md-raised md-accent" @click="clampToGround=!clampToGround">贴地</md-button>
      <md-button class="md-raised md-accent" @click="clear">清除</md-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
        distanceMeasuring: false,
        areaMeasuring: false,
        heightMeasuring: false,
        clampToGround: false
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        var scene = viewer.scene
        scene.debugShowFramesPerSecond = true
        this.cesiumInstance = cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
      },
      toggle(type) {
        this.$refs[type].measuring = !this.$refs[type].measuring
      },
      clear() {
        this.$refs.measureDistance.clear()
        this.$refs.measureArea.clear()
        this.$refs.measureHeight.clear()
      },
      activeEvt(_) {
        this[_.type] = _.isActive
      },
      measureEvt(result) {
        console.log(result)
      },
      movingEvt(position) {
        console.log(position)
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

### vc-measure-distance

| 属性名           | 类型    | 默认值                                                      | 描述                                                 |
| ---------------- | ------- | ----------------------------------------------------------- | ---------------------------------------------------- |
| mode             | Number  | `1`                                                         | `optional` 测量模式，0 连续测量，1 测量一次就结束。  |
| font             | String  | `'100 20px SimSun'`                                         | `optional` 指定 label 字体。                         |
| depthTest        | Boolean | `false`                                                     | `optional` 指定标签文字和线对象是参与深度测试。      |
| arcType          | Number  | `0`                                                         | `optional` 指定线的呈现方式， 0 空间直线，1 测地线。 |
| clampToGround    | Boolean | `false`                                                     | `optional` 是否贴地量算。                            |
| alongLine        | Boolean | `true`                                                      | `optional` 是否显示沿线标注。                        |
| polylineWidth    | Number  | `2`                                                         | `optional` 指定线宽度。                              |
| polylineMaterial | Object  | `fabric: { type: 'Color', uniforms: { color: '#51ff00' } }` | `optional` 指定线材质                                |

---

### vc-measure-area

| 属性名           | 类型    | 默认值                                                                   | 描述                                                |
| ---------------- | ------- | ------------------------------------------------------------------------ | --------------------------------------------------- |
| mode             | Number  | `1`                                                                      | `optional` 测量模式，0 连续测量，1 测量一次就结束。 |
| font             | String  | `'100 20px SimSun'`                                                      | `optional` 指定标签 CSS 字体。                      |
| depthTest        | Boolean | `false`                                                                  | `optional` 指定标签文字和线对象是参与深度测试。     |
| clampToGround    | Boolean | `false`                                                                  | `optional` 是否贴地量算。                           |
| alongLine        | Boolean | `true`                                                                   | `optional` 是否显示沿线标注。                       |
| polylineMaterial | Object  | `fabric: { type: 'Color', uniforms: { color: '#51ff00' } }`              | `optional` 指定线材质                               |
| polylineWidth    | Number  | `2`                                                                      | `optional` 指定线宽度。                             |
| polygonMaterial  | Object  | `fabric: { type: 'Color', uniforms: { color: 'rgba(255,165,0,0.25)' } }` | `optional` 指定面材质。                             |

---

### vc-measure-height

| 属性名           | 类型    | 默认值                                                      | 描述                                                |
| ---------------- | ------- | ----------------------------------------------------------- | --------------------------------------------------- |
| mode             | Number  | `1`                                                         | `optional` 测量模式，0 连续测量，1 测量一次就结束。 |
| font             | String  | `'100 20px SimSun'`                                         | `optional` 指定标签 CSS 字体。                      |
| depthTest        | Boolean | `false`                                                     | `optional` 指定标签文字和线对象是参与深度测试。     |
| polylineWidth    | Number  | `2`                                                         | `optional` 指定线宽度。                             |
| polylineMaterial | Object  | `fabric: { type: 'Color', uniforms: { color: '#51ff00' } }` | `optional` 指定线材质。                             |

---

### 标签文字属性

| 属性名          | 类型                  | 默认值                     | 描述                                  |
| --------------- | --------------------- | -------------------------- | ------------------------------------- |
| backgroundColor | String\|Array\|Object | `'rgba(38, 38, 38, 0.85)'` | `optional` 指定标签文字背景颜色。     |
| fillColor       | String\|Array\|Object | `WHITE`                    | `optional` 指定文字标签填充色。       |
| font            | String                | `'100 20px SimSun'`        | `optional` 指定文字标签 CSS 字体。    |
| labelStyle      | Number                | `2`                        | `optional` 指定标签文字填充色。       |
| outlineColor    | String\|Array\|Object | `'BLUE'`                   | `optional` 指定标签文字轮廓线颜色。   |
| outlineWidth    | Number                | `1`                        | `optional` 指定标签文字轮廓线宽度。   |
| pixelOffset     | Object                | `{x: 15, y: -20}`          | `optional` 指定标签文字像素偏移。     |
| showBackground  | Boolean               | `true`                     | `optional` 指定标签文字是否显示背景。 |

## 事件

<!-- prettier-ignore -->
| 事件名 | 参数 | 描述 |
| ---------- | ----------------------------------- | ------------------- |
| activeEvt | { type: String, isActive: Boolean } | 量算开始或停止时触发，返回量算类型包括`'areaMeasuring'`、`'distanceMeasuring'`、`'heightMeasuring'`。 |
| movingEvt | Object | 量算过程中触发。返回鼠标位置。 |
| measureEvt | { polyline: Object, label: Object, type: String, finished: Boolean } | 量算过程中触发。返回量算的结果，文字标签对象。可以获取文字标签对象自定义文字单位小数点等。 |

## 方法

| 方法名 | 参数 | 描述                           |
| ------ | ---- | ------------------------------ |
| clear  |      | 清除量算结果（同时停止量算）。 |
