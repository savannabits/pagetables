'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: "Pagination",
  props: {
    links: {
      type: Array,
      required: true,
      default: function _default() {
        return [{
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        }, {
          "url": null,
          "label": "Next &raquo;",
          "active": false
        }];
      }
    }
  },
  data: function data() {
    return {
      jumpToPage: 1
    };
  },
  computed: {},
  methods: {
    changePage: function changePage(page) {
      if (this.jumpToPage !== page) {
        this.jumpToPage = page;
      } else {
        this.$emit('paginate', page);
      }
    },
    changeLink: function changeLink(url) {
      var page = this.getPage(url);

      if (page) {
        this.changePage(page);
      }
    },
    getPage: function getPage(url) {
      if (!url) return null;
      var parsed = new URL(url);
      return parsed.searchParams.get('page');
    },
    goToLink: function goToLink(url) {
      var page = this.getPage(url);

      if (page) {
        this.changePage(page);
      }
    }
  },
  watch: {
    jumpToPage: function jumpToPage(val) {
      var vm = this;

      if (val >= 1) {
        vm.changePage(val);
      } else {
        vm.jumpToPage = 1;
      }
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "inline-flex"
  }, [_vm._ssrNode("<nav aria-label=\"Pagination\" class=\"relative z-0 flex-col lg:inline-flex lg:flex-row shadow-sm -space-x-px\" data-v-fd0d7048><div class=\"mx-2\" data-v-fd0d7048><span data-v-fd0d7048>Page: </span><span data-v-fd0d7048><input type=\"text\"" + _vm._ssrAttr("value", _vm.jumpToPage) + " class=\"bg-gray-100 p-2 rounded-sm\" style=\"max-width: 75px\" data-v-fd0d7048></span></div> <div class=\"inline-flex\" data-v-fd0d7048>" + _vm._ssrList(_vm.links, function (link, index) {
    return "<a" + _vm._ssrAttr("href", link.url || "javascript:void(0)") + _vm._ssrClass("relative inline-flex items-center p-2 px-3 border border-gray-300 bg-white active:bg-indigo-500 text-sm font-medium text-gray-700 hover:bg-gray-50", {
      'bg-indigo-200': link.active,
      'rounded-l-md': link.label === '&laquo; Previous',
      'rounded-r-md': link.label === 'Next &raquo;'
    }) + " data-v-fd0d7048>" + (link.label === '&laquo; Previous' ? "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\" class=\"h-5 w-5\" data-v-fd0d7048><path fill-rule=\"evenodd\" d=\"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z\" clip-rule=\"evenodd\" data-v-fd0d7048></path></svg>" : link.label === 'Next &raquo;' ? "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\" class=\"h-5 w-5\" data-v-fd0d7048><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\" data-v-fd0d7048></path></svg>" : _vm._ssrEscape(_vm._s(link.label))) + "</a>";
  }) + "</div></nav>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-fd0d7048_0", {
    source: "@tailwind base;@tailwind components;@tailwind utilities;",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-fd0d7048";
/* module identifier */

var __vue_module_identifier__ = "data-v-fd0d7048";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);//
function debounce(fn, delay) {
  var timeoutID = null;
  return function () {
    clearTimeout(timeoutID);
    var args = arguments;
    var that = this;
    timeoutID = setTimeout(function () {
      fn.apply(that, args);
    }, delay);
  };
}
var script$1 = {
  name: "Datatable",
  components: {
    Pagination: __vue_component__
  },
  props: {
    tableClasses: {
      type: String,
      required: false,
      default: ''
    },
    rowClasses: {
      type: String,
      required: false,
      default: ''
    },
    paginationClasses: {
      type: String,
      required: false,
      default: ''
    },
    rows: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    },
    columns: {
      type: Array,
      required: false,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      searchQuery: "",
      perPage: 15,
      pageObject: {
        search: null,
        per_page: 15,
        sort: null,
        sort_direction: null,
        page: null
      }
    };
  },
  methods: {
    onPaginate: function onPaginate(page) {
      this.pageObject.page = page;
      var vm = this;
      this.$emit('paginate', vm.pageObject);
    },
    sortBy: function sortBy(name) {
      var vm = this;

      if (vm.pageObject.sort === name) {
        vm.pageObject.sort_direction = vm.pageObject.sort_direction === 'asc' ? 'desc' : 'asc';
      } else {
        vm.pageObject.sort = name;
        vm.pageObject.sort_direction = 'asc';
      }

      this.$emit('paginate', vm.pageObject);
    }
  },
  watch: {
    searchQuery: debounce(function (val) {
      this.pageObject.search = val;
      this.pageObject.page = 1;
      var vm = this;
      this.$emit("search", vm.pageObject);
    }, 500),
    perPage: function perPage(val) {
      this.pageObject.per_page = val;
      var vm = this;
      this.$emit('search', vm.pageObject);
    }
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode("<div class=\"flex justify-between mb-4\" data-v-8a8dc2ba>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.perPage,
      expression: "perPage"
    }],
    staticClass: "form-select",
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.perPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("10")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "15"
    }
  }, [_vm._v("15")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "25"
    }
  }, [_vm._v("25")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "50"
    }
  }, [_vm._v("50")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "100"
    }
  }, [_vm._v("100")])]), _vm._ssrNode(" <input type=\"text\" autofocus=\"autofocus\"" + _vm._ssrAttr("value", _vm.searchQuery) + " class=\"form-input\" data-v-8a8dc2ba>")], 2), _vm._ssrNode(" "), _vm.pageObject ? _vm._ssrNode("<table" + _vm._ssrClass("table", _vm.tableClasses) + " data-v-8a8dc2ba>", "</table>", [_vm._ssrNode("<thead data-v-8a8dc2ba>", "</thead>", [_vm._t("header", [_c('tr', _vm._l(_vm.columns, function (col) {
    return _c('th', {
      staticClass: "border-gray-100 border-2 bg-gray-50"
    }, [col.sortable ? _c('div', {
      staticClass: "w-full text-left p-2 sort-by",
      class: {
        'sort-asc': _vm.pageObject.sort === col.sort_key && _vm.pageObject.sort_direction === 'asc',
        'sort-desc': _vm.pageObject.sort === col.sort_key && _vm.pageObject.sort_direction === 'desc',
        'sort-none': _vm.pageObject.sort !== col.sort_key
      },
      attrs: {
        "role": "button"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.sortBy(col.sort_key);
        }
      }
    }, [_vm._t("column", [_vm._v("\n                            " + _vm._s(col.title) + "\n                        ")], {
      "column": col
    })], 2) : _c('div', {
      staticClass: "p-2 w-full"
    }, [_vm._t("column", [_vm._v("\n                            " + _vm._s(col.title) + "\n                        ")], {
      "column": col
    })], 2)]);
  }), 0)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<tbody data-v-8a8dc2ba>", "</tbody>", [_vm._t("default", _vm._l(_vm.rows.data, function (row, idx) {
    return _c('tr', {
      key: idx,
      staticClass: "border-b py-4 hover:border-gray-100 hover:bg-gray-50",
      class: _vm.rowClasses
    }, [_vm._t("row", _vm._l(_vm.columns, function (col) {
      return _c('td', {
        staticClass: "py-2"
      }, [_vm._v("\n                        " + _vm._s(row[col.name]) + "\n                    ")]);
    }), {
      "row": row
    })], 2);
  }))], 2)], 2) : _vm._e(), _vm._ssrNode(" "), _vm._t("footer", [_c('div', {
    staticClass: "flex flex-col lg:flex-row items-center justify-between"
  }, [_c('div', {
    staticClass: "p-2 m-2"
  }, [_vm._v("Showing " + _vm._s(_vm.rows.from) + " to " + _vm._s(_vm.rows.to) + " of " + _vm._s(_vm.rows.total) + " records")]), _vm._v(" "), _vm._t("pagination", [_c('pagination', {
    class: _vm.paginationClasses,
    attrs: {
      "links": _vm.rows.links
    },
    on: {
      "paginate": _vm.onPaginate
    }
  })])], 2)])], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-8a8dc2ba_0", {
    source: "@tailwind base;@tailwind components;@tailwind utilities;th div.sort-by[data-v-8a8dc2ba]{padding-right:18px;position:relative}div.sort-by[data-v-8a8dc2ba]:after,div.sort-by[data-v-8a8dc2ba]:before{border:4px solid transparent;content:\"\";display:block;height:0;right:5px;top:50%;position:absolute;width:0}div.sort-desc[data-v-8a8dc2ba]:before{border-bottom-color:#666;margin-top:-9px}div.sort-asc[data-v-8a8dc2ba]:after{border-top-color:#666;margin-top:1px}div.sort-none[data-v-8a8dc2ba]:before{border-bottom-color:#666;margin-top:-9px}div.sort-none[data-v-8a8dc2ba]:after{border-top-color:#666;margin-top:1px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-8a8dc2ba";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-8a8dc2ba";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,Pagetables: __vue_component__$1,Pagination: __vue_component__});var install = function installPagetables(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.Pagetables=__vue_component__$1;exports.Pagination=__vue_component__;exports.default=plugin;