## VcProviderImageryBingmaps

加载微软必应地图影像服务，相当于初始化一个 `Cesium.BingMapsImageryProvider` 实例。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

### 基础用法

`vc-provider-imagery-bingmaps` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由微软必应地图提供的影像瓦片服务图层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <!-- 可到(https://www.bingmapsportal.com/)申请Key。 -->
      <vc-provider-imagery-bingmaps
        ref="provider"
        bmKey="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"
        :mapStyle="mapStyle"
      ></vc-provider-imagery-bingmaps>
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
          value: 'Aerial',
          label: 'Aerial'
        },
        {
          value: 'AerialWithLabels',
          label: 'AerialWithLabels'
        },
        {
          value: 'Road',
          label: 'Road'
        },
        {
          value: 'CanvasDark',
          label: 'CanvasDark'
        }
      ]
      const mapStyle = ref('Aerial')
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
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------------------- | ------- | -------------------- |--|
| url | String \| Object | `'https://dev.virtualearth.net'` | `required` 指定服务地址。 |
| **bmKey** | String | | `optional`指定 BingMaps 地图 API 秘钥，可到[https://www.bingmapsportal.com/](https://www.bingmapsportal.com/)申请 Key。 **注意是bmKey** |
| tileProtocol | String | | `optional`指定地图是 http 还是 https 加载，默认与页面相同。 |
| mapStyle | String | `'Aerial'` | `optional`指定加载的 BingMaps 类型。 |
| culture | String | `''` | `optional`指定服务的描述信息。 |
| ellipsoid | Object | | `optional`参考椭球体 |
| tileDiscardPolicy | Object | | `optional`指定 tile 无效时的舍弃瓦片的方案。 |

:::tip

提示： `mapStyle` 可选值 `Aerial`, `AerialWithLabels`, `AerialWithLabelsOnDemand`, `CanvasDark`, `CanvasGray`, `CanvasLight`, `CollinsBart`, `OrdnanceSurvey`, `Road`, `RoadOnDemand`。

`rectangle` 属性除了可传 `Cesium.Rectangle` 还可以传 `PlainObject(RectangleInDegreeOption|Cartesian4Option`) 和 `Array<number>` (度)

:::

:::tipflex

```js
// RectangleInDegreeOption
{
  west: number,
  south: number,
  east: number,
  north: number
}
```

```js
// Cartesian4Option
{
  x: number,
  y: number,
  z: number,
  w: number
}
```

```js
// Array<number> in degrees
;[number, number, number, number]
```

:::

### 事件

| 事件名       | 参数                               | 描述                                                              |
| ------------ | ---------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | Vue Instance                       | 对象加载前触发。                                                  |
| ready        | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。                                              |
| destroyed    | Vue Instance                       | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                  | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                    | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

### 参考

- 官方文档： **[BingMapsImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/BingMapsImageryProvider.html)**
