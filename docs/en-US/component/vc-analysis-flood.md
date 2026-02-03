## VcAnalysisFlood

Loads the flood analysis component. It essentially uses `vc-primitive-classification` to load `vc-geometry-polygon`, and simulates a flood analysis by dynamically modifying the `extrudedHeight` property of the `vc-geometry-polygon` to stretch it into a closed volume object.

**Note** The scene needs to load terrain or 3DTiles.

### Basic usage

Basic usage of VcAnalysisFlood component.

:::demo

analyses/vc-analysis-flood/usage

:::

### VcAnalysisFlood Props

| Name             | Type               | Default                  | Description                                                                                  |
| ---------------- | ------------------ | ------------------------ | -------------------------------------------------------------------------------------------- |
| polygonHierarchy | VcPolygonHierarchy |                          | `required` Specify the latitude and longitude array for building the flood analysis polygon. |
| minHeight        | number             | `-1 `                    | `optional` Specify the minimum elevation.                                                    |
| maxHeight        | number             | `8888`                   | `optional` Specify the maximum elevation.                                                    |
| speed            | number             | `10`                     | `optional` Specify the height increase per frame.                                            |
| color            | VcColor            | `'rgba(40,150,200,0.6)'` | `optional` Specify the color of the flood analysis object.                                   |
| loop             | boolean            | `false`                  | `optional` Specify whether to restart after reaching the maximum elevation.                  |

### VcAnalysisFlood Events

| Event name | Parameters                              | Description                                    |
| ---------- | --------------------------------------- | ---------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggered before the object is loaded.         |
| ready      | (readyObj: VcReadyObject)               | Triggered when the object is loaded.           |
| destroyed  | (instance: VcComponentInternalInstance) | Triggered when the object is destroyed.        |
| stop       | (evt: Cesium.ClassificationPrimitive)   | Triggered when reaching the maximum elevation. |

### VcAnalysisFlood Methods

| Method             | Parameters                               | Description                                                                     |
| ------------------ | ---------------------------------------- | ------------------------------------------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | Manually load the component.                                                    |
| reload             | () => Promise\<false \| VcReadyObject\>  | Manually reload the component.                                                  |
| unload             | () => Promise\<boolean\>                 | Manually unload the component.                                                  |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get a Promise object indicating whether the component was created successfully. |
| getCesiumObject    | () => VcCesiumObject                     | Get the Cesium object loaded by this component.                                 |
| start              | (height?: number) => void                | Start flood analysis.                                                           |
| pause              | () => void                               | Pause/Resume flood analysis.                                                    |
| stop               | () => void                               | Stop flood analysis.                                                            |
| getCurrentHeight   | () => number                             | Get the current extrusion height.                                               |
