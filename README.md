# VUE CESIUM

<p align="center">
  <img src="https://zouyaoji.top/vue-cesium/favicon.png" width="200px">
</p>
<p align="center">Load the Cesium official offline package or other third-party Cesium packages (such as the SuperMap WebGL package) to the Vue component.</p>

[![npm](https://img.shields.io/npm/v/vue-cesium.svg)]()
[![Travis](https://img.shields.io/travis/zouyaoji/vue-cesium.svg)]()
[![Package Quality](http://npm.packagequality.com/shield/vue-cesium.svg)](http://packagequality.com/#?package=vue-cesium)
[![npm](https://img.shields.io/npm/dm/vue-cesium.svg)]()
[![license](https://img.shields.io/github/license/zouyaoji/vue-cesium.svg)]()

## Languages

- [中文](https://github.com/zouyaoji/vue-cesium/blob/master/README.zh.md)
- [English](https://github.com/zouyaoji/vue-cesium/blob/master/README.md)

## Documentation

[https://zouyaoji.top/vue-cesium](https://zouyaoji.top/vue-cesium)

## Get Start

### Installation

```bash
npm i --save vue-cesium
```

### Initialization

```javascript
import Vue from 'vue'
import VueCesuium from 'vue-cesium'

Vue.use(VueCesium, {
  // cesiumPath is the path of the Cesium library, such as
  // cesiumPath: './statics/Cesium'
  // use online reference for http
  // cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build'
  // use online reference for https
  cesiumPath: 'https://zouyaoji.top/vue-cesium'
})
```

### Usage

```vue
<template>
  <div class="content">
    <cesium-viewer>
    </cesium-viewer>
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

[Contributing Guide](https://github.com/zouyaoji/vue-cesium/blob/master/CONTRIBUTING.md)

## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2018-present, zouyaoji <370681295@qq.com>

## Thanks

I referenced a lot from the [vue-baidu-map](https://github.com/Dafrok/vue-baidu-map) project. Thanks very much!