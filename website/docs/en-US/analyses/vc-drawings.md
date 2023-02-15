## VcDrawings

Load the drawing tool components. Supports drawing points, polylines, polygons, rectangles, regular polygons, and circles.

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
      :main-fab-opts="mainFabOpts"
      :offset="[10, 65]"
      :editable="editable"
      :clamp-to-ground="clampToGround"
      @draw-evt="drawEvt"
      @active-evt="activeEvt"
      @editor-evt="editorEvt"
      @mouse-evt="mouseEvt"
      @ready="drawingsReadyDefault"
      :point-drawing-opts="pointDrawingOpts"
      :polygon-drawing-opts="polygonDrawingOpts"
      :regular-drawing-opts="regularDrawingOpts"
    ></vc-drawings>
    <!-- Customize UI through slot -->
    <vc-drawings
      ref="drawingsCustomRef"
      position="bottom-left"
      :main-fab-opts="mainFabOpts"
      :offset="[10, 30]"
      :editable="editable"
      :clamp-to-ground="clampToGround"
      :polyline-drawing-opts="polylineDrawingOpts"
      :rectangle-drawing-opts="rectangleDrawingOpts"
      :pin-drawing-opts="pinDrawingOpts"
    >
      <template #body="drawingActionInstances">
        <div class="custom-drawings">
          <el-row>
            <vc-btn
              v-for="(drawingActionInstance, index) in drawingActionInstances"
              :key="index"
              :color="drawingActionInstance.isActive ? 'positive' : 'primary'"
              rounded
              @click="toggle(drawingActionInstance)"
              >{{drawingActionInstance.tip.replace('Drawing ', '')}}</vc-btn
            >
            <vc-btn color="red" rounded @click="clear">Clear</vc-btn>
          </el-row>
        </div>
      </template>
    </vc-drawings>
    <vc-primitive-tileset
      url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
      @ready-promise="onTilesetReady"
    ></vc-primitive-tileset>
    <vc-layer-imagery>
      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>
    </vc-layer-imagery>
    <vc-terrain-provider-cesium v-if="addTerrain"></vc-terrain-provider-cesium>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
    <el-checkbox v-model="editable">editable</el-checkbox>
    <el-checkbox v-model="addTerrain">terrain</el-checkbox>
    <el-checkbox v-model="clampToGround">clampToGround</el-checkbox>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        addTerrain: false,
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
          ],
          pointOpts: {
            color: 'red',
          }
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
| position | string | `'bottom-left'` | `optional` Specify the location of the drawing component. |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` Specify the offset based on the position. |
| show | boolean | `true` | `optional` Specify whether the drawn result is visible. |
| mode | number | `1` | `optional` Specify the interactive drawing mode, 0 means continuous drawing, and 1 means drawing ends once.|
| drawings | Array\<'pin' \| 'point' \| 'polyline' \| 'polygon' \| 'rectangle' \| 'regular' \| 'circle'\> | `['pin', 'point', 'polyline', 'polygon', 'rectangle', 'circle', 'regular']` | `optional` Specify the drawing instance to be loaded. |
| activeColor | string | `'positive'` | `optional` Specify the color when the drawing instance is activated. |
| editable | boolean | `false` | `optional` Specify whether the drawing result can be edited. |
| clampToGround | boolean | `false` | `optional` Specify whether the drawing result object is attached to the ground or 3dtiles. Only line and area objects work. |
| mainFabOpts | VcActionTooltipProps & VcFabProps | | `optional` Specify the style options of the floating action button of the drawing component. |
| fabActionOpts | VcActionTooltipProps | | `optional` Specifies the common style options for the other parse buttons。 |
| pinActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the pin drawing action button.|
| pinDrawingOpts | VcDrawingOpts | | `optional` Specify pin drawing options.|
| pointActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the poingt drawing action button.|
| pointDrawingOpts | VcDrawingOpts | | `optional` Specify point drawing options.|
| polylineActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the polyline drawing action button.|
| polylineDrawingOpts | VcDrawingOpts | | `optional` Specify the polyline drawing options.|
| polygonActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the polygon drawing action button.|
| polygonDrawingOpts | VcDrawingOpts | | `optional` Specify the polygon drawing options.|
| rectangleActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the rectangle drawing action button.|
| rectangleDrawingOpts | VcDrawingOpts | | `optional` Specify the rectangle drawing options.|
| circleActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the circle drawing action button.|
| circleDrawingOpts | VcDrawingOpts | | `optional` Specify the circle drawing options.|
| regularActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the regular drawing action button.|
| regularDrawingOpts | VcDrawingOpts | | `optional` Specify the regular drawing options.|
| clearActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the clear action button.|

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
  modelValue: true,
  hideActionOnClick: false,
  color: 'info'
}
```

:::

:::tip

Tip: Each drawing button (FabAction) corresponds to the drawing options xxxDrawingOpts, used to customize drawing objects.

See: [defaultProps](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/drawings/src/defaultProps.ts)

The parameter configuration of each drawing result is too long to list here. If you need to customize it, please open the console output on the current document page to view `default options of drawing buttons` and `default options of drawing results` . These are the `actionOpts` and `cmpOpts` attributes. For example, the structure of the parameter object of `pointDrawingOpts` is the same as the structure of `cmpOpts` in which the `name` is the item of `point` in the console output of `Default Drawing Options:`. The `pointActionOpts` parameter object is the same as the `actionOpts` structure where the `name` is the `point` item in the console output `Default Drawing Options:`. Of course, you can also refer to this output in your own code to view.

:::

### Events

| Name       | Parameters                                       | Description                                                              |
| ---------- | ------------------------------------------------ | ------------------------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance)          | Triggers before the cesiumObject is loaded.                              |
| ready      | (readyObj: VcReadyObject)                        | Triggers when the cesiumObject is successfully loaded.                   |
| destroyed  | (instance: VcComponentInternalInstance)          | Triggers when the cesiumObject is destroyed.                             |
| drawEvt    | (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) | Triggers when drawing.                                                   |
| activeEvt  | (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) | Triggers when the drawing action is switched.                            |
| editorEvt  | (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) | Triggers when the edit button is clicked.                                |
| mouseEvt   | (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer)  | Triggers when the mouse is mouse over or mouse out on the drawing point. |
| fabUpdated | (value: boolean)                                 | Triggers when the floating button is expanded or collapsed.              |

### Methods

| Name                             | Parameters                                                 | Description                                           |
| -------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| load                             | () => Promise\<false \| VcReadyObject\>                    | Load components manually.                             |
| reload                           | () => Promise\<false \| VcReadyObject\>                    | Reload components manually.                           |
| unload                           | () => Promise\<boolean\>                                   | Destroy the loaded component manually.                |
| getCreatingPromise               | () => Promise\<boolean \| VcReadyObject>                   | Get the creatingPromise.                              |
| getCesiumObject                  | () => VcCesiumObject                                       | Get the Cesium object loaded by this component.       |
| clearAll                         | () => void                                                 | Clear all drawing results.                            |
| activate                         | () => void                                                 | End listening for the ScreenSpaceEventHandler events. |
| deactivate                       | () => void                                                 | Start listening for ScreenSpaceEventHandler events.   |
| toggleAction                     | (drawingOption: VcDrawingActionInstance \| string) => void | Toggle drawing instance.                              |
| getFabRef                        | () => VcFabRef                                             | Get the float action button template reference.       |
| getDrawingActionInstance         | (actionName: string) => VcDrawingActionInstance            | Get the drawingActionInstance by action name.         |
| getDrawingActionInstances        | () => Array\<VcDrawingActionInstance\>                     | Get the drawing action instances.                     |
| getSelectedDrawingActionInstance | () => VcDrawingActionInstance                              | Get the selected drawing action instance.             |

### Slots

| name | Description                                 |
| ---- | ------------------------------------------- |
| body | Used to customize the drawing component UI. |
