<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-28 14:52:50
 * @LastEditTime: 2022-03-09 17:28:30
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\zh-CN\overlays\vc-overlay-windmap.md
-->

## VcOverlayWindmap

加载风场图。

### 基础用法

风场图组件的基础用法。

:::demo 使用 `vc-overlay-windmap` 标签在三维球上添加风场动画。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="ready">
    <vc-overlay-windmap ref="wind" v-if="windData !== null" :data="windData" :options="particleSystemOptions"></vc-overlay-windmap>
    <vc-layer-imagery :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-selection-indicator @pick-evt="pickEvt"></vc-selection-indicator>
  </vc-viewer>
  <div class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">销毁</el-button>
      <el-button type="danger" round @click="load">加载</el-button>
      <el-button type="danger" round @click="reload">重载</el-button>
    </el-row>

    <el-row>
      <el-col>
        <div class="block">
          <span>maxParticles</span>
          <el-slider v-model="particleSystemOptions.maxParticles" :min="1" :max="65536" :step="1"></el-slider>
          <span>particleHeight</span>
          <el-slider v-model="particleSystemOptions.particleHeight" :min="1" :max="10000" :step="1"></el-slider>
          <span>fadeOpacity</span>
          <el-slider v-model="particleSystemOptions.fadeOpacity" :min="0.90" :max="0.999" :step="0.001"></el-slider>
          <span>dropRate</span>
          <el-slider v-model="particleSystemOptions.dropRate" :min="0.0" :max="0.1" :step="0.001"></el-slider>
          <span>dropRateBump</span>
          <el-slider v-model="particleSystemOptions.dropRateBump" :min="0.0" :max="0.2" :step="0.001"></el-slider>
          <span>speedFactor</span>
          <el-slider v-model="particleSystemOptions.speedFactor" :min="0.5" :max="8" :step="0.1"></el-slider>
          <span>lineWidth</span>
          <el-slider v-model="particleSystemOptions.lineWidth" :min="0.01" :max="16" :step="0.01"></el-slider>
        </div>
      </el-col>
    </el-row>
  </div>
</el-row>

<script>
  export default {
    data() {
      return {
        windData: null,
        particleSystemOptions: {
          maxParticles: 64 * 64,
          particleHeight: 100.0,
          fadeOpacity: 0.996,
          dropRate: 0.003,
          dropRateBump: 0.01,
          speedFactor: 1.0,
          lineWidth: 4.0
        },
        viewerParameters: {
          latRange: [0, 70],
          lonRange: [74, 140]
        }
      }
    },
    methods: {
      ready() {
        window.vm = this
        this.loadNetCDF('https://zouyaoji.top/vue-cesium/SampleData/wind/demo.nc').then(data => {
          console.log(data)
          this.windData = data
        })
      },
      unload() {
        this.$refs.wind.unload()
      },
      load() {
        this.$refs.wind.load()
      },
      reload() {
        this.$refs.wind.reload()
      },
      pickEvt(e) {
        if (Cesium.defined(e) && e instanceof Cesium.Entity) {
          const cartographic = Cesium.Cartographic.fromCartesian(e.position.getValue(Cesium.JulianDate.now()))
          const longitude = Cesium.Math.toDegrees(cartographic.longitude)
          const latitude = Cesium.Math.toDegrees(cartographic.latitude)
          console.log(this.$refs.wind.getNearestUV(longitude, latitude))
        }
      },
      async loadNetCDF(filePath) {
        let _this = this
        return new Promise(function (resolve) {
          var request = new XMLHttpRequest()
          request.open('GET', filePath)
          request.responseType = 'arraybuffer'
          request.onload = function () {
            var arrayToMap = function (array) {
              return array.reduce(function (map, object) {
                map[object.name] = object
                return map
              }, {})
            }
            var NetCDF = new netcdfjs(request.response)
            let data = {}
            var dimensions = arrayToMap(NetCDF.dimensions)
            data.dimensions = {}
            data.dimensions.lon = dimensions['lon'].size
            data.dimensions.lat = dimensions['lat'].size
            data.dimensions.lev = dimensions['lev'].size
            var variables = arrayToMap(NetCDF.variables)
            var uAttributes = arrayToMap(variables['U'].attributes)
            var vAttributes = arrayToMap(variables['V'].attributes)
            data.lon = {}
            data.lon.array = new Float32Array(NetCDF.getDataVariable('lon').flat())
            data.lon.min = Math.min(...data.lon.array)
            data.lon.max = Math.max(...data.lon.array)
            data.lon.delta = data.lon.array[1] - data.lon.array[0]
            data.lat = {}
            data.lat.array = new Float32Array(NetCDF.getDataVariable('lat').flat())
            data.lat.min = Math.min(...data.lat.array)
            data.lat.max = Math.max(...data.lat.array)
            data.lat.delta = data.lat.array[1] - data.lat.array[0]
            data.lev = {}
            data.lev.array = new Float32Array(NetCDF.getDataVariable('lev').flat())
            data.lev.min = Math.min(...data.lev.array)
            data.lev.max = Math.max(...data.lev.array)
            data.U = {}
            data.U.array = new Float32Array(NetCDF.getDataVariable('U').flat())
            data.U.min = uAttributes['min'].value
            data.U.max = uAttributes['max'].value
            data.V = {}
            data.V.array = new Float32Array(NetCDF.getDataVariable('V').flat())
            data.V.min = vAttributes['min'].value
            data.V.max = vAttributes['max'].value
            resolve(data)
          }
          request.send()
        })
      }
    }
  }
</script>
```

:::

### 属性

| 属性名           | 类型                  | 默认值 | 描述                              |
| ---------------- | --------------------- | ------ | --------------------------------- |
| data             | VcWindData            |        | `required` 指定风场数据。         |
| show             | boolean               | `true` | `optional` 指定风场是否显示。     |
| options          | ParticleSystemOptions |        | `optional` 指定风场数据渲染参数。 |
| viewerParameters | ViewerParameters      |        | `optional` 指定风场数据渲染参数。 |

:::tip

options 默认参数:

```js
{
  maxParticles: 64 * 64,
  particleHeight: 100.0,
  fadeOpacity: 0.996,
  dropRate: 0.003,
  dropRateBump: 0.01,
  speedFactor: 1.0,
  lineWidth: 4.0
}
```

:::

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 方法

| 方法名             | 参数                                                      | 描述                                        |
| ------------------ | --------------------------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>                   | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\>                   | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                                  | 手动卸载组件。                              |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject>                   | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                                      | 获取该组件加载的 Cesium 对象。              |
| getNearestUV       | (longitude: number, latitude: number) => [number, number] | 根据经纬度获取 U V 值。                     |

### 参考

- 3D-Wind-Field: [3D-Wind-Field](https://github.com/RaymanNg/3D-Wind-Field)
