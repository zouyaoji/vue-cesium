<script>
import { url, minimumLevel, maximumLevel } from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
import SuperMapImageryProvider from '../../../exts/imageryProvider/SuperMapImageryProvider'
export default {
  name: 'vc-provider-imagery-supermap',
  mixins: [url, minimumLevel, maximumLevel, mixinImageryProvider],
  props: {
    name: String,
    transparent: {
      type: Boolean,
      default: true
    },
    credit: {
      type: String,
      default: 'MapQuest, SuperMap iServer Imagery'
    }
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps, setPropWatchers, unwatchFns } = this
      const options = transformProps($props)
      Cesium.SuperMapImageryProvider = Cesium.SuperMapImageryProvider || SuperMapImageryProvider
      // 之前注册时 SuperMapImageryProvider 可能还不存在，导致注册失败，这儿需要再注册 Vue 侦听器。
      // 这种情况下会导致在`vc-viewer`组件的ready事件中对 'vc-provider-imagery-supermap' 属性赋值失败。
      // 原因是 `vc-viewer` 组件ready事件触发时，'vc-provider-imagery-supermap'侦听器还没被创建呢。
      if (unwatchFns.length === 0) { setPropWatchers(true) }
      return new Cesium.SuperMapImageryProvider(options)
    }
  }
}
</script>
