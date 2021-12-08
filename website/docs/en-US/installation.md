<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:03
 * @LastEditTime: 2021-12-08 09:07:03
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\en-US\installation.md
-->

# Installation

### Compatibility

VueCesium can run on browsers that supports [ES2018](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally) and [webgl](https://caniuse.com/webgl).
If you really need to support outdated browsers, please add [Babel](https://babeljs.io/) and Polyfill yourself.

Since Vue 3 and Cesium1.85+ no longer supports IE11, VueCesium does not support IE either.

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79                                                              | Firefox ≥ 78                                                                      | Chrome ≥ 64                                                                    | Safari ≥ 12                                                                    |

### Version

VueCesium is currently in a rapid development iteration:

[![VueCesium version badge](https://img.shields.io/npm/v/vue-cesium/next?style=flat-square)](https://www.npmjs.org/package/vue-cesium)

### Using Package Manager

**We recommend using the package manager (NPM, [Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/)) to install VueCesium**,
so that you can utilize bundlers like [Vite](https://vitejs.dev) and
[webpack](https://webpack.js.org/).

```shell
# Choose a package manager you like.

# NPM
$ npm install vue-cesium@next --save

# Yarn
$ yarn add vue-cesium@next

# pnpm
$ pnpm install vue-cesium@next
```

If your network environment is not good, it is recommended to use a mirror registry [cnpm](https://github.com/cnpm/cnpm) or [Alibaba](https://registry.npm.taobao.org).

### Import in Browser

Directly import VueCesium through browser HTML tags, and use `VueCesium` globally

Introduce `VueCesium` in full through **CDN**. According to different **CDN**
providers, there are different introduction methods. Here we use
[unpkg](https://unpkg.com) and[jsdelivr](https://jsdelivr.com) For example,
You can also use other **CDN** providers.

### Use unpkg

```html
<head>
  <!-- Introduce style -->
  <link rel="stylesheet" href="//unpkg.com/vue-cesium@next/dist/index.css" />
  <!-- Introduce Vue -->
  <script src="//unpkg.com/vue@next"></script>
  <!-- Introduce component library -->
  <script src="//unpkg.com/vue-cesium@next"></script>
</head>
```

### Use jsDelivr

```html
<head>
  <!-- Introduce style -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/vue-cesium@next/dist/index.css" />
  <!-- Introduce Vue -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- Introduce component library -->
  <script src="//cdn.jsdelivr.net/npm/vue-cesium@next"></script>
</head>
```

:::tip
We recommend using **CDN** to introduce `VueCesium` users to lock the version
on the link address, so as not to be affected by incompatible updates when `VueCesium`
is upgraded in the future. Please check [unpkg.com](https://unpkg.com) for
the method to lock the version.
:::

### Hello world

With **CDN**, we can easily use `VueCesium` to
write a Hello world page. [Online Demo](https://codepen.io/zouyaoji/pen/bGBOyJM)

<iframe height="500" style="width: 100%;" scrolling="no" title="VueCesium Demo" src="https://codepen.io/zouyaoji/embed/bGBOyJM?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/zouyaoji/pen/bGBOyJM'>VueCesium Demo</a> by zouyaoji
  (<a href='https://codepen.io/zouyaoji'>@zouyaoji</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If you are installing via package manager and want to use it with
a packaging tool, please read the
next section: [Quick Start](./#/en-US/component/quickstart).
