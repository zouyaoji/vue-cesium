<script>
import commonMixin from '../../mixins/common.js'
export default {
  name: 'polyline-primitive',
  render (h) {},
  mixins: [commonMixin('polyline-primitive')],
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
      this.originInstance.val = val
    },
    width (val) {
      this.originInstance.width = val
    },
    loop (val) {
      this.originInstance.loop = val
    },
    material (val) {
      this.originInstance.material = val
    },
    positions (val) {
      this.originInstance.positions = val
    },
    id (val) {
      this.originInstance.id = val
    },
    distanceDisplayCondition (val) {
      this.originInstance.distanceDisplayCondition = val
    }
  },
  methods: {
    load () {
      const { show, width, loop, material, positions, id, distanceDisplayCondition } = this
      let polyline = {
        show: show,
        width: width,
        loop: loop,
        material: material,
        positions: positions,
        id: id,
        distanceDisplayCondition: distanceDisplayCondition
      }
      this.originInstance = this.$parent.originInstance.add(polyline)
    }
  }
}
</script>
