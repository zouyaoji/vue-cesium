## VcGraphicsModel

Loading the model graphic. It is equivalent to initializing a `Cesium.ModelGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of the VcGraphicsModel component.

:::demo Use the `vc-graphics-model` tag to add a model to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity :position="[114, 40, 1.0]" description="Hello Vue Cesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
      <vc-graphics-model ref="model" uri="https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb"></vc-graphics-model>
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

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the model. |
| uri | String | | `optional` A string or Resource Property specifying the URI of the glTF asset. |
| scale | Number | `1.0` | `optional` A numeric Property specifying a uniform linear scale. |
| minimumPixelSize | Number | `0.0` | `optional` A numeric Property specifying the approximate minimum pixel size of the model regardless of zoom. |
| maximumScale | Number | | `optional` The maximum scale size of a model. An upper limit for minimumPixelSize. |
| incrementallyLoadTextures | Boolean | `true` | `optional` Determine if textures may continue to stream in after the model is loaded. |
| runAnimations | Boolean | `true` | `optional` A boolean Property specifying if glTF animations specified in the model should be started. |
| clampAnimations | Boolean | `true` | `optional` A boolean Property specifying if glTF animations should hold the last pose for time durations with no keyframes. |
| shadows | Number | `1` | `optional` An enum Property specifying whether the model casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| heightReference | Number | `0` | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| silhouetteColor | Object\|String\|Array | `'red'` | `optional` A Property specifying the Color of the silhouette. |
| silhouetteSize | Number | `0.0` | `optional` A numeric Property specifying the size of the silhouette in pixels. |
| color | Object\|String\|Array | `'white'` | `optional` A Property specifying the Color that blends with the model's rendered color. |
| colorBlendMode | Number | `0` | `optional` An enum Property specifying how the color blends with the model. **HIGHLIGHT: 0, REPLACE: 1, MIX: 2** |0/1/2|
| colorBlendAmount | Number | `0.5` | `optional` A numeric Property specifying the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two. |
| imageBasedLightingFactor | Object\|Array | `{x: 1.0, y: 1.0}` | `optional` A property specifying the contribution from diffuse and specular image-based lighting. |
| lightColor | Object\|String\|Array | | `optional` A property specifying the light color to use when shading the model. The default sun light color will be used when undefined. |
| distanceDisplayCondition | Object\|Array | | `optional` A NearFarScalar Property used to set pixelOffset based on distance from the camera.A Property specifying at what distance from the camera that this model will be displayed. |
| nodeTransformations | Object | | `optional` An object, where keys are names of nodes, and values are TranslationRotationScale Properties describing the transformation to apply to that node. The transformation is applied after the node's existing transformation as specified in the glTF, and does not replace the node's existing transformation. |
| articulations | Object | | `optional` An object, where keys are composed of an articulation name, a single space, and a stage name, and the values are numeric properties. |
| clippingPlanes | Object | | `optional` A property specifying the ClippingPlaneCollection used to selectively disable rendering the model. |

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                         | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[ModelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/ModelGraphics.html)**
