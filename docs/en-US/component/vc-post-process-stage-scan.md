# VcPostProcessStageScan

Scanning effect encapsulated through post-processing, radar scanning and circular scanning.

## Basic usage

Basic usage of VcPostProcessStageScan component.

:::demo Use the `vc-post-process-stage-scan` tag to add a post-processing scanning effect to the viewer.

post-processes/vc-post-process-stage-scan/usage

:::

## Props

| Name    | Type                 | Default                                                                     | Description                                                              |
| ------- | -------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| type    | string               | `'radar'`                                                                   | `optional` Specify the scan type, optional values are 'radar', 'circle'. |
| options | HeatmapConfiguration | `{ position: [0, 0], radius: 1500, interval: 3500, color: [0, 0, 0, 255] }` | `optional` Specify optional parameters.                                  |

## Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |
