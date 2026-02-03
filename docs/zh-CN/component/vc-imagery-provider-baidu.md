# VcImageryProviderBaidu

加载百度地图或者跟百度地图一样的切片方案的瓦片服务，支持用 `projectionTransforms` 属性`纠偏`。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

## 基础用法

`vc-imagery-provider-baidu` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由百度地图提供的影像瓦片服务图层。

providers/vc-imagery-provider-baidu/usage

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ----- | ---- | ----- | ---- |
| url | string |  | `optional` 指定服务地址。 指定了 `url` 将忽略 `mapStyle` 属性。 |
| rectangle | VcRectangle | | `optional` 指定影像图层的矩形范围，此矩形限制了影像可见范围。 |
| credit | string\|Cesium.Credit | `''` | `optional` 服务版权描述信息。 |
| minimumLevel | number | `0` | `optional` 最小层级。 |
| maximumLevel | number | `18` | `optional` 最大层级。 |
| scale | number | `1` | `optional` 指定缩放。 |
| ak | string | `E4805d16520de693a3fe707cdc962045` | `optional` 指定百度地图key。 |
|subdomains|Array\<string\>|`['0', '1', '2', '3']`| `optional` 指定服务轮询参数。|
| mapStyle | 'img' \| 'vec' \| 'traffic' \| 'normal' \| 'light' \| 'dark' \| 'redalert' \| 'googlelite' \| 'grassgreen' \| 'midnight' \| 'pink' \| 'darkgreen' \| 'bluish' \| 'grayscale' \| 'hardedge' | `normal` | `optional` 指定自定义风格id。 |
| projectionTransforms | ProjectionTransforms |  | `optional` 指定投影变换参数。**结构： { from: 'BD09', to: 'WGS84' }** |
| protocol | string | `'https'` | `optional` 指定服务协议。 |

### Events

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

## 参考

- 资料： **[openlayers#3522](https://github.com/openlayers/openlayers/issues/3522)**
