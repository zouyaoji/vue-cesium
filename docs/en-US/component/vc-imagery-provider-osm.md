# VcImageryProviderOsm

Loading a tiled imagery provider that provides tiled imagery hosted by OpenStreetMap or another provider of Slippy tiles. It is equivalent to initializing a `Cesium.OpenStreetMapImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

## Basic usage

Basic usage of the `vc-imagery-provider-osm` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with OpenStreetMapImageryProvider to the viewer.

providers/vc-imagery-provider-osm/usage

:::

## API

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string | `'https://a.tile.openstreetmap.org'` | `optional`The OpenStreetMap server url. |
| fileExtension | string | `'png'` | `required`The file extension for images on the server. |
| rectangle | VcRectangle | | `optional` The rectangle of the layer. |
| minimumLevel | number | `0` | `optional`The minimum level-of-detail supported by the imagery provider. |
| maximumLevel | number | | `optional`The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. |
| ellipsoid | Cesium.Ellipsoid | | `optional`The ellipsoid. If not specified, the WGS84 ellipsoid is used. |
| credit | string\| Cesium.Credit | `'MapQuest, Open Street Map and contributors, CC-BY-SA'` | `optional`A credit for the data source, which is displayed on the canvas. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

## Reference

- Refer to the official documentation: **[OpenStreetMapImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/OpenStreetMapImageryProvider.html)**
