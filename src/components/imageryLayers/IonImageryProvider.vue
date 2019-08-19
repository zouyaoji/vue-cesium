<script>
import {
  accessToken
} from '../../mixins/entity/allProps'
import imageryProviderMixin from '../../mixins/imageryProvider/imageryProviderMixin'
export default {
  name: 'ion-imagery-provider',
  mixins: [
    accessToken,
    imageryProviderMixin
  ],
  props: {
    assetId: Number,
    server: String | Object
  },
  methods: {
    createCesiumObject () {
      return new Cesium.IonImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { assetId, accessToken, server } = this
      let options = {
        assetId,
        accessToken,
        server
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
