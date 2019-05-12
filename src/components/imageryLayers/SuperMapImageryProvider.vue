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
  computed: {
    changeProps () {
      const { url, name, minimumLevel, maximumLevel, credit } = this
      return {
        url, name, minimumLevel, maximumLevel, credit
      }
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, url, name, minimumLevel, maximumLevel, credit } = this
      if (!Cesium.defined(Cesium.SuperMapImageryProvider)) {
        throw new Cesium.DeveloperError('Your Cesium Package is not included SuperMapImageryProvider!')
      }
      let options = {
        url,
        name,
        minimumLevel,
        maximumLevel,
        credit
      }
      this.removeNullItem(options)
      return new Cesium.SuperMapImageryProvider(options)
    }
  }
}
</script>
