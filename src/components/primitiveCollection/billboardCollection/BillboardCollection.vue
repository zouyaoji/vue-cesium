<script>
import { differenceBy } from 'lodash'
import { scene, blendOption } from '../../../mixins/mixinProps'
import mixinPrimitiveCollection from '../../../mixins/primitives/mixinPrimitiveCollection'

export default {
  name: 'vc-collection-primitive-billboard',
  mixins: [scene, blendOption, mixinPrimitiveCollection],
  props: {
    billboards: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    billboards: {
      /**
       * https://cn.vuejs.org/v2/guide/reactivity.html#检测变化的注意事项
       */
      handler: function (newVal, oldVal) {
        if (!this.mounted) {
          return
        }
        const { transformProp, transformProps, collection: billboardCollection } = this
        if (newVal === oldVal) {
          // 插入新布告板 billboards.push()，修改布告板属性 billboards[i].xxx，或者 vm.$set(vm.billboards, indexOfBillboard, newValue)
          if (newVal.length === billboardCollection._billboards.length) {
            // 认为是修改了某个对象
            for (let i = 0; i < newVal.length; i++) {
              const options = newVal[i]
              Object.keys(options).forEach(prop => {
                billboardCollection._billboards[i][prop] = transformProp(prop, options[prop])
              })
            }
          } else if (newVal.length > billboardCollection._billboards.length) {
            // 认为是插入了新对象 push unshift splice
            const addedBillboards = differenceBy(newVal, billboardCollection._billboards, 'id')
            if (addedBillboards.length === 0) {
              // warn 请使用唯一 id
            }
            for (let i = 0; i < addedBillboards.length; i++) {
              const billboard = addedBillboards[i]
              billboard.id = billboard.id || Cesium.createGuid()
              const billboardTransform = transformProps(billboard)
              const billboardAdded = billboardCollection.add(billboardTransform)
              billboardAdded.vcIndex = newVal.indexOf(billboard)
            }
          } else if (newVal.length < billboardCollection._billboards.length) {
            // 认为是删除了对象 pop splice shift
            const deletedBillboards = differenceBy(billboardCollection._billboards, newVal, 'id')
            for (let i = 0; i < deletedBillboards.length; i++) {
              const billboard = deletedBillboards[i]
              billboardCollection.remove(billboard)
            }
            let iNull = 0
            for (let i = 0; i < billboardCollection._billboards.length; i++) {
              if (billboardCollection._billboards[i]) {
                billboardCollection._billboards[i].vcIndex = i - iNull
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
     *  重写 createCesiumObject 方法，支持用数组加载大量 billboard。
     */
    async createCesiumObject () {
      const { $props, transformProps, billboards } = this
      const options = transformProps($props)
      const billboardCollection = new Cesium.BillboardCollection(options)

      for (let i = 0; i < billboards.length; i++) {
        const billboardOptions = billboards[i]
        billboardOptions.id = Cesium.defined(billboardOptions.id) ? billboardOptions.id : Cesium.createGuid()
        const billboardOptionsTransform = transformProps(billboardOptions)
        const billboard = billboardCollection.add(billboardOptionsTransform)
        billboard.vcIndex = i
      }
      return billboardCollection
    }
  }
}
</script>
