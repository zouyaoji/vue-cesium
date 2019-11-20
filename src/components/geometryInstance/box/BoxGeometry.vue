<script>
import { dimensions, vertexFormat } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-box',
  mixins: [dimensions, vertexFormat, mixinGeometry],
  methods: {
    /**
     *  重写 createCesiumObject 方法。
     */
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      return Cesium.BoxGeometry.fromDimensions(options)
    }
  }
}
</script>
