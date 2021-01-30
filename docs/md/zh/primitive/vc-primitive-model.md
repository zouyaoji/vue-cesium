# Model

`vc-primitive-model` 组件用于加载基于 glTF 的三维模型。

## 示例

### 加载 glTF 模型

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive-model
          :url="url"
          @readyPromise="readyPromise"
          :modelMatrix="modelMatrix"
          :scale="10000"
          :minimumPixelSize="128"
          :maximumScale="200000"
          @click="clicked"
          :luminanceAtZenith="luminanceAtZenith"
          :specularEnvironmentMaps="specularEnvironmentMaps"
          :sphericalHarmonicCoefficients="sphericalHarmonicCoefficients"
        >
        </vc-primitive-model>
        <div class="demo-tool">
          <span>Luminance at Zenith</span>
          <vue-slider v-model="luminanceAtZenith" :min="0" :max="2" :interval="0.01"></vue-slider>
          <md-checkbox v-model="proceduralEnvironmentLighting" class="md-primary">Use procedural environment lighting</md-checkbox>
        </div>
      </vc-viewer>
    </div>
  </template>

  <script>
    const coefficients = [
      [-0.066550267689383, -0.022088055746048, 0.078835009246127],
      [0.038364097478591, 0.045714300098753, 0.063498904606215],
      [-0.01436536331281, -0.026490613715151, -0.05018940406602],
      [-0.05153278691789, -0.050777795729986, -0.056449044453032],
      [0.043454596136534, 0.046672590104157, 0.05753010764661],
      [-0.00164046627411, 0.001286638231156, 0.007228908989616],
      [-0.042260855700641, -0.046394335094707, -0.057562936365585],
      [-0.004953478914091, -0.000479681664876, 0.008508150106928]
    ]
    const environmentMapURL = './statics/SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx'
    export default {
      data() {
        return {
          url: './statics/SampleData/models/Pawns/Pawns.glb',
          modelMatrix: {},
          proceduralEnvironmentLighting: false,
          luminanceAtZenith: 0.2,
          specularEnvironmentMaps: environmentMapURL,
          sphericalHarmonicCoefficients: coefficients
        }
      },
      watch: {
        proceduralEnvironmentLighting(val) {
          if (val) {
            this.specularEnvironmentMaps = undefined
            this.sphericalHarmonicCoefficients = undefined
          } else {
            this.specularEnvironmentMaps = environmentMapURL
            this.sphericalHarmonicCoefficients = coefficients
          }
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.viewer = viewer
          this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
        },
        readyPromise(model) {
          const boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix)
          this.viewer.scene.camera.flyToBoundingSphere(boundingSphere)
        },
        clicked(e) {
          console.log(e)
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
      <vc-primitive-model
        :url="url"
        @readyPromise="readyPromise"
        :modelMatrix="modelMatrix"
        :scale="10000"
        :minimumPixelSize="128"
        :maximumScale="200000"
        @click="clicked"
        :luminanceAtZenith="luminanceAtZenith"
        :specularEnvironmentMaps="specularEnvironmentMaps"
        :sphericalHarmonicCoefficients="sphericalHarmonicCoefficients"
      >
      </vc-primitive-model>
      <div class="demo-tool">
        <span>Luminance at Zenith</span>
        <vue-slider v-model="luminanceAtZenith" :min="0" :max="2" :interval="0.01"></vue-slider>
        <md-checkbox v-model="proceduralEnvironmentLighting" class="md-primary">Use procedural environment lighting</md-checkbox>
      </div>
    </vc-viewer>
  </div>
</template>

<script>
  const coefficients = [
    [-0.066550267689383, -0.022088055746048, 0.078835009246127],
    [0.038364097478591, 0.045714300098753, 0.063498904606215],
    [-0.01436536331281, -0.026490613715151, -0.05018940406602],
    [-0.05153278691789, -0.050777795729986, -0.056449044453032],
    [0.043454596136534, 0.046672590104157, 0.05753010764661],
    [-0.00164046627411, 0.001286638231156, 0.007228908989616],
    [-0.042260855700641, -0.046394335094707, -0.057562936365585],
    [-0.004953478914091, -0.000479681664876, 0.008508150106928]
  ]
  const environmentMapURL = './statics/SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx'
  export default {
    data() {
      return {
        url: './statics/SampleData/models/Pawns/Pawns.glb',
        modelMatrix: {},
        proceduralEnvironmentLighting: false,
        luminanceAtZenith: 0.2,
        specularEnvironmentMaps: environmentMapURL,
        sphericalHarmonicCoefficients: coefficients
      }
    },
    watch: {
      proceduralEnvironmentLighting(val) {
        if (val) {
          this.specularEnvironmentMaps = undefined
          this.sphericalHarmonicCoefficients = undefined
        } else {
          this.specularEnvironmentMaps = environmentMapURL
          this.sphericalHarmonicCoefficients = coefficients
        }
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.viewer = viewer
        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
      },
      readyPromise(model) {
        const boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix)
        this.viewer.scene.camera.flyToBoundingSphere(boundingSphere)
      },
      clicked(e) {
        console.log(e)
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
| shadows | Number | `1` | `optional` 指定 model 是否投射或接收每个光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4** |
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
| dequantizeInShader | Boolean | `true` | `optional` 确定是否在GPU上对Draco编码的模型进行了反量化。 这减少了编码模型的总内存使用量。|
| imageBasedLightingFactor | Array\|Object | | `optional` 缩放来自地球，天空，大气层和星空盒的基于漫反射和镜面反射图像的照明。|
| lightColor | Array\|Object | | `optional` 为模型着色时的浅色。 未定义时，将使用场景的灯光颜色。 |
| luminanceAtZenith | Number | `0.2` | `optional` 太阳在天顶的亮度，以每平方米千坎德拉为单位，用于该模型的过程环境图。|
| sphericalHarmonicCoefficients | Array\|Object || `optional` 用于基于图像的照明的漫反射颜色的三阶球面谐波系数。|
| specularEnvironmentMaps | String ||`optional` KTX文件的URL，其中包含镜面照明的立方体贴图和卷积的镜面mipmap。|
| credit | Object\|String | | `optional` 指定 model 的描述信息。 |
| backFaceCulling | Boolean | `true` | `optional` 是否剔除背面几何。 如果为true，则背面剔除取决于材质的doubleSided属性； 如果为假，则禁用背面剔除。 如果Model＃color是半透明的或Model＃silhouetteSize大于0.0，则不会剔除背面|

---

- 参考官方文档：**[Model](https://cesium.com/docs/cesiumjs-ref-doc/Model.html)**

## 事件

| 事件名       | 参数                                                       | 描述                                                                             |
| ------------ | ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject}                             | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| readyPromise | model                                                      | 模型可用时触发。 返回模型对象。                                                  |
| mousedown    | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上按下时触发。                                                       |
| mouseup      | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上弹起时触发。                                                       |
| click        | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元时触发。                                                           |
| clickout     | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元外部时触。                                                         |
| dblclick     | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标左键双击该图元时触发。                                                       |
| mousemove    | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上移动时触发。                                                       |
| mouseover    | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移动到该图元时触发。                                                         |
| mouseout     | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移出该图元时触发。                                                           |

---
