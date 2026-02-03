# VcImageryProviderBaidu

Loading a tiled imagery provider that provides tiled imagery hosted by Baidu Map. You can use `projectionTransforms` to transform the coordinates of the tiles.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

## Basic usage

Basic usage of the `vc-imagery-provider-baidu` component.

:::demo Use the `vc-layer-imagery` tag to add a imagery layer provided by Baidu Maps on the viewer.

providers/vc-imagery-provider-baidu/usage

:::

## API

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string | | `optional` Specify the service address. |
| rectangle | VcRectangle | | `optional` The rectangle of the layer. This parameter is ignored when accessing a tiled layer. |
| credit | string \| Cesium.Credit | `''` | `optional` A credit for the data source, which is displayed on the canvas. |
| minimumLevel | number | `0` | `optional` The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems. |
| maximumLevel | number | `18` | `optional` The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. |
| scale | number | `1` | `optional` Specify the scale. |
| ak | string | `E4805d16520de693a3fe707cdc962045` | `optional` Specify the baidumap key. |
|subdomains|Array\<string\>|`['0', '1', '2', '3']`|`optional` Specify the service polling parameters.|
| mapStyle | 'img' \| 'vec' \| 'traffic' \| 'normal' \| 'light' \| 'dark' \| 'redalert' \| 'googlelite' \| 'grassgreen' \| 'midnight' \| 'pink' \| 'darkgreen' \| 'bluish' \| 'grayscale' \| 'hardedge' | `normal` | `optional` Specify the mapStyle. |
| projectionTransforms | ProjectionTransforms |  | `optional` Specify the projection transformation parameters. such as { from: 'BD09', to: 'WGS84' }** |
| protocol | string | `'https'` | `optional` Specify protocol of service. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

## Reference

- **[openlayers#3522](https://github.com/openlayers/openlayers/issues/3522)**
