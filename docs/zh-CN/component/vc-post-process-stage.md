# VcPostProcessStage

加载后期处理特效，相当于初始化一个 `Cesium.PostProcessStage` 实例。

## 基础用法

后期处理特效组件的基础用法。

:::demo 使用 `vc-post-process-stage` 标签在三维球上添加一个下雨后处理效果。

post-processes/vc-post-process-stage/usage

:::

## 属性

| 属性名           | 类型                   | 默认值  | 描述                                                                                                  |
| ---------------- | ---------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| fragmentShader   | string                 |         | `required` 指定着色器代码。                                                                           |
| uniforms         | any                    |         | `optional` 指定着色器 uniforms 参数。uniform 变量一般用来表示：变换矩阵，材质，光照参数和颜色等信息。 |
| textureScale     | number                 | `1.0`   | `optional` 指定纹理尺寸缩放比例，取值范围 (0.0, 1.0] 。                                               |
| forcePowerOfTwo  | boolean                | `false` | `optional` 是否强制将纹理尺寸都等于 2 的幂。 2 的幂将是最小维度中 2 的下一个幂。                      |
| sampleMode       | number                 | `0`     | `optional` 指定输入颜色纹理的采样方式。 **{NEAREST: 0, LINEAR: 1}**                                   |
| pixelFormat      | number                 |         | `optional` 指定输出纹理的像素格式。                                                                   |
| pixelDatatype    | number                 |         | `optional` 指定输出纹理的数据类型。                                                                   |
| clearColor       | VcColor\|Array\|string | `BLACK` | `optional` 指定清除输出纹理的颜色。                                                                   |
| scissorRectangle | VcBoundingRectangle    |         | `optional` 指定用于测试的矩形。                                                                       |
| name             | string                 |         | `optional` 指定唯一名称，未提供默认生成 GUID。                                                        |

## 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

## 参考

- 官方文档： [PostProcessStage](https://cesium.com/docs/cesiumjs-ref-doc/PostProcessStage.html)
