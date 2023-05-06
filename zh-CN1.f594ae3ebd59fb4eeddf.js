(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[206],{

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--12-0!./website/pages/component.vue?vue&type=template&id=0cfc71b0&scoped=true


const _withScopeId = n => (Object(vue_esm_browser["pushScopeId"])("data-v-0cfc71b0"), n = n(), Object(vue_esm_browser["popScopeId"])(), n);

const _hoisted_1 = {
  class: "page-container page-component"
};
const _hoisted_2 = {
  class: "page-component__content"
};
const _hoisted_3 = {
  class: "content-wrap"
};
const _hoisted_4 = {
  style: {
    "padding-left": "20px"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_side_nav = Object(vue_esm_browser["resolveComponent"])("side-nav");

  const _component_el_scrollbar = Object(vue_esm_browser["resolveComponent"])("el-scrollbar");

  const _component_router_view = Object(vue_esm_browser["resolveComponent"])("router-view");

  const _component_footer_nav = Object(vue_esm_browser["resolveComponent"])("footer-nav");

  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_ad_sense = Object(vue_esm_browser["resolveComponent"])("ad-sense");

  const _component_el_backtop = Object(vue_esm_browser["resolveComponent"])("el-backtop");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createBlock"])(_component_el_scrollbar, {
    ref: "componentScrollBar",
    class: "page-component__scroll"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createElementVNode"])("div", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_el_scrollbar, {
      class: "page-component__nav"
    }, {
      default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_side_nav, {
        data: $data.navsData[$data.lang],
        base: `/${$data.lang}/component`
      }, null, 8, ["data", "base"])]),
      _: 1
    }), Object(vue_esm_browser["createElementVNode"])("div", _hoisted_2, [Object(vue_esm_browser["createElementVNode"])("div", _hoisted_3, [Object(vue_esm_browser["createVNode"])(_component_router_view, {
      class: "content"
    })]), Object(vue_esm_browser["createVNode"])(_component_footer_nav), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      href: "https://xn--4gq62f52gdss.com/#/register?code=hbv1fTgZ"
    }, {
      default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createElementVNode"])("span", _hoisted_4, Object(vue_esm_browser["toDisplayString"])($options.otherAd), 1)]),
      _: 1
    }), $data.adSenseShow ? (Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createBlock"])(_component_ad_sense, {
      key: 0,
      adSlot: "8270352624",
      adStyle: {
        display: 'block',
        'text-align': 'center'
      },
      dataAdLayout: "in-article",
      dataAdFormat: "fluid"
    })) : Object(vue_esm_browser["createCommentVNode"])("", true)]), $options.showBackToTop ? (Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createBlock"])(_component_el_backtop, {
      key: 0,
      target: ".page-component__scroll .el-scrollbar__wrap",
      right: 100,
      bottom: 50
    })) : Object(vue_esm_browser["createCommentVNode"])("", true)])]),
    _: 1
  }, 512);
}
// CONCATENATED MODULE: ./website/pages/component.vue?vue&type=template&id=0cfc71b0&scoped=true

// EXTERNAL MODULE: ./website/bus.js
var bus = __webpack_require__(49);

// EXTERNAL MODULE: ./website/nav.config.json
var nav_config = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/.pnpm/throttle-debounce@2.3.0/node_modules/throttle-debounce/index.umd.js
var index_umd = __webpack_require__(846);

// EXTERNAL MODULE: ./website/components/ad-sense.vue + 4 modules
var ad_sense = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--12-0!./website/pages/component.vue?vue&type=script&lang=js




/* harmony default export */ var componentvue_type_script_lang_js = ({
  data() {
    return {
      lang: this.$route.meta.lang,
      navsData: nav_config,
      scrollTop: 0,
      showHeader: true,
      componentScrollBar: null,
      componentScrollBoxElement: null,
      adSenseShow: false
    };
  },

  components: {
    AdSense: ad_sense["a" /* default */]
  },
  computed: {
    showBackToTop() {
      return !this.$route.path.match(/backtop/);
    },

    otherAd() {
      return this.$route.path.indexOf('/zh-CN/') !== -1 ? '超便宜稳定梯子' : 'Stable VPN Recommendation';
    }

  },
  watch: {
    '$route.path'() {
      // 触发伪滚动条更新
      this.componentScrollBox.scrollTop = 0;
      this.adSenseShow = false;
      this.$nextTick(() => {
        this.componentScrollBar.update();
        this.adSenseShow = true;
      });
    }

  },

  created() {
    bus["a" /* default */].$on('nav-fade', val => {
      this.navFaded = val;
    });
  },

  mounted() {
    this.componentScrollBar = this.$refs.componentScrollBar;
    this.componentScrollBox = this.componentScrollBar.$el.querySelector('.el-scrollbar__wrap');
    this.throttledScrollHandler = Object(index_umd["throttle"])(300, this.handleScroll);
    this.componentScrollBox.addEventListener('scroll', this.throttledScrollHandler);
    document.body.classList.add('is-component');
    this.addContentObserver();
    this.adSenseShow = true;
  },

  unmounted() {
    document.body.classList.remove('is-component');
  },

  beforeUnmount() {
    this.componentScrollBox.removeEventListener('scroll', this.throttledScrollHandler);
    this.observer.disconnect();
  },

  methods: {
    addContentObserver() {
      this.observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            this.renderAnchorHref();
            this.goAnchor();
          }
        }
      });
      this.observer.observe(document.querySelector('.content-wrap'), {
        childList: true
      });
    },

    renderAnchorHref() {
      if (/changelog/g.test(location.href)) return;
      const anchors = document.querySelectorAll('h2 a,h3 a,h4 a,h5 a');
      const basePath = location.href.split('#').splice(0, 2).join('#');
      [].slice.call(anchors).forEach(a => {
        const href = a.getAttribute('href');

        if (href.indexOf('#') === 0) {
          a.href = basePath + href;
        }
      });
    },

    goAnchor() {
      if (location.href.match(/#/g).length > 1) {
        const anchor = location.href.match(/#[^#]+$/g);
        if (!anchor) return;
        const elm = document.querySelector(anchor[0]);
        if (!elm) return;
        setTimeout(() => {
          this.componentScrollBox.scrollTop = elm.offsetTop;
        }, 50);
      }
    },

    handleScroll() {
      const scrollTop = this.componentScrollBox.scrollTop;

      if (this.showHeader !== this.scrollTop > scrollTop) {
        this.showHeader = this.scrollTop > scrollTop;
      }

      if (scrollTop === 0) {
        this.showHeader = true;
      }

      if (!this.navFaded) {
        bus["a" /* default */].$emit('fade-nav');
      }

      this.scrollTop = scrollTop;
    }

  }
});
// CONCATENATED MODULE: ./website/pages/component.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./website/pages/component.vue?vue&type=style&index=0&id=0cfc71b0&lang=scss&scoped=true
var componentvue_type_style_index_0_id_0cfc71b0_lang_scss_scoped_true = __webpack_require__(857);

// CONCATENATED MODULE: ./website/pages/component.vue





componentvue_type_script_lang_js.render = render
componentvue_type_script_lang_js.__scopeId = "data-v-0cfc71b0"

/* harmony default export */ var component = __webpack_exports__["default"] = (componentvue_type_script_lang_js);

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset).
	 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @returns {Function}  A new, throttled, function.
	 */
	function throttle (delay, noTrailing, callback, debounceMode) {
	  /*
	   * After wrapper has stopped being called, this timeout ensures that
	   * `callback` is executed at the proper times in `throttle` and `end`
	   * debounce modes.
	   */
	  var timeoutID;
	  var cancelled = false; // Keep track of the last time `callback` was executed.

	  var lastExec = 0; // Function to clear existing timeout

	  function clearExistingTimeout() {
	    if (timeoutID) {
	      clearTimeout(timeoutID);
	    }
	  } // Function to cancel next exec


	  function cancel() {
	    clearExistingTimeout();
	    cancelled = true;
	  } // `noTrailing` defaults to falsy.


	  if (typeof noTrailing !== 'boolean') {
	    debounceMode = callback;
	    callback = noTrailing;
	    noTrailing = undefined;
	  }
	  /*
	   * The `wrapper` function encapsulates all of the throttling / debouncing
	   * functionality and when executed will limit the rate at which `callback`
	   * is executed.
	   */


	  function wrapper() {
	    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
	      arguments_[_key] = arguments[_key];
	    }

	    var self = this;
	    var elapsed = Date.now() - lastExec;

	    if (cancelled) {
	      return;
	    } // Execute `callback` and update the `lastExec` timestamp.


	    function exec() {
	      lastExec = Date.now();
	      callback.apply(self, arguments_);
	    }
	    /*
	     * If `debounceMode` is true (at begin) this is used to clear the flag
	     * to allow future `callback` executions.
	     */


	    function clear() {
	      timeoutID = undefined;
	    }

	    if (debounceMode && !timeoutID) {
	      /*
	       * Since `wrapper` is being called for the first time and
	       * `debounceMode` is true (at begin), execute `callback`.
	       */
	      exec();
	    }

	    clearExistingTimeout();

	    if (debounceMode === undefined && elapsed > delay) {
	      /*
	       * In throttle mode, if `delay` time has been exceeded, execute
	       * `callback`.
	       */
	      exec();
	    } else if (noTrailing !== true) {
	      /*
	       * In trailing throttle mode, since `delay` time has not been
	       * exceeded, schedule `callback` to execute `delay` ms after most
	       * recent execution.
	       *
	       * If `debounceMode` is true (at begin), schedule `clear` to execute
	       * after `delay` ms.
	       *
	       * If `debounceMode` is false (at end), schedule `callback` to
	       * execute after `delay` ms.
	       */
	      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
	    }
	  }

	  wrapper.cancel = cancel; // Return the wrapper function.

	  return wrapper;
	}

	/* eslint-disable no-undefined */
	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @returns {Function} A new, debounced function.
	 */

	function debounce (delay, atBegin, callback) {
	  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	}

	exports.debounce = debounce;
	exports.throttle = throttle;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map


/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
            var content = __webpack_require__(858);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_pnpm_style_loader_1_3_0_webpack_4_44_1_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_mini_css_extract_plugin_0_11_2_webpack_4_44_1_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_pnpm_css_loader_4_3_0_webpack_4_44_1_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_vue_loader_16_5_0_vue_compiler_sfc_3_2_30_webpack_4_44_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_sass_loader_10_2_0_sass_1_49_7_webpack_4_44_1_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_pnpm_vue_loader_16_5_0_vue_compiler_sfc_3_2_30_webpack_4_44_1_node_modules_vue_loader_dist_index_js_ref_12_0_component_vue_vue_type_style_index_0_id_0cfc71b0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(848);
/* harmony import */ var _node_modules_pnpm_style_loader_1_3_0_webpack_4_44_1_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_mini_css_extract_plugin_0_11_2_webpack_4_44_1_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_pnpm_css_loader_4_3_0_webpack_4_44_1_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_vue_loader_16_5_0_vue_compiler_sfc_3_2_30_webpack_4_44_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_sass_loader_10_2_0_sass_1_49_7_webpack_4_44_1_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_pnpm_vue_loader_16_5_0_vue_compiler_sfc_3_2_30_webpack_4_44_1_node_modules_vue_loader_dist_index_js_ref_12_0_component_vue_vue_type_style_index_0_id_0cfc71b0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_1_3_0_webpack_4_44_1_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_mini_css_extract_plugin_0_11_2_webpack_4_44_1_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_pnpm_css_loader_4_3_0_webpack_4_44_1_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_vue_loader_16_5_0_vue_compiler_sfc_3_2_30_webpack_4_44_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_sass_loader_10_2_0_sass_1_49_7_webpack_4_44_1_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_pnpm_vue_loader_16_5_0_vue_compiler_sfc_3_2_30_webpack_4_44_1_node_modules_vue_loader_dist_index_js_ref_12_0_component_vue_vue_type_style_index_0_id_0cfc71b0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);