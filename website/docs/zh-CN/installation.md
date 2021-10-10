<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:03
 * @LastEditTime: 2021-09-03 16:09:58
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\zh-CN\installation.md
-->

# 安装 VueCesium

### 环境支持

- 现代浏览器

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge                                                                   | last 2 versions                                                                   | last 2 versions                                                                | last 2 versions                                                                |

> 由于 Vue3 及 Cesium1.85+ 不再支持 IE11，故而 VueCesium 也不支持 IE11 及之前版本。

### 当前最新版本

VueCesium 目前还处于快速开发迭代中：

[![VueCesium version badge](https://img.shields.io/npm/v/vue-cesium/next?style=flat-square)](https://www.npmjs.org/package/vue-cesium)

### 通过 npm 或者 yarn 安装

**我们推荐使用包管理器的方式安装**，它能更好地和 [vite](https://vitejs.dev), [webpack](https://webpack.js.org/)
打包工具配合使用。

```shell
$ npm install vue-cesium@next --save
```

```shell
$ yarn add vue-cesium@next
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm) 或使用 [阿里巴巴镜像](https://registry.npm.taobao.org)

### 浏览器直接引入

通过浏览器 HTML 标签的方式直接引入 VueCesium, 在全局可以使用 `VueCesium`

通过 **CDN** 的方式全量引入 `VueCesium`，根据不同的 **CDN** 提供商有不同的引入方式，我们在这里以
[unpkg](https://unpkg.com) 和[jsdelivr](https://jsdelivr.com) 举例，
你也可以使用其它的 **CDN** 供应商。

### 使用 unpkg

```html
<head>
  <!-- 引入样式 -->
  <link rel="stylesheet" href="//unpkg.com/vue-cesium@next/dist/index.css" />
  <!-- 引入 Vue -->
  <script src="//unpkg.com/vue@next"></script>
  <!-- 引入组件库 -->
  <script src="//unpkg.com/vue-cesium@next"></script>
</head>
```

### 使用 jsDelivr

```html
<head>
  <!-- 引入样式 -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/vue-cesium@next/dist/index.css" />
  <!-- 引入 Vue -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- 引入组件库 -->
  <script src="//cdn.jsdelivr.net/npm/vue-cesium@next"></script>
</head>
```

:::tip
我们建议使用 **CDN** 引入 `VueCesium` 的用户在链接地址上锁定版本，以免将来 `VueCesium` 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。
:::

### Hello world

通过 **CDN** 的方式我们可以很容易地使用 `VueCesium` 写出一个 Hello world 页面。[在线演示](https://codepen.io/zouyaoji/pen/bGBOyJM)

<iframe height="500" style="width: 100%;" scrolling="no" title="VueCesium Demo" src="https://codepen.io/zouyaoji/embed/bGBOyJM?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/zouyaoji/pen/bGBOyJM'>VueCesium Demo</a> by zouyaoji
  (<a href='https://codepen.io/zouyaoji'>@zouyaoji</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

如果是通过 npm / yarn 安装，并希望配合打包工具使用，请阅读下一节：[快速上手](./#/zh-CN/component/quickstart)。
