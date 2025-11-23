---
title: Navigation
lang: en-US
---

# VmControlNavigation

A NavigationControl control contains zoom buttons and a compass. [see](https://maplibre.org/maplibre-gl-js/docs/API/classes/NavigationControl/)

## Basic usage

:::demo Use VmControlNavigation component to add a NavigationControl.

control-navigation/usage

:::

## API

### Props

| Name           | Description                                                      | Type                                                                  | Default     |
| -------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------- | ----------- |
| showCompass    | If `true` the compass button is included.                        | ^[boolean]                                                            | true        |
| showZoom       | If `true` the zoom-in and zoom-out buttons are included.         | ^[boolean]                                                            | true        |
| visualizePitch | If `true` the pitch is visualized by rotating X-axis of compass. | ^[boolean]                                                            | false       |
| position       | position on the map to which the control will be added.          | ^[enum]`'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | 'top-right' |

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
