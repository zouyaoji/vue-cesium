# VcPostProcessStageCollection

Loading post-processing effects collection, managing a group of post-processing effects.

Can be used to mount `vc-post-process-stage` and `vc-post-process-stage-scan` components.

## Basic usage

Basic usage of VcPostProcessStageCollection component.

:::demo Use the `vc-post-process-stage-collection` tag to add a set of post-processing effects to the viewer.

post-processes/vc-post-process-stage-collection/usage

:::

## Props

| Name          | Type  | Default | Description                                                                                                  |
| ------------- | ----- | ------- | ------------------------------------------------------------------------------------------------------------ |
| postProcesses | Array |         | `optional` Specify a post-processing collection. The properties are consistent with `vc-post-process-stage`. |

## Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

## Slots

| Name    | Description                               | Sub Components                                   |
| ------- | ----------------------------------------- | ------------------------------------------------ |
| default | Used to mount post-processing components. | vc-post-process-stage/vc-post-process-stage-scan |

## Reference

- Official document: [PostProcessStageCollection](https://cesium.com/docs/cesiumjs-ref-doc/PostProcessStageCollection.html)
