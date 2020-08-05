# VcPolylineTrail

The `vc-trail-polyline` is used to load the flowling line effect. Refer to [ysCesium|跃焱邵隼](https://www.wellyyss.cn/ysCesium/main/app.html).

## Example

### Load a VcPolylineTrail

#### Preview

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
            :key="'parabola' + index"
            :positions="item"
            color="yellow"
            imageUrl="./statics/SampleData/images/colors1.png"
            :width="5"
            ref="parabola"
          ></vc-trail-polyline>
        </template>
        <!-- 抛物线 -->
        <template v-for="(item, index) in positionsParabola2">
          <vc-trail-polyline
            :key="'parabola2' + index"
            :positions="item"
            color="yellow"
            imageUrl="./statics/SampleData/images/colors.png"
            :width="2"
            ref="parabola"
          ></vc-trail-polyline>
        </template>
        <template v-for="(item, index) in points2">
          <vc-entity :position="item">
            <vc-graphics-point
              :key="index"
              :color="item.color"
              :pixelSize="item.size"
              :disableDepthTestDistance="Number.POSITIVE_INFINITY"
            ></vc-graphics-point>
          </vc-entity>
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
          points: [{ lng: lng + 5, lat: lat - 5 }, { lng: lng - 6, lat: lat - 6 }, { lng: lng - 7, lat: lat - 3 }],
          points2: [
            { id: 1, lng: 115.028495718, lat: 30.200814617, color: 'YELLOW', size: 15 },
            { id: 2, lng: 110.795000473, lat: 32.638540762, color: 'RED', size: 15 },
            { id: 3, lng: 111.267729446, lat: 30.698151246, color: 'BLUE', size: 15 },
            { id: 4, lng: 112.126643144, lat: 32.058588576, color: 'GREEN', size: 15 },
            { id: 5, lng: 114.885884938, lat: 30.395401912, color: 'BLUE', size: 15 },
            { id: 6, lng: 112.190419415, lat: 31.043949588, color: 'BLUE', size: 15 },
            { id: 7, lng: 113.903569642, lat: 30.93205405, color: 'BLUE', size: 15 },
            { id: 8, lng: 112.226648859, lat: 30.367904255, color: 'BLUE', size: 15 },
            { id: 9, lng: 114.86171677, lat: 30.468634833, color: 'BLUE', size: 15 },
            { id: 10, lng: 114.317846048, lat: 29.848946148, color: 'BLUE', size: 15 },
            { id: 11, lng: 113.371985426, lat: 31.70498833, color: 'BLUE', size: 15 },
            { id: 12, lng: 109.468884533, lat: 30.289012191, color: 'BLUE', size: 15 },
            { id: 13, lng: 113.414585069, lat: 30.368350431, color: 'SALMON', size: 15 },
            { id: 14, lng: 112.892742589, lat: 30.409306203, color: 'WHITE', size: 15 },
            { id: 15, lng: 113.16085371, lat: 30.667483468, color: 'SALMON', size: 15 },
            { id: 16, lng: 110.670643354, lat: 31.74854078, color: 'PINK', size: 15 }
          ],
          positionsParabola2: []
        }
      },
      created() {
        const { points, center, positionsParabola, positionsParabola2, points2 } = this
        for (let i = 0; i < points.length; i++) {
          const positions = this.parabolaEquation({ startPoint: center, endPoint: points[i], height: 100000, num: 100 })
          positionsParabola.push(positions)
        }
        for (let i = 0; i < points2.length; i++) {
          const positions = this.parabolaEquation({
            startPoint: { lng: lng, lat: lat },
            endPoint: points2[i],
            height: 50000,
            num: 100
          })
          positionsParabola2.push(positions)
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

#### Code

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
        :loop="false"
        clampToGround
      ></vc-trail-polyline>
      <!-- 抛物线 -->
      <template v-for="(item, index) in positionsParabola">
        <vc-trail-polyline
          :key="'parabola' + index"
          :positions="item"
          color="yellow"
          imageUrl="./statics/SampleData/images/colors1.png"
          :width="5"
          ref="parabola"
        ></vc-trail-polyline>
      </template>
      <!-- 抛物线 -->
      <template v-for="(item, index) in positionsParabola2">
        <vc-trail-polyline
          :key="'parabola2' + index"
          :positions="item"
          color="yellow"
          imageUrl="./statics/SampleData/images/colors.png"
          :width="2"
          ref="parabola"
        ></vc-trail-polyline>
      </template>
      <template v-for="(item, index) in points2">
        <vc-entity :position="item">
          <vc-graphics-point
            :key="index"
            :color="item.color"
            :pixelSize="item.size"
            :disableDepthTestDistance="Number.POSITIVE_INFINITY"
          ></vc-graphics-point>
        </vc-entity>
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
        points: [{ lng: lng + 5, lat: lat - 5 }, { lng: lng - 6, lat: lat - 6 }, { lng: lng - 7, lat: lat - 3 }],
        points2: [
          { id: 1, lng: 115.028495718, lat: 30.200814617, color: 'YELLOW', size: 15 },
          { id: 2, lng: 110.795000473, lat: 32.638540762, color: 'RED', size: 15 },
          { id: 3, lng: 111.267729446, lat: 30.698151246, color: 'BLUE', size: 15 },
          { id: 4, lng: 112.126643144, lat: 32.058588576, color: 'GREEN', size: 15 },
          { id: 5, lng: 114.885884938, lat: 30.395401912, color: 'BLUE', size: 15 },
          { id: 6, lng: 112.190419415, lat: 31.043949588, color: 'BLUE', size: 15 },
          { id: 7, lng: 113.903569642, lat: 30.93205405, color: 'BLUE', size: 15 },
          { id: 8, lng: 112.226648859, lat: 30.367904255, color: 'BLUE', size: 15 },
          { id: 9, lng: 114.86171677, lat: 30.468634833, color: 'BLUE', size: 15 },
          { id: 10, lng: 114.317846048, lat: 29.848946148, color: 'BLUE', size: 15 },
          { id: 11, lng: 113.371985426, lat: 31.70498833, color: 'BLUE', size: 15 },
          { id: 12, lng: 109.468884533, lat: 30.289012191, color: 'BLUE', size: 15 },
          { id: 13, lng: 113.414585069, lat: 30.368350431, color: 'SALMON', size: 15 },
          { id: 14, lng: 112.892742589, lat: 30.409306203, color: 'WHITE', size: 15 },
          { id: 15, lng: 113.16085371, lat: 30.667483468, color: 'SALMON', size: 15 },
          { id: 16, lng: 110.670643354, lat: 31.74854078, color: 'PINK', size: 15 }
        ],
        positionsParabola2: []
      }
    },
    created() {
      const { points, center, positionsParabola, positionsParabola2, points2 } = this
      for (let i = 0; i < points.length; i++) {
        const positions = this.parabolaEquation({ startPoint: center, endPoint: points[i], height: 100000, num: 100 })
        positionsParabola.push(positions)
      }
      for (let i = 0; i < points2.length; i++) {
        const positions = this.parabolaEquation({
          startPoint: { lng: lng, lat: lat },
          endPoint: points2[i],
          height: 50000,
          num: 100
        })
        positionsParabola2.push(positions)
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
## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| positions | Array | | `optional` Specifies an array of positions representing lines. **Structure: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| show | Boolean | `true` | `optional` Specifies whether the line is visible. |
| width | Number | `1.0` | `optional` Specify the width of the line in pixels. |
| clampToGround | Boolean | `false` | `optional` Whether the specified line is attached to the ground. |
| color | Object\|String\|Array | `'yellow'` | `optional` Specify the color of the line. |
| interval | Number | `3000` | `optional` Specify the time for the line material to flow for one cycle, in milliseconds.|
| imageUrl | String | `''` | `optional` Specify the picture material of the line. |
| loop | Boolean | `true` | `optional` Specifies whether the flow effect of the line is circular. |

---

## Events

| name  | parameter                       | description                                                                                                       |
| ----- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject } | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
