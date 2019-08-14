<script>
import {
  modelMatrix,
  id,
  aaMixin,
  debugShowBoundingVolume,
  scene
} from '@/mixins/entity/allProps'
import modelMixin from '@/mixins/entity/modelMixin'
import primitiveMixin from '@/mixins/primitive/primitiveMixin'
import { makeColor, makeDistanceDisplayCondition } from '@/util/util'
export default {
  name: 'model-primitive',
  mixins: [
    modelMatrix,
    id,
    aaMixin,
    debugShowBoundingVolume,
    scene,
    modelMixin,
    primitiveMixin
  ],
  props: {
    url: String,
    basePath: String,
    debugWireframe: {
      type: Boolean,
      default: false
    },
    dequantizeInShader: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    url (val) {
      this.reload()
    },
    basePath (val) {
      this.reload()
    },
    debugWireframe (val) {
      this.primitive.debugWireframe = val
    },
    dequantizeInShader (val) {
      this.primitive.dequantizeInShader = val
    }
  },
  methods: {
    createCesiumObject () {
      const { url, basePath, show, modelMatrix, scale, minimumPixelSize, maximumScale, id, allowPicking, incrementallyLoadTextures,
        asynchronous, clampAnimations, shadows, debugShowBoundingVolume, debugWireframe, heightReference, scene, distanceDisplayCondition, color,
        colorBlendMode, colorBlendAmount, silhouetteColor, silhouetteSize, clippingPlanes, dequantizeInShader } = this
      let options = {
        url,
        basePath,
        show,
        modelMatrix,
        scale,
        minimumPixelSize,
        maximumScale,
        id,
        allowPicking,
        incrementallyLoadTextures,
        asynchronous,
        clampAnimations,
        shadows,
        debugShowBoundingVolume,
        debugWireframe,
        heightReference,
        scene,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
        color: makeColor(color),
        colorBlendMode,
        colorBlendAmount,
        silhouetteColor: makeColor(silhouetteColor),
        silhouetteSize,
        clippingPlanes,
        dequantizeInShader
      }
      this.removeNullItem(options)
      return Cesium.Model.fromGltf(options)
    }
  }
}
</script>
