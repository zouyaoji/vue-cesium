---
title: VcTerrainProviderArcgis - ArcGISTiledElevationTerrainProvider
---

# VcTerrainProviderArcgis

Loading a terrain provider that produces terrain geometry by tessellating height maps retrieved from Elevation Tiles of an ArcGIS ImageService. It is equivalent to initializing a `Cesium.ArcGISTiledElevationTerrainProvider` instance.

## Basic usage

Basic usage of the `vc-terrain-provider-arcgis` component.

:::demo Use the `vc-terrain-provider-arcgis` tag to add the online terrain tile provided by an ArcGIS ImageService.

providers/vc-terrain-provider-arcgis/usage

:::

## API

### VcTerrainProviderArcgis Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string \| Cesium.Resource | `'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'` | `required` The URL of the ArcGIS ImageServer service. |
| token | string | | `optional` The authorization token to use to connect to the service. |
| ellipsoid | Cesium.Ellipsoid | | `optional` The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.|

### VcTerrainProviderArcgis Events

| Name         | Parameters                              | Description                                                           |
| ------------ | --------------------------------------- | --------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the VcTerrainProviderArcgis is loaded.                |
| ready        | (readyObj: VcReadyObject)               | Triggers when the VcTerrainProviderArcgis is successfully loaded.     |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the VcTerrainProviderArcgis is destroyed.               |
| errorEvent   | (evt: Cesium.TileProviderError)         | Triggers when the terrrain provider encounters an asynchronous error. |
| readyPromise | (evt: boolean)                          | Triggers when the provider is ready for use.                          |

## Reference

- Refer to the official documentation: **[ArcGISTiledElevationTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/ArcGISTiledElevationTerrainProvider.html)**
