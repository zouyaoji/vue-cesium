<script>
import bindEvents from '../base/bindEvent'
import { Events } from '../base/events.js'
import commonMixin from '../base/mixins/common.js'
export default {
  name: 'polyline-entity',
  render (h) {},
  mixins: [commonMixin('entities')],
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    availability: {
      type: Object
    },
    description: {
      type: String
    },
    position: {
      type: Object
    },
    orientation: {
      type: Object
    },
    viewFrom: {
      type: Object
    },
    parent: {
      type: Object
    },
    positions: {
      type: Array
    },
    followSurface: {
      type: Boolean,
      default: true
    },
    clampToGround: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 1.0
    },
    show: {
      type: Boolean,
      default: true
    },
    material: {
      type: Object
    },
    depthFailMaterial: {
      type: Object
    },
    granularity: {
      type: Number
    },
    shadows: {
      type: Number
    },
    distanceDisplayCondition: {
      type: Number
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    id () {
      this.reload()
    },
    name (val) {
      this.originInstance.name = val
    },
    availability () {
      this.reload()
    },
    description (val) {
      this.originInstance.description = val
    },
    position (val) {
      this.originInstance.position = val
    },
    orientation (val) {
      this.originInstance.orientation = val
    },
    viewFrom (val) {
      this.originInstance.viewFrom = val
    },
    parent () {
      this.reload()
    },
    positions () {
    },
    followSurface (val) {
      this.originInstance.polyline.followSurface = val
    },
    clampToGround (val) {
      this.originInstance.polyline.clampToGround = val
    },
    width (val) {
      this.originInstance.polyline.width = val
    },
    show (val) {
      this.originInstance.polyline.show = val
    },
    material (val) {
      this.originInstance.polyline.material = val
    },
    depthFailMaterial (val) {
      this.originInstance.polyline.depthFailMaterial = val
    },
    granularity (val) {
      this.originInstance.polyline.granularity = val
    },
    shadows (val) {
      this.originInstance.polyline.shadows = val
    },
    distanceDisplayCondition (val) {
      this.originInstance.polyline.distanceDisplayCondition = val
    },
    zIndex (val) {
      this.originInstance.polyline.zIndex = val
    }
  },
  methods: {
    load () {
      const { Cesium, viewer, id, name, availability, description, position, orientation, viewFrom, parent, positions, followSurface,
        clampToGround, width, show, material, depthFailMaterial, granularity, shadows, distanceDisplayCondition, zIndex } = this
      let polyline = {
        positions: positions,
        followSurface: followSurface,
        clampToGround: clampToGround,
        width: width,
        show: show,
        material: material,
        depthFailMaterial: depthFailMaterial,
        granularity: granularity,
        shadows: shadows,
        distanceDisplayCondition: distanceDisplayCondition,
        zIndex: zIndex
      }
      polyline.positions = new Cesium.CallbackProperty(() => this.positions, false)
      this.originInstance = viewer.entities.add({
        id: id,
        name: name,
        availability: availability,
        show: show,
        description: description,
        position: position,
        orientation: orientation,
        viewFrom: viewFrom,
        parent: parent,
        polyline: polyline
      })

      bindEvents.call(this, this.originInstance, Events['entity-events'])
    }
  }
}
</script>
