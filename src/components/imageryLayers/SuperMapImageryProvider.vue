<script>
import {
  url,
  minimumLevel,
  maximumLevel
} from '../../mixins/entity/allProps'
import imageryProviderMixin from '../../mixins/imageryProvider/imageryProviderMixin'
export default {
  name: 'supermap-imagery-provider',
  mixins: [
    url,
    minimumLevel,
    maximumLevel,
    imageryProviderMixin
  ],
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
