# VcImageryProviderArcgis

Loading a tiled imagery provider that provides tiled imagery hosted by an ArcGIS MapServer. It is equivalent to initializing a `Cesium.ArcGisMapServerImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

## Basic usage

Basic usage of the `vc-imagery-provider-arcgis` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with ArcGisMapServerImageryProvider to the viewer.

providers/vc-imagery-provider-arcgis/usage

:::

## API

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string \| Cesium.Resource | `'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'` | `optional` The URL of the ArcGIS MapServer service. |
|token|string||`optional` The ArcGIS token used to authenticate with the ArcGIS MapServer service.|
|tileDiscardPolicy|Cesium.DiscardMissingTileImagePolicy \| Cesium.NeverTileDiscardPolicy||`optional` The policy that determines if a tile is invalid and should be discarded.|
|usePreCachedTilesIfAvailable|boolean|`true`|`optional` If true, the server's pre-cached tiles are used if they are available. If false, any pre-cached tiles are ignored and the 'export' service is used.|
|layers|string||`optional` A comma-separated list of the layers to show, or undefined if all layers should be shown.|
|enablePickFeatures|boolean|`true`|`optional` If true, ArcGisMapServerImageryProvider#pickFeatures will invoke the Identify service on the MapServer and return the features included in the response. If false, ArcGisMapServerImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you don't want this provider's features to be pickable. Can be overridden by setting the ArcGisMapServerImageryProvider#enablePickFeatures property on the object.|
|rectangle|VcRectangle||`optional` The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider. |
|tilingScheme|Cesium.GeographicTilingScheme \| Cesium.WebMercatorTilingScheme||`optional` The tiling scheme to use to divide the world into tiles. This parameter is ignored when accessing a tiled server.|
|ellipsoid|Cesium.Ellipsoid||`optional` The ellipsoid. If the tilingScheme is specified and used, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.|
|credit|string||`optional` A credit for the data source, which is displayed on the canvas. This parameter is ignored when accessing a tiled server.|
|tileWidth|number|`256`|`optional` The width of each tile in pixels. This parameter is ignored when accessing a tiled server.|
|tileHeight|number|`256`|`optional` The height of each tile in pixels. This parameter is ignored when accessing a tiled server.|
|maximumLevel|number||`optional` The maximum tile level to request, or undefined if there is no maximum. This parameter is ignored when accessing a tiled server.|

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

## Reference

- Refer to the official documentation: **[ArcGisMapServerImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/ArcGisMapServerImageryProvider.html)**
