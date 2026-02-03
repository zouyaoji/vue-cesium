## VcSelectionIndicator

Load a custom selector component to replace the selectionIndicator that comes with Cesium.

**Note:** If the picked object is `Cesium3DTileFeature` the position of the indicator is the center point of the bounding box of the object. If it is a manual model and you want a more precise position, please use the `position` attribute in the building attribute field to describe the position information of the feature, such as `'[108, 32]'` .

### Basic usage

Basic usage of the selector component.

:::demo

controls/vc-selection-indicator/usage

:::

### Props

| Name                     | Type     | Default | Description                                                                                         |
| ------------------------ | -------- | ------- | --------------------------------------------------------------------------------------------------- |
| show                     | boolean  | `true`  | `optional` Specifies whether the selection indicator is visible.                                    |
| width                    | number   | `50`    | `optional` Specify the width of the selection indicator.                                            |
| height                   | number   | `50`    | `optional` Specify the height of the selection indicator.                                           |
| allowFeatureInfoRequests | boolean  | `true`  | `optional` Asynchronously determines the imagery layer features that are intersected by a pick ray. |
| limit                    | number   | `25`    | `optional` Specify the maximum number of picked objects.                                            |
| includeImageryIds        | string[] |         | `optional` Specify an array of vcIds to include when picking image features.                        |
| excludeImageryIds        | string[] | `[]`    | `optional` Specify an array of vcIds to exclude when picking image features.                        |

### Events

| Name       | Parameters                              | Description                                                    |
| ---------- | --------------------------------------- | -------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the VcSelectionIndicator is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the VcSelectionIndicator is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the VcSelectionIndicator is destroyed.           |
| pickEvt    | selectedFeature                         | Triggers when picked up.                                       |

### Methods

<!-- prettier-ignore -->
| Name | Parameters | Description |
| ------------------ | --------------------------------------- | ----------------------------------------------- |
| load | () => Promise\<false \| VcReadyObject\> | Load components manually. |
| reload | () => Promise\<false \| VcReadyObject\> | Reload components manually. |
| unload | () => Promise\<boolean\> | Destroy the loaded component manually. |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get the creatingPromise. |
| getCesiumObject | () => VcCesiumObject | Get the Cesium object loaded by this component. |
| computeScreenSpacePosition | () => Cesium.Cartesian2 | A function that converts the world position of an object to a screen space position. |
| update | () => void | Updates the view of the selection indicator to match the position and content properties of the view model |
| animateAppear | () => void | Animate the indicator to draw attention to the selection. |
| animateDepart | () => void | Animate the indicator to release the selection. |
| getPickedFeatures | () => PickedFeatures| Get the picked features. |

### Members

| Name                                     | Description                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------- |
| position: Cesium.Cartesian3              | Gets or sets the world position of the object for which to display the selection indicator. |
| selectedFeature:Feature \| Cesium.Entity | Get or set the selected feature.                                                            |
