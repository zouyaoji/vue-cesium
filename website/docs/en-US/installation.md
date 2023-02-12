<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:03
 * @LastEditTime: 2022-12-08 22:02:56
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\en-US\installation.md
-->

# Installation

### Compatibility

Vue for Cesium can run on browsers that supports [ES2018](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally) and [webgl](https://caniuse.com/webgl).
If you really need to support outdated browsers, please add [Babel](https://babeljs.io/) and Polyfill yourself.

Since Vue 3 and Cesium1.85+ no longer supports IE11, Vue for Cesium does not support IE either.

| ![IE](https://unpkg.com/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://unpkg.com/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://unpkg.com/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://unpkg.com/@browser-logos/safari/safari_32x32.png) |
| ----------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Edge ≥ 79                                                   | Firefox ≥ 78                                                           | Chrome ≥ 64                                                         | Safari ≥ 12                                                         |

### Using Package Manager

**We recommend using the package manager (NPM, [Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/)) to install Vue for Cesium**,
so that you can utilize bundlers like [Vite](https://vitejs.dev) and
[webpack](https://webpack.js.org/).

```shell
# Choose a package manager you like.

# NPM
$ npm install vue-cesium --save

# Yarn
$ yarn add vue-cesium

# pnpm
$ pnpm install vue-cesium
```

If your network environment is not good, it is recommended to use a mirror registry [cnpm](https://github.com/cnpm/cnpm) or [Alibaba](https://registry.npmmirror.com/).

### Import in Browser

Directly import Vue for Cesium through browser HTML tags, and use `Vue for Cesium` globally

Introduce `Vue for Cesium` in full through **CDN**. According to different **CDN**
providers, there are different introduction methods. Here we use
[unpkg](https://unpkg.com) and[jsdelivr](https://jsdelivr.com) For example,
You can also use other **CDN** providers.

### Use unpkg

```html
<head>
  <!-- Introduce style -->
  <link rel="stylesheet" href="//unpkg.com/vue-cesium/dist/index.css" />
  <!-- Introduce Vue -->
  <script src="//unpkg.com/vue"></script>
  <!-- Introduce component library -->
  <script src="//unpkg.com/vue-cesium"></script>
</head>
```

### Use jsDelivr

```html
<head>
  <!-- Introduce style -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/vue-cesium/dist/index.css" />
  <!-- Introduce Vue -->
  <script src="//cdn.jsdelivr.net/npm/vue"></script>
  <!-- Introduce component library -->
  <script src="//cdn.jsdelivr.net/npm/vue-cesium"></script>
</head>
```

:::tip
We recommend using **CDN** to introduce `Vue for Cesium` users to lock the version
on the link address, so as not to be affected by incompatible updates when `Vue for Cesium`
is upgraded in the future. Please check [unpkg.com](https://unpkg.com) for
the method to lock the version.
:::

### Hello world

With **CDN**, we can easily use `Vue for Cesium` to
write a Hello world page. [Online Demo](https://codepen.io/zouyaoji/pen/bGBOyJM)

<iframe height="500" style="width: 100%;" scrolling="no" title="Vue for Cesium Demo" src="https://codepen.io/zouyaoji/embed/bGBOyJM?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/zouyaoji/pen/bGBOyJM'>Vue for Cesium Demo</a> by zouyaoji
  (<a href='https://codepen.io/zouyaoji'>@zouyaoji</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If you are installing via package manager and want to use it with
a packaging tool, please read the
next section: [Quick Start](./#/en-US/component/quickstart).
