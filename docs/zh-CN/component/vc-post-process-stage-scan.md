# VcPostProcessStageScan

通过后期处理封装的扫描特效，雷达扫描和圆形扫描。

## 基础用法

扫描特效组件的基础用法。

:::demo 使用 `vc-post-process-stage-scan` 标签在三维球上添加后处理扫描效果。

post-processes/vc-post-process-stage-scan/usage

:::

## 属性

| 属性名  | 类型                 | 默认值                                                                      | 描述                                                |
| ------- | -------------------- | --------------------------------------------------------------------------- | --------------------------------------------------- |
| type    | string               | `'radar'`                                                                   | `optional` 指定扫描类型，可选值 'radar', 'circle'。 |
| options | HeatmapConfiguration | `{ position: [0, 0], radius: 1500, interval: 3500, color: [0, 0, 0, 255] }` | `optional` 指定可选参数。                           |

## 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |
