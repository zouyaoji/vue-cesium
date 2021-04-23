## VcGraphicsModel

加载模型实体，相当于初始化一个 `Cesium.ModelGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

模型实体组件的基础用法。

:::demo 使用 `vc-graphics-model` 标签在三维球上添加模型实体对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity :position="[114, 40, 1.0]" description="Hello Vue Cesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
      <vc-graphics-model ref="model" uri="./SampleData/models/GroundVehicle/GroundVehicle.glb"></vc-graphics-model>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }

      const model = ref(null)

      // life cycle
      onMounted(() => {
        model.value.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
          // viewer.zoomTo(viewer.entities)
          viewer.zoomTo(cesiumObject._vcParent)
        })
      })

      return {
        onEntityEvt,
        onViewerReady,
        model
      }
    }
  }
</script>
```

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ----- | ---- | ----- | ----- |
| show | Boolean | `true` | `optional` 指定 model 是否显示。 |
| uri | String | | `optional` 指定 model 的 url 地址。 |
| scale | Number | `1.0` | `optional` 指定 model 缩放比例。 |
| minimumPixelSize | Number | `0.0` | `optional` 指定 model 的最小像素。 |
| maximumScale | Number | | `optional` 指定 model 最大像素。 |
| incrementallyLoadTextures | Boolean | `true` | `optional` 指定在加载模型后纹理是否可以继续流入。 |
| runAnimations | Boolean | `true` | `optional` 指定是否启动模型中的动画。 |
| clampAnimations | Boolean | `true` | `optional` 指定动画在没有帧动画的时候保持最后一个姿势。 |
| shadows | Number | `1` | `optional` 指定 model 是否投射或接收每个光源的阴影。 |
| heightReference | Number | `0` | `optional` 指定 model 的高度模式。 |
| silhouetteColor | Object\|String\|Array | `'RED'` | `optional` 指定 model 轮廓线颜色。 |
| silhouetteSize | Number | `0.0` | `optional` 指定 model 轮廓线像素尺寸。 |
| color | Object\|String\|Array | `'WHITE'` | `optional` 指定 model 渲染混合的颜色。 |
| colorBlendMode | Number | `0` | `optional` 指定 model 与颜色混合模式。 |
| colorBlendAmount | Number | `0.5` | `optional` 指定 colorBlendMode 为 MIX 的颜色强度。0 表示模型颜色，1 表示纯色，0-1 表示混合。 |
| imageBasedLightingFactor | Object | `{x: 1.0, y: 1.0}` | `optional` 指定漫反射和镜面反射因子。 |
| lightColor | Object\|String\|Array | | `optional` 指定着色模型时要使用的灯光颜色的属性。未指定是太阳颜色。 |
| distanceDisplayCondition | Object | | `optional` 指定模型随相机改变的显示条件。 |
| nodeTransformations | Object | | `optional` 设置 TranslationRotationScale 节点转换参数。 |
| articulations | Object | | `optional` |
| clippingPlanes | Object | | `optional` 指定模型屏幕裁剪参数。 |

### 事件

| 事件名            | 参数                               | 描述                                     |
| ----------------- | ---------------------------------- | ---------------------------------------- |
| beforeLoad        | Vue Instance                       | 对象加载前触发。                         |
| ready             | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。                     |
| destroyed         | Vue Instance                       | 对象销毁时触发。                         |
| definitionChanged |                                    | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[ModelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/ModelGraphics.html)**
