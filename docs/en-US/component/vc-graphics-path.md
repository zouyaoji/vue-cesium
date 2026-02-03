## VcGraphicsPath

Loading a path graphic. It is equivalent to initializing a `Cesium.PathGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsPath component.

:::demo

graphics/vc-graphics-path/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the path. |
| leadTime | number | | `optional` A numeric Property specifying the number of seconds in front of the object to show. |
| trailTime | number | | `optional` A numeric Property specifying the number of seconds behind the object to show. |
| width | number | `1.0` | `optional` A numeric Property specifying the width of the path in pixels. |
| resolution | number | `60` | `optional` A numeric Property specifying the maximum number of seconds to step when sampling the position. |
| material | VcMaterial\|string\|Array | `'white'` | `optional` A Material Property specifying the appearance of the path. |
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this path will be displayed. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[PathGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PathGraphics.html)**
