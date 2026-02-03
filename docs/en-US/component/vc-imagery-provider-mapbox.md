# VcImageryProviderMapbox

Loading a tiled imagery provider that provides tiled imagery hosted by Mapbox. It is equivalent to initializing a `Cesium.MapboxStyleImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

## Basic usage

Basic usage of the `vc-imagery-provider-mapbox` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with MapboxStyleImageryProvider to the viewer.

providers/vc-imagery-provider-mapbox/usage

:::

## API

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string\|Cesium.Resource | `'https://api.mapbox.com/style/v1/'` | `optional` The Mapbox server url. |
| username | string | `'mapbox'` | `optional` The username of the map account. |
| styleId | string | | `optional` The Mapbox Style ID. |
| accessToken | string | | `optional` The public access token for the imagery. |
| tilesize | number | `512` | `optional` The size of the image tiles. |
| scaleFactor | boolean |  | `optional` Determines if tiles are rendered at a @2x scale factor. |
| ellipsoid | Cesium.Ellipsoid | | `optional` The ellipsoid. If not specified, the WGS84 ellipsoid is used. |
| minimumLevel | number | `0` | `optional` The minimum level-of-detail supported by the imagery provider. |
| maximumLevel | number | | `optional` The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. |
| rectangle | VcRectangle | | `optional` The rectangle, in radians, covered by the image. |
| credit | string | | `optional` A credit for the data source, which is displayed on the canvas. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

## Reference

- Refer to the official documentation: **[MapboxStyleImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/MapboxStyleImageryProvider.html)**
