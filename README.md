# VUE SUPERMAP CESIUM

<p align="center">
  <img src="https://zouyaoji.top/vue-supermap-cesium/favicon.png" width="200px">
</p>
<p align="center">SuperMap WebGL3D components for Vue 2.x</p>

<!-- [![npm](https://img.shields.io/npm/v/vue-baidu-map.svg)]()
[![Travis](https://img.shields.io/travis/Dafrok/vue-baidu-map.svg)]()
[![Package Quality](http://npm.packagequality.com/shield/vue-baidu-map.svg)](http://packagequality.com/#?package=vue-baidu-map)
[![npm](https://img.shields.io/npm/dm/vue-baidu-map.svg)]()
[![license](https://img.shields.io/github/license/dafrok/vue-baidu-map.svg)]() -->

## Languages

- [中文](https://github.com/zouyaoji/vue-supermap-cesium/blob/master/README.zh.md)
- [English](https://github.com/zouyaoji/vue-supermap-cesium/blob/master/README.md)

## Documentation

[https://zouyaoji.top/vue-supermap-cesium](https://zouyaoji.github.io/vue-supermap-cesium)

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
  // cesiumPath 是指引用的Cesium的文件夹路径， 如
  // cesiumPath: './statics/Cesium' ， 或者在线引用
  // cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build'
  cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build'
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