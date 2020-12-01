# GeoJsonDataSource

`vc-datasource-geojson` 组件用于加载 [GeoJSON](https://geojson.org/) 和 [TopoJSON](https://github.com/topojson/topojson) 格式的数据。

## 示例

### 加载 GeoJSON 格式数据源

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-datasource-geojson
          data="./statics/SampleData/lineData/streamline.json"
          @ready="subReady"
          :show="show"
          :options="options"
          ref="ds"
          @click="clicked"
          :entities="entities"
        ></vc-datasource-geojson>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          show: true,
          options: {
            stroke: 'red'
          },
          entities: []
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = cesiumInstance
          for (let i = 0; i < 100; i++) {
            this.entities.push({
              position: { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 },
              label: {
                text: i.toString(),
                pixelOffset: {x: 25, y: 20}
              },
              point: {
                pixelSize: 8,
                outlineWidth: 2,
                color: 'red',
                outlineColor: 'yellow'
              }
            })
          }
        },
        subReady(cesiumInstance) {
          cesiumInstance.viewer.zoomTo(cesiumInstance.cesiumObject)
        },
        clicked (e) {
          console.log(e)
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
      <vc-datasource-geojson
        data="./statics/SampleData/lineData/streamline.json"
        @ready="subReady"
        :show="show"
        :options="options"
        ref="ds"
        @click="clicked"
        :entities="entities"
      ></vc-datasource-geojson>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        options: {
          stroke: 'red'
        },
        entities: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        for (let i = 0; i < 100; i++) {
          this.entities.push({
            position: { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 },
            label: {
              text: i.toString(),
              pixelOffset: { x: 25, y: 20 }
            },
            point: {
              pixelSize: 8,
              outlineWidth: 2,
              color: 'red',
              outlineColor: 'yellow'
            }
          })
        }
      },
      subReady(cesiumInstance) {
        cesiumInstance.viewer.zoomTo(cesiumInstance.cesiumObject)
      },
      clicked(e) {
        console.log(e)
      }
    }
  }
</script>
```

## 属性

| 属性名        | 类型                  | 默认值  | 描述                                                   |
| ------------- | --------------------- | ------- | ------------------------------------------------------ |
| data          | String\|Object        |         | `required` 指定要加载的 GeoJSON 或者 TopoJSON 的 url。 |
| show          | Boolean               | `true`  | `optional` 指定数据源是否显示。                        |
| entities      | Array                 | `[]`    | `optional`指定要添加到该数据源的实体集合。             |
| options       | Object                |         | `optional` 指定以下属性：                              |
| ------------- | --------------------- | ------- | ------------------------------------------------------ |
| sourceUri     | String                |         |                                                        |
| markerSize    | Number                |         | 点大小。                                               |
| markerSymbol  | String                |         | 点风格。                                               |
| markerColor   | String\|Object\|Array |         | 点颜色。                                               |
| stroke        | String\|Object\|Array |         | 线、面轮廓颜色。                                       |
| strokeWidth   | Number                |         | 线、面轮廓宽度。                                       |
| fill          | String\|Object\|Array |         | 面填充色。                                             |
| clampToGround | Boolean               | `false` | 是否贴地。                                             |
| credit        | String\|Object        |         | 版权信息。                                             |

---

- 参考官方文档： **[GeoJsonDataSource](https://cesium.com/docs/cesiumjs-ref-doc/GeoJsonDataSource.html)**

## 事件

| 事件名            | 参数                                                | 描述                                                                             |
| ----------------- | --------------------------------------------------- | -------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer, cesiumObject}                      | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| changedEvent      |                                                     | 数据源改变时触发。                                                               |
| errorEvent        |                                                     | 数据源发生错误时触发。                                                           |
| loadingEvent      |                                                     | 数据源开始或结束加载时触发。                                                     |
| clusterEvent      | (clusteredEntities, cluster)                        | 数据源聚合事件。                                                                 |
| collectionChanged | (collection, added, removed, changed)               | 数据源实体集合改变时触发。                                                       |
| mousedown         | {button,surfacePosition,target,type,windowPosition} | 鼠标在该数据源上按下时触发。                                                     |
| mouseup           | {button,surfacePosition,target,type,windowPosition} | 鼠标在该数据源上弹起时触发。                                                     |
| click             | {button,surfacePosition,target,type,windowPosition} | 鼠标单击该数据源时触发。                                                         |
| dblclick          | {button,surfacePosition,target,type,windowPosition} | 鼠标左键双击该数据源时触发。                                                     |
| mousemove         | {button,surfacePosition,target,type,windowPosition} | 鼠标移动到该数据源时触发。                                                       |

---
