# 淹没分析

`vc-analytics-flood` 组件用于模拟淹没分析。其实质是用 `vc-primitive-classification` 加载 `vc-geometry-polygon`，通过动态修改 `vc-geometry-polygon` 的 `extrudedHeight` 属性拉伸成一个闭合体对象，从而模拟淹没分析。**注意**需要场景加载地形或 3DTiles 才可以分析。

## 示例

### 淹没分析

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-analytics-flood ref="flood" :minHeight="minHeight" :maxHeight="maxHeight" :speed="speed" :polygonHierarchy="polygonHierarchy" @activeEvt="activeEvt">
        </vc-analytics-flood>
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
        <vc-layer-imagery>
          <vc-provider-imagery-bingmaps :url="url" :bmKey="bmKey" mapStyle="Aerial"></vc-provider-imagery-bingmaps>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
         <md-input-container>
          <label>minHeight</label>
          <md-input v-model.number="minHeight"></md-input>
        </md-input-container>
        <md-input-container>
          <label>maxHeight</label>
          <md-input v-model.number="maxHeight"></md-input>
        </md-input-container>
        <span>speed</span>
        <vue-slider v-model="speed" :min="1" :max="100" :interval="1"  ></vue-slider>
        <md-button class="md-raised md-accent" @click="toggle">{{ flooding ? 'Stop' : 'Start' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">Clear</md-button>
      </div>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          minHeight: 0,
          maxHeight: 4000,
          speed: 10,
          polygonHierarchy: [
            {lng: 102.1, lat: 29.5},
            {lng: 106.2, lat: 29.5},
            {lng: 106.2, lat: 33.5},
            {lng: 102.1, lat: 33.5}
          ],
          url: 'https://dev.virtualearth.net',
          bmKey: 'AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-', // 可到(https://www.bingmapsportal.com/)申请Key。
          flooding: false
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          viewer.camera.setView({
            destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
            orientation: {
              heading: 6.20312220367255,
              pitch: -0.9937536846355606,
              roll: 0.002443376981836387
            }
          })
        },
        toggle (){
          this.$refs.flood.flooding = !this.$refs.flood.flooding
        },
        activeEvt (_) {
          this.flooding = _.isActive
        },
        clear () {
          this.$refs.flood.unload()
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-analytics-flood ref="flood" :minHeight="minHeight" :maxHeight="maxHeight" :speed="speed" :polygonHierarchy="polygonHierarchy" @activeEvt="activeEvt">
        </vc-analytics-flood>
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
        <vc-layer-imagery>
          <vc-provider-imagery-bingmaps :url="url" :bmKey="bmKey" mapStyle="Aerial"></vc-provider-imagery-bingmaps>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
         <md-input-container>
          <label>minHeight</label>
          <md-input v-model.number="minHeight"></md-input>
        </md-input-container>
        <md-input-container>
          <label>maxHeight</label>
          <md-input v-model.number="maxHeight"></md-input>
        </md-input-container>
        <span>speed</span>
        <vue-slider v-model="speed" :min="1" :max="100" :interval="1"  ></vue-slider>
        <md-button class="md-raised md-accent" @click="toggle">{{ flooding ? 'Stop' : 'Start' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">Clear</md-button>
      </div>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          minHeight: 0,
          maxHeight: 4000,
          speed: 10,
          polygonHierarchy: [
            {lng: 102.1, lat: 29.5},
            {lng: 106.2, lat: 29.5},
            {lng: 106.2, lat: 33.5},
            {lng: 102.1, lat: 33.5}
          ],
          url: 'https://dev.virtualearth.net',
          bmKey: 'AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-', // 可到(https://www.bingmapsportal.com/)申请Key。
          flooding: false
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          viewer.camera.setView({
            destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
            orientation: {
              heading: 6.20312220367255,
              pitch: -0.9937536846355606,
              roll: 0.002443376981836387
            }
          })
        },
        toggle (){
          this.$refs.flood.flooding = !this.$refs.flood.flooding
        },
        activeEvt (_) {
          this.flooding = _.isActive
        },
        clear () {
          this.$refs.flood.unload()
        }
      }
    }
  </script>
```

## 属性

| 属性名           | 类型   | 默认值 | 描述                                           |
| ---------------- | ------ | ------ | ---------------------------------------------- |
| minHeight        | Number | 0      | `optional` 最小高程。                          |
| maxHeight        | Number |        | `require` 最大高程。                           |
| speed            | Number | 10     | `optional` 速度。                              |
| polygonHierarchy | Array  |        | `require` 指定构建淹没分析多边形的经纬度数组。 |

---

## 事件

| 事件名    | 参数                | 描述                                                           |
| --------- | ------------------- | -------------------------------------------------------------- |
| ready     | {Cesium, viewer}    | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。            |
| activeEvt | {isActive: Boolean} | 淹没分析组件中 `flooding` 状态改变时触发，返回淹没分析是否开始。 |
