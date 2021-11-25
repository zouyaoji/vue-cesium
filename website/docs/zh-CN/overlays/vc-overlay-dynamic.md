<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-24 15:37:18
 * @LastEditTime: 2021-11-25 23:50:05
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\zh-CN\overlays\vc-overlay-dynamic.md
-->

## VcOverlayDynamic

加载动态对象。

### 基础用法

动态对象组件的基础用法。

:::demo 使用 `vc-overlay-dynamic` 标签在三维球上加载并管理一组动态实体对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer timeline animation>
    <vc-overlay-dynamic ref="dynamicOverlayRef" v-model:currentTime="currentTime" :dynamicOverlays="dynamicOverlays" @ready="ready">
    </vc-overlay-dynamic>
    <vc-layer-imagery :sortOrder="10">
      <vc-provider-imagery-baidumap></vc-provider-imagery-baidumap>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
  </el-row>
</el-row>

<script>
  import { ref, nextTick, onUnmounted } from 'vue'
  export default {
    setup() {
      const generatePosition = num => {
        let list = []
        for (let i = 0; i < num; i++) {
          let lng = 120.65276089 + Math.random() * 0.5
          let lat = 31.310530293 + Math.random() * 0.5
          list.push([lng, lat])
        }
        return list
      }

      const dynamicOverlays = ref([])
      const dynamicOverlayRef = ref(null)
      const currentTime = ref(null)
      window.dynamicOverlays = dynamicOverlays
      window.currentTime = currentTime

      for (let i = 0; i < 50; i++) {
        dynamicOverlays.value.push({
          maxCacheSize: 10, // 最大缓存点位数，实时轨迹不要设置太大；历史轨迹要设置得大于总点位数，不然要丢失数据。
          model: {
            uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',
            scale: 10
          },
          // 轨迹
          path: {
            leadTime: 0,
            trailTime: 0.5,
            resolution: 1,
            width: 3,
            material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }
          },
          // 采样位置
          sampledPositions: [
            {
              position: generatePosition(1)[0], // 给一个初始位置
              interval: 3
            }
          ]
        })
      }

      const unload = () => {
        dynamicOverlayRef.value.unload()
      }
      const load = () => {
        dynamicOverlayRef.value.load()
      }
      const reload = () => {
        dynamicOverlayRef.value.reload()
      }
      let timer
      const ready = ({ viewer }) => {
        viewer.flyTo(dynamicOverlayRef.value.cesiumObject, {
          duration: 3
        })
        // 每隔 3 秒改变一次所有动态对象的位置
        timer = setInterval(() => {
          dynamicOverlayRef.value.overlays.value.forEach(v => v.addPosition(generatePosition(1)[0], 3))
        }, 3000)
      }

      onUnmounted(() => {
        clearInterval(timer)
      })

      return {
        dynamicOverlays,
        dynamicOverlayRef,
        currentTime,
        unload,
        load,
        reload,
        ready
      }
    }
  }
</script>
```

:::

### 属性

| 属性名          | 类型                        | 默认值                       | 描述                                                                       |
| --------------- | --------------------------- | ---------------------------- | -------------------------------------------------------------------------- |
| show            | Boolean                     | `true`                       | `optional` 指定加载的动态对象数据源对象是否显示。                          |
| name            | String                      | `'__vc__overlay__dynamic__'` | `optional` 指定加载的动态对象数据源名字。                                  |
| startTime       | String\| Cesium.JulianDate  |                              | `optional` 指定 `viewer.clock` 时钟的开始时间。                            |
| stopTime        | String\| Cesium.JulianDate  |                              | `optional` 指定 `viewer.clock` 时钟的结束时间。                            |
| currentTime     | String\| Cesium.JulianDate  |                              | `optional` 指定 `viewer.clock` 时钟当前时间。                              |
| clockRange      | Number\| Cesium.ClockRange  | `0`                          | `optional` 指定 `viewer.clock` 时钟走到结束时间时采取的决策。              |
| clockStep       | Number\| Cesium.ClockStep   | `1`                          | `optional` 指定 `viewer.clock` 时钟的运行是按帧还是按系统时间。            |
| shouldAnimate   | Boolean                     | `true`                       | `optional` 指定 `viewer.clock#tick` 是否改变 `viewer.clock` 时钟当前时间。 |
| multiplier      | Number                      | `1.0`                        | `optional` 指定 `viewer.clock#tick` 改变 `viewer.clock` 当前时间的倍数。   |
| dynamicOverlays | Array\<DynamicOverlayOpts\> | `[]`                         | `optional` 指定动态对象采样位置数组。                                      |
| defaultInterval | Number                      | `3.0`                        | `optional` 指定默认位置信息默认刷新间隔，实时改变动态模型位置可用。        |

### 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |

### 参考

- [DC-SDK](http://dc.dvgis.cn/#/editor?type=layer&example=dynamic)
