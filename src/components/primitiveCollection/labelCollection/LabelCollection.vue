<script>
import { scene, blendOption } from '../../../mixins/mixinProps'
import mixinPrimitiveCollection from '../../../mixins/primitives/mixinPrimitiveCollection'
export default {
  name: 'vc-collection-primitive-label',
  mixins: [scene, blendOption, mixinPrimitiveCollection],
  props: {
    labels: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    /**
     *  重写 createCesiumObject 方法，支持用数组加载大量 label。
     */
    async createCesiumObject () {
      const { $props, transformProps, labels } = this
      const options = transformProps($props)
      const labelColletion = new Cesium.LabelCollection(options)

      labels.forEach(laebl => {
        const laeblOptions = transformProps(laebl)
        labelColletion.add(laeblOptions)
      })
      return labelColletion
    }
  }
}
</script>
