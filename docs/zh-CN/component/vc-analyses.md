## VcAnalyses

加载分析工具组件。包含通视分析、可视域分析（3DTiles)。

**注意：** 需要引入样式文件: `import 'vue-cesium/dist/index.css';`

### 基础用法

分析工具组件的基础用法。

:::demo

analyses/vc-analyses/usage

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | string | `'top-right'` | `optional` 指定分析组件的位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` 指定分析组件基于位置的偏移量。 |
| show | boolean | `true` | `optional` 指定分析的结果是否可见。 |
| mode | number | `1` | `optional` 指定绘制交互模式，0 代表连续绘制，1 代表绘制一次就结束。|
| analyses | Array\<'sightline' \| 'viewshed'\> | `['sightline', 'viewshed']` | `optional` 指定要加载的分析实例。 |
| activeColor | string | `'positive'` | `optional` 指定绘制实例激活时的颜色。 |
| editable | boolean | `false` | `optional` 指定绘制结果对象是否可编辑。 |
| mainFabOpts | VcActionTooltipProps & VcFabProps | | `optional` 指定分析组件浮动按钮的样式选项。 |
| fabActionOpts | VcActionTooltipProps | | `optional` 指定其他分析按钮的公共样式选项。 |
| sightlineActionOpts | VcActionTooltipProps |  | `optional` 指定通视分析绘制按钮的样式选项。|
| sightlineAnalysisOpts | VcDrawingOpts | | `optional` 指定通视分析绘制参数。|
| viewshedActionOpts | VcActionTooltipProps |  | `optional` 指定可视域分析按钮的样式选项。|
| viewshedAnalysisOpts | VcViewshedAnalysisOpts | | `optional` 指定可视域分析参数。|
| clearActionOpts | VcActionTooltipProps | | `optional` 指定清除按钮的样式选项。|

### 事件

| 事件名     | 参数                                             | 描述                         |
| ---------- | ------------------------------------------------ | ---------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance)          | 对象加载前触发。             |
| ready      | (readyObj: VcReadyObject)                        | 对象加载成功时触发。         |
| destroyed  | (instance: VcComponentInternalInstance)          | 对象销毁时触发。             |
| drawEvt    | (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) | 绘制时触发。                 |
| activeEvt  | (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer)   | 切换分析 Action 时触发。     |
| editorEvt  | (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) | 点击编辑按钮时触发。         |
| mouseEvt   | (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer)  | 鼠标移进、移出绘制点时触发。 |
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

### 参考

- 可视域分析： **[Helsing 博文](https://blog.csdn.net/fywindmoon/article/details/108415116)**
