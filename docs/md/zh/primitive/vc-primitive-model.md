# Model

`vc-primitive-model` 组件用于加载基于 glTF 的三维模型。

## 示例

### 加载 glTF 模型

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive-model :url="url" :modelMatrix="modelMatrix" :scale="10000" :minimumPixelSize="128" :maximumScale="200000"> </vc-primitive-model>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          url: './statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
          modelMatrix: {}
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-primitive-model :url="url" :modelMatrix="modelMatrix" :scale="10000" :minimumPixelSize="128" :maximumScale="200000">
      </vc-primitive-model>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: './statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
        modelMatrix: {}
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名                    | 类型    | 默认值 | 描述                                                                                           |
| ------------------------- | ------- | ------ | ---------------------------------------------------------------------------------------------- |
| url                       | String  |        | `required` 指定 gltf 文件的 url 地址。                                                         |
| basePath                  | String  |        | `optional` 指定 glTF JSON 中的路径相对于的基本路径。                                           |
| show                      | Boolean | `true` | `optional` 指定 model 图元是否显示。                                                           |
| modelMatrix               | Object  |        | `optional` 4x4 转换矩阵，用于将模型从模型坐标转换为世界坐标。                                  |
| scale                     | Number  | `1.0`  | `optional` 指定 model 缩放比例。                                                               |
| minimumPixelSize          | Number  | `0.0`  | `optional` 指定 model 的最小像素。                                                             |
| maximumScale              | Number  |        | `optional` 指定 model 最大像素。                                                               |
| id                        | \*      |        | `optional` 指定与 model 关联的信息。                                                           |
| allowPicking              | Boolean | `true` | `optional` 指定与 model 是否可以被拾取。                                                       |
| incrementallyLoadTextures | Boolean | `true` | `optional` 指定在加载模型后纹理是否可以继续流入。                                              |
| asynchronous              | Boolean | `true` | `optional` 确定在加载所有 glTF 文件后，是否将模型 WebGL 资源创建分散在几个帧或块上，直到完成。 |
| clampAnimations | Boolean | `true` | `optional` 指定动画在没有帧动画的时候保持最后一个姿势。 |
| shadows | Number | `1` | `optional` 指定 model 是否投射或接收每个光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| debugShowBoundingVolume | Boolean | `false` | `optional` 可选的仅用于调试。 为模型中的每个DrawCommand绘制边界球。 |
| debugWireframe | Boolean | `false` | `optional` 可选的仅用于调试。 仅用于调试。 在线框中绘制模型。 |
| heightReference | Number | `0` | `optional` 指定 model 的高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| scene | Object | `false` | `optional` 对于使用height reference属性的模型必须传递。 |
| distanceDisplayCondition | Object | | `optional` 指定 model 随相机改变的显示条件。 **结构：{ near: number, far: number }** |
| color | Object\|String\|Array | `'WHITE'` | `optional` 指定 model 渲染混合的颜色。 |
| colorBlendMode | Number | `0` | `optional` 指定 model 与颜色混合模式。 **HIGHLIGHT: 0, REPLACE: 1, MIX: 2** |
| colorBlendAmount | Number | `0.5` | `optional` 指定 colorBlendMode 为 MIX 的颜色强度。0 表示模型颜色，1 表示纯色，0-1 表示混合。 |
| silhouetteColor | Object\|String\|Array | `'RED'` | `optional` 指定 model 轮廓线颜色。 |
| silhouetteSize | Number | `0.0` | `optional` 指定 model 轮廓线像素尺寸。 |
| clippingPlanes | Object | | `optional` 指定 model 屏幕裁剪参数。 |
| debugWireframe | Boolean | `true` | `optional` 确定是否在GPU上对Draco编码的模型进行了反量化。 这减少了编码模型的总内存使用量。 |
| credit | Object\|String | | `optional` 指定 model 的描述信息。 |

---

- 参考官方文档：**[Model](https://cesium.com/docs/cesiumjs-ref-doc/Model.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
