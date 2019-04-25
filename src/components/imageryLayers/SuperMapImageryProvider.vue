<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'supermap-imagery-provider',
  mixins: [imageryProvider],
  props: {
    url: String,
    name: String,
    minimumLevel: {
      type: Number,
      default: 0
    },
    maximumLevel: {
      type: Number,
      default: 20
    },
    credit: {
      type: String,
      default: 'MapQuest, SuperMap iServer Imagery'
    }
  },
  watch: {
    url (val) {
      this.reload()
    },
    name (val) {
      this.originInstance.imageryProvider.name = val
    },
    minimumLevel (val) {
      this.reload()
    },
    maximumLevel (val) {
      this.reload()
    },
    credit (val) {
      this.reload()
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, url, name, minimumLevel, maximumLevel, credit } = this
      if (!Cesium.defined(Cesium.SuperMapImageryProvider)) {
        throw new Cesium.DeveloperError('Youer Cesium Package is not included SuperMapImageryProvider!')
      }
      let options = {
        url,
        name,
        minimumLevel,
        maximumLevel,
        credit
      }
      this.removeNullItem(options)
      let imageryProvider = new Cesium.SuperMapImageryProvider(options)
      return imageryProvider
    }
  }
}
</script>
