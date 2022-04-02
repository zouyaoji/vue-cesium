## VcImageryProviderSingletile

加载单个图片做为影像底图，仅支持经纬度投影，图片宽高比最好为 2：1，否则会有拉伸，相当于初始化一个 `Cesium.SingleTileImageryProvider` 实例。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

### 基础用法

`vc-imagery-provider-singletile` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加单图片影像图层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <vc-imagery-provider-singletile
        ref="provider"
        url="https://zouyaoji.top/vue-cesium/SampleData/images/worldimage.jpg"
      ></vc-imagery-provider-singletile>
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
      return {
        provider,
        unload,
        reload,
        load,
        alpha,
        brightness,
        contrast
      }
    }
  }
</script>
```

:::

### 属性

| 属性名    | 类型                    | 默认值 | 描述                                                 |
| --------- | ----------------------- | ------ | ---------------------------------------------------- |
| url       | string\|Cesium.Resource |        | `required` 指定服务地址。                            |
| rectangle | VcRectangle             |        | `optional` 图层的矩形范围,此矩形限制了影像可见范围。 |
| credit    | string\|Cesium.Credit   |        | `optional` 指定服务的描述信息。                      |
| ellipsoid | Cesium.Ellipsoid        |        | `optional` 参考椭球体。                              |

### 事件

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

### 参考

- 官方文档： **[SingleTileImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/SingleTileImageryProvider.html)**
