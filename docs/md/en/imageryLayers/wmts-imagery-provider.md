# WebMapTileServiceImageryProvider

`wmts-imagery-provider` used to load the WMTS service layer, the example will load the service of the TIANDITU.

## Examples

### Add a WMTSImageryLayer to CesiumViewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready" @layerAdded="layerAdded">
       <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <wmts-imagery-provider :url="url" :wmtsStyle="style" :tileMatrixSetID="tileMatrixSetID" :credit="credit" :subdomains="subdomains" :tilingScheme="tilingScheme"
          :tileMatrixLabels="tileMatrixLabels" :contrast="contrast" :token="token" :layer="layer1"></wmts-imagery-provider>
       </imagery-layer>
       <imagery-layer ref="layerText" :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <wmts-imagery-provider :url="urlText" :wmtsStyle="style" :tileMatrixSetID="tileMatrixSetID" :credit="credit" :subdomains="subdomains"
          :tilingScheme="tilingScheme" :tileMatrixLabels="tileMatrixLabels" :token="token" :layer="layer2"></wmts-imagery-provider>
       </imagery-layer>
      </cesium-viewer>
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>switch url</span>
        <md-select v-model="url" placeholder="switch url">
          <md-option
            v-for="item in options"
            :key="item.value"
            :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          layer1: 'img',
          layer2: 'cia',
          url: 'https://{s}.tianditu.com/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
          urlText: 'https://{s}.tianditu.com/cia_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
          style: 'default',
          tileMatrixSetID: 'c',
          tileMatrixLabels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'],
          credit : '天地图WMTS服务',
          subdomains : ['t0','t1','t2','t3','t4','t5','t6','t7'],
          tilingScheme: undefined,
          options: [{
            label: 'image',
            value: 'https://{s}.tianditu.com/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
          }, {
            label: 'vector',
            value: 'https://{s}.tianditu.com/vec_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=vec&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
          }],
          alpha: 1,
          brightness: 1,
          contrast: 1,
          token: '436ce7e50d27eede2f2929307e6b33c0'
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.cesiumInstance = cesiumInstance
          viewer.imageryLayers.removeAll()
          this.tilingScheme = new Cesium.GeographicTilingScheme()
        },
        layerAdded () {
          if (this.$refs.layerText.imageryLayer) {
            const {viewer} = this.cesiumInstance
            viewer.imageryLayers.raiseToTop(this.$refs.layerText.imageryLayer)
          }
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready" @layerAdded="layerAdded">
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <wmts-imagery-provider :url="url" :wmtsStyle="style" :tileMatrixSetID="tileMatrixSetID" :credit="credit" :subdomains="subdomains" :tilingScheme="tilingScheme"
        :tileMatrixLabels="tileMatrixLabels" :token="token"></wmts-imagery-provider>
      </imagery-layer>
      <imagery-layer ref="layerText" :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <wmts-imagery-provider :url="urlText" :wmtsStyle="style" :tileMatrixSetID="tileMatrixSetID" :credit="credit" :subdomains="subdomains"
        :tilingScheme="tilingScheme" :tileMatrixLabels="tileMatrixLabels" :token="token"></wmts-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
    <div class="demo-tool">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      <span>switch url</span>
      <md-select v-model="url" placeholder="switch url">
        <md-option
          v-for="item in options"
          :key="item.value"
          :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'https://{s}.tianditu.com/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
        urlText: 'https://{s}.tianditu.com/cia_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
        style: 'default',
        tileMatrixSetID: 'c',
        tileMatrixLabels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'],
        credit : '天地图WMTS服务',
        subdomains : ['t0','t1','t2','t3','t4','t5','t6','t7'],
        tilingScheme: undefined,
        options: [{
          label: 'image',
          value: 'https://{s}.tianditu.com/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
        }, {
          label: 'vector',
          value: 'https://{s}.tianditu.com/vec_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=vec&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
        }],
        alpha: 1,
        brightness: 1,
        contrast: 1,
        token: '436ce7e50d27eede2f2929307e6b33c0'
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.cesiumInstance = cesiumInstance
        viewer.imageryLayers.removeAll()
        this.tilingScheme = new Cesium.GeographicTilingScheme()
      },
      layerAdded () {
        if (this.$refs.layerText.imageryLayer) {
          const {viewer} = this.cesiumInstance
          viewer.imageryLayers.raiseToTop(this.$refs.layerText.imageryLayer)
        }
      }
    }
  }
</script>
```

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|url|String||`required`The base URL for the WMTS GetTile operation (for KVP-encoded requests) or the tile-URL template (for RESTful requests). The tile-URL template should contain the following variables: {style}, {TileMatrixSet}, {TileMatrix}, {TileRow}, {TileCol}. The first two are optional if actual values are hardcoded or not required by the server. The {s} keyword may be used to specify subdomains.。|
|format|String|'image/jpeg'|`optional` The MIME type for images to retrieve from the server.|
|layer|String||`required`The layer name for WMTS requests.|
|style|String||`required`The style name for WMTS requests.|
|tileMatrixSetID|String||`required`The identifier of the TileMatrixSet to use for WMTS requests.|
|tileMatrixLabels|Array||`optional` A list of identifiers in the TileMatrix to use for WMTS requests, one per TileMatrix level.|
|clock|Clock||optional A Clock instance that is used when determining the value for the time dimension. Required when options.times is specified.|
|times|TimeIntervalCollection||`optional` TimeIntervalCollection with its data property being an object containing time dynamic dimension and their values.|
|dimensions|Object||`optional` A object containing static dimensions and their values.|
|tileWidth|Number|256|`optional` The tile width in pixels.|
|tileHeight|Number|256|`optional` The tile height in pixels.|
|tilingScheme|TilingScheme||`optional` The tiling scheme corresponding to the organization of the tiles in the TileMatrixSet.|
|rectangle|Rectangle|Rectangle.MAX_VALUE|`optional` The rectangle covered by the layer.|
|minimumLevel|Number|0|`optional` The minimum level-of-detail supported by the imagery provider.|
|maximumLevel|Number||`optional` The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.|
|ellipsoid|Ellipsoid||`optional` The ellipsoid. If not specified, the WGS84 ellipsoid is used.|
|credit|Credit | String||`optional` A credit for the data source, which is displayed on the canvas.|
|subdomains|String | Array |'abc'|`optional` The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.|
|token|String|||`optional` service token|
---

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when TiandituImageryLayer is ready. It returns a core class of Cesium, a viewer instance.|
|errorEvent|TileProviderError|Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.|
