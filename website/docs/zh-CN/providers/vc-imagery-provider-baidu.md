## VcImageryProviderBaidu

加载百度地图或者跟百度地图一样的切片方案的瓦片服务，支持用`projectionTransforms`属性`纠偏`。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

### 基础用法

`vc-imagery-provider-baidu` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由百度地图提供的影像瓦片服务图层。**注意**： 暂未找到 https 服务，示例只处理了几层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <vc-imagery-provider-baidu
        ref="provider"
        :customid="customid"
        :projectionTransforms="{ form: 'BD09', to: 'WGS84' }"
      ></vc-imagery-provider-baidu>
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
          <el-select v-model="customid" placeholder="请选择">
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
          value: 'normal',
          label: '默认样式'
        },
        {
          value: 'img',
          label: '百度影像' // 不支持https
        },
        {
          value: 'dark',
          label: '黑夜风格'
        },
        {
          value: 'midnight',
          label: '午夜蓝'
        },
        {
          value: 'traffic',
          label: '百度路况'
        }
      ]
      const customid = ref('normal')
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
        customid
      }
    }
  }
</script>
```

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ----- | ---- | ----- | ---- |
| url | String |  | `optional` 指定服务地址。 指定了 `url` 将忽略 `customid` 属性。 |
| rectangle | Object\|Object | | `optional` 指定影像图层的矩形范围，此矩形限制了影像可见范围。 |
| credit | String\|Object | `''` | `optional` 服务版权描述信息。 |
| minimumLevel | Number | `0` | `optional` 最小层级。 |
| maximumLevel | Number | `18` | `optional` 最大层级。 |
| scale | Number | `1` | `optional` 指定缩放。 |
| ak | String | `E4805d16520de693a3fe707cdc962045` | `optional` 指定百度地图key。 |
| customid | String | `normal` | `optional` 指定自定义风格id。 |img/vec/traffic/normal/light/dark/redalert/googlelite/grassgreen/midnight/pink/darkgreen/bluish/grayscale/hardedge|
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

<!-- prettier-ignore -->
| 事件名 | 参数 | 描述 |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。 |
| ready | (readyObj: VcReadyObject) | 对象加载成功时触发。 |
| destroyed | (instance: VcComponentInternalInstance) | 对象销毁时触发。 |
| errorEvent | (evt: Cesium.TileProviderError) | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | (provider: VcTerrainProvider) | VcImageryProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) | 当图层提供者可用时触发, 返回 ImageryProvider 实例。 |

### 参考

- 资料： **[openlayers#3522](https://github.com/openlayers/openlayers/issues/3522)**
