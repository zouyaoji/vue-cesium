<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:03
 * @LastEditTime: 2022-02-24 17:08
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\zh-CN\installation.md
-->

# 环境支持

VueCesium 可以在支持 [ES2018](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally) 和 [WebGL](https://caniuse.com/webgl) 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill.

由于 Vue3 及 CesiumJS 1.85+ 不再支持 IE11，所以 VueCesium 也不再支持 IE 浏览器。

| ![edge](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| :----------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :----------------------------------------------------------------------------: |
|                                Edge ≥ 79                                 |                                   Firefox ≥ 78                                    |                                  Chrome ≥ 64                                   |                                  Safari ≥ 12                                   |

# 安装

## 使用包管理器安装

**我们建议您使用包管理器（NPM，[Yarn](https://classic.yarnpkg.com/lang/en/)，[pnpm](https://pnpm.io/)）安装 VueCesium**，然后您就可以使用打包工具，例如 [vite](https://vitejs.dev), [webpack](https://webpack.js.org/)

```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install vue-cesium@next --save

# Yarn
$ yarn add vue-cesium@next

# pnpm
$ pnpm add vue-cesium@next
```

如果您的网络环境不好，建议使用 `nrm` 切换所用的包管理器的资源地址，或直接手动更改。

如果是通过包管理器安装，并希望配合打包工具使用，请阅读下一节：[快速上手](./#/zh-CN/component/quickstart)。

## CDN 引入

VueCesium 支持 CDN 方式引入 VueCesium，这样在 window 上下文中就可以使用 `VueCesium` 了。

不同的 CDN 提供商有不同的引入方式，我们在这里以 [unpkg](https://unpkg.com) 和 [jsdelivr](https://jsdelivr.com) 举例，你也可以使用其它的 CDN 供应商。

如果你的项目使用环境相对封闭，你可以在部署的环境中自己配置 CesiumJS 并引入。

### 使用 unpkg

```html
<head>
  <!-- 引入样式 -->
  <link rel="stylesheet" href="//unpkg.com/vue-cesium@next/dist/index.css" />
  <!-- 引入 Vue3 -->
  <script src="//unpkg.com/vue"></script>
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
  <script src="//cdn.jsdelivr.net/npm/vue"></script>
  <!-- 引入组件库 -->
  <script src="//cdn.jsdelivr.net/npm/vue-cesium@next"></script>
</head>
```

如果你使用 CDN 引入 `VueCesium` ，我们建议在链接地址上锁定版本，以免将来 `VueCesium` 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com) 官方资料。

# Hello world

通过 **CDN** 的方式我们可以很容易地使用 `VueCesium` 写出一个 Hello world 页面。[在线演示](https://codepen.io/zouyaoji/pen/bGBOyJM)

<iframe height="500" style="width: 100%;" scrolling="no" title="VueCesium Demo" src="https://codepen.io/zouyaoji/embed/bGBOyJM?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/zouyaoji/pen/bGBOyJM'>VueCesium Demo</a> by zouyaoji
  (<a href='https://codepen.io/zouyaoji'>@zouyaoji</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
