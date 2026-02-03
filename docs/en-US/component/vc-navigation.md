## VcNavigation

Navigation components, including compass, zoom, other floating buttons, position and distance scale toolbar controls. It is composed of `vc-compass`, `vc-zoom-control`, `vc-print`, `vc-mylocation`, `vc-status-bar`, and `vc-distance-legend`.

**Note:** Style file need to be imported: `import 'vue-cesium/dist/index.css';`

:::tip

Tip: The navigation component has been refactored in version 3.0. It is now a collection component and now supports custom styles, including icons, sizes, color positions, etc. The icon currently uses Unicode and does not support multi-color. If you need to support multi-color, please refer to the method of using Symbol introduced by Alibaba Cloud iconfont: [Portal](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)

:::

### Basic usage

Basic usage of VcNavigation component.

:::demo

controls/vc-navigation/usage

:::

### Advanced usage

Customize navigation components as needed.

:::demo

controls/vc-navigation/usage-advanced

:::

### VcNavigation Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| position | string | `top-right` | `optional` Specify the position of the component. | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| customClass | string | `''` | `optional` Specify the customClass of the vc-navigation. | |
| teleportToViewer | boolean | `true` | `optional` Specify whether to add to the cesium-viewer node. If false, it becomes `relative` positioning. | |
| offset | [number, number] | `[0, 0]` | `optional` Specify the offset of the component. |
| compassOpts | VcCompassProps\|false | Same as `VcCompass` | `optional` Specify the compass options of the component. false means no display. |
| zoomOpts | VcZoomControlProps\|false | Same as `VcZoomControl` | `optional` Specify the zoom options of the component. false means no display. |
| printOpts | VcPrintProps\|false | Same as `VcPrint` | `optional` Specify the print options of the component. false means no display. |
| locationOpts | VcMyLocationProps\|false | Same as `VcMyLocation` | `optional` Specify the location options of the component. false means no display. |
| otherOpts | VcNavigationOtherOpts\|false | | `optional` Specify the other controls options of the component. false means no display. |

:::tip

Tip: For other controls (position bar and distance scale bar, regarded as a whole), the position is not controlled by VcNavigation.

:::

### VcNavigation Events

| Name              | Parameters                              | Description                                            |
| ----------------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the VcNavigation is loaded.            |
| ready             | (readyObj: VcReadyObject)               | Triggers when the VcNavigation is successfully loaded. |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the VcNavigation is destroyed.           |
| compassEvt        | (evt: VcCompassEvt)                     | Triggers when the compass control is operated.         |
| zoomEvt           | (evt: VcZoomEvt)                        | Triggers when the zoom control is operated.            |
| printEvt          | (evt: VcPrintEvt)                       | Triggers when the print control is operated.           |
| locationEvt       | (evt: VcLocationEvt)                    | Triggers when the location control is operated.        |
| statusBarEvt      | (evt: VcStatusBarEvt)                   | Triggers when the status bar is operated.              |
| distanceLegendEvt | (evt: VcDistanceLegendEvt)              | Triggers when the distance legend is operated.         |

### VcNavigation Methods

| Name               | Parameters                               | Description                                     |
| ------------------ | ---------------------------------------- | ----------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | Load components manually.                       |
| reload             | () => Promise\<false \| VcReadyObject\>  | Reload components manually.                     |
| unload             | () => Promise\<boolean\>                 | Destroy the loaded component manually.          |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get the creatingPromise.                        |
| getCesiumObject    | () => VcCesiumObject                     | Get the Cesium object loaded by this component. |

### VcNavigation Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where vc-navigation sub tags content goes. | vc-compass/vc-zoom-control/vc-print/vc-my-location/vc-status-bar/vc-distance-legend |
