<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2021-12-29 13:24:10
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\en-US\overlays\vc-overlay-html.md
-->

## VcOverlayHtml

Load HTML element overlays by geographic location.

**Note:** Style files need to be imported: `import 'vue-cesium/dist/index.css';`

### Basic usage

Basic usage of VcOverlayHtml component.

:::demo Use the `vc-overlay-html` tag to add a div tag to the viewer and set up CSS animation.

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
          <span class="label-animate-marker_text">Hello World</span>
        </div>
      </div>
    </vc-overlay-html>
    <vc-layer-imagery>
      <vc-provider-imagery-arcgis></vc-provider-imagery-arcgis>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
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

### Props

| Name        | Type          | Default | Description                                                                                    |
| ----------- | ------------- | ------- | ---------------------------------------------------------------------------------------------- |
| show        | Boolean       | `true`  | `optional` Specify whether to display the HTML overlay.                                        |
| position    | Object\|Array |         | `optional` Specify the geographic location of the HTML element.                                |
| pixelOffset | Object\|Array |         | `optional` Specify the pixel offset of the HTML.                                               |
| autoHidden  | Boolean       | `true`  | `optional` Specifies whether HTML is automatically hidden when it is on the back of the earth. |
| customClass | String        |         | `optional` Specify an HTML custom class.                                                       |

### Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |

### Reference

- Sandbox: **[HTML Overlays](https://sandcastle.cesium.com/gallery/HTML%20Overlays.html)**
