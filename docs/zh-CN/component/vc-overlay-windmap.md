<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-18 22:14:46
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 20:48:08
 * @FilePath: \vue-cesium\docs\zh-CN\component\vc-overlay-windmap.md
-->

## VcOverlayWindmap

加载风场图。

### 基础用法

风场图组件的基础用法。

:::demo

overlays/vc-overlay-windmap/usage

:::

### 属性

| 属性名           | 类型                  | 默认值 | 描述                              |
| ---------------- | --------------------- | ------ | --------------------------------- |
| data             | VcWindData            |        | `required` 指定风场数据。         |
| show             | boolean               | `true` | `optional` 指定风场是否显示。     |
| options          | ParticleSystemOptions |        | `optional` 指定风场数据渲染参数。 |
| viewerParameters | ViewerParameters      |        | `optional` 指定风场数据渲染参数。 |

:::tip

options 默认参数:

```js
const options = {
  maxParticles: 64 * 64,
  particleHeight: 100.0,
  fadeOpacity: 0.996,
  dropRate: 0.003,
  dropRateBump: 0.01,
  speedFactor: 1.0,
  lineWidth: 4.0
}
```

:::

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 方法

| 方法名             | 参数                                                      | 描述                                        |
| ------------------ | --------------------------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>                   | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\>                   | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                                  | 手动卸载组件。                              |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject>                  | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                                      | 获取该组件加载的 Cesium 对象。              |
| getNearestUV       | (longitude: number, latitude: number) => [number, number] | 根据经纬度获取 U V 值。                     |

### 参考

- 3D-Wind-Field: [3D-Wind-Field](https://github.com/RaymanNg/3D-Wind-Field)
