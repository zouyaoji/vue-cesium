## VcSelectionIndicator

Load a custom selector component to replace the selectionIndicator that comes with Cesium.

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
      <vc-provider-imagery-osm></vc-provider-imagery-osm>
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

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| pickEvt    | selectedFeature                    | Triggered when picked up.                              |
