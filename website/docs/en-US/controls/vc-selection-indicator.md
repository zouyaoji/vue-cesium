<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-06-13 16:48:20
 * @LastEditTime: 2022-02-17 16:15:48
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\en-US\controls\vc-selection-indicator.md
-->

## VcSelectionIndicator

Load a custom selector component to replace the selectionIndicator that comes with Cesium.

### Basic usage

Basic usage of the selector component.

:::demo Use the `vc-selection-indicator` tag to add a selector component to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer :selection-indicator="false" :info-box="false">
    <vc-selection-indicator ref="selectionIndicator" @pick-evt="pickEvt"></vc-selection-indicator>
    <vc-entity ref="entity" :billboard="billboard" :position="{lng: 108, lat: 32}" :point="point" :label="label">
      <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
    </vc-entity>
    <vc-layer-imagery>
      <vc-imagery-provider-osm></vc-imagery-provider-osm>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
    <el-button type="danger" round @click="clear">Clear</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        point: {
          pixelSize: 28,
          color: 'red'
        },
        label: {
          text: 'Hello World',
          pixelOffset: [0, 80]
        },
        billboard: {
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.5
        }
      }
    },
    methods: {
      clear() {
        this.$refs.selectionIndicator.selectedFeature.value = undefined
      },
      pickEvt(e) {
        console.log(e)
      },
      unload() {
        this.$refs.selectionIndicator.unload()
      },
      load() {
        this.$refs.selectionIndicator.load()
      },
      reload() {
        this.$refs.selectionIndicator.reload()
      }
    }
  }
</script>
```

:::

### Props

| Name                     | Type    | Default | Description                                                                                         |
| ------------------------ | ------- | ------- | --------------------------------------------------------------------------------------------------- |
| show                     | boolean | `true`  | `optional` Specifies whether the selection indicator is visible.                                    |
| width                    | number  | `50`    | `optional` Specify the width of the selection indicator.                                            |
| height                   | number  | `50`    | `optional` Specify the height of the selection indicator.                                           |
| allowFeatureInfoRequests | boolean | `true`  | `optional` Asynchronously determines the imagery layer features that are intersected by a pick ray. |
| height                   | number  | `25`    | `optional` Specify the maximum number of picked objects.                                            |

### Events

| Name       | Parameters                              | Description                                                    |
| ---------- | --------------------------------------- | -------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the VcSelectionIndicator is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the VcSelectionIndicator is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the VcSelectionIndicator is destroyed.           |
| pickEvt    | selectedFeature                         | Triggers when picked up.                                       |
