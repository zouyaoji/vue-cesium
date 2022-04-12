## VcImageryProviderTianditu

加载天地图瓦片服务。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

### 基础用法

`vc-imagery-provider-tianditu` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由天地图提供的瓦片服务图层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- 注记层 -->
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
      <vc-imagery-provider-tianditu :map-style="mapStyle" token="436ce7e50d27eede2f2929307e6b33c0" ref="provider"></vc-imagery-provider-tianditu>
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
          <span class="demonstration">切换风格</span>
          <el-select v-model="mapStyle" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
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
      const options = [
        {
          value: 'img_c',
          label: '全球影像地图服务(经纬度)'
        },
        {
          value: 'img_w',
          label: '全球影像地图服务(墨卡托)'
        },
        {
          value: 'vec_c',
          label: '全球矢量地图服务(经纬度)'
        },
        {
          value: 'vec_w',
          label: '全球矢量地图服务(墨卡托)'
        },
        {
          value: 'ter_c',
          label: '全球地形晕渲服务(经纬度)'
        },
        {
          value: 'ter_w',
          label: '全球地形晕渲服务(墨卡托)'
        },
        {
          value: 'ibo_c',
          label: '全球境界(经纬度)'
        },
        {
          value: 'ibo_w',
          label: '全球境界(墨卡托)'
        }
      ]
      const mapStyle = ref('img_c')
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
        contrast,
        options,
        mapStyle
      }
    }
  }
</script>
```

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | ---- | ------ | --- | ------ |
| url | string |  | `optional` 指定服务 url 地址。指定了 url 时 mapStyle 将无效。  |
| mapStyle | string | `'img_w'` | `optional` 天地图服务地图类型。 |cia_c/cia_w/cta_c/cta_w/cva_c/cva_w/ela_c/ela_w/eva_c/eva_w/img_c/img_w/ter_c/ter_w/vec_c/vec_w/ibo_c/ibo_w|
| credit | string\| Cesium.Credit | `'天地图全球影像服务'` | `optional` 服务版权描述信息。 |
| token | string | | `optional` 天地图应用 key。 [申请地址](http://lbs.tianditu.gov.cn/home.html) |
| protocol | string | `https` | `optional` 指定请求协议类型。可以是`https`或者`http`。 |
| rectangle | VcRectangle | | `optional` 图层的矩形范围，此矩形限制了影像可见范围。 |
| minimumLevel | number | `0` | `optional` 最小层级。 |
| maximumLevel | number | `20` | `optional` 最大层级。 |
| projectionTransforms | ProjectionTransforms | `false` | `optional` 指定投影变换参数。**结构： { from: 'GCJ02', to: 'WGS84' }** |

:::tip

提示：

- mapStyle 可取值：
  - 'cia_c': 天地图全球中文注记服务（经纬度坐标系）。
  - 'cia_w': 天地图全球中文注记服务（墨卡托投影坐标系）。
  - 'cta_c': 天地图全球地形中文注记服务（经纬度坐标系）。
  - 'cta_w': 天地图全球地形中文注记服务（墨卡托投影坐标系）。
  - 'cva_c': 天地图全球矢量中文注记服务（经纬度坐标系）。
  - 'cva_w': 天地图全球矢量中文注记服务（墨卡托投影坐标系）。
  - 'ela_c': 天地图全球影像英文注记服务（经纬度坐标系）。
  - 'ela_w': 天地图全球影像英文注记服务（墨卡托投影坐标系）。
  - 'eva_c': 天地图全球矢量英文注记服务（经纬度坐标系）。
  - 'eva_w': 天地图全球矢量英文注记服务（墨卡托投影坐标系）。
  - 'img_c': 天地图全球影像地图服务（经纬度坐标系）。
  - 'img_w': 天地图全球影像地图服务（墨卡托投影坐标系）。
  - 'ter_c': 天地图全球地形晕渲服务（经纬度坐标系）。
  - 'ter_w': 天地图全球地形晕渲服务（墨卡托投影坐标系）。
  - 'vec_c': 天地图全球矢量地图服务（经纬度坐标系）。
  - 'vec_w': 天地图全球矢量地图服务（墨卡托投影坐标系）。
  - 'ibo_c': 天地图全球矢量地图服务（经纬度坐标系）。
  - 'ibo_w': 天地图全球境界服务（墨卡托投影坐标系）。

:::

### 事件

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

### 参考

- 资料： **[MapService](http://lbs.tianditu.gov.cn/server/MapService.html)**
