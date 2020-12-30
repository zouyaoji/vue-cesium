# CustomDataSource

`vc-datasource-custom` 组件用于加载自定义数据源，手动管理一组实体。

## 示例

### 加载 Custom 数据源

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-datasource-custom ref="datasource" name="custom" :entities="entities" @click="clicked">
          <!-- <vc-entity @click="clicked" ref="entity1" :position="position" :billboard="billboard" :description="description" :id="id"> </vc-entity>
          <vc-entity ref="enttiy2" :position="position1" :description="description" :cylinder.sync="cylinder1">
            <vc-graphics-cylinder
              ref="cylinder1"
              :length="400000.0"
              :topRadius="200000.0"
              :bottomRadius="200000.0"
              :material="material1"
              :outline="true"
              :outlineColor="outlineColor1"
            ></vc-graphics-cylinder>
          </vc-entity>
          <vc-entity :position="position2" :description="description" :cylinder.sync="cylinder2">
            <vc-graphics-cylinder
              ref="cylinder2"
              :length="400000.0"
              :topRadius="0.0"
              :bottomRadius="200000.0"
              :material="material2"
            ></vc-graphics-cylinder>
          </vc-entity> -->
        </vc-datasource-custom>
        <template v-for="(itemOut, indexOut) of datas">
          <vc-datasource-custom
            :key="indexOut"
            :name="'datasource' + indexOut + '_' + itemOut.color"
            :ref="'ds' + itemOut.name"
            @ready="datasourceReady(itemOut)"
            @clusterEvent="datasourceClusterEvent"
            v-if="itemOut.type == 'point'"
            @click="clicked"
          >
            <template v-for="(item, index) of itemOut.data">
              <vc-entity :key="index" :position="getPosition(item)" @click="clicked" :ref="'entity' + index">
                <vc-graphics-billboard
                  :image="itemOut.iconUrl"
                  :scale="0.5"
                  :show="true"
                  :width="itemOut.width"
                  :height="itemOut.height"
                ></vc-graphics-billboard>
              </vc-entity>
            </template>
          </vc-datasource-custom>
        </template>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          show: true,
          id: 'This is a billboard',
          description: 'Hello Vue Cesium',
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          position: { lng: 108, lat: 35, height: 100 },
          billboard: {},
          description: 'Hello Vue Cesium',
          cylinder1: {},
          position1: { lng: 105.0, lat: 40.0, height: 200000.0 },
          outlineColor1: 'DARK_GREEN',
          material1: {},

          cylinder2: {},
          position2: { lng: 110.0, lat: 40.0, height: 200000.0 },
          material2: 'RED',

          datas: [],
          entities: [
            {
              position: {lng: 105, lat: 35, height: 200},
              point: {
                pixelSize: 5,
                color: 'red'
              }
            },
            {
              position: {lng: 105, lat: 36, height: 300},
              point: {
                pixelSize: 8,
                color: 'yellow'
              }
            },
            {
              position: {lng: 105, lat: 37, height: 400},
              billboard: {
                image: 'https://zouyaoji.top/vue-cesium/favicon.png',
                scale: 0.5
              }
            }
          ]
        }
      },
      mounted() {
        // Promise.all([
        //   this.$refs.entity1.createPromise,
        //   this.$refs.cylinder1.createPromise,
        //   this.$refs.cylinder2.createPromise
        // ]).then((instances) => {
        //   // instances[0].viewer.zoomTo(this.$refs.datasource.cesiumObject)
        //   instances[0].viewer.camera.setView({
        //     destination: new Cesium.Cartesian3(-2310285.0191093646, 5365872.967043371, 3108924.304301176),
        //     orientation: {
        //       heading: 0.07310634629277768,
        //       pitch: -1.5094668006074268,
        //       roll: 0.0003451814958399524
        //     }
        //   })
        // })
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          window.vm = this
          window.viewer = this
          this.material1 = Cesium.Color.GREEN.withAlpha(0.5)
          this.billboard = new Cesium.BillboardGraphics({
            image: 'https://zouyaoji.top/vue-cesium/favicon.png', // default: undefined
            show: true, // default
            pixelOffset: new Cesium.Cartesian2(0, -50), // default: (0, 0)
            eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
            scale: 0.5, // default: 1.0
            color: Cesium.Color.LIME, // default: WHITE
            // rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0
            alignedAxis: Cesium.Cartesian3.ZERO // default
          })
          this.addPoints(true)
        },
        clicked (e) {
          console.log(e)
        },
        datasourceReady(instance) {
          let { Cesium, viewer, cesiumObject } = instance
          const that = this
          this.$refs['ds' + instance.name][0].createPromise.then(({ Cesium, viewer, cesiumObject }) => {
            //开启聚合功能
            cesiumObject.clustering.enabled = true
            cesiumObject.clustering.pixelRange = 30
            cesiumObject.clustering.minimumClusterSize = 3
          })
        },
        datasourceClusterEvent(clusteredEntities, cluster) {
          cluster.label.show = true
          cluster.label.scale = 0.5
          cluster.label.fillColor = Cesium.Color.fromCssColorString('#FFFFFF')
          cluster.label.style = Cesium.LabelStyle.FILL
          cluster.label.font = '30px caption'
          cluster.label.VerticalOrigin = Cesium.VerticalOrigin.BOTTOM
          cluster.label.pixelOffset = new Cesium.Cartesian2(-7, 5)
          cluster.label.disableDepthTestDistance = Number.POSITIVE_INFINITY
          cluster.point.show = true
          //聚合体属性
          cluster.point.id = cluster.label.id
          cluster.point.color = Cesium.Color.LIGHTSLATEGRAY
          if (clusteredEntities.length >= 100) {
            cluster.point.pixelSize = 38
            cluster.label.pixelOffset = new Cesium.Cartesian2(-12, 5)
          } else if (clusteredEntities.length >= 50) {
            cluster.point.pixelSize = 36
          } else if (clusteredEntities.length >= 40) {
            cluster.point.pixelSize = 33
          } else if (clusteredEntities.length >= 30) {
            cluster.point.pixelSize = 28
          } else if (clusteredEntities.length >= 20) {
            cluster.point.pixelSize = 25
          } else if (clusteredEntities.length >= 10) {
            cluster.label.pixelOffset = new Cesium.Cartesian2(-6, 4)
            cluster.label.scale = 0.4
            cluster.point.pixelSize = 20
          } else if (clusteredEntities.length >= 5) {
            cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4)
            cluster.label.scale = 0.4
            cluster.point.pixelSize = 15
          } else {
            cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4)
            cluster.label.scale = 0.4
            cluster.point.pixelSize = 13
          }
        },
        getPosition(item) {
          return {
            lng: Number(item.Longitude),
            lat: Number(item.Latitude),
            height: 1000
          }
        },
        addPoints(flag) {
          const item = {
            id: '1001',
            code: '1001',
            name: 'test',
            iconOn: './statics/SampleData/points/pic.png',
            giscolor: '#fb7228',
            datauri: './statics/SampleData/points/yj.json'
          }
          this.showPoints(item, flag)
        },
        showPoints(item, flag) {
          const that = this
          if (flag) {
            Cesium.Resource.fetchJson(item.datauri).then((res) => {
              const img = new Image()
              img.src = item.iconOn
              img.onload = () => {
                let datas = []
                let data = {
                  name: item.code,
                  type: 'point',
                  clustering: true,
                  data: [],
                  iconUrl: item.iconOn,
                  color: item.giscolor,
                  width: img.width,
                  height: img.height
                }
                data.data = res.reduce((pre, cur) => {
                  return pre.concat({
                    Longitude: cur.Longitude,
                    Latitude: cur.Latitude,
                    id: cur.id,
                    description: cur.name
                  })
                }, [])

                datas.push(data)
                that.datas = datas
              }
            })
          } else {
            this.datas = []
          }
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
      <vc-datasource-custom ref="datasource" name="custom" :entities="entities">
        <vc-entity ref="entity1" :position="position" :billboard="billboard" :description="description" :id="id"> </vc-entity>
        <vc-entity ref="enttiy2" :position="position1" :description="description" :cylinder.sync="cylinder1">
          <vc-graphics-cylinder
            ref="cylinder1"
            :length="400000.0"
            :topRadius="200000.0"
            :bottomRadius="200000.0"
            :material="material1"
            :outline="true"
            :outlineColor="outlineColor1"
          ></vc-graphics-cylinder>
        </vc-entity>
        <vc-entity :position="position2" :description="description" :cylinder.sync="cylinder2">
          <vc-graphics-cylinder
            ref="cylinder2"
            :length="400000.0"
            :topRadius="0.0"
            :bottomRadius="200000.0"
            :material="material2"
          ></vc-graphics-cylinder>
        </vc-entity>
      </vc-datasource-custom>
      <template v-for="(itemOut, indexOut) of datas">
        <vc-datasource-custom
          :key="indexOut"
          :name="'datasource' + indexOut + '_' + itemOut.color"
          :ref="'ds' + itemOut.name"
          @ready="datasourceReady(itemOut)"
          @clusterEvent="datasourceClusterEvent"
          v-if="itemOut.type == 'point'"
          @click="clicked"
        >
          <template v-for="(item, index) of itemOut.data">
            <vc-entity :key="index" :position="getPosition(item)" :ref="'entity' + index">
              <vc-graphics-billboard
                :image="itemOut.iconUrl"
                :scale="0.5"
                :show="true"
                :width="itemOut.width"
                :height="itemOut.height"
              ></vc-graphics-billboard>
            </vc-entity>
          </template>
        </vc-datasource-custom>
      </template>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        id: 'This is a billboard',
        description: 'Hello Vue Cesium',
        image: 'https://zouyaoji.top/vue-cesium/favicon.png',
        position: { lng: 108, lat: 35, height: 100 },
        billboard: {},
        description: 'Hello Vue Cesium',
        cylinder1: {},
        position1: { lng: 105.0, lat: 40.0, height: 200000.0 },
        outlineColor1: 'DARK_GREEN',
        material1: {},

        cylinder2: {},
        position2: { lng: 110.0, lat: 40.0, height: 200000.0 },
        material2: 'RED',

        datas: [],
        entities: [
          {
            position: { lng: 105, lat: 35, height: 200 },
            point: {
              pixelSize: 5,
              color: 'red'
            }
          },
          {
            position: { lng: 105, lat: 36, height: 300 },
            point: {
              pixelSize: 8,
              color: 'yellow'
            }
          }
        ]
      }
    },
    mounted() {
      Promise.all([
        this.$refs.entity1.createPromise,
        this.$refs.cylinder1.createPromise,
        this.$refs.cylinder2.createPromise
      ]).then((instances) => {
        // instances[0].viewer.zoomTo(this.$refs.datasource.cesiumObject)
        instances[0].viewer.camera.setView({
          destination: new Cesium.Cartesian3(-2310285.0191093646, 5365872.967043371, 3108924.304301176),
          orientation: {
            heading: 0.07310634629277768,
            pitch: -1.5094668006074268,
            roll: 0.0003451814958399524
          }
        })
      })
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material1 = Cesium.Color.GREEN.withAlpha(0.5)
        this.billboard = new Cesium.BillboardGraphics({
          image: 'https://zouyaoji.top/vue-cesium/favicon.png', // default: undefined
          show: true, // default
          pixelOffset: new Cesium.Cartesian2(0, -50), // default: (0, 0)
          eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
          horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
          scale: 0.5, // default: 1.0
          color: Cesium.Color.LIME, // default: WHITE
          // rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0
          alignedAxis: Cesium.Cartesian3.ZERO // default
        })
        this.addPoints(true)
      },
      datasourceReady(instance) {
        let { Cesium, viewer, cesiumObject } = instance
        const that = this
        this.$refs['ds' + instance.name][0].createPromise.then(({ Cesium, viewer, cesiumObject }) => {
          //开启聚合功能
          cesiumObject.clustering.enabled = true
          cesiumObject.clustering.pixelRange = 30
          cesiumObject.clustering.minimumClusterSize = 3
        })
      },
      datasourceClusterEvent(clusteredEntities, cluster) {
        cluster.label.show = true
        cluster.label.scale = 0.5
        cluster.label.fillColor = Cesium.Color.fromCssColorString('#FFFFFF')
        cluster.label.style = Cesium.LabelStyle.FILL
        cluster.label.font = '30px caption'
        cluster.label.VerticalOrigin = Cesium.VerticalOrigin.BOTTOM
        cluster.label.pixelOffset = new Cesium.Cartesian2(-7, 5)
        cluster.label.disableDepthTestDistance = Number.POSITIVE_INFINITY
        cluster.point.show = true
        //聚合体属性
        cluster.point.id = cluster.label.id
        cluster.point.color = Cesium.Color.LIGHTSLATEGRAY
        if (clusteredEntities.length >= 100) {
          cluster.point.pixelSize = 38
          cluster.label.pixelOffset = new Cesium.Cartesian2(-12, 5)
        } else if (clusteredEntities.length >= 50) {
          cluster.point.pixelSize = 36
        } else if (clusteredEntities.length >= 40) {
          cluster.point.pixelSize = 33
        } else if (clusteredEntities.length >= 30) {
          cluster.point.pixelSize = 28
        } else if (clusteredEntities.length >= 20) {
          cluster.point.pixelSize = 25
        } else if (clusteredEntities.length >= 10) {
          cluster.label.pixelOffset = new Cesium.Cartesian2(-6, 4)
          cluster.label.scale = 0.4
          cluster.point.pixelSize = 20
        } else if (clusteredEntities.length >= 5) {
          cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4)
          cluster.label.scale = 0.4
          cluster.point.pixelSize = 15
        } else {
          cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4)
          cluster.label.scale = 0.4
          cluster.point.pixelSize = 13
        }
      },
      getPosition(item) {
        return {
          lng: Number(item.Longitude),
          lat: Number(item.Latitude),
          height: 1000
        }
      },
      addPoints(flag) {
        const item = {
          id: '1001',
          code: '1001',
          name: 'test',
          iconOn: './statics/SampleData/points/pic.png',
          giscolor: '#fb7228',
          datauri: './statics/SampleData/points/yj.json'
        }
        this.showPoints(item, flag)
      },
      showPoints(item, flag) {
        const that = this
        if (flag) {
          Cesium.Resource.fetchJson(item.datauri).then((res) => {
            const img = new Image()
            img.src = item.iconOn
            img.onload = () => {
              let datas = []
              let data = {
                name: item.code,
                type: 'point',
                clustering: true,
                data: [],
                iconUrl: item.iconOn,
                color: item.giscolor,
                width: img.width,
                height: img.height
              }
              data.data = res.reduce((pre, cur) => {
                return pre.concat({
                  Longitude: cur.Longitude,
                  Latitude: cur.Latitude,
                  id: cur.id,
                  description: cur.name
                })
              }, [])

              datas.push(data)
              that.datas = datas
            }
          })
        } else {
          this.datas = []
        }
      },
      clicked(e) {
        console.log(e)
      }
    }
  }
</script>
```

## 属性

| 属性名   | 类型    | 默认值 | 描述                                        |
| -------- | ------- | ------ | ------------------------------------------- |
| name     | String  |        | `optional` 指定数据源名字。                 |
| show     | Boolean | `true` | `optional` 指定数据源是否显示。             |
| entities | Array   | `[]`   | `optional` 指定要添加到该数据源的实体集合。 |

---

- 参考官方文档： **[CustomDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CustomDataSource.html)**

## 事件

| 事件名            | 参数                                                       | 描述                                                                             |
| ----------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer, cesiumObject}                             | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| changedEvent      |                                                            | 数据源改变时触发。                                                               |
| errorEvent        |                                                            | 数据源发生错误时触发。                                                           |
| loadingEvent      |                                                            | 数据源开始或结束加载时触发。                                                     |
| clusterEvent      | (clusteredEntities, cluster)                               | 数据源聚合事件。                                                                 |
| collectionChanged | (collection, added, removed, changed)                      | 数据源实体集合改变时触发。                                                       |
| mousedown         | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该数据源上按下时触发。                                                     |
| mouseup           | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该数据源上弹起时触发。                                                     |
| click             | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该数据源时触发。                                                         |
| clickout          | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该数据源外部时触。                                                       |
| dblclick          | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标左键双击该数据源时触发。                                                     |
| mousemove         | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该数据源上移动时触发。                                                     |
| mouseover         | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移动到该数据源时触发。                                                       |
| mouseout          | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移出该数据源时触发。                                                         |

---
