---
title: Terrain
lang: zh-CN
---

# VmControlTerrain

地形控件为地图添加一个控制地形是否显示的按钮。 [参考](https://maplibre.org/maplibre-gl-js/docs/API/classes/TerrainControl/)

## 基础用法

:::demo 用地形控件组件添加一个地形控件到地图。

control-terrain/usage

:::

## API

### Props

| 属性名       | 说明                                                                  | 类型                                                                  | 默认值      |
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
