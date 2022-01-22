## VcOverlayHtml

按地理位置加载 HTML 元素覆盖物。

**注意：** 需要引入样式文件: `import 'vue-cesium/default/index.css';`

### 基础用法

HTML 覆盖物组件的基础用法。

:::demo 使用 `vc-overlay-html` 标签在三维球上添加 div 标签，并设置 CSS 动画。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-overlay-html ref="html" :position="[117.186419, 45.66446, 20]">
      <div class="vc-box">aa</div>
    </vc-overlay-html>
    <vc-entity :position="[117.186419, 45.66446, 20]">
      <vc-graphics-point color="red" :pixelSize="8"></vc-graphics-point>
    </vc-entity>
    <vc-overlay-html :position="{ lng: 104.04, lat: 30.40 }">
      <div class="label-container label-container-var">
        <div class="label-animate-marker_border">
          <span class="label-animate-marker_text">成都欢迎您</span>
        </div>
      </div>
    </vc-overlay-html>
    <vc-layer-imagery :sortOrder="20">
      <vc-imagery-provider-tianditu mapStyle="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :sortOrder="10">
      <vc-imagery-provider-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
  </el-row>
</el-row>

<script>
  export default {
    methods: {
      unload() {
        this.$refs.html.unload()
      },
      load() {
        this.$refs.html.load()
      },
      reload() {
        this.$refs.html.reload()
      }
    }
  }
</script>
```

:::

### 属性

| 属性名      | 类型          | 默认值 | 描述                                            |
| ----------- | ------------- | ------ | ----------------------------------------------- |
| show        | Boolean       | `true` | `optional` 指定 HTML 是否显示。                 |
| position    | Object\|Array |        | `optional` 指定 HTML 元素的地理位置。           |
| pixelOffset | Object\|Array |        | `optional` 指定 HTML 的像素偏移。               |
| autoHidden  | Boolean       | `true` | `optional` 指定 HTML 在地球背面时是否自动隐藏。 |
| customClass | String        |        | `optional` 指定 HTML 自定义 class 。            |

### 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |

### 参考

- 官方沙盒： [HTML Overlays](https://sandcastle.cesium.com/gallery/HTML%20Overlays.html)
