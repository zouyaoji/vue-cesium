# Czml 数据源

`czml-datasource`

## 示例

### 添加 Czml 数据源到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <czml-datasource :czml="czml" @ready="subReady" :show="show"></czml-datasource>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          show: true,
          czml: [{
              "id" : "document",
              "name" : "Basic CZML billboard and label",
              "version" : "1.0"
          }, {
              "id" : "some-unique-id",
              "name" : "AGI",
              "description" : "<p><a href='http://www.agi.com' target='_blank'>Analytical Graphics, Inc.</a> (AGI) founded Cesium.</p>",
              "billboard" : {
                  "image" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACvSURBVDhPrZDRDcMgDAU9GqN0lIzijw6SUbJJygUeNQgSqepJTyHG91LVVpwDdfxM3T9TSl1EXZvDwii471fivK73cBFFQNTT/d2KoGpfGOpSIkhUpgUMxq9DFEsWv4IXhlyCnhBFnZcFEEuYqbiUlNwWgMTdrZ3JbQFoEVG53rd8ztG9aPJMnBUQf/VFraBJeWnLS0RfjbKyLJA8FkT5seDYS1Qwyv8t0B/5C2ZmH2/eTGNNBgMmAAAAAElFTkSuQmCC",
                  "scale" : 1.5
              },
              "label" : {
                  "fillColor" : {
                      "rgba" : [255, 255, 255, 255]
                  },
                  "font" : "12pt Lucida Console",
                  "horizontalOrigin" : "LEFT",
                  "pixelOffset" : {
                      "cartesian2" : [8, 0]
                  },
                  "style" : "FILL",
                  "text" : "AGI",
                  "showBackground" : true,
                  "backgroundColor" : {
                      "rgba" : [112, 89, 57, 200]
                  }
              },
              "position" : {
                  "cartesian":[
                      1216361.4096947117, -4736253.175342511, 4081267.4865667094
                  ]
              }
          }]
        }
      },
      methods: {
        ready (cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
        },
        subReady (cesiumInstance){
          const { Cesium, viewer, cesiumObject } = cesiumInstance
          viewer.zoomTo(cesiumObject)
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready">
      <czml-datasource :czml="czml" @ready="subReady" :show="show"></czml-datasource>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        czml: [
          {
            id: 'document',
            name: 'Basic CZML billboard and label',
            version: '1.0'
          },
          {
            id: 'some-unique-id',
            name: 'AGI',
            description:
              "<p><a href='http://www.agi.com' target='_blank'>Analytical Graphics, Inc.</a> (AGI) founded Cesium.</p>",
            billboard: {
              image:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACvSURBVDhPrZDRDcMgDAU9GqN0lIzijw6SUbJJygUeNQgSqepJTyHG91LVVpwDdfxM3T9TSl1EXZvDwii471fivK73cBFFQNTT/d2KoGpfGOpSIkhUpgUMxq9DFEsWv4IXhlyCnhBFnZcFEEuYqbiUlNwWgMTdrZ3JbQFoEVG53rd8ztG9aPJMnBUQf/VFraBJeWnLS0RfjbKyLJA8FkT5seDYS1Qwyv8t0B/5C2ZmH2/eTGNNBgMmAAAAAElFTkSuQmCC',
              scale: 1.5
            },
            label: {
              fillColor: {
                rgba: [255, 255, 255, 255]
              },
              font: '12pt Lucida Console',
              horizontalOrigin: 'LEFT',
              pixelOffset: {
                cartesian2: [8, 0]
              },
              style: 'FILL',
              text: 'AGI',
              showBackground: true,
              backgroundColor: {
                rgba: [112, 89, 57, 200]
              }
            },
            position: {
              cartesian: [1216361.4096947117, -4736253.175342511, 4081267.4865667094]
            }
          }
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
      },
      subReady(cesiumInstance) {
        const { Cesium, viewer, cesiumObject } = cesiumInstance
        viewer.zoomTo(cesiumObject)
      }
    }
  }
</script>
```

## 属性

| 属性名    | 类型           | 默认值 | 描述                                      |
| --------- | -------------- | ------ | ----------------------------------------- |
| czml      | String\|Object |        | `required` 指定要加载 czml 对象或者 url。 |
| show      | Boolean        | `true` | `optional` 指定该数据源是否显示。         |
| options   | Object         |        | `optional` 指定以下属性                   |
| sourceUri | String         |        |                                           |
| credit    | String         |        | `optional` 指定数据源描述信息。           |

---

- 官方文档 [CzmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html)

## 事件

| 事件名 | 参数                            | 描述                   |
| ------ | ------------------------------- | ---------------------- |
| ready  | {Cesium, viewer, cesiumObject } | 该组件渲染完毕时触发。 |
