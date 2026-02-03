<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 14:54:48
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 00:26:35
 * @FilePath: \vue-cesium\docs\zh-CN\component\vc-primitive-cluster.md
-->

# VcPrimitiveCluster

聚合图元。用图元 API 对点、布告板、标签进行聚合。

## 基础用法

聚合图元组件的基础用法。

:::demo

primitives/vc-primitive-cluster/usage

:::

## API

### Props

| 属性名             | 类型               | 默认值 | 描述                                            |
| ------------------ | ------------------ | ------ | ----------------------------------------------- |
| show               | boolean            | `true` | `optional` 指定图元是否显示                     |
| enabled            | boolean            | `true` | `optional` 指定聚合是否生效                     |
| pixelRange         | number             | `80`   | `optional` 指定聚合生效的像素范围               |
| minimumClusterSize | number             | `2`    | `optional` 指定可以聚合的屏幕空间对象的最小数量 |
| clusterBillboards  | boolean            | `true` | `optional` 指定布告板图元对象聚合是否生效       |
| clusterLabels      | boolean            | `true` | `optional` 指定标签图元对象聚合是否生效         |
| clusterPoints      | boolean            | `true` | `optional` 指定点图元对象聚合是否生效           |
| billboards         | VcBillboardProps[] | `[]`   | `optional` 指定布告板图元数组                   |
| labels             | VcLabelProps[]     | `[]`   | `optional` 指定标签图元数组                     |
| points             | VcPointProps[]     | `[]`   | `optional` 指定点图元数组                       |
| enableMouseEvent   | boolean            | `true` | `optional` 指定鼠标事件是否生效                 |

### Events

| 事件名       | 参数                                    | 描述                     |
| ------------ | --------------------------------------- | ------------------------ |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发           |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发       |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发           |
| readyPromise |                                         | 模型对象可用时触发       |
| mousedown    | (evt: VcPickEvent)                      | 鼠标在该图元上按下时触发 |
| mouseup      | (evt: VcPickEvent)                      | 鼠标在该图元上弹起时触发 |
| click        | (evt: VcPickEvent)                      | 鼠标单击该图元时触发     |
| clickout     | (evt: VcPickEvent)                      | 鼠标单击该图元外部时触发 |
| dblclick     | (evt: VcPickEvent)                      | 鼠标左键双击该图元时触发 |
| mousemove    | (evt: VcPickEvent)                      | 鼠标在该图元上移动时触发 |
| mouseover    | (evt: VcPickEvent)                      | 鼠标移动到该图元时触发   |
| mouseout     | (evt: VcPickEvent)                      | 鼠标移出该图元时触发     |

## 参考

- **[tingyuxuan2302/cesium-vue3-vite](https://github.com/tingyuxuan2302/cesium-vue3-vite/blob/github/src/utils/cesiumCtrl/primitiveCluster.js)**
