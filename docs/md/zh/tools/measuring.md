# 量算

`measure-distance` `measure-area` `measure-height`

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
        <measure-distance ref="measureDistance" @activeEvt="activeEvt"></measure-distance>
        <measure-area :perPositionHeight="true" ref="measureArea" @activeEvt="activeEvt"></measure-area>
        <measure-height ref="measureHeight" @activeEvt="activeEvt"></measure-height>
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
      <measure-distance ref="measureDistance" @activeEvt="activeEvt"></measure-distance>
      <measure-area ref="measureArea" @activeEvt="activeEvt"></measure-area>
      <measure-height ref="measureHeight" @activeEvt="activeEvt"></measure-height>
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
      readyPromise(tileset) {
        const { viewer } = this.cesiumInstance
        viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
      }
    }
  }
</script>
```

## 属性

### measure-area

| 属性名            | 类型    | 默认值 | 描述                          |
| ----------------- | ------- | ------ | ----------------------------- |
| perPositionHeight | Boolean | true   | `optional` 测量面是否贴地形。 |
