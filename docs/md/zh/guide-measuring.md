<template lang="markdown">

# 量算

## 说明

由于 MVVM 数据驱动视图的特性，量算很方便。

## 示例

### 测量距离、面积、高度

#### 代码

```html
<template>
  <div class="viewer">
    <div style="position: absolute; left: 1%; top: 1%; width: 100px; z-index: 9999; color: white">
      <md-button class="md-raised md-accent" @click="toggle('distance')">{{ distanceMeasuring ? '停止量算' : '距离' }}</md-button>
      <md-button class="md-raised md-accent" @click="toggle('area')">{{ areaMeasuring ? '停止量算' : '面积' }}</md-button>
      <md-button class="md-raised md-accent" @click="toggle('height')">{{ heightMeasuring ? '停止量算' : '高度' }}</md-button>
      <md-button class="md-raised md-accent" @click="clear">清除</md-button>
    </div>
    <cesium-viewer @ready="ready" scene3DOnly>
      <cesium-3dtileset :url="modelUrl"></cesium-3dtileset>
      <measure-distance ref="measureDistance" :measuring="distanceMeasuring"></measure-distance>
      <measure-area ref="measureArea" :measuring="areaMeasuring"></measure-area>
      <measure-height ref="measureHeight" :measuring="heightMeasuring"></measure-height>
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
        heightMeasuring: false,
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
      },
      toggle (name) {
        this.distanceMeasuring = false
        this.areaMeasuring = false
        this.heightMeasuring = false
        if (name === 'distance'){
          this.distanceMeasuring = true
        }
        if (name === 'area'){
          this.areaMeasuring = true
        }
        if (name === 'height'){
          this.heightMeasuring = true
        }
      },
      clear () {
        this.$refs.measureDistance.clear()
        this.$refs.measureArea.clear()
        this.$refs.measureHeight.clear()
      }
    }
  }
</script>
```

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <div style="position: absolute; left: 1%; top: 1%; width: 100px; z-index: 9999; color: white">
        <md-button class="md-raised md-accent" @click="toggle('distance')">{{ distanceMeasuring ? '停止量算' : '距离' }}</md-button>
        <md-button class="md-raised md-accent" @click="toggle('area')">{{ areaMeasuring ? '停止量算' : '面积' }}</md-button>
        <md-button class="md-raised md-accent" @click="toggle('height')">{{ heightMeasuring ? '停止量算' : '高度' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">清除</md-button>
      </div>
      <cesium-viewer @ready="ready" scene3DOnly>
        <cesium-3dtileset :url="modelUrl"></cesium-3dtileset>
        <measure-distance ref="measureDistance" :measuring="distanceMeasuring"></measure-distance>
        <measure-area ref="measureArea" :measuring="areaMeasuring"></measure-area>
        <measure-height ref="measureHeight" :measuring="heightMeasuring"></measure-height>
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
          heightMeasuring: false,
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          window.viewer = viewer
          viewer.scene.globe.depthTestAgainstTerrain = true
        },
        toggle (name) {
          this.distanceMeasuring = false
          this.areaMeasuring = false
          this.heightMeasuring = false
          if (name === 'distance'){
            this.distanceMeasuring = true
          }
          if (name === 'area'){
            this.areaMeasuring = true
          }
          if (name === 'height'){
            this.heightMeasuring = true
          }
        },
        clear () {
          this.$refs.measureDistance.clear()
          this.$refs.measureArea.clear()
          this.$refs.measureHeight.clear()
        }
      }
    }
  </script>
</doc-preview>