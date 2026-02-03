# VcPostProcessStageCollection

加载后期处理特效集合，管理一组后期处理特效。

可用于挂载 `vc-post-process-stage` 和 `vc-post-process-stage-scan` 组件。

## 基础用法

后期处理特效集合组件的基础用法。

:::demo 使用 `vc-post-process-stage-collection` 标签在三维球上添加一组后处理效果。

post-processes/vc-post-process-stage-collection/usage

:::

## 属性

| 属性名        | 类型  | 默认值 | 描述                                                                  |
| ------------- | ----- | ------ | --------------------------------------------------------------------- |
| postProcesses | Array |        | `optional` 指定后处理集合。 属性与 `vc-post-process-stage` 保持一致。 |

## 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

## 插槽

| 插槽名  | 描述                 | 子组件                                           |
| ------- | -------------------- | ------------------------------------------------ |
| default | 用于挂载后处理组件。 | vc-post-process-stage/vc-post-process-stage-scan |

## 参考

- 官方文档： [PostProcessStageCollection](https://cesium.com/docs/cesiumjs-ref-doc/PostProcessStageCollection.html)
