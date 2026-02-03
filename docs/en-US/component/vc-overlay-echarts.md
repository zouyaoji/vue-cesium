## VcOverlayEcharts

Loads ECharts visualization overlay on the 3D map. Integrates the ECharts library to display advanced 2D/3D visualizations in the Cesium coordinate system.

### Basic usage

Basic usage of VcOverlayEcharts component.

:::demo

overlays/vc-overlay-echarts/usage

:::

### VcOverlayEcharts Props

| Name             | Type             | Default  | Description                                                                    |
| ---------------- | ---------------- | -------- | ------------------------------------------------------------------------------ |
| options          | EChartsOption    |          | `optional` Specify the ECharts options.                                        |
| autoHidden       | boolean          | `false`  | `optional` Specify whether to hide the chart when it goes behind the Earth.    |
| coordinateSystem | string           |          | `optional` Specify the coordinate system, use 'cesium' for 3D map integration. |
| width            | string \| number | `'100%'` | `optional` Specify the width of the chart container.                           |
| height           | string \| number | `'100%'` | `optional` Specify the height of the chart container.                          |

### VcOverlayEcharts Events

| Event name | Parameters                              | Description                             |
| ---------- | --------------------------------------- | --------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggered before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggered when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggered when the object is destroyed. |

### VcOverlayEcharts Methods

| Method             | Parameters                                                           | Description                                                                     |
| ------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>                              | Manually load the component.                                                    |
| reload             | () => Promise\<false \| VcReadyObject\>                              | Manually reload the component.                                                  |
| unload             | () => Promise\<boolean\>                                             | Manually unload the component.                                                  |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject>                             | Get a Promise object indicating whether the component was created successfully. |
| getCesiumObject    | () => HTMLCanvasElement                                              | Get the canvas element loaded by this component.                                |
| getEchartsInstance | () => echarts.ECharts                                                | Get the ECharts instance.                                                       |
| setOption          | (option: EChartsOption, opts?: boolean \| EChartsOptionOpts) => void | Update ECharts options.                                                         |
| resize             | () => void                                                           | Resize the ECharts instance.                                                    |

### VcOverlayEcharts Dependencies

- echarts: Advanced visualization library with extensive chart types.

### Installation

```bash
npm install echarts
```

### ECharts Coordinate System

When using `coordinateSystem: 'cesium'`, the coordinate system will be automatically configured for use with Cesium 3D maps. Points should be specified as [longitude, latitude] pairs.

### References

- **[ECharts Official](https://echarts.apache.org/)**
- **[ECharts GL](https://github.com/ecomfe/echarts-gl)**
