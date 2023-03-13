## VcMeasurements

Load measurement tool components, including distance measurement, component distance measurement, polyline distance measurement, horizontal distance measurement, vertical distance measurement, height measurement, area measurement, and point coordinate measurement.

**Note:** Style files need to be imported: `import 'vue-cesium/dist/index.css';`

:::tip

Tip: Version 3.0 has restructured the measurement component into one component, which is simple and supports custom styles, and optimizes the interaction.

The drawing interaction is also optimized. The overall drawing is left-click, right-click to cancel the last drawn point, and double-click to end the drawing. Among them, horizontal measurement can also hold shift to draw a point in a fixed direction.

ctrl + right click to cancel drawing.

:::

### Base usage

Basic usage of measurement components.

:::demo Use the `vc-measurements` tag to add measurement tools on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- Custom positioning and position offset -->
    <vc-measurements
      @draw-evt="drawEvt"
      @active-evt="activeEvt"
      @editor-evt="editorEvt"
      @mouse-evt="mouseEvt"
      ref="measurementsRef"
      position="bottom-left"
      :main-fab-opts="measurementFabOptions1"
      :offset="[10, 100]"
      :editable="editable"
      :clamp-to-ground="clampToGround"
      @ready="drawingsReadyDefault"
      :point-measurement-opts="pointMeasurementOpts"
      :area-measurement-opts="areaMeasurementOpts"
    >
    </vc-measurements>
    <!-- Custom measurement action -->
    <vc-measurements
      ref="measurementsRef2"
      position="top-right"
      :main-fab-opts="measurementFabOptions2"
      :editable="editable"
      :measurements="measurements"
      active-color="yellow"
    >
    </vc-measurements>
    <!-- Custom measurement options and decimals -->
    <vc-measurements
      ref="measurementsRef3"
      position="top-left"
      :main-fab-opts="measurementFabOptions3"
      :distance-measurement-opts="distanceMeasurementOpts3"
      :component-distanceMeasurement-opts="componentDistanceMeasurementOpts3"
      :point-measurement-opts="pointMeasurementOpts3"
      :editable="editable"
      :offset="[20, 80]"
    >
    </vc-measurements>
    <!-- Customize UI through slot -->
    <vc-measurements ref="measurementsRef4" position="bottom-left" :main-fab-opts="measurementFabOptions4" :offset="[10, 30]" :editable="editable">
      <template #body="drawingActionInstances">
        <div class="custom-measurements">
          <el-row>
            <vc-btn
              v-for="(drawingActionInstance, index) in drawingActionInstances"
              :key="index"
              :color="drawingActionInstance.isActive ? 'amber' : 'primary'"
              rounded
              @click="toggle(drawingActionInstance)"
              size="mini"
              >{{drawingActionInstance.tip}}</vc-btn
            >
            <vc-btn color="red" rounded @click="clear">Clear</vc-btn>
          </el-row>
        </div>
      </template>
    </vc-measurements>
    <vc-primitive-tileset
      url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
      @ready-promise="onTilesetReady"
    ></vc-primitive-tileset>
    <vc-layer-imagery>
      <vc-imagery-provider-osm></vc-imagery-provider-osm>
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
  import { DistanceUnits, AngleUnits } from 'vue-cesium'
  export default {
    data() {
      return {
        addTerrain: false,
        editable: false,
        clampToGround: false,
        measurementFabOptions1: {
          direction: 'right'
        },
        measurementFabOptions2: {
          direction: 'left',
          color: 'accent'
        },
        measurementFabOptions3: {
          direction: 'right',
          modelValue: false,
          color: 'primary'
        },
        distanceMeasurementOpts3: {
          measureUnits: {
            distanceUnits: DistanceUnits.KILOMETERS,
            angleUnits: AngleUnits.RADIANS
          },
          decimals: {
            distance: 4,
            angle: 3
          }
        },
        componentDistanceMeasurementOpts3: {
          measureUnits: {
            distanceUnits: DistanceUnits.KILOMETERS,
            angleUnits: AngleUnits.RADIANS
          },
          decimals: {
            distance: 4,
            angle: 3
          }
        },
        pointMeasurementOpts: {
          preRenderDatas: [[108.9602, 34.21895, 500]],
          pointOpts: {
            color: 'red'
          }
        },
        areaMeasurementOpts: {
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
        pointMeasurementOpts3: {
          measureUnits: {
            distanceUnits: DistanceUnits.METERS,
            angleUnits: AngleUnits.DEGREES_MINUTES_SECONDS,
            slopeUnits: AngleUnits.DEGREES
          },
          decimals: {
            lng: 3,
            lat: 3,
            height: 2,
            slope: 3
          }
        },
        measurements: ['component-distance', 'polyline', 'vertical', 'area', 'point'],
        measurementFabOptions4: {
          direction: 'right'
        }
      }
    },
    methods: {
      drawingsReadyDefault({ Cesium, viewer, cesiumObject }) {
        console.log('Default Drawing Options', cesiumObject)
      },
      clear() {
        this.$refs.measurementsRef4.clearAll()
      },
      toggle(drawingActionInstance) {
        this.$refs.measurementsRef4.toggleAction(drawingActionInstance.name)
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
      },
      drawEvt(e, viewer) {
        console.log(e)
        const restoreCursor = getComputedStyle(viewer.canvas).cursor
        if (e.finished) {
          this.drawing = false
          if (e.type === 'move') {
            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove}`)
          }
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
        console.log(e)
        if (e.type === 'move') {
          const restoreCursor = getComputedStyle(viewer.canvas).cursor
          viewer.canvas.setAttribute('style', 'cursor: move')
          this.drawing = true
        }
      },
      mouseEvt(e, viewer) {
        console.log(e)
        const restoreCursor = getComputedStyle(viewer.canvas).cursor
        if (!this.drawing) {
          if (e.type === 'onmouseover') {
            this.restoreCursorMove = restoreCursor
            viewer.canvas.setAttribute('style', 'cursor: pointer')
          } else {
            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove || 'auto'}`)
          }
        }
      },
      unload() {
        this.$refs.measurementsRef.unload()
      },
      load() {
        this.$refs.measurementsRef.load()
      },
      reload() {
        this.$refs.measurementsRef.reload()
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
| position | string | `'top-right'` | `optional` Specify the location of the measurement component. |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` Specify the offset based on the position. |
| show | boolean | `true` | `optional` Specify whether the drawn measurement result is visible. |
| mode | number | `1` | `optional` Specify the interactive drawing mode, 0 means continuous drawing, and 1 means drawing ends once.|
| measurements | Array\<'distance' \| 'component-distance' \| 'polyline' \| 'horizontal' \| 'vertical' \| 'height' \| 'area' \| 'point' \| 'rectangle' \| 'regular' \| 'circle' \> | `['distance', 'component-distance', 'polyline', 'horizontal', 'vertical', 'height', 'area', 'point', 'rectangle', 'circle', 'regular']` | `optional` Specify the measurement instance to be loaded. |
| activeColor | string | `'positive'` | `optional` Specify the color when the measurement instance is activated. |
| editable | boolean | `false` | `optional` Specify whether the measurement result can be edited. |
| mainFabOpts | VcActionTooltipProps & VcFabProps | | `optional` Specify the style options of the floating action button of the measuring component. |
| fabActionOpts | VcActionTooltipProps | | `optional` Specifies the common style options for the other parse buttons。 |
| distanceActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the distance measurement action button.|
| distanceMeasurementOpts | VcMeasurementOpts | | `optional` Specify distance measurement options.|
| componentDistanceActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the component distance measurement action button.|
| componentDistanceMeasurementOpts | VcMeasurementOpts | | `optional` Specify the component distance measurement options.|
| polylineActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the polyline distance measurement action button.|
| polylineMeasurementOpts | VcMeasurementOpts | | `optional` Specify the polyline distance measurement options.|
| horizontalActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the horizontal distance measurement action button.|
| horizontalMeasurementOpts | VcMeasurementOpts | | `optional` Specify the horizontal distance measurement options.|
| verticalActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the vertical distance measurement action button.|
| verticalMeasurementOpts | VcMeasurementOpts | | `optional` Specify the vertical distance measurement options.|
| heightActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the height measurement action button.|
| heightMeasurementOpts | VcMeasurementOpts | | `optional` Specify the height measurement options.|
| areaActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the area measurement action button.|
| areaMeasurementOpts | VcMeasurementOpts | | `optional` Specify the area measurement options.|
| pointActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the point measurement action button.|
| pointMeasurementOpts | VcMeasurementOpts | | `optional` Specify the point measurement options.|
| rectangleActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the rectangle measurement action button.|
| rectangleMeasurementOpts | VcMeasurementOpts | | `optional` Specify the rectangle measurement options.|
| circleActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the circle measurement action button.|
| circleMeasurementOpts | VcMeasurementOpts | | `optional` Specify the circle measurement options.|
| regularActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the regular measurement action button.|
| regularMeasurementOpts | VcMeasurementOpts | | `optional` Specify the regular measurement options.|
| clearActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the clear action button.|

:::tip

Tip: The measurement component is mainly composed of two parts: (1) the floating action button (Fab) that supports expansion and collapse; (2) the specific measurement action button(FabAction). Below are their default props:

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
  // vc-icons-measure-distance, vc-icons-measure-component-distance,
  // vc-icons-measure-polyline-distance, vc-icons-measure-horizontal-distance,
  // vc-icons-measure-vertical-distance, vc-icons-measure-height-from-terrain,
  // vc-icons-measure-area, vc-icons-measure-point-coordinates,
  // vc-icons-clear
  icon: 'vc-icons-measure-distance'
}
```

```js
// The following properties are added to the common properties of ActionOpts:
{
  direction: 'left',
  icon: 'vc-icons-measure-button',
  activeIcon: 'vc-icons-measure-button',
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

Tip: Each measurement button (FabAction) corresponds to the measurement options xxxMeasurementOpts, used to customize drawing objects..

See: [defaultProps](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/measurements/src/defaultProps.ts)

The parameter configuration of each drawing result is too long to list here. If you need to customize it, please open the console output on the current document page to view `default options of drawing buttons` and `default options of drawing results` . These are the `actionOpts` and `cmpOpts` attributes. For example, the structure of the parameter object of `pointMeasurementOpts` is the same as the structure of `cmpOpts` in which the `name` is the item of `point` in the console output of `Default Drawing Options:`. The `pointActionOpts` parameter object is the same as the `actionOpts` structure where the `name` is the `point` item in the console output `Default Drawing Options:`. Of course, you can also refer to this output in your own code to view.

:::

### Events

| Name       | Parameters                                       | Description                                                              |
| ---------- | ------------------------------------------------ | ------------------------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance)          | Triggers before the cesiumObject is loaded.                              |
| ready      | (readyObj: VcReadyObject)                        | Triggers when the cesiumObject is successfully loaded.                   |
| destroyed  | (instance: VcComponentInternalInstance)          | Triggers when the cesiumObject is destroyed.                             |
| drawEvt    | (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer)   | Triggers when measuring.                                                 |
| activeEvt  | (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) | Triggers when the measurement action is switched.                        |
| editorEvt  | (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) | Triggers when the edit button is clicked.                                |
| mouseEvt   | (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer)  | Triggers when the mouse is mouse over or mouse out on the drawing point. |
| fabUpdated | (value: boolean)                                 | Triggers when the floating button is expanded or collapsed.              |
| onClearEvt | (evt: object, viewer: Cesium.Viewer)             | Triggers when the clear button is clicked.                               |

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

| name | Description                                     |
| ---- | ----------------------------------------------- |
| body | Used to customize the measurement component UI. |
