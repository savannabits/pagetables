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
//
var script = {
  name: "Pagination",
  props: {
    links: {
      type: Array,
      required: true,
      default: () => [{
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      }, {
        "url": null,
        "label": "Next &raquo;",
        "active": false
      }]
    }
  },

  data() {
    return {
      jumpToPage: 1
    };
  },

  computed: {},
  methods: {
    changePage(page) {
      if (this.jumpToPage !== page) {
        this.jumpToPage = page;
      } else {
        this.$emit('paginate', page);
      }
    },

    changeLink(url) {
      const page = this.getPage(url);

      if (page) {
        this.changePage(page);
      }
    },

    getPage(url) {
      if (!url) return null;
      let parsed = new URL(url);
      return parsed.searchParams.get('page');
    },

    goToLink(url) {
      const page = this.getPage(url);

      if (page) {
        this.changePage(page);
      }
    }

  },
  watch: {
    jumpToPage(val) {
      let vm = this;

      if (val >= 1) {
        vm.changePage(val);
      } else {
        vm.jumpToPage = 1;
      }
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "inline-flex"
  }, [_c('nav', {
    staticClass: "relative z-0 flex-col lg:inline-flex lg:flex-row shadow-sm -space-x-px",
    attrs: {
      "aria-label": "Pagination"
    }
  }, [_c('div', {
    staticClass: "mx-2"
  }, [_c('span', [_vm._v("Page: ")]), _c('span', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.jumpToPage,
      expression: "jumpToPage",
      modifiers: {
        "lazy": true
      }
    }],
    staticClass: "bg-gray-100 p-2 rounded-sm",
    staticStyle: {
      "max-width": "75px"
    },
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.jumpToPage
    },
    on: {
      "change": function ($event) {
        _vm.jumpToPage = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "inline-flex"
  }, _vm._l(_vm.links, function (link, index) {
    return _c('a', {
      key: index,
      staticClass: "relative inline-flex items-center p-2 px-3 border border-gray-300 bg-white active:bg-indigo-500 text-sm font-medium text-gray-700 hover:bg-gray-50",
      class: {
        'bg-indigo-200': link.active,
        'rounded-l-md': link.label === '&laquo; Previous',
        'rounded-r-md': link.label === 'Next &raquo;'
      },
      attrs: {
        "href": link.url || "javascript:void(0)"
      },
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.goToLink(link.url);
        }
      }
    }, [link.label === '&laquo; Previous' ? _c('svg', {
      staticClass: "h-5 w-5",
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor",
        "aria-hidden": "true"
      }
    }, [_c('path', {
      attrs: {
        "fill-rule": "evenodd",
        "d": "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
        "clip-rule": "evenodd"
      }
    })]) : link.label === 'Next &raquo;' ? _c('svg', {
      staticClass: "h-5 w-5",
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor",
        "aria-hidden": "true"
      }
    }, [_c('path', {
      attrs: {
        "fill-rule": "evenodd",
        "d": "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
        "clip-rule": "evenodd"
      }
    })]) : [_vm._v(_vm._s(link.label))]], 2);
  }), 0)])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-fd0d7048_0", {
    source: "@tailwind base;@tailwind components;@tailwind utilities;",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-fd0d7048";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

//
function debounce(fn, delay) {
  let timeoutID = null;
  return function () {
    clearTimeout(timeoutID);
    let args = arguments;
    let that = this;
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
      default: () => {
        return {};
      }
    },
    columns: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  data() {
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
    onPaginate(page) {
      this.pageObject.page = page;
      let vm = this;
      this.$emit('paginate', vm.pageObject);
    },

    sortBy(name) {
      const vm = this;

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
      let vm = this;
      this.$emit("search", vm.pageObject);
    }, 500),
    perPage: function (val) {
      this.pageObject.per_page = val;
      let vm = this;
      this.$emit('search', vm.pageObject);
    }
  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('div', {
    staticClass: "flex justify-between mb-4"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.perPage,
      expression: "perPage"
    }],
    staticClass: "form-select",
    on: {
      "change": function ($event) {
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
  }, [_vm._v("100")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery,
      expression: "searchQuery"
    }],
    staticClass: "form-input",
    attrs: {
      "type": "text",
      "autofocus": ""
    },
    domProps: {
      "value": _vm.searchQuery
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.searchQuery = $event.target.value;
      }
    }
  })]), _vm._v(" "), _vm.pageObject ? _c('table', {
    staticClass: "table",
    class: _vm.tableClasses
  }, [_c('thead', [_vm._t("header", [_c('tr', _vm._l(_vm.columns, function (col) {
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
        "click": function ($event) {
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
  }), 0)])], 2), _vm._v(" "), _c('tbody', [_vm._t("default", _vm._l(_vm.rows.data, function (row, idx) {
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
  }))], 2)]) : _vm._e(), _vm._v(" "), _vm._t("footer", [_c('div', {
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

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-8a8dc2ba_0", {
    source: "@tailwind base;@tailwind components;@tailwind utilities;th div.sort-by[data-v-8a8dc2ba]{padding-right:18px;position:relative}div.sort-by[data-v-8a8dc2ba]:after,div.sort-by[data-v-8a8dc2ba]:before{border:4px solid transparent;content:\"\";display:block;height:0;right:5px;top:50%;position:absolute;width:0}div.sort-desc[data-v-8a8dc2ba]:before{border-bottom-color:#666;margin-top:-9px}div.sort-asc[data-v-8a8dc2ba]:after{border-top-color:#666;margin-top:1px}div.sort-none[data-v-8a8dc2ba]:before{border-bottom-color:#666;margin-top:-9px}div.sort-none[data-v-8a8dc2ba]:after{border-top-color:#666;margin-top:1px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-8a8dc2ba";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Pagetables: __vue_component__$1,
    Pagination: __vue_component__
});

// Import vue components

const install = function installPagetables(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install on non-es builds, when vue is found

export default plugin;
export { __vue_component__$1 as Pagetables, __vue_component__ as Pagination };
