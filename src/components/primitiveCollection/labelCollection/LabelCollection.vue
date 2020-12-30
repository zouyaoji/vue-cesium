<script>
import { differenceBy } from 'lodash'
import { scene, blendOption } from '../../../mixins/mixinProps'
import mixinPrimitiveCollection from '../../../mixins/primitives/mixinPrimitiveCollection'

export default {
  name: 'vc-collection-primitive-label',
  mixins: [scene, blendOption, mixinPrimitiveCollection],
  props: {
    labels: {
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
        const { transformProp, transformProps, collection: labelCollection } = this
        if (newVal === oldVal) {
          if (newVal.length === labelCollection._labels.length) {
            // 认为是修改了某个对象
            for (let i = 0; i < newVal.length; i++) {
              const options = newVal[i]
              Object.keys(options).forEach(prop => {
                labelCollection._labels[i][prop] = transformProp(prop, options[prop])
              })
            }
          } else if (newVal.length > labelCollection._labels.length) {
            // 认为是插入了新对象 push unshift splice
            const addedLabels = differenceBy(newVal, labelCollection._labels, 'id')
            if (addedLabels.length === 0) {
              // warn 请使用唯一 id
            }
            for (let i = 0; i < addedLabels.length; i++) {
              const label = addedLabels[i]
              label.id = label.id || Cesium.createGuid()
              const labelTransform = transformProps(label)
              const labelAdded = labelCollection.add(labelTransform)
              labelAdded.vcIndex = newVal.indexOf(label)
            }
          } else if (newVal.length < labelCollection._labels.length) {
            // 认为是删除了对象 pop splice shift
            const deletedLabels = differenceBy(labelCollection._labels, newVal, 'id')
            for (let i = 0; i < deletedLabels.length; i++) {
              const label = deletedLabels[i]
              labelCollection.remove(label)
            }
            let iNull = 0
            for (let i = 0; i < labelCollection._labels.length; i++) {
              if (labelCollection._labels[i]) {
                labelCollection._labels[i].vcIndex = i - iNull
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
     *  重写 createCesiumObject 方法，支持用数组加载大量 label。
     */
    async createCesiumObject () {
      const { $props, transformProps, labels } = this
      const options = transformProps($props)
      const labelColletion = new Cesium.LabelCollection(options)

      for (let i = 0; i < labels.length; i++) {
        const labelOptions = labels[i]
        labelOptions.id = Cesium.defined(labelOptions.id) ? labelOptions.id : Cesium.createGuid()
        const labelOptionsTransform = transformProps(labelOptions)
        const laebl = labelColletion.add(labelOptionsTransform)
        laebl.vcIndex = i
      }
      return labelColletion
    }
  }
}
</script>
