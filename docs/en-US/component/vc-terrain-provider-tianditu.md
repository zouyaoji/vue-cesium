---
title: VcTerrainProviderTianditu - TiandituTerrainProvider
---

# VcTerrainProviderTianditu

Loading a terrain provider that produces terrain geometry by tessellating height maps retrieved from Elevation Tiles of an Tianditu REST API.

## Basic usage

Basic usage of the `vc-terrain-provider-tianditu` component.

:::demo Use the `vc-terrain-provider-tianditu` tag to add the online terrain tile service provided by Tianditu to the viewer.

providers/vc-terrain-provider-tianditu/usage

:::

## API

### VcTerrainProviderTianditu Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string | `'https://{s}.tianditu.gov.cn/'` | `required` Specify the service address. |
| subdomains | Array | `['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']` | Specify the polling subdomain name. |
| pluginPath | string | `'https://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt.js'` | `optional` Specify the address of the Tiantu terrain plugin library. |
| dataType | string | `int` | `optional` Specify the data type. |
| tileType | string | `heightmap` | `optional` Specify the tile type. |
| token | string | | `optional` Specify the Tiantu service secret key. |

### VcTerrainProviderTianditu Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | TerrainProvider                         | Triggers when the provider is ready for use.                         |

## Reference

- **[Documents of Tianditu](http://lbs.tianditu.gov.cn/docs/#/sanwei/)**
