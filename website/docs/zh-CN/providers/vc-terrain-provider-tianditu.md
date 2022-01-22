<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-07-13 18:01:38
 * @LastEditTime: 2022-01-16 00:47:05
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\zh-CN\providers\vc-terrain-provider-tianditu.md
-->

## VcTerrainProviderTianditu

加载天地图在线地形。

### 基础用法

`vc-terrain-provider-tianditu` 组件的基础用法。

:::demo 使用 `vc-terrain-provider-tianditu` 标签在三维球上添加由天地图提供的在线地形瓦片服务。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="ready" :camera="{position: [102.8,30.57,6000],heading: 162, pitch: -18.25, roll: 0.05}">
    <vc-terrain-provider-tianditu ref="provider" token="436ce7e50d27eede2f2929307e6b33c0"></vc-terrain-provider-tianditu>
    <vc-layer-imagery>
      <vc-imagery-provider-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery>
      <vc-imagery-provider-tianditu mapStyle="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <div class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">销毁</el-button>
      <el-button type="danger" round @click="load">加载</el-button>
      <el-button type="danger" round @click="reload">重载</el-button>
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
      const ready = ({ Cesium, viewer }) => {}
      return {
        ready,
        provider,
        unload,
        reload,
        load
      }
    }
  }
</script>
```

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| --------------- | ------- | -------------------------------- | ------------------------------------------------------------------- |
| url | String | `'https://{s}.tianditu.gov.cn/'` | `required` 指定服务地址。 |
| subdomains | Array | `false` | `['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']` 指定轮询子域名。 |
| pluginPath | String | `'https://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt.js'` | `optional` 指定天地图地形插件库地址。 |
| dataType | String | `int` | `optional` 指定数据类型。 |
| tileType | String | `heightmap` | `optional` 指定瓦片类型。 |
| token | String | | `optional` 指定天地图服务秘钥。 |

### 事件

| 事件名       | 参数                               | 描述                                                              |
| ------------ | ---------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | Vue Instance                       | 对象加载前触发。                                                  |
| ready        | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。                                              |
| destroyed    | Vue Instance                       | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                  | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | TerrainProvider                    | 当图层提供者可用时触发, 返回 TerrainProvider 实例。               |

### 参考

- 资料： **[天地图帮助文档](http://lbs.tianditu.gov.cn/docs/#/sanwei/)**

### 已知问题

- 使用未压缩的构建库 `/CesiumUnminified/Cesium.js` 会抛出异常。
  ```html
  cesiumTdt.js:12 Uncaught ReferenceError: Zlib is not defined at cesiumTdt.js:12 at XMLHttpRequest.i.onreadystatechange (cesiumTdt.js:12)
  ```
  引入 `/Cesium/Cesium.js` 即可解决。
