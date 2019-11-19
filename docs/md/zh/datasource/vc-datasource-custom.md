# CustomDataSource

`vc-datasource-custom` 组件用于加载自定义数据源，手动管理一组实体。

## 示例

### 加载 Custom 数据源

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-datasource-custom name="custom" ref="custom">
          <vc-entity ref="entity1" :position="position" :billboard="billboard" :description="description" :id="id"> </vc-entity>
          <vc-entity ref="enttiy2" :position="position1" :description="description" :cylinder.sync="cylinder1">
            <vc-graphics-cylinder
              ref="cylinder"
              :length="400000.0"
              :topRadius="200000.0"
              :bottomRadius="200000.0"
              :material="material1"
              :outline="true"
              :outlineColor="outlineColor1"
            ></vc-graphics-cylinder>
          </vc-entity>
          <vc-entity ref="entity3" :position="position2" :description="description" :cylinder.sync="cylinder2">
            <vc-graphics-cylinder
              :length="400000.0"
              :topRadius="0.0"
              :bottomRadius="200000.0"
              :material="material2"
              @ready="subReady"
            ></vc-graphics-cylinder>
          </vc-entity>
        </vc-datasource-custom>
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
          material2: 'RED'
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          window.viewer = viewer
          window.vm = this
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
        },
        subReady(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          viewer.zoomTo(viewer.dataSources.get(0))
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
      <vc-datasource-custom name="custom" ref="custom">
        <vc-entity :position="position" :billboard="billboard" :description="description" :id="id"> </vc-entity>
        <vc-entity :position="position1" :description="description" :cylinder.sync="cylinder1">
          <vc-graphics-cylinder
            ref="cylinder"
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
            :length="400000.0"
            :topRadius="0.0"
            :bottomRadius="200000.0"
            :material="material2"
            @ready="subReady"
          ></vc-graphics-cylinder>
        </vc-entity>
      </vc-datasource-custom>
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
        material2: 'RED'
      }
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
      },
      subReady(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.zoomTo(viewer.dataSources.get(0))
      }
    }
  }
</script>
```

## 属性

| 属性名 | 类型    | 默认值 | 描述                            |
| ------ | ------- | ------ | ------------------------------- |
| name   | String  |        | `optional` 指定数据源名字。     |
| show   | Boolean | `true` | `optional` 指定数据源是否显示。 |

---

- 参考官方文档： [CustomDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CustomDataSource.html)

## 事件

| 事件名       | 参数                           | 描述                                                                             |
| ------------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| changedEvent |                                | 数据源改变时触发。                                                               |
| errorEvent   |                                | 数据源发生错误时触发。                                                           |
| loadingEvent |                                | 数据源开始或结束加载时触发。                                                     |

---
