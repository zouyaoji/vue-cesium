<script>
import bindEvents from '../base/bindEvent'
import { Events } from '../base/events.js'
import commonMixin from '../base/mixins/common.js'
export default {
  name: 'polyline-graphics',
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
    },
    name () {
    },
    availability () {
    },
    description () {
    },
    position () {
    },
    orientation () {
    },
    viewFrom () {
    },
    parent () {
    },
    positions () {
    },
    followSurface () {
    },
    clampToGround () {
    },
    width () {
    },
    show () {
    },
    material () {
    },
    depthFailMaterial () {
    },
    granularity () {
    },
    shadows () {
    },
    distanceDisplayCondition () {
    },
    zIndex () {
    }
  },
  methods: {
    load () {
      const { Cesium, viewer, id, name, availability, positions, description, position, orientation, viewFrom, parent, followSurface,
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

<style>
</style>