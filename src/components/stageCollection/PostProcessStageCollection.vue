<script>
import cmp from '../../mixins/virtualCmp'
import mergeDescriptors from '../../utils/mergeDescriptors'
export default {
  name: 'vc-collection-stage-process-post',
  mixins: [cmp],
  props: {
    stages: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    async createCesiumObject () {
      const { transformProps, stages } = this
      const postProcessStageCollection = new Cesium.PostProcessStageCollection()
      stages.forEach((stage) => {
        const stageOptions = transformProps(stage)
        postProcessStageCollection.add(new Cesium.PostProcessStage(stageOptions))
      })
      return postProcessStageCollection
    },
    async mount () {
      const { postProcessStages, viewer } = this
      viewer.scene.postProcessStages = postProcessStages
      return true
    },
    async unmount () {
      const { postProcessStages } = this
      postProcessStages.destroy()
      return true
    },
    getServices () {
      const vm = this
      return mergeDescriptors(cmp.methods.getServices.call(this), {
        get postProcessStages () {
          return vm.postProcessStages
        },
        get postProcessStagesContainer () {
          return vm
        }
      })
    }
  },
  created () {
    Object.defineProperties(this, {
      postProcessStages: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  },
  stubVNode: {
    attrs () {
      return {
        class: this.$options.name
      }
    }
  }
}
</script>
