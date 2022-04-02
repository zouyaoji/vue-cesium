## VcImageryProviderSupermap

加载由超图 iServer 提供的影像瓦片服务。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

### 基础用法

`vc-imagery-provider-supermap` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由超图 iServer 提供的影像瓦片服务图层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <vc-imagery-provider-supermap
        @ready-promise="onImageryProviderReady"
        ref="provider"
        url="https://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult"
      ></vc-imagery-provider-supermap>
    </vc-layer-imagery>
  </vc-viewer>
  <div class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">销毁</el-button>
      <el-button type="danger" round @click="load">加载</el-button>
      <el-button type="danger" round @click="reload">重载</el-button>
    </el-row>
    <el-row>
      <el-col>
        <div class="block">
          <span class="demonstration">透明度</span>
          <el-slider v-model="alpha" :min="0" :max="1" :step="0.01"></el-slider>
          <span class="demonstration">亮度</span>
          <el-slider v-model="brightness" :min="0" :max="5" :step="0.01"></el-slider>
          <span class="demonstration">对比度</span>
          <el-slider v-model="contrast" :min="0" :max="5" :step="0.01"></el-slider>
        </div>
      </el-col>
    </el-row>
  </div>
</el-row>

<script>
  import { ref, getCurrentInstance } from 'vue'
  export default {
    setup() {
      // state
      const instance = getCurrentInstance()
      const provider = ref(null)
      const alpha = ref(1)
      const brightness = ref(1)
      const contrast = ref(1)
      let viewer = undefined
      // methods
      const unload = () => {
        provider.value.unload()
      }
      const reload = () => {
        provider.value.reload()
      }
      const load = () => {
        provider.value.load()
      }
      const onImageryProviderReady = imageryProvider => {
        viewer.camera.flyTo({ destination: imageryProvider.rectangle })
      }
      const onViewerReady = cesiumInstance => {
        viewer = cesiumInstance.viewer
      }
      return {
        provider,
        unload,
        reload,
        load,
        alpha,
        brightness,
        contrast,
        onImageryProviderReady,
        onViewerReady
      }
    }
  }
</script>
```

:::

### 属性

| 属性名               | 类型                  | 默认值                                 | 描述                                                    |
| -------------------- | --------------------- | -------------------------------------- | ------------------------------------------------------- |
| url                  | string                |                                        | `required` 超图 iserver 影像服务地址。                  |
| name                 | string                |                                        | `optional` 影像图层名称。                               |
| minimumLevel         | number                | `0`                                    | `optional` 最小层级。                                   |
| maximumLevel         | number                | `20`                                   | `optional` 最大层级。                                   |
| transparent          | boolean               | `true`                                 | `optional` 设置请求的地图服务的参数是否为 transparent。 |
| credit               | string\|Cesium.Credit | `'MapQuest, SuperMap iServer Imagery'` | `optional` 影像服务描述信息。                           |
| projectionTransforms | ProjectionTransforms  | `false`                                | `optional` 指定投影变换参数。                           |

### 事件

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

### 参考

- 资料： **[SuperMapImageryProvider](http://support.supermap.com.cn:8090/webgl/docs/Documentation/SuperMapImageryProvider.html)**
