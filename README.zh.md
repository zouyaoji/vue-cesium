# VUE SUPERMAP CESIUM

<p align="center">
  <img src="https://zouyaoji.top/vue-supermap-cesium/favicon.png" width="200px">
</p>
<p align="center">基于 VUE 2.x 的超图三维场景组件</p>

<!-- [![npm](https://img.shields.io/npm/v/vue-baidu-map.svg)]()
[![Travis](https://img.shields.io/travis/Dafrok/vue-baidu-map.svg)]()
[![Package Quality](http://npm.packagequality.com/shield/vue-baidu-map.svg)](http://packagequality.com/#?package=vue-baidu-map)
[![npm](https://img.shields.io/npm/dm/vue-baidu-map.svg)]()
[![license](https://img.shields.io/github/license/dafrok/vue-baidu-map.svg)]() -->

## 语言

- [中文](https://github.com/zouyaoji/vue-supermap-cesium/blob/master/README.zh.md)
- [English](https://github.com/zouyaoji/vue-supermap-cesium/blob/master/README.md)

## 文档

[https://zouyaoji.top/vue-baidu-map](https://zouyaoji.top/vue-baidu-map)

## 开始

### 安装

```bash
npm i --save vue-supermap-cesium
```

### 初始化

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

### 使用

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

## 贡献

[贡献指南](https://github.com/zouyaoji/vue-supermap-cesium/blob/master/CONTRIBUTING.md)


## 协议

[MIT 许可证](https://opensource.org/licenses/MIT)

版权所有 (c) 2018至今, zouyaoji <370681295@qq.com>
