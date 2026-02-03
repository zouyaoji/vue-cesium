# VcImageryProviderBing

Loading a tiled imagery provider using the Bing Maps Imagery REST API. It is equivalent to initializing a `Cesium.BingMapsImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

## Basic usage

Basic usage of the `vc-imagery-provider-bing` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with BingMapsImageryProvider to the viewer.

providers/vc-imagery-provider-bing/usage

:::

## API

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| url | string \| Cesium.Resource | `'https://dev.virtualearth.net'` | `required` The url of the Bing Maps server hosting the imagery. |
| **bmKey** | string | | `optional` The Bing Maps key for your application, which can be created at [https://www.bingmapsportal.com/](https://www.bingmapsportal.com/). **Note that it is bmKey** |
| tileProtocol | string | | `optional` The protocol to use when loading tiles, e.g. 'http:' or 'https:'. By default, tiles are loaded using the same protocol as the page. |
| mapStyle | string | `'Aerial'` | `optional` The type of Bing Maps imagery to load. |Aerial/AerialWithLabels/AerialWithLabelsOnDemand/CanvasDark/CanvasGray/CanvasLight/CollinsBart/OrdnanceSurvey/Road/RoadOnDemand|
| culture | string | `''` | `optional` The culture to use when requesting Bing Maps imagery. Not all cultures are supported. See http://msdn.microsoft.com/en-us/library/hh441729.aspx for information on the supported cultures. |
| ellipsoid | Cesium.Ellipsoid | | `optional` The ellipsoid. If not specified, the WGS84 ellipsoid is used. |
| tileDiscardPolicy | Cesium.DiscardMissingTileImagePolicy \| Cesium.NeverTileDiscardPolicy | `optional` The policy that determines if a tile is invalid and should be discarded. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

## Reference

- Refer to the official documentation: **[BingMapsImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/BingMapsImageryProvider.html)**
