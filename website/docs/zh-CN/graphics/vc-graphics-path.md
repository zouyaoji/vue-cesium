## 路径

`vc-graphics-path` 组件用于加载与时间关联的路径实体，相当于初始化一个 `Cesium.PathGraphics` 实例。需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

路径实体组件的基础用法。

:::demo 使用 `vc-graphics-path` 标签在三维球上添加路径实体对象。

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
      <vc-graphics-model ref="model" uri="./SampleData/models/CesiumAir/Cesium_Air.glb" :minimumPixelSize="128"></vc-graphics-model>
    </vc-entity>
    <vc-entity :key="'entity' + index" :position="position" v-for="(position, index) of positions">
      <vc-graphics-point :pixelSize="8" color="TRANSPARENT" outlineColor="YELLOW" :outlineWidth="3"></vc-graphics-point>
    </vc-entity>
    <vc-layer-imagery>
      <vc-provider-imagery-arcgis-mapserver></vc-provider-imagery-arcgis-mapserver>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="viewTopDown">俯视</el-button>
    <el-button type="danger" round @click="viewSide">侧视</el-button>
    <el-button type="danger" round @click="viewAircraft">跟随</el-button>
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

### 属性

| 属性名                   | 类型                  | 默认值    | 描述                                              |
| ------------------------ | --------------------- | --------- | ------------------------------------------------- |
| show                     | Boolean               | `true`    | `optional` 指定 path 是否显示。                   |
| leadTime                 | Number                |           | `optional` 指定 path 前面要显示的秒数。           |
| trailTime                | Number                |           | `optional` 指定 path 后面要显示的秒数。           |
| width                    | Number                | `1.0`     | `optional` 指定 path 像素宽度。                   |
| resolution               | Number                | `60`      | `optional` 指定 path 步进最大秒数。               |
| material                 | Object\|String\|Array | `'WHITE'` | `optional` 指定 path 材质。                       |
| distanceDisplayCondition | Object                |           | `optional` 指定 path 随相机距离改变是否显示参数。 |

### 事件

| 事件名            | 参数 | 描述                                     |
| ----------------- | ---- | ---------------------------------------- |
| definitionChanged |      | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[PathGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PathGraphics.html)**
