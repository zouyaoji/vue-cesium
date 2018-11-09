# VUE CESIUM

<p align="center">
  <img src="https://zouyaoji.top/vue-cesium/favicon.png" width="200px">
</p>
<p align="center">加载Cesium官方Build包或者其他第三方Cesium包（如超图WebGL的Build包）到Vue组件。</p>

[![npm](https://img.shields.io/npm/v/vue-cesium.svg)]()
[![Travis](https://img.shields.io/travis/zouyaoji/vue-cesium.svg)]()
[![Package Quality](http://npm.packagequality.com/shield/vue-cesium.svg)](http://packagequality.com/#?package=vue-cesium)
[![npm](https://img.shields.io/npm/dm/vue-cesium.svg)]()
[![license](https://img.shields.io/github/license/zouyaoji/vue-cesium.svg)]()

## 语言

- [中文](https://github.com/zouyaoji/vue-cesium/blob/master/README.zh.md)
- [English](https://github.com/zouyaoji/vue-cesium/blob/master/README.md)

## 文档

- [在线文档](https://zouyaoji.top/vue-cesium)
- [更多例子](https://github.com/zouyaoji/vue-cesium-demo)

## 开始

打包后的Cesium没办法再通过import方式直接导入到项目中，详见[ISSUE](https://github.com/AnalyticalGraphicsInc/cesium/issues/5278)。故造此轮子可以把打包后的Cesium以动态形式引入你的Vue项目。

业余学习Vue组件开发，持续开发中，有问题可直接联系我交流。<370681295@qq.com>

### 安装

```bash
npm i --save vue-cesium
```

### 初始化

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'

Vue.use(VueCesium, {
  // cesiumPath 是指引用的Cesium的文件夹路径， 如
  // cesiumPath: '/statics/Cesium'
  // 或者在线引用(http)
  // cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build'
  // 在线引用(https)
  cesiumPath: 'https://zouyaoji.top/vue-cesium'
})
```

### 使用

```vue
<template>
  <div class="viewer">
    <cesium-viewer>
    </cesium-viewer>
  </div>
</template>

<style>
.viewer {
  width: 100%;
  height: 400px;
}
</style>
```

## 贡献

[贡献指南](https://github.com/zouyaoji/vue-cesium/blob/master/CONTRIBUTING.md)

## 协议

[MIT 许可证](https://opensource.org/licenses/MIT)

版权所有 (c) 2018至今, zouyaoji <370681295@qq.com>

## 感谢

该项目学习、借鉴了[vue-baidu-map](https://github.com/Dafrok/vue-baidu-map)，特此鸣谢！
