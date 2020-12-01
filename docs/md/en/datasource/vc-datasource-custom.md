# CustomDataSource

The `vc-datasource-custom` component is used to load a dataSource which can be used to manually manage a group of entities.

## Example

### Load a CustomDataSource with `vc-datasource-custom`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-datasource-custom ref="datasource" name="custom" :entities="entities" @click="clicked">
          <vc-entity @click="clicked" ref="entity1" :position="position" :billboard="billboard" :description="description" :id="id"> </vc-entity>
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
            lng: item.Longitude,
            lat: item.Latitude,
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
        clicked (e) {
          console.log(e)
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
      <vc-datasource-custom ref="datasource" name="custom" :entities="entities" @click="clicked">
        <vc-entity @click="clicked" ref="entity1" :position="position" :billboard="billboard" :description="description" :id="id"> </vc-entity>
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
          lng: item.Longitude,
          lat: item.Latitude,
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
      clicked (e) {
        console.log(e)
      }
    }
  }
</script>
```

## Instance Properties

| name     | type    | default | description                                                                   |
| -------- | ------- | ------- | ----------------------------------------------------------------------------- |
| data     | String  |         | `optional` Gets or sets a human-readable name for this instance.              |
| show     | Boolean | `true`  | `optional` Gets whether or not this data source should be displayed.          |
| entities | Array   | `[]`    | `optional` Specify the collection of entities to be added to this datasource. |

---

- Refer to the official document: **[CustomDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CustomDataSource.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| changedEvent | | Triggers when the underlying data changes. |
| errorEvent | | Triggers if an error is encountered during processing. |
| loadingEvent | | Triggers the data source either starts or stops loading. |
| clusterEvent | (clusteredEntities, cluster) | Gets the event that will be raised when a new cluster will be displayed. |
| collectionChanged | (collection, added, removed, changed) | Gets the event that is fired when entities are added or removed from the collection.|

---
