## VcMeasurements

加载量算工具组件，支持距离测量、三角测量、折线测量、高度测量、面积测量。

**注意：** 需要引入样式文件: `import 'vue-cesium/lib/theme-default/index.css';`

:::tip

提示：3.0 版本已将量算组件重构成一个组件。

:::

### 基础用法

量算组件的基础用法。

:::demo 使用 `vc-measurements` 标签在三维球上添加量算工具组件。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-measurements
      ref="measurementsRef"
      position="bottom-left"
      :measurementFabOptions="measurementFabOptions"
      @activeEvt="activeEvt"
      @measureEvt="measureEvt"
      :offset="[20, 50]"
      :editable="editable"
    ></vc-measurements>
    <vc-primitive-tileset url="./SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json" @readyPromise="onReadyPromise"> </vc-primitive-tileset>
    <vc-layer-imagery>
      <vc-provider-imagery-tianditu mapStyle="img_c" :maximumLevel="17" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
    <el-checkbox v-model="editable">可编辑</el-checkbox>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        editable: false,
        measurementFabOptions: {
          direction: 'right'
        }
      }
    },
    methods: {
      onReadyPromise(tileset, viewer) {
        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)
        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
        viewer.zoomTo(tileset)
        viewer.scene.globe.depthTestAgainstTerrain = true
        window.viewer = viewer
        window.vm = this
        // viewer.scene.primitives.add(Cesium.createOsmBuildings())
      },
      activeEvt (e) {
        console.log(e)
      },
      measureEvt (e) {
        console.log(e)
      },
      unload() {
        this.$refs.measurementsRef.unload()
      },
      load() {
        this.$refs.measurementsRef.load()
      },
      reload() {
        this.$refs.measurementsRef.reload()
      }
    }
  }
</script>
```

:::
