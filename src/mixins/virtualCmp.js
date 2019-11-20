import common from './common'
import stubVNode from './stubVNode'
/**
 * VueCesium 的基础虚拟组件，mixin 注入需要实现以下方法。
 */
export default {
  mixins: [stubVNode, common],
  methods: {
    /**
     * 获取注入对象。
     * @returns {Object}
     */
    getServices () {
      return common.methods.getServices.call(this)
    },
    /**
     * 加载组件。
     * @returns {Promise}
     */
    load () {
      return common.methods.load.call(this)
    },
    /**
     * 重载组件。
     * @returns {Promise}
     */
    reload () {
      return common.methods.reload.call(this)
    },
    /**
     * 卸载组件。
     * @return {Promise}
     */
    unload () {
      return common.methods.unload.call(this)
    }
  }
}
