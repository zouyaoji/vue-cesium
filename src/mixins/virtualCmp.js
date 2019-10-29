import common from './common'
import stubVNode from './stubVNode'
export default {
  mixins: [stubVNode, common],
  methods: {
    /**
     * @return {Promise}
     * @protected
     */
    load () {
      return common.methods.load.call(this)
    },
    /**
     * Redefine for easy call in child components
     * @returns {Object}
     * @protected
     */
    getServices () {
      return common.methods.getServices.call(this)
    },
    /**
     * Refresh internal ol objects
     * @return {Promise}
     */
    reload () {
      return common.methods.reload.call(this)
    },
    unload () {
      return common.methods.unload.call(this)
    }
  }
}
