# 量算

- `measure-distance` 距离量算组件。
- `measure-area` 面积量算组件。
- `measure-height`高度量算组件。

## 示例

### 测量距离、面积、高度

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="toggle('measureDistance')">{{ distanceMeasuring ? '停止' : '距离' }}</md-button>
        <md-button class="md-raised md-accent" @click="toggle('measureArea')">{{ areaMeasuring ? '停止' : '面积' }}</md-button>
        <md-button class="md-raised md-accent" @click="toggle('measureHeight')">{{ heightMeasuring ? '停止' : '高度' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">清除</md-button>
      </div>
      <cesium-viewer @ready="ready" scene3DOnly>
        <cesium-3dtileset :url="modelUrl" @readyPromise="readyPromise"></cesium-3dtileset>
        <measure-distance ref="measureDistance" @activeEvt="activeEvt" @measureEvt="measureEvt"></measure-distance>
        <measure-area ref="measureArea" @activeEvt="activeEvt" @measureEvt="measureEvt" :perPositionHeight="true"></measure-area>
        <measure-height ref="measureHeight" @activeEvt="activeEvt" @measureEvt="measureEvt"></measure-height>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          distanceMeasuring: false,
          areaMeasuring: false,
          heightMeasuring: false
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.cesiumInstance = cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
        },
        toggle (type) {
          this.$refs[type].measuring = !this.$refs[type].measuring
        },
        clear () {
          this.$refs.measureDistance.clear()
          this.$refs.measureArea.clear()
          this.$refs.measureHeight.clear()
        },
        activeEvt (_) {
          this[_.type] = _.isActive
        },
        measureEvt(result) {
          console.log(result)
        },
        readyPromise (tileset) {
          const {viewer} = this.cesiumInstance
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
    <div class="demo-tool">
      <md-button class="md-raised md-accent" @click="toggle('measureDistance')"
        >{{ distanceMeasuring ? '停止' : '距离' }}</md-button
      >
      <md-button class="md-raised md-accent" @click="toggle('measureArea')"
        >{{ areaMeasuring ? '停止' : '面积' }}</md-button
      >
      <md-button class="md-raised md-accent" @click="toggle('measureHeight')"
        >{{ heightMeasuring ? '停止' : '高度' }}</md-button
      >
      <md-button class="md-raised md-accent" @click="clear">清除</md-button>
    </div>
    <cesium-viewer @ready="ready" scene3DOnly>
      <cesium-3dtileset :url="modelUrl" @readyPromise="readyPromise"></cesium-3dtileset>
      <measure-distance ref="measureDistance" @activeEvt="activeEvt" @measureEvt="measureEvt"></measure-distance>
      <measure-area
        ref="measureArea"
        @activeEvt="activeEvt"
        @measureEvt="measureEvt"
        :perPositionHeight="true"
      ></measure-area>
      <measure-height ref="measureHeight" @activeEvt="activeEvt" @measureEvt="measureEvt"></measure-height>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
        distanceMeasuring: false,
        areaMeasuring: false,
        heightMeasuring: false
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
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
      readyPromise(tileset) {
        const { viewer } = this.cesiumInstance
        viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
      }
    }
  }
</script>
```

## 属性

### measure-distance

| 属性名       | 类型   | 默认值              | 描述                                                |
| ------------ | ------ | ------------------- | --------------------------------------------------- |
| mode         | Number | `1`                 | `optional` 测量模式，0 连续测量，1 测量一次就结束。 |
| font         | String | `'100 20px SimSun'` | `optional` 指定标签 CSS 字体。                      |
| distanceText | String | `'距离：'`          | `optional` 指定距离文字。                           |

---

### measure-area

| 属性名            | 类型    | 默认值              | 描述                                                                                        |
| ----------------- | ------- | ------------------- | ------------------------------------------------------------------------------------------- |
| perPositionHeight | Boolean | `true`              | `optional` 面是否使用每个点的高度，否的话绘制的面是贴地的。（但面积算法还不是算的贴地面积） |
| mode              | Number  | `1`                 | `optional` 测量模式，0 连续测量，1 测量一次就结束。                                         |
| font              | String  | `'100 20px SimSun'` | `optional` 指定标签 CSS 字体。                                                              |
| areaText          | String  | `'面积：'`          | `optional` 指定面积文字。                                                                   |

---

### measure-height

| 属性名        | 类型   | 默认值              | 描述                                                |
| ------------- | ------ | ------------------- | --------------------------------------------------- |
| mode          | Number | `1`                 | `optional` 测量模式，0 连续测量，1 测量一次就结束。 |
| font          | String | `'100 20px SimSun'` | `optional` 指定标签 CSS 字体。                      |
| distanceHText | String | `'水平距离：'`      | `optional` 指定水平距离文字。                       |
| distanceSText | String | `'空间距离：'`      | `optional` 指定空间距离文字。                       |
| heightText    | String | `'垂直高度：'`      | `optional` 指定垂直高度文字。                       |

---

## 事件

| 事件名     | 参数                                | 描述                                                                                                  |
| ---------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------- |
| activeEvt  | { type: String, isActive: Boolean } | 量算开始或停止时触发，返回量算类型包括`'areaMeasuring'`、`'distanceMeasuring'`、`'heightMeasuring'`。 |
| measureEvt | { polyline: Object, label: Object } | 量算过程中触发。返回量算的结果，文字标签对象。可以获取文字标签对象自定义文字单位小数点等。            |

## 方法

| 方法名 | 参数 | 描述                           |
| ------ | ---- | ------------------------------ |
| clear  |      | 清除量算结果（同时停止量算）。 |
