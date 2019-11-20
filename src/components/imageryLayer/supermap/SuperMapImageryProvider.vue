<script>
import { url, minimumLevel, maximumLevel } from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-supermap',
  mixins: [url, minimumLevel, maximumLevel, mixinImageryProvider],
  props: {
    name: String,
    transparent: {
      type: Boolean,
      default: true
    },
    credit: {
      type: String,
      default: 'MapQuest, SuperMap iServer Imagery'
    }
  },
  methods: {
    createCesiumObject () {
      if (!Cesium.defined(Cesium.SuperMapImageryProvider)) {
        throw new Cesium.DeveloperError('Your Cesium Package is not included SuperMapImageryProvider!')
      }
      return new Cesium.SuperMapImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { url, name, minimumLevel, maximumLevel, transparent, credit } = this
      let options = {
        url,
        name,
        minimumLevel,
        maximumLevel,
        transparent,
        credit
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
