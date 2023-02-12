## Mars3D Demo

vue-cesium 使用火星科技的 [Mars3D](http://mars3d.cn/) 开发时只需要在引入 VueCesium 时通过配置项 `mars3dConfig` 配置 mars3d 主库和其插件库地址，默认使用 unpkg.com 的 cdn 资源，如需本地或局域网使用，请通过 mars3dConfig.libs 将相关库的资源改为本地或局域网地址即可。非 TS 项目结构请 [参考](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/viewer/src/loadUtil.ts#L17)。

```typescript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(VueCesium, {
  // 要引入的资源库,可选。不指定的话只加载 mars3d 必要资源
  mars3dConfig: {
    include: 'mars3d'
  }
} as ConfigProviderContext)
app.mount('#app')
```

或者在 `vc-viewer` 组件上配置 `mars3dConfig` 。

`vc-viewer` 加载成功会返回 { Cesium, viewer, map }, 通过该 `map` 使用 [mars3d 教程](http://mars3d.cn/doc.html) 和 [mars3d API](http://mars3d.cn/api/) 进行相关开发即可， 如下面的例子：

### 基础用法

使用 VueCesium 加载火星科技 Mars3D

:::demo 通过 `vc-viewer` 的 `mars3dConfig` 属性指定使用 Mars3D

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer
    ref="vcViewer"
    :mars3d-config="viewerOpts.mars3dConfig"
    :animation="animation"
    :timeline="timeline"
    :fullscreenButton="fullscreenButton"
    :fullscreen-element="fullscreenElement"
    @ready="onViewerReady"
    @left-click="onLeftClick"
  >
    <vc-navigation :offset="offset" @compass-evt="onNavigationEvt" :otherOpts="otherOpts" @zoom-evt="onNavigationEvt"></vc-navigation>
    <vc-entity v-model:billboard="billboard" ref="entity" @click="onEntityClick" :position="{lng: 108, lat: 32}" :point="point" :label="label">
      <vc-graphics-billboard ref="billboard" image="https://zouyaoji.top/vue-cesium/favicon.png"></vc-graphics-billboard>
      <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
    </vc-entity>
    <!-- 天地图注记 -->
    <vc-layer-imagery :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <!-- 天地图影像 -->
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-overview-map ref="overview" :viewerOpts="viewerOpts" :offset="[5, 120]" position="bottom-left">
      <!-- 天地图注记 -->
      <vc-layer-imagery :sort-order="20">
        <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
      </vc-layer-imagery>
      <!-- 天地图影像 -->
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
      </vc-layer-imagery>
    </vc-overview-map>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">销毁</el-button>
      <el-button type="danger" round @click="load">加载</el-button>
      <el-button type="danger" round @click="reload">重载</el-button>
    </el-row>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        animation: true,
        timeline: true,
        fullscreenButton: true,
        fullscreenElement: document.body,
        point: {
          pixelSize: 28,
          color: 'red'
        },
        label: {
          text: 'Hello World',
          pixelOffset: [0, 150]
        },
        billboard: {},
        offset: [10, 25],
        otherOpts: {
          offset: [0, 32],
          position: 'bottom-right'
        },
        viewerOpts: {
          mars3dConfig: {
            include: 'mars3d'
          }
        }
      }
    },
    mounted() {
      this.$refs.vcViewer.creatingPromise.then(({ Cesium, viewer }) => {
        console.log('viewer is loaded.')
      })
    },
    methods: {
      onViewerReady({ Cesium, viewer, map }) {
        console.log(map)
      },
      onNavigationEvt(e) {
        console.log(e)
      },
      onEntityClick(e) {
        console.log(e)
      },
      onLeftClick(e) {
        console.log(e)
      },
      load() {
        this.$refs.vcViewer.load().then(e => {
          console.log(e)
        })
      },
      unload() {
        this.$refs.vcViewer.unload().then(e => {
          console.log(e)
        })
      },
      reload() {
        this.$refs.vcViewer.reload().then(e => {
          console.log(e)
        })
      }
    }
  }
</script>
```

:::

### 参考

- Mars3D 平台官网： **[http://mars3d.cn](http://mars3d.cn/example.html)**
