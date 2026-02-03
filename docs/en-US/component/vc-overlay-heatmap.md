## VcOverlayHeatmap

Loads heatmap overlays on the 3D map. Heatmap is useful for visualizing data density, such as population distribution, pollution concentration, etc.

### Basic usage

Basic usage of VcOverlayHeatmap component.

:::demo

overlays/vc-overlay-heatmap/usage

:::

### VcOverlayHeatmap Props

| Name      | Type                                       | Default       | Description                                                                                      |
| --------- | ------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------ |
| data      | Array\<[number, number, number]\>          |               | `optional` Specify the heatmap data. Each point should be [longitude, latitude, value].          |
| rectangle | VcRectangle                                |               | `optional` Specify the geographic rectangle for the heatmap.                                     |
| max       | number                                     | `100`         | `optional` Specify the maximum value for heatmap normalization.                                  |
| min       | number                                     | `0`           | `optional` Specify the minimum value for heatmap normalization.                                  |
| options   | HeatmapOptions                             |               | `optional` Specify heatmap.js library options.                                                   |
| type      | 'primitive' \| 'entity' \| 'imagery-layer' | `'primitive'` | `optional` Specify the type of heatmap overlay.                                                  |
| segments  | Array\<[number, string]\>                  |               | `optional` Specify custom color mapping for different value ranges. Each item is [value, color]. |

### VcOverlayHeatmap Events

| Event name | Parameters                              | Description                             |
| ---------- | --------------------------------------- | --------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggered before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggered when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggered when the object is destroyed. |

### VcOverlayHeatmap Methods

| Method             | Parameters                               | Description                                                                     |
| ------------------ | ---------------------------------------- | ------------------------------------------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | Manually load the component.                                                    |
| reload             | () => Promise\<false \| VcReadyObject\>  | Manually reload the component.                                                  |
| unload             | () => Promise\<boolean\>                 | Manually unload the component.                                                  |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get a Promise object indicating whether the component was created successfully. |
| getCesiumObject    | () => VcCesiumObject                     | Get the Cesium object loaded by this component.                                 |

### VcOverlayHeatmap Dependencies

- heatmap.js: Used for heatmap calculation and visualization.

### Installation

```bash
npm install heatmap.js
```

### References

- **[heatmap.js GitHub](https://github.com/pa7/heatmap.js)**
