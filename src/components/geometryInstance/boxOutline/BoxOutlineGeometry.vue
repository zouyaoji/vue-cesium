<script>
import { dimensions } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-box',
  mixins: [dimensions, mixinGeometry],
  methods: {
    /**
     *  重写 createCesiumObject 方法。
     */
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      return Cesium.BoxOutlineGeometry.fromDimensions(options)
    }
  }
}
</script>
