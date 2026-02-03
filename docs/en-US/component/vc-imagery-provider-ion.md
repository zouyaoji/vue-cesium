# VcImageryProviderIon

Loading a tiled imagery provider using the Cesium ion REST API. It is equivalent to initializing a `Cesium.IonImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

## Basic usage

Basic usage of the `vc-imagery-provider-ion` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with IonImageryProvider to the viewer.

providers/vc-imagery-provider-ion/usage

:::

## API

### Props

| Name        | Type                    | Default | Description                                           |
| ----------- | ----------------------- | ------- | ----------------------------------------------------- |
| assetId     | number                  |         | `required` An ion imagery asset ID.                   |
| accessToken | string                  |         | `optional` The access token to use.                   |
| server      | string\|Cesium.Resource |         | `optional` The resource to the Cesium ion API server. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

## Reference

- Refer to the official documentation: **[IonImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/IonImageryProvider.html)**
