# VUE SUPERMAP CESIUM

<p align="center">
  <img src="https://zouyaoji.top/vue-supermap-cesium/favicon.png" width="200px">
</p>
<p align="center">基于 VUE 2.x 的 SuperMap iClient 3D for WebGL(built on Cesium)组件</p>

[![npm](https://img.shields.io/npm/v/vue-supermap-cesium.svg)]()
[![Travis](https://img.shields.io/travis/zouyaoji/vue-supermap-cesium.svg)]()
[![Package Quality](http://npm.packagequality.com/shield/vue-supermap-cesium.svg)](http://packagequality.com/#?package=vue-supermap-cesium)
[![npm](https://img.shields.io/npm/dm/vue-supermap-cesium.svg)]()
[![license](https://img.shields.io/github/license/zouyaoji/vue-supermap-cesium.svg)]()

## 语言

- [中文](https://github.com/zouyaoji/vue-supermap-cesium/blob/master/README.zh.md)
- [English](https://github.com/zouyaoji/vue-supermap-cesium/blob/master/README.md)

## 文档

[https://zouyaoji.top/vue-supermap-cesium](https://zouyaoji.top/vue-supermap-cesium)

## 开始

打包后的Cesium没办法再通过import方式直接导入到项目中，详见[ISSUE](https://github.com/AnalyticalGraphicsInc/cesium/issues/5278)。故造此轮子可以把打包后的Cesium以动态形式引入你的Vue项目。

本人工作目前主要弄CS项目，此项目更新得慢，请谅解。

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
  // cesiumPath: './statics/Cesium'
  // 或者在线引用(http)
  // cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build'
  // 在线引用(https)
  cesiumPath: 'https://zouyaoji.top/vue-supermap-cesium'
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

## 感谢

该项目学习、借鉴了[vue-baidu-map](https://github.com/Dafrok/vue-baidu-map)，特此鸣谢！
