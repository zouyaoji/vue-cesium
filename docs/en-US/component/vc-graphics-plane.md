## VcGraphicsPlane

Loading a plane graphic. It is equivalent to initializing a `Cesium.PlaneGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsPlane component.

:::demo

graphics/vc-graphics-plane/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the plane. |
| plane | VcPlane\|Array | | `optional` A VcPlane Property specifying the normal and distance of the plane. |
| dimensions | VcPosition\|Array | | `optional` A VcPosition Property specifying the width and height of the plane. |
| fill | boolean | `true` | `optional` A boolean Property specifying whether the plane is filled with the provided material. |
| material | VcMaterial\|string\|Array | `'WHITE'` | `optional` A Material Property specifying the appearance of the plane. |
| outline | boolean | `false` | `optional` A boolean Property specifying whether the plane outline is displayed. |
| outlineColor | VcColor\|string\|Array | `'BLACK'` | `optional` A Color Property specifying the color of the outline. |
| outlineWidth | number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | number | `0` | `optional` An enum Property specifying whether the plane casts or receives shadows. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this plane will be displayed. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[PlaneGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PlaneGraphics.html)**
