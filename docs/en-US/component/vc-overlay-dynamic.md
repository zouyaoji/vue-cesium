## VcOverlayDynamic

Loads dynamic/animated object overlays on the 3D map. It supports animating objects along predefined paths with synchronized timeline control. Supports both real-time trajectory updates and historical trajectory playback.

### Basic usage

Basic usage of VcOverlayDynamic component.

:::demo

overlays/vc-overlay-dynamic/usage

:::

### VcOverlayDynamic Props

| Name            | Type                      | Default              | Description                                                                                   |
| --------------- | ------------------------- | -------------------- | --------------------------------------------------------------------------------------------- |
| dynamicOverlays | Array\<VcDynamicOverlay\> |                      | `optional` Specify the dynamic overlay objects array.                                         |
| currentTime     | number                    | Date.now()           | `optional` Specify the current animation time.                                                |
| startTime       | number                    | Date.now()           | `optional` Specify the start time of the animation.                                           |
| stopTime        | number                    | Date.now() + 3600000 | `optional` Specify the stop time of the animation.                                            |
| shouldAnimate   | boolean                   | `true`               | `optional` Specify whether to enable automatic animation.                                     |
| trackingMode    | string                    | `'TRACKED'`          | `optional` Specify the camera tracking mode: TRACKED, TP (top-down), FP (first-person), FREE. |
| showPath        | boolean                   | `true`               | `optional` Specify whether to show the trajectory path.                                       |
| showLabel       | boolean                   | `true`               | `optional` Specify whether to show the label.                                                 |

### VcOverlayDynamic Events

| Event name | Parameters                              | Description                             |
| ---------- | --------------------------------------- | --------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggered before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggered when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggered when the object is destroyed. |

### VcOverlayDynamic Methods

| Method             | Parameters                                                | Description                                                                     |
| ------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>                   | Manually load the component.                                                    |
| reload             | () => Promise\<false \| VcReadyObject\>                   | Manually reload the component.                                                  |
| unload             | () => Promise\<boolean\>                                  | Manually unload the component.                                                  |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject>                  | Get a Promise object indicating whether the component was created successfully. |
| getCesiumObject    | () => VcCesiumObject                                      | Get the Cesium object loaded by this component.                                 |
| getOverlay         | (id: string \| number) => VcDynamicOverlay\|undefined     | Get a single dynamic overlay by ID.                                             |
| getOverlays        | () => Array\<VcDynamicOverlay\>                           | Get all dynamic overlays.                                                       |
| flyToOverlay       | (id: string \| number, duration?: number) => void         | Fly the camera to a specific overlay.                                           |
| zoomToOverlay      | (id: string \| number, options?: VcZoomToOptions) => void | Zoom to a specific overlay.                                                     |
| trackOverlay       | (id: string \| number) => void                            | Start tracking a specific overlay.                                              |

### VcOverlayDynamic Interfaces

```typescript
interface VcDynamicOverlay {
  id?: string | number
  model: string // Model URL
  position?: [number, number, number] // Initial position [lng, lat, height]
  path?: Array<[number, number, number]> // Path points
  startTime?: number // Start time in milliseconds
  endTime?: number // End time in milliseconds
  label?: string // Label text
  sampledPositions?: Array<Cesium.Cartesian3> // Sampled positions for animation
  heading?: number // Heading angle
  pitch?: number // Pitch angle
  roll?: number // Roll angle
}
```
