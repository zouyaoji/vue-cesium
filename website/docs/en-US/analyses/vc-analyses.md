<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-06 11:30:01
 * @LastEditTime: 2022-01-27 12:01:37
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\en-US\analyses\vc-analyses.md
-->

## VcAnalyses

Load the analysis tool components. Including sightline analysis, viewshed analysis (3DTiles).

**Note:** Style files need to be imported: `import 'vue-cesium/dist/index.css';`

### Base usage

Basic usage of drawing components.

:::demo Use the `vc-analyses` tag to add drawing tools on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- Custom positioning and position offset -->
    <vc-analyses
      ref="analyses"
      position="bottom-left"
      :mainFabOpts="mainFabOpts"
      :offset="[20, 80]"
      :editable="editable"
      @drawEvt="drawEvt"
      @activeEvt="activeEvt"
      @editorEvt="editorEvt"
      @mouseEvt="mouseEvt"
      @ready="analysesReadyDefault"
    ></vc-analyses>
    <vc-primitive-tileset
      url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
      @readyPromise="onTilesetReady"
    ></vc-primitive-tileset>
    <vc-layer-imagery>
      <vc-imagery-provider-tianditu mapStyle="img_c" :maximumLevel="17" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-terrain-provider-cesium v-if="addTerrain"></vc-terrain-provider-cesium>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
    <el-checkbox v-model="editable">editable</el-checkbox>
    <el-checkbox v-model="addTerrain">terrain</el-checkbox>
  </el-row>
</el-row>

<script>
  let viewer = undefined
  export default {
    data() {
      return {
        addTerrain: false,
        drawingActionInstances: [],
        editable: false,
        mainFabOpts: {
          direction: 'right'
        }
      }
    },
    methods: {
      analysesReadyDefault({ Cesium, viewer, cesiumObject }) {
        console.log('Default Analysis Options', cesiumObject)
      },
      clear() {
        this.$refs.drawingsCustomRef.clearAll()
      },
      drawingsReady({ Cesium, viewer, cesiumObject }) {
        this.drawingActionInstances = cesiumObject
      },
      toggle(drawingActionInstance) {
        this.$refs.drawingsCustomRef.toggleAction(drawingActionInstance.name)
      },
      onTilesetReady(tileset, viewer) {
        // const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
        // const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
        // const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)
        // const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
        // tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
        viewer.zoomTo(tileset)
        viewer.scene.globe.depthTestAgainstTerrain = true
        this.restoreCursorMove = 'auto'
        this.drawing = false
        window.viewer = viewer
      },
      drawEvt(e, viewer) {
        const restoreCursor = getComputedStyle(viewer.canvas).cursor
        if (e.finished) {
          if (e.type === 'move') {
            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove}`)
          }
          this.drawing = false
        } else {
          this.drawing = true
          if (e.type === 'move') {
            viewer.canvas.setAttribute('style', 'cursor: move')
          }
          if (e.type === 'new') {
            viewer.canvas.setAttribute('style', 'cursor: crosshair')
          }
        }
      },
      activeEvt(e, viewer) {
        console.log(e)
        viewer.canvas.setAttribute('style', `cursor: ${e.isActive ? 'crosshair' : 'auto'}`)
        if (!e.isActive) {
          this.drawing = false
          this.restoreCursorMove = 'auto'
        }
      },
      editorEvt(e, viewer) {
        if (e.type === 'move') {
          viewer.canvas.setAttribute('style', 'cursor: move')
          this.drawing = true
        } else {
          viewer.canvas.setAttribute('style', 'cursor: auto')
        }
      },
      mouseEvt(e, viewer) {
        const restoreCursor = getComputedStyle(viewer.canvas).cursor
        if (!this.drawing) {
          console.log(e)
          if (e.type === 'onmouseover') {
            this.restoreCursorMove = restoreCursor
            viewer.canvas.setAttribute('style', 'cursor: pointer')
          } else {
            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove || 'auto'}`)
          }
        }
      },
      unload() {
        this.$refs.analyses.unload()
      },
      load() {
        this.$refs.analyses.load()
      },
      reload() {
        this.$refs.analyses.reload()
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| position | String | `'top-right'` | `optional` Specify the location of the component. |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` Specify the offset based on the position. |
| show | Boolean | `true` | `optional` Specify whether the analysis result is visible. |
| mode | Number | `1` | `optional` Specify the interactive drawing mode, 0 means continuous drawing, and 1 means drawing ends once.|
| analyses | Array | `['sightline', 'viewshed']` | `optional` Specifies the analysis instance to load. |
| activeColor | String | `'positive'` | `optional` Specify the color when the drawing instance is activated. |
| editable | Boolean | `false` | `optional` Specify whether the drawing result can be edited. |
| mainFabOpts | Object: VcActionTooltipProps & VcFabProps | | `optional` Specify the style options of the floating action button of the drawing component. |
| sightlineActionOpts | Object: VcActionTooltipProps | | `optional` Specify the style options of the sightline analysis action button.|
| sightlineAnalysisOpts | Object: VcDrawingOpts | | `optional` Specify sightline analysis parameters.|
| viewshedActionOpts | Object: VcActionTooltipProps | | `optional` Specify the style options of the viewshed analysis action button.|
| viewshedAnalysisOpts | Object: VcViewshedAnalysisOpts | | `optional` Specify viewshed analysis parameters.|
| clearActionOpts | Object: VcActionTooltipProps | | `optional` Specify the style options of the clear action button.|

:::tip

Tip: The analysis component is mainly composed of two parts: (1) the floating action button (Fab) that supports expansion and collapse; (2) the specific analysis action button(FabAction). Below are their default props:

:::

:::tip

Tip: Each drawing button (FabAction) corresponds to the analysis parameters xxxOpts, used to customize analysis parameters.

See: [defaultProps](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/analyses/src/defaultProps.ts)

The parameter configuration of each drawing result is too long to list here. If you need to customize it, please open the console output on the current document page to view `default parameters of analyses buttons` and `default parameters of analyses results` . These are the `actionOpts` and `cmpOpts` attributes. For example, the structure of the parameter object of `sightlineAnalysisOpts` is the same as the structure of `cmpOpts` in which the `name` is the item of `sightline` in the console output of `Default Analysis Options:`. The `sightlineActionOpts` parameter object is the same as the `actionOpts` structure where the `name` is the `sightline` item in the console output `Default Analysis Options:`. Of course, you can also refer to this output in your own code to view.

:::

### Events

| Name       | Parameters                                       | Description                                                               |
| ---------- | ------------------------------------------------ | ------------------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance)          | Triggers before the cesiumObject is loaded.                               |
| ready      | (readyObj: VcReadyObject)                        | Triggers when the cesiumObject is successfully loaded.                    |
| destroyed  | (instance: VcComponentInternalInstance)          | Triggers when the cesiumObject is destroyed.                              |
| drawEvt    | (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) | Triggered when drawing.                                                   |
| activeEvt  | (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer)   | Triggered when the drawing action is switched.                            |
| editorEvt  | (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) | Triggered when the edit button is clicked.                                |
| mouseEvt   | (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer)  | Triggered when the mouse is mouse over or mouse out on the drawing point. |
| fabUpdated | (value: boolean)                                 | when the floating button is expanded or collapsed.                        |

### Slots

| name | Description                                 |
| ---- | ------------------------------------------- |
| body | Used to customize the drawing component UI. |

### Reference

- Viewshed: Refer to the **[Helsing's Blog](https://blog.csdn.net/fywindmoon/article/details/108415116)**
