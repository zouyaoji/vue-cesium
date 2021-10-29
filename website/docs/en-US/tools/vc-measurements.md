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
      @drawEvt="drawEvt"
      @activeEvt="activeEvt"
      @editorEvt="editorEvt"
      @mouseEvt="mouseEvt"
      ref="measurementsRef"
      position="bottom-left"
      :mainFabOpts="measurementFabOptions1"
      :offset="[20, 80]"
      :editable="editable"
      :clampToGround="clampToGround"
      @ready="drawingsReadyDefault"
    >
    </vc-measurements>
    <!-- Custom measurement action -->
    <vc-measurements
      ref="measurementsRef2"
      position="top-right"
      :mainFabOpts="measurementFabOptions2"
      :editable="editable"
      :measurements="measurements"
      activeColor="yellow"
    >
    </vc-measurements>
    <!-- Custom measurement options and decimals -->
    <vc-measurements
      ref="measurementsRef3"
      position="top-left"
      :mainFabOpts="measurementFabOptions3"
      :distanceMeasurementOpts="distanceMeasurementOpts3"
      :componentDistanceMeasurementOpts="componentDistanceMeasurementOpts3"
      :pointMeasurementOpts="pointMeasurementOpts3"
      :editable="editable"
      :offset="[20, 80]"
    >
    </vc-measurements>
    <!-- Customize UI through slot -->
    <vc-measurements
      ref="measurementsRef4"
      position="bottom-left"
      :mainFabOpts="measurementFabOptions4"
      :offset="[0, 20]"
      :editable="editable"
      @ready="measurementsReady"
    >
      <template #body>
        <div class="custom-measurements">
          <el-row>
            <el-button
              v-for="(drawingActionInstance, index) in drawingActionInstances"
              :key="index"
              :type="drawingActionInstance.isActive ? 'success' : 'primary'"
              round
              @click="toggle(measurementOpts)"
              size="mini"
              >{{drawingActionInstance.tip}}</el-button
            >
            <el-button type="danger" round @click="clear">Clear</el-button>
          </el-row>
        </div>
      </template>
    </vc-measurements>
    <vc-primitive-tileset
      url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
      @readyPromise="onTilesetReady"
    ></vc-primitive-tileset>
    <vc-layer-imagery>
      <vc-provider-imagery-osm></vc-provider-imagery-osm>
    </vc-layer-imagery>
    <vc-provider-terrain-cesium v-if="addTerrain"></vc-provider-terrain-cesium>
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
          autoExpand: false,
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
        },
        drawingActionInstances: []
      }
    },
    methods: {
      drawingsReadyDefault({ Cesium, viewer, cesiumObject }) {
        console.log('Default Drawing Options', cesiumObject)
      },
      clear() {
        this.$refs.measurementsRef4.clearAll()
      },
      measurementsReady({ Cesium, viewer, cesiumObject }) {
        this.drawingActionInstances = cesiumObject
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
| position | String | `'top-right'` | `optional` Specify the location of the measurement component. |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` Specify the offset based on the position. |
| show | Boolean | `true` | `optional` Specify whether the drawn measurement result is visible. |
| mode | Number | `1` | `optional` Specify the interactive drawing mode, 0 means continuous drawing, and 1 means drawing ends once.|
| measurements | Array | `['distance', 'component-distance', 'polyline', 'horizontal', 'vertical', 'height', 'area', 'point', 'rectangle', 'circle', 'regular']` | `optional` Specify the measurement instance to be loaded. |
| activeColor | String | `'positive'` | `optional` Specify the color when the measurement instance is activated. |
| editable | Boolean | `false` | `optional` Specify whether the measurement result can be edited. |
| mainFabOpts | Object | | `optional` Specify the style options of the floating action button of the measuring component. |
| distanceActionOpts | Object | `` | `optional` Specify the style options of the distance measurement action button.|
| distanceMeasurementOpts | Object | | `optional` Specify distance measurement parameters.|
| componentDistanceActionOpts | Object | | `optional` Specify the style options of the component distance measurement action button.|
| componentDistanceMeasurementOpts | Object | | `optional` Specify the component distance measurement parameters.|
| polylineActionOpts | Object | | `optional` Specify the style options of the polyline distance measurement action button.|
| polylineMeasurementOpts | Object | | `optional` Specify the polyline distance measurement parameters.|
| horizontalActionOpts | Object | | `optional` Specify the style options of the horizontal distance measurement action button.|
| horizontalMeasurementOpts | Object | | `optional` Specify the horizontal distance measurement parameters.|
| verticalActionOpts | Object | | `optional` Specify the style options of the vertical distance measurement action button.|
| verticalMeasurementOpts | Object | | `optional` Specify the vertical distance measurement parameters.|
| heightActionOpts | Object | | `optional` Specify the style options of the height measurement action button.|
| heightMeasurementOpts | Object | | `optional` Specify the height measurement parameters.|
| areaActionOpts | Object | | `optional` Specify the style options of the area measurement action button.|
| areaMeasurementOpts | Object | | `optional` Specify the area measurement parameters.|
| pointActionOpts | Object | | `optional` Specify the style options of the point measurement action button.|
| pointMeasurementOpts | Object | | `optional` Specify the point measurement parameters.|
| rectangleActionOpts | Object | | `optional` Specify the style options of the rectangle measurement action button.|
| rectangleMeasurementOpts | Object | | `optional` Specify the rectangle measurement parameters.|
| circleActionOpts | Object | | `optional` Specify the style options of the circle measurement action button.|
| circleMeasurementOpts | Object | | `optional` Specify the circle measurement parameters.|
| regularActionOpts | Object | | `optional` Specify the style options of the regular measurement action button.|
| regularMeasurementOpts | Object | | `optional` Specify the regular measurement parameters.|
| clearActionOpts | Object | | `optional` Specify the style options of the clear action button.|

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
  autoExpand: true,
  hideActionOnClick: false,
  color: 'info'
}
```

:::

:::tip

Tip: Each measurement button (FabAction) corresponds to the measurement parameters xxxMeasurementOpts, used to customize drawing objects..

See: [defaultProps](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/measurements/src/defaultProps.ts)

The parameter configuration of each drawing result is too long to list here. If you need to customize it, please open the console output on the current document page to view `default parameters of drawing buttons` and `default parameters of drawing results` . These are the `actionOpts` and `cmpOpts` attributes. For example, the structure of the parameter object of `pointMeasurementOpts` is the same as the structure of `cmpOpts` in which the `name` is the item of `point` in the console output of `Default Drawing Options:`. The `pointActionOpts` parameter object is the same as the `actionOpts` structure where the `name` is the `point` item in the console output `Default Drawing Options:`. Of course, you can also refer to this output in your own code to view.

:::

### Events

| Name       | Parameters                         | Description                                                               |
| ---------- | ---------------------------------- | ------------------------------------------------------------------------- |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.                               |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded.                    |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.                              |
| drawEvt    | (measureParam, viewer)             | Triggered when measuring.                                                 |
| activeEvt  | (activeParam, viewer)              | Triggered when the measurement action is switched.                        |
| editorEvt  | (editParam, viewer)                | Triggered when the edit button is clicked.                                |
| mouseEvt   | (mouseParam, viewer)               | Triggered when the mouse is mouse over or mouse out on the drawing point. |

### Slots

| name | Description                                     |
| ---- | ----------------------------------------------- |
| body | Used to customize the measurement component UI. |
