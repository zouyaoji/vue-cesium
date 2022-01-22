## VcOverviewMap

Load the overview map control.

:::tip

Tip: Version 3.0 has refactored the overviewmap diagram component. The overviewmap diagram is essentially another `vc-viewer`, so the subcomponents of VueCesium can still be added to the overviewmap diagram.

:::

### Basic usage

The basic usage of the VcOverviewMap component.

:::demo Use the `vc-overview-map` tag to add a overview map component on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- example 1 -->
    <vc-overview-map @ready="onOverviewReady" ref="overview" :offset="[5, 5]">
      <vc-layer-imagery :sortOrder="10">
        <vc-imagery-provider-bing bmKey="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-" mapStyle="Road"></vc-imagery-provider-bing>
      </vc-layer-imagery>
      <vc-entity>
        <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
      </vc-entity>
    </vc-overview-map>
    <!-- example 2 -->
    <vc-overview-map position="bottom-left" width="300px" height="300px" :offset="[5, 5]" :viewerOpts="{ showCredit: true, sceneMode: 3 }">
      <vc-layer-imagery>
        <vc-imagery-provider-osm></vc-imagery-provider-osm>
      </vc-layer-imagery>
      <vc-entity>
        <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
      </vc-entity>
      <!-- example 3 -->
      <vc-overview-map position="top-left" :offset="[5, 5]">
        <vc-layer-imagery>
          <vc-imagery-provider-osm></vc-imagery-provider-osm>
        </vc-layer-imagery>
        <vc-entity>
          <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
        </vc-entity>
      </vc-overview-map>
    </vc-overview-map>
    <vc-layer-imagery :sortOrder="10">
      <vc-imagery-provider-bing bmKey="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"></vc-imagery-provider-bing>
    </vc-layer-imagery>
    <vc-entity
      :billboard="billboard"
      :position="{lng: 108, lat: 32}"
      :point="point"
      :label="label"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
    </vc-entity>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        point: {
          pixelSize: 28,
          color: 'red'
        },
        label: {
          text: 'Hello World',
          pixelOffset: [0, 80]
        },
        billboard: {
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.5
        },
        projectionTransforms: {
          from: 'GCJ02',
          to: 'WGS84'
        }
      }
    },
    methods: {
      onOverviewReady({ cesiumObject }) {
        console.log(cesiumObject)
      },
      onEntityEvt(e) {
        console.log(e)
        if (e.type === 'onmouseover') {
          this.billboard = {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.6
          }
        } else if (e.type === 'onmouseout') {
          this.billboard = {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.5
          }
        }
      },
      unload() {
        this.$refs.overview.unload()
      },
      load() {
        this.$refs.overview.load()
      },
      reload() {
        this.$refs.overview.reload()
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
| position | String | `'bottom-right'` | `optional` Specify the location of the overviewmap component. | top-right/top-left/bottom-right/bottom-left |
| offset | Array | `[0, 0]` | `optional` Specify the position-based offset of the overviewmap component. | |
| width | String | `'150px'` | `optional` Specify the width of the overviewmap component. |
| height | String | `'150px'` | `optional` Specify the height of the overviewmap component. |
| border | String | `'solid 4px rgb(255, 255, 255)'` | `optional` Specify the border of the overviewmap component. |
| borderRadius | String | | `optional` Specify the border radius of the overviewmap component. |
| toggleOpts | Object | `show: true, color: '#fff', background: '#3f4854', icon: 'vc-icons-overview-toggle', size: '15px', tooltip: { delay: 500, anchor: 'bottom middle', offset: [0, 20], tip: void 0 } }` | `optional` Specify the toggle button options of the overviewmap component. |
| viewerOpts | Object |`{ removeCesiumScript: false, showCredit: false, sceneMode: 2 }` | `optional` Specify the vc-viewer component options in the overviewmap component.|

:::

### Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |
