## VcNavigation

导航组件，包括罗盘、缩放、其他悬浮按钮，位置和距离比例尺工具栏控件。由 `vc-compass`、`vc-zoom-control`、`vc-print`、`vc-mylocation`、`vc-status-bar`、`vc-distance-legend` 组合而成。

**注意：** 需要引入样式文件: `import 'vue-cesium/dist/index.css';`

:::tip

提示：3.0 版本对导航组件进行了重构，现在是一个集合组件，现在支持自定义风格，包括图标、大小、颜色位置等。如需高度定制，可分别参考各子组件的例子。自带的图标用的是 Unicode 方式，不支持多色，需要支持多色请参考阿里云 iconfont 介绍的使用 Symbol 的方法：[传送门](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)。

:::

### 基础用法

导航组件的基础用法。

:::demo

controls/vc-navigation/usage

:::

### 扩展用法

按需定制导航组件。

:::demo

controls/vc-navigation/usage-advanced

:::

### VcNavigation 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ----- | ---- | ----- | ---- | ---- |
| position | string | `'top-right'` | `optional` 指定导航组件位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| customClass | string | `''` | `optional` 指定 vc-navigation 的自定义类名。 | |
| teleportToViewer | boolean | `true` | `optional` 指定是否添加到 cesium-viewer 节点。如果为 false，则为 `relative` 定位。 | |
| offset | [number, number] | `[0, 0]` | `optional` 指定导航组件基于位置的偏移量。 ||
| compassOpts | VcCompassProps\|false | 与 `VcCompass` 保持一致 | `optional` 指定罗盘控件参数，false 即不显示。 ||
| zoomOpts | VcZoomControlProps\|false | 与 `VcZoomControl` 保持一致 | `optional` 指定缩放控件参数，false 即不显示。 ||
| printOpts | VcPrintProps\|false | 与 `VcPrint` 保持一致 | `optional` 指定打印控件参数，false 即不显示。 ||
| locationOpts | VcMyLocationProps\|false | 与 `VcMyLocation` 保持一致 | `optional` 指定定位控件参数，false 即不显示。 ||
| otherOpts | VcNavigationOtherOpts\|false | | `optional` 指定其他控件参数，false 即不显示。 ||

:::tip

提示：对于其他控件（位置条和距离比例尺，看作一个整体），位置不由 VcNavigation 控制。默认参数：

:::

### VcNavigation 事件

| 事件名            | 参数                                    | 描述                   |
| ----------------- | --------------------------------------- | ---------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 组件加载前触发。       |
| ready             | (readyObj: VcReadyObject)               | 组件加载成功时触发。   |
| destroyed         | (instance: VcComponentInternalInstance) | 组件销毁时触发。       |
| compassEvt        | (evt: VcCompassEvt)                     | 操作罗盘控件时触发。   |
| zoomEvt           | (evt: VcZoomEvt)                        | 操作缩放控件时触发。   |
| printEvt          | (evt: VcPrintEvt)                       | 操作打印控件时触发。   |
| locationEvt       | (evt: VcLocationEvt)                    | 操作定位控件时触发。   |
| statusBarEvt      | (evt: VcStatusBarEvt)                   | 操作位置条时触发。     |
| distanceLegendEvt | (evt: VcDistanceLegendEvt)              | 操作距离比例尺时触发。 |

### VcNavigation 方法

| 方法名             | 参数                                     | 描述                                        |
| ------------------ | ---------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\>  | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                 | 手动卸载组件。                              |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                     | 获取该组件加载的 Cesium 对象。              |

### VcNavigation 插槽

<!-- prettier-ignore -->
| 插槽名 | 描述 | 子组件 |
| ---- | ----------- | ------- |
| default | 用于挂载 vc-navigation 子组件。 | vc-compass/vc-zoom-control/vc-print/vc-my-location/vc-status-bar/vc-distance-legend |
