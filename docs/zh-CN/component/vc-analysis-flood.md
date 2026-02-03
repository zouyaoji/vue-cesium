## VcAnalysisFlood

加载淹没分析组件。实质是用 `vc-primitive-classification` 加载 `vc-geometry-polygon`，通过动态修改 `vc-geometry-polygon` 的 `extrudedHeight` 属性拉伸成一个闭合体对象，从而简易模拟淹没分析。

**注意** 需要场景加载地形或 3DTiles。

### 基础用法

淹没分析组件的基础用法。

:::demo

analyses/vc-analysis-flood/usage

:::

### 属性

| 属性名           | 类型               | 默认值                   | 描述                                            |
| ---------------- | ------------------ | ------------------------ | ----------------------------------------------- |
| polygonHierarchy | VcPolygonHierarchy |                          | `required` 指定构建淹没分析多边形的经纬度数组。 |
| minHeight        | number             | `-1 `                    | `optional` 指定最小高程。                       |
| maxHeight        | number             | `8888`                   | `optional` 指定最大高程。                       |
| speed            | number             | `10`                     | `optional` 指定每帧增加的高度。                 |
| color            | VcColor            | `'rgba(40,150,200,0.6)'` | `optional` 指定淹没分析对象颜色。               |
| loop             | boolean            | `false`                  | `optional` 指定到达最大高度后是否重新开始。     |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |
| stop       | (evt: Cesium.ClassificationPrimitive)   | 到达最大高度时触发。 |

### 方法

| 方法名             | 参数                                     | 描述                                        |
| ------------------ | ---------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\>  | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                 | 手动卸载组件。                              |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                     | 获取通过该组件加载的 Cesium 对象。          |
| start              | (height?: number) => void                | 开始淹没分析。                              |
| pause              | () => void                               | 暂停/继续淹没分析。                         |
| stop               | () => void                               | 结束淹没分析。                              |
| getCurrentHeight   | () => number                             | 获取当前拉伸高度。                          |
