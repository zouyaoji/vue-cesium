# 圆形扫描

`vc-scan-circle` 组件用于加载圆形扫描效果，实质是通过 `vc-stage-process-post` 加载的一个后期处理特效。参考 [ysCesium|跃焱邵隼](https://www.wellyyss.cn/ysCesium/main/app.html) 。

## 示例

### 加载圆形扫描

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-scan-circle
          @ready="subReady"
          :radius="1500"
          :interval="3000"
          :color="[0,1.0,0,1]"
          :position="position"
        ></vc-scan-circle>
        <vc-layer-imagery>
          <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          position: { lng: 117.217124, lat: 31.809777, height: 3000 }
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
        },
        subReady() {
          const { Cesium, viewer } = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(117.217124, 31.809777, 3500.0),
            orientation: {
              heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north) //东西南北朝向
              pitch: Cesium.Math.toRadians(-90), // default value (looking down)  //俯视仰视视觉
              roll: 0.0 // default value
            },
            duration: 3 //3秒到达战场
          })
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-scan-circle
        @ready="subReady"
        :radius="1500"
        :interval="3000"
        :color="[0,1.0,0,1]"
        :position="position"
      ></vc-scan-circle>
      <vc-layer-imagery>
        <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        position: { lng: 117.217124, lat: 31.809777 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
      },
      subReady() {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(117.217124, 31.809777, 3500.0),
          orientation: {
            heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north) //东西南北朝向
            pitch: Cesium.Math.toRadians(-90), // default value (looking down)  //俯视仰视视觉
            roll: 0.0 // default value
          },
          duration: 3 //3秒到达战场
        })
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| position | Object | | `required` 指定圆形扫描添加的位置。结构：{ lng: number, lat: number, height: number } 或者 Cesium.Cartesian3 |
| color | Object\|String\|Array | `'white'` | `optional` 指定圆形扫描颜色。 |
| radius | Number | `1500` | `optional` 指定圆形扫描半径。单位米。|
| interval | Number | `3000` | `optional` 指定圆形扫描完成一个周期重复频率，单位秒。 |

---

## 事件

| 事件名 | 参数                           | 描述                                                                            |
| ------ | ------------------------------ | ------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例, 以及 PostProcessStage 实例。 |
