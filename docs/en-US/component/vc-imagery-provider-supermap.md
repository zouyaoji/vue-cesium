# VcImageryProviderSupermap

Loading imagery provider for SuperMap iServer image services. It is equivalent to initializing a `Cesium.SuperMapImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

## Basic usage

Basic usage of the `vc-imagery-provider-supermap` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with SuperMapImageryProvider to the viewer.

providers/vc-imagery-provider-supermap/usage

:::

## API

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string | | `required` The URL of the SuperMap iServer service. |
| name | string | | `optional` The name of the layer. |
| minimumLevel | number | `0` | `optional` The minimum level-of-detail supported by the imagery provider. |
| maximumLevel | number | | `optional` The maximum level-of-detail supported by the imagery provider. |
| alpha | number | `1.0` | `optional` The alpha blending value of this layer. |
| brightness | number | | `optional` The brightness of this layer. |
| contrast | number | | `optional` The contrast of this layer. |
| transparent | boolean | `true` | `optional` Set to true to request tiles with transparency. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

## Reference

- Refer to the official documentation: **[SuperMapImageryProvider](http://support.supermap.com.cn:8090/webgl/docs/Documentation/SuperMapImageryProvider.html)**
