## VcOverlayHtml

Loads HTML overlays on the 3D map. By passing in HTML elements or Vue components, they will be rendered at the specified geographic location on the map.

**Note:** The Vue component slot in the component should contain a single element.

### Basic usage

Basic usage of VcOverlayHtml component.

:::demo

overlays/vc-overlay-html/usage

:::

### VcOverlayHtml Props

| Name        | Type             | Default  | Description                                                                   |
| ----------- | ---------------- | -------- | ----------------------------------------------------------------------------- |
| position    | VcPosition       |          | `required` Specify the geographic position of the overlay.                    |
| pixelOffset | [number, number] | `[0, 0]` | `optional` Specify the pixel offset from the position.                        |
| autoHidden  | boolean          | `true`   | `optional` Specify whether to hide the overlay when it goes behind the Earth. |
| customClass | string           |          | `optional` Specify custom CSS classes for the overlay element.                |

### VcOverlayHtml Events

| Event name | Parameters                              | Description                             |
| ---------- | --------------------------------------- | --------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggered before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggered when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggered when the object is destroyed. |

### VcOverlayHtml Methods

| Method             | Parameters                               | Description                                                                     |
| ------------------ | ---------------------------------------- | ------------------------------------------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | Manually load the component.                                                    |
| reload             | () => Promise\<false \| VcReadyObject\>  | Manually reload the component.                                                  |
| unload             | () => Promise\<boolean\>                 | Manually unload the component.                                                  |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get a Promise object indicating whether the component was created successfully. |
| getCesiumObject    | () => HTMLElement                        | Get the HTML element loaded by this component.                                  |

### VcOverlayHtml Slots

| Slot name | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| default   | Used to define the HTML content or Vue component of the overlay. |

### References

- **[Cesium Sandbox](https://cesium.com/learn/cesiumjs/)**
