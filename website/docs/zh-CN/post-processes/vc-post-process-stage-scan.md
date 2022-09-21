<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-06-13 16:48:20
 * @LastEditTime: 2021-10-08 13:50:32
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\zh-CN\post-processes\vc-post-process-stage-scan.md
-->

## VcPostProcessStageScan

通过后期处理封装的扫描特效，雷达扫描和圆形扫描。

### 基础用法

扫描特效组件的基础用法。

:::demo 使用 `vc-post-process-stage-scan` 标签在三维球上添加后处理扫描效果。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-post-process-stage-scan ref="radar" type="radar" :options="options1"></vc-post-process-stage-scan>
    <vc-post-process-stage-scan ref="circle" type="circle" :options="options2"></vc-post-process-stage-scan>
    <!-- 底图 -->
    <vc-layer-imagery :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        options1: {
          position: [117.217124, 31.809777],
          radius: 1500,
          interval: 1500,
          color: [255, 255, 0, 255]
        },
        options2: {
          position: [117.257124, 31.809777],
          radius: 1500,
          interval: 1500,
          color: [255, 0, 0, 255]
        }
      }
    },
    methods: {
      onViewerReady({ viewer }) {
        window.viewer = viewer
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(117.237124, 31.809777, 10000.0),
          orientation: {
            heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north) //东西南北朝向
            pitch: Cesium.Math.toRadians(-90), // default value (looking down)  //俯视仰视视觉
            roll: 0.0 // default value
          },
          duration: 3 //3秒到达战场
        })
      },
      unload() {
        this.$refs.circle.unload()
        this.$refs.radar.unload()
      },
      load() {
        this.$refs.circle.load()
        this.$refs.radar.load()
      },
      reload() {
        this.$refs.circle.reload()
        this.$refs.radar.reload()
      }
    }
  }
</script>
```

:::

### 属性

| 属性名  | 类型   | 默认值                                                                      | 描述                                                |
| ------- | ------ | --------------------------------------------------------------------------- | --------------------------------------------------- |
| type    | string | `'radar'`                                                                   | `optional` 指定扫描类型，可选值 'radar', 'circle'。 |
| options | HeatmapConfiguration | `{ position: [0, 0], radius: 1500, interval: 3500, color: [0, 0, 0, 255] }` | `optional` 指定可选参数。                           |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |
