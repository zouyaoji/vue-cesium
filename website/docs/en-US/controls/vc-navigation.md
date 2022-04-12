## VcNavigation

Navigation components, including compass, zoom, other floating buttons, position and distance scale toolbar controls. It is composed of `vc-compass`, `vc-zoom-control`, `vc-print`, `vc-mylocation`, `vc-status-bar`, and `vc-distance-legend`.

**Note:** Style files need to be imported: `import 'vue-cesium/dist/index.css';`

:::tip

Tip: The navigation component has been refactored in version 3.0. It is now a collection component and now supports custom styles, including icons, sizes, color positions, etc. The icon currently uses Unicode and does not support multi-color. If you need to support multi-color, please refer to the method of using Symbol introduced by Alibaba Cloud iconfont: [Portal](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)

:::

### Basic usage

Basic usage of VcNavigation component.

:::demo Just mount the `vc-navigation` tag as a subcomponent of `vc-viewer`.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer sceneModePicker>
    <vc-navigation ref="navigation" :offset="[35, 35]"></vc-navigation>
    <!-- custom style -->
    <vc-navigation
      :position="position"
      :offset="offset"
      :compass-opts="compassOpts"
      :zoom-opts="zoomOpts"
      :location-opts="locationOpts"
      :other-opts="otherOpts"
      @compass-evt="onNavigationEvt"
      @zoom-evt="onNavigationEvt"
      @print-evt="onNavigationEvt"
      @location-evt="onNavigationEvt"
      @status-bar-evt="onNavigationEvt"
      @distance-legend-evt="onNavigationEvt"
    >
    </vc-navigation>
    <vc-layer-imagery>
      <vc-imagery-provider-osm></vc-imagery-provider-osm>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="load">Unload</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>
<script>
  export default {
    data() {
      return {
        position: 'top-left',
        offset: [10, 80],
        compassOpts: {
          enableCompassOuterRing: true,
          outerOptions: {
            icon: 'svguse:#vc-icons-compass-outer', // svg 加载方式
            size: '120px'
          },
          innerOptions: {
            icon: 'fa fa-compass',
            size: '24px',
            color: '#3f4854',
            background: '#fff'
          },
          markerOptions: {
            size: '120px',
            color: 'yellow'
          }
        },
        zoomOpts: {
          background: '#1976D2',
          direction: 'horizontal'
        },
        locationOpts: {
          color: 'red'
        },
        otherOpts: false
        // otherOpts: {
        //   position: 'bottom-right',
        //   offset: [2, 3],
        //   statusBarOpts:  // Same as vc-status-bar
        //   distancelegendOpts: // Same as vc-distance-legend
        // }
      }
    },
    mounted() {
      // For debugging only, open the browser console and use vm to get the attribute modification in data.
      // such as vm.offset = [0, 0] or vm.offset[0] = 100
      // You can even add an attribute that is not initialized
      // vm.zoomOpts.zoomOutOptions = {size: '40px'}
      window.vm = this
    },
    methods: {
      load() {
        this.$refs.navigation.load()
      },
      reload() {
        this.$refs.navigation.reload()
      },
      unload() {
        this.$refs.navigation.unload()
      },
      onNavigationEvt(e) {
        console.log(e)
      }
    }
  }
</script>
```

:::

### Extended usage

Customize navigation components as needed. The available components are: `vc-compass`, `vc-zoom-control`, `vc-print`, `vc-mylocation`, `vc-status-bar`, `vc-distance-legend`.

:::demo Customize each navigation component as needed

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-compass
      position="left"
      :outer-options="{icon: 'svguse:#vc-icons-compass-outer', size: '250px'}"
      :inner-options="{icon: 'fa fa-compass', size: '60px', background: 'transparent', color: '#009688'}"
    ></vc-compass>
    <vc-compass position="top" :outer-options="{icon: 'svguse:#vc-icons-qq'}"></vc-compass>
    <vc-compass
      position="top-right"
      :outer-options="{icon: 'fa fa-circle-o-notch'}"
      :inner-options="{icon: 'fa fa-circle', background: 'transparent'}"
    ></vc-compass>
    <vc-compass position="right" :enable-compass-outer-ring="false"></vc-compass>
    <vc-zoom-control
      position="bottom"
      direction="horizontal"
      :offset="[0, 30]"
      :zoom-reset-options="{size: '48px', color: '#21BA45'}"
    ></vc-zoom-control>
    <vc-zoom-control position="bottom" :enable-reset-button="false" border-radius="0" :offset="[0, 120]"></vc-zoom-control>
    <vc-print position="bottom-right" download-automatically :color="color" :background="background"></vc-print>
    <vc-print
      position="bottom-right"
      :offset="[40, 60]"
      :show-printView="false"
      print-automatically
      size="28px"
      :round="false"
      label="Print/Share"
      background="#31CCEC"
      icon="fa fa-print"
    ></vc-print>
    <vc-my-location position="top-left" color="#C10015"></vc-my-location>
    <vc-my-location color="#9C27B0" position="top-left" :offset="[0, 60]" label="Location" stack :round="false" background="#F2C037"></vc-my-location>
    <!-- custom API -->
    <vc-my-location position="top-left" :offset="[60, 0]" :custom-a-p-i="() => ({lng: 108, lat: 32})"></vc-my-location>
    <vc-status-bar position="bottom"></vc-status-bar>
    <vc-status-bar position="top-left" :offset="[120, 3]" :show-mouse-info="false" :show-performance-info="false"></vc-status-bar>
    <vc-distance-legend position="bottom-left" :offset="[5, 70]" background="#26A69A" bar-background="#F2C037" :width="80"></vc-distance-legend>
    <vc-distance-legend position="bottom-left" :offset="[5, 35]"></vc-distance-legend>
  </vc-viewer>
</el-row>
<script>
  export default {
    data() {
      return {
        color: 'red',
        background: 'yellow'
      }
    },
    mounted() {
      window.vm = this
    }
  }
</script>
```

:::

### VcNavigation Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| position | string | `top-right` | `optional` Specify the position of the component. | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` Specify the offset of the component. |
| compassOpts | VcCompassProps\|false | Same as `VcCompass` | `optional` Specify the compass options of the component. false means no display. |
| zoomOpts | VcZoomControlProps\|false | Same as `VcZoomControl` | `optional` Specify the zoom options of the component. false means no display. |
| printOpts | VcPrintProps\|false | Same as `VcPrint` | `optional` Specify the print options of the component. false means no display. |
| locationOpts | VcMyLocationProps\|false | Same as `VcMyLocation` | `optional` Specify the location options of the component. false means no display. |
| otherOpts | VcNavigationOtherOpts\|false | | `optional` Specify the other controls options of the component. false means no display. |

:::tip

Tip: For other controls (position bar and distance scale bar, regarded as a whole), the position is not controlled by VcNavigation. Default parameters:

:::

### VcNavigation Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the VcNavigation is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the VcNavigation is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the VcNavigation is destroyed.                         |
| zoomEvt           | (evt: VcZoomEvt)                        | Triggers when the zoom control is operated.                          |
| compassEvt        | (evt: VcCompassEvt)                     | Triggers when the compass control is operated.                       |
| locationEvt       | (evt: VcLocationEvt)                    | Triggers when the positioning control is operated.                   |
| printEvt          | (evt: VcPrintEvt)                       | Triggers when the print control is operated.                         |
| statusBarEvt      | (evt: VcStatusBarEvt)                   | Triggers when the related parameters of the position control change. |
| distanceLegendEvt | {distance,status,type}                  | Triggers when the distance scale changes.                            |

### VcNavigation Methods

| Name               | Parameters                              | Description                                     |
| ------------------ | --------------------------------------- | ----------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\> | Load components manually.                       |
| reload             | () => Promise\<false \| VcReadyObject\> | Reload components manually.                     |
| unload             | () => Promise\<boolean\>                | Destroy the loaded component manually.          |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject> | Get the creatingPromise.                        |
| getCesiumObject    | () => VcCesiumObject                    | Get the Cesium object loaded by this component. |

### VcNavigation Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where vc-navigation sub tags content goes. | vc-compass/vc-zoom-control/vc-print/vc-my-location/vc-location-bar/vc-distance-legend |

### VcCompass

Compass component.

### VcCompass Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| position | string | `top-right` | `optional` Specify the position of the component. | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` Specifies the position-based offset of the compass. |
| enableCompassOuterRing | boolean | `true` | `optional` Specify whether the outer ring of the compass can be operated. |
| duration | number | `1.5` | `optional` Specify the flight time to restore the pitch angle, in seconds. |
| outerOptions | VcBtnTooltipProps | | `optional` Specify the parameters of the compass outer ring. |
| innerOptions | VcBtnTooltipProps | | `optional` Specify the parameters of the inner circle of the compass. |
| markerOptions | VcBtnTooltipProps | | `optional` Specify the parameters of the maker when the compass rotates. |

:::tip
Tips `outerOptions`, `innerOptions`, `markerOptions` default parameters:
:::
:::tipflex

```js
// outerOptions
{
  icon: 'vc-icons-compass-outer', // Icon name
  size: '96px',                   // Outer ring size
  color: '#3f4854',               // Outer ring color
  background: 'transparent',      // Outer ring background
  tooltip: {                      // false means not to display
    delay: 1000,                  // How long does the mouse hover show the tooltip message
    anchor: 'bottom middle',      // anchor of the tooltip
    offset: [0, 20]               // offset of the tooltip
  }
}
```

```js
// innerOptions
{
  icon: 'vc-icons-compass-outer',
  size: '96px',
  color: '#3f4854',
  background: 'transparent',
  tooltip: {
    delay: 1000,
    anchor: 'bottom middle',
    offset: [0, 20]
  }
}
```

```js
// markerOptions
{
  icon: 'vc-icons-compass-rotation-marker',
  size: '96px',
  color: '#1976D2'
}
```

:::

### VcCompass Events

| Name       | parameters                              | Description                                         |
| ---------- | --------------------------------------- | --------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the VcCompass is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the VcCompass is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the VcCompass is destroyed.           |
| compassEvt | (evt: VcCompassEvt)                     | Triggers when the compass control is operated.      |

### VcCompass Methods

| Name               | Parameters                              | Description                                     |
| ------------------ | --------------------------------------- | ----------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\> | Load components manually.                       |
| reload             | () => Promise\<false \| VcReadyObject\> | Reload components manually.                     |
| unload             | () => Promise\<boolean\>                | Destroy the loaded component manually.          |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject> | Get the creatingPromise.                        |
| getCesiumObject    | () => VcCesiumObject                    | Get the Cesium object loaded by this component. |

### VcZoomControl Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| position | string | `top-right` | `optional` Specify the position of the component. | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` Specifies the offset of the zoom control. |
| enableResetButton | boolean | `true` | `optional` Specify whether to enable the reset button. |
| zoomAmount | number | `2` | `optional` Specify the zoom amount of zoom in and zoom out. |
| duration | string | `0.5` | `optional` Specify the time of the zoom-in and zoom-out process, in seconds. |
| durationReset | number | `1.5` | `optional` Specify the time to reset to the default camera position, in seconds. |
| defaultResetView | VcCamera | | `optional` Specify where to reset the camera. |
| overrideViewerCamera | boolean | `false` | `optional` Specify whether to override the `camera` attribute on the `vc-viewer` during initialization. |
| background | string | `'#3f4854'` | `optional` Specifies the background of the zoom control. |
| border | string | `'solid 1px rgba(255, 255, 255, 0.2)'` | `optional` Specifies the border of the zoom control. |
| borderRadius | string | `'100px'` | `optional` Specify the rounded corners of the zoom control border. |
| direction | string | `'vertical'` | `optional` Specify the direction of the zoom control. Optional `'vertical','horizontal'` |
| zoomInOptions | VcBtnTooltipProps | | `optional` Specify the zoom button parameters. |
| zoomOutOptions | VcBtnTooltipProps | | `optional` Specify the zoom out button parameters. |
| zoomResetOptions | VcBtnTooltipProps | | `optional` Specify the reset button parameters. |

:::tip
Tips: `durationReset`, `zoomInOptions`, `zoomOutOptions`, `zoomResetOptions` default parameters:
:::
:::tipflex

```js
// defaultResetView
{
  position: {
    lng: 105,
    lat: 30,
    height: 19059568.5
  }
}
// structure
{
  position?: {
    lng: number,
    lat: number,
    height: number
  } | [lng, lat, height]
  rectange?: [west,south,east,north] | {west,south,east,north}
  heading: number
  pitch: number
  roll: number
}
```

```js
// zoomInOptions
{
  icon: 'vc-icons-zoom-in',
  size: '24px',
  color: '#fff',
  background: 'transparent',
  round: true,
  flat: true,
  label: undefined,
  stack: false,
  tooltip: {
    delay: 500,
    anchor: 'bottom middle',
    offset: [0, 20]
  }
}
```

```js
// zoomResetOptions
{
  icon: 'vc-icons-reset',
  size: '24px',
  color: '#fff',
  background: 'transparent',
  round: true,
  flat: true,
  label: undefined,
  stack: false,
  tooltip: {
    delay: 500,
    anchor: 'bottom middle',
    offset: [0, 20]
  }
}
```

```js
// zoomOutOptions
{
  icon: 'vc-icons-zoom-out',
  size: '24px',
  color: '#fff',
  background: 'transparent',
  round: true,
  flat: true,
  label: undefined,
  stack: false,
  tooltip: {
    delay: 500,
    anchor: 'bottom middle',
    offset: [0, 20]
  }
}
```

:::

### VcZoomControl Events

| Name       | Parameters                              | Description                                             |
| ---------- | --------------------------------------- | ------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the VcZoomControl is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the VcZoomControl is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the VcZoomControl is destroyed.           |
| zoomEvt    | (evt: VcZoomEvt)                        | Triggers when the zoom control is operated.             |

### VcZoomControl Methods

| Name               | Parameters                              | Description                                     |
| ------------------ | --------------------------------------- | ----------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\> | Load components manually.                       |
| reload             | () => Promise\<false \| VcReadyObject\> | Reload components manually.                     |
| unload             | () => Promise\<boolean\>                | Destroy the loaded component manually.          |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject> | Get the creatingPromise.                        |
| getCesiumObject    | () => VcCesiumObject                    | Get the Cesium object loaded by this component. |

### VcPrint Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| position | string | `top-right` | `optional` Specify the position of the component. | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` Specifies the offset of the print control. (Valid when used independently) |
| showCredit | boolean | `true` | `optional` Specify whether to display the copyright information of the loaded data when printing pictures. |
| showPrintView | boolean | `true` | `optional` Specify whether to display the print preview. |
| printAutomatically | boolean | `false` | `optional` Specify whether to print automatically. Need to set showPrintView to false. |
| downloadAutomatically | boolean | `false` | `optional` Specify whether to download the printed pictures. |
| icon | string | `'vc-icons-capture'` | `optional` Specify the print button icon. |
| size | string | `'24px'` | `optional` Specify the size of the print button. |
| color | string | `'#3f4854'` | `optional` Specify the color of the print button. |
| background | string | `'#fff'` | `optional` Specify the background of the print button. |
| round | boolean | `true` | `optional` Specify whether the print button is displayed in a circle. |
| flat | boolean | `false` | `optional` Specify whether the print button is in normal style, without background and click effect. |
| label | string | | `optional` Specify the text of the print button. |
| stack | boolean | `false` | `optional` Specify whether the print buttons are displayed stacked. |
| tooltip | VcTooltipProps | | `optional` Specify the tooltip parameters of the print button. |
| screenshotName | string | | `optional` Specify the screenshot name. ||

### VcPrint Events

| Name       | Parameters                              | Description                                       |
| ---------- | --------------------------------------- | ------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the VcPrint is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the VcPrint is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the VcPrint is destroyed.           |
| printEvt   | (evt: VcPrintEvt)                       | Triggers when the print control is operated.      |

### VcPrint Methods

| Name               | Parameters                              | Description                                     |
| ------------------ | --------------------------------------- | ----------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\> | Load components manually.                       |
| reload             | () => Promise\<false \| VcReadyObject\> | Reload components manually.                     |
| unload             | () => Promise\<boolean\>                | Destroy the loaded component manually.          |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject> | Get the creatingPromise.                        |
| getCesiumObject    | () => VcCesiumObject                    | Get the Cesium object loaded by this component. |

### VcMyLocation Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| position | string | `top-right` | `optional` Specify the position of the component. | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` Specifies the offset of the positioning button based on the position.|
| geolocation | PositionOptions | | `optional` Specify the browser geolocation positioning parameters. |
| id | string | | `optional` Specify the id of the loading point after the positioning is successful. |
| pointColor | VcColor | | `optional` Specify the color of the loading point after the positioning is successful. |
| pixelSize | number | `12.5` | `optional` Specify the pixel size of the loading point after the positioning is successful. |
| outlineWidth | number | `3` | `optional` Specify the outline width of the loading point after the positioning is successful |
| outlineColor | VcColor | `'#ffffff'` | `optional` Specify the outline border of the loading point after the positioning is successful |
| level | number | `6` | `optional` Specify the sampling level when the altitude is automatically recognized based on the terrain after the positioning is successful. |
| duration | number | `3` | `optional` Specify the flight time after successful positioning, in seconds. |
| factor | number | `0.01` | `optional` Specify the factor by which the anchor point is converted to a rectangle. |
| customAPI | (errorCallback) => ({ lng: number; lat: number }) | | `optional` Specify a custom API for positioning. |
| description | (position, detail) => string |  | `optional` Specify the method of customizing the description text of the point after successful positioning. |
| icon | string | `vc-icons-geolocation` | `optional` Specify the positioning button icon. |
| size | string | `'24px'` | `optional` Specify the positioning button size. |
| color | string | `'#3f4854'` | `optional` Specify the positioning button color. |
| background | string | `'#fff'` | `optional` Specify the positioning button background. |
| round | boolean | `true` | `optional` Specify whether the positioning button is displayed in a circle. |
| flat | boolean | `false` | `optional` Specify whether the positioning button is a normal style, without background, and click effect.|
| label | string | | `optional` Specify the positioning button text. |
| stack | boolean | | `optional` Specify whether the positioning buttons are displayed stacked. |
| tooltip | false \| VcTooltipProps  | | `optional` Specify the positioning button prompt information parameter. |

### VcMyLocation Events

| Name        | Parameters                              | Description                                            |
| ----------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad  | (instance: VcComponentInternalInstance) | Triggers before the VcMyLocation is loaded.            |
| ready       | (readyObj: VcReadyObject)               | Triggers when the VcMyLocation is successfully loaded. |
| destroyed   | (instance: VcComponentInternalInstance) | Triggers when the VcMyLocation is destroyed.           |
| locationEvt | (evt: VcLocationEvt)                    | Triggers when the positioning button is operated.      |

### VcMyLocation Methods

| Name               | Parameters                              | Description                                     |
| ------------------ | --------------------------------------- | ----------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\> | Load components manually.                       |
| reload             | () => Promise\<false \| VcReadyObject\> | Reload components manually.                     |
| unload             | () => Promise\<boolean\>                | Destroy the loaded component manually.          |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject> | Get the creatingPromise.                        |
| getCesiumObject    | () => VcCesiumObject                    | Get the Cesium object loaded by this component. |

### VcStatusBar Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| position | string | `top-right` | `optional` Specify the position of the component. | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` Specifies the position-based offset of the information bar control. |
| gridFileUrl | string | `https://zouyaoji.top/vue-cesium/statics/SampleData/WW15MGH.DAC`| `optional` Specify the mouse to pick up the height model, use this to improve the accuracy of the height obtained. |
| color | string | `'#fff'` | `optional` Specify the color of the information bar. |
| background | string | `'#3f4854'` | `optional` Specify the background of the information bar. |
| showCameraInfo | boolean | `true` | `optional` Specify whether to display camera information in the information bar. |
| showMouseInfo | boolean | `true` | `optional` Specify whether the information bar displays the location information pointed by the mouse. |
| showPerformanceInfo | boolean | `true` | `optional` Specify whether to display frame rate information in the information bar. |
| useProjection | boolean | `true` | `optional` Specify whether the latitude and longitude coordinates on the information bar can be switched to UTM projected coordinates. |
| tooltip | VcTooltipProps\|false | | `optional` Specify the prompt information parameters of the information bar. |

### VcStatusBar Events

| Name         | Parameters                              | Description                                           |
| ------------ | --------------------------------------- | ----------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the VcStatusBar is loaded.            |
| ready        | (readyObj: VcReadyObject)               | Triggers when the VcStatusBar is successfully loaded. |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the VcStatusBar is destroyed.           |
| statusBarEvt | (evt: VcStatusBarEvt)                   | Triggers when the status bar parameter changes.       |

### VcStatusBar Methods

<!-- prettier-ignore -->
| Name | Parameters | Description |
| ------------------ | --------------------------------------- | ----------------------------------------------- |
| load | () => Promise\<false \| VcReadyObject\> | Load components manually. |
| reload | () => Promise\<false \| VcReadyObject\> | Reload components manually. |
| unload | () => Promise\<boolean\> | Destroy the loaded component manually. |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject> | Get the creatingPromise. |
| getCesiumObject | () => VcCesiumObject | Get the Cesium object loaded by this component. |
| getMouseCoordsInfo | () => MouseCoords | Get the mouseCoords info. |
| getCameraInfo | () =>{ heading: string; pitch: string; roll: string; height: string; level: string } | Get the camera info. |
| getPerformanceInfo | () => { fps: string; ms: string } | Get the performance info. |

### VcDistanceLegend Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| position | string | `top-right` | `optional` Specify the position of the component. | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` Specifies the offset of the distance scale control based on the position.|
| color | string | `'#fff'` | `optional` Specify the color of the distance scale control. |
| background | string | `'#3f4854'` | `optional` Specify the distance scale background. |
| width | number | `100` | `optional` Specify the width of the distance scale. |
| barBackground | string | `'#ffffff'` | `optional` Specify the color of the horizontal line on the distance scale. |

### VcDistanceLegend Events

| Name              | Parameters                              | Description                                                |
| ----------------- | --------------------------------------- | ---------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the VcDistanceLegend is loaded.            |
| ready             | (readyObj: VcReadyObject)               | Triggers when the VcDistanceLegend is successfully loaded. |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the VcDistanceLegend is destroyed.           |
| distanceLegendEvt | (evt: VcDistanceLegendEvt)              | Triggers when the distance scale changes.                  |

### VcDistanceLegend Methods

| Name               | Parameters                              | Description                                     |
| ------------------ | --------------------------------------- | ----------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\> | Load components manually.                       |
| reload             | () => Promise\<false \| VcReadyObject\> | Reload components manually.                     |
| unload             | () => Promise\<boolean\>                | Destroy the loaded component manually.          |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject> | Get the creatingPromise.                        |
| getCesiumObject    | () => VcCesiumObject                    | Get the Cesium object loaded by this component. |
