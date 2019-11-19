<script>
import { scene, blendOption } from '../../../mixins/mixinProps'
import mixinPrimitiveCollection from '../../../mixins/primitives/mixinPrimitiveCollection'
export default {
  name: 'vc-collection-primitive-billboard',
  mixins: [scene, blendOption, mixinPrimitiveCollection],
  props: {
    billboards: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    /**
     *  重写 createCesiumObject 方法，支持用数组加载大量 billboard。
     */
    async createCesiumObject () {
      const { $props, transformProps, billboards } = this
      const options = transformProps($props)
      const billboardColletion = new Cesium.BillboardCollection(options)

      billboards.forEach(billboard => {
        const billboardOptions = transformProps(billboard)
        billboardColletion.add(billboardOptions)
      })
      return billboardColletion
    }
  }
}
</script>
