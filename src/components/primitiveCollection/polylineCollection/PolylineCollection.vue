<script>
import { differenceBy } from 'lodash-es'
import { modelMatrix, debugShowBoundingVolume } from '../../../mixins/mixinProps'
import mixinPrimitiveCollection from '../../../mixins/primitives/mixinPrimitiveCollection'

export default {
  name: 'vc-collection-primitive-polyline',
  mixins: [modelMatrix, debugShowBoundingVolume, mixinPrimitiveCollection],
  props: {
    polylines: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    polylines: {
      /**
       * https://cn.vuejs.org/v2/guide/reactivity.html#检测变化的注意事项
       */
      handler: function (newVal, oldVal) {
        if (!this.mounted) {
          return
        }
        const { transformProp, transformProps, collection: polylineCollection } = this
        if (newVal === oldVal) {
          if (newVal.length === polylineCollection._polylines.length) {
            // 认为是修改了某个对象
            for (let i = 0; i < newVal.length; i++) {
              const options = newVal[i]
              Object.keys(options).forEach(prop => {
                polylineCollection._polylines[i][prop] = transformProp(prop, options[prop])
              })
            }
          } else if (newVal.length > polylineCollection._polylines.length) {
            // 认为是插入了新对象 push unshift splice
            const addedPolylines = differenceBy(newVal, polylineCollection._polylines, 'id')
            if (addedPolylines.length === 0) {
              // warn 请使用唯一 id
            }
            for (let i = 0; i < addedPolylines.length; i++) {
              const polyline = addedPolylines[i]
              polyline.id = polyline.id || Cesium.createGuid()
              const polylineTransform = transformProps(polyline)
              const polylineAdded = polylineCollection.add(polylineTransform)
              polylineAdded.vcIndex = newVal.indexOf(polyline)
            }
          } else if (newVal.length < polylineCollection._polylines.length) {
            // 认为是删除了对象 pop splice shift
            const deletedPolylines = differenceBy(polylineCollection._polylines, newVal, 'id')
            for (let i = 0; i < deletedPolylines.length; i++) {
              const polyline = deletedPolylines[i]
              polylineCollection.remove(polyline)
            }
            let iNull = 0
            for (let i = 0; i < polylineCollection._polylines.length; i++) {
              if (polylineCollection._polylines[i]) {
                polylineCollection._polylines[i].vcIndex = i - iNull
              } else {
                iNull++
              }
            }
          }
        } else {
          // 认为是赋新值
          this.reload()
        }
      },
      deep: true
    }
  },
  methods: {
    /**
     *  重写 createCesiumObject 方法，支持用数组加载大量 polyline
     */
    async createCesiumObject () {
      const { $props, transformProps, polylines } = this
      const options = transformProps($props)
      const polylineCollection = new Cesium.PolylineCollection(options)

      for (let i = 0; i < polylines.length; i++) {
        const polylineOptions = polylines[i]
        polylineOptions.id = Cesium.defined(polylineOptions.id) ? polylineOptions.id : Cesium.createGuid()
        const polylineOptionsTransform = transformProps(polylineOptions)
        const polyline = polylineCollection.add(polylineOptionsTransform)
        for (const prop in polylineOptionsTransform) {
          if (!polyline[prop]) {
            polyline[prop] = polylineOptionsTransform[prop]
          }
        }
        polyline.vcIndex = i
      }

      return polylineCollection
    }
  }
}
</script>
