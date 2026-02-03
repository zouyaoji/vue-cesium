## VcAnalyses

Loads the analysis tool component. Includes sightline analysis and viewshed analysis (3DTiles).

**Note:** Style files need to be imported: `import 'vue-cesium/dist/index.css';`

### Basic usage

Basic usage of VcAnalyses component.

:::demo

analyses/vc-analyses/usage

:::

### VcAnalyses Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ----- | --- | ------ | ---- | ----- |
| position | string | `'top-right'` | `optional` Specify the position of the analysis component. |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` Specify the offset of the analysis component. |
| show | boolean | `true` | `optional` Specify whether the analysis results are visible. |
| mode | number | `1` | `optional` Specify the drawing interaction mode, 0 for continuous drawing, 1 for one-time drawing.|
| analyses | Array\<'sightline' \| 'viewshed'\> | `['sightline', 'viewshed']` | `optional` Specify the analysis instances to load. |
| activeColor | string | `'positive'` | `optional` Specify the color when the analysis instance is activated. |
| editable | boolean | `false` | `optional` Specify whether the analysis result objects are editable. |
| mainFabOpts | VcActionTooltipProps & VcFabProps | | `optional` Specify the style options of the main floating button. |
| fabActionOpts | VcActionTooltipProps | | `optional` Specify the public style options of other analysis buttons. |

### VcAnalyses Events

| Event name | Parameters                                       | Description                                                   |
| ---------- | ------------------------------------------------ | ------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance)          | Triggered before the object is loaded.                        |
| ready      | (readyObj: VcReadyObject)                        | Triggered when the object is loaded.                          |
| destroyed  | (instance: VcComponentInternalInstance)          | Triggered when the object is destroyed.                       |
| drawEvt    | (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) | Triggered when analyzing.                                     |
| activeEvt  | (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer)   | Triggered when switching analysis actions.                    |
| editorEvt  | (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) | Triggered when clicking the edit button.                      |
| mouseEvt   | (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer)  | Triggered when the mouse moves over or leaves drawing points. |
| fabUpdated | (value: boolean)                                 | Triggered when the floating button expands or collapses.      |
| clearEvt   | (evt: object, viewer: Cesium.Viewer)             | Triggered when clearing analyses.                             |

### VcAnalyses Methods

<!-- prettier-ignore -->
| Method | Parameters | Description |
| ----- | ---- | ---- |
| load | () => Promise\<false \| VcReadyObject\> | Manually load the component. |
| reload | () => Promise\<false \| VcReadyObject\> | Manually reload the component. |
| unload | () => Promise\<boolean\> | Manually unload the component. |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get a Promise object indicating whether the component was created successfully. |
| getCesiumObject | () => VcCesiumObject | Get the Cesium object loaded by this component. |
| clearAll | () => void | Clear all analysis objects. |
| activate | () => void | Activate analysis events. |
| deactivate | () => void | Deactivate analysis events. |
| toggleAction | (drawingOption: VcDrawingActionInstance \| string) => void | Toggle analysis instance. |
| getFabRef | () => VcFabRef | Get the floating button template reference. |
| getDrawingActionInstance | (actionName: string) => VcDrawingActionInstance | Get analysis instance by action name. |
| getDrawingActionInstances | () => Array\<VcDrawingActionInstance\> | Get all analysis instances. |
| getSelectedDrawingActionInstance | () => VcDrawingActionInstance | Get the selected analysis instance. |

### VcAnalyses Slots

| Slot name | Description                                  |
| --------- | -------------------------------------------- |
| body      | Used to customize the analysis component UI. |

### References

- Viewshed Analysis: **[Helsing Blog](https://blog.csdn.net/fywindmoon/article/details/108415116)**
