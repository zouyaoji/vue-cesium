<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 14:54:48
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 00:25:46
 * @FilePath: \vue-cesium\docs\zh-CN\component\vc-primitive-particle.md
-->

# VcPrimitiveParticle

加载粒子系统图元，相当于初始化一个 `Cesium.ParticleSystem` 实例。

## 基础用法

粒子系统图元组件的基础用法。

:::demo

primitives/vc-primitive-particle/usage

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| show | boolean | true | `optional` 是否显示粒子 |
| updateCallback | Function | | `optional` 更新回调函数 |
| emitter | Cesium.ParticleEmitter | | `optional` 粒子触发器类型 |
| modelMatrix | Cesium.Matrix4 | | `optional` 4x4转换矩阵，可将粒子系统从模型转换为世界坐标 |
| emitterModelMatrix | Cesium.Matrix4 | | `optional` 4x4转换矩阵，用于转换粒子系统局部坐标系内的粒子系统发射器 |
| emissionRate | number | `5` | `optional` 每秒要发射的粒子数 |
| bursts | Array | `false` | `optional` ParticleBurst 数组，在周期性时间发射粒子 |
| loop | boolean | `true` | `optional` 粒子系统完成后是否应循环其爆发 |
| scale | number | `1.0` | `optional` 设置比例尺，以在其粒子寿命期间应用到粒子图像 |
| startScale | number | | `optional` 在粒子寿命开始时应用于粒子图像的初始比例 |
| endScale | number | | `optional` 在粒子寿命结束时应用于粒子图像的最终比例 |
| color | VcColor\|Array\|string | | `optional` 设置粒子在其粒子寿命期间的颜色 |
| startColor | VcColor\|Array\|string | | `optional` 粒子在其生命初期的颜色 |
| endColor | VcColor\|Array\|string | | `optional` 粒子寿命结束时的颜色 |
| image | HTMLImageElement \| HTMLCanvasElement\|string | | `optional` 用于广告牌的URI，HTMLImageElement或HTMLCanvasElement |
| imageSize | VcCartesian2 | | `optional` 如果设置，则将覆盖用来缩放粒子图像尺寸（以像素为单位）的minimumImageSize和maximumImageSize输入 |
| minimumImageSize | VcCartesian2\|Array | | `optional` 设置宽度的最小范围，以高度为单位，在该范围之上可以随机缩放粒子图像的尺寸（以像素为单位） |
| maximumImageSize | VcCartesian2\|Array | | `optional` 设置最大边界（宽度乘以高度），在该边界以下可以随机缩放粒子图像的尺寸（以像素为单位） |
| speed | number | `1.0` | `optional` 如果设置，则用该值覆盖minimumSpeed和maximumSpeed输入 |
| minimumSpeed | number | | `optional` 设置以米/秒为单位的最小范围，在该范围上可以随机选择粒子的实际速度 |
| maximumSpeed | number | | `optional` 设置以米/秒为单位的最大范围，在该范围内将随机选择粒子的实际速度 |
| lifetime | number | | `optional` 粒子系统发射粒子的时间（以秒为单位） |
| particleLife | number | `5.0` | `optional` 如果设置，则使用此值覆盖minimumParticleLife和maximumParticleLife输入 |
| minimumParticleLife | number | | `optional` 设置以秒为单位的粒子寿命的可能持续时间的最小范围 |
| maximumParticleLife | number | | `optional` 设置以秒为单位的粒子生命的可能持续时间的最大范围 |
| mass | number | `1.0` | `optional` 设置粒子的最小和最大质量（以千克为单位） |
| minimumMass | number | | `optional` 设置粒子质量的最小范围（以千克为单位） |
| maximumMass | number | | `optional` 设置最大粒子质量（以千克为单位） |
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

- **[ParticleSystem](https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html)**
