<script>
import {
  show, distanceDisplayCondition, heightReference, extrudedHeightReference, fill, material, outline, outlineColor,
  outlineWidth, shadows, classificationType, zIndex
} from '../../mixins/entity/allProps'
import corridorMixin from '../../mixins/entity/corridorMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
export default {
  name: 'vc-graphics-corridor',
  mixins: [corridorMixin, heightReference, extrudedHeightReference, fill, material, outline,
    outlineColor, outlineWidth, shadows, classificationType, zIndex, graphicsMixin, show, distanceDisplayCondition],
  methods: {
    async createCesiumObject () {
      const { specialWatchers, $props } = this
      const specialWatcherKeys = Object.keys(this.specialWatchers)
      const options = {}
      Object.keys($props).forEach((prop) => {
        options[prop] = specialWatcherKeys.indexOf(prop) !== -1 ? specialWatchers[prop].handler.call(this, this[prop]) : this[prop]
      })
      this.removeNullItem(options)
      return new Cesium.CorridorGraphics(options)
    }
  },
  created () {
    this.cesiumClass = 'CorridorGraphics'
  }
}
</script>
