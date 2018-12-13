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
    material: {
      type: Object
    },
    positions: {
      type: Array
    },
    id: {
      type: Object
    },
    distanceDisplayCondition: {
      type: Number
    }
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
        show: show,
        width: width,
        loop: loop,
        material: material,
        positions: positions,
        id: id,
        distanceDisplayCondition: distanceDisplayCondition
      }
      return primitiveCollection.add(polyline)
    }
  }
}
</script>
