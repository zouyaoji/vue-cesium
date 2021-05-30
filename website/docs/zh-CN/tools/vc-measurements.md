## VcMeasurements

加载量算工具组件，支持距离测量、三角测量、折线测量、高度测量、面积测量。

**注意：** 需要引入样式文件: `import 'vue-cesium/lib/theme-default/index.css';`

:::tip

提示：3.0 版本已将量算组件重构成一个组件，并丰富增加了一些。

:::

### 基础用法

量算组件的基础用法。

:::demo 使用 `vc-measurements` 标签在三维球上添加量算工具。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- 修改定位 和 位置偏移 -->
    <vc-measurements ref="measurementsRef" position="bottom-left" :mainFabOpts="measurementFabOptions1" :offset="[20, 80]" :editable="editable">
    </vc-measurements>
    <!-- 修改加载的量算实例 -->
    <vc-measurements
      ref="measurementsRef2"
      position="top-right"
      :mainFabOpts="measurementFabOptions2"
      :editable="editable"
      :measurements="measurements"
      activeColor="yellow"
    >
    </vc-measurements>
    <!-- 修改量算风格和精度 -->
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
    <!-- 结合 slot 改变默认 UI -->
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
            <el-button type="danger" round @click="clear">清除</el-button>
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
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
    <el-checkbox v-model="editable">可编辑</el-checkbox>
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

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | String | `'top-right'` | `optional` 指定量算组件的位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` 指定量算组件基于位置的偏移量。 |
| show | Boolean | `true` | `optional` 指定绘制的量算结果是否可见。 |
| measurements | Array | `['distance', 'component-distance', 'polyline', 'horizontal', 'vertical', 'height', 'area', 'point']` | `optional` 指定要加载的量算实例。 |
| activeColor | String | `'positive'` | `optional` 指定量算实例激活时的颜色。 |
| editable | Boolean | `false` | `optional` 指定量算结果对象是否可编辑。 |
| mainFabOpts | Object | | `optional` 指定量算组件浮动按钮的样式风格选项。 |
| distanceActionOpts | Object | `` | `optional` 指定距离量算按钮的样式风格选项。|
| distanceMeasurementOpts | Object | | `optional` 指定距离量算参数。|
| componentDistanceActionOpts | Object | | `optional` 指定三角量算按钮的样式风格选项。|
| componentDistanceMeasurementOpts | Object | | `optional` 指定三角量算参数。|
| polylineActionOpts | Object | | `optional` 指定折线距离量算按钮的样式风格选项。|
| polylineMeasurementOpts | Object | | `optional` 指定折线距离量算参数。|
| horizontalActionOpts | Object | | `optional` 指定水平距离量算按钮的样式风格选项。|
| horizontalMeasurementOpts | Object | | `optional` 指定水平距离量算参数。|
| verticalActionOpts | Object | | `optional` 指定垂直距离量算按钮的样式风格选项。|
| verticalMeasurementOpts | Object | | `optional` 指定垂直距离量算参数。|
| heightActionOpts | Object | | `optional` 指定高度量算按钮的样式风格选项。|
| heightMeasurementOpts | Object | | `optional` 指定高度量算参数。|
| areaActionOpts | Object | | `optional` 指定面积量算按钮的样式风格选项。|
| areaMeasurementOpts | Object | | `optional` 指定面积量算参数。|
| pointActionOpts | Object | | `optional` 指定坐标量算按钮的样式风格选项。|
| pointMeasurementOpts | Object | | `optional` 指定坐标量算参数。|
| clearActionOpts | Object | | `optional` 指定清除按钮的样式风格选项。|

:::tip

提示：量算组件主要由两部分构成：（1）支持展开和收缩的浮动按钮（Fab）；（2）具体量算按钮（FabAction）。

:::

:::tipflex

```js
// ActionOpts 通用属性
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
  // 默认图标分别是
  // vc-icons-measure-distance, vc-icons-measure-component-distance,
  // vc-icons-measure-polyline-distance, vc-icons-measure-horizontal-distance,
  // vc-icons-measure-vertical-distance, vc-icons-measure-height-from-terrain,
  // vc-icons-measure-area, vc-icons-measure-point-coordinates,
  // vc-icons-clear
  icon: 'vc-icons-measure-distance'
}
```

```js
// mainFabOpts 在 ActionOpts 通用属性基础上多了下列属性：
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

提示：每个量算按钮（FabAction）对应有量算属性 xxxMeasurementOpts。

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
  }
}
```

:::

### 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |
| measureEvt |                                    | 量算时触发。         |

### 插槽

| 插槽名 | 描述                    |
| ------ | ----------------------- |
| body   | 用于自定义测量组件 UI。 |
