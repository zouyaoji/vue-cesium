<script>
import { differenceBy } from 'lodash'
import { blendOption, modelMatrix, debugShowBoundingVolume } from '../../../mixins/mixinProps'
import mixinPrimitiveCollection from '../../../mixins/primitives/mixinPrimitiveCollection'

export default {
  name: 'vc-collection-primitive-point',
  mixins: [blendOption, modelMatrix, debugShowBoundingVolume, mixinPrimitiveCollection],
  props: {
    points: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    labels: {
      /**
       * https://cn.vuejs.org/v2/guide/reactivity.html#检测变化的注意事项
       */
      handler: function (newVal, oldVal) {
        if (!this.mounted) {
          return
        }
        const { transformProp, transformProps, collection: pointColletion } = this
        if (newVal === oldVal) {
          if (newVal.length === pointColletion._points.length) {
            // 认为是修改了某个对象
            for (let i = 0; i < newVal.length; i++) {
              const options = newVal[i]
              Object.keys(options).forEach(prop => {
                pointColletion._points[i][prop] = transformProp(prop, options[prop])
              })
            }
          } else if (newVal.length > pointColletion._points.length) {
            // 认为是插入了新对象 push unshift splice
            const addedPoints = differenceBy(newVal, pointColletion._points, 'id')
            if (addedPoints.length === 0) {
              // warn 请使用唯一 id
            }
            for (let i = 0; i < addedPoints.length; i++) {
              const point = addedPoints[i]
              point.id = point.id || Cesium.createGuid()
              const pointTransform = transformProps(point)
              const pointAdded = pointColletion.add(pointTransform)
              pointAdded.vcIndex = newVal.indexOf(point)
            }
          } else if (newVal.length < pointColletion._points.length) {
            // 认为是删除了对象 pop splice shift
            const deletedPoints = differenceBy(pointColletion._points, newVal, 'id')
            for (let i = 0; i < deletedPoints.length; i++) {
              const point = deletedPoints[i]
              pointColletion.remove(point)
            }
            let iNull = 0
            for (let i = 0; i < pointColletion._points.length; i++) {
              if (pointColletion._points[i]) {
                pointColletion._points[i].vcIndex = i - iNull
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
     *  重写 createCesiumObject 方法，支持用数组加载大量 point。
     */
    async createCesiumObject () {
      const { $props, transformProps, points } = this
      const options = transformProps($props)
      const pointColletion = new Cesium.PointPrimitiveCollection(options)

      for (let i = 0; i < points.length; i++) {
        const pointOptions = points[i]
        pointOptions.id = Cesium.defined(pointOptions.id) ? pointOptions.id : Cesium.createGuid()
        const pointOptionsTransform = transformProps(pointOptions)
        const point = pointColletion.add(pointOptionsTransform)
        point.vcIndex = i
      }

      return pointColletion
    }
  }
}
</script>
