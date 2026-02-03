## VcOverlayHtml

按地理位置加载 HTML 元素覆盖物。

**注意：** 需要引入样式文件: `import 'vue-cesium/dist/index.css';`

### 基础用法

HTML 覆盖物组件的基础用法。

:::demo

overlays/vc-overlay-html/usage

:::

### 属性

| 属性名      | 类型          | 默认值 | 描述                                            |
| ----------- | ------------- | ------ | ----------------------------------------------- |
| show        | boolean       | `true` | `optional` 指定 HTML 是否显示。                 |
| position    | VcPosition    |        | `optional` 指定 HTML 元素的地理位置。           |
| pixelOffset | VcCartesian2  |        | `optional` 指定 HTML 的像素偏移。               |
| autoHidden  | boolean       | `true` | `optional` 指定 HTML 在地球背面时是否自动隐藏。 |
| customClass | string        |        | `optional` 指定 HTML 自定义 class 。            |
| teleport    | TeleportProps |        | `optional` 指定 teleport 参数。                 |

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

### 参考

- 官方沙盒： [HTML Overlays](https://sandcastle.cesium.com/gallery/HTML%20Overlays.html)
