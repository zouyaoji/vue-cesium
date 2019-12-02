<script>
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
import TiandituImageryProvider from '../../../libs/tianditu/TiandituImageryProvider'
export default {
  name: 'vc-provider-imagery-tianditu',
  mixins: [mixinImageryProvider],
  props: {
    mapStyle: String,
    token: String
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps, setPropWatchers, unwatchFns } = this
      const options = transformProps($props)
      Cesium.TiandituImageryProvider = Cesium.TiandituImageryProvider || TiandituImageryProvider
      // 之前注册时 TiandituImageryProvider 可能还不存在，导致注册失败，这儿需要再注册 Vue 侦听器。
      // 这种情况下会导致在`vc-viewer`组件的ready事件中对 'vc-provider-imagery-tianditu' 属性赋值失败。
      // 原因是 `vc-viewer` 组件ready事件触发时，'vc-provider-imagery-tianditu'侦听器还没被创建呢。
      if (unwatchFns.length === 0) { setPropWatchers(true) }
      return new Cesium.TiandituImageryProvider(options)
    }
  }
}
</script>
