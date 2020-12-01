# 鹰眼

`vc-map-overview` 组件用于加载鹰眼部件。**注意：** 使用此组件需要引入 `import 'vue-cesium/lib/vc-map-overview.css'`。此组件默认没有引入，需要单独引入。

```js
import { VueCesium, VcOverviewMap } from 'vue-cesium'
Vue.use(VueCesium, options)
Vue.use(VcOverviewMap)
import 'vue-cesium/lib/vc-map-overview.css'
```
## 示例

### 加载鹰眼部件

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer :timeline="timeline" @ready="ready">
        <vc-map-overview></vc-map-overview>
        <vc-layer-imagery>
          <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          timeline: true,
          flag: true
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer :timeline="timeline" @ready="ready">
      <vc-map-overview></vc-map-overview>
      <vc-layer-imagery>
        <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        timeline: true
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| url | String | `'https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}'` | `optional` 指定鹰眼加载的地图 url。  |
| width | Number | `150` | `optional` 指定鹰眼控件宽度。 |
| height | Number | `150` | `optional` 指定鹰眼控件高度。 |
| anchor | String | `'bottomright'` | `optional` 指定鹰眼位置。 `topleft`、`topright`、`bottomleft`、`bottomright` |
| aimingRectOptions | Object | `{ color: '#ff1100', weight: 3 }` | `optional` 指定鹰眼表示当前地图范围矩形参数。 |
| shadowRectOptions | Object | `{ color: '#0000AA', weight: 1, opacity: 0, fillOpacity: 0 }` | `optional` 指定鹰眼地图蒙版参数。 |
| toggleDisplay | Boolean | `true` | `optional` 指定鹰眼收缩按钮是否可见。 |

---

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
