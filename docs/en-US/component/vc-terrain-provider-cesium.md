---
title: VcTerrainProviderCesium - CesiumTerrainProvider
---

# VcTerrainProviderCesium

Loading a terrain provider that accesses terrain data in a Cesium terrain format. It is equivalent to initializing a `Cesium.CesiumTerrainProvider` instance. If the `url` is empty, the CesiumIon online global terrain will be loaded via `Cesium.createWorldTerrain` by default. CesiumIon authorization is required. For details, go to [`https://cesium.com/ion/`](https://cesium.com/ion/) Apply for an account and get Access Token.

## Basic usage

Basic usage of the `vc-terrain-provider-cesium` component.

:::demo Use the `vc-terrain-provider-cesium` tag to add the online terrain tile provided by Cesium Ion to the viewer.

providers/vc-terrain-provider-cesium/usage

:::

## API

### VcTerrainProviderCesium Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string | | `required` The URL of the Cesium terrain server. |
| requestVertexNormals | boolean | `false` | `optional` Flag that indicates if the client should request additional lighting information from the server, in the form of per vertex normals if available.|
| requestWaterMask | boolean | `false` | `optional` Flag that indicates if the client should request per tile water masks from the server, if available.|
| requestMetadata | boolean | `true` | `optional` Flag that indicates if the client should request per tile metadata from the server, if available.|
| ellipsoid | Cesium.Ellipsoid | | `optional` The ellipsoid. If not specified, the WGS84 ellipsoid is used.|
| credit | string | | `optional` A credit for the data source, which is displayed on the canvas.|

### VcTerrainProviderCesium Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | TerrainProvider                         | Triggers when the provider is ready for use.                         |

## Reference

- Refer to the official documentation: **[CesiumTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/CesiumTerrainProvider.html)**
