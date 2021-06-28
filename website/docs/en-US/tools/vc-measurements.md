## VcMeasurements

Load measurement tool components, including distance measurement, component distance measurement, polyline distance measurement, horizontal distance measurement, vertical distance measurement, height measurement, area measurement, and point coordinate measurement.

**Note:** Style files need to be imported: `import'vue-cesium/lib/theme-default/index.css';`

:::tip

Tip: Version 3.0 has restructured the measurement component into one component, which is simple and supports custom styles, and optimizes the interaction.

The drawing interaction is also optimized. The overall drawing is left-click, right-click to cancel the last drawn point, and double-click to end the drawing. Among them, horizontal measurement can also hold shift to draw a point in a fixed direction.

ctrl + right click to cancel drawing.

:::

### Base usage

Basic usage of measurement components.

:::demo Use the `vc-measurements` tag to add measurement tools on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- Custom positioning and position offset -->
    <vc-measurements ref="measurementsRef" position="bottom-left" :mainFabOpts="measurementFabOptions1" :offset="[20, 80]" :editable="editable">
    </vc-measurements>
    <!-- Custom measurement action -->
    <vc-measurements
      ref="measurementsRef2"
      position="top-right"
      :mainFabOpts="measurementFabOptions2"
      :editable="editable"
      :measurements="measurements"
      activeColor="yellow"
    >
    </vc-measurements>
    <!-- Custom measurement options and decimals -->
    <vc-measurements
      ref="measurementsRef3"
      position="top-left"
      :mainFabOpts="measurementFabOptions3"
      :distanceMeasurementOpts="distanceMeasurementOpts3"
      :componentDistanceMeasurementOpts="componentDistanceMeasurementOpts3"
      :pointMeasurementOpts="pointMeasurementOpts3"
      :editable="editable"
      :offset="[20, 80]"
    >
    </vc-measurements>
    <!-- Customize UI through slot -->
    <vc-measurements
      ref="measurementsRef4"
      position="bottom-left"
      :mainFabOpts="measurementFabOptions4"
      :offset="[20, 20]"
      :editable="editable"
      @ready="measurementsReady"
    >
      <template #body>
        <div class="custom-measurements">
          <el-row>
            <el-button
              v-for="(measurementOpts, index) in measurementsOpts"
              :key="index"
              :type="measurementOpts.isActive ? 'success' : 'primary'"
              round
              @click="toggle(measurementOpts)"
              >{{measurementOpts.tip}}</el-button
            >
            <el-button type="danger" round @click="clear">Clear</el-button>
          </el-row>
        </div>
      </template>
    </vc-measurements>
    <vc-primitive-tileset url="./SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json" @readyPromise="onTilesetReady"></vc-primitive-tileset>
    <vc-layer-imagery>
      <vc-provider-imagery-tianditu mapStyle="img_c" :maximumLevel="17" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
    <el-checkbox v-model="editable">editable</el-checkbox>
  </el-row>
</el-row>

<script>
  import { DistanceUnits, AngleUnits } from 'vue-cesium'
  export default {
    data() {
      return {
        editable: false,
        measurementFabOptions1: {
          direction: 'right'
        },
        measurementFabOptions2: {
          direction: 'left',
          color: 'accent'
        },
        measurementFabOptions3: {
          direction: 'right',
          autoExpand: false,
          color: 'primary'
        },
        distanceMeasurementOpts3: {
          measureUnits: {
            distanceUnits: DistanceUnits.KILOMETERS,
            angleUnits: AngleUnits.RADIANS
          },
          decimals: {
            distance: 4,
            angle: 3
          }
        },
        componentDistanceMeasurementOpts3: {
          measureUnits: {
            distanceUnits: DistanceUnits.KILOMETERS,
            angleUnits: AngleUnits.RADIANS
          },
          decimals: {
            distance: 4,
            angle: 3
          }
        },
        pointMeasurementOpts3: {
          measureUnits: {
            distanceUnits: DistanceUnits.METERS,
            angleUnits: AngleUnits.DEGREES_MINUTES_SECONDS,
            slopeUnits: AngleUnits.DEGREES
          },
          decimals: {
            lng: 3,
            lat: 3,
            height: 2,
            slope: 3
          }
        },
        measurements: ['component-distance', 'polyline', 'vertical', 'area', 'point'],
        measurementFabOptions4: {
          direction: 'right'
        },
        measurementsOpts: []
      }
    },
    methods: {
      clear() {
        this.$refs.measurementsRef4.clearAll()
      },
      measurementsReady({ Cesium, viewer, cesiumObject }) {
        this.measurementsOpts = cesiumObject
      },
      toggle(measurementOpts) {
        this.$refs.measurementsRef4.toggleAction(measurementOpts)
      },
      onTilesetReady(tileset, viewer) {
        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)
        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
        viewer.zoomTo(tileset)
        viewer.scene.globe.depthTestAgainstTerrain = true
      },
      unload() {
        this.$refs.measurementsRef.unload()
      },
      load() {
        this.$refs.measurementsRef.load()
      },
      reload() {
        this.$refs.measurementsRef.reload()
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
| position | String | `'top-right'` | `optional` Specify the location of the measurement component. |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` Specify the offset based on the position. |
| show | Boolean | `true` | `optional` Specify whether the drawn measurement result is visible. |
| measurements | Array | `['distance', 'component-distance', 'polyline', 'horizontal', 'vertical', 'height', 'area', 'point']` | `optional` Specify the measurement instance to be loaded. |
| activeColor | String | `'positive'` | `optional` Specify the color when the measurement instance is activated. |
| editable | Boolean | `false` | `optional` Specify whether the measurement result can be edited. |
| mainFabOpts | Object | | `optional` Specify the style options of the floating action button of the measuring component. |
| distanceActionOpts | Object | `` | `optional` Specify the style options of the distance measurement action button.|
| distanceMeasurementOpts | Object | | `optional` Specify distance measurement parameters.|
| componentDistanceActionOpts | Object | | `optional` Specify the style options of the component distance measurement action button.|
| componentDistanceMeasurementOpts | Object | | `optional` Specify the component distance measurement parameters.|
| polylineActionOpts | Object | | `optional` Specify the style options of the polyline distance measurement action button.|
| polylineMeasurementOpts | Object | | `optional` Specify the polyline distance measurement parameters.|
| horizontalActionOpts | Object | | `optional` Specify the style options of the horizontal distance measurement action button.|
| horizontalMeasurementOpts | Object | | `optional` Specify the horizontal distance measurement parameters.|
| verticalActionOpts | Object | | `optional` Specify the style options of the vertical distance measurement action button.|
| verticalMeasurementOpts | Object | | `optional` Specify the vertical distance measurement parameters.|
| heightActionOpts | Object | | `optional` Specify the style options of the height measurement action button.|
| heightMeasurementOpts | Object | | `optional` Specify the height measurement parameters.|
| areaActionOpts | Object | | `optional` Specify the style options of the area measurement action button.|
| areaMeasurementOpts | Object | | `optional` Specify the area measurement parameters.|
| pointActionOpts | Object | | `optional` Specify the style options of the point measurement action button.|
| pointMeasurementOpts | Object | | `optional` Specify the point measurement parameters.|
| clearActionOpts | Object | | `optional` Specify the style options of the clear action button.|

:::tip

Tip: The measurement component is mainly composed of two parts: (1) the floating action button (Fab) that supports expansion and collapse; (2) the specific measurement action button(FabAction). Below are their default props:

:::

:::tipflex

```js
// ActionOpts general props
{
  externalLabel: false,
  label: '',
  labelPosition: 'right',
  hideLabel: false,
  disable: false,
  outline: false,
  push: false,
  flat: false,
  unelevated: false,
  color: 'primary',
  glossy: false,
  square: false,
  tooltip: {
    delay: 500,
    anchor: 'bottom middle',
    offset: [
      0,
      20
    ]
  },
  // The default icons are
  // vc-icons-measure-distance, vc-icons-measure-component-distance,
  // vc-icons-measure-polyline-distance, vc-icons-measure-horizontal-distance,
  // vc-icons-measure-vertical-distance, vc-icons-measure-height-from-terrain,
  // vc-icons-measure-area, vc-icons-measure-point-coordinates,
  // vc-icons-clear
  icon: 'vc-icons-measure-distance'
}
```

```js
// The following properties are added to the common properties of ActionOpts:
{
  direction: 'left',
  icon: 'vc-icons-measure-button',
  activeIcon: 'vc-icons-measure-button',
  verticalActionsAlign: 'center',
  hideIcon: false,
  persistent: false,
  autoExpand: true,
  hideActionOnClick: false,
  color: 'info'
}
```

:::

:::tip

Tip: Each measurement button (FabAction) corresponds to the measurement parameters xxxMeasurementOpts, used to customize drawing objects..

:::

::: tipflex

```js
// distanceMeasurementOpts
{
  show: true,
  showComponentLines: false,
  measureUnits: {
    distanceUnits: 'METERS',
    areaUnits: 'SQUARE_METERS',
    volumeUnits: 'CUBIC_METERS',
    angleUnits: 'DEGREES',
    slopeUnits: 'DEGREES'
  },
  drawtip: {
    show: true,
    pixelOffset: [
      32,
      32
    ]
  },
  pointOpts: {
    color: 'rgb(255,229,0)',
    pixelSize: 8,
    outlineColor: 'black',
    outlineWidth: 1,
    disableDepthTestDistance: null
  },
  polylineOpts: {
    material: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: '#51ff00'
        }
      }
    },
    depthFailMaterial: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: '#51ff00'
        }
      }
    },
    width: 2,
    arcType: 0
  },
  labelOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 1,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 1,
    verticalOrigin: -1,
    pixelOffset: [
      10,
      10
    ],
    disableDepthTestDistance: null
  },
  editorOpts: {
    pixelOffset: [
      4,
      -4
    ],
    move: {
      icon: 'vc-icons-move',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    removeAll: {
      icon: 'vc-icons-delete',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    }
  },
  decimals: {
    distance: 2,
    angle: 2
  }
}
```

```js
// componentDistanceMeasurementOpts
{
  show: true,
  showComponentLines: true,
  measureUnits: {
    distanceUnits: 'METERS',
    areaUnits: 'SQUARE_METERS',
    volumeUnits: 'CUBIC_METERS',
    angleUnits: 'DEGREES',
    slopeUnits: 'DEGREES'
  },
  drawtip: {
    show: true,
    pixelOffset: [
      32,
      32
    ]
  },
  pointOpts: {
    color: 'rgb(255,229,0)',
    pixelSize: 8,
    outlineColor: 'black',
    outlineWidth: 1,
    disableDepthTestDistance: null
  },
  polylineOpts: {
    material: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: {
            red: 0.3176470588235294,
            green: 1,
            blue: 0,
            alpha: 1
          }
        }
      }
    },
    depthFailMaterial: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: {
            red: 0.3176470588235294,
            green: 1,
            blue: 0,
            alpha: 1
          }
        }
      }
    },
    width: 2,
    arcType: 0
  },
  labelOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 1,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 1,
    verticalOrigin: -1,
    pixelOffset: [
      10,
      10
    ],
    disableDepthTestDistance: null
  },
  editorOpts: {
    pixelOffset: [
      4,
      -4
    ],
    move: {
      icon: 'vc-icons-move',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    removeAll: {
      icon: 'vc-icons-delete',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    }
  },
  decimals: {
    distance: 2,
    angle: 2
  },
  xLabelOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 1,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 0,
    verticalOrigin: 1,
    pixelOffset: [
      0,
      -9
    ],
    disableDepthTestDistance: null
  },
  xAngleLabelOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 1,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 1,
    verticalOrigin: 0,
    pixelOffset: [
      9,
      0
    ],
    disableDepthTestDistance: null
  },
  yLabelOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 1,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: -1,
    verticalOrigin: 1,
    pixelOffset: [
      -9,
      0
    ],
    disableDepthTestDistance: null
  },
  yAngleLabelOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 1,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 0,
    verticalOrigin: -1,
    pixelOffset: [
      0,
      9
    ],
    disableDepthTestDistance: null
  }
}
```

```js
// polylineMeasurementOpts
{
  show: true,
  measureUnits: {
    distanceUnits: 'METERS',
    areaUnits: 'SQUARE_METERS',
    volumeUnits: 'CUBIC_METERS',
    angleUnits: 'DEGREES',
    slopeUnits: 'DEGREES'
  },
  drawtip: {
    show: true,
    pixelOffset: [
      32,
      32
    ]
  },
  pointOpts: {
    color: 'rgb(255,229,0)',
    pixelSize: 8,
    outlineColor: 'black',
    outlineWidth: 1,
    disableDepthTestDistance: null
  },
  polylineOpts: {
    material: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: {
            red: 0.3176470588235294,
            green: 1,
            blue: 0,
            alpha: 1
          }
        }
      }
    },
    depthFailMaterial: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: {
            red: 0.3176470588235294,
            green: 1,
            blue: 0,
            alpha: 1
          }
        }
      }
    },
    width: 2,
    arcType: 0
  },
  labelOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 1,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 0,
    verticalOrigin: 1,
    pixelOffset: [
      0,
      -9
    ],
    disableDepthTestDistance: null
  },
  labelsOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 0.8,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 1,
    verticalOrigin: -1,
    pixelOffset: [
      5,
      5
    ],
    disableDepthTestDistance: null
  },
  editorOpts: {
    pixelOffset: [
      4,
      -4
    ],
    move: {
      icon: 'vc-icons-move',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    insert: {
      icon: 'vc-icons-insert',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    remove: {
      icon: 'vc-icons-remove',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    removeAll: {
      icon: 'vc-icons-delete',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    }
  },
  decimals: {
    distance: 2,
    angle: 2
  },
  showAngleLabel: true
}

```

:::

::: tipflex

```js
// horizontalMeasurementOpts
{
  show: true,
  measureUnits: {
    distanceUnits: 'METERS',
    areaUnits: 'SQUARE_METERS',
    volumeUnits: 'CUBIC_METERS',
    angleUnits: 'DEGREES',
    slopeUnits: 'DEGREES'
  },
  drawtip: {
    show: true,
    pixelOffset: [
      32,
      32
    ]
  },
  pointOpts: {
    color: 'rgb(255,229,0)',
    pixelSize: 8,
    outlineColor: 'black',
    outlineWidth: 1,
    disableDepthTestDistance: null
  },
  polylineOpts: {
    material: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: '#51ff00'
        }
      }
    },
    depthFailMaterial: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: '#51ff00'
        }
      }
    },
    width: 2,
    arcType: 0
  },
  dashLineOpts: {
    material: {
      fabric: {
        type: 'PolylineDash',
        uniforms: {
          color: [
            255,
            255,
            0,
            255
          ]
        }
      }
    },
    depthFailMaterial: {
      fabric: {
        type: 'PolylineDash',
        uniforms: {
          color: [
            255,
            255,
            0,
            255
          ]
        }
      }
    },
    width: 2
  },
  labelOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 1,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 1,
    verticalOrigin: 1,
    pixelOffset: [
      10,
      -10
    ],
    disableDepthTestDistance: null
  },
  labelsOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 0.8,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 1,
    verticalOrigin: -1,
    pixelOffset: [
      5,
      5
    ],
    disableDepthTestDistance: null
  },
  editorOpts: {
    pixelOffset: [
      4,
      -4
    ],
    move: {
      icon: 'vc-icons-move',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    insert: {
      icon: 'vc-icons-insert',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    remove: {
      icon: 'vc-icons-remove',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    removeAll: {
      icon: 'vc-icons-delete',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    }
  },
  decimals: {
    distance: 2,
    angle: 2
  },
  showAngleLabel: true,
  showDashedLine: true
}
```

```js
// verticalMeasurementOpts
{
  show: true,
  measureUnits: {
    distanceUnits: 'METERS',
    areaUnits: 'SQUARE_METERS',
    volumeUnits: 'CUBIC_METERS',
    angleUnits: 'DEGREES',
    slopeUnits: 'DEGREES'
  },
  drawtip: {
    show: true,
    pixelOffset: [
      32,
      32
    ]
  },
  pointOpts: {
    color: 'rgb(255,229,0)',
    pixelSize: 8,
    outlineColor: 'black',
    outlineWidth: 1,
    disableDepthTestDistance: null
  },
  polylineOpts: {
    material: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: '#51ff00'
        }
      }
    },
    depthFailMaterial: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: '#51ff00'
        }
      }
    },
    width: 2,
    arcType: 0
  },
  labelOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 1,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 1,
    verticalOrigin: -1,
    pixelOffset: [
      10,
      10
    ],
    disableDepthTestDistance: null
  },
  editorOpts: {
    pixelOffset: [
      4,
      -4
    ],
    move: {
      icon: 'vc-icons-move',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    removeAll: {
      icon: 'vc-icons-delete',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    }
  },
  decimals: {
    distance: 2
  }
}
```

```js
// heightMeasurementOpts
{
  show: true,
  measureUnits: {
    distanceUnits: 'METERS',
    areaUnits: 'SQUARE_METERS',
    volumeUnits: 'CUBIC_METERS',
    angleUnits: 'DEGREES',
    slopeUnits: 'DEGREES'
  },
  drawtip: {
    show: true,
    pixelOffset: [
      32,
      32
    ]
  },
  pointOpts: {
    color: 'rgb(255,229,0)',
    pixelSize: 8,
    outlineColor: 'black',
    outlineWidth: 1,
    disableDepthTestDistance: null
  },
  polylineOpts: {
    material: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: '#51ff00'
        }
      }
    },
    depthFailMaterial: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: '#51ff00'
        }
      }
    },
    width: 2,
    arcType: 0
  },
  labelOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 1,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 1,
    verticalOrigin: -1,
    pixelOffset: [
      10,
      10
    ],
    disableDepthTestDistance: null
  },
  editorOpts: {
    pixelOffset: [
      4,
      -4
    ],
    move: {
      icon: 'vc-icons-move',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    removeAll: {
      icon: 'vc-icons-delete',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    }
  },
  decimals: {
    distance: 2
  }
}
```

:::

:::tipflex

```js
// areaMeasurementOpts
{
  show: true,
  measureUnits: {
    distanceUnits: 'METERS',
    areaUnits: 'SQUARE_METERS',
    volumeUnits: 'CUBIC_METERS',
    angleUnits: 'DEGREES',
    slopeUnits: 'DEGREES'
  },
  drawtip: {
    show: true,
    pixelOffset: [
      32,
      32
    ]
  },
  pointOpts: {
    color: 'rgb(255,229,0)',
    pixelSize: 8,
    outlineColor: 'black',
    outlineWidth: 1,
    disableDepthTestDistance: null
  },
  polylineOpts: {
    material: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: '#51ff00'
        }
      }
    },
    depthFailMaterial: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: '#51ff00'
        }
      }
    },
    width: 2,
    arcType: 0
  },
  polygonOpts: {
    material: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: [
            255,
            165,
            0,
            125
          ]
        }
      }
    },
    depthFailMaterial: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: [
            255,
            165,
            0,
            125
          ]
        }
      }
    },
    perPositionHeight: true
  },
  labelOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 1,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 0,
    verticalOrigin: 1,
    pixelOffset: [
      0,
      -9
    ],
    disableDepthTestDistance: null
  },
  labelsOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 0.8,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 1,
    verticalOrigin: -1,
    pixelOffset: [
      5,
      5
    ],
    disableDepthTestDistance: null
  },
  editorOpts: {
    pixelOffset: [
      4,
      -4
    ],
    move: {
      icon: 'vc-icons-move',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    insert: {
      icon: 'vc-icons-insert',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    remove: {
      icon: 'vc-icons-remove',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    removeAll: {
      icon: 'vc-icons-delete',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    }
  },
  decimals: {
    area: 2,
    distance: 2,
    angle: 2
  },
  showDistanceLabel: true,
  showAngleLabel: true,
  loop: true
}
```

```js
// pointMeasurementOpts
{
  show: true,
  measureUnits: {
    distanceUnits: 'METERS',
    areaUnits: 'SQUARE_METERS',
    volumeUnits: 'CUBIC_METERS',
    angleUnits: 'DEGREES',
    slopeUnits: 'DEGREES'
  },
  drawtip: {
    show: true,
    pixelOffset: [
      32,
      48
    ]
  },
  pointOpts: {
    color: 'rgb(255,229,0)',
    pixelSize: 8,
    outlineColor: 'black',
    outlineWidth: 1,
    disableDepthTestDistance: null
  },
  labelOpts: {
    font: '16px Arial Microsoft YaHei sans-serif',
    scale: 1,
    fillColor: 'white',
    showBackground: true,
    backgroundColor: {
      x: 0.165,
      y: 0.165,
      z: 0.165,
      w: 0.8
    },
    backgroundPadding: [
      7,
      5
    ],
    horizontalOrigin: 1,
    verticalOrigin: 0,
    pixelOffset: [
      10,
      0
    ],
    disableDepthTestDistance: null
  },
  editorOpts: {
    pixelOffset: [
      4,
      -4
    ],
    move: {
      icon: 'vc-icons-move',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    },
    remove: {
      icon: 'vc-icons-remove',
      size: '24px',
      color: '#1296db',
      background: '#fff',
      round: true,
      flat: false,
      stack: false,
      dense: true,
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [
          0,
          20
        ]
      }
    }
  },
  decimals: {
    lng: 6,
    lat: 6,
    height: 2,
    slope: 3
  },
  heightReference: 1 // 0 absolute 1 relative ground
}
```

:::

### Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |
| measureEvt |                                    | Triggered when measuring.                              |

### Slots

| name | Description                                     |
| ---- | ----------------------------------------------- |
| body | Used to customize the measurement component UI. |
