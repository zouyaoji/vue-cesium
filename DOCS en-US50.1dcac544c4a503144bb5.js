(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.26.10_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/installation.md?vue&type=template&id=2079e713

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Since Vue 3 and Cesium1.85+ no longer supports IE11, Vue for Cesium does not support IE either.", -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Edge ≥ 79"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Firefox ≥ 78"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Chrome ≥ 64"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Safari ≥ 12")])], -1);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta prompt_\"># </span><span class=\"language-bash\">Choose a package manager you like.</span>\n<span class=\"hljs-meta prompt_\">\n# </span><span class=\"language-bash\">NPM</span>\n<span class=\"hljs-meta prompt_\">$ </span><span class=\"language-bash\">npm install vue-cesium --save</span>\n<span class=\"hljs-meta prompt_\">\n# </span><span class=\"language-bash\">Yarn</span>\n<span class=\"hljs-meta prompt_\">$ </span><span class=\"language-bash\">yarn add vue-cesium</span>\n<span class=\"hljs-meta prompt_\">\n# </span><span class=\"language-bash\">pnpm</span>\n<span class=\"hljs-meta prompt_\">$ </span><span class=\"language-bash\">pnpm install vue-cesium</span>\n</code><span class=\"lang-mark\">sh</span></pre>", 1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Directly import Vue for Cesium through browser HTML tags, and use "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" globally")], -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);
const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);
const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);
const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce style --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce component library --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);
const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce style --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce component library --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);
const _hoisted_12 = {
  class: "tip"
};
const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);
const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);
const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);
const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);
const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);
const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("iframe", {
  height: "500",
  style: {
    "width": "100%"
  },
  scrolling: "no",
  title: "Vue for Cesium Demo",
  src: "https://codepen.io/zouyaoji/embed/bGBOyJM?height=265&theme-id=light&default-tab=html,result",
  frameborder: "no",
  loading: "lazy",
  allowtransparency: "true",
  allowfullscreen: "true"
}, "\n  See the Pen <a href='https://codepen.io/zouyaoji/pen/bGBOyJM'>Vue for Cesium Demo</a> by zouyaoji\n  (<a href='https://codepen.io/zouyaoji'>@zouyaoji</a>) on <a href='https://codepen.io'>CodePen</a>.\n", -1);
function render(_ctx, _cache) {
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_img = Object(vue_esm_browser["resolveComponent"])("app-img");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    content: "Installation",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Installation")]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "compatibility",
    tabindex: "-1",
    content: "Compatibility",
    href: "#compatibility",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Compatibility "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#compatibility"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("Vue for Cesium can run on browsers that supports "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("ES2018")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" and "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://caniuse.com/webgl"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("webgl")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(". If you really need to support outdated browsers, please add "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://babeljs.io/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Babel")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" and Polyfill yourself.")]), _hoisted_2, Object(vue_esm_browser["createElementVNode"])("table", null, [Object(vue_esm_browser["createElementVNode"])("thead", null, [Object(vue_esm_browser["createElementVNode"])("tr", null, [Object(vue_esm_browser["createElementVNode"])("th", null, [Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
    src: "https://unpkg.com/@browser-logos/edge/edge_32x32.png",
    alt: "IE",
    title: "null"
  })])]), Object(vue_esm_browser["createElementVNode"])("th", null, [Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
    src: "https://unpkg.com/@browser-logos/firefox/firefox_32x32.png",
    alt: "Firefox",
    title: "null"
  })])]), Object(vue_esm_browser["createElementVNode"])("th", null, [Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
    src: "https://unpkg.com/@browser-logos/chrome/chrome_32x32.png",
    alt: "Chrome",
    title: "null"
  })])]), Object(vue_esm_browser["createElementVNode"])("th", null, [Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
    src: "https://unpkg.com/@browser-logos/safari/safari_32x32.png",
    alt: "Safari",
    title: "null"
  })])])])]), _hoisted_3]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "using-package-manager",
    tabindex: "-1",
    content: "Using Package Manager",
    href: "#using-package-manager",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Using Package Manager "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#using-package-manager"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createTextVNode"])("We recommend using the package manager (NPM, "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://classic.yarnpkg.com/lang/en/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Yarn")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(", "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://pnpm.io/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("pnpm")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(") to install Vue for Cesium")]), Object(vue_esm_browser["createTextVNode"])(", so that you can utilize bundlers like "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://vitejs.dev"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Vite")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" and "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("webpack")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(".")]), _hoisted_4, Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("If your network environment is not good, it is recommended to use a mirror registry "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/cnpm/cnpm"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("cnpm")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" or "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://registry.npmmirror.com/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Alibaba")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(".")]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "import-in-browser",
    tabindex: "-1",
    content: "Import in Browser",
    href: "#import-in-browser",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Import in Browser "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#import-in-browser"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("Introduce "), _hoisted_6, Object(vue_esm_browser["createTextVNode"])(" in full through "), _hoisted_7, Object(vue_esm_browser["createTextVNode"])(". According to different "), _hoisted_8, Object(vue_esm_browser["createTextVNode"])(" providers, there are different introduction methods. Here we use "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("unpkg")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" and"), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://jsdelivr.com"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("jsdelivr")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" For example, You can also use other "), _hoisted_9, Object(vue_esm_browser["createTextVNode"])(" providers.")]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "use-unpkg",
    tabindex: "-1",
    content: "Use unpkg",
    href: "#use-unpkg",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Use unpkg "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#use-unpkg"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "use-jsdelivr",
    tabindex: "-1",
    content: "Use jsDelivr",
    href: "#use-jsdelivr",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Use jsDelivr "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#use-jsdelivr"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createElementVNode"])("div", _hoisted_12, [Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("We recommend using "), _hoisted_13, Object(vue_esm_browser["createTextVNode"])(" to introduce "), _hoisted_14, Object(vue_esm_browser["createTextVNode"])(" users to lock the version on the link address, so as not to be affected by incompatible updates when "), _hoisted_15, Object(vue_esm_browser["createTextVNode"])(" is upgraded in the future. Please check "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("unpkg.com")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" for the method to lock the version.")])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "hello-world",
    tabindex: "-1",
    content: "Hello world",
    href: "#hello-world",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Hello world "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#hello-world"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("With "), _hoisted_16, Object(vue_esm_browser["createTextVNode"])(", we can easily use "), _hoisted_17, Object(vue_esm_browser["createTextVNode"])(" to write a Hello world page. "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://codepen.io/zouyaoji/pen/bGBOyJM"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Online Demo")]),
    _: 1
  })]), _hoisted_18, Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("If you are installing via package manager and want to use it with a packaging tool, please read the next section: "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "./#/en-US/component/quickstart"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Quick Start")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(".")]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/installation.md?vue&type=template&id=2079e713

// CONCATENATED MODULE: ./website/docs/en-US/installation.md

const script = {}
script.render = render

/* harmony default export */ var installation = __webpack_exports__["default"] = (script);

/***/ })

}]);