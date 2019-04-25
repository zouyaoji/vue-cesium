<script>
import primitiveCollectionItem from '../../mixins/primitiveCollectionItem'
export default {
  name: 'polyline-primitive',
  mixins: [primitiveCollectionItem],
  props: {
    show: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 1.0
    },
    loop: {
      type: Boolean,
      default: false
    },
    material: Object,
    positions: Array,
    id: Object,
    distanceDisplayCondition: Object
  },
  watch: {
    show (val) {
      this.primitive.val = val
    },
    width (val) {
      this.primitive.width = val
    },
    loop (val) {
      this.primitive.loop = val
    },
    material (val) {
      this.primitive.material = val
    },
    positions (val) {
      this.primitive.positions = val
    },
    id (val) {
      this.primitive.id = val
    },
    distanceDisplayCondition (val) {
      this.primitive.distanceDisplayCondition = val
    }
  },
  methods: {
    createCesiumObject () {
      const { primitiveCollection, show, width, loop, material, positions, id, distanceDisplayCondition } = this
      let polyline = {
        show,
        width,
        loop,
        material,
        positions,
        id,
        distanceDisplayCondition
      }
      this.removeNullItem(polyline)
      return primitiveCollection.add(polyline)
    }
  }
}
</script>
