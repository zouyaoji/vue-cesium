(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[145],{

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/installation.md?vue&type=template&id=4a4b0189

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("安装");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("环境支持 ");

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VueCesium 可以在支持 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("ES2018");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 和 ");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("webgl");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill 。");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "由于 Vue 3 及 Cesium1.85+ 不再支持 IE11，VueCesium 也不再支持 IE 浏览器。", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("| ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" | ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" | ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" | ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" | | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ----------- | | <!-- | Edge ≥ 79 | Firefox ≥ 78 | Chrome ≥ 64 | Safari ≥ 12 |");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("版本 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "VueCesium 目前还处于快速开发迭代中：", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" -->");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用包管理器 ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("我们建议您使用包管理器（NPM，");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Yarn");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("pnpm");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("）安装 VueCesium");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，然后您就可以使用打包工具，例如 ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vite");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("webpack");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta\"># </span><span class=\"language-bash\">选择一个你喜欢的包管理器</span>\n<span class=\"hljs-meta\">\n# </span><span class=\"language-bash\">NPM</span>\n<span class=\"hljs-meta\">$ </span><span class=\"language-bash\">npm install vue-cesium@next --save</span>\n<span class=\"hljs-meta\">\n# </span><span class=\"language-bash\">Yarn</span>\n<span class=\"hljs-meta\">$ </span><span class=\"language-bash\">yarn add vue-cesium@next</span>\n<span class=\"hljs-meta\">\n# </span><span class=\"language-bash\">pnpm</span>\n<span class=\"hljs-meta\">$ </span><span class=\"language-bash\">pnpm install vue-cesium@next</span>\n</code><span class=\"lang-mark\">sh</span></pre>", 1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("如果您的网络环境不好，建议使用香港镜像服务 ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("cnpm");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 或使用 ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("淘宝 npm 镜像");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("浏览器直接引入 ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("通过浏览器 HTML 标签的方式直接引入 VueCesium, 在全局可以使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "VueCesium")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("通过 ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的方式全量引入 ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "VueCesium", -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，根据不同的 ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 提供商有不同的引入方式，我们在这里以 ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("unpkg");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 和");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("jsdelivr");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 举例， 你也可以使用其它的 ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 供应商。");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 unpkg ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入样式 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium@next/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入 Vue3 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入组件库 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 jsDelivr ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入样式 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium@next/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入 Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入组件库 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

const _hoisted_52 = {
  class: "tip"
};

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("我们建议使用 ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 引入 ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "VueCesium", -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的用户在链接地址上锁定版本，以免将来 ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "VueCesium", -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 升级时受到非兼容性更新的影响。锁定版本的方法请查看 ");

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("unpkg.com");

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Hello world ");

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("通过 ");

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的方式我们可以很容易地使用 ");

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "VueCesium", -1);

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 写出一个 Hello world 页面。");

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("在线演示");

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("iframe", {
  height: "500",
  style: {
    "width": "100%"
  },
  scrolling: "no",
  title: "VueCesium Demo",
  src: "https://codepen.io/zouyaoji/embed/bGBOyJM?height=265&theme-id=light&default-tab=html,result",
  frameborder: "no",
  loading: "lazy",
  allowtransparency: "true",
  allowfullscreen: "true"
}, "\n  See the Pen <a href='https://codepen.io/zouyaoji/pen/bGBOyJM'>VueCesium Demo</a> by zouyaoji\n  (<a href='https://codepen.io/zouyaoji'>@zouyaoji</a>) on <a href='https://codepen.io'>CodePen</a>.\n", -1);

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("如果是通过包管理器安装，并希望配合打包工具使用，请阅读下一节：");

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("快速上手");

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

function render(_ctx, _cache) {
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_img = Object(vue_esm_browser["resolveComponent"])("app-img");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    content: "安装",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "huan-jing-zhi-chi",
    tabindex: "-1",
    content: "环境支持",
    href: "#huan-jing-zhi-chi",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#huan-jing-zhi-chi"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://caniuse.com/webgl"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_8]), _hoisted_9, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_10, Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
    src: "https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png",
    alt: "IE",
    title: "null"
  })]), _hoisted_11, Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
    src: "https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png",
    alt: "Firefox",
    title: "null"
  })]), _hoisted_12, Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
    src: "https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png",
    alt: "Chrome",
    title: "null"
  })]), _hoisted_13, Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
    src: "https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png",
    alt: "Safari",
    title: "null"
  })]), _hoisted_14]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ban-ben",
    tabindex: "-1",
    content: "版本",
    href: "#ban-ben",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ban-ben"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://www.npmjs.org/package/vue-cesium"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
      src: "https://img.shields.io/npm/v/vue-cesium/next?style=flat-square",
      alt: "VueCesium version badge",
      title: "null"
    })])]),
    _: 1
  }), _hoisted_17]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-yong-bao-guan-li-qi",
    tabindex: "-1",
    content: "使用包管理器",
    href: "#shi-yong-bao-guan-li-qi",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-bao-guan-li-qi"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createElementVNode"])("strong", null, [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://classic.yarnpkg.com/lang/en/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://pnpm.io/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), _hoisted_23]), _hoisted_24, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://vitejs.dev"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_27]),
    _: 1
  })]), _hoisted_28, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_29, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/cnpm/cnpm"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_30]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://registry.npm.taobao.org"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_32]),
    _: 1
  })]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "liu-lan-qi-zhi-jie-yin-ru",
    tabindex: "-1",
    content: "浏览器直接引入",
    href: "#liu-lan-qi-zhi-jie-yin-ru",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#liu-lan-qi-zhi-jie-yin-ru"
    })]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, _hoisted_40, _hoisted_41, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_42]),
    _: 1
  }), _hoisted_43, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://jsdelivr.com"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_44]),
    _: 1
  }), _hoisted_45, _hoisted_46, _hoisted_47]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-yong-unpkg",
    tabindex: "-1",
    content: "使用 unpkg",
    href: "#shi-yong-unpkg",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_48, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-unpkg"
    })]),
    _: 1
  }), _hoisted_49, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-yong-jsdelivr",
    tabindex: "-1",
    content: "使用 jsDelivr",
    href: "#shi-yong-jsdelivr",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_50, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-jsdelivr"
    })]),
    _: 1
  }), _hoisted_51, Object(vue_esm_browser["createElementVNode"])("div", _hoisted_52, [Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_53, _hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58, _hoisted_59, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_60]),
    _: 1
  }), _hoisted_61])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "hello-world",
    tabindex: "-1",
    content: "Hello world",
    href: "#hello-world",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_62, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#hello-world"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_63, _hoisted_64, _hoisted_65, _hoisted_66, _hoisted_67, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://codepen.io/zouyaoji/pen/bGBOyJM"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_68]),
    _: 1
  })]), _hoisted_69, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_70, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "./#/zh-CN/component/quickstart"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_71]),
    _: 1
  }), _hoisted_72]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/installation.md?vue&type=template&id=4a4b0189

// CONCATENATED MODULE: ./website/docs/zh-CN/installation.md

const script = {}
script.render = render

/* harmony default export */ var installation = __webpack_exports__["default"] = (script);

/***/ })

}]);