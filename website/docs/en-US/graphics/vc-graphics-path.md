## VcGraphicsPath

Loading a path graphic. It is equivalent to initializing a `Cesium.PathGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of the VcGraphicsPath component.

:::demo Use the `vc-graphics-path` tag to add a path to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer shouldAnimate animation timeline @ready="onViewerReady">
    <vc-entity ref="entity" :availability="availability" :position="position" :orientation="orientation" description="Hello Vue Cesium">
      <vc-graphics-path
        ref="path"
        :resolution="1"
        :material="{fabric: {type: 'PolylineGlow', uniforms: {glowPower: 0.1, color: 'yellow'}}}"
        :width="10"
      ></vc-graphics-path>
      <vc-graphics-model
        ref="model"
        uri="https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb"
        :minimumPixelSize="128"
      ></vc-graphics-model>
    </vc-entity>
    <vc-entity :key="'entity' + index" :position="position" v-for="(position, index) of positions">
      <vc-graphics-point :pixelSize="8" color="TRANSPARENT" outlineColor="YELLOW" :outlineWidth="3"></vc-graphics-point>
    </vc-entity>
    <vc-layer-imagery>
      <vc-provider-imagery-arcgis></vc-provider-imagery-arcgis>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="viewTopDown">ViewTopDown</el-button>
    <el-button type="danger" round @click="viewSide">ViewSide</el-button>
    <el-button type="danger" round @click="viewAircraft">ViewAircraft</el-button>
  </el-row>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const position = ref({})
      const positions = ref([])
      const model = ref(null)
      const availability = ref(null)
      const orientation = ref(null)
      const entity = ref(null)
      let _viewer = undefined

      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = ({ Cesium, viewer }) => {
        console.log('viewer ready')
        _viewer = viewer
        //Enable lighting based on sun/moon positions
        viewer.scene.globe.enableLighting = true
        //Enable depth testing so things behind the terrain disappear.
        viewer.scene.globe.depthTestAgainstTerrain = true
        //Set the random number seed for consistent results.
        Cesium.Math.setRandomNumberSeed(3)
        const start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16))
        const stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate())
        viewer.clock.startTime = start.clone()
        viewer.clock.stopTime = stop.clone()
        viewer.clock.currentTime = start.clone()
        viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP //Loop at the end
        viewer.clock.multiplier = 10
        viewer.timeline.zoomTo(start, stop)
        position.value = computeCirclularFlight(-112.110693, 36.0994841, 0.03, start)
        availability.value = new Cesium.TimeIntervalCollection([
          new Cesium.TimeInterval({
            start: start,
            stop: stop
          })
        ])
        orientation.value = new Cesium.VelocityOrientationProperty(position.value)
      }

      const computeCirclularFlight = (lon, lat, radius, start) => {
        let property = new Cesium.SampledPositionProperty()
        for (let i = 0; i <= 360; i += 45) {
          let radians = Cesium.Math.toRadians(i)
          let time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate())
          let position = Cesium.Cartesian3.fromDegrees(
            lon + radius * 1.5 * Math.cos(radians),
            lat + radius * Math.sin(radians),
            Cesium.Math.nextRandomNumber() * 500 + 1750
          )
          property.addSample(time, position)
          positions.value.push(position)
        }
        return property
      }

      const viewTopDown = () => {
        _viewer.trackedEntity = undefined
        _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)))
      }
      const viewSide = () => {
        _viewer.trackedEntity = undefined
        _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 7500))
      }
      const viewAircraft = () => {
        _viewer.trackedEntity = entity.value.getCesiumObject()
      }

      // life cycle
      onMounted(() => {
        model.value.createPromise.then(({ Cesium, viewer }) => {
          viewer.zoomTo(viewer.entities)
        })
      })

      return {
        onEntityEvt,
        onViewerReady,
        model,
        entity,
        positions,
        orientation,
        availability,
        position,
        viewTopDown,
        viewSide,
        viewAircraft
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the path. |
| leadTime | Object | | `optional` A Property specifying the number of seconds behind the object to show. |
| trailTime | Object | | `optional` A Property specifying the number of seconds in front of the object to show. |
| width | Number | `1.0` | `optional` A numeric Property specifying the width in pixels. |
| resolution | Number | `60` | `optional` A numeric Property specifying the maximum number of seconds to step when sampling the position. |
| material | Object\|String\|Array | `'white'` | `optional` A Property specifying the material used to draw the path. |
| distanceDisplayCondition | Object\|Array | | `optional` A Property specifying at what distance from the camera that this path will be displayed.  |

### Events

| Name              | Parameters                         | Description                                                          |
| ----------------- | ---------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | Vue Instance                       | Triggers before the cesiumObject is loaded.                          |
| ready             | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | Vue Instance                       | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                    | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[PathGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PathGraphics.html)**
