## VcOverviewMap

Load the overview map control.

:::tip

Tip: Version 3.0 has refactored the overviewmap diagram component. The overviewmap diagram is essentially another `vc-viewer`, so the subcomponents of VueCesium can still be added to the overviewmap diagram.

:::

### Basic usage

The basic usage of the VcOverviewMap component.

:::demo

controls/vc-overview-map/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| position | string | `'bottom-right'` | `optional` Specify the location of the overviewmap component. | top-right/top-left/bottom-right/bottom-left |
| offset | [number, number] | `[0, 0]` | `optional` Specify the position-based offset of the overviewmap component. | |
| width | string | `'150px'` | `optional` Specify the width of the overviewmap component. |
| height | string | `'150px'` | `optional` Specify the height of the overviewmap component. |
| border | string | `'solid 4px rgb(255, 255, 255)'` | `optional` Specify the border of the overviewmap component. |
| borderRadius | string | | `optional` Specify the border radius of the overviewmap component. |
| toggleOpts | VcBtnTooltipProps & { show: boolean } | `show: true, color: '#fff', background: '#3f4854', icon: 'vc-icons-overview-toggle', size: '15px', tooltip: { delay: 500, anchor: 'bottom middle', offset: [0, 20], tip: void 0 } }` | `optional` Specify the toggle button options of the overviewmap component. |
| viewerOpts | VcViewerProps |`{ removeCesiumScript: false, showCredit: false, sceneMode: 2 }` | `optional` Specify the vc-viewer component options in the overviewmap component.|
| centerRectColor | VcColor | `'#ff000080'` | `optional` Specify the center rectangle color. |
| widthFactor | number | `2` | `optional` Specify the width factor of center rectangle. |
| heightFactor | number | `2` | `optional` Specify the height factor of center rectangle. |
| modelValue | boolean | `true` | `optional` Specify whether the control is expanded or collapsed. |

:::

### Events

| Name       | Parameters                              | Description                                             |
| ---------- | --------------------------------------- | ------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the VcOverviewMap is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the VcOverviewMap is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the VcOverviewMap is destroyed.           |

### Methods

| Name               | Parameters                               | Description                                     |
| ------------------ | ---------------------------------------- | ----------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | Load components manually.                       |
| reload             | () => Promise\<false \| VcReadyObject\>  | Reload components manually.                     |
| unload             | () => Promise\<boolean\>                 | Destroy the loaded component manually.          |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get the creatingPromise.                        |
| getCesiumObject    | () => VcCesiumObject                     | Get the Cesium object loaded by this component. |
