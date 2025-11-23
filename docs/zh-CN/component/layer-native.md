---
title: 原生图层
lang: zh-CN
---

# VmLayerNative

VmLayerNative组件用于加载原生图层到地图。支持的图层类型包括 'fill' | 'line' | 'symbol' | 'symbol' | 'circle' | 'heatmap' | 'fill-extrusion' | 'raster' | 'hillshade' | 'background'。 [参考](https://maplibre.org/maplibre-style-spec/layers/)。以及一个扩展类型：'raster-dem' 用于加载地形。

## 基础用法

:::demo 用 VmLayerNative 组件添加 openstreetmap 到地图。

layer-native/openstreetmap

:::

## 绘制矢量数据

:::demo 用 VmLayerNative 组件绘制一个点集合；用 VmLayerNative 组件添加 Vector 图层。

layer-native/vector

:::

## 地形

:::demo 用 VmLayerNative 组件显示地形高程的山丘阴影。

layer-native/3d-terrain

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 说明 | 类型 | 默认值 |
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

| 事件名     | 说明                                                     | 类型                                                         |
| ---------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| beforeLoad | Triggers before the maplibreObject is loaded.            | ^[Function]`(instance: VmComponentInternalInstance) => void` |
| ready      | Triggers when the maplibreObject is successfully loaded. | ^[Function]`(readyObj: VmReadyObject) => void`               |
| unready    | Triggers when the maplibreObject loading failed.         | ^[Function]`((e: any) => void`                               |
| destroyed  | Triggers when the maplibreObject is destroyed.           | ^[Function]`(instance: VmComponentInternalInstance) => void` |

### Exposes

| 名称              | 说明                                                | 类型                                                 |
| ----------------- | --------------------------------------------------- | ---------------------------------------------------- |
| load              | Load the component manually.                        | ^[Function]`() => Promise<VmReadyObject \| boolean>` |
| unload            | Destroy the loaded component manually.              | ^[Function]`() => Promise<boolean>`                  |
| reload            | Load the component manually.                        | ^[Function]`() => Promise<boolean>`                  |
| creatingPromise   | Determine whether the component is created by this. | ^[object]`Promise<VmReadyObject>`                    |
| maplibreObject    | The maplibreObject created by component.            | ^[object]`unknown`                                   |
| getMaplibreObject | Get the maplibreObject created by component.        | ^[Function]`() => unknown`                           |
