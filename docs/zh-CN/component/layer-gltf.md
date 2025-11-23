---
title: GLTFLayer
lang: en-US
---

# VmLayerGltf

The `VmLayerGltf` component is a custom style layer with three.js to add 3D models to a map. [see](https://maplibre.org/maplibre-gl-js/docs/examples/add-3d-model/)

## Basic usage

:::demo Use VmLayerGltf component to add 3D models to a map.

layer-gltf/usage

:::

## API

### Props

<!-- prettier-ignore -->
| Name | Description | Type | Default |
| ------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------- | ----------- |
| url | The url address of the gltf model. | ^[string] | - |
| position | The position of the gltf model.. | ^[array]`[number, number] \| [number, number, number]` | - |
| rotate | The rotation angle of the gltf model, in radians. | ^[array]`[number, number, number]` | [Math.PI / 2, 0, 0] |
| scale | The scale angle of the gltf model. | ^[number] | 1 |

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
