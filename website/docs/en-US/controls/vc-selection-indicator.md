<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-06-13 16:48:20
 * @LastEditTime: 2022-09-23 15:10:00
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\en-US\controls\vc-selection-indicator.md
-->

## VcSelectionIndicator

Load a custom selector component to replace the selectionIndicator that comes with Cesium.

**Note:** If the picked object is `Cesium3DTileFeature` the position of the indicator is the center point of the bounding box of the object. If it is a manual model and you want a more precise position, please use the `position` attribute in the building attribute field to describe the position information of the feature, such as `'[108, 32]'` .

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

| Name                     | Type     | Default | Description                                                                                         |
| ------------------------ | -------- | ------- | --------------------------------------------------------------------------------------------------- |
| show                     | boolean  | `true`  | `optional` Specifies whether the selection indicator is visible.                                    |
| width                    | number   | `50`    | `optional` Specify the width of the selection indicator.                                            |
| height                   | number   | `50`    | `optional` Specify the height of the selection indicator.                                           |
| allowFeatureInfoRequests | boolean  | `true`  | `optional` Asynchronously determines the imagery layer features that are intersected by a pick ray. |
| limit                    | number   | `25`    | `optional` Specify the maximum number of picked objects.                                            |
| includeImageryIds        | string[] |         | `optional` Specify an array of vcIds to include when picking image features.                        |
| excludeImageryIds        | string[] | `[]`    | `optional` Specify an array of vcIds to exclude when picking image features.                        |

### Events

| Name       | Parameters                              | Description                                                    |
| ---------- | --------------------------------------- | -------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the VcSelectionIndicator is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the VcSelectionIndicator is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the VcSelectionIndicator is destroyed.           |
| pickEvt    | selectedFeature                         | Triggers when picked up.                                       |

### Methods

<!-- prettier-ignore -->
| Name | Parameters | Description |
| ------------------ | --------------------------------------- | ----------------------------------------------- |
| load | () => Promise\<false \| VcReadyObject\> | Load components manually. |
| reload | () => Promise\<false \| VcReadyObject\> | Reload components manually. |
| unload | () => Promise\<boolean\> | Destroy the loaded component manually. |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get the creatingPromise. |
| getCesiumObject | () => VcCesiumObject | Get the Cesium object loaded by this component. |
| computeScreenSpacePosition | () => Cesium.Cartesian2 | A function that converts the world position of an object to a screen space position. |
| update | () => void | Updates the view of the selection indicator to match the position and content properties of the view model |
| animateAppear | () => void | Animate the indicator to draw attention to the selection. |
| animateDepart | () => void | Animate the indicator to release the selection. |
| getPickedFeatures | () => PickedFeatures| Get the picked features. |

### Members

| Name                                     | Description                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------- |
| position: Cesium.Cartesian3              | Gets or sets the world position of the object for which to display the selection indicator. |
| selectedFeature:Feature \| Cesium.Entity | Get or set the selected feature.                                                            |
