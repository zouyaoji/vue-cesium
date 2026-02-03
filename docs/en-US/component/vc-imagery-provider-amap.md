# VcImageryProviderAmap

Load the amap tile service.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

## Basic usage

Basic usage of the `vc-imagery-provider-amap` component.

:::demo uses the `vc-layer-imagery` tag to add a tile service layer provided by Gaode on the viewer.

providers/vc-imagery-provider-amap/usage

:::

## API

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string | `'https://{domain}{s}.is.autonavi.com/appmaptile?lang={lang}&size=1&style={style}&scl={scl}&ltype={ltype}&x={x}&y={y}&z={z}'` | `optional` Specify the URL template.|
|domain| 'webst' \| 'webrd'| `'webst'` |`optional` Specify the domain name.|webst/webrd|
|subdomains|Array\<string\>|`['01', '02', '03', '04']`|`optional` Specify the service polling parameters.|
|lang| 'zh_cn' \| 'en'| `'zh_cn'` | `optional` Specify the language.|zh_cn/en|
| mapStyle | string | `'6'` | `optional` Specify the map style type of the amap service. '6': satellite image; '7': road map; '8': road map (with transparent background) | 6/7/8 |
| scl | '1' \| '2' | `'1'` | `optional` Specify size control parameters. '1': 256\*256; '2': 512\*512| 1/2 |
|ltype| string | `'0'` | Specify the type parameter. '0': default; '4': only annotations; '8': only roads |0/4/11|
| credit | string\|Cesium.Credit | `''` | `optional` A credit for the data source, which is displayed on the canvas. |
| rectangle | VcRectangle | | `optional` The rectangle, in radians, covered by the image.|
| minimumLevel | number | `0` | `optional` The minimum level-of-detail supported by the imagery provider. |
| maximumLevel | number | `20` | `optional` The maximum level-of-detail supported by the imagery provider. |
| tilingScheme | Cesium.GeographicTilingScheme \| Cesium.WebMercatorTilingScheme | `new Cesium.WebMercatorTilingScheme()` | `optional` The tiling scheme specifying how the ellipsoidal surface is broken into tiles.  |
| projectionTransforms | false\|ProjectionTransforms | `false` | `optional` Specify the projection transformation parameters. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

## Reference

- Refer to **[高德 WMTS 瓦片地图服务地图图源规律](https://www.jianshu.com/p/e34f85029fd7)**
