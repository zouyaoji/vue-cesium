import { clearColor, scissorRectangle } from '@vue-cesium/utils/cesium-props'
import { PropType } from 'vue'

const defaultProps = {
  fragmentShader: String,
  uniforms: Object,
  textureScale: {
    type: Number,
    default: 1.0
  },
  forcePowerOfTwo: {
    type: Boolean,
    default: false
  },
  sampleMode: Number as PropType<Cesium.PostProcessStageSampleMode | number>,
  pixelFormat: Number as PropType<Cesium.PixelFormat>,
  pixelDatatype: Number as PropType<Cesium.PixelDatatype>,
  ...clearColor,
  ...scissorRectangle,
  name: String
}

export default defaultProps
