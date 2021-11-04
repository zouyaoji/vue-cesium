## VcDrawings

Load the drawing tool components, which currently include point, polyline, and polygon drawing tools, and others will be added later.

**Note:** Style files need to be imported: `import 'vue-cesium/dist/index.css';`

:::tip

Tip: Version 3.0 has reorganized the drawing component into a single component, which is simple and supports custom styles.

The drawing interaction is also optimized. The overall drawing is left-click, right-click to cancel the last drawn point, and double-click to end the drawing.

ctrl + right click to cancel drawing.

:::

### Base usage

Basic usage of drawing components.

:::demo Use the `vc-drawings` tag to add drawing tools on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- Custom positioning and position offset -->
    <vc-drawings
      ref="drawingsRef"
      position="bottom-left"
      :mainFabOpts="mainFabOpts"
      :offset="[20, 80]"
      :editable="editable"
      :clampToGround="clampToGround"
      @drawEvt="drawEvt"
      @activeEvt="activeEvt"
      @editorEvt="editorEvt"
      @mouseEvt="mouseEvt"
      @ready="drawingsReadyDefault"
      :pointDrawingOpts="pointDrawingOpts"
      :polygonDrawingOpts="polygonDrawingOpts"
      :regularDrawingOpts="regularDrawingOpts"
    ></vc-drawings>
    <!-- Customize UI through slot -->
    <vc-drawings
      ref="drawingsCustomRef"
      position="bottom-left"
      :mainFabOpts="mainFabOpts"
      :offset="[0, 20]"
      :editable="editable"
      :clampToGround="clampToGround"
      @ready="drawingsReady"
      :polylineDrawingOpts="polylineDrawingOpts"
      :rectangleDrawingOpts="rectangleDrawingOpts"
      :pinDrawingOpts="pinDrawingOpts"
    >
      <template #body>
        <div class="custom-drawings">
          <el-row>
            <el-button
              v-for="(drawingActionInstance, index) in drawingActionInstances"
              :key="index"
              :type="drawingActionInstance.isActive ? 'success' : 'primary'"
              round
              @click="toggle(drawingActionInstance)"
              >{{drawingActionInstance.tip.replace('Drawing ', '')}}</el-button
            >
            <el-button type="danger" round @click="clear">Clear</el-button>
          </el-row>
        </div>
      </template>
    </vc-drawings>
    <vc-primitive-tileset
      url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
      @readyPromise="onTilesetReady"
    ></vc-primitive-tileset>
    <vc-layer-imagery>
      <vc-provider-imagery-arcgis></vc-provider-imagery-arcgis>
    </vc-layer-imagery>
    <vc-provider-terrain-cesium v-if="addTerrain"></vc-provider-terrain-cesium>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
    <el-checkbox v-model="editable">editable</el-checkbox>
    <el-checkbox v-model="addTerrain">地形</el-checkbox>
    <el-checkbox v-model="clampToGround">clampToGround</el-checkbox>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        addTerrain: false,
        drawingActionInstances: [],
        editable: false,
        clampToGround: false,
        mainFabOpts: {
          direction: 'right'
        },
        polylineDrawingOpts: {
          loop: true
        },
        rectangleDrawingOpts: {
          regular: false
        },
        pinDrawingOpts: {
          billboardOpts: {
            image: 'https://zouyaoji.top/vue-cesium/images/grepin.png'
          },
          labelOpts: {
            text: 'Pin',
            pixelOffset: [0, -60]
          }
        },
        pointDrawingOpts: {
          preRenderDatas: [
            [108.96018, 34.21948, 50],
            [108.9602, 34.21895, 100]
          ]
        },
        polygonDrawingOpts: {
          preRenderDatas: [
            [
              [108.95808, 34.21955, 30],
              [108.95948, 34.22039, 20],
              [108.9595, 34.21914, 25]
            ],
            [
              [108.955, 34.21857],
              [108.95573, 34.21856],
              [108.95573, 34.21761],
              [108.95499, 34.21761]
            ]
          ]
        },
        regularDrawingOpts: {
          preRenderDatas: [
            [
              [108.95474, 34.22204],
              [108.95564, 34.22166]
            ]
          ]
        }
      }
    },
    methods: {
      drawingsReadyDefault({ Cesium, viewer, cesiumObject }) {
        console.log('Default Drawing Options', cesiumObject)
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
        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)
        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
        viewer.zoomTo(tileset)
        viewer.scene.globe.depthTestAgainstTerrain = true
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
        this.$refs.drawingsRef.unload()
      },
      load() {
        this.$refs.drawingsRef.load()
      },
      reload() {
        this.$refs.drawingsRef.reload()
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
| position | String | `'top-right'` | `optional` Specify the location of the drawing component. |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` Specify the offset based on the position. |
| show | Boolean | `true` | `optional` Specify whether the drawn result is visible. |
| mode | Number | `1` | `optional` Specify the interactive drawing mode, 0 means continuous drawing, and 1 means drawing ends once.|
| drawings | Array | `['pin', 'point', 'polyline', 'polygon', 'rectangle', 'circle', 'regular']` | `optional` Specify the drawing instance to be loaded. |
| activeColor | String | `'positive'` | `optional` Specify the color when the drawing instance is activated. |
| editable | Boolean | `false` | `optional` Specify whether the drawing result can be edited. |
| clampToGround | Boolean | `false` | `optional` Specify whether the drawing result object is attached to the ground or 3dtiles. Only line and area objects work. |
| mainFabOpts | Object | | `optional` Specify the style options of the floating action button of the drawing component. |
| pinActionOpts | Object | `` | `optional` Specify the style options of the pin drawing action button.|
| pinDrawingOpts | Object | | `optional` Specify pin drawing parameters.|
| pointActionOpts | Object | `` | `optional` Specify the style options of the poingt drawing action button.|
| pointDrawingOpts | Object | | `optional` Specify poingt drawing parameters.|
| polylineActionOpts | Object | | `optional` Specify the style options of the polyline drawing action button.|
| polylineDrawingOpts | Object | | `optional` Specify the polyline drawing parameters.|
| polygonActionOpts | Object | | `optional` Specify the style options of the polygon drawing action button.|
| polygonDrawingOpts | Object | | `optional` Specify the polygon drawing parameters.|
| rectangleActionOpts | Object | | `optional` Specify the style options of the rectangle drawing action button.|
| rectangleDrawingOpts | Object | | `optional` Specify the rectangle drawing parameters.|
| circleActionOpts | Object | | `optional` Specify the style options of the circle drawing action button.|
| circleDrawingOpts | Object | | `optional` Specify the circle drawing parameters.|
| regularActionOpts | Object | | `optional` Specify the style options of the regular drawing action button.|
| regularDrawingOpts | Object | | `optional` Specify the regular drawing parameters.|
| clearActionOpts | Object | | `optional` Specify the style options of the clear action button.|

:::tip

Tip: The drawing component is mainly composed of two parts: (1) the floating action button (Fab) that supports expansion and collapse; (2) the specific drawing action button(FabAction). Below are their default props:

:::

:::tipflex

```js
// ActionOpts general props
{
  externalLabel: false,
  label: '',
  labelPosition: 'right',
  hideLabel: false,
  disable: false,
  outline: false,
  push: false,
  flat: false,
  unelevated: false,
  color: 'primary',
  glossy: false,
  square: false,
  tooltip: {
    delay: 500,
    anchor: 'bottom middle',
    offset: [
      0,
      20
    ]
  },
  // The default icons are
  // vc-icons-drawing-point
  // vc-icons-drawing-polyline
  // vc-icons-drawing-polygon
  // vc-icons-drawing-rectangle
  // vc-icons-drawing-circle
  // vc-icons-drawing-regular
  // vc-icons-clear
  icon: 'vc-icons-drawing-point'
}
```

```js
// The following properties are added to the common properties of ActionOpts:
{
  direction: 'left',
  icon: 'vc-icons-drawing-button',
  activeIcon: 'vc-icons-drawing-button',
  verticalActionsAlign: 'center',
  hideIcon: false,
  persistent: false,
  autoExpand: true,
  hideActionOnClick: false,
  color: 'info'
}
```

:::

:::tip

Tip: Each drawing button (FabAction) corresponds to the drawing parameters xxxDrawingOpts, used to customize drawing objects.

See: [defaultProps](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/drawings/src/defaultProps.ts)

The parameter configuration of each drawing result is too long to list here. If you need to customize it, please open the console output on the current document page to view `default parameters of drawing buttons` and `default parameters of drawing results` . These are the `actionOpts` and `cmpOpts` attributes. For example, the structure of the parameter object of `pointDrawingOpts` is the same as the structure of `cmpOpts` in which the `name` is the item of `point` in the console output of `Default Drawing Options:`. The `pointActionOpts` parameter object is the same as the `actionOpts` structure where the `name` is the `point` item in the console output `Default Drawing Options:`. Of course, you can also refer to this output in your own code to view.

:::

### Events

| Name       | Parameters                         | Description                                                               |
| ---------- | ---------------------------------- | ------------------------------------------------------------------------- |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.                               |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded.                    |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.                              |
| drawEvt    | (drawParam, viewer)                | Triggered when drawing.                                                   |
| activeEvt  | (activeParam, viewer)              | Triggered when the drawing action is switched.                            |
| editorEvt  | (editParam, viewer)                | Triggered when the edit button is clicked.                                |
| mouseEvt   | (mouseParam, viewer)               | Triggered when the mouse is mouse over or mouse out on the drawing point. |

### Slots

| name | Description                                 |
| ---- | ------------------------------------------- |
| body | Used to customize the drawing component UI. |
