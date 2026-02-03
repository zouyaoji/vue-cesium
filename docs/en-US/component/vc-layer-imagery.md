# VcLayerImagery

Loading an image layer is equivalent to initializing a `Cesium.ImageryLayer` instance.

Needs to be a child of `vc-viewer` to load properly. You can directly specify the `imageryProvider` property of `vc-layer-imagery`, or use the `vc-imagery-provider-xxx` series components provided by VueCesium as the `vc-layer-imagery` sub-components to mount each `imageryProvider`, but an image layer can only mount one `provider`.

## Basic usage

The basic usage of the image layer component.

:::demo Use the `vc-layer-imagery` component to add the `OpenStreetMapImageryProvider` image service tile layer on the viewer.

imagery-layer/vc-layer-imagery/usage

:::

## Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| -------------- | ----------------------- | ------ | --------------------------------------- |---|
| sortOrder | number | |`optional` Specify the relative order of the layers.|
| vcId | string | |`optional` Specify the vcId of the layer, required for `vc-selection-indicator` to pick exclusions.|
| imageryProvider | VcImageryProvider | | `optional` The imagery provider to use. |
| rectangle | VcRectangle | `imageryProvider.rectangle` | `optional` The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider. |
| alpha | number \| LayerPropCallback | `1.0` | `optional` The alpha blending value of this layer, from 0.0 to 1.0.  |
| nightAlpha | number \| LayerPropCallback | `1.0` | `optional` The alpha blending value of this layer on the night side of the globe, from 0.0 to 1.0.  |
| dayAlpha | number \| LayerPropCallback | `1.0` | `optional` The alpha blending value of this layer on the day side of the globe, from 0.0 to 1.0.  |
| brightness | number \| LayerPropCallback | `1.0`| `optional` The brightness of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 makes the imagery darker while greater than 1.0 makes it brighter.  |
| contrast | number \| LayerPropCallback | `1.0` | `optional` The contrast of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the contrast while greater than 1.0 increases it.  |
| hue | number \| LayerPropCallback | `0.0` | `optional` The hue of this layer. 0.0 uses the unmodified imagery color. |
| saturation | number \| LayerPropCallback | `1.0` | `optional` The saturation of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the saturation while greater than 1.0 increases it. |
| gamma | number \| LayerPropCallback | `1.0` | `optional` The gamma correction to apply to this layer. 1.0 uses the unmodified imagery color. |
| splitDirection | number \| Cesium.SplitDirection \| LayerPropCallback | `0` | `optional` The SplitDirection split to apply to this layer.  **LEFT: -1, NONE: 0, RIGHT: 1** |-1/0/1|
| minificationFilter | number \| Cesium.TextureMinificationFilter | `9729` | `optional` The texture minification filter to apply to this layer. **NEAREST: 9728, LINEAR: 9729, NEAREST_MIPMAP_NEAREST: 9984, LINEAR_MIPMAP_NEAREST: 9985, NEAREST_MIPMAP_LINEAR: 9986** |9728/9729/9984/9985/9986|
| magnificationFilter | number \| Cesium.TextureMagnificationFilter | `9729` | `optional` The texture magnification filter to apply to this layer. **NEAREST: 9728, LINEAR: 9729** |9728/9729|
| show | boolean | `true` | `optional` True if the layer is shown; otherwise, false.|
| maximumAnisotropy | number | | `optional` The maximum anisotropy level to use for texture filtering. If this parameter is not specified, the maximum anisotropy supported by the WebGL stack will be used. Larger values make the imagery look better in horizon views.|
| minimumTerrainLevel | number | | `optional` The minimum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.|
| maximumTerrainLevel | number | | `optional` The maximum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.|
| cutoutRectangle | VcRectangle | | `optional` Cartographic rectangle for cutting out a portion of this ImageryLayer.|
| colorToAlpha | VcColor | |`optional` Color to be used as alpha.|
| colorToAlphaThreshold | number | `0.004` |`optional` Threshold for color-to-alpha.|

## Events

| Name                   | Parameters                              | Description                               |
| ---------------------- | --------------------------------------- | ----------------------------------------- |
| beforeLoad             | (instance: VcComponentInternalInstance) | Triggers before the object is loaded.     |
| ready                  | (readyObj: VcReadyObject)               | Triggers when the object is loaded.       |
| destroyed              | (instance: VcComponentInternalInstance) | Triggers when the object is destroyed.    |
| update:imageryProvider | (payload: VcImageryProvider)            | Triggers when imageryProvider is updated. |

## Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where vc-layer-imagery sub tags content goes. | vc-imagery-provider-arcgis/vc-imagery-provider-baidu/vc-imagery-provider-bing/vc-imagery-provider-grid/vc-imagery-provider-ion/vc-imagery-provider-mapbox/vc-imagery-provider-osm/vc-imagery-provider-supermap/vc-imagery-provider-tianditu/vc-imagery-provider-tile-coordinates/vc-imagery-provider-tms/vc-imagery-provider-singletile/vc-imagery-provider-tiledcache/vc-imagery-provider-urltemplate/vc-imagery-provider-wms/vc-imagery-provider-wmts |

## Reference

- Official documents: **[ImageryLayer](https://cesium.com/docs/cesiumjs-ref-doc/ImageryLayer.html)**
