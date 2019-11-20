<script>
import { blendOption, modelMatrix, debugShowBoundingVolume } from '../../../mixins/mixinProps'
import mixinPrimitiveCollection from '../../../mixins/primitives/mixinPrimitiveCollection'
export default {
  name: 'vc-collection-primitive-point',
  mixins: [blendOption, modelMatrix, debugShowBoundingVolume, mixinPrimitiveCollection],
  props: {
    points: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    /**
     *  重写 createCesiumObject 方法，支持用数组加载大量 point。
     */
    async createCesiumObject () {
      const { $props, transformProps, points } = this
      const options = transformProps($props)
      const pointColletion = new Cesium.PointPrimitiveCollection(options)

      points.forEach(point => {
        const pointOptions = transformProps(point)
        pointColletion.add(pointOptions)
      })
      return pointColletion
    }
  }
}
</script>
