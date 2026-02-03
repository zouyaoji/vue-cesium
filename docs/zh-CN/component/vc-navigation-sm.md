## VcNavigationSm

导航组件 —— 高仿超图样式。由 `vc-compass-sm`、`vc-zoom-control-sm` 组合而成。

**注意：** 需要引入样式文件: `import 'vue-cesium/dist/index.css';`

### 基础用法

导航组件的基础用法。

:::demo

controls/vc-navigation-sm/usage

:::

### VcNavigationSm 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ----- | ---- | ----- | ---- | ---- |
| position | string | `top-right` | `optional` 指定导航组件位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left|
| offset | [number, number] | `[0, 0]` | `optional` 指定导航组件基于位置的偏移量。 ||
| compassOpts | false \| VcCompassSmProps | 与 `VcCompassSm` 保持一致 | `optional` 指定罗盘控件参数，false 即不显示。 ||
| zoomOpts | false \| VcZoomControlSmProps | 与 `VcZoomControlSm` 保持一致 | `optional` 指定缩放控件参数，false 即不显示。 ||

:::tip
提示 `compassOpts`、`zoomOpts` 默认参数：
:::
:::tipflex

```text
// compassOpts
{
  enableCompassOuterRing: true,
  duration: 1.5,
  autoHidden: true,
  tooltip: {
    delay: 1000,
    anchor: 'bottom middle',
    offset: [0, 20],
    tip: void 0 // 未指定则用对应语言的默认值
  }
}
```

```text
// zoomOpts
{
  autoHidden: true,
  tooltip: {
    delay: 1000,
    anchor: 'bottom middle',
    offset: [0, 20],
    zoomInTip: void 0,
    zoomOutTip: void 0,
    zoomBarTip: void 0
  }
}
```

:::

### VcNavigationSm 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 组件加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 组件加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 组件销毁时触发。     |
| zoomEvt    | (evt: VcZoomEvt)                        | 操作缩放控件时触发。 |
| compassEvt | (evt: VcCompassEvt)                     | 操作罗盘控件时触发。 |

### VcNavigationSm 方法

| 方法名             | 参数                                     | 描述                                        |
| ------------------ | ---------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\>  | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                 | 手动卸载组件。                              |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                     | 获取该组件加载的 Cesium 对象。              |

### VcNavigationSm 插槽

<!-- prettier-ignore -->
| 插槽名 | 描述 | 子组件 |
| ---- | ----------- | ------- |
| default | 用于挂载 vc-navigation-sm 子组件。 | vc-compass-sm/vc-zoom-control-sm |

### VcCompassSm

罗盘组件。

### VcCompassSm 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ----- | ---- | ----- | ---- | ---- |
| position | string | `top-right` | `optional` 指定罗盘位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left|
| offset | [number, number] | `[0, 0]` | `optional` 指定罗盘基于位置的偏移量。 ||
| enableCompassOuterRing | boolean | `true` | `optional` 指定罗盘外环是否可以操作。 ||
| duration | number | `1.5` | `optional` 指定双击罗盘恢复俯仰角飞行时间，单位秒。 ||
| tooltip | false \| VcTooltipProps | | `optional` 指定罗盘提示信息参数。 |
| autoHidden | boolean | `true` | `optional` 指定是否自动隐藏罗盘部分控件。 ||

### VcCompassSm 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 组件加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 组件加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 组件销毁时触发。     |
| compassEvt | (evt: VcCompassEvt)                     | 操作罗盘控件时触发。 |

### VcCompassSm 方法

| 方法名             | 参数                                     | 描述                                        |
| ------------------ | ---------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\>  | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                 | 手动卸载组件。                              |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                     | 获取该组件加载的 Cesium 对象。              |

### VcZoomControlSm

缩放组件。

### VcZoomControlSm 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ----- | ---- | ----- | ---- | ---- |
| position | string | `top-right` | `optional` 指定缩放控件位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left|
| offset | [number, number] | `[0, 0]` | `optional` 指定缩放控件基于位置的偏移量。 ||
| tooltip | false \| (VcTooltipProps & { zoomInTip: string; zoomOutTip: string; zoomBarTip: string }) | | `optional` 指定罗盘提示信息参数。 ||
| autoHidden | boolean | `true` | `optional` 指定是否自动隐藏放大控件。 ||

### VcZoomControlSm 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 组件加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 组件加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 组件销毁时触发。     |
| zoomEvt    | (evt: VcZoomEvt)                        | 操作缩放控件时触发。 |

### VcZoomControlSm 方法

| 方法名             | 参数                                     | 描述                                        |
| ------------------ | ---------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\>  | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                 | 手动卸载组件。                              |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                     | 获取该组件加载的 Cesium 对象。              |
