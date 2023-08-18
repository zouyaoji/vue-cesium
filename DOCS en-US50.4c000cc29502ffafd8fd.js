(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/installation.md?vue&type=template&id=736232da

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Installation");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Compatibility ");

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Vue for Cesium can run on browsers that supports ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("ES2018");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and ");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("webgl");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(". If you really need to support outdated browsers, please add ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Babel");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and Polyfill yourself.");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Since Vue 3 and Cesium1.85+ no longer supports IE11, Vue for Cesium does not support IE either.", -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Edge ≥ 79"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Firefox ≥ 78"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Chrome ≥ 64"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Safari ≥ 12")])], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Using Package Manager ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("We recommend using the package manager (NPM, ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Yarn");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("pnpm");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(") to install Vue for Cesium");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", so that you can utilize bundlers like ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Vite");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("webpack");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta\"># </span><span class=\"language-bash\">Choose a package manager you like.</span>\n<span class=\"hljs-meta\">\n# </span><span class=\"language-bash\">NPM</span>\n<span class=\"hljs-meta\">$ </span><span class=\"language-bash\">npm install vue-cesium --save</span>\n<span class=\"hljs-meta\">\n# </span><span class=\"language-bash\">Yarn</span>\n<span class=\"hljs-meta\">$ </span><span class=\"language-bash\">yarn add vue-cesium</span>\n<span class=\"hljs-meta\">\n# </span><span class=\"language-bash\">pnpm</span>\n<span class=\"hljs-meta\">$ </span><span class=\"language-bash\">pnpm install vue-cesium</span>\n</code><span class=\"lang-mark\">sh</span></pre>", 1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("If your network environment is not good, it is recommended to use a mirror registry ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("cnpm");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" or ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Alibaba");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Import in Browser ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Directly import Vue for Cesium through browser HTML tags, and use "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" globally")], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Introduce ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" in full through ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(". According to different ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" providers, there are different introduction methods. Here we use ");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("unpkg");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("jsdelivr");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" For example, You can also use other ");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" providers.");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use unpkg ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce style --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce component library --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use jsDelivr ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce style --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce component library --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

const _hoisted_49 = {
  class: "tip"
};

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("We recommend using ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to introduce ");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" users to lock the version on the link address, so as not to be affected by incompatible updates when ");

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" is upgraded in the future. Please check ");

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("unpkg.com");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" for the method to lock the version.");

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Hello world ");

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("With ");

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", we can easily use ");

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to write a Hello world page. ");

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Online Demo");

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("iframe", {
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

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("If you are installing via package manager and want to use it with a packaging tool, please read the next section: ");

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Quick Start");

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".");

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
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "compatibility",
    tabindex: "-1",
    content: "Compatibility",
    href: "#compatibility",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#compatibility"
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
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://babeljs.io/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), _hoisted_10]), _hoisted_11, Object(vue_esm_browser["createElementVNode"])("table", null, [Object(vue_esm_browser["createElementVNode"])("thead", null, [Object(vue_esm_browser["createElementVNode"])("tr", null, [Object(vue_esm_browser["createElementVNode"])("th", null, [Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
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
  })])])])]), _hoisted_12]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "using-package-manager",
    tabindex: "-1",
    content: "Using Package Manager",
    href: "#using-package-manager",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#using-package-manager"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createElementVNode"])("strong", null, [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://classic.yarnpkg.com/lang/en/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://pnpm.io/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), _hoisted_18]), _hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://vitejs.dev"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), _hoisted_23]), _hoisted_24, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_25, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/cnpm/cnpm"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_26]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://registry.npmmirror.com/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_28]),
    _: 1
  }), _hoisted_29]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "import-in-browser",
    tabindex: "-1",
    content: "Import in Browser",
    href: "#import-in-browser",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#import-in-browser"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_39]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://jsdelivr.com"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_41]),
    _: 1
  }), _hoisted_42, _hoisted_43, _hoisted_44]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "use-unpkg",
    tabindex: "-1",
    content: "Use unpkg",
    href: "#use-unpkg",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_45, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#use-unpkg"
    })]),
    _: 1
  }), _hoisted_46, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "use-jsdelivr",
    tabindex: "-1",
    content: "Use jsDelivr",
    href: "#use-jsdelivr",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#use-jsdelivr"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser["createElementVNode"])("div", _hoisted_49, [Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_50, _hoisted_51, _hoisted_52, _hoisted_53, _hoisted_54, _hoisted_55, _hoisted_56, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_57]),
    _: 1
  }), _hoisted_58])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "hello-world",
    tabindex: "-1",
    content: "Hello world",
    href: "#hello-world",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_59, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#hello-world"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_60, _hoisted_61, _hoisted_62, _hoisted_63, _hoisted_64, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://codepen.io/zouyaoji/pen/bGBOyJM"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_65]),
    _: 1
  })]), _hoisted_66, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_67, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "./#/en-US/component/quickstart"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_68]),
    _: 1
  }), _hoisted_69]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/installation.md?vue&type=template&id=736232da

// CONCATENATED MODULE: ./website/docs/en-US/installation.md

const script = {}
script.render = render

/* harmony default export */ var installation = __webpack_exports__["default"] = (script);

/***/ })

}]);