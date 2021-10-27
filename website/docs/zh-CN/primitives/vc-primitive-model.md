## VcPrimitiveModel

加载模型图元，相当于初始化一个 `Cesium.Model` 实例。

### 基础用法

模型图元组件的基础用法。

:::demo 使用 `vc-primitive-model` 标签在三维球上添加模型并改变它的光照。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive-model
      ref="primitive"
      :url="url"
      @readyPromise="onReadyPromise"
      :modelMatrix="modelMatrix"
      :scale="10000"
      :minimumPixelSize="128"
      :maximumScale="200000"
      @click="onClicked"
      :luminanceAtZenith="luminanceAtZenith"
      :specularEnvironmentMaps="specularEnvironmentMaps"
      :sphericalHarmonicCoefficients="sphericalHarmonicCoefficients"
    >
    </vc-primitive-model>
  </vc-viewer>
  <div class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">销毁</el-button>
      <el-button type="danger" round @click="load">加载</el-button>
      <el-button type="danger" round @click="reload">重载</el-button>
    </el-row>
    <el-row>
      <el-col>
        <div class="block">
          <span class="demonstration">顶点亮度</span>
          <el-slider v-model="luminanceAtZenith" :min="0" :max="2" :step="0.01"></el-slider>
          <el-checkbox v-model="proceduralEnvironmentLighting" :min="0" :max="5" :step="0.01">使用程序内置的环境光照</el-checkbox>
        </div>
      </el-col>
    </el-row>
  </div>
</el-row>

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
  const environmentMapURL = 'https://zouyaoji.top/vue-cesium/SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx'
  export default {
    data() {
      return {
        url: 'https://zouyaoji.top/vue-cesium/SampleData/models/Pawns/Pawns.glb',
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
      onViewerReady({ Cesium, viewer }) {
        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
      },
      onReadyPromise(model, viewer) {
        const boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix)
        viewer.scene.camera.flyToBoundingSphere(boundingSphere)
      },
      onClicked(e) {
        console.log(e)
      },
      unload() {
        this.$refs.primitive.unload()
      },
      load() {
        this.$refs.primitive.load()
      },
      reload() {
        this.$refs.primitive.reload()
      }
    }
  }
</script>
```

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ------ | ---- | ------ | ---- |---|
| url | String | | `required` 指定 gltf 文件的 url 地址。 |
| basePath | String | | `optional` 指定 glTF JSON 中 url 的相对路径。 |
| show | Boolean | `true` | `optional` 指定 model 图元是否显示。 |
| modelMatrix | Object | | `optional` 指定将模型从模型坐标转换为世界坐标的 4x4 矩阵。 |
| scale | Number | `1.0` | `optional` 指定 model 缩放比例。 |
| minimumPixelSize | Number | `0.0` | `optional` 指定 model 的最小像素。 |
| maximumScale | Number | | `optional` 指定 model 最大像素。 |
| id | \* | | `optional` 指定与 model 关联的信息，拾取时将返回该属性。 |
| allowPicking | Boolean | `true` | `optional` 指定与 model 是否可以被拾取。 |
| incrementallyLoadTextures | Boolean | `true` | `optional` 指定在加载模型后纹理是否可以继续加载。 |
| asynchronous | Boolean | `true` | `optional` 确定在加载所有 glTF 文件后，是否将模型 WebGL 资源创建分散在几个帧或块上，直到完成。 |
| clampAnimations | Boolean | `true` | `optional` 指定动画在没有帧动画的时候保持最后一个姿势。 |
| shadows | Number | `1` | `optional` 指定 model 是否投射或接收每个光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| debugShowBoundingVolume | Boolean | `false` | `optional` 可选的仅用于调试。 为模型中的每个 DrawCommand 绘制边界球。 |
| debugWireframe | Boolean | `false` | `optional` 可选的仅用于调试。 仅用于调试。 在线框中绘制模型。 |
| heightReference | Number | `0` | `optional` 指定 model 的高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| scene | Object | `false` | `optional` 指定model的scene参数，使用 heightReference 属性的模型必须传递。 |
| distanceDisplayCondition | Object\|Array | | `optional` 指定 model 随相机改变的显示条件。|
| color | Object\|String\|Array | `'white'` | `optional` 指定 model 渲染混合的颜色。 |
| colorBlendMode | Number | `0` | `optional` 指定 model 与颜色混合模式。 **HIGHLIGHT: 0, REPLACE: 1, MIX: 2** |
| colorBlendAmount | Number | `0.5` | `optional` 指定 colorBlendMode 为 MIX 的颜色强度。0 表示模型颜色，1 表示纯色，0-1 表示混合。 |
| silhouetteColor | Object\|String\|Array | `'red'` | `optional` 指定 model 轮廓线颜色。 |
| silhouetteSize | Number | `0.0` | `optional` 指定 model 轮廓线像素尺寸。 |
| clippingPlanes | Object | | `optional` 指定 model 屏幕裁剪参数。 |
| dequantizeInShader | Boolean | `true` | `optional` 确定是否在 GPU 上对 Draco 编码的模型进行了反量化。 这减少了编码模型的总内存使用量。|
| imageBasedLightingFactor | Array\|Object | | `optional` 缩放来自地球，天空，大气层和星空盒的基于漫反射和镜面反射图像的照明。|
| lightColor | Array\|Object | | `optional` 为模型着色时的浅色。 未定义时，将使用场景的灯光颜色。 |
| luminanceAtZenith | Number | `0.2` | `optional` 太阳在天顶的亮度，以每平方米千坎德拉为单位，用于该模型的过程环境图。|
| sphericalHarmonicCoefficients | Array\|Object || `optional` 用于基于图像的照明的漫反射颜色的三阶球面谐波系数。|
| specularEnvironmentMaps | String ||`optional` KTX 文件的 URL，其中包含镜面照明的立方体贴图和卷积的镜面 mipmap。|
| credit | Object\|String | | `optional` 指定 model 的描述信息。 |
| backFaceCulling | Boolean | `true` | `optional` 是否剔除背面几何。 如果为 true，则背面剔除取决于材质的 doubleSided 属性； 如果为假，则禁用背面剔除。 如果 Model#color 是半透明的或 Model#silhouetteSize 大于 0.0，则不会剔除背面|
| enableMouseEvent | Boolean | `true` | `optional` 指定鼠标事件是否生效。 |

### 事件

| 事件名       | 参数                                                       | 描述                       |
| ------------ | ---------------------------------------------------------- | -------------------------- |
| beforeLoad   | Vue Instance                                               | 对象加载前触发。           |
| ready        | {Cesium, viewer, cesiumObject, vm}                         | 对象加载成功时触发。       |
| destroyed    | Vue Instance                                               | 对象销毁时触发。           |
| readyPromise |                                                            | 模型对象可用时触发。       |
| mousedown    | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上按下时触发。 |
| mouseup      | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上弹起时触发。 |
| click        | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元时触发。     |
| clickout     | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元外部时触发。 |
| dblclick     | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标左键双击该图元时触发。 |
| mousemove    | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上移动时触发。 |
| mouseover    | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移动到该图元时触发。   |
| mouseout     | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移出该图元时触发。     |

### 参考

- 官方文档： **[Model](https://cesium.com/docs/cesiumjs-ref-doc/Model.html)**
