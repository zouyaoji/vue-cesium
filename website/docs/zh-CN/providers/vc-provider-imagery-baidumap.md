## VcProviderImageryBaidumap

加载百度地图或者跟百度地图一样的切片方案的瓦片服务，支持用`projectionTransforms`属性`纠偏`。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

### 基础用法

`vc-provider-imagery-baidumap` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由百度地图提供的影像瓦片服务图层。**注意**： 暂未找到 https 服务，示例只处理了几层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <vc-provider-imagery-baidumap ref="provider" :url="url" :projectionTransforms="{ form: 'BD09', to: 'WGS84' }"></vc-provider-imagery-baidumap>
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
          <span class="demonstration">切换服务</span>
          <el-select v-model="url" placeholder="请选择">
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
          value: 'http://{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1',
          label: '百度矢量瓦片地图'
        },
        {
          value: 'http://shangetu1.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46',
          label: '百度影像瓦片地图'
        },
        {
          value: 'http://api0.map.bdimg.com/customimage/tile?=&x={x}&y={y}&z={z}&scale=1&customid=midnight',
          label: '百度矢量瓦片地图-暗色'
        },
        {
          value: 'https://www.songluck.com/map/data/maptile-baidu-chengdu/{z}/{x}/{y}.png',
          label: '百度矢量瓦片地图-Custom'
        }
      ]
      const url = ref('https://www.songluck.com/map/data/maptile-baidu-chengdu/{z}/{x}/{y}.png')
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
        url
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
| url | String | `'http://{s}.map.bdimg.com/onlinelabel/?qt=tile&styles=pl&x={x}&y={y}&z={z}'` | `optional` 指定服务地址。 |
| rectangle | Object | | `optional` 指定影像图层的矩形范围，此矩形限制了影像可见范围。 |
| credit | String\|Object | `''` | `optional` 服务版权描述信息。 |
| minimumLevel | Number | `0` | `optional` 最小层级。 |
| maximumLevel | Number | `18` | `optional` 最大层级。 |
| projectionTransforms | Boolean\|Object |  | `optional` 指定投影变换参数。**结构： { from: 'BD09', to: 'WGS84' }** |

:::tip

提示：`rectangle` 属性除了可传 `Cesium.Rectangle` 还可以传 `PlainObject(RectangleInDegreeOption|Cartesian4Option`) 和 `Array<number>` (度)

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

- 资料： **[openlayers#3522](https://github.com/openlayers/openlayers/issues/3522)**
