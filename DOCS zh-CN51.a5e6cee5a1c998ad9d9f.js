(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[153],{

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/migration-from-2.x.md?vue&type=template&id=7fd06d3b

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("从 Vue for Cesium 2.x 升级 ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "本文档将帮助你从 Vue for Cesium 2.x 升级至 Vue for Cesium 3.x.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("不兼容更新 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "根据 vue 官方推荐风格和从简原则，简化了一些组件命名，由此带来的不便敬请谅解。以下是不兼容更新的列表：", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-viewer ");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "logo"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" -> "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "showCredit")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-provider-imagery-arcgis-mapserver ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-imagery-provider-arcgis")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-provider-terrain-arcgis-tiled-elevation ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-terrain-provider-arcgis")])], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-provider-imagery-style-mapbox ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-imagery-provider-mapbox")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-provider-imagery-tile-mapservice ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-imagery-provider-tilemap")])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-provider-imagery-openstreetmap ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-imagery-provider-osm")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-provider-imagery-googleearth-enterprise ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-provider-imagery-google")])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-provider-imagery-tile-single ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-imagery-provider-singletile")])], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-primitive-polyline-ground ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-ground-polyline")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-collection-primitive-billboard ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-billboard")])], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-primitive-billboard ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-billboard")])], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-collection-primitive-label ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-label")])], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-primitive-label ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-label")])], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-collection-primitive-point ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-point")])], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-primitive-point ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-point")])], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-collection-primitive-polyline ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-polyline")])], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-primitive-polyline ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-polyline")])], -1);

function render(_ctx, _cache) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cong-vue-for-cesium-two-x-sheng-ji",
    tabindex: "-1",
    content: "从 Vue for Cesium 2.x 升级",
    href: "#cong-vue-for-cesium-two-x-sheng-ji",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cong-vue-for-cesium-two-x-sheng-ji"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bu-jian-rong-geng-xin",
    tabindex: "-1",
    content: "不兼容更新",
    href: "#bu-jian-rong-geng-xin",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bu-jian-rong-geng-xin"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-viewer",
    tabindex: "-1",
    content: "vc-viewer",
    href: "#vc-viewer",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-viewer"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-provider-imagery-arcgis-mapserver",
    tabindex: "-1",
    content: "vc-provider-imagery-arcgis-mapserver",
    href: "#vc-provider-imagery-arcgis-mapserver",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-provider-imagery-arcgis-mapserver"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-provider-terrain-arcgis-tiled-elevation",
    tabindex: "-1",
    content: "vc-provider-terrain-arcgis-tiled-elevation",
    href: "#vc-provider-terrain-arcgis-tiled-elevation",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-provider-terrain-arcgis-tiled-elevation"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-provider-imagery-style-mapbox",
    tabindex: "-1",
    content: "vc-provider-imagery-style-mapbox",
    href: "#vc-provider-imagery-style-mapbox",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-provider-imagery-style-mapbox"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-provider-imagery-tile-mapservice",
    tabindex: "-1",
    content: "vc-provider-imagery-tile-mapservice",
    href: "#vc-provider-imagery-tile-mapservice",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-provider-imagery-tile-mapservice"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-provider-imagery-openstreetmap",
    tabindex: "-1",
    content: "vc-provider-imagery-openstreetmap",
    href: "#vc-provider-imagery-openstreetmap",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-provider-imagery-openstreetmap"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-provider-imagery-googleearth-enterprise",
    tabindex: "-1",
    content: "vc-provider-imagery-googleearth-enterprise",
    href: "#vc-provider-imagery-googleearth-enterprise",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-provider-imagery-googleearth-enterprise"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-provider-imagery-tile-single",
    tabindex: "-1",
    content: "vc-provider-imagery-tile-single",
    href: "#vc-provider-imagery-tile-single",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-provider-imagery-tile-single"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-primitive-polyline-ground",
    tabindex: "-1",
    content: "vc-primitive-polyline-ground",
    href: "#vc-primitive-polyline-ground",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-primitive-polyline-ground"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-collection-primitive-billboard",
    tabindex: "-1",
    content: "vc-collection-primitive-billboard",
    href: "#vc-collection-primitive-billboard",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-collection-primitive-billboard"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-primitive-billboard",
    tabindex: "-1",
    content: "vc-primitive-billboard",
    href: "#vc-primitive-billboard",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-primitive-billboard"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-collection-primitive-label",
    tabindex: "-1",
    content: "vc-collection-primitive-label",
    href: "#vc-collection-primitive-label",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-collection-primitive-label"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-primitive-label",
    tabindex: "-1",
    content: "vc-primitive-label",
    href: "#vc-primitive-label",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-primitive-label"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-collection-primitive-point",
    tabindex: "-1",
    content: "vc-collection-primitive-point",
    href: "#vc-collection-primitive-point",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-collection-primitive-point"
    })]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-primitive-point",
    tabindex: "-1",
    content: "vc-primitive-point",
    href: "#vc-primitive-point",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-primitive-point"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-collection-primitive-polyline",
    tabindex: "-1",
    content: "vc-collection-primitive-polyline",
    href: "#vc-collection-primitive-polyline",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-collection-primitive-polyline"
    })]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vc-primitive-polyline",
    tabindex: "-1",
    content: "vc-primitive-polyline",
    href: "#vc-primitive-polyline",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vc-primitive-polyline"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/migration-from-2.x.md?vue&type=template&id=7fd06d3b

// CONCATENATED MODULE: ./website/docs/zh-CN/migration-from-2.x.md

const script = {}
script.render = render

/* harmony default export */ var migration_from_2_x = __webpack_exports__["default"] = (script);

/***/ })

}]);