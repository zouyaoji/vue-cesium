## VcOverviewMap

加载鹰眼图控件。

:::tip

提示：3.0 版本对鹰眼图组件进行了重构，鹰眼图实质是另外一个 `vc-viewer`，所以鹰眼图中仍然能加 VueCesium 的各子组件。

:::

### 基础用法

鹰眼图组件的基础用法。

:::demo

controls/vc-overview-map/usage

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | string | `'bottom-right'` | `optional` 指定鹰眼组件位置。 | top-right/top-left/bottom-right/bottom-left |
| offset | [number, number] | `[0, 0]` | `optional` 指定鹰眼组件基于位置的偏移量。 | |
| width | string | `'150px'` | `optional` 指定鹰眼组件宽度。 |
| height | string | `'150px'` | `optional` 指定鹰眼组件高度。 |
| border | string | `'solid 4px rgb(255, 255, 255)'` | `optional` 指定鹰眼组件边框。 |
| borderRadius | string | | `optional` 指定鹰眼组件圆角。 |
| toggleOpts | VcBtnTooltipProps | `show: true, color: '#fff', background: '#3f4854', icon: 'vc-icons-overview-toggle', size: '15px', tooltip: { delay: 500, anchor: 'bottom middle', offset: [0, 20], tip: void 0 } }` | `optional` 指定鹰眼组件切换按钮参数。 |
| viewerOpts | VcViewerProps |`{ removeCesiumScript: false, showCredit: false, sceneMode: 2 }` | `optional` 指定鹰眼组件中 vc-viewer 组件参数。|
| centerRectColor | VcColor | `'#ff000080'` | `optional` 指定矩形颜色。 |
| widthFactor | number | `2` | `optional` 指定矩形宽度因子。 |
| heightFactor | number | `2` | `optional` 指定矩形高度因子。 |
| modelValue | boolean | `true` | `optional` 指定鹰眼是展开还是收拢。 |

:::

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 方法

| 方法名             | 参数                                     | 描述                                        |
| ------------------ | ---------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\>  | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                 | 手动卸载组件。                              |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                     | 获取该组件加载的 Cesium 对象。              |
