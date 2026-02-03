## VcCollectionCloud

Loading a cloud primitive collection is equivalent to initializing a `Cesium.CloudCollection` instance. When rendering multiple cloud primitives, it is recommended to use the `clouds` attribute.

### Basic usage

Basic usage of VcCollectionCloud component.

:::demo Use the `vc-collection-cloud` and `vc-cumulus-cloud` tag to add a CloudCollection object to the viewer.

primitives/vc-collection-cloud/usage

:::

### VcCollectionCloud Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| show | boolean | `true` | `optional` Whether to display the clouds. |
| noiseDetail | number | `16.0` | `optional` Desired amount of detail in the noise texture. |
| noiseOffset | VcPosition: VcPosition | `{x: 0, y: 0, z: 0}`|`optional` Desired translation of data in noise texture.|
| debugBillboards | boolean |`16.0`| `optional` For debugging only. Determines if the billboards are rendered with an opaque color. |
| debugEllipsoids | boolean |`16.0`| `optional` For debugging only. Determines if the clouds will be rendered as opaque ellipsoids. |
| clouds | Array\<VcCumulusCloudProps\> | `[]` | `optional` Specifies an array of cumulus collections. The array object structure is the same as the `vc-cumulus-cloud` component properties. |

### VcCollectionCloud Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### VcCollectionCloud Methods

| Name               | Parameters                               | Description                                     |
| ------------------ | ---------------------------------------- | ----------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | Load components manually.                       |
| reload             | () => Promise\<false \| VcReadyObject\>  | Reload components manually.                     |
| unload             | () => Promise\<boolean\>                 | Destroy the loaded component manually.          |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get the creatingPromise.                        |
| getCesiumObject    | () => VcCesiumObject                     | Get the Cesium object loaded by this component. |

### VcCollectionCloud Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where vc-cumulus-cloud tag content goes. | vc-cumulus-cloud |

### VcCumulusCloud

Loading cumulus cloud. It is equivalent to initializing a `Cesium.CumulusCloud` instance.

**Note:** It needs to be a subcomponent of `vc-collection-cloud` to load normally.

### VcCumulusCloud Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| brightness  | number | `1.0` | `optional` Specify the brightness of the cloud. This can be used to give clouds a darker, grayer appearance. |
| color | VcColor | `'white'` | `optional` Specify the color of the cloud. |
| maximumSize  | VcPosition | | `optional` Specify the maximum size of the cumulus cloud rendered on the billboard. This defines a maximum ellipsoid volume that the cloud can appear in. Rather than guaranteeing a specific size, this specifies a boundary for the cloud to appear in, and changing it can affect the shape of the cloud. |
| position | VcPosition | | `optional` Specify the Cartesian position of this cumulus cloud.|
| scale | VcCartesian2 | | `optional` Specify the scale of the cumulus cloud billboard in meters. The scale property will affect the size of the billboard, but not the cloud's actual appearance. |
| show | boolean | `true` | `optional` Determines if this cumulus cloud will be shown. Use this to hide or show a cloud, instead of removing it and re-adding it to the collection. |
| slice | number | `-1.0` | `optional` If slice is set to a negative number, the cloud will not render a cross-section. Instead, it will render the outside of the ellipsoid that is visible. For clouds with small values of `maximumSize.z`, this can produce good-looking results, but for larger clouds, this can result in a cloud that is undesirably warped to the ellipsoid volume. |

### VcCumulusCloud Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### VcCumulusCloud Methods

| Name               | Parameters                               | Description                                     |
| ------------------ | ---------------------------------------- | ----------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | Load components manually.                       |
| reload             | () => Promise\<false \| VcReadyObject\>  | Reload components manually.                     |
| unload             | () => Promise\<boolean\>                 | Destroy the loaded component manually.          |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get the creatingPromise.                        |
| getCesiumObject    | () => VcCesiumObject                     | Get the Cesium object loaded by this component. |

### Reference

- Refer to the official documentation: **[CloudCollection](https://cesium.com/docs/cesiumjs-ref-doc/CloudCollection.html)**、**[CumulusCloud](https://cesium.com/docs/cesiumjs-ref-doc/CumulusCloud.html)**
