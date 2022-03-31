## TencentImageryProvider

加载腾讯地图瓦片服务。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

### 基础用法

`vc-imagery-provider-tencent` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由腾讯提供的瓦片服务图层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
      <vc-imagery-provider-tencent
        :mapStyle="mapStyle"
        :styleId="styleId"
        :projectionTransforms="projectionTransforms"
        ref="provider"
      ></vc-imagery-provider-tencent>
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
          <span class="demonstration" v-if="mapStyle === 'vector'">切换类型</span>
          <el-select v-model="styleId" placeholder="请选择" v-if="mapStyle === 'vector'">
            <el-option v-for="item in styleIdOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
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
          value: 'img',
          label: '卫星影像'
        },
        {
          value: 'terrain',
          label: '地形图'
        },
        {
          value: 'vector',
          label: '道路图'
        }
      ]
      const styleIdOptions = [
        {
          value: '1',
          label: '经典'
        },
        {
          value: '2',
          label: '标签1'
        },
        {
          value: '3',
          label: '标签2'
        },
        {
          value: '4',
          label: '墨渊'
        },
        {
          value: '8',
          label: '白浅'
        },
        {
          value: '9',
          label: '浅灰'
        }
      ]
      const mapStyle = ref('vector')
      const styleId = ref('1')
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
        styleIdOptions,
        styleId,
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
| url | string |  | `optional` 指定服务地址。 |
|subdomains|Array\<string\>|`['1', '2', '3']`| `optional` 指定服务轮询参数。|
| mapStyle | string | `'vector'` | `optional` 指定腾讯地图服务地图风格类型。'img': 卫星影像; 'terrain': 地形图; 'vector': 道路图 | img/terrain/vector |
|styleId| string | `'1'` | 指定风格id，mapStyle 为 vector 时有效。1: 经典; 2: 标签; 3: 标签; 4: 墨渊; 8: 白浅; 9: 灰色 |1/2/3/4/8/9|
| protocol | string |  | `optional` 指定服务协议。 |http/https|
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

- 资料： **[DCSDK](http://dc.dvgis.cn/#/editor?type=baselayer&example=tencent)**
