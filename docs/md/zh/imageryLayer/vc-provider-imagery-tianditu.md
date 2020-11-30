# TiandituImageryProvider

`vc-provider-imagery-tianditu` 组件用加载国家天地图 WMTS 服务。

## 示例

### 加载天地图影像服务图层

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" baseLayerPicker>
        <vc-layer-imagery ref="layerText" :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="20">
          <vc-provider-imagery-tianditu
            mapStyle="cva_c"
            token="436ce7e50d27eede2f2929307e6b33c0"
          ></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="10">
          <vc-provider-imagery-tianditu
            :mapStyle="mapStyle"
            token="436ce7e50d27eede2f2929307e6b33c0"
          ></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>透明度</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
        <span>亮度</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
        <span>对比度</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
        <span>切换服务</span>
        <md-select v-model="mapStyle" placeholder="请选择地图服务类型">
          <md-option v-for="item in options" :key="item.value" :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          protocol: 'http',
          options: [
            {
              value: 'img_c',
              label: '全球影像地图服务(经纬度)'
            },
            {
              value: 'img_w',
              label: '全球影像地图服务(墨卡托)'
            },
            {
              value: 'vec_c',
              label: '全球矢量地图服务(经纬度)'
            },
            {
              value: 'vec_w',
              label: '全球矢量地图服务(墨卡托)'
            },
            {
              value: 'ter_c',
              label: '全球地形晕渲服务(经纬度)'
            },
            {
              value: 'ter_w',
              label: '全球地形晕渲服务(墨卡托)'
            }
          ],
          mapStyle: 'img_c',
          alpha: 1,
          brightness: 1,
          contrast: 1
        }
      },
      methods: {
        ready({ Cesium, viewer }) {
          this.Cesium = Cesium
          this.viewer = viewer
          window.vm = this
          window.viewer = viewer
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
      <vc-layer-imagery ref="layerText" :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="20">
        <vc-provider-imagery-tianditu mapStyle="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="10">
        <vc-provider-imagery-tianditu
          :mapStyle="mapStyle"
          token="436ce7e50d27eede2f2929307e6b33c0"
        ></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>透明度</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>亮度</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>对比度</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>切换服务</span>
      <md-select v-model="mapStyle" placeholder="请选择地图服务类型">
        <md-option v-for="item in options" :key="item.value" :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        protocol: 'http',
        options: [
          {
            value: 'img_c',
            label: '全球影像地图服务(经纬度)'
          },
          {
            value: 'img_w',
            label: '全球影像地图服务(墨卡托)'
          },
          {
            value: 'vec_c',
            label: '全球矢量地图服务(经纬度)'
          },
          {
            value: 'vec_w',
            label: '全球矢量地图服务(墨卡托)'
          },
          {
            value: 'ter_c',
            label: '全球地形晕渲服务(经纬度)'
          },
          {
            value: 'ter_w',
            label: '全球地形晕渲服务(墨卡托)'
          }
        ],
        mapStyle: 'img_c',
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.Cesium = Cesium
        this.viewer = viewer
      }
    }
  }
</script>
```

## 属性

| 属性名       | 类型           | 默认值                 | 描述                                                                         |
| ------------ | -------------- | ---------------------- | ---------------------------------------------------------------------------- |
| mapStyle     | String         | `'img_w'`              | `optional` 天地图服务地图类型。                                              |
| credit       | String\|Object | `'天地图全球影像服务'` | `optional` 服务版权描述信息。                                                |
| token        | String         |                        | `optional` 天地图应用 key。 [申请地址](http://lbs.tianditu.gov.cn/home.html) |
| protocol     | String         | `https`                | `optional` 指定请求协议类型。可以是`https`或者`http`                         |
| minimumLevel | Number         | `0`                    | `optional` 最小层级。                                                        |
| maximumLevel | Number         | `20`                   | `optional` 最大层级。                                                        |

---

- mapStyle 可取值：
  - 'cia_c': 天地图全球中文注记服务（经纬度坐标系）。
  - 'cia_w': 天地图全球中文注记服务（墨卡托投影坐标系）。
  - 'cta_c': 天地图全球地形中文注记服务（经纬度坐标系）。
  - 'cta_w': 天地图全球地形中文注记服务（墨卡托投影坐标系）。
  - 'cva_c': 天地图全球矢量中文注记服务（经纬度坐标系）。
  - 'cva_w': 天地图全球矢量中文注记服务（墨卡托投影坐标系）。
  - 'ela_c': 天地图全球影像英文注记服务（经纬度坐标系）。
  - 'ela_w': 天地图全球影像英文注记服务（墨卡托投影坐标系）。
  - 'eva_c': 天地图全球矢量英文注记服务（经纬度坐标系）。
  - 'eva_w': 天地图全球矢量英文注记服务（墨卡托投影坐标系）。
  - 'img_c': 天地图全球影像地图服务（经纬度坐标系）。
  - 'img_w': 天地图全球影像地图服务（墨卡托投影坐标系）。
  - 'ter_c': 天地图全球地形晕渲服务（经纬度坐标系）。
  - 'ter_w': 天地图全球地形晕渲服务（墨卡托投影坐标系）。
  - 'vec_c': 天地图全球矢量地图服务（经纬度坐标系）。
  - 'vec_w': 天地图全球矢量地图服务（墨卡托投影坐标系）。

* 参考超图官方文档： **[TiandituImageryProvider](http://support.supermap.com.cn:8090/webgl/Build/Documentation/TiandituImageryProvider.html)**

## 事件

| 事件名       | 参数              | 描述                                                                |
| ------------ | ----------------- | ------------------------------------------------------------------- |
| ready        | {Cesium, viewer}  | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。                 |
| errorEvent   | TileProviderError | 当图层的提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider   | 当图层可用时触发, 返回 ImageryProvider 实例。                       |

---
