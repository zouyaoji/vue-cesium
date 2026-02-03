## VcOverlayEcharts

按 Cesium 坐标系统加载 Echarts 覆盖物。

**注意：** 该组件依赖于 echarts，项目上使用该组件前需要额外安装 echarts：

```bash
npm install echarts --save
```

### 基础用法

Echart 覆盖物组件的基础用法。

:::demo

overlays/vc-overlay-echarts/usage

:::

### 属性

| 属性名           | 类型          | 默认值     | 描述                                                       |
| ---------------- | ------------- | ---------- | ---------------------------------------------------------- |
| options          | EChartsOption |            | `required` 指定 Echarts 图表的配置项。                     |
| autoHidden       | boolean       | `true`     | `optional` 指定 Echarts 图表元素在地球背面时是否自动隐藏。 |
| coordinateSystem | string        | `'cesium'` | `optional` 指定 Echarts 初始化时自定义的坐标系统名称。     |
| customClass      | string        |            | `optional` 指定 Echarts 自定义 class 。                    |

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
