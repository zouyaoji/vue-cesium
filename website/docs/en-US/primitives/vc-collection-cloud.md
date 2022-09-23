## VcCollectionCloud

Loading a cloud primitive collection is equivalent to initializing a `Cesium.CloudCollection` instance. When rendering multiple cloud primitives, it is recommended to use the `clouds` attribute.

### Basic usage

Basic usage of VcCollectionCloud component.

:::demo Use the `vc-collection-cloud` and `vc-cumulus-cloud` tag to add a CloudCollection object to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-collection-cloud ref="cloudCollectionRef" :clouds="clouds">
      <vc-cumulus-Cloud :position="[-122.6908, 45.496, 300]" :maximumSize="{x: 50, y: 15, z: 13}" :slice="0.3" :scale="[1500,250]"></vc-cumulus-Cloud>
    </vc-collection-cloud>
    <vc-layer-imagery>
      <vc-imagery-provider-bing
        ref="provider"
        bm-key="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"
        map-style="Aerial"
      ></vc-imagery-provider-bing>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const cloudCollectionRef = ref(null)
      const clouds = ref([])
      const instance = getCurrentInstance()
      // methods
      const unload = () => {
        cloudCollectionRef.value.unload()
      }
      const reload = () => {
        cloudCollectionRef.value.reload()
      }
      const load = () => {
        cloudCollectionRef.value.load()
      }
      const onViewerReady = ({ Cesium, viewer }) => {
        const scene = viewer.scene
        scene.primitives.add(Cesium.createOsmBuildings())
        // clouds.value.push({
        //   position: [-122.6908, 45.496, 300],
        //   scale: [1500, 250],
        //   maximumSize: { x: 50, y: 15, z: 13 },
        //   slice: 0.3
        // })
        clouds.value.push({
          position: [-122.72, 45.5, 335],
          scale: [1500, 300],
          maximumSize: { x: 50, y: 12, z: 15 },
          slice: 0.36
        })
        clouds.value.push({
          position: [-122.72, 45.51, 260],
          scale: [2000, 300],
          maximumSize: { x: 50, y: 12, z: 15 },
          slice: 0.49
        })
        clouds.value.push({
          position: [-122.705, 45.52, 250],
          scale: [230, 110],
          maximumSize: { x: 13, y: 13, z: 13 },
          slice: 0.2
        })
        clouds.value.push({
          position: [-122.71, 45.522, 270],
          scale: [1700, 300],
          maximumSize: { x: 50, y: 12, z: 15 },
          slice: 0.6
        })
        clouds.value.push({
          position: [-122.705, 45.525, 250],
          scale: [230, 110],
          maximumSize: { x: 15, y: 13, z: 15 },
          slice: 0.35
        })
        clouds.value.push({
          position: [-122.721, 45.53, 220],
          scale: [1500, 500],
          maximumSize: { x: 30, y: 20, z: 17 },
          slice: 0.45
        })

        viewer.scene.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(-122.6515, 45.5252, 525),
          orientation: {
            heading: Cesium.Math.toRadians(-115),
            pitch: Cesium.Math.toRadians(-12),
            roll: 0.0
          }
        })
      }

      return {
        unload,
        reload,
        load,
        onViewerReady,
        cloudCollectionRef,
        clouds
      }
    }
  }
</script>
```

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
