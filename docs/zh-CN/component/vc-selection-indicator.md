## VcSelectionIndicator

加载自定义选择器组件，替换 Cesium 自带的 selectionIndicator。

**注意：** 如果是拾取到的对象是 `Cesium3DTileFeature` 指示器的位置是该对象的包围盒的中心点。如果是手工模型并且想要更精准的位置请在建筑属性字段用 `position` 属性描述该要素的位置信息，如 `'[108, 32]'` 。

### 基础用法

选择器组件的基础用法。

:::demo

controls/vc-selection-indicator/usage

:::

### 属性

| 属性名                   | 类型     | 默认值 | 描述                                                  |
| ------------------------ | -------- | ------ | ----------------------------------------------------- |
| show                     | boolean  | `true` | `optional` 指定选择指示器是否可见。                   |
| width                    | number   | `50`   | `optional` 指定选择指示器宽度。                       |
| height                   | number   | `50`   | `optional` 指定选择指示器高度。                       |
| allowFeatureInfoRequests | boolean  | `true` | `optional` 指定是否异步请求该点射线相交影像图层属性。 |
| limit                    | number   | `25`   | `optional` 指定最大拾取对象数量。                     |
| includeImageryIds        | string[] |        | `optional` 指定拾取影像要素时包含的 vcId 数组。       |
| excludeImageryIds        | string[] | `[]`   | `optional` 指定拾取影像要素时排除的 vcId 数组。       |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 组件加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 组件加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 组件销毁时触发。     |
| pickEvt    | selectedFeature                         | 拾取时触发。         |

### 方法

| 方法名                     | 参数                                     | 描述                                        |
| -------------------------- | ---------------------------------------- | ------------------------------------------- |
| load                       | () => Promise\<false \| VcReadyObject\>  | 手动加载组件。                              |
| reload                     | () => Promise\<false \| VcReadyObject\>  | 手动重新加载组件。                          |
| unload                     | () => Promise\<boolean\>                 | 手动卸载组件。                              |
| getCreatingPromise         | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject            | () => VcCesiumObject                     | 获取该组件加载的 Cesium 对象。              |
| computeScreenSpacePosition | () => Cesium.Cartesian2                  | 计算屏幕位置。                              |
| update                     | () => void                               | 更新指示器位置。                            |
| animateAppear              | () => void                               | 显示指示器。                                |
| animateDepart              | () => void                               | 隐藏指示器。                                |
| getPickedFeatures          | () => PickedFeatures                     | 获取拾取对象集合。                          |

### 成员

| 名称                                     | 描述                           |
| ---------------------------------------- | ------------------------------ |
| position: Cesium.Cartesian3              | 获取或者设置选择指示器的位置。 |
| selectedFeature:Feature \| Cesium.Entity | 获取或者设置选中对象。         |
