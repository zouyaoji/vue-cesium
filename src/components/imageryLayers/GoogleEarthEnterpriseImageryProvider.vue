<script>
import {
  url,
  ellipsoid,
  tileDiscardPolicy,
  credit
} from '../../mixins/entity/allProps'
import imageryProviderMixin from '../../mixins/imageryProvider/imageryProviderMixin'
export default {
  name: 'vc-imagery-provider-googleearthenterprise',
  mixins: [
    url,
    ellipsoid,
    tileDiscardPolicy,
    credit,
    imageryProviderMixin
  ],
  props: {
    metadata: Object
  },
  methods: {
    createCesiumObject () {
      return new Cesium.GoogleEarthEnterpriseImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { url, metadata, ellipsoid, tileDiscardPolicy, credit } = this
      let options = {
        url,
        metadata,
        ellipsoid,
        tileDiscardPolicy,
        credit
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
