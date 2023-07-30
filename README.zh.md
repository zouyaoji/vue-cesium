<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-29 16:12:05
 * @LastEditTime: 2023-07-30 10:00:38
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\README.zh.md
-->
<p align="center">
  <img width="256px" src="https://zouyaoji.top/vue-cesium/images/vue-cesium-logo.svg">
</p>

<p align="center">
  <a href="https://github.com/zouyaoji/vue-cesium/actions/workflows/publish-npm.yml" target="_blank">
    <img src="https://img.shields.io/github/actions/workflow/status/zouyaoji/vue-cesium/publish-npm.yml?style=plastic">
  </a>
  <a href="https://www.npmjs.com/package/vue-cesium" target="_blank">
    <img src="https://img.shields.io/npm/v/vue-cesium?style=plastic">
  </a>
  <a href="https://npmcharts.com/compare/vue-cesium?minimal=true" target="_blank">
    <img src="https://img.shields.io/npm/dm/vue-cesium?style=plastic">
  </a>
  <a href="https://github.com/zouyaoji/vue-cesium/blob/dev/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/zouyaoji/vue-cesium?style=plastic">
  </a>
  <!-- <a href="https://coveralls.io/github/zouyaoji/vue-cesium?branch=dev" target="_blank">
    <img src="https://img.shields.io/coveralls/github/zouyaoji/vue-cesium?style=plastic">
  </a> -->
  <br>
</p>

<p align="center">Vue for Cesium - 基于 Vue 3，面向开发者的 CesiumJS 组件库。</p>
<p align="center">
  <img width="600px" src="https://zouyaoji.top/vue-cesium/images/certified-dev-banner-light-sm_01.png">
</p>

- 💪 Vue 3 组合式 API
- 🔥 用 TypeScript 编写

## 高光时刻 | [English](./README.md)

- 🌎 2022-06-08 用 vue-cesium 开发的月球项目上了 20220608 期[CCTV 新闻联播](https://tv.cctv.com/2022/06/08/VIDEazqfs4AIBuVEvBzob6DA220608.shtml?spm=C31267.PXDaChrrDGdt.EbD5Beq0unIQ.29)21 分 52 秒处。[截图](https://zouyaoji.top/vue-cesium/images/cctv.png)
- 🎉 2022-12-10 通过了 Cesium 开发者认证。[Cesium Certified Developer Program](https://cesium.com/learn/certified-developer-directory/)
- 🚀 2023-04-25 突破 1000 star。

## 开始

请访问 [https://zouyaoji.top/vue-cesium/#/](https://zouyaoji.top/vue-cesium/#/)

- 中国大陆[加速镜像站点](https://vue-cesium.songluck.com)

Vue for Cesium 支持加载官方 CesiumJS，或者其他基于 CesiumJS 的第三方平台，目前通过测试平台有:

- [官方 CesiumJS](https://cesium.com/platform/cesiumjs/)
- [超图 SuperMap iClient3D for WebGL](http://support.supermap.com.cn:8090/webgl/web/index.html)
- [西部世界 Earth SDK](http://www.earthsdk.com/)
- [火星科技 Mars3D](http://mars3d.cn/)
- [数字视觉 DC-SDK](http://dc.dvgis.cn/#/index)

其他未测试的平台，也可以使用 Vue for Cesium ，可通过 vc-viewer 组件的 viewerCreator 传入一个回调方法，viewer 的初始化过程交由用户自主处理，并将初始化后得到到 viewer 返回即可。[详见](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/viewer/src/useViewer.ts#L725)

## 安装

命令

```bash
$ pnpm i
```

将安装所有依赖。

## 预览文档

命令

```bash
$ pnpm website-dev
```

将启动站点供您预览已开发的组件和相关文档。

## 许可

Vue for Cesium is open source software licensed as
[MIT](https://github.com/zouyaoji/vue-cesium/blob/master/LICENSE).

Copyright (c) 2018-present, zouyaoji 370681295@qq.com

## 捐赠者

[链接](https://zouyaoji.top/vue-cesium/#/zh-CN/donations)

## 贡献者

如果没有以下出色的贡献者，这个项目就不会存在

<a href="https://github.com/zouyaoji/vue-cesium/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=zouyaoji/vue-cesium" />
</a>

## 参考

VueJS UI 库： [quasar](https://github.com/quasarframework/quasar) 和 [element-plus](https://github.com/element-plus/element-plus).
