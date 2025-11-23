---
title: 安装
lang: zh-CN
---

# 安装

Vue for Cesium 可以在支持 [ES2018](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally) 和 [WebGL](https://caniuse.com/webgl) 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill.

由于 Vue3 及 CesiumJS 1.85+ 不再支持 IE11，所以 Vue for Cesium 也不再支持 IE 浏览器。

| ![edge](https://unpkg.com/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://unpkg.com/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://unpkg.com/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://unpkg.com/@browser-logos/safari/safari_32x32.png) |
| :-----------------------------------------------------------: | :--------------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: |
|                           Edge ≥ 79                           |                              Firefox ≥ 78                              |                             Chrome ≥ 64                             |                             Safari ≥ 12                             |

### 版本

[![VueCesium version badge](https://img.shields.io/npm/v/vue-cesium.svg?style=flat-square)](https://www.npmjs.org/package/vue-cesium)

## 使用包管理器

**我们建议您使用包管理器 (如 NPM、 [Yarn](https://classic.yarnpkg.com/lang/en/) 或 [pnpm](https://pnpm.io/)) 安装 Vue for Cesium**，
然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev) 或 [webpack](https://webpack.js.org/)。

```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install vue-cesium --save

# Yarn
$ yarn add vue-cesium

# pnpm
$ pnpm install vue-cesium
```

如果您的网络环境不好，建议使用相关镜像服务 [cnpm](https://github.com/cnpm/cnpm) 或 [中国NPM镜像](https://registry.npmmirror.com/).

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 Vue for Cesium，然后就可以使用全局变量 `VueCesium` 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 [unpkg](https://unpkg.com) 和 [jsDelivr](https://jsdelivr.com) 举例。
您也可以使用其它的 CDN 供应商。

### unpkg

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/vue-cesium/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/vue-cesium"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/vue-cesium/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/vue-cesium"></script>
</head>
```

:::tip

我们建议使用 CDN 引入 Vue for Cesium 的用户在链接地址上锁定版本，以免将来 Vue for Cesium 升级时受到非兼容性更新的影响。 锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。

:::

## Hello World

通过 CDN 的方式我们可以很容易地使用 Vue for Cesium 写出一个 Hello world 页面。 [在线演示](https://codepen.io/zouyaoji/pen/bGBOyJM)

<iframe height="469" style="width: 100%;" scrolling="no" title="bGBOyJM" src="https://codepen.io/zouyaoji/embed/bGBOyJM?height=469&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/zouyaoji/pen/bGBOyJM'>bGBOyJM</a> by zouyaoji
  (<a href='https://codepen.io/zouyaoji'>@zouyaoji</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

如果是通过包管理器安装，并希望配合打包工具使用，请阅读下一节：[快速上手](/zh-CN/guide/quickstart).
