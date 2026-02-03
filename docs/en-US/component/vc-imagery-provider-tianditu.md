# VcImageryProviderTianditu

Loading Tianditu WMTS imagery service. It is equivalent to initializing a `Cesium.WebMapTileServiceImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

## Basic usage

Basic usage of the `vc-imagery-provider-tianditu` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with Tianditu WMTS imagery provider to the viewer.

providers/vc-imagery-provider-tianditu/usage

:::

## API

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string | | `optional` The base URL for the WMTS GetTile operation. Default: `https://{s}.tianditu.gov.cn`. |
| subdomains | string\| Array\<string\> | `['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']` | `optional` The subdomains to use for the GetTile requests. |
| token | string | | `optional` Specify the Tianditu service secret key, which you get after registering an account. **Only valid for base map and labels**. |
| mapStyle | TiandituImageryStyle | `'img_w'` | `optional` Specify the style of Tianditu imagery map. |
| format | string | `'tiles'` | `optional` The MIME type for images to retrieve from the server. |
| tileMatrixSetID | string | `'w'` | `optional` The identifier of the TileMatrixSet to use for WMTS requests. |
| minimumLevel | number | `0` | `optional` The minimum level-of-detail supported by the imagery provider. |
| maximumLevel | number | `18` | `optional` The maximum level-of-detail supported by the imagery provider. |
| rectangle | VcRectangle | | `optional` The rectangle of the layer. |
| credit | string\| Cesium.Credit | `'天地图全球影像服务'` | `optional` A credit for the data source. |
| projectionTransforms | ProjectionTransforms | `false` | `optional` Specify projection transformation parameters. **structure: { from: 'GCJ02', to: 'WGS84' }** |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

## Reference

- Refer to the official documentation: **[WebMapTileServiceImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/WebMapTileServiceImageryProvider.html)**
