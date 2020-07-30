# 流动线

`vc-trail-polyline` 组件用于加载流动线效果。实质是通过`vc-entity` 和 `vc-graphics-polyline` 加载线，并赋予自定义材质 `PolylineTrailMaterialProperty`实现。参考 [ysCesium|跃焱邵隼](https://www.wellyyss.cn/ysCesium/main/app.html)。

## 示例

### 加载流动线效果

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <!-- 普通折线 -->
        <vc-trail-polyline
          :positions="positionsLine"
          color="yellow"
          imageUrl="./statics/SampleData/images/colors1.png"
          :width="5"
          ref="line"
          :loop="false"
          clampToGround
        ></vc-trail-polyline>
        <!-- 抛物线 -->
        <template v-for="(item, index) in positionsParabola">
          <vc-trail-polyline
            :key="index"
            :positions="item"
            color="yellow"
            imageUrl="./statics/SampleData/images/colors1.png"
            :width="5"
            ref="parabola"
          ></vc-trail-polyline>
        </template>
        <vc-layer-imagery>
          <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </template>
  <script>
    const lat = 30.598026044
    const lng = 114.302312702
    export default {
      data() {
        return {
          positionsLine: [
            { lng: lng, lat: lat, height: 0 },
            { lng: lng + 1, lat: lat, height: 0 },
            { lng: lng + 1, lat: lat + 1, height: 0 },
            { lng: lng + 2, lat: lat + 1, height: 0 },
            { lng: lng + 2, lat: lat + 2, height: 0 }
          ],
          positionsParabola: [],
          center: { lng: lng - 3, lat: lat - 3 }, //起始点
          maxHeight: 100000,
          points: [{ lng: lng + 5, lat: lat - 5 }, { lng: lng - 6, lat: lat - 6 }, { lng: lng - 7, lat: lat - 3 }]
        }
      },
      created() {
        const { points, center, maxHeight, positionsParabola } = this
        for (let i = 0; i < points.length; i++) {
          const positions = this.parabolaEquation({ startPoint: center, endPoint: points[i], height: maxHeight, num: 100 })
          positionsParabola.push(positions)
        }
      },
      mounted() {
        const promises = []
        this.$refs.parabola.forEach((v) => {
          promises.push(v.createPromise)
        })
        Promise.all([this.$refs.line.createPromise, ...promises]).then(() => {
          const { Cesium, viewer } = this.cesiumInstance
          viewer.zoomTo(viewer.entities)
        })
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
        },
        parabolaEquation(options) {
          // 方程 y=-(4h/L^2)*x^2+h h:顶点高度 L：横纵间距较大者
          const h = options.height && options.height > 5000 ? options.height : 5000
          const L =
            Math.abs(options.startPoint.lng - options.endPoint.lng) > Math.abs(options.startPoint.lat - options.endPoint.lat)
              ? Math.abs(options.startPoint.lng - options.endPoint.lng)
              : Math.abs(options.startPoint.lat - options.endPoint.lat)
          const num = options.num && options.num > 50 ? options.num : 50
          const result = []
          let dlt = L / num
          if (Math.abs(options.startPoint.lng - options.endPoint.lng) > Math.abs(options.startPoint.lat - options.endPoint.lat)) {
            //以 lng 为基准
            const delLat = (options.endPoint.lat - options.startPoint.lat) / num
            if (options.startPoint.lng - options.endPoint.lng > 0) {
              dlt = -dlt
            }
            for (let i = 0; i < num; i++) {
              const tempH = h - (Math.pow(-0.5 * L + Math.abs(dlt) * i, 2) * 4 * h) / Math.pow(L, 2)
              const lng = options.startPoint.lng + dlt * i
              const lat = options.startPoint.lat + delLat * i
              result.push({ lng, lat, height: tempH })
            }
          } else {
            //以 lat 为基准
            let dellng = (options.endPoint.lng - options.startPoint.lng) / num
            if (options.startPoint.lat - options.endPoint.lat > 0) {
              dlt = -dlt
            }
            for (let i = 0; i < num; i++) {
              const tempH = h - (Math.pow(-0.5 * L + Math.abs(dlt) * i, 2) * 4 * h) / Math.pow(L, 2)
              const lng = options.startPoint.lng + dellng * i
              const lat = options.startPoint.lat + dlt * i
              result.push({ lng, lat, height: tempH })
            }
          }
          // 落地
          result.push({ lng: options.endPoint.lng, lat: options.endPoint.lat, height: options.endPoint.height || 0 })
          return result
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
      <!-- 普通折线 -->
      <vc-trail-polyline
        :positions="positionsLine"
        color="yellow"
        imageUrl="./statics/SampleData/images/colors1.png"
        :width="5"
        ref="line"
        clampToGround
        :loop="false"
      ></vc-trail-polyline>
      <!-- 抛物线 -->
      <template v-for="(item, index) in positionsParabola">
        <vc-trail-polyline
          :key="index"
          :positions="item"
          color="yellow"
          imageUrl="./statics/SampleData/images/colors1.png"
          :width="5"
          ref="parabola"
        ></vc-trail-polyline>
      </template>
      <vc-layer-imagery>
        <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
  const lat = 30.598026044
  const lng = 114.302312702
  export default {
    data() {
      return {
        positionsLine: [
          { lng: lng, lat: lat, height: 0 },
          { lng: lng + 1, lat: lat, height: 0 },
          { lng: lng + 1, lat: lat + 1, height: 0 },
          { lng: lng + 2, lat: lat + 1, height: 0 },
          { lng: lng + 2, lat: lat + 2, height: 0 }
        ],
        positionsParabola: [],
        center: { lng: lng - 3, lat: lat - 3 }, //起始点
        maxHeight: 100000,
        points: [{ lng: lng + 5, lat: lat - 5 }, { lng: lng - 6, lat: lat - 6 }, { lng: lng - 7, lat: lat - 3 }]
      }
    },
    created() {
      const { points, center, maxHeight, positionsParabola } = this
      for (let i = 0; i < points.length; i++) {
        const positions = this.parabolaEquation({ startPoint: center, endPoint: points[i], height: maxHeight, num: 100 })
        positionsParabola.push(positions)
      }
    },
    mounted() {
      const promises = []
      this.$refs.parabola.forEach((v) => {
        promises.push(v.createPromise)
      })
      Promise.all([this.$refs.line.createPromise, ...promises]).then(() => {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.zoomTo(viewer.entities)
      })
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
      },
      parabolaEquation(options) {
        // 方程 y=-(4h/L^2)*x^2+h h:顶点高度 L：横纵间距较大者
        const h = options.height && options.height > 5000 ? options.height : 5000
        const L =
          Math.abs(options.startPoint.lng - options.endPoint.lng) > Math.abs(options.startPoint.lat - options.endPoint.lat)
            ? Math.abs(options.startPoint.lng - options.endPoint.lng)
            : Math.abs(options.startPoint.lat - options.endPoint.lat)
        const num = options.num && options.num > 50 ? options.num : 50
        const result = []
        let dlt = L / num
        if (Math.abs(options.startPoint.lng - options.endPoint.lng) > Math.abs(options.startPoint.lat - options.endPoint.lat)) {
          //以 lng 为基准
          const delLat = (options.endPoint.lat - options.startPoint.lat) / num
          if (options.startPoint.lng - options.endPoint.lng > 0) {
            dlt = -dlt
          }
          for (let i = 0; i < num; i++) {
            const tempH = h - (Math.pow(-0.5 * L + Math.abs(dlt) * i, 2) * 4 * h) / Math.pow(L, 2)
            const lng = options.startPoint.lng + dlt * i
            const lat = options.startPoint.lat + delLat * i
            result.push({ lng, lat, height: tempH })
          }
        } else {
          //以 lat 为基准
          let dellng = (options.endPoint.lng - options.startPoint.lng) / num
          if (options.startPoint.lat - options.endPoint.lat > 0) {
            dlt = -dlt
          }
          for (let i = 0; i < num; i++) {
            const tempH = h - (Math.pow(-0.5 * L + Math.abs(dlt) * i, 2) * 4 * h) / Math.pow(L, 2)
            const lng = options.startPoint.lng + dellng * i
            const lat = options.startPoint.lat + dlt * i
            result.push({ lng, lat, height: tempH })
          }
        }
        // 落地
        result.push({ lng: options.endPoint.lng, lat: options.endPoint.lat, height: options.endPoint.height || 0 })
        return result
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| positions | Array | | `optional` 指定表示线条的位置数组。 **结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| width | Number | `1.0` | `optional` 指定线的宽度（像素）。 |
| clampToGround | Boolean | `false` | `optional` 指定线是否贴地。 |
| color | Object\|String\|Array | `'yellow'` | `optional` 指定线的颜色。 |
| interval | Number | `3000` | `optional` 指定线材质流动一个周期的时间，单位毫秒。|
| imageUrl | String | `''` | `optional` 指定线的图片材质。 |
| loop | Boolean | `true` | `optional` 指定线的流动效果是否循环。 |

---

## 事件

| 事件名 | 参数                           | 描述                                                                |
| ------ | ------------------------------ | ------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例, 以及线实体实例。 |
