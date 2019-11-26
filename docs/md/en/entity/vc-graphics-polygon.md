# PolygonGraphics

The `vc-graphics-polygon` component is used to load a polygon that defined by an hierarchy of linear rings which make up the outer shape and any nested holes. The polygon conforms to the curvature of the globe and can be placed on the surface or at altitude and can optionally be extruded into a volume.

## Examples

### Load PolygonGraphics with `vc-graphics-polygon`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :description="description" :polygon.sync="polygon1">
          <vc-graphics-polygon :hierarchy="hierarchy1" :material="material1"></vc-graphics-polygon>
        </vc-entity>
        <vc-entity :description="description" :polygon.sync="polygon2">
          <vc-graphics-polygon
            :hierarchy="hierarchy2"
            :material="material2"
            :extrudedHeight="500000.0"
            :closeTop="false"
            :closeBottom="false"
          ></vc-graphics-polygon>
        </vc-entity>
        <vc-entity :description="description" :polygon.sync="polygon3">
          <vc-graphics-polygon
            :hierarchy="hierarchy3"
            :material="material3"
            :extrudedHeight="0"
            :perPositionHeight="true"
            :outline="true"
            :outlineColor="outlineColor3"
          ></vc-graphics-polygon>
        </vc-entity>
        <vc-entity :description="description" :polygon.sync="polygon4">
          <vc-graphics-polygon :hierarchy="hierarchy4" :material="material4" :height="0" :outline="true"></vc-graphics-polygon>
        </vc-entity>
        <vc-entity :description="description" :polygon.sync="polygon5">
          <vc-graphics-polygon
            :hierarchy="hierarchy5"
            :material="material5"
            :perPositionHeight="true"
            :outline="true"
            :outlineColor="outlineColor5"
          ></vc-graphics-polygon>
        </vc-entity>
        <vc-entity :description="description" :polygon.sync="polygon6">
          <vc-graphics-polygon
            :hierarchy="hierarchy6"
            :material="material6"
            :extrudedHeight="50000"
            :outline="true"
            :outlineColor="outlineColor6"
            @ready="subReady"
          ></vc-graphics-polygon>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          polygon1: {},
          hierarchy1: [
            { lng: -115, lat: 37.0 },
            { lng: -115, lat: 32.0 },
            { lng: -107, lat: 33.0 },
            { lng: -102, lat: 31.0 },
            { lng: -102, lat: 35.0 }
          ],
          material1: 'red',

          polygon2: {},
          hierarchy2: [],
          material2: 'GREEN',

          polygon3: {},
          hierarchy3: [],
          material3: {},
          outlineColor3: {},

          polygon4: {},
          hierarchy4: {
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
          },
          material4: {},

          polygon5: {},
          hierarchy5: [],
          material5: {},
          outlineColor5: 'BLACK',

          polygon6: {},
          hierarchy6: [],
          material6: {},
          arcType6: {},
          outlineColor6: {}
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance

          this.hierarchy2 = [
            { lng: -108.0, lat: 42.0 },
            { lng: -100.0, lat: 42.0 },
            { lng: -104.0, lat: 40.0 }
          ]

          this.hierarchy3 = [
            { lng: -108.0, lat: 25.0, height: 100000 },
            { lng: -100.0, lat: 25.0, height: 100000 },
            { lng: -100.0, lat: 30.0, height: 100000 },
            { lng: -108.0, lat: 30.0, height: 100000 }
          ]

          this.materia3 = Cesium.Color.ORANGE.withAlpha(0.5)

          this.material4 = Cesium.Color.BLUE.withAlpha(0.5)

          this.material5 = Cesium.Color.CYAN.withAlpha(0.5)

          this.hierarchy6 = [
            { lng: -120.0, lat: 45.0 },
            { lng: -80.0, lat: 45.0 },
            { lng: -80.0, lat: 55.0 },
            { lng: -120.0, lat: 55.0 }
          ]
          this.material6 = Cesium.Color.PURPLE
          this.outlineColor6 = Cesium.Color.MAGENTA
        },
        subReady(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          viewer.zoomTo(viewer.entities)
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-entity :description="description" :polygon.sync="polygon1">
        <vc-graphics-polygon :hierarchy="hierarchy1" :material="material1"></vc-graphics-polygon>
      </vc-entity>
      <vc-entity :description="description" :polygon.sync="polygon2">
        <vc-graphics-polygon
          :hierarchy="hierarchy2"
          :material="material2"
          :extrudedHeight="500000.0"
          :closeTop="false"
          :closeBottom="false"
        ></vc-graphics-polygon>
      </vc-entity>
      <vc-entity :description="description" :polygon.sync="polygon3">
        <vc-graphics-polygon
          :hierarchy="hierarchy3"
          :material="material3"
          :extrudedHeight="0"
          :perPositionHeight="true"
          :outline="true"
          :outlineColor="outlineColor3"
        ></vc-graphics-polygon>
      </vc-entity>
      <vc-entity :description="description" :polygon.sync="polygon4">
        <vc-graphics-polygon :hierarchy="hierarchy4" :material="material4" :height="0" :outline="true"></vc-graphics-polygon>
      </vc-entity>
      <vc-entity :description="description" :polygon.sync="polygon5">
        <vc-graphics-polygon
          :hierarchy="hierarchy5"
          :material="material5"
          :perPositionHeight="true"
          :outline="true"
          :outlineColor="outlineColor5"
        ></vc-graphics-polygon>
      </vc-entity>
      <vc-entity :description="description" :polygon.sync="polygon6">
        <vc-graphics-polygon
          :hierarchy="hierarchy6"
          :material="material6"
          :extrudedHeight="50000"
          :outline="true"
          :outlineColor="outlineColor6"
          @ready="subReady"
        ></vc-graphics-polygon>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        polygon1: {},
        hierarchy1: [
          { lng: -115, lat: 37.0 },
          { lng: -115, lat: 32.0 },
          { lng: -107, lat: 33.0 },
          { lng: -102, lat: 31.0 },
          { lng: -102, lat: 35.0 }
        ],
        material1: 'red',

        polygon2: {},
        hierarchy2: [],
        material2: 'GREEN',

        polygon3: {},
        hierarchy3: [],
        material3: {},
        outlineColor3: {},

        polygon4: {},
        hierarchy4: {
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
        },
        material4: {},

        polygon5: {},
        hierarchy5: [],
        material5: {},
        outlineColor5: 'BLACK',

        polygon6: {},
        hierarchy6: [],
        material6: {},
        arcType6: {},
        outlineColor6: {}
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance

        this.hierarchy2 = [
          { lng: -108.0, lat: 42.0 },
          { lng: -100.0, lat: 42.0 },
          { lng: -104.0, lat: 40.0 }
        ]

        this.hierarchy3 = [
          { lng: -108.0, lat: 25.0, height: 100000 },
          { lng: -100.0, lat: 25.0, height: 100000 },
          { lng: -100.0, lat: 30.0, height: 100000 },
          { lng: -108.0, lat: 30.0, height: 100000 }
        ]

        this.materia3 = Cesium.Color.ORANGE.withAlpha(0.5)

        this.material4 = Cesium.Color.BLUE.withAlpha(0.5)

        this.material5 = Cesium.Color.CYAN.withAlpha(0.5)

        this.hierarchy6 = [
          { lng: -120.0, lat: 45.0 },
          { lng: -80.0, lat: 45.0 },
          { lng: -80.0, lat: 55.0 },
          { lng: -120.0, lat: 55.0 }
        ]
        this.material6 = Cesium.Color.PURPLE
        this.outlineColor6 = Cesium.Color.MAGENTA
      },
      subReady(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.zoomTo(viewer.entities)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the polygon. |
| hierarchy | Object\|Array | | `optional` A Property specifying the PolygonHierarchy. |
| height | Number | `0` | `optional` A numeric Property specifying the altitude of the polygon relative to the ellipsoid surface. |
| heightReference | Number | | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| extrudedHeight | Number | | `optional` A numeric Property specifying the altitude of the polygon's extruded face relative to the ellipsoid surface. |
| extrudedHeightReference | Number | | `optional` A Property specifying what the extrudedHeight is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| stRotation | Number\|Object | `0.0` | `optional` A numeric property specifying the rotation of the polygon texture counter-clockwise from north. |
| granularity | Number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude point. |
| fill | Boolean | `true` | `optional` A boolean Property specifying whether the polygon is filled with the provided material. |
| material | Object\|String\|Array | `'WHITE'` | `optional` A Property specifying the material used to fill the polygon. |
| outline | Boolean | `false` | `optional` A boolean Property specifying whether the polygon is outlined. |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `0` | `optional` A numeric Property specifying the the outline width in pixels. |
| perPositionHeight | Boolean | `false` | `optional` A boolean specifying whether or not the the height of each position is used. |
| closeTop | Boolean | `true` | `optional` When false, leaves off the top of an extruded polygon open. |
| closeBottom | Boolean | `true` | `optional` When false, leaves off the bottom of an extruded polygon open. |
| arcType | Number | `1` | `optional` The type of line the polygon edges must follow. **NONE: 0, GEODESIC: 1, RHUMB: 2** |
| shadows | Number | `0` | `optional` An enum Property specifying whether the polygon casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this polygon will be displayed. **structure: { near: number, far: number }** |
| classificationType | Number | `2` | `optional` An enum Property specifying whether this polygon will classify terrain, 3D Tiles, or both when on the ground. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3** |
| zIndex | Number | `0` | `optional` A property specifying the zIndex used for ordering ground geometry. Only has an effect if the polygon is constant and neither height or extrudedHeight are specified. |

---

- structure of hierarchy

```js
// Array
[{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}]
// Object
{
  positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}],
  holes: [
    {
      positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}],
      holes: [
        positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}]
        // ...
      ]
    }
  ]
}

```

- Refer to the official document: **[PolygonGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGraphics.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| definitionChanged | | Triggers whenever a property or sub-property is changed or modified. |

---
