<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-06-13 16:48:20
 * @LastEditTime: 2021-11-22 16:49:45
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\en-US\controls\vc-selection-indicator.md
-->

## VcSelectionIndicator

Load a custom selector component to replace the selectionIndicator that comes with Cesium.

**Note:** Picking up the `vc-primitive-particle` component object is not supported.

### Basic usage

Basic usage of the selector component.

:::demo Use the `vc-selection-indicator` tag to add a selector component to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer :selectionIndicator="false" :infoBox="false">
    <vc-selection-indicator ref="selectionIndicator" @pickEvt="pickEvt"></vc-selection-indicator>
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
| show                     | Boolean | `true`  | `optional` Specifies whether the selection indicator is visible.                                    |
| width                    | Number  | `50`    | `optional` Specify the width of the selection indicator.                                            |
| height                   | Number  | `50`    | `optional` Specify the height of the selection indicator.                                           |
| allowFeatureInfoRequests | Boolean | `true`  | `optional` Asynchronously determines the imagery layer features that are intersected by a pick ray. |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| pickEvt    | selectedFeature                         | Triggered when picked up.                              |
