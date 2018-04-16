# VUE SUPERMAP CESIUM

<p align="center">
  <img src="https://zouyaoji.top/vue-supermap-cesium/favicon.png" width="200px">
</p>
<p align="center">SuperMap iClient 3D for WebGL(built on Cesium) components for Vue 2.x</p>

[![npm](https://img.shields.io/npm/v/vue-supermap-cesium.svg)]()
[![Travis](https://img.shields.io/travis/zouyaoji/vue-supermap-cesium.svg)]()
[![Package Quality](http://npm.packagequality.com/shield/vue-supermap-cesium.svg)](http://packagequality.com/#?package=vue-supermap-cesium)
[![npm](https://img.shields.io/npm/dm/vue-supermap-cesium.svg)]()
[![license](https://img.shields.io/github/license/zouyaoji/vue-supermap-cesium.svg)]()

## Languages

- [中文](https://github.com/zouyaoji/vue-supermap-cesium/blob/master/README.zh.md)
- [English](https://github.com/zouyaoji/vue-supermap-cesium/blob/master/README.md)

## Documentation

[https://zouyaoji.top/vue-supermap-cesium](https://zouyaoji.top/vue-supermap-cesium)

## Get Start

### Installation

```bash
npm i --save vue-supermap-cesium
```

### Initialization

```javascript
import Vue from 'vue'
import SuperMapCesium from 'vue-supermap-cesium'

Vue.use(SuperMapCesium, {
  // cesiumPath is the path of the Cesium library, such as
  // cesiumPath: './statics/Cesium'
  // use online reference for http
  // cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build'
  // use online reference for https
  cesiumPath: 'https://zouyaoji.top/vue-supermap-cesium'
})
```

### Usage

```vue
<template>
  <div class="content">
    <sm-viewer>
    </sm-viewer>
  </div>
</template>

<style>
.content {
  background-color: #f9f9f9;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
```

## Contributing

[Contributing Guide](https://github.com/zouyaoji/vue-supermap-cesium/blob/master/CONTRIBUTING.md)


## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2018-present, zouyaoji <370681295@qq.com>