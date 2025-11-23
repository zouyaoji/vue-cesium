---
title: NativeLayer
lang: en-US
---

# VmLayerNative

The `VmLayerNative` component is used to load native layers onto the map. The supported layer types include 'fill', 'line', 'symbol', 'circle', 'heatmap', 'fill-extrusion', 'raster', 'hillshade', and 'background'. [see](https://maplibre.org/maplibre-style-spec/layers/). And a extension type 'raster-dem' for terrain.

## Basic usage

:::demo Use VmLayerNative component to add a openstreetmap layer.

layer-native/openstreetmap

:::

## Draw vector datas

:::demo Use VmLayerNative component to draw points from a GeoJSON collection to a map; add a vector source to map.

layer-native/vector

:::

## 3D Terrain

:::demo Use VmLayerNative component to go beyond hillshade and show elevation in actual 3D.

layer-native/3d-terrain

:::

## API

### Props

<!-- prettier-ignore -->
| Name | Description | Type | Default |
| ------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------- | ----------- |
| id | Unique layer name. | ^[string] | - |
| beforeId | The ID of an existing layer to insert the new layer before, resulting in the new layer appearing visually beneath the existing layer. If this argument is not specified, the layer will be appended to the end of the layers array and appear visually above all other layers. | ^[string] | - |
| type | Rendering type of this layer. | ^[enum]`'fill' \| 'line' \| 'symbol' \| 'circle' \| 'heatmap' \| 'fill-extrusion' \| 'raster' \| 'hillshade' \| 'background'` | - |
| metadata | Arbitrary properties useful to track with the layer, but do not influence rendering. Properties should be prefixed to avoid collisions, like 'maplibre:'. | ^[object]`any` | - |
| source | Name of a source description to be used for this layer. Required for all layer types except. | ^[string] / ^[object]`SourceSpecification` | - |
| sourceLayer | Layer to use from a vector tile source. Required for vector tile sources; prohibited for all other source types, including GeoJSON sources. | ^[string] | - |
| minzoom | The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden. in range [0, 24]. | ^[number] | - |
| maxzoom | The maximum zoom level for the layer. At zoom levels equal to or greater than the maxzoom, the layer will be hidden. in range [0, 24]. | ^[number] | - |
| filter | A expression specifying conditions on source features. Only features that match the filter are displayed. Zoom expressions in filters are only evaluated at integer zoom levels. The feature-state expression is not supported in filter expressions. | ^[boolean] / ^[object]`FilterSpecification` | - |
| layout | Layout properties for the layer. | ^[object]`FillLayerSpecification['layout'] \| LineLayerSpecification['layout'] \| SymbolLayerSpecification['layout'] \| CircleLayerSpecification['layout'] \| HeatmapLayerSpecification['layout'] \| FillExtrusionLayerSpecification['layout'] \| RasterLayerSpecification['layout'] \| HillshadeLayerSpecification['layout'] \| BackgroundLayerSpecification['layout']` | - |
| paint | Default paint properties for this layer. | ^[object]`FillLayerSpecification['paint'] \| LineLayerSpecification['paint'] \| SymbolLayerSpecification['paint'] \| CircleLayerSpecification['paint'] \| HeatmapLayerSpecification['paint'] \| FillExtrusionLayerSpecification['paint'] \| RasterLayerSpecification['paint'] \| HillshadeLayerSpecification['paint'] \| BackgroundLayerSpecification['paint']` | - |

### Events

| Name       | Description                                              | Type                                                         |
| ---------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| beforeLoad | Triggers before the maplibreObject is loaded.            | ^[Function]`(instance: VmComponentInternalInstance) => void` |
| ready      | Triggers when the maplibreObject is successfully loaded. | ^[Function]`(readyObj: VmReadyObject) => void`               |
| unready    | Triggers when the maplibreObject loading failed.         | ^[Function]`((e: any) => void`                               |
| destroyed  | Triggers when the maplibreObject is destroyed.           | ^[Function]`(instance: VmComponentInternalInstance) => void` |

### Exposes

| Name              | Description                                         | Type                                                 |
| ----------------- | --------------------------------------------------- | ---------------------------------------------------- |
| load              | Load the component manually.                        | ^[Function]`() => Promise<VmReadyObject \| boolean>` |
| unload            | Destroy the loaded component manually.              | ^[Function]`() => Promise<boolean>`                  |
| reload            | Load the component manually.                        | ^[Function]`() => Promise<boolean>`                  |
| creatingPromise   | Determine whether the component is created by this. | ^[object]`Promise<VmReadyObject>`                    |
| maplibreObject    | The maplibreObject created by component.            | ^[object]`unknown`                                   |
| getMaplibreObject | Get the maplibreObject created by component.        | ^[Function]`() => unknown`                           |
