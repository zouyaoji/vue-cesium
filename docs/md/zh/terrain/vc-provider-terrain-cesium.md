# CesiumTerrainProvider

`vc-provider-terrain-cesium` 组件用于加载 Cesium 格式的地形，如果`url`为空，默认通过 `Cesium.createWorldTerrain` 加载 CesiumIon 在线全球地形。

## 示例

### 加载 Cesium 格式地形

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery>
          <vc-provider-imagery-bingmaps url="https://dev.virtualearth.net" bmKey="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-" mapStyle="Aerial"></vc-provider-imagery-bingmaps>
        </vc-layer-imagery>
        <vc-provider-terrain-cesium ref="terrain" :requestWaterMask="requestWaterMask"></vc-provider-terrain-cesium>
        <vc-navigation></vc-navigation>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          requestWaterMask: true
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)
          var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)
          viewer.camera.lookAt(target, offset)
          viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
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
      <vc-layer-imagery>
        <vc-provider-imagery-bingmaps
          url="https://dev.virtualearth.net"
          bmKey="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"
          mapStyle="Aerial"
        ></vc-provider-imagery-bingmaps>
      </vc-layer-imagery>
      <vc-provider-terrain-cesium ref="terrain" :requestWaterMask="requestWaterMask"></vc-provider-terrain-cesium>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)
        var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)
        viewer.camera.lookAt(target, offset)
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
      }
    }
  }
</script>
```

## 属性

| 属性名               | 类型    | 默认值  | 描述                                                        |
| -------------------- | ------- | ------- | ----------------------------------------------------------- |
| url                  | String  |         | `required` 指定服务地址。                                   |
| requestVertexNormals | Boolean | `false` | `optional` 指定是否请求其他光照信息，否则使用每个顶点法线。 |
| requestWaterMask     | Boolean | `false` | `optional` 指定是否请求水面数据。                           |
| requestMetadata      | Boolean | `true`  | `optional` 指定是否请求每个切片元数据。                     |
| ellipsoid            | Object  |         | `optional` 指定参考椭球体。                                 |
| credit               | String  |         | `optional` 指定服务的描述信息                               |

---

参考官方文档： [CesiumTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/CesiumTerrainProvider.html)

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
