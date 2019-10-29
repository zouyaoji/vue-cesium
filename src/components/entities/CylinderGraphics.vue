<script>
import {
  show,
  distanceDisplayCondition,
  heightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  numberOfVerticalLines,
  shadows
} from '../../mixins/entity/allProps'
import cylinderMixin from '../../mixins/entity/cylinderMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
export default {
  name: 'vc-graphics-cylinder',
  mixins: [
    show,
    distanceDisplayCondition,
    heightReference,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    numberOfVerticalLines,
    shadows,
    cylinderMixin,
    graphicsMixin
  ],
  methods: {
    async createCesiumObject () {
      const { specialWatchers, $props } = this
      const specialWatcherKeys = Object.keys(this.specialWatchers)
      const options = {}
      Object.keys($props).forEach((prop) => {
        options[prop] = specialWatcherKeys.indexOf(prop) !== -1 ? specialWatchers[prop].handler.call(this, this[prop]) : this[prop]
      })
      this.removeNullItem(options)
      return new Cesium.CylinderGraphics(options)
    }
  },
  created () {
    this.cesiumClass = 'CylinderGraphics'
  }
}
</script>
