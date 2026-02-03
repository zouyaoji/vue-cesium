## VcMeasurements

Loads the measurement tool component, including distance measurement, triangulation measurement, polyline distance measurement, horizontal distance measurement, vertical distance measurement, height measurement, area measurement, and coordinate measurement.

**Note:** Style files need to be imported: `import 'vue-cesium/dist/index.css';`

:::tip

Tip: The measurement component has been refactored in version 3.0 into a single component with concise functionality and optimized interactions.

Typically left-click to draw, right-click to cancel the last drawn point, and double-click to finish the current drawing. Horizontal measurement can also be drawn in a fixed direction by holding Shift. Use Ctrl + Right-click to cancel drawing.

:::

### Basic usage

Basic usage of VcMeasurements component.

:::demo

analyses/vc-measurements/usage

:::

### VcMeasurements Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ----- | --- | ------ | ---- | ----- |
| position | string | `'top-right'` | `optional` Specify the position of the measurement component. |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` Specify the offset of the measurement component. |
| show | boolean | `true` | `optional` Specify whether the measurement results are visible. |
| mode | number | `1` | `optional` Specify the drawing interaction mode, 0 for continuous drawing, 1 for one-time drawing.|
| measurements | Array\<'distance' \| 'component-distance' \| 'polyline' \| 'horizontal' \| 'vertical' \| 'height' \| 'area' \| 'point' \| 'rectangle' \| 'regular' \| 'circle'\> | `['distance', 'component-distance', 'polyline', 'horizontal', 'vertical', 'height', 'area', 'point', 'rectangle', 'circle', 'regular']` | `optional` Specify the measurement instances to load. |
| activeColor | string | `'positive'` | `optional` Specify the color when the measurement instance is activated. |
| editable | boolean | `false` | `optional` Specify whether the measurement result objects are editable. |
| mainFabOpts | VcActionTooltipProps & VcFabProps | | `optional` Specify the style options of the main floating button. |
| fabActionOpts | VcActionTooltipProps | | `optional` Specify the public style options of other measurement buttons. |

### VcMeasurements Events

| Event name | Parameters                                       | Description                                                   |
| ---------- | ------------------------------------------------ | ------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance)          | Triggered before the object is loaded.                        |
| ready      | (readyObj: VcReadyObject)                        | Triggered when the object is loaded.                          |
| destroyed  | (instance: VcComponentInternalInstance)          | Triggered when the object is destroyed.                       |
| drawEvt    | (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer)   | Triggered when measuring.                                     |
| activeEvt  | (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) | Triggered when switching measurement actions.                 |
| editorEvt  | (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) | Triggered when clicking the edit button.                      |
| mouseEvt   | (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer)  | Triggered when the mouse moves over or leaves drawing points. |
| fabUpdated | (value: boolean)                                 | Triggered when the floating button expands or collapses.      |
| clearEvt   | (evt: object, viewer: Cesium.Viewer)             | Triggered when clearing measurements.                         |

### VcMeasurements Methods

<!-- prettier-ignore -->
| Method | Parameters | Description |
| ----- | ---- | ---- |
| load | () => Promise\<false \| VcReadyObject\> | Manually load the component. |
| reload | () => Promise\<false \| VcReadyObject\> | Manually reload the component. |
| unload | () => Promise\<boolean\> | Manually unload the component. |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get a Promise object indicating whether the component was created successfully. |
| getCesiumObject | () => VcCesiumObject | Get the Cesium object loaded by this component. |
| clearAll | () => void | Clear all measurement objects. |
| activate | () => void | Activate measurement events. |
| deactivate | () => void | Deactivate measurement events. |
| toggleAction | (drawingOption: VcDrawingActionInstance \| string) => void | Toggle measurement instance. |
| getFabRef | () => VcFabRef | Get the floating button template reference. |
| getDrawingActionInstance | (actionName: string) => VcDrawingActionInstance | Get measurement instance by action name. |
| getDrawingActionInstances | () => Array\<VcDrawingActionInstance\> | Get all measurement instances. |
| getSelectedDrawingActionInstance | () => VcDrawingActionInstance | Get the selected measurement instance. |

### VcMeasurements Slots

| Slot name | Description                                     |
| --------- | ----------------------------------------------- |
| body      | Used to customize the measurement component UI. |
