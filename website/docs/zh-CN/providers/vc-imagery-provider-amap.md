## AMapImageryProvider

加载高德地图瓦片服务。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

### 基础用法

`vc-imagery-provider-amap` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由高德提供的瓦片服务图层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- 注记层 -->
    <!-- <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="20">
      <vc-imagery-provider-amap map-style="8" ltype="4"></vc-imagery-provider-amap>
    </vc-layer-imagery> -->
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
      <vc-imagery-provider-amap
        :map-style="mapStyle"
        :ltype="ltype"
        :projection-transforms="projectionTransforms"
        :minimumLevel="0"
        :maximumLevel="18"
        ref="provider"
      ></vc-imagery-provider-amap>
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
        <div class="block" style="display: flex; flex-direction: column;">
          <span class="demonstration">透明度</span>
          <el-slider v-model="alpha" :min="0" :max="1" :step="0.01"></el-slider>
          <span class="demonstration">亮度</span>
          <el-slider v-model="brightness" :min="0" :max="5" :step="0.01"></el-slider>
          <span class="demonstration">对比度</span>
          <el-slider v-model="contrast" :min="0" :max="5" :step="0.01"></el-slider>
          <span class="demonstration">切换风格</span>
          <el-select v-model="mapStyle" placeholder="请选择">
            <el-option v-for="item in mapStyleOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
          <span class="demonstration" v-if="mapStyle !== '6'">切换类型</span>
          <el-select v-model="ltype" placeholder="请选择" v-if="mapStyle !== '6'">
            <el-option v-for="item in ltypeOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
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
      const mapStyleOptions = [
        {
          value: '6',
          label: '卫星影像'
        },
        {
          value: '7',
          label: '道路图'
        },
        {
          value: '8',
          label: '道路图（背景透明）'
        }
      ]
      const ltypeOptions = [
        {
          value: '0',
          label: '默认'
        },
        {
          value: '4',
          label: '只有注记'
        },
        {
          value: '11',
          label: '只有道路'
        }
      ]
      const mapStyle = ref('7')
      const ltype = ref('0')
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
      const projectionTransforms = {
        from: 'GCJ02',
        to: 'WGS84'
      }
      return {
        provider,
        unload,
        reload,
        load,
        alpha,
        brightness,
        contrast,
        mapStyleOptions,
        mapStyle,
        ltypeOptions,
        ltype,
        projectionTransforms
      }
    }
  }
</script>
```

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| -------------------- | --------------- | --------- | ---------------------------------------------------------------------------- | ------ |
| url | string | `'https://{domain}{s}.is.autonavi.com/appmaptile?lang={lang}&size=1&style={style}&scl={scl}&ltype={ltype}&x={x}&y={y}&z={z}'` | `optional` 指定服务地址。 |
|domain| 'webst' \| 'webrd'| `'webst'` | `optional` 指定域名。|webst/webrd|
|subdomains|Array\<string\>|`['01', '02', '03', '04']`| `optional` 指定服务轮询参数。|
|lang| 'zh_cn' \| 'en'| `'zh_cn'` | `optional` 指定语言。|zh_cn/en|
| mapStyle | string | `'6'` | `optional` 指定高德地图服务地图风格类型。'6': 卫星影像; '7': 道路图; '8': 道路图(背景透明) | 6/7/8 |
| scl | '1' \| '2' | `'1'` | `optional` 指定尺寸控制参数。 '1': 256\*256; '2': 512\*512| 1/2 |
|ltype| string | `'0'` | 指定类型参数。'0': 默认; '4': 只有注记; '8': 只有道路 |0/4/11|
| credit | string\|Cesium.Credit | `''` | `optional` 服务版权描述信息。 |
| rectangle | VcRectangle | | `optional` 图层的矩形范围，此矩形限制了影像可见范围。 |
| minimumLevel | number | `0` | `optional` 最小层级。 |
| maximumLevel | number | `20` | `optional` 最大层级。 |
| tilingScheme | Cesium.GeographicTilingScheme \| Cesium.WebMercatorTilingScheme | `new Cesium.WebMercatorTilingScheme()` | `optional` 指定将影像瓦片展开到地球的投影方案。 |
| projectionTransforms | boolean\|ProjectionTransforms | `false` | `optional` 指定投影变换参数。**结构： { from: 'GCJ02', to: 'WGS84' }** |

### 事件

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

### 参考

- 资料： **[高德 WMTS 瓦片地图服务地图图源规律](https://www.jianshu.com/p/e34f85029fd7)**
