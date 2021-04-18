## VcProviderTerrainCesium

加载 Cesium 格式地形，相当于初始化一个 `Cesium.CesiumTerrainProvider` 实例。如果 `url` 为空，默认通过 `Cesium.createWorldTerrain` 加载 CesiumIon 在线全球地形，需要 CesiumIon 授权， 具体可以到 [`https://cesium.com/ion/`](https://cesium.com/ion/) 申请一个账户，获取 Access Token。

### 基础用法

`vc-provider-terrain-cesium` 组件的基础用法。

:::demo 使用 `vc-provider-terrain-cesium` 标签在三维球上添加由 Cesium Ion 提供的在线地形瓦片服务。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady" :imageryProvider="imageryProvider">
    <vc-provider-terrain-cesium ref="provider"></vc-provider-terrain-cesium>
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
      const imageryProvider = ref(null)
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
      const onViewerReady = ({ Cesium, viewer }) => {
        imageryProvider.value = new Cesium.ArcGisMapServerImageryProvider({
          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
        })
        var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)
        var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)
        viewer.camera.lookAt(target, offset)
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
      }
      return {
        provider,
        unload,
        reload,
        load,
        imageryProvider,
        onViewerReady
      }
    }
  }
</script>
```

:::

### 属性

| 属性名               | 类型    | 默认值  | 描述                                                        |
| -------------------- | ------- | ------- | ----------------------------------------------------------- |
| url                  | String  |         | `required` 指定服务地址。                                   |
| requestVertexNormals | Boolean | `false` | `optional` 指定是否请求其他光照信息，否则使用每个顶点法线。 |
| requestWaterMask     | Boolean | `false` | `optional` 指定是否请求水面数据。                           |
| requestMetadata      | Boolean | `true`  | `optional` 指定是否请求每个切片元数据。                     |
| ellipsoid            | Object  |         | `optional` 指定参考椭球体。                                 |
| credit               | String  |         | `optional` 指定服务的描述信息                               |

### 事件

| 事件名       | 参数                               | 描述                                                              |
| ------------ | ---------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | Vue Instance                       | 对象加载前触发。                                                  |
| ready        | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。                                              |
| destroyed    | Vue Instance                       | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                  | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | TerrainProvider                    | 当图层提供者可用时触发, 返回 TerrainProvider 实例。               |

### 参考

- 官方文档： **[CesiumTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/CesiumTerrainProvider.html)**
