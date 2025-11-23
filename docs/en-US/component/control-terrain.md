---
title: Terrain
lang: en-US
---

# VmControlTerrain

A [`TerrainControl`](https://maplibre.org/maplibre-gl-js/docs/API/classes/TerrainControl/) control contains a button for turning the terrain on and off.

## Basic usage

:::demo Use VmControlTerrain component to add a TerrainControl.

control-terrain/usage

:::

## API

### Props

| Name         | Description                                                           | Type                                                                  | Default     |
| ------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------- | ----------- |
| source       | The name of terrain source.                                           | ^[string]                                                             | -           |
| exaggeration | multiplicator for the elevation. Used to make terrain more "extreme". | ^[number]                                                             | -           |
| position     | position on the map to which the control will be added.               | ^[enum]`'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | 'top-right' |

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
