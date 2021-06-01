## VcDrawings

Load the drawing tool components, which currently include point, polyline, and polygon drawing tools, and others will be added later.

**Note:** Style files need to be imported: `import'vue-cesium/lib/theme-default/index.css';`

:::tip

Tip: Version 3.0 has reorganized the drawing component into a single component, which is simple and supports custom styles.

The drawing interaction is also optimized. The overall drawing is left-click, right-click to cancel the last drawn point, and double-click to end the drawing.

ctrl + right click to cancel drawing.

:::

### Base usage

Basic usage of drawing components.

:::demo Use the `vc-drawings` tag to add drawing tools on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- Custom positioning and position offset -->
    <vc-drawings ref="drawingsRef" position="bottom-left" :mainFabOpts="drawingFabOptions1" :offset="[20, 80]" :editable="editable"></vc-drawings>
    <!-- Customize UI through slot -->
    <vc-drawings
      ref="drawingsRef4"
      position="bottom-left"
      :mainFabOpts="drawingFabOptions1"
      :offset="[20, 20]"
      :editable="editable"
      @ready="drawingsReady"
    >
      <template #body>
        <div class="custom-drawings">
          <el-row>
            <el-button
              v-for="(drawingOpts, index) in drawingsOpts"
              :key="index"
              :type="drawingOpts.isActive ? 'success' : 'primary'"
              round
              @click="toggle(drawingOpts)"
              >{{drawingOpts.tip}}</el-button
            >
            <el-button type="danger" round @click="clear">Clear</el-button>
          </el-row>
        </div>
      </template>
    </vc-drawings>
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
  export default {
    data() {
      return {
        drawingsOpts: [],
        editable: false,
        drawingFabOptions1: {
          direction: 'right'
        }
      }
    },
    methods: {
      clear() {
        this.$refs.drawingsRef4.clearAll()
      },
      drawingsReady({ Cesium, viewer, cesiumObject }) {
        this.drawingsOpts = cesiumObject
      },
      toggle(drawingOpts) {
        this.$refs.drawingsRef4.toggleAction(drawingOpts)
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
        this.$refs.drawingsRef.unload()
      },
      load() {
        this.$refs.drawingsRef.load()
      },
      reload() {
        this.$refs.drawingsRef.reload()
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
| position | String | `'top-right'` | `optional` Specify the location of the drawing component. |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` Specify the offset based on the position. |
| show | Boolean | `true` | `optional` Specify whether the drawn result is visible. |
| drawings | Array | `['point', 'polyline', 'polygon']` | `optional` Specify the drawing instance to be loaded. |
| activeColor | String | `'positive'` | `optional` Specify the color when the drawing instance is activated. |
| editable | Boolean | `false` | `optional` Specify whether the drawing result can be edited. |
| mainFabOpts | Object | | `optional` Specify the style options of the floating action button of the drawing component. |
| pointActionOpts | Object | `` | `optional` Specify the style options of the poingt drawing action button.|
| pointDrawingOpts | Object | | `optional` Specify poingt drawing parameters.|
| polylineActionOpts | Object | | `optional` Specify the style options of the polyline drawing action button.|
| polylineDrawingOpts | Object | | `optional` Specify the polyline drawing parameters.|
| polygonActionOpts | Object | | `optional` Specify the style options of the polygon drawing action button.|
| polygonDrawingOpts | Object | | `optional` Specify the polygon drawing parameters.|
| clearActionOpts | Object | | `optional` Specify the style options of the clear action button.|

:::tip

Tip: The drawing component is mainly composed of two parts: (1) the floating action button (Fab) that supports expansion and collapse; (2) the specific drawing action button(FabAction). Below are their default props:

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
  // vc-icons-drawing-point,
  // vc-icons-drawing-polyline,
  // vc-icons-drawing-polygon,
  // vc-icons-clear
  icon: 'vc-icons-drawing-point'
}
```

```js
// The following properties are added to the common properties of ActionOpts:
{
  direction: 'left',
  icon: 'vc-icons-drawing-button',
  activeIcon: 'vc-icons-drawing-button',
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

Tip: Each drawing button (FabAction) corresponds to the drawing parameters xxxDrawingOpts, used to customize drawing objects.

:::

::: tipflex

```js
// pointDrawingOpts
{
  show: true,
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
  }
}
```

```js
// polylineDrawingOpts
{
  show: true,
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
  }
}
```

```js
// polygonDrawingOpts
{
  show: true,
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
  loop: true
}

```

:::

### Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |
| drawEvt    |                                    | Triggered when drawing.                              |

### Slots

| name | Description                                     |
| ---- | ----------------------------------------------- |
| body | Used to customize the drawing component UI. |
