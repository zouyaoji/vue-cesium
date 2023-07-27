<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-07-06 11:29:45
 * @LastEditTime: 2023-07-27 22:12:32
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\zh-CN\providers\vc-terrain-provider-arcgis.md
-->

## VcTerrainProviderArcgis

加载 ArcGISTiledElevation 格式地形，相当于初始化一个 `Cesium.ArcGISTiledElevationTerrainProvider` 实例。

### 基础用法

`vc-terrain-provider-arcgis` 组件的基础用法。

:::demo 使用 `vc-terrain-provider-arcgis` 标签在三维球上添加由 ArcGIS MapServer 提供的在线地形瓦片服务。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady" :imageryProvider="imageryProvider">
    <vc-terrain-provider-arcgis ref="provider"></vc-terrain-provider-arcgis>
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
      const onViewerReady = async ({ Cesium, viewer }) => {
        imageryProvider.value = await Cesium.ArcGisMapServerImageryProvider.fromUrl(
          'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
        )
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

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string \| Cesium.Resource | `'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'` | `required` 指定服务地址。 |
| token | string | | `optional` 指定服务授权令牌。 |
| ellipsoid | Cesium.Ellipsoid | | `optional` 指定参考椭球体。 |

### 事件

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | (evt: Cesium.TileProviderError)         | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | (evt: boolean )                         | 当 provider 准备好使用时触发。                                    |

### 参考

- 官方文档： **[ArcGISTiledElevationTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/ArcGISTiledElevationTerrainProvider.html)**
