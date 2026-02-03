<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 14:54:12
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 00:25:14
 * @FilePath: \vue-cesium\docs\zh-CN\component\vc-primitive-model.md
-->

# VcPrimitiveModel

加载模型图元，相当于初始化一个 `Cesium.Model` 实例。

## 基础用法

模型图元组件的基础用法。

:::demo

primitives/vc-primitive-model/usage

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| --- | --- | --- | --- | --- |
| url | string | | `required` 指定 gltf 文件的 url 地址 |
| basePath | string | | `optional` 指定 glTF JSON 中 url 的相对路径 |
| show | boolean | `true` | `optional` 指定 model 图元是否显示 |
| modelMatrix | Cesium.Matrix4 | | `optional` 指定将模型从模型坐标转换为世界坐标的 4x4 矩阵 |
| scale | number | `1.0` | `optional` 指定 model 缩放比例 |
| minimumPixelSize | number | `0.0` | `optional` 指定 model 的最小像素 |
| maximumScale | number | | `optional` 指定 model 最大像素 |
| id | * | | `optional` 指定与 model 关联的信息，拾取时将返回该属性 |
| allowPicking | boolean | `true` | `optional` 指定与 model 是否可以被拾取 |
| incrementallyLoadTextures | boolean | `true` | `optional` 指定在加载模型后纹理是否可以继续加载 |
| asynchronous | boolean | `true` | `optional` 确定在加载所有 glTF 文件后，是否将模型 WebGL 资源创建分散在几个帧或块上，直到完成 |
| clampAnimations | boolean | `true` | `optional` 指定动画在没有帧动画的时候保持最后一个姿势 |
| shadows | number | `1` | `optional` 指定 model 是否投射或接收每个光源的阴影 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** | 0/1/2/3 |
| debugShowBoundingVolume | boolean | `false` | `optional` 可选的仅用于调试。为模型中的每个 DrawCommand 绘制边界球 |
| debugWireframe | boolean | `false` | `optional` 可选的仅用于调试。在线框中绘制模型 |
| heightReference | number | `0` | `optional` 指定 model 的高度模式 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** | 0/1/2 |
| scene | Cesium.Scene | `false` | `optional` 指定model的scene参数，使用 heightReference 属性的模型必须传递 |
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` 指定 model 随相机改变的显示条件 |
| color | VcColor\|string\|Array | `'white'` | `optional` 指定 model 渲染混合的颜色 |
| colorBlendMode | number | `0` | `optional` 指定 model 与颜色混合模式 **HIGHLIGHT: 0, REPLACE: 1, MIX: 2** |
| colorBlendAmount | number | `0.5` | `optional` 指定 colorBlendMode 为 MIX 的颜色强度。0 表示模型颜色，1 表示纯色，0-1 表示混合 |
| silhouetteColor | VcColor\|string\|Array | `'red'` | `optional` 指定 model 轮廓线颜色 |
| silhouetteSize | number | `0.0` | `optional` 指定 model 轮廓线像素尺寸 |
| clippingPlanes | Cesium.ClippingPlaneCollection \| VcCallbackPropertyFunction\<Cesium.ClippingPlaneCollection\> | | `optional` 指定 model 屏幕裁剪参数 |
| dequantizeInShader | boolean | `true` | `optional` 确定是否在 GPU 上对 Draco 编码的模型进行了反量化。这减少了编码模型的总内存使用量 |
| imageBasedLightingFactor | VcColor | | `optional` 缩放来自地球，天空，大气层和星空盒的基于漫反射和镜面反射图像的照明 |
| lightColor | VcColor | | `optional` 为模型着色时的浅色。未定义时，将使用场景的灯光颜色 |
| luminanceAtZenith | number | `0.2` | `optional` 太阳在天顶的亮度，以每平方米千坎德拉为单位，用于该模型的过程环境图 |
| sphericalHarmonicCoefficients | VcCartesian3Array | | `optional` 用于基于图像的照明的漫反射颜色的三阶球面谐波系数 |
| specularEnvironmentMaps | string | | `optional` KTX 文件的 URL，其中包含镜面照明的立方体贴图和卷积的镜面 mipmap |
| credit | Cesium.Credit\|string | | `optional` 指定 model 的描述信息 |
| backFaceCulling | boolean | `true` | `optional` 是否剔除背面几何。如果为 true，则背面剔除取决于材质的 doubleSided 属性；如果为假，则禁用背面剔除。如果 Model#color 是半透明的或 Model#silhouetteSize 大于 0.0，则不会剔除背面 |
| enableMouseEvent | boolean | `true` | `optional` 指定鼠标事件是否生效 |

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

- **[Model](https://cesium.com/docs/cesiumjs-ref-doc/Model.html)**
