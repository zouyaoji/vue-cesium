---
title: Navigation
lang: zh-CN
---

# VmControlNavigation

导航组件为地图添加一个带缩放和罗盘按钮的控件。 [参考](https://maplibre.org/maplibre-gl-js/docs/API/classes/NavigationControl/)

## 基础用法

:::demo 用组件 VmControlNavigation 为地图添加一个导航控件

control-navigation/usage

:::

## API

### Props

| 属性名         | 说明                                                             | 类型                                                                  | 默认值      |
| -------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------- | ----------- |
| showCompass    | If `true` the compass button is included.                        | ^[boolean]                                                            | true        |
| showZoom       | If `true` the zoom-in and zoom-out buttons are included.         | ^[boolean]                                                            | true        |
| visualizePitch | If `true` the pitch is visualized by rotating X-axis of compass. | ^[boolean]                                                            | false       |
| position       | position on the map to which the control will be added.          | ^[enum]`'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | 'top-right' |

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
