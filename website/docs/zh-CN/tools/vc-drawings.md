## VcDrawings

加载绘制工具组件，目前包含点、线、面绘制工具，其他的后续再增加。

**注意：** 需要引入样式文件: `import 'vue-cesium/lib/theme-default/index.css';`

:::tip

提示：3.0 版本已将绘制组件重构成一个组件，简约的同时支持自定义风格。

ctrl + 右键取消绘制。

:::

### 基础用法

绘制组件的基础用法。

:::demo 使用 `vc-drawings` 标签在三维球上添加绘制工具。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- 修改定位 和 位置偏移 -->
    <vc-drawings
      ref="drawingsRef"
      position="bottom-left"
      :mainFabOpts="drawingFabOptions1"
      :offset="[20, 80]"
      :editable="editable"
      :clampToGround="clampToGround"
    ></vc-drawings>
    <!-- 结合 slot 改变默认 UI -->
    <vc-drawings
      ref="drawingsRef4"
      position="bottom-left"
      :mainFabOpts="drawingFabOptions1"
      :offset="[20, 20]"
      :editable="editable"
      :clampToGround="clampToGround"
      @ready="drawingsReady"
      :polylineDrawingOpts="polylineDrawingOpts2"
      :rectangleDrawingOpts="rectangleDrawingOpts2"
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
            <el-button type="danger" round @click="clear">清除</el-button>
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
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
    <el-checkbox v-model="editable">可编辑</el-checkbox>
    <el-checkbox v-model="clampToGround">贴地</el-checkbox>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        drawingsOpts: [],
        editable: false,
        clampToGround: false,
        drawingFabOptions1: {
          direction: 'right'
        },
        polylineDrawingOpts2: {
          loop: true
        },
        rectangleDrawingOpts2: {
          regular: false
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

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | String | `'top-right'` | `optional` 指定绘制组件的位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` 指定绘制组件基于位置的偏移量。 |
| show | Boolean | `true` | `optional` 指定绘制的结果是否可见。 |
| drawings | Array | `['point', 'polyline', 'polygon', 'rectangle', 'circle']` | `optional` 指定要加载的绘制实例。 |
| activeColor | String | `'positive'` | `optional` 指定绘制实例激活时的颜色。 |
| editable | Boolean | `false` | `optional` 指定绘制结果对象是否可编辑。 |
| clampToGround | Boolean | `false` | `optional` 指定绘制结果对象是否贴地或模型。仅线、面对象生效。 |
| mainFabOpts | Object | | `optional` 指定绘制组件浮动按钮的样式选项。 |
| pointActionOpts | Object | `` | `optional` 指定点绘制按钮的样式选项。|
| pointDrawingOpts | Object | | `optional` 指定点绘制参数。|
| polylineActionOpts | Object | | `optional` 指定先绘制按钮的样式选项|
| polylineDrawingOpts | Object | | `optional` 指定线绘制参数。|
| polygonActionOpts | Object | | `optional` 指定面绘制按钮的样式选项|
| polygonDrawingOpts | Object | | `optional` 指定面绘制参数。|
| clearActionOpts | Object | | `optional` 指定清除按钮的样式选项。|

:::tip

提示：绘制组件主要由两部分构成：（1）支持展开和收缩的浮动按钮（Fab）；（2）具体绘制按钮（FabAction）。

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

提示：每个绘制按钮（FabAction）对应有属性 xxxDrawingOpts，用于自定义绘制对象。

详见：[defaultProps](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/drawings/src/defaultProps.ts)

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
  },
  loop: false
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

### 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |
| drawEvt    |                                    | 绘制时触发。         |

### 插槽

| 插槽名 | 描述                    |
| ------ | ----------------------- |
| body   | 用于自定义绘制组件 UI。 |
