<script>
import {
  modelMatrix,
  id,
  aaMixin,
  debugShowBoundingVolume,
  scene,
  debugWireframe
} from '../../../mixins/mixinProps'
import mixinModel from '../../../mixins/graphics/mixinModel'
import mixinPrimitive from '../../../mixins/primitives/mixinPrimitive'
export default {
  name: 'vc-primitive-model',
  mixins: [
    modelMatrix,
    id,
    aaMixin,
    debugShowBoundingVolume,
    scene,
    debugWireframe,
    mixinModel,
    mixinPrimitive
  ],
  props: {
    url: String,
    basePath: String,
    dequantizeInShader: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    /**
     *  重写 createCesiumObject 方法
     */
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      return Cesium.Model.fromGltf(options)
    }
  }
}
</script>
