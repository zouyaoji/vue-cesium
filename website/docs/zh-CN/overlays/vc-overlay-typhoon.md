## VcOverlayTyphoon

台风覆盖物组件

**注意：** 需要引入样式文件: `import 'vue-cesium/dist/index.css';`

### 基础用法

台风覆盖物组件的基础用法。

:::demo 使用 `vc-overlay-typhoon` 标签在三维球上添加台风路径。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-overlay-typhoon
      v-if="typhoonRoutes.length"
      ref="typhoonRef"
      :typhoon-routes="typhoonRoutes"
      :point-props="pointProps"
      :line-primitive-props="linePrimitiveProps"
      :label-props="labelProps"
      @ready="onTyphoonReady"
      @forecastRouteAdded="onForecastRouteAdded"
    >
    </vc-overlay-typhoon>
    <vc-layer-imagery :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        typhoonRoutes: []
      }
    },
    mounted() {},
    methods: {
      onViewerReady() {
        Cesium.Resource.fetchJson({
          url: 'https://zouyaoji.top/vue-cesium/SampleData/typhoon/202209.json'
        }).then(res => {
          this.typhoonRoutes = res
        })
      },
      onTyphoonReady() {
        // this.$refs.typhoonRef.flyToTyphoonRoute('202209')
      },
      onForecastRouteAdded(e) {
        this.$refs.typhoonRef.flyToTyphoonRoute('202209')
      },
      pointProps(point) {
        const colorDict = {
          '热带低压(TD)': '#30fc31',
          '热带风暴(TS)': '#307efa',
          '强热带风暴(STS)': '#fffc00',
          '台风(TY)': '#ff9c00',
          '强台风(STY)': '#fb7cff',
          '超强台风(SuperTY)': '#fa3030'
        }

        return {
          color: colorDict[point.strong] || '#409eff',
          pixelSize: 8,
          outlineColor: 'rgba(0,0,0,0.6)',
          outlineWidth: 2
        }
      },
      linePrimitiveProps(typhoonDatasource) {
        const forcColorDict = {
          中国香港: '#f5000e',
          日本: '#0000ff',
          中央: '#ff0000',
          美国: '#000000',
          韩国: '#41c1f6',
          广州: '#ede12c',
          上海: '#cdf3dd',
          福州: '#c7c7c7',
          新德里: '#345cdc',
          乌兰巴托: '#12a3dd',
          莫斯科: '#4fea03',
          河内: '#41c1fd',
          曼谷: '#ddc1f6',
          英国: '#E1DB1A'
        }
        return {
          appearance: {
            type: typhoonDatasource.type === 'live' ? 'PolylineColorAppearance' : 'PolylineMaterialAppearance',
            options: {
              material:
                typhoonDatasource.type === 'live'
                  ? undefined
                  : {
                      fabric: {
                        type: 'PolylineDash',
                        uniforms: {
                          color: forcColorDict[typhoonDatasource.typhoonRoute.sets] || '#000000'
                        }
                      }
                    },
              translucent: true
            }
          }
        }
      },
      labelProps(typhoonDatasource) {
        return {
          text: typhoonDatasource.typhoonRoute.name
        }
      },
      unload() {
        this.$refs.typhoonRef.unload()
      },
      load() {
        this.$refs.typhoonRef.load()
      },
      reload() {
        this.$refs.typhoonRef.reload()
      }
    }
  }
</script>
```

:::

### 属性

| 属性名                | 类型                                                                             | 默认值                    | 描述                                     |
| --------------------- | -------------------------------------------------------------------------------- | ------------------------- | ---------------------------------------- |
| typhoonRoutes         | VcTyphoonRoute[]                                                                 | `true`                    | `required` 指定台风路线数组。            |
| clampToGround         | boolean                                                                          | `false`                   | `optional` 指定台风数据是否贴地。        |
| radius7Color          | VcColor                                                                          | `rgba(68, 255, 230, 0.3)` | `optional` 指定 7 级风圈颜色。           |
| radius10Color         | VcColor                                                                          | `rgba(32, 237, 39, 0.3)`  | `optional` 指定 10 级风圈颜色。          |
| radius12Color         | VcColor                                                                          | `rgba(255, 247, 16, 0.3)` | `optional` 指定 12 级风圈颜色。          |
| pointProps            | VcPointProps \| ((e: VcTyphoonPoint) => VcPointProps)                            |                           | `optional` 指定台风路径点的参数。        |
| linePrimitiveProps    | VcPrimitiveProps \| ((e: VcTyphoonDatasource) => VcPrimitiveProps)               |                           | `optional` 指定台风路径线图元的参数。    |
| lineGeometryProps     | VcGeometryPolylineProps \| ((e: VcTyphoonDatasource) => VcGeometryPolylineProps) |                           | `optional` 指定台风路径线对象的参数。    |
| labelProps            | VcLabelProps \| ((e: VcTyphoonDatasource) => VcLabelProps)                       |                           | `optional` 指定台风路径名称标签的参数。. |
| circleOverlayPosition | string \| ((e: VcTyphoonPoint) => string)                                        |                           | `optional` 指定风圈雪碧图偏移位置。      |
| setsArray             | string[]                                                                         |                           | `optional` 指定预报机构数组。            |

### 事件

| 事件名             | 参数                                                                                         | 描述                         |
| ------------------ | -------------------------------------------------------------------------------------------- | ---------------------------- |
| beforeLoad         | (instance: VcComponentInternalInstance)                                                      | 对象加载前触发。             |
| ready              | (readyObj: VcReadyObject)                                                                    | 对象加载成功时触发。         |
| unready            | (error: any)                                                                                 | 对象加载失败时触发。         |
| destroyed          | (instance: VcComponentInternalInstance)                                                      | 对象销毁时触发。             |
| mouseover          | (evt: VcPickEvent)                                                                           | 鼠标移动到台风路径点时触发。 |
| mouseout           | (evt: VcPickEvent)                                                                           | 鼠标移动出台风路径点时触发。 |
| click              | (evt: VcPickEvent)                                                                           | 点击台风路径点时触发.        |
| clickout           | (evt: VcPickEvent)                                                                           | 点击台风路径点之外时触发     |
| forecastRouteAdded | (evt: { livePoint: VcTyphoonPoint; datasource: VcTyphoonDatasource; addedByClick: boolean }) | 预测路径添加时触发。         |

### 方法

| 方法名                | 参数                                                                                                      | 描述                                        |
| --------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| load                  | () => Promise\<false \| VcReadyObject\>                                                                   | 手动加载组件。                              |
| reload                | () => Promise\<false \| VcReadyObject\>                                                                   | 手动重新加载组件。                          |
| unload                | () => Promise\<boolean\>                                                                                  | 手动卸载组件。                              |
| getCreatingPromise    | () => Promise\<boolean \| VcReadyObject>                                                                  | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject       | () => VcCesiumObject                                                                                      | 获取该组件加载的 Cesium 对象。              |
| addTyphoonRoute       | (typhoonRoute: VcTyphoonRoute) => VcTyphoonDatasource                                                     | 添加台风路径。                              |
| playTyphoonRoute      | (tfbh: string) => void                                                                                    | 播放台风路径。                              |
| flyToTyphoonRoute     | (tfbhs: string \| string[]) => void                                                                       | 定位到台风路径。                            |
| showForecast          | (livePoint: VcTyphoonPoint, datasource: VcTyphoonDatasource, index?: number, fromClick?: boolean) => void | 展示实况点的预测台风路径。                  |
| removeTyphoonData     | (datasource: VcTyphoonDatasource) => void                                                                 | 移除台风路径。                              |
| removeAllTyphoonData  | () => void                                                                                                | 移除所有台风路径。                          |
| getTyphoonDatasources | () => VcTyphoonDatasource[]                                                                               | 获取所有台风路径。                          |

### 参考

- [温州台风网](http://www.wztf121.com/)
