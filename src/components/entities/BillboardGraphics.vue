<script>
import billboardMixin from '../../mixins/entity/billboardMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'

export default {
  name: 'vc-graphics-billboard',
  mixins: [billboardMixin, graphicsMixin],
  props: {
    imageSubRegion: Object
  },
  methods: {
    async createCesiumObject () {
      const { specialWatchers, $props } = this
      const specialWatcherKeys = Object.keys(this.specialWatchers)
      const options = {}
      Object.keys($props).forEach((prop) => {
        options[prop] = specialWatcherKeys.indexOf(prop) !== -1 ? specialWatchers[prop].handler.call(this, this[prop]) : this[prop]
      })
      this.removeNullItem(options)
      return new Cesium.BillboardGraphics(options)
    }
  },
  created () {
    this.cesiumClass = 'BillboardGraphics'
  }
}
</script>
