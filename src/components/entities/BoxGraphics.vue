<script>
import {
  heightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows
} from '../../mixins/entity/allProps'
import boxMixin from '../../mixins/entity/boxMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'

export default {
  name: 'vc-graphics-box',
  mixins: [
    heightReference,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    shadows,
    boxMixin,
    graphicsMixin ],
  methods: {
    async createCesiumObject () {
      const { specialWatchers, $props } = this
      const specialWatcherKeys = Object.keys(this.specialWatchers)
      const options = {}
      Object.keys($props).forEach((prop) => {
        options[prop] = specialWatcherKeys.indexOf(prop) !== -1 ? specialWatchers[prop].handler.call(this, this[prop]) : this[prop]
      })
      this.removeNullItem(options)
      return new Cesium.BoxGraphics(options)
    }
  },
  created () {
    this.cesiumClass = 'BoxGraphics'
  }
}
</script>
