## VcMeasurements

加载量算工具组件，包含距离量算、三角量算、折线距离量算、水平距离量算、垂直距离量算、高度量算、面积量算、坐标量算。

**注意：** 需要引入样式文件: `import 'vue-cesium/dist/index.css';`

:::tip

提示：3.0 版本已将量算组件重构成一个组件，简约的同时支持自定义风格，并优化了交互。

通常是左键绘制，右键取消最后绘制的点，双击结束当前绘制。 其中，水平测量还可以按住 shift 在固定方向绘制。

ctrl + 右键取消绘制。

:::

### 基础用法

量算组件的基础用法。

:::demo

analyses/vc-measurements/usage

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | string | `'top-right'` | `optional` 指定量算组件的位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` 指定量算组件基于位置的偏移量。 |
| show | boolean | `true` | `optional` 指定绘制的量算结果是否可见。 |
| mode | number | `1` | `optional` 指定绘制交互模式，0 代表连续绘制，1 代表绘制一次就结束。|
| measurements | Array\<'distance' \| 'component-distance' \| 'polyline' \| 'horizontal' \| 'vertical' \| 'height' \| 'area' \| 'point' \| 'rectangle' \| 'regular' \| 'circle'\> | `['distance', 'component-distance', 'polyline', 'horizontal', 'vertical', 'height', 'area', 'point', 'rectangle', 'circle', 'regular']` | `optional` 指定要加载的量算实例。 |
| activeColor | string | `'positive'` | `optional` 指定量算实例激活时的颜色。 |
| editable | boolean | `false` | `optional` 指定量算结果对象是否可编辑。 |
| mainFabOpts | VcActionTooltipProps & VcFabProps | | `optional` 指定量算组件浮动按钮的样式风格选项。 |
| fabActionOpts | VcActionTooltipProps | | `optional` 指定其他量算按钮的公共样式选项。 |
| distanceActionOpts | VcActionTooltipProps | | `optional` 指定距离量算按钮的样式风格选项。|
| distanceMeasurementOpts | VcMeasurementOpts | | `optional` 指定距离量算参数。|
| componentDistanceActionOpts | VcActionTooltipProps | | `optional` 指定三角量算按钮的样式风格选项。|
| componentDistanceMeasurementOpts | VcMeasurementOpts | | `optional` 指定三角量算参数。|
| polylineActionOpts | VcActionTooltipProps | | `optional` 指定折线距离量算按钮的样式风格选项。|
| polylineMeasurementOpts | VcMeasurementOpts | | `optional` 指定折线距离量算参数。|
| horizontalActionOpts | VcActionTooltipProps | | `optional` 指定水平距离量算按钮的样式风格选项。|
| horizontalMeasurementOpts | VcMeasurementOpts | | `optional` 指定水平距离量算参数。|
| verticalActionOpts | VcActionTooltipProps | | `optional` 指定垂直距离量算按钮的样式风格选项。|
| verticalMeasurementOpts | VcMeasurementOpts | | `optional` 指定垂直距离量算参数。|
| heightActionOpts | VcActionTooltipProps | | `optional` 指定高度量算按钮的样式风格选项。|
| heightMeasurementOpts | VcMeasurementOpts | | `optional` 指定高度量算参数。|
| areaActionOpts | VcActionTooltipProps | | `optional` 指定面积量算按钮的样式风格选项。|
| areaMeasurementOpts | VcMeasurementOpts | | `optional` 指定面积量算参数。|
| pointActionOpts | VcActionTooltipProps | | `optional` 指定坐标量算按钮的样式风格选项。|
| pointMeasurementOpts | VcMeasurementOpts | | `optional` 指定坐标量算参数。|
| rectangleActionOpts | VcActionTooltipProps | | `optional` 指定矩形量算按钮的样式风格选项。|
| rectangleMeasurementOpts | VcMeasurementOpts | | `optional` 指定矩形量算参数。|
| circleActionOpts | VcActionTooltipProps | | `optional` 指定圆形量算按钮的样式风格选项。|
| circleMeasurementOpts | VcMeasurementOpts | | `optional` 指定圆形量算参数。|
| regularActionOpts | VcActionTooltipProps | | `optional` 指定正多边形量算按钮的样式风格选项。|
| regularMeasurementOpts | VcMeasurementOpts | | `optional` 指定正多边形量算参数。|
| clearActionOpts | VcActionTooltipProps | | `optional` 指定清除按钮的样式风格选项。|

### 事件

| 事件名     | 参数                                             | 描述                         |
| ---------- | ------------------------------------------------ | ---------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance)          | 对象加载前触发。             |
| ready      | (readyObj: VcReadyObject)                        | 对象加载成功时触发。         |
| destroyed  | (instance: VcComponentInternalInstance)          | 对象销毁时触发。             |
| drawEvt    | (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer)   | 量算绘制时触发。             |
| activeEvt  | (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) | 切换量算 Action 时触发。     |
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
| body   | 用于自定义测量组件 UI。 |
