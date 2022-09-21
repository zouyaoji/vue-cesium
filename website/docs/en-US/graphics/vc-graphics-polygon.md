## VcGraphicsPolygon

Loading a polygon graphic. It is equivalent to initializing a `Cesium.PolygonGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of VcGraphicsPolygon component.

:::demo Use the `vc-graphics-polygon` tag to add some polygons to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-polygon ref="polygon1" :hierarchy="[[-115,37],[-115,32],[-107,33],[-102,31],[-102,35]]" material="red"></vc-graphics-polygon>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-polygon
        :hierarchy="[{ lng: -108.0, lat: 42.0 }, { lng: -100.0, lat: 42.0 }, { lng: -104.0, lat: 40.0 }]"
        material="green"
        :extrudedHeight="500000.0"
        :closeTop="false"
        :closeBottom="false"
        ref="polygon2"
      ></vc-graphics-polygon>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-polygon
        :hierarchy="[[-108,25,100000],[-100,25,100000],[-100,30,100000],[-108,30,100000]]"
        :material="[255,165,0,125]"
        :extrudedHeight="0"
        :perPositionHeight="true"
        :outline="true"
        outlineColor="black"
        ref="polygon3"
      ></vc-graphics-polygon>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-polygon :hierarchy="hierarchy4" :material="[0,0,255,125]" :height="0" :outline="true" ref="polygon4"></vc-graphics-polygon>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-polygon
        :hierarchy="[-90.0, 41.0, 0.0, -85.0, 41.0, 500000.0, -80.0, 41.0, 0.0]"
        :material="[0,255,255,125]"
        :perPositionHeight="true"
        :outline="true"
        outlineColor="black"
        ref="polygon5"
      ></vc-graphics-polygon>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-polygon
        :hierarchy="[[-120,45],[-80,45],[-80,55],[-120,55]]"
        material="purple"
        :extrudedHeight="50000"
        :outline="true"
        outlineColor="magenta"
        ref="polygon6"
      ></vc-graphics-polygon>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const polygon1 = ref(null)
      const polygon2 = ref(null)
      const polygon3 = ref(null)
      const polygon4 = ref(null)
      const polygon5 = ref(null)
      const polygon6 = ref(null)
      const hierarchy4 = {
        positions: [
          { lng: -99.0, lat: 30.0 },
          { lng: -85.0, lat: 30.0 },
          { lng: -85.0, lat: 40.0 },
          { lng: -99.0, lat: 40.0 }
        ],
        holes: [
          {
            positions: [
              { lng: -97.0, lat: 31.0 },
              { lng: -97.0, lat: 39.0 },
              { lng: -87.0, lat: 39.0 },
              { lng: -87.0, lat: 31.0 }
            ],
            holes: [
              {
                positions: [
                  { lng: -95.0, lat: 33.0 },
                  { lng: -89.0, lat: 33.0 },
                  { lng: -89.0, lat: 37.0 },
                  { lng: -95.0, lat: 37.0 }
                ],
                holes: [
                  {
                    positions: [
                      { lng: -93.0, lat: 34.0 },
                      { lng: -91.0, lat: 34.0 },
                      { lng: -91.0, lat: 36.0 },
                      { lng: -93.0, lat: 36.0 }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }
      // life cycle
      onMounted(() => {
        Promise.all([
          polygon1.value.creatingPromise,
          polygon1.value.creatingPromise,
          polygon1.value.creatingPromise,
          polygon4.value.creatingPromise,
          polygon5.value.creatingPromise,
          polygon6.value.creatingPromise
        ]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        polygon1,
        polygon2,
        polygon3,
        polygon4,
        polygon5,
        polygon6,
        onViewerReady,
        hierarchy4
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the polygon. |
| hierarchy | Object\|Array | | `optional` A Property specifying the PolygonHierarchy. |
| height | number | `0` | `optional` A numeric Property specifying the altitude of the polygon relative to the ellipsoid surface. |
| heightReference | number | | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| extrudedHeight | number | | `optional` A numeric Property specifying the altitude of the polygon's extruded face relative to the ellipsoid surface. |
| extrudedHeightReference | number | | `optional` A Property specifying what the extrudedHeight is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| stRotation | number | `0.0` | `optional` A numeric property specifying the rotation of the polygon texture counter-clockwise from north. |
| granularity | number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude point. |
| fill | boolean | `true` | `optional` A boolean Property specifying whether the polygon is filled with the provided material. |
| material | VcMaterial\|string\|Array | `'white'` | `optional` A Property specifying the material used to fill the polygon. |
| outline | boolean | `false` | `optional` A boolean Property specifying whether the polygon is outlined. |
| outlineColor | VcColor\|string\|Array | `'black'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | number | `0` | `optional` A numeric Property specifying the the outline width in pixels. |
| perPositionHeight | boolean | `false` | `optional` A boolean specifying whether or not the the height of each position is used. |
| closeTop | boolean | `true` | `optional` When false, leaves off the top of an extruded polygon open. |
| closeBottom | boolean | `true` | `optional` When false, leaves off the bottom of an extruded polygon open. |
| arcType | number | `1` | `optional` The type of line the polygon edges must follow. **NONE: 0, GEODESIC: 1, RHUMB: 2** |0/1/2|
| shadows | number | `0` | `optional` An enum Property specifying whether the polygon casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this polygon will be displayed.  |
| classificationType | number | `2` | `optional` An enum Property specifying whether this polygon will classify terrain, 3D Tiles, or both when on the ground. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2**|0/1/2|
| zIndex | number | `0` | `optional` A property specifying the zIndex used for ordering ground geometry. Only has an effect if the polygon is constant and neither height or extrudedHeight are specified. |

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                         | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[PolygonGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGraphics.html)**
