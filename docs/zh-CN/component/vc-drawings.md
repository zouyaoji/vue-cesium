## VcDrawings

加载绘制工具组件。支持绘制点、线、面、矩形、正多边形、圆形。

**注意：** 需要引入样式文件: `import 'vue-cesium/dist/index.css';`

:::tip

提示：3.0 版本已将绘制组件重构成一个组件，简约的同时支持自定义风格。

ctrl + 右键取消绘制。

:::

### 基础用法

绘制组件的基础用法。

:::demo

analyses/vc-drawings/usage

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | string | `'bottom-left'` | `optional` 指定绘制组件的位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` 指定绘制组件基于位置的偏移量。 |
| show | boolean | `true` | `optional` 指定绘制的结果是否可见。 |
| mode | number | `1` | `optional` 指定绘制交互模式，0 代表连续绘制，1 代表绘制一次就结束。|
| drawings | Array\<'pin' \| 'point' \| 'polyline' \| 'polygon' \| 'rectangle' \| 'regular' \| 'circle'\> | `['pin', 'point', 'polyline', 'polygon', 'rectangle', 'circle', 'regular']` | `optional` 指定要加载的绘制实例。 |
| activeColor | string | `'positive'` | `optional` 指定绘制实例激活时的颜色。 |
| editable | boolean | `false` | `optional` 指定绘制结果对象是否可编辑。 |
| clampToGround | boolean | `false` | `optional` 指定绘制结果对象是否贴地或模型。仅线、面对象生效。 |
| mainFabOpts | VcActionTooltipProps & VcFabProps | | `optional` 指定绘制组件浮动按钮的样式选项。 |
| fabActionOpts | VcActionTooltipProps | | `optional` 指定其他绘制按钮的公共样式选项。 |
| pinActionOpts | VcActionTooltipProps | `` | `optional` 指定图标点绘制按钮的样式选项。|
| pinDrawingOpts | VcDrawingOpts | | `optional` 指定图标点绘制参数。|
| pointActionOpts | VcActionTooltipProps | `` | `optional` 指定点绘制按钮的样式选项。|
| pointDrawingOpts | VcDrawingOpts | | `optional` 指定点绘制参数。|
| polylineActionOpts | VcActionTooltipProps | | `optional` 指定先绘制按钮的样式选项。|
| polylineDrawingOpts | VcDrawingOpts | | `optional` 指定线绘制参数。|
| polygonActionOpts | VcActionTooltipProps | | `optional` 指定面绘制按钮的样式选项。|
| polygonDrawingOpts | VcDrawingOpts | | `optional` 指定面绘制参数。|
| rectangleActionOpts | VcActionTooltipProps | | `optional` 指定矩形绘制按钮的样式选项。|
| rectangleDrawingOpts | VcDrawingOpts | | `optional` 指定矩形绘制参数。|
| circleActionOpts | VcActionTooltipProps | | `optional` 指定圆绘制按钮的样式选项。|
| circleDrawingOpts | VcDrawingOpts | | `optional` 指定圆绘制参数。|
| regularActionOpts | VcActionTooltipProps | | `optional` 指定正多边形绘制按钮的样式选项。|
| regularDrawingOpts | VcDrawingOpts | | `optional` 指定正多边形绘制参数。|
| clearActionOpts | VcActionTooltipProps | | `optional` 指定清除按钮的样式选项。|

### 事件

| 事件名     | 参数                                             | 描述                         |
| ---------- | ------------------------------------------------ | ---------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance)          | 对象加载前触发。             |
| ready      | (readyObj: VcReadyObject)                        | 对象加载成功时触发。         |
| destroyed  | (instance: VcComponentInternalInstance)          | 对象销毁时触发。             |
| drawEvt    | (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer)   | 绘制时触发。                 |
| activeEvt  | (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) | 切换绘制 Action 时触发。     |
| editorEvt  | (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) | 点击编辑按钮时触发。         |
| mouseEvt   | (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer)  | 鼠标移进、移除绘制点时触发。 |
| fabUpdated | (value: boolean)                                 | 浮动按钮展开、收拢时触发。   |
| clearEvt   | (evt: object, viewer: Cesium.Viewer)             | 清除绘制时触发。             |

### 方法

<!-- prettier-ignore -->
| 方法名 | 参数 | 描述 |
| ----- | ---- | ---- |
| load | () => Promise\<false \| VcReadyObject\> | 手动加载组件。 |
| reload | () => Promise\<false \| VcReadyObject\> | 手动重新加载组件。 |
| unload | () => Promise\<boolean\> | 手动卸载组件。 |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject | () => VcCesiumObject | 获取通过该组件加载的 Cesium 对象。 |
| clearAll | () => void | 清除所有的绘制对象。 |
| activate | () => void | 激活绘制事件。 |
| deactivate | () => void | 取消激活绘制事件。 |
| toggleAction | (drawingOption: VcDrawingActionInstance \| string) => void | 切换绘制实例。 |
| getFabRef | () => VcFabRef | 获取浮动按钮模板引用。 |
| getDrawingActionInstance | (actionName: string) => VcDrawingActionInstance|根据action名称获取绘制实例。|
| getDrawingActionInstances | () => Array\<VcDrawingActionInstance\> | 获取所有绘制实例。 |
| getSelectedDrawingActionInstance | () => VcDrawingActionInstance | 获取选中的绘制实例。 |

### 插槽

| 插槽名 | 描述                    |
| ------ | ----------------------- |
| body   | 用于自定义绘制组件 UI。 |
