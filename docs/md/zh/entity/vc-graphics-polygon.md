# PolygonGraphics

`vc-graphics-polygon` 组件用于加载多边形或者岛状多边形，可以拉伸为一个体。需要作为 `vc-entity` 的子组件使用。

## 示例

### 加载多边形

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :description="description" :polygon.sync="polygon1">
          <vc-graphics-polygon ref="polygon1" :hierarchy="hierarchy1" :material="material1"></vc-graphics-polygon>
        </vc-entity>
        <vc-entity :description="description" :polygon.sync="polygon2">
          <vc-graphics-polygon
            :hierarchy="hierarchy2"
            :material="material2"
            :extrudedHeight="500000.0"
            :closeTop="false"
            :closeBottom="false"
            ref="polygon2"
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
            ref="polygon3"
          ></vc-graphics-polygon>
        </vc-entity>
        <vc-entity :description="description" :polygon.sync="polygon4">
          <vc-graphics-polygon
            :hierarchy="hierarchy4"
            :material="material4"
            :height="0"
            :outline="true"
            ref="polygon4"
          ></vc-graphics-polygon>
        </vc-entity>
        <vc-entity :description="description" :polygon.sync="polygon5">
          <vc-graphics-polygon
            :hierarchy="hierarchy5"
            :material="material5"
            :perPositionHeight="true"
            :outline="true"
            :outlineColor="outlineColor5"
            ref="polygon5"
          ></vc-graphics-polygon>
        </vc-entity>
        <vc-entity :description="description" :polygon.sync="polygon6">
          <vc-graphics-polygon
            :hierarchy="hierarchy6"
            :material="material6"
            :extrudedHeight="50000"
            :outline="true"
            :outlineColor="outlineColor6"
            ref="polygon6"
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
      mounted() {
        Promise.all([
          this.$refs.polygon1.createPromise,
          this.$refs.polygon2.createPromise,
          this.$refs.polygon3.createPromise,
          this.$refs.polygon4.createPromise,
          this.$refs.polygon5.createPromise,
          this.$refs.polygon6.createPromise
        ]).then((instances) => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
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
          this.hierarchy5 = Cesium.Cartesian3.fromDegreesArrayHeights([-90.0, 41.0, 0.0, -85.0, 41.0, 500000.0, -80.0, 41.0, 0.0])

          this.hierarchy6 = [
            { lng: -120.0, lat: 45.0 },
            { lng: -80.0, lat: 45.0 },
            { lng: -80.0, lat: 55.0 },
            { lng: -120.0, lat: 55.0 }
          ]
          this.material6 = Cesium.Color.PURPLE
          this.outlineColor6 = Cesium.Color.MAGENTA
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-entity :description="description" :polygon.sync="polygon1">
        <vc-graphics-polygon ref="polygon1" :hierarchy="hierarchy1" :material="material1"></vc-graphics-polygon>
      </vc-entity>
      <vc-entity :description="description" :polygon.sync="polygon2">
        <vc-graphics-polygon
          :hierarchy="hierarchy2"
          :material="material2"
          :extrudedHeight="500000.0"
          :closeTop="false"
          :closeBottom="false"
          ref="polygon2"
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
          ref="polygon3"
        ></vc-graphics-polygon>
      </vc-entity>
      <vc-entity :description="description" :polygon.sync="polygon4">
        <vc-graphics-polygon
          :hierarchy="hierarchy4"
          :material="material4"
          :height="0"
          :outline="true"
          ref="polygon4"
        ></vc-graphics-polygon>
      </vc-entity>
      <vc-entity :description="description" :polygon.sync="polygon5">
        <vc-graphics-polygon
          :hierarchy="hierarchy5"
          :material="material5"
          :perPositionHeight="true"
          :outline="true"
          :outlineColor="outlineColor5"
          ref="polygon5"
        ></vc-graphics-polygon>
      </vc-entity>
      <vc-entity :description="description" :polygon.sync="polygon6">
        <vc-graphics-polygon
          :hierarchy="hierarchy6"
          :material="material6"
          :extrudedHeight="50000"
          :outline="true"
          :outlineColor="outlineColor6"
          ref="polygon6"
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
    mounted() {
      Promise.all([
        this.$refs.polygon1.createPromise,
        this.$refs.polygon2.createPromise,
        this.$refs.polygon3.createPromise,
        this.$refs.polygon4.createPromise,
        this.$refs.polygon5.createPromise,
        this.$refs.polygon6.createPromise
      ]).then((instances) => {
        instances[0].viewer.zoomTo(instances[0].viewer.entities)
      })
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
        this.hierarchy5 = Cesium.Cartesian3.fromDegreesArrayHeights([-90.0, 41.0, 0.0, -85.0, 41.0, 500000.0, -80.0, 41.0, 0.0])

        this.hierarchy6 = [
          { lng: -120.0, lat: 45.0 },
          { lng: -80.0, lat: 45.0 },
          { lng: -80.0, lat: 55.0 },
          { lng: -120.0, lat: 55.0 }
        ]
        this.material6 = Cesium.Color.PURPLE
        this.outlineColor6 = Cesium.Color.MAGENTA
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------------------ | ------------- | ----------- | -------------------------------------------------------- |
| show | Boolean | `true` | `optional` 指定 polygon 是否显示。 |
| hierarchy | Object\|Array | | `optional` 指定 polygon 的 PolygonHierarchy 属性。|
| height | Number | `0` | `optional` 指定 polygon 的高度。 |
| heightReference | Number | | `optional` 指定 polygon 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| extrudedHeight | Number | | `optional` 指定 polygon 拉伸高度。 |
| extrudedHeightReference | Number | | `optional` 指定 polygon 拉伸的高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| stRotation | Number\|Object | `0.0` | `optional` 指定 polygon 纹理按正北方向逆时针旋转角度。 |
| granularity | Number | | `optional` 指定每个经纬度之间的采样粒度。 |
| fill | Boolean | `true` | `optional` 指定 polygon 是否填充材质。 |
| material | Object\|String\|Array | `'white'` | `optional` 指定 polygon 材质。 |
| outline | Boolean | `false` | `optional` 指定 polygon 是否绘制轮廓线。 |
| outlineColor | Object\|String\|Array | `'black'` | `optional` 指定 polygon 轮廓线颜色。 |
| outlineWidth | Number | `1.0` | `optional` 指定 polygon 轮廓线宽度。 |
| perPositionHeight | Boolean | `false` | `optional` 指定 polygon 是否使用每个位置的高度。 |
| closeTop | Boolean | `true` | `optional` 指定 polygon 拉伸出来的顶部是否闭合。 |
| closeBottom | Boolean | `true` | `optional` 指定 polygon 拉伸出来的底部是否闭合。 |
| arcType | Number | `1` | `optional` 指定 polygon 线条类型。**NONE: 0, GEODESIC: 1, RHUMB: 2** |
| shadows | Number | `0` | `optional` 指定 polygon 是否投射或接收阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` 指定 polygon 随相机距离改变是否显示参数。**结构：{ near: number, far: number }** |
| classificationType | Number | `2` | `optional` 指定 polygon 贴对象模式。 **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3**|
| zIndex | Number | `0` | `optional` 指定 polygon 顺序，没有高度和拉伸高度时有效。 |

---

- hierarchy 结构

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

- 参考官方文档： **[PolygonGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGraphics.html)**

## 事件

| 事件名            | 参数                           | 描述                                                                             |
| ----------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| definitionChanged |                                | 每当更改或修改属性或子属性时触发该事件。                                         |

---
