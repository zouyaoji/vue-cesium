## VcDrawings

Loads the drawing tool component. Supports drawing points, lines, polygons, rectangles, regular polygons, and circles.

**Note:** Style files need to be imported: `import 'vue-cesium/dist/index.css';`

:::tip

Tip: The drawing component has been refactored in version 3.0 into a single component with concise functionality and support for custom styles. Use Ctrl + Right-click to cancel drawing.

:::

### Basic usage

Basic usage of VcDrawings component.

:::demo

analyses/vc-drawings/usage

:::

### VcDrawings Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ----- | --- | ------ | ---- | ----- |
| position | string | `'bottom-left'` | `optional` Specify the position of the drawing component. |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` Specify the offset of the drawing component. |
| show | boolean | `true` | `optional` Specify whether the drawing results are visible. |
| mode | number | `1` | `optional` Specify the drawing interaction mode, 0 for continuous drawing, 1 for one-time drawing.|
| drawings | Array\<'pin' \| 'point' \| 'polyline' \| 'polygon' \| 'rectangle' \| 'regular' \| 'circle'\> | `['pin', 'point', 'polyline', 'polygon', 'rectangle', 'circle', 'regular']` | `optional` Specify the drawing instances to load. |
| activeColor | string | `'positive'` | `optional` Specify the color when the drawing instance is activated. |
| editable | boolean | `false` | `optional` Specify whether the drawing result objects are editable. |
| clampToGround | boolean | `false` | `optional` Specify whether the drawing results are clamped to ground. |
| mainFabOpts | VcActionTooltipProps & VcFabProps | | `optional` Specify the style options of the main floating button. |
| fabActionOpts | VcActionTooltipProps | | `optional` Specify the public style options of other drawing buttons. |
| pinActionOpts | VcActionTooltipProps | `` | `optional` Specify the style options of the pin drawing button.|
| pinDrawingOpts | VcDrawingOpts | | `optional` Specify the pin drawing parameters.|
| pointActionOpts | VcActionTooltipProps | `` | `optional` Specify the style options of the point drawing button.|
| pointDrawingOpts | VcDrawingOpts | | `optional` Specify the point drawing parameters.|
| polylineActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the polyline drawing button.|
| polylineDrawingOpts | VcDrawingOpts | | `optional` Specify the polyline drawing parameters.|
| polygonActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the polygon drawing button.|
| polygonDrawingOpts | VcDrawingOpts | | `optional` Specify the polygon drawing parameters.|
| rectangleActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the rectangle drawing button.|
| rectangleDrawingOpts | VcDrawingOpts | | `optional` Specify the rectangle drawing parameters.|
| circleActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the circle drawing button.|
| circleDrawingOpts | VcDrawingOpts | | `optional` Specify the circle drawing parameters.|
| regularActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the regular polygon drawing button.|
| regularDrawingOpts | VcDrawingOpts | | `optional` Specify the regular polygon drawing parameters.|
| clearActionOpts | VcActionTooltipProps | | `optional` Specify the style options of the clear button.|

### VcDrawings Events

| Event name | Parameters                                       | Description                                                   |
| ---------- | ------------------------------------------------ | ------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance)          | Triggered before the object is loaded.                        |
| ready      | (readyObj: VcReadyObject)                        | Triggered when the object is loaded.                          |
| destroyed  | (instance: VcComponentInternalInstance)          | Triggered when the object is destroyed.                       |
| drawEvt    | (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer)   | Triggered when drawing.                                       |
| activeEvt  | (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) | Triggered when switching drawing actions.                     |
| editorEvt  | (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) | Triggered when clicking the edit button.                      |
| mouseEvt   | (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer)  | Triggered when the mouse moves over or leaves drawing points. |
| fabUpdated | (value: boolean)                                 | Triggered when the floating button expands or collapses.      |
| clearEvt   | (evt: object, viewer: Cesium.Viewer)             | Triggered when clearing drawings.                             |

### VcDrawings Methods

<!-- prettier-ignore -->
| Method | Parameters | Description |
| ----- | ---- | ---- |
| load | () => Promise\<false \| VcReadyObject\> | Manually load the component. |
| reload | () => Promise\<false \| VcReadyObject\> | Manually reload the component. |
| unload | () => Promise\<boolean\> | Manually unload the component. |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get a Promise object indicating whether the component was created successfully. |
| getCesiumObject | () => VcCesiumObject | Get the Cesium object loaded by this component. |
| clearAll | () => void | Clear all drawing objects. |
| activate | () => void | Activate drawing events. |
| deactivate | () => void | Deactivate drawing events. |
| toggleAction | (drawingOption: VcDrawingActionInstance \| string) => void | Toggle drawing instance. |
| getFabRef | () => VcFabRef | Get the floating button template reference. |
| getDrawingActionInstance | (actionName: string) => VcDrawingActionInstance | Get drawing instance by action name. |
| getDrawingActionInstances | () => Array\<VcDrawingActionInstance\> | Get all drawing instances. |
| getSelectedDrawingActionInstance | () => VcDrawingActionInstance | Get the selected drawing instance. |

### VcDrawings Slots

| Slot name | Description                                 |
| --------- | ------------------------------------------- |
| body      | Used to customize the drawing component UI. |
