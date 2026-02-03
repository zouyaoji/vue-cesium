## VcGraphicsWall

Loading a wall graphic. It is equivalent to initializing a `Cesium.WallGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsWall component.

:::demo

graphics/vc-graphics-wall/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the wall. |
| positions | Array | | `optional` An array Property specifying the positions of the top of the wall. |
| minimumHeights | Array | | `optional` An array Property specifying the minimum heights of the wall. |
| maximumHeights | Array | | `optional` An array Property specifying the maximum heights of the wall. |
| granularity | number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude. |
| fill | boolean | `true` | `optional` A boolean Property specifying whether the wall is filled with the provided material. |
| material | VcMaterial\|string\|Array | `'white'` | `optional` A Material Property specifying the appearance of the wall. |
| outline | boolean | `false` | `optional` A boolean Property specifying whether the wall outline is displayed. |
| outlineColor | VcColor\|string\|Array | `'black'` | `optional` A Color Property specifying the color of the outline. |
| outlineWidth | number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | number | `0` | `optional` An enum Property specifying whether the wall casts or receives shadows. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this wall will be displayed. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[WallGraphics](https://cesium.com/docs/cesiumjs-ref-doc/WallGraphics.html)**
