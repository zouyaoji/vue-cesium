<script>
import { blendOption, modelMatrix, debugShowBoundingVolume } from '../../mixins/entity/allProps'
import primitiveMixin from '../../mixins/primitive/primitiveMixin'
import { makePointOptions } from '../../util/util'
export default {
  props: {
    points: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    points () {
      this.reload()
    }
  },
  name: 'point-collection',
  mixins: [blendOption, modelMatrix, debugShowBoundingVolume, primitiveMixin],
  methods: {
    createCesiumObject () {
      const { modelMatrix, debugShowBoundingVolume, blendOption } = this
      let options = {
        modelMatrix,
        debugShowBoundingVolume,
        blendOption
      }
      this.removeNullItem(options)
      let pointCollection = new Cesium.PointPrimitiveCollection(options)
      this.points.forEach(point => {
        let pointOptions = makePointOptions(point)
        this.removeNullItem(pointOptions)
        pointCollection.add(pointOptions)
      })
      return pointCollection
    }
  }
}
</script>
