(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../opt/files/node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l2 = /* @__PURE__ */ Symbol.for("react.element");
      var n2 = /* @__PURE__ */ Symbol.for("react.portal");
      var p = /* @__PURE__ */ Symbol.for("react.fragment");
      var q = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u = /* @__PURE__ */ Symbol.for("react.context");
      var v2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var x = /* @__PURE__ */ Symbol.for("react.memo");
      var y2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var z3 = Symbol.iterator;
      function A3(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z3 && a[z3] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B3 = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C2 = Object.assign;
      var D2 = {};
      function E3(a, b2, e2) {
        this.props = a;
        this.context = b2;
        this.refs = D2;
        this.updater = e2 || B3;
      }
      E3.prototype.isReactComponent = {};
      E3.prototype.setState = function(a, b2) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b2, "setState");
      };
      E3.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F3() {
      }
      F3.prototype = E3.prototype;
      function G3(a, b2, e2) {
        this.props = a;
        this.context = b2;
        this.refs = D2;
        this.updater = e2 || B3;
      }
      var H = G3.prototype = new F3();
      H.constructor = G3;
      C2(H, E3.prototype);
      H.isPureReactComponent = true;
      var I2 = Array.isArray;
      var J2 = Object.prototype.hasOwnProperty;
      var K2 = { current: null };
      var L2 = { key: true, ref: true, __self: true, __source: true };
      function M3(a, b2, e2) {
        var d, c = {}, k2 = null, h = null;
        if (null != b2) for (d in void 0 !== b2.ref && (h = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J2.call(b2, d) && !L2.hasOwnProperty(d) && (c[d] = b2[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e2;
        else if (1 < g) {
          for (var f2 = Array(g), m = 0; m < g; m++) f2[m] = arguments[m + 2];
          c.children = f2;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l2, type: a, key: k2, ref: h, props: c, _owner: K2.current };
      }
      function N2(a, b2) {
        return { $$typeof: l2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O3(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l2;
      }
      function escape(a) {
        var b2 = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b2[a2];
        });
      }
      var P3 = /\/+/g;
      function Q(a, b2) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
      }
      function R3(a, b2, e2, d, c) {
        var k2 = typeof a;
        if ("undefined" === k2 || "boolean" === k2) a = null;
        var h = false;
        if (null === a) h = true;
        else switch (k2) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l2:
              case n2:
                h = true;
            }
        }
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I2(c) ? (e2 = "", null != a && (e2 = a.replace(P3, "$&/") + "/"), R3(c, b2, e2, "", function(a2) {
          return a2;
        })) : null != c && (O3(c) && (c = N2(c, e2 + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P3, "$&/") + "/") + a)), b2.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I2(a)) for (var g = 0; g < a.length; g++) {
          k2 = a[g];
          var f2 = d + Q(k2, g);
          h += R3(k2, b2, e2, f2, c);
        }
        else if (f2 = A3(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d + Q(k2, g++), h += R3(k2, b2, e2, f2, c);
        else if ("object" === k2) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S2(a, b2, e2) {
        if (null == a) return a;
        var d = [], c = 0;
        R3(a, d, "", "", function(a2) {
          return b2.call(e2, a2, c++);
        });
        return d;
      }
      function T3(a) {
        if (-1 === a._status) {
          var b2 = a._result;
          b2 = b2();
          b2.then(function(b3) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
          }, function(b3) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
          });
          -1 === a._status && (a._status = 0, a._result = b2);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U3 = { current: null };
      var V = { transition: null };
      var W2 = { ReactCurrentDispatcher: U3, ReactCurrentBatchConfig: V, ReactCurrentOwner: K2 };
      function X2() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S2, forEach: function(a, b2, e2) {
        S2(a, function() {
          b2.apply(this, arguments);
        }, e2);
      }, count: function(a) {
        var b2 = 0;
        S2(a, function() {
          b2++;
        });
        return b2;
      }, toArray: function(a) {
        return S2(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O3(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E3;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G3;
      exports.StrictMode = q;
      exports.Suspense = w2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
      exports.act = X2;
      exports.cloneElement = function(a, b2, e2) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C2({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
        if (null != b2) {
          void 0 !== b2.ref && (k2 = b2.ref, h = K2.current);
          void 0 !== b2.key && (c = "" + b2.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f2 in b2) J2.call(b2, f2) && !L2.hasOwnProperty(f2) && (d[f2] = void 0 === b2[f2] && void 0 !== g ? g[f2] : b2[f2]);
        }
        var f2 = arguments.length - 2;
        if (1 === f2) d.children = e2;
        else if (1 < f2) {
          g = Array(f2);
          for (var m = 0; m < f2; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l2, type: a.type, key: c, ref: k2, props: d, _owner: h };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M3;
      exports.createFactory = function(a) {
        var b2 = M3.bind(null, a);
        b2.type = a;
        return b2;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v2, render: a };
      };
      exports.isValidElement = O3;
      exports.lazy = function(a) {
        return { $$typeof: y2, _payload: { _status: -1, _result: a }, _init: T3 };
      };
      exports.memo = function(a, b2) {
        return { $$typeof: x, type: a, compare: void 0 === b2 ? null : b2 };
      };
      exports.startTransition = function(a) {
        var b2 = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b2;
        }
      };
      exports.unstable_act = X2;
      exports.useCallback = function(a, b2) {
        return U3.current.useCallback(a, b2);
      };
      exports.useContext = function(a) {
        return U3.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U3.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b2) {
        return U3.current.useEffect(a, b2);
      };
      exports.useId = function() {
        return U3.current.useId();
      };
      exports.useImperativeHandle = function(a, b2, e2) {
        return U3.current.useImperativeHandle(a, b2, e2);
      };
      exports.useInsertionEffect = function(a, b2) {
        return U3.current.useInsertionEffect(a, b2);
      };
      exports.useLayoutEffect = function(a, b2) {
        return U3.current.useLayoutEffect(a, b2);
      };
      exports.useMemo = function(a, b2) {
        return U3.current.useMemo(a, b2);
      };
      exports.useReducer = function(a, b2, e2) {
        return U3.current.useReducer(a, b2, e2);
      };
      exports.useRef = function(a) {
        return U3.current.useRef(a);
      };
      exports.useState = function(a) {
        return U3.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b2, e2) {
        return U3.current.useSyncExternalStore(a, b2, e2);
      };
      exports.useTransition = function() {
        return U3.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // ../../opt/files/node_modules/react/index.js
  var require_react = __commonJS({
    "../../opt/files/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f2(a, b2) {
        var c = a.length;
        a.push(b2);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e2 = a[d];
          if (0 < g(e2, b2)) a[d] = b2, a[c] = e2, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k2(a) {
        if (0 === a.length) return null;
        var b2 = a[0], c = a.pop();
        if (c !== b2) {
          a[0] = c;
          a: for (var d = 0, e2 = a.length, w2 = e2 >>> 1; d < w2; ) {
            var m = 2 * (d + 1) - 1, C2 = a[m], n2 = m + 1, x = a[n2];
            if (0 > g(C2, c)) n2 < e2 && 0 > g(x, C2) ? (a[d] = x, a[n2] = c, d = n2) : (a[d] = C2, a[m] = c, d = m);
            else if (n2 < e2 && 0 > g(x, c)) a[d] = x, a[n2] = c, d = n2;
            else break a;
          }
        }
        return b2;
      }
      function g(a, b2) {
        var c = a.sortIndex - b2.sortIndex;
        return 0 !== c ? c : a.id - b2.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l2 = performance;
        exports.unstable_now = function() {
          return l2.now();
        };
      } else {
        p = Date, q = p.now();
        exports.unstable_now = function() {
          return p.now() - q;
        };
      }
      var l2;
      var p;
      var q;
      var r = [];
      var t = [];
      var u = 1;
      var v2 = null;
      var y2 = 3;
      var z3 = false;
      var A3 = false;
      var B3 = false;
      var D2 = "function" === typeof setTimeout ? setTimeout : null;
      var E3 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F3 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G3(a) {
        for (var b2 = h(t); null !== b2; ) {
          if (null === b2.callback) k2(t);
          else if (b2.startTime <= a) k2(t), b2.sortIndex = b2.expirationTime, f2(r, b2);
          else break;
          b2 = h(t);
        }
      }
      function H(a) {
        B3 = false;
        G3(a);
        if (!A3) if (null !== h(r)) A3 = true, I2(J2);
        else {
          var b2 = h(t);
          null !== b2 && K2(H, b2.startTime - a);
        }
      }
      function J2(a, b2) {
        A3 = false;
        B3 && (B3 = false, E3(L2), L2 = -1);
        z3 = true;
        var c = y2;
        try {
          G3(b2);
          for (v2 = h(r); null !== v2 && (!(v2.expirationTime > b2) || a && !M3()); ) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e2 = d(v2.expirationTime <= b2);
              b2 = exports.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h(r) && k2(r);
              G3(b2);
            } else k2(r);
            v2 = h(r);
          }
          if (null !== v2) var w2 = true;
          else {
            var m = h(t);
            null !== m && K2(H, m.startTime - b2);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c, z3 = false;
        }
      }
      var N2 = false;
      var O3 = null;
      var L2 = -1;
      var P3 = 5;
      var Q = -1;
      function M3() {
        return exports.unstable_now() - Q < P3 ? false : true;
      }
      function R3() {
        if (null !== O3) {
          var a = exports.unstable_now();
          Q = a;
          var b2 = true;
          try {
            b2 = O3(true, a);
          } finally {
            b2 ? S2() : (N2 = false, O3 = null);
          }
        } else N2 = false;
      }
      var S2;
      if ("function" === typeof F3) S2 = function() {
        F3(R3);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T3 = new MessageChannel(), U3 = T3.port2;
        T3.port1.onmessage = R3;
        S2 = function() {
          U3.postMessage(null);
        };
      } else S2 = function() {
        D2(R3, 0);
      };
      var T3;
      var U3;
      function I2(a) {
        O3 = a;
        N2 || (N2 = true, S2());
      }
      function K2(a, b2) {
        L2 = D2(function() {
          a(exports.unstable_now());
        }, b2);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A3 || z3 || (A3 = true, I2(J2));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P3 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b2 = 3;
            break;
          default:
            b2 = y2;
        }
        var c = y2;
        y2 = b2;
        try {
          return a();
        } finally {
          y2 = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b2) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y2;
        y2 = a;
        try {
          return b2();
        } finally {
          y2 = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b2, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c + e2;
        a = { id: u++, callback: b2, priorityLevel: a, startTime: c, expirationTime: e2, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f2(t, a), null === h(r) && a === h(t) && (B3 ? (E3(L2), L2 = -1) : B3 = true, K2(H, c - d))) : (a.sortIndex = e2, f2(r, a), A3 || z3 || (A3 = true, I2(J2)));
        return a;
      };
      exports.unstable_shouldYield = M3;
      exports.unstable_wrapCallback = function(a) {
        var b2 = y2;
        return function() {
          var c = y2;
          y2 = b2;
          try {
            return a.apply(this, arguments);
          } finally {
            y2 = c;
          }
        };
      };
    }
  });

  // ../../opt/files/node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "../../opt/files/node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa2 = require_react();
      var ca = require_scheduler();
      function p(a) {
        for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b2 += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da2 = /* @__PURE__ */ new Set();
      var ea2 = {};
      function fa2(a, b2) {
        ha2(a, b2);
        ha2(a + "Capture", b2);
      }
      function ha2(a, b2) {
        ea2[a] = b2;
        for (a = 0; a < b2.length; a++) da2.add(b2[a]);
      }
      var ia2 = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja2 = Object.prototype.hasOwnProperty;
      var ka2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la2 = {};
      var ma = {};
      function oa2(a) {
        if (ja2.call(ma, a)) return true;
        if (ja2.call(la2, a)) return false;
        if (ka2.test(a)) return ma[a] = true;
        la2[a] = true;
        return false;
      }
      function pa(a, b2, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b2) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa(a, b2, c, d) {
        if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b2;
          case 4:
            return false === b2;
          case 5:
            return isNaN(b2);
          case 6:
            return isNaN(b2) || 1 > b2;
        }
        return false;
      }
      function v2(a, b2, c, d, e2, f2, g) {
        this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
        this.attributeName = d;
        this.attributeNamespace = e2;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b2;
        this.sanitizeURL = f2;
        this.removeEmptyString = g;
      }
      var z3 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z3[a] = new v2(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b2 = a[0];
        z3[b2] = new v2(b2, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z3[a] = new v2(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z3[a] = new v2(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z3[a] = new v2(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z3[a] = new v2(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z3[a] = new v2(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z3[a] = new v2(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z3[a] = new v2(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra2 = /[\-:]([a-z])/g;
      function sa2(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b2 = a.replace(
          ra2,
          sa2
        );
        z3[b2] = new v2(b2, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b2 = a.replace(ra2, sa2);
        z3[b2] = new v2(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b2 = a.replace(ra2, sa2);
        z3[b2] = new v2(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z3[a] = new v2(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z3.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z3[a] = new v2(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta2(a, b2, c, d) {
        var e2 = z3.hasOwnProperty(b2) ? z3[b2] : null;
        if (null !== e2 ? 0 !== e2.type : d || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c, e2, d) && (c = null), d || null === e2 ? oa2(b2) && (null === c ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c)) : e2.mustUseProperty ? a[e2.propertyName] = null === c ? 3 === e2.type ? false : "" : c : (b2 = e2.attributeName, d = e2.attributeNamespace, null === c ? a.removeAttribute(b2) : (e2 = e2.type, c = 3 === e2 || 4 === e2 && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b2, c) : a.setAttribute(b2, c)));
      }
      var ua = aa2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = /* @__PURE__ */ Symbol.for("react.element");
      var wa2 = /* @__PURE__ */ Symbol.for("react.portal");
      var ya = /* @__PURE__ */ Symbol.for("react.fragment");
      var za2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var Aa2 = /* @__PURE__ */ Symbol.for("react.profiler");
      var Ba = /* @__PURE__ */ Symbol.for("react.provider");
      var Ca = /* @__PURE__ */ Symbol.for("react.context");
      var Da2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var Ea2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var Fa2 = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var Ga2 = /* @__PURE__ */ Symbol.for("react.memo");
      var Ha2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var Ia2 = /* @__PURE__ */ Symbol.for("react.offscreen");
      var Ja2 = Symbol.iterator;
      function Ka2(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja2 && a[Ja2] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A3 = Object.assign;
      var La2;
      function Ma(a) {
        if (void 0 === La2) try {
          throw Error();
        } catch (c) {
          var b2 = c.stack.trim().match(/\n( *(at )?)/);
          La2 = b2 && b2[1] || "";
        }
        return "\n" + La2 + a;
      }
      var Na2 = false;
      function Oa(a, b2) {
        if (!a || Na2) return "";
        Na2 = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b2) if (b2 = function() {
            throw Error();
          }, Object.defineProperty(b2.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b2, []);
            } catch (l2) {
              var d = l2;
            }
            Reflect.construct(a, [], b2);
          } else {
            try {
              b2.call();
            } catch (l2) {
              d = l2;
            }
            a.call(b2.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l2) {
              d = l2;
            }
            a();
          }
        } catch (l2) {
          if (l2 && d && "string" === typeof l2.stack) {
            for (var e2 = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e2.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e2[g] !== f2[h]; ) h--;
            for (; 1 <= g && 0 <= h; g--, h--) if (e2[g] !== f2[h]) {
              if (1 !== g || 1 !== h) {
                do
                  if (g--, h--, 0 > h || e2[g] !== f2[h]) {
                    var k2 = "\n" + e2[g].replace(" at new ", " at ");
                    a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                    return k2;
                  }
                while (1 <= g && 0 <= h);
              }
              break;
            }
          }
        } finally {
          Na2 = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
      }
      function Pa(a) {
        switch (a.tag) {
          case 5:
            return Ma(a.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa(a.type, false), a;
          case 11:
            return a = Oa(a.type.render, false), a;
          case 1:
            return a = Oa(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa2(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya:
            return "Fragment";
          case wa2:
            return "Portal";
          case Aa2:
            return "Profiler";
          case za2:
            return "StrictMode";
          case Ea2:
            return "Suspense";
          case Fa2:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca:
            return (a.displayName || "Context") + ".Consumer";
          case Ba:
            return (a._context.displayName || "Context") + ".Provider";
          case Da2:
            var b2 = a.render;
            a = a.displayName;
            a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga2:
            return b2 = a.displayName || null, null !== b2 ? b2 : Qa2(a.type) || "Memo";
          case Ha2:
            b2 = a._payload;
            a = a._init;
            try {
              return Qa2(a(b2));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra(a) {
        var b2 = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b2.displayName || "Context") + ".Consumer";
          case 10:
            return (b2._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b2;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa2(b2);
          case 8:
            return b2 === za2 ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b2) return b2.displayName || b2.name || null;
            if ("string" === typeof b2) return b2;
        }
        return null;
      }
      function Sa2(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta(a) {
        var b2 = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
      }
      function Ua2(a) {
        var b2 = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d = "" + a[b2];
        if (!a.hasOwnProperty(b2) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e2 = c.get, f2 = c.set;
          Object.defineProperty(a, b2, { configurable: true, get: function() {
            return e2.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f2.call(this, a2);
          } });
          Object.defineProperty(a, b2, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b2];
          } };
        }
      }
      function Va2(a) {
        a._valueTracker || (a._valueTracker = Ua2(a));
      }
      function Wa2(a) {
        if (!a) return false;
        var b2 = a._valueTracker;
        if (!b2) return true;
        var c = b2.getValue();
        var d = "";
        a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b2.setValue(a), true) : false;
      }
      function Xa2(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b2) {
          return a.body;
        }
      }
      function Ya2(a, b2) {
        var c = b2.checked;
        return A3({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za2(a, b2) {
        var c = null == b2.defaultValue ? "" : b2.defaultValue, d = null != b2.checked ? b2.checked : b2.defaultChecked;
        c = Sa2(null != b2.value ? b2.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
      }
      function ab(a, b2) {
        b2 = b2.checked;
        null != b2 && ta2(a, "checked", b2, false);
      }
      function bb(a, b2) {
        ab(a, b2);
        var c = Sa2(b2.value), d = b2.type;
        if (null != c) if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b2.hasOwnProperty("value") ? cb(a, b2.type, c) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa2(b2.defaultValue));
        null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
      }
      function db(a, b2, c) {
        if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
          var d = b2.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b2.value && null !== b2.value)) return;
          b2 = "" + a._wrapperState.initialValue;
          c || b2 === a.value || (a.value = b2);
          a.defaultValue = b2;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b2, c) {
        if ("number" !== b2 || Xa2(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b2, c, d) {
        a = a.options;
        if (b2) {
          b2 = {};
          for (var e2 = 0; e2 < c.length; e2++) b2["$" + c[e2]] = true;
          for (c = 0; c < a.length; c++) e2 = b2.hasOwnProperty("$" + a[c].value), a[c].selected !== e2 && (a[c].selected = e2), e2 && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa2(c);
          b2 = null;
          for (e2 = 0; e2 < a.length; e2++) {
            if (a[e2].value === c) {
              a[e2].selected = true;
              d && (a[e2].defaultSelected = true);
              return;
            }
            null !== b2 || a[e2].disabled || (b2 = a[e2]);
          }
          null !== b2 && (b2.selected = true);
        }
      }
      function gb(a, b2) {
        if (null != b2.dangerouslySetInnerHTML) throw Error(p(91));
        return A3({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b2) {
        var c = b2.value;
        if (null == c) {
          c = b2.children;
          b2 = b2.defaultValue;
          if (null != c) {
            if (null != b2) throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b2 = c;
          }
          null == b2 && (b2 = "");
          c = b2;
        }
        a._wrapperState = { initialValue: Sa2(c) };
      }
      function ib(a, b2) {
        var c = Sa2(b2.value), d = Sa2(b2.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b2.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b2 = a.textContent;
        b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b2) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = (function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c, d, e2) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b2, c, d, e2);
          });
        } : a;
      })(function(a, b2) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b2;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
          for (b2 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b2.firstChild; ) a.appendChild(b2.firstChild);
        }
      });
      function ob(a, b2) {
        if (b2) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b2;
            return;
          }
        }
        a.textContent = b2;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b2) {
          b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b2] = pb[a];
        });
      });
      function rb(a, b2, c) {
        return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
      }
      function sb(a, b2) {
        a = a.style;
        for (var c in b2) if (b2.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e2 = rb(c, b2[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e2) : a[c] = e2;
        }
      }
      var tb = A3({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b2) {
        if (b2) {
          if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b2.dangerouslySetInnerHTML) {
            if (null != b2.children) throw Error(p(60));
            if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b2.style && "object" !== typeof b2.style) throw Error(p(62));
        }
      }
      function vb(a, b2) {
        if (-1 === a.indexOf("-")) return "string" === typeof b2.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b2 = a.stateNode;
          b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b2 = Ab;
          Ab = zb = null;
          Bb(a);
          if (b2) for (a = 0; a < b2.length; a++) Bb(b2[a]);
        }
      }
      function Gb(a, b2) {
        return a(b2);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b2, c) {
        if (Ib) return a(b2, c);
        Ib = true;
        try {
          return Gb(a, b2, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b2) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Db(c);
        if (null === d) return null;
        c = d[b2];
        a: switch (b2) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b2, typeof c));
        return c;
      }
      var Lb = false;
      if (ia2) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b2, c, d, e2, f2, g, h, k2) {
        var l2 = Array.prototype.slice.call(arguments, 3);
        try {
          b2.apply(c, l2);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b2, c, d, e2, f2, g, h, k2) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b2, c, d, e2, f2, g, h, k2) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l2 = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l2);
        }
      }
      function Vb(a) {
        var b2 = a, c = a;
        if (a.alternate) for (; b2.return; ) b2 = b2.return;
        else {
          a = b2;
          do
            b2 = a, 0 !== (b2.flags & 4098) && (c = b2.return), a = b2.return;
          while (a);
        }
        return 3 === b2.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b2 = a.memoizedState;
          null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
          if (null !== b2) return b2.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p(188));
      }
      function Yb(a) {
        var b2 = a.alternate;
        if (!b2) {
          b2 = Vb(a);
          if (null === b2) throw Error(p(188));
          return b2 !== a ? null : a;
        }
        for (var c = a, d = b2; ; ) {
          var e2 = c.return;
          if (null === e2) break;
          var f2 = e2.alternate;
          if (null === f2) {
            d = e2.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e2.child === f2.child) {
            for (f2 = e2.child; f2; ) {
              if (f2 === c) return Xb(e2), a;
              if (f2 === d) return Xb(e2), b2;
              f2 = f2.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return) c = e2, d = f2;
          else {
            for (var g = false, h = e2.child; h; ) {
              if (h === c) {
                g = true;
                c = e2;
                d = f2;
                break;
              }
              if (h === d) {
                g = true;
                d = e2;
                c = f2;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f2.child; h; ) {
                if (h === c) {
                  g = true;
                  c = f2;
                  d = e2;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f2;
                  c = e2;
                  break;
                }
                h = h.sibling;
              }
              if (!g) throw Error(p(189));
            }
          }
          if (c.alternate !== d) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b2;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b2 = $b(a);
          if (null !== b2) return b2;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B3 = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b2) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b2) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h = g & ~e2;
          0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
        } else g = c & ~e2, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
        if (0 === d) return 0;
        if (0 !== b2 && b2 !== d && 0 === (b2 & e2) && (e2 = d & -d, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
        0 !== (d & 4) && (d |= c & 16);
        b2 = a.entangledLanes;
        if (0 !== b2) for (a = a.entanglements, b2 &= d; 0 < b2; ) c = 31 - oc(b2), e2 = 1 << c, d |= a[c], b2 &= ~e2;
        return d;
      }
      function vc(a, b2) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b2 + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b2 + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a, b2) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
          var g = 31 - oc(f2), h = 1 << g, k2 = e2[g];
          if (-1 === k2) {
            if (0 === (h & c) || 0 !== (h & d)) e2[g] = vc(h, b2);
          } else k2 <= b2 && (a.expiredLanes |= h);
          f2 &= ~h;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b2 = [], c = 0; 31 > c; c++) b2.push(a);
        return b2;
      }
      function Ac(a, b2, c) {
        a.pendingLanes |= b2;
        536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b2 = 31 - oc(b2);
        a[b2] = c;
      }
      function Bc(a, b2) {
        var c = a.pendingLanes & ~b2;
        a.pendingLanes = b2;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b2;
        a.mutableReadLanes &= b2;
        a.entangledLanes &= b2;
        b2 = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e2 = 31 - oc(c), f2 = 1 << e2;
          b2[e2] = 0;
          d[e2] = -1;
          a[e2] = -1;
          c &= ~f2;
        }
      }
      function Cc(a, b2) {
        var c = a.entangledLanes |= b2;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc(c), e2 = 1 << d;
          e2 & b2 | a[d] & b2 && (a[d] |= b2);
          c &= ~e2;
        }
      }
      var C2 = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b2) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b2.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b2.pointerId);
        }
      }
      function Tc(a, b2, c, d, e2, f2) {
        if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b2, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
        a.eventSystemFlags |= d;
        b2 = a.targetContainers;
        null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
        return a;
      }
      function Uc(a, b2, c, d, e2) {
        switch (b2) {
          case "focusin":
            return Lc = Tc(Lc, a, b2, c, d, e2), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b2, c, d, e2), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b2, c, d, e2), true;
          case "pointerover":
            var f2 = e2.pointerId;
            Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c, d, e2));
            return true;
          case "gotpointercapture":
            return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c, d, e2)), true;
        }
        return false;
      }
      function Vc(a) {
        var b2 = Wc(a.target);
        if (null !== b2) {
          var c = Vb(b2);
          if (null !== c) {
            if (b2 = c.tag, 13 === b2) {
              if (b2 = Wb(c), null !== b2) {
                a.blockedOn = b2;
                Ic(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b2 && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn) return false;
        for (var b2 = a.targetContainers; 0 < b2.length; ) {
          var c = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else return b2 = Cb(c), null !== b2 && Fc(b2), a.blockedOn = c, false;
          b2.shift();
        }
        return true;
      }
      function Zc(a, b2, c) {
        Xc(a) && c.delete(b2);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad2(a, b2) {
        a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b2(b3) {
          return ad2(b3, a);
        }
        if (0 < Kc.length) {
          ad2(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad2(Lc, a);
        null !== Mc && ad2(Mc, a);
        null !== Nc && ad2(Nc, a);
        Oc.forEach(b2);
        Pc.forEach(b2);
        for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed2(a, b2, c, d) {
        var e2 = C2, f2 = cd.transition;
        cd.transition = null;
        try {
          C2 = 1, fd2(a, b2, c, d);
        } finally {
          C2 = e2, cd.transition = f2;
        }
      }
      function gd2(a, b2, c, d) {
        var e2 = C2, f2 = cd.transition;
        cd.transition = null;
        try {
          C2 = 4, fd2(a, b2, c, d);
        } finally {
          C2 = e2, cd.transition = f2;
        }
      }
      function fd2(a, b2, c, d) {
        if (dd) {
          var e2 = Yc(a, b2, c, d);
          if (null === e2) hd2(a, b2, d, id2, c), Sc(a, d);
          else if (Uc(e2, a, b2, c, d)) d.stopPropagation();
          else if (Sc(a, d), b2 & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e2; ) {
              var f2 = Cb(e2);
              null !== f2 && Ec(f2);
              f2 = Yc(a, b2, c, d);
              null === f2 && hd2(a, b2, d, id2, c);
              if (f2 === e2) break;
              e2 = f2;
            }
            null !== e2 && d.stopPropagation();
          } else hd2(a, b2, d, null, c);
        }
      }
      var id2 = null;
      function Yc(a, b2, c, d) {
        id2 = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a) if (b2 = Vb(a), null === b2) a = null;
        else if (c = b2.tag, 13 === c) {
          a = Wb(b2);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
          a = null;
        } else b2 !== a && (a = null);
        id2 = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd2 = null;
      var ld = null;
      var md2 = null;
      function nd2() {
        if (md2) return md2;
        var a, b2 = ld, c = b2.length, d, e2 = "value" in kd2 ? kd2.value : kd2.textContent, f2 = e2.length;
        for (a = 0; a < c && b2[a] === e2[a]; a++) ;
        var g = c - a;
        for (d = 1; d <= g && b2[c - d] === e2[f2 - d]; d++) ;
        return md2 = e2.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b2 = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd2() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b2(b3, d, e2, f2, g) {
          this._reactName = b3;
          this._targetInst = e2;
          this.type = d;
          this.nativeEvent = f2;
          this.target = g;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b3 = a[c], this[c] = b3 ? b3(f2) : f2[c]);
          this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd2 : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A3(b2.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd2);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd2);
        }, persist: function() {
        }, isPersistent: pd2 });
        return b2;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A3({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd2;
      var yd;
      var Ad = A3({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd2 = a.screenY - yd.screenY) : xd2 = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd2;
      } });
      var Bd = rd(Ad);
      var Cd = A3({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A3({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A3({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd2 = rd(Gd);
      var Id = A3({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A3({}, sd, { data: 0 });
      var Ld2 = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a) {
        var b2 = this.nativeEvent;
        return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A3({}, ud, { key: function(a) {
        if (a.key) {
          var b2 = Md[a.key] || a.key;
          if ("Unidentified" !== b2) return b2;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd2 = rd(Qd);
      var Sd2 = A3({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td2 = rd(Sd2);
      var Ud2 = A3({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud2);
      var Wd = A3({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A3({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae3 = ia2 && "CompositionEvent" in window;
      var be3 = null;
      ia2 && "documentMode" in document && (be3 = document.documentMode);
      var ce3 = ia2 && "TextEvent" in window && !be3;
      var de2 = ia2 && (!ae3 || be3 && 8 < be3 && 11 >= be3);
      var ee2 = String.fromCharCode(32);
      var fe3 = false;
      function ge3(a, b2) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b2.keyCode);
          case "keydown":
            return 229 !== b2.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he2(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie2 = false;
      function je2(a, b2) {
        switch (a) {
          case "compositionend":
            return he2(b2);
          case "keypress":
            if (32 !== b2.which) return null;
            fe3 = true;
            return ee2;
          case "textInput":
            return a = b2.data, a === ee2 && fe3 ? null : a;
          default:
            return null;
        }
      }
      function ke3(a, b2) {
        if (ie2) return "compositionend" === a || !ae3 && ge3(a, b2) ? (a = nd2(), md2 = ld = kd2 = null, ie2 = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
              if (b2.char && 1 < b2.char.length) return b2.char;
              if (b2.which) return String.fromCharCode(b2.which);
            }
            return null;
          case "compositionend":
            return de2 && "ko" !== b2.locale ? null : b2.data;
          default:
            return null;
        }
      }
      var le3 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me3(a) {
        var b2 = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b2 ? !!le3[a.type] : "textarea" === b2 ? true : false;
      }
      function ne3(a, b2, c, d) {
        Eb(d);
        b2 = oe3(b2, "onChange");
        0 < b2.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b2 }));
      }
      var pe3 = null;
      var qe3 = null;
      function re3(a) {
        se3(a, 0);
      }
      function te3(a) {
        var b2 = ue2(a);
        if (Wa2(b2)) return a;
      }
      function ve2(a, b2) {
        if ("change" === a) return b2;
      }
      var we3 = false;
      if (ia2) {
        if (ia2) {
          ye2 = "oninput" in document;
          if (!ye2) {
            ze2 = document.createElement("div");
            ze2.setAttribute("oninput", "return;");
            ye2 = "function" === typeof ze2.oninput;
          }
          xe3 = ye2;
        } else xe3 = false;
        we3 = xe3 && (!document.documentMode || 9 < document.documentMode);
      }
      var xe3;
      var ye2;
      var ze2;
      function Ae2() {
        pe3 && (pe3.detachEvent("onpropertychange", Be3), qe3 = pe3 = null);
      }
      function Be3(a) {
        if ("value" === a.propertyName && te3(qe3)) {
          var b2 = [];
          ne3(b2, qe3, a, xb(a));
          Jb(re3, b2);
        }
      }
      function Ce3(a, b2, c) {
        "focusin" === a ? (Ae2(), pe3 = b2, qe3 = c, pe3.attachEvent("onpropertychange", Be3)) : "focusout" === a && Ae2();
      }
      function De2(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te3(qe3);
      }
      function Ee2(a, b2) {
        if ("click" === a) return te3(b2);
      }
      function Fe3(a, b2) {
        if ("input" === a || "change" === a) return te3(b2);
      }
      function Ge3(a, b2) {
        return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
      }
      var He3 = "function" === typeof Object.is ? Object.is : Ge3;
      function Ie3(a, b2) {
        if (He3(a, b2)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2) return false;
        var c = Object.keys(a), d = Object.keys(b2);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e2 = c[d];
          if (!ja2.call(b2, e2) || !He3(a[e2], b2[e2])) return false;
        }
        return true;
      }
      function Je2(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke2(a, b2) {
        var c = Je2(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b2 && d >= b2) return { node: c, offset: b2 - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je2(c);
        }
      }
      function Le3(a, b2) {
        return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le3(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
      }
      function Me2() {
        for (var a = window, b2 = Xa2(); b2 instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b2.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b2.contentWindow;
          else break;
          b2 = Xa2(a.document);
        }
        return b2;
      }
      function Ne3(a) {
        var b2 = a && a.nodeName && a.nodeName.toLowerCase();
        return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
      }
      function Oe3(a) {
        var b2 = Me2(), c = a.focusedElem, d = a.selectionRange;
        if (b2 !== c && c && c.ownerDocument && Le3(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne3(c)) {
            if (b2 = d.start, a = d.end, void 0 === a && (a = b2), "selectionStart" in c) c.selectionStart = b2, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b2 = c.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e2 = c.textContent.length, f2 = Math.min(d.start, e2);
              d = void 0 === d.end ? f2 : Math.min(d.end, e2);
              !a.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
              e2 = Ke2(c, f2);
              var g = Ke2(
                c,
                d
              );
              e2 && g && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b2), a.extend(g.node, g.offset)) : (b2.setEnd(g.node, g.offset), a.addRange(b2)));
            }
          }
          b2 = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b2.length; c++) a = b2[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe3 = ia2 && "documentMode" in document && 11 >= document.documentMode;
      var Qe2 = null;
      var Re2 = null;
      var Se3 = null;
      var Te3 = false;
      function Ue3(a, b2, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te3 || null == Qe2 || Qe2 !== Xa2(d) || (d = Qe2, "selectionStart" in d && Ne3(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se3 && Ie3(Se3, d) || (Se3 = d, d = oe3(Re2, "onSelect"), 0 < d.length && (b2 = new td("onSelect", "select", null, b2, c), a.push({ event: b2, listeners: d }), b2.target = Qe2)));
      }
      function Ve2(a, b2) {
        var c = {};
        c[a.toLowerCase()] = b2.toLowerCase();
        c["Webkit" + a] = "webkit" + b2;
        c["Moz" + a] = "moz" + b2;
        return c;
      }
      var We3 = { animationend: Ve2("Animation", "AnimationEnd"), animationiteration: Ve2("Animation", "AnimationIteration"), animationstart: Ve2("Animation", "AnimationStart"), transitionend: Ve2("Transition", "TransitionEnd") };
      var Xe2 = {};
      var Ye3 = {};
      ia2 && (Ye3 = document.createElement("div").style, "AnimationEvent" in window || (delete We3.animationend.animation, delete We3.animationiteration.animation, delete We3.animationstart.animation), "TransitionEvent" in window || delete We3.transitionend.transition);
      function Ze2(a) {
        if (Xe2[a]) return Xe2[a];
        if (!We3[a]) return a;
        var b2 = We3[a], c;
        for (c in b2) if (b2.hasOwnProperty(c) && c in Ye3) return Xe2[a] = b2[c];
        return a;
      }
      var $e2 = Ze2("animationend");
      var af = Ze2("animationiteration");
      var bf = Ze2("animationstart");
      var cf = Ze2("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b2) {
        df.set(a, b2);
        fa2(b2, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e2, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha2("onMouseEnter", ["mouseout", "mouseover"]);
      ha2("onMouseLeave", ["mouseout", "mouseover"]);
      ha2("onPointerEnter", ["pointerout", "pointerover"]);
      ha2("onPointerLeave", ["pointerout", "pointerover"]);
      fa2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b2, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b2, void 0, a);
        a.currentTarget = null;
      }
      function se3(a, b2) {
        b2 = 0 !== (b2 & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e2 = d.event;
          d = d.listeners;
          a: {
            var f2 = void 0;
            if (b2) for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k2 = h.instance, l2 = h.currentTarget;
              h = h.listener;
              if (k2 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h, l2);
              f2 = k2;
            }
            else for (g = 0; g < d.length; g++) {
              h = d[g];
              k2 = h.instance;
              l2 = h.currentTarget;
              h = h.listener;
              if (k2 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h, l2);
              f2 = k2;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D2(a, b2) {
        var c = b2[of];
        void 0 === c && (c = b2[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b2, a, 2, false), c.add(d));
      }
      function qf(a, b2, c) {
        var d = 0;
        b2 && (d |= 4);
        pf(c, a, d, b2);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da2.forEach(function(b3) {
            "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
          });
          var b2 = 9 === a.nodeType ? a : a.ownerDocument;
          null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
        }
      }
      function pf(a, b2, c, d) {
        switch (jd(b2)) {
          case 1:
            var e2 = ed2;
            break;
          case 4:
            e2 = gd2;
            break;
          default:
            e2 = fd2;
        }
        c = e2.bind(null, b2, c, a);
        e2 = void 0;
        !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
        d ? void 0 !== e2 ? a.addEventListener(b2, c, { capture: true, passive: e2 }) : a.addEventListener(b2, c, true) : void 0 !== e2 ? a.addEventListener(b2, c, { passive: e2 }) : a.addEventListener(b2, c, false);
      }
      function hd2(a, b2, c, d, e2) {
        var f2 = d;
        if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e2 || 8 === h.nodeType && h.parentNode === e2) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
              }
              g = g.return;
            }
            for (; null !== h; ) {
              g = Wc(h);
              if (null === g) return;
              k2 = g.tag;
              if (5 === k2 || 6 === k2) {
                d = f2 = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f2, e3 = xb(c), g2 = [];
          a: {
            var h2 = df.get(a);
            if (void 0 !== h2) {
              var k3 = td, n2 = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k3 = Rd2;
                  break;
                case "focusin":
                  n2 = "focus";
                  k3 = Fd;
                  break;
                case "focusout":
                  n2 = "blur";
                  k3 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k3 = Fd;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k3 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k3 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k3 = Vd;
                  break;
                case $e2:
                case af:
                case bf:
                  k3 = Hd2;
                  break;
                case cf:
                  k3 = Xd;
                  break;
                case "scroll":
                  k3 = vd;
                  break;
                case "wheel":
                  k3 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k3 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k3 = Td2;
              }
              var t = 0 !== (b2 & 4), J2 = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
              t = [];
              for (var w2 = d2, u; null !== w2; ) {
                u = w2;
                var F3 = u.stateNode;
                5 === u.tag && null !== F3 && (u = F3, null !== x && (F3 = Kb(w2, x), null != F3 && t.push(tf(w2, F3, u))));
                if (J2) break;
                w2 = w2.return;
              }
              0 < t.length && (h2 = new k3(h2, n2, null, c, e3), g2.push({ event: h2, listeners: t }));
            }
          }
          if (0 === (b2 & 7)) {
            a: {
              h2 = "mouseover" === a || "pointerover" === a;
              k3 = "mouseout" === a || "pointerout" === a;
              if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf])) break a;
              if (k3 || h2) {
                h2 = e3.window === e3 ? e3 : (h2 = e3.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k3) {
                  if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
                } else k3 = null, n2 = d2;
                if (k3 !== n2) {
                  t = Bd;
                  F3 = "onMouseLeave";
                  x = "onMouseEnter";
                  w2 = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td2, F3 = "onPointerLeave", x = "onPointerEnter", w2 = "pointer";
                  J2 = null == k3 ? h2 : ue2(k3);
                  u = null == n2 ? h2 : ue2(n2);
                  h2 = new t(F3, w2 + "leave", k3, c, e3);
                  h2.target = J2;
                  h2.relatedTarget = u;
                  F3 = null;
                  Wc(e3) === d2 && (t = new t(x, w2 + "enter", n2, c, e3), t.target = u, t.relatedTarget = J2, F3 = t);
                  J2 = F3;
                  if (k3 && n2) b: {
                    t = k3;
                    x = n2;
                    w2 = 0;
                    for (u = t; u; u = vf(u)) w2++;
                    u = 0;
                    for (F3 = x; F3; F3 = vf(F3)) u++;
                    for (; 0 < w2 - u; ) t = vf(t), w2--;
                    for (; 0 < u - w2; ) x = vf(x), u--;
                    for (; w2--; ) {
                      if (t === x || null !== x && t === x.alternate) break b;
                      t = vf(t);
                      x = vf(x);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k3 && wf(g2, h2, k3, t, false);
                  null !== n2 && null !== J2 && wf(g2, J2, n2, t, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue2(d2) : window;
              k3 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k3 || "input" === k3 && "file" === h2.type) var na2 = ve2;
              else if (me3(h2)) if (we3) na2 = Fe3;
              else {
                na2 = De2;
                var xa = Ce3;
              }
              else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na2 = Ee2);
              if (na2 && (na2 = na2(a, d2))) {
                ne3(g2, na2, c, e3);
                break a;
              }
              xa && xa(a, h2, d2);
              "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa = d2 ? ue2(d2) : window;
            switch (a) {
              case "focusin":
                if (me3(xa) || "true" === xa.contentEditable) Qe2 = xa, Re2 = d2, Se3 = null;
                break;
              case "focusout":
                Se3 = Re2 = Qe2 = null;
                break;
              case "mousedown":
                Te3 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te3 = false;
                Ue3(g2, c, e3);
                break;
              case "selectionchange":
                if (Pe3) break;
              case "keydown":
              case "keyup":
                Ue3(g2, c, e3);
            }
            var $a2;
            if (ae3) b: {
              switch (a) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
            else ie2 ? ge3(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && (de2 && "ko" !== c.locale && (ie2 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie2 && ($a2 = nd2()) : (kd2 = e3, ld = "value" in kd2 ? kd2.value : kd2.textContent, ie2 = true)), xa = oe3(d2, ba), 0 < xa.length && (ba = new Ld2(ba, a, null, c, e3), g2.push({ event: ba, listeners: xa }), $a2 ? ba.data = $a2 : ($a2 = he2(c), null !== $a2 && (ba.data = $a2))));
            if ($a2 = ce3 ? je2(a, c) : ke3(a, c)) d2 = oe3(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Ld2("onBeforeInput", "beforeinput", null, c, e3), g2.push({ event: e3, listeners: d2 }), e3.data = $a2);
          }
          se3(g2, b2);
        });
      }
      function tf(a, b2, c) {
        return { instance: a, listener: b2, currentTarget: c };
      }
      function oe3(a, b2) {
        for (var c = b2 + "Capture", d = []; null !== a; ) {
          var e2 = a, f2 = e2.stateNode;
          5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d.push(tf(a, f2, e2)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b2, c, d, e2) {
        for (var f2 = b2._reactName, g = []; null !== c && c !== d; ) {
          var h = c, k2 = h.alternate, l2 = h.stateNode;
          if (null !== k2 && k2 === d) break;
          5 === h.tag && null !== l2 && (h = l2, e2 ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e2 || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b2, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b2, c) {
        b2 = zf(b2);
        if (zf(a) !== b2 && c) throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b2) {
        return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b2) {
        var c = b2, d = 0;
        do {
          var e2 = c.nextSibling;
          a.removeChild(c);
          if (e2 && 8 === e2.nodeType) if (c = e2.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e2);
              bd(b2);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e2;
        } while (c);
        bd(b2);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b2 = a.nodeType;
          if (1 === b2 || 3 === b2) break;
          if (8 === b2) {
            b2 = a.data;
            if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
            if ("/$" === b2) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b2 = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b2) return a;
              b2--;
            } else "/$" === c && b2++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b2 = a[Of];
        if (b2) return b2;
        for (var c = a.parentNode; c; ) {
          if (b2 = c[uf] || c[Of]) {
            c = b2.alternate;
            if (null !== b2.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
              if (c = a[Of]) return c;
              a = Mf(a);
            }
            return b2;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue2(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E3(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G3(a, b2) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b2;
      }
      var Vf = {};
      var H = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b2) {
        var c = a.type.contextTypes;
        if (!c) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b2) return d.__reactInternalMemoizedMaskedChildContext;
        var e2 = {}, f2;
        for (f2 in c) e2[f2] = b2[f2];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
        return e2;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E3(Wf);
        E3(H);
      }
      function ag(a, b2, c) {
        if (H.current !== Vf) throw Error(p(168));
        G3(H, b2);
        G3(Wf, c);
      }
      function bg(a, b2, c) {
        var d = a.stateNode;
        b2 = b2.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e2 in d) if (!(e2 in b2)) throw Error(p(108, Ra(a) || "Unknown", e2));
        return A3({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H.current;
        G3(H, a);
        G3(Wf, Wf.current);
        return true;
      }
      function dg(a, b2, c) {
        var d = a.stateNode;
        if (!d) throw Error(p(169));
        c ? (a = bg(a, b2, Xf), d.__reactInternalMemoizedMergedChildContext = a, E3(Wf), E3(H), G3(H, a)) : E3(Wf);
        G3(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b2 = C2;
          try {
            var c = eg;
            for (C2 = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e2) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
          } finally {
            C2 = b2, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b2) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b2;
      }
      function ug(a, b2, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e2 = 32 - oc(d) - 1;
        d &= ~(1 << e2);
        c += 1;
        var f2 = 32 - oc(b2) + e2;
        if (30 < f2) {
          var g = e2 - e2 % 5;
          f2 = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e2 -= g;
          rg = 1 << 32 - oc(b2) + e2 | c << e2 | d;
          sg = f2 + a;
        } else rg = 1 << f2 | c << e2 | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I2 = false;
      var zg = null;
      function Ag(a, b2) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b2;
        c.return = a;
        b2 = a.deletions;
        null === b2 ? (a.deletions = [c], a.flags |= 16) : b2.push(c);
      }
      function Cg(a, b2) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b2 = 1 !== b2.nodeType || c.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
            return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
          case 6:
            return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
          case 13:
            return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b2, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I2) {
          var b2 = yg;
          if (b2) {
            var c = b2;
            if (!Cg(a, b2)) {
              if (Dg(a)) throw Error(p(418));
              b2 = Lf(c.nextSibling);
              var d = xg;
              b2 && Cg(a, b2) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I2 = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I2 = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I2) return Fg(a), I2 = true, false;
        var b2;
        (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
        if (b2 && (b2 = yg)) {
          if (Dg(a)) throw Hg(), Error(p(418));
          for (; b2; ) Ag(a, b2), b2 = Lf(b2.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b2 = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b2) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b2--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b2++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I2 = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a, b2, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e2 = d, f2 = "" + a;
            if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
            b2 = function(a2) {
              var b3 = e2.refs;
              null === a2 ? delete b3[f2] : b3[f2] = a2;
            };
            b2._stringRef = f2;
            return b2;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function Mg(a, b2) {
        a = Object.prototype.toString.call(b2);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b2 = a._init;
        return b2(a._payload);
      }
      function Og(a) {
        function b2(b3, c2) {
          if (a) {
            var d2 = b3.deletions;
            null === d2 ? (b3.deletions = [c2], b3.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b2(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b3) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
          return a2;
        }
        function e2(a2, b3) {
          a2 = Pg(a2, b3);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f2(b3, c2, d2) {
          b3.index = d2;
          if (!a) return b3.flags |= 1048576, c2;
          d2 = b3.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b3.flags |= 2, c2) : d2;
          b3.flags |= 2;
          return c2;
        }
        function g(b3) {
          a && null === b3.alternate && (b3.flags |= 2);
          return b3;
        }
        function h(a2, b3, c2, d2) {
          if (null === b3 || 6 !== b3.tag) return b3 = Qg(c2, a2.mode, d2), b3.return = a2, b3;
          b3 = e2(b3, c2);
          b3.return = a2;
          return b3;
        }
        function k2(a2, b3, c2, d2) {
          var f3 = c2.type;
          if (f3 === ya) return m(a2, b3, c2.props.children, d2, c2.key);
          if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha2 && Ng(f3) === b3.type)) return d2 = e2(b3, c2.props), d2.ref = Lg(a2, b3, c2), d2.return = a2, d2;
          d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Lg(a2, b3, c2);
          d2.return = a2;
          return d2;
        }
        function l2(a2, b3, c2, d2) {
          if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c2.containerInfo || b3.stateNode.implementation !== c2.implementation) return b3 = Sg(c2, a2.mode, d2), b3.return = a2, b3;
          b3 = e2(b3, c2.children || []);
          b3.return = a2;
          return b3;
        }
        function m(a2, b3, c2, d2, f3) {
          if (null === b3 || 7 !== b3.tag) return b3 = Tg(c2, a2.mode, d2, f3), b3.return = a2, b3;
          b3 = e2(b3, c2);
          b3.return = a2;
          return b3;
        }
        function q(a2, b3, c2) {
          if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a2.mode, c2), b3.return = a2, b3;
          if ("object" === typeof b3 && null !== b3) {
            switch (b3.$$typeof) {
              case va:
                return c2 = Rg(b3.type, b3.key, b3.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b3), c2.return = a2, c2;
              case wa2:
                return b3 = Sg(b3, a2.mode, c2), b3.return = a2, b3;
              case Ha2:
                var d2 = b3._init;
                return q(a2, d2(b3._payload), c2);
            }
            if (eb(b3) || Ka2(b3)) return b3 = Tg(b3, a2.mode, c2, null), b3.return = a2, b3;
            Mg(a2, b3);
          }
          return null;
        }
        function r(a2, b3, c2, d2) {
          var e3 = null !== b3 ? b3.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e3 ? null : h(a2, b3, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va:
                return c2.key === e3 ? k2(a2, b3, c2, d2) : null;
              case wa2:
                return c2.key === e3 ? l2(a2, b3, c2, d2) : null;
              case Ha2:
                return e3 = c2._init, r(
                  a2,
                  b3,
                  e3(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka2(c2)) return null !== e3 ? null : m(a2, b3, c2, d2, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y2(a2, b3, c2, d2, e3) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b3, a2, "" + d2, e3);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b3, a2, d2, e3);
              case wa2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b3, a2, d2, e3);
              case Ha2:
                var f3 = d2._init;
                return y2(a2, b3, c2, f3(d2._payload), e3);
            }
            if (eb(d2) || Ka2(d2)) return a2 = a2.get(c2) || null, m(b3, a2, d2, e3, null);
            Mg(b3, d2);
          }
          return null;
        }
        function n2(e3, g2, h2, k3) {
          for (var l3 = null, m2 = null, u = g2, w2 = g2 = 0, x = null; null !== u && w2 < h2.length; w2++) {
            u.index > w2 ? (x = u, u = null) : x = u.sibling;
            var n3 = r(e3, u, h2[w2], k3);
            if (null === n3) {
              null === u && (u = x);
              break;
            }
            a && u && null === n3.alternate && b2(e3, u);
            g2 = f2(n3, g2, w2);
            null === m2 ? l3 = n3 : m2.sibling = n3;
            m2 = n3;
            u = x;
          }
          if (w2 === h2.length) return c(e3, u), I2 && tg(e3, w2), l3;
          if (null === u) {
            for (; w2 < h2.length; w2++) u = q(e3, h2[w2], k3), null !== u && (g2 = f2(u, g2, w2), null === m2 ? l3 = u : m2.sibling = u, m2 = u);
            I2 && tg(e3, w2);
            return l3;
          }
          for (u = d(e3, u); w2 < h2.length; w2++) x = y2(u, e3, w2, h2[w2], k3), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w2 : x.key), g2 = f2(x, g2, w2), null === m2 ? l3 = x : m2.sibling = x, m2 = x);
          a && u.forEach(function(a2) {
            return b2(e3, a2);
          });
          I2 && tg(e3, w2);
          return l3;
        }
        function t(e3, g2, h2, k3) {
          var l3 = Ka2(h2);
          if ("function" !== typeof l3) throw Error(p(150));
          h2 = l3.call(h2);
          if (null == h2) throw Error(p(151));
          for (var u = l3 = null, m2 = g2, w2 = g2 = 0, x = null, n3 = h2.next(); null !== m2 && !n3.done; w2++, n3 = h2.next()) {
            m2.index > w2 ? (x = m2, m2 = null) : x = m2.sibling;
            var t2 = r(e3, m2, n3.value, k3);
            if (null === t2) {
              null === m2 && (m2 = x);
              break;
            }
            a && m2 && null === t2.alternate && b2(e3, m2);
            g2 = f2(t2, g2, w2);
            null === u ? l3 = t2 : u.sibling = t2;
            u = t2;
            m2 = x;
          }
          if (n3.done) return c(
            e3,
            m2
          ), I2 && tg(e3, w2), l3;
          if (null === m2) {
            for (; !n3.done; w2++, n3 = h2.next()) n3 = q(e3, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u ? l3 = n3 : u.sibling = n3, u = n3);
            I2 && tg(e3, w2);
            return l3;
          }
          for (m2 = d(e3, m2); !n3.done; w2++, n3 = h2.next()) n3 = y2(m2, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m2.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u ? l3 = n3 : u.sibling = n3, u = n3);
          a && m2.forEach(function(a2) {
            return b2(e3, a2);
          });
          I2 && tg(e3, w2);
          return l3;
        }
        function J2(a2, d2, f3, h2) {
          "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
          if ("object" === typeof f3 && null !== f3) {
            switch (f3.$$typeof) {
              case va:
                a: {
                  for (var k3 = f3.key, l3 = d2; null !== l3; ) {
                    if (l3.key === k3) {
                      k3 = f3.type;
                      if (k3 === ya) {
                        if (7 === l3.tag) {
                          c(a2, l3.sibling);
                          d2 = e2(l3, f3.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha2 && Ng(k3) === l3.type) {
                        c(a2, l3.sibling);
                        d2 = e2(l3, f3.props);
                        d2.ref = Lg(a2, l3, f3);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l3);
                      break;
                    } else b2(a2, l3);
                    l3 = l3.sibling;
                  }
                  f3.type === ya ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
                }
                return g(a2);
              case wa2:
                a: {
                  for (l3 = f3.key; null !== d2; ) {
                    if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                      c(a2, d2.sibling);
                      d2 = e2(d2, f3.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b2(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f3, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha2:
                return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
            }
            if (eb(f3)) return n2(a2, d2, f3, h2);
            if (Ka2(f3)) return t(a2, d2, f3, h2);
            Mg(a2, f3);
          }
          return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e2(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J2;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a) {
        var b2 = Wg.current;
        E3(Wg);
        a._currentValue = b2;
      }
      function bh(a, b2, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d && (d.childLanes |= b2)) : null !== d && (d.childLanes & b2) !== b2 && (d.childLanes |= b2);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b2) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (dh = true), a.firstContext = null);
      }
      function eh(a) {
        var b2 = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b2, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b2;
      }
      var fh = null;
      function gh(a) {
        null === fh ? fh = [a] : fh.push(a);
      }
      function hh(a, b2, c, d) {
        var e2 = b2.interleaved;
        null === e2 ? (c.next = c, gh(b2)) : (c.next = e2.next, e2.next = c);
        b2.interleaved = c;
        return ih(a, d);
      }
      function ih(a, b2) {
        a.lanes |= b2;
        var c = a.alternate;
        null !== c && (c.lanes |= b2);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b2, c = a.alternate, null !== c && (c.childLanes |= b2), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh = false;
      function kh(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a, b2) {
        a = a.updateQueue;
        b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh(a, b2) {
        return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a, b2, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K2 & 2)) {
          var e2 = d.pending;
          null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
          d.pending = b2;
          return ih(a, c);
        }
        e2 = d.interleaved;
        null === e2 ? (b2.next = b2, gh(d)) : (b2.next = e2.next, e2.next = b2);
        d.interleaved = b2;
        return ih(a, c);
      }
      function oh(a, b2, c) {
        b2 = b2.updateQueue;
        if (null !== b2 && (b2 = b2.shared, 0 !== (c & 4194240))) {
          var d = b2.lanes;
          d &= a.pendingLanes;
          c |= d;
          b2.lanes = c;
          Cc(a, c);
        }
      }
      function ph(a, b2) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e2 = null, f2 = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f2 ? e2 = f2 = g : f2 = f2.next = g;
              c = c.next;
            } while (null !== c);
            null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
          } else e2 = f2 = b2;
          c = { baseState: d.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b2 : a.next = b2;
        c.lastBaseUpdate = b2;
      }
      function qh(a, b2, c, d) {
        var e2 = a.updateQueue;
        jh = false;
        var f2 = e2.firstBaseUpdate, g = e2.lastBaseUpdate, h = e2.shared.pending;
        if (null !== h) {
          e2.shared.pending = null;
          var k2 = h, l2 = k2.next;
          k2.next = null;
          null === g ? f2 = l2 : g.next = l2;
          g = k2;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l2 : h.next = l2, m.lastBaseUpdate = k2));
        }
        if (null !== f2) {
          var q = e2.baseState;
          g = 0;
          m = l2 = k2 = null;
          h = f2;
          do {
            var r = h.lane, y2 = h.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y2,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n2 = a, t = h;
                r = b2;
                y2 = c;
                switch (t.tag) {
                  case 1:
                    n2 = t.payload;
                    if ("function" === typeof n2) {
                      q = n2.call(y2, q, r);
                      break a;
                    }
                    q = n2;
                    break a;
                  case 3:
                    n2.flags = n2.flags & -65537 | 128;
                  case 0:
                    n2 = t.payload;
                    r = "function" === typeof n2 ? n2.call(y2, q, r) : n2;
                    if (null === r || void 0 === r) break a;
                    q = A3({}, q, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e2.effects, null === r ? e2.effects = [h] : r.push(h));
            } else y2 = { eventTime: y2, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l2 = m = y2, k2 = q) : m = m.next = y2, g |= r;
            h = h.next;
            if (null === h) if (h = e2.shared.pending, null === h) break;
            else r = h, h = r.next, r.next = null, e2.lastBaseUpdate = r, e2.shared.pending = null;
          } while (1);
          null === m && (k2 = q);
          e2.baseState = k2;
          e2.firstBaseUpdate = l2;
          e2.lastBaseUpdate = m;
          b2 = e2.shared.interleaved;
          if (null !== b2) {
            e2 = b2;
            do
              g |= e2.lane, e2 = e2.next;
            while (e2 !== b2);
          } else null === f2 && (e2.shared.lanes = 0);
          rh |= g;
          a.lanes = g;
          a.memoizedState = q;
        }
      }
      function sh(a, b2, c) {
        a = b2.effects;
        b2.effects = null;
        if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
          var d = a[b2], e2 = d.callback;
          if (null !== e2) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e2) throw Error(p(191, e2));
            e2.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b2) {
        G3(wh, b2);
        G3(vh, a);
        G3(uh, th);
        a = b2.nodeType;
        switch (a) {
          case 9:
          case 11:
            b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
        }
        E3(uh);
        G3(uh, b2);
      }
      function zh() {
        E3(uh);
        E3(vh);
        E3(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b2 = xh(uh.current);
        var c = lb(b2, a.type);
        b2 !== c && (G3(vh, a), G3(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E3(uh), E3(vh));
      }
      var L2 = Uf(0);
      function Ch(a) {
        for (var b2 = a; null !== b2; ) {
          if (13 === b2.tag) {
            var c = b2.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b2;
          } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
            if (0 !== (b2.flags & 128)) return b2;
          } else if (null !== b2.child) {
            b2.child.return = b2;
            b2 = b2.child;
            continue;
          }
          if (b2 === a) break;
          for (; null === b2.sibling; ) {
            if (null === b2.return || b2.return === a) return null;
            b2 = b2.return;
          }
          b2.sibling.return = b2.return;
          b2 = b2.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua.ReactCurrentDispatcher;
      var Gh = ua.ReactCurrentBatchConfig;
      var Hh = 0;
      var M3 = null;
      var N2 = null;
      var O3 = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P3() {
        throw Error(p(321));
      }
      function Mh(a, b2) {
        if (null === b2) return false;
        for (var c = 0; c < b2.length && c < a.length; c++) if (!He3(a[c], b2[c])) return false;
        return true;
      }
      function Nh(a, b2, c, d, e2, f2) {
        Hh = f2;
        M3 = b2;
        b2.memoizedState = null;
        b2.updateQueue = null;
        b2.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e2);
        if (Jh) {
          f2 = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f2) throw Error(p(301));
            f2 += 1;
            O3 = N2 = null;
            b2.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e2);
          } while (Jh);
        }
        Fh.current = Rh;
        b2 = null !== N2 && null !== N2.next;
        Hh = 0;
        O3 = N2 = M3 = null;
        Ih = false;
        if (b2) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O3 ? M3.memoizedState = O3 = a : O3 = O3.next = a;
        return O3;
      }
      function Uh() {
        if (null === N2) {
          var a = M3.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N2.next;
        var b2 = null === O3 ? M3.memoizedState : O3.next;
        if (null !== b2) O3 = b2, N2 = a;
        else {
          if (null === a) throw Error(p(310));
          N2 = a;
          a = { memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null };
          null === O3 ? M3.memoizedState = O3 = a : O3 = O3.next = a;
        }
        return O3;
      }
      function Vh(a, b2) {
        return "function" === typeof b2 ? b2(a) : b2;
      }
      function Wh(a) {
        var b2 = Uh(), c = b2.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = N2, e2 = d.baseQueue, f2 = c.pending;
        if (null !== f2) {
          if (null !== e2) {
            var g = e2.next;
            e2.next = f2.next;
            f2.next = g;
          }
          d.baseQueue = e2 = f2;
          c.pending = null;
        }
        if (null !== e2) {
          f2 = e2.next;
          d = d.baseState;
          var h = g = null, k2 = null, l2 = f2;
          do {
            var m = l2.lane;
            if ((Hh & m) === m) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
            else {
              var q = {
                lane: m,
                action: l2.action,
                hasEagerState: l2.hasEagerState,
                eagerState: l2.eagerState,
                next: null
              };
              null === k2 ? (h = k2 = q, g = d) : k2 = k2.next = q;
              M3.lanes |= m;
              rh |= m;
            }
            l2 = l2.next;
          } while (null !== l2 && l2 !== f2);
          null === k2 ? g = d : k2.next = h;
          He3(d, b2.memoizedState) || (dh = true);
          b2.memoizedState = d;
          b2.baseState = g;
          b2.baseQueue = k2;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e2 = a;
          do
            f2 = e2.lane, M3.lanes |= f2, rh |= f2, e2 = e2.next;
          while (e2 !== a);
        } else null === e2 && (c.lanes = 0);
        return [b2.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b2 = Uh(), c = b2.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e2 = c.pending, f2 = b2.memoizedState;
        if (null !== e2) {
          c.pending = null;
          var g = e2 = e2.next;
          do
            f2 = a(f2, g.action), g = g.next;
          while (g !== e2);
          He3(f2, b2.memoizedState) || (dh = true);
          b2.memoizedState = f2;
          null === b2.baseQueue && (b2.baseState = f2);
          c.lastRenderedState = f2;
        }
        return [f2, d];
      }
      function Yh() {
      }
      function Zh(a, b2) {
        var c = M3, d = Uh(), e2 = b2(), f2 = !He3(d.memoizedState, e2);
        f2 && (d.memoizedState = e2, dh = true);
        d = d.queue;
        $h(ai.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b2 || f2 || null !== O3 && O3.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi(9, ci.bind(null, c, d, e2, b2), void 0, null);
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(c, b2, e2);
        }
        return e2;
      }
      function di(a, b2, c) {
        a.flags |= 16384;
        a = { getSnapshot: b2, value: c };
        b2 = M3.updateQueue;
        null === b2 ? (b2 = { lastEffect: null, stores: null }, M3.updateQueue = b2, b2.stores = [a]) : (c = b2.stores, null === c ? b2.stores = [a] : c.push(a));
      }
      function ci(a, b2, c, d) {
        b2.value = c;
        b2.getSnapshot = d;
        ei(b2) && fi(a);
      }
      function ai(a, b2, c) {
        return c(function() {
          ei(b2) && fi(a);
        });
      }
      function ei(a) {
        var b2 = a.getSnapshot;
        a = a.value;
        try {
          var c = b2();
          return !He3(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi(a) {
        var b2 = ih(a, 1);
        null !== b2 && gi(b2, a, 1, -1);
      }
      function hi(a) {
        var b2 = Th();
        "function" === typeof a && (a = a());
        b2.memoizedState = b2.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b2.queue = a;
        a = a.dispatch = ii.bind(null, M3, a);
        return [b2.memoizedState, a];
      }
      function bi(a, b2, c, d) {
        a = { tag: a, create: b2, destroy: c, deps: d, next: null };
        b2 = M3.updateQueue;
        null === b2 ? (b2 = { lastEffect: null, stores: null }, M3.updateQueue = b2, b2.lastEffect = a.next = a) : (c = b2.lastEffect, null === c ? b2.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b2.lastEffect = a));
        return a;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki(a, b2, c, d) {
        var e2 = Th();
        M3.flags |= a;
        e2.memoizedState = bi(1 | b2, c, void 0, void 0 === d ? null : d);
      }
      function li(a, b2, c, d) {
        var e2 = Uh();
        d = void 0 === d ? null : d;
        var f2 = void 0;
        if (null !== N2) {
          var g = N2.memoizedState;
          f2 = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e2.memoizedState = bi(b2, c, f2, d);
            return;
          }
        }
        M3.flags |= a;
        e2.memoizedState = bi(1 | b2, c, f2, d);
      }
      function mi(a, b2) {
        return ki(8390656, 8, a, b2);
      }
      function $h(a, b2) {
        return li(2048, 8, a, b2);
      }
      function ni(a, b2) {
        return li(4, 2, a, b2);
      }
      function oi(a, b2) {
        return li(4, 4, a, b2);
      }
      function pi(a, b2) {
        if ("function" === typeof b2) return a = a(), b2(a), function() {
          b2(null);
        };
        if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
          b2.current = null;
        };
      }
      function qi(a, b2, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li(4, 4, pi.bind(null, b2, a), c);
      }
      function ri() {
      }
      function si(a, b2) {
        var c = Uh();
        b2 = void 0 === b2 ? null : b2;
        var d = c.memoizedState;
        if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
        c.memoizedState = [a, b2];
        return a;
      }
      function ti(a, b2) {
        var c = Uh();
        b2 = void 0 === b2 ? null : b2;
        var d = c.memoizedState;
        if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b2];
        return a;
      }
      function ui(a, b2, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He3(c, b2) || (c = yc(), M3.lanes |= c, rh |= c, a.baseState = true);
        return b2;
      }
      function vi(a, b2) {
        var c = C2;
        C2 = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b2();
        } finally {
          C2 = c, Gh.transition = d;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi(a, b2, c) {
        var d = yi(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b2, c);
        else if (c = hh(a, b2, c, d), null !== c) {
          var e2 = R3();
          gi(c, a, d, e2);
          Bi(c, b2, d);
        }
      }
      function ii(a, b2, c) {
        var d = yi(a), e2 = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b2, e2);
        else {
          var f2 = a.alternate;
          if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
            var g = b2.lastRenderedState, h = f2(g, c);
            e2.hasEagerState = true;
            e2.eagerState = h;
            if (He3(h, g)) {
              var k2 = b2.interleaved;
              null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
              b2.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
          c = hh(a, b2, e2, d);
          null !== c && (e2 = R3(), gi(c, a, d, e2), Bi(c, b2, d));
        }
      }
      function zi(a) {
        var b2 = a.alternate;
        return a === M3 || null !== b2 && b2 === M3;
      }
      function Ai(a, b2) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b2.next = b2 : (b2.next = c.next, c.next = b2);
        a.pending = b2;
      }
      function Bi(a, b2, c) {
        if (0 !== (c & 4194240)) {
          var d = b2.lanes;
          d &= a.pendingLanes;
          c |= d;
          b2.lanes = c;
          Cc(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P3, useContext: P3, useEffect: P3, useImperativeHandle: P3, useInsertionEffect: P3, useLayoutEffect: P3, useMemo: P3, useReducer: P3, useRef: P3, useState: P3, useDebugValue: P3, useDeferredValue: P3, useTransition: P3, useMutableSource: P3, useSyncExternalStore: P3, useId: P3, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b2) {
        Th().memoizedState = [a, void 0 === b2 ? null : b2];
        return a;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b2, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b2, a),
          c
        );
      }, useLayoutEffect: function(a, b2) {
        return ki(4194308, 4, a, b2);
      }, useInsertionEffect: function(a, b2) {
        return ki(4, 2, a, b2);
      }, useMemo: function(a, b2) {
        var c = Th();
        b2 = void 0 === b2 ? null : b2;
        a = a();
        c.memoizedState = [a, b2];
        return a;
      }, useReducer: function(a, b2, c) {
        var d = Th();
        b2 = void 0 !== c ? c(b2) : b2;
        d.memoizedState = d.baseState = b2;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
        d.queue = a;
        a = a.dispatch = xi.bind(null, M3, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b2 = Th();
        a = { current: a };
        return b2.memoizedState = a;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi(false), b2 = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b2, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b2, c) {
        var d = M3, e2 = Th();
        if (I2) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b2();
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b2, c);
        }
        e2.memoizedState = c;
        var f2 = { value: c, getSnapshot: b2 };
        e2.queue = f2;
        mi(ai.bind(
          null,
          d,
          f2,
          a
        ), [a]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f2, c, b2), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b2 = Q.identifierPrefix;
        if (I2) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b2 = ":" + b2 + "R" + c;
          c = Kh++;
          0 < c && (b2 += "H" + c.toString(32));
          b2 += ":";
        } else c = Lh++, b2 = ":" + b2 + "r" + c.toString(32) + ":";
        return a.memoizedState = b2;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni,
        useLayoutEffect: oi,
        useMemo: ti,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri,
        useDeferredValue: function(a) {
          var b2 = Uh();
          return ui(b2, N2.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b2 = Uh().memoizedState;
          return [a, b2];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function(a) {
        var b2 = Uh();
        return null === N2 ? b2.memoizedState = a : ui(b2, N2.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b2 = Uh().memoizedState;
        return [a, b2];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a, b2) {
        if (a && a.defaultProps) {
          b2 = A3({}, b2);
          a = a.defaultProps;
          for (var c in a) void 0 === b2[c] && (b2[c] = a[c]);
          return b2;
        }
        return b2;
      }
      function Di(a, b2, c, d) {
        b2 = a.memoizedState;
        c = c(d, b2);
        c = null === c || void 0 === c ? b2 : A3({}, b2, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b2, c) {
        a = a._reactInternals;
        var d = R3(), e2 = yi(a), f2 = mh(d, e2);
        f2.payload = b2;
        void 0 !== c && null !== c && (f2.callback = c);
        b2 = nh(a, f2, e2);
        null !== b2 && (gi(b2, a, e2, d), oh(b2, a, e2));
      }, enqueueReplaceState: function(a, b2, c) {
        a = a._reactInternals;
        var d = R3(), e2 = yi(a), f2 = mh(d, e2);
        f2.tag = 1;
        f2.payload = b2;
        void 0 !== c && null !== c && (f2.callback = c);
        b2 = nh(a, f2, e2);
        null !== b2 && (gi(b2, a, e2, d), oh(b2, a, e2));
      }, enqueueForceUpdate: function(a, b2) {
        a = a._reactInternals;
        var c = R3(), d = yi(a), e2 = mh(c, d);
        e2.tag = 2;
        void 0 !== b2 && null !== b2 && (e2.callback = b2);
        b2 = nh(a, e2, d);
        null !== b2 && (gi(b2, a, d, c), oh(b2, a, d));
      } };
      function Fi(a, b2, c, d, e2, f2, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie3(c, d) || !Ie3(e2, f2) : true;
      }
      function Gi(a, b2, c) {
        var d = false, e2 = Vf;
        var f2 = b2.contextType;
        "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H.current, d = b2.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e2) : Vf);
        b2 = new b2(c, f2);
        a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
        b2.updater = Ei;
        a.stateNode = b2;
        b2._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
        return b2;
      }
      function Hi(a, b2, c, d) {
        a = b2.state;
        "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c, d);
        "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c, d);
        b2.state !== a && Ei.enqueueReplaceState(b2, b2.state, null);
      }
      function Ii(a, b2, c, d) {
        var e2 = a.stateNode;
        e2.props = c;
        e2.state = a.memoizedState;
        e2.refs = {};
        kh(a);
        var f2 = b2.contextType;
        "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H.current, e2.context = Yf(a, f2));
        e2.state = a.memoizedState;
        f2 = b2.getDerivedStateFromProps;
        "function" === typeof f2 && (Di(a, b2, f2, c), e2.state = a.memoizedState);
        "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a, c, e2, d), e2.state = a.memoizedState);
        "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
      }
      function Ji(a, b2) {
        try {
          var c = "", d = b2;
          do
            c += Pa(d), d = d.return;
          while (d);
          var e2 = c;
        } catch (f2) {
          e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
        }
        return { value: a, source: b2, stack: e2, digest: null };
      }
      function Ki(a, b2, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b2 ? b2 : null };
      }
      function Li(a, b2) {
        try {
          console.error(b2.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a, b2, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b2.value;
        c.callback = function() {
          Oi || (Oi = true, Pi = d);
          Li(a, b2);
        };
        return c;
      }
      function Qi(a, b2, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e2 = b2.value;
          c.payload = function() {
            return d(e2);
          };
          c.callback = function() {
            Li(a, b2);
          };
        }
        var f2 = a.stateNode;
        null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
          Li(a, b2);
          "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c2 = b2.stack;
          this.componentDidCatch(b2.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si(a, b2, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi();
          var e2 = /* @__PURE__ */ new Set();
          d.set(b2, e2);
        } else e2 = d.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d.set(b2, e2));
        e2.has(c) || (e2.add(c), a = Ti.bind(null, a, b2, c), b2.then(a, a));
      }
      function Ui(a) {
        do {
          var b2;
          if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
          if (b2) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi(a, b2, c, d, e2) {
        if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c, b2, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e2;
        return a;
      }
      var Wi = ua.ReactCurrentOwner;
      var dh = false;
      function Xi(a, b2, c, d) {
        b2.child = null === a ? Vg(b2, null, c, d) : Ug(b2, a.child, c, d);
      }
      function Yi(a, b2, c, d, e2) {
        c = c.render;
        var f2 = b2.ref;
        ch(b2, e2);
        d = Nh(a, b2, c, d, f2, e2);
        c = Sh();
        if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
        I2 && c && vg(b2);
        b2.flags |= 1;
        Xi(a, b2, d, e2);
        return b2.child;
      }
      function $i(a, b2, c, d, e2) {
        if (null === a) {
          var f2 = c.type;
          if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b2.tag = 15, b2.type = f2, bj(a, b2, f2, d, e2);
          a = Rg(c.type, null, d, b2, b2.mode, e2);
          a.ref = b2.ref;
          a.return = b2;
          return b2.child = a;
        }
        f2 = a.child;
        if (0 === (a.lanes & e2)) {
          var g = f2.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie3;
          if (c(g, d) && a.ref === b2.ref) return Zi(a, b2, e2);
        }
        b2.flags |= 1;
        a = Pg(f2, d);
        a.ref = b2.ref;
        a.return = b2;
        return b2.child = a;
      }
      function bj(a, b2, c, d, e2) {
        if (null !== a) {
          var f2 = a.memoizedProps;
          if (Ie3(f2, d) && a.ref === b2.ref) if (dh = false, b2.pendingProps = d = f2, 0 !== (a.lanes & e2)) 0 !== (a.flags & 131072) && (dh = true);
          else return b2.lanes = a.lanes, Zi(a, b2, e2);
        }
        return cj(a, b2, c, d, e2);
      }
      function dj(a, b2, c) {
        var d = b2.pendingProps, e2 = d.children, f2 = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G3(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G3(ej, fj), fj |= a, null;
          b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f2 ? f2.baseLanes : c;
          G3(ej, fj);
          fj |= d;
        }
        else null !== f2 ? (d = f2.baseLanes | c, b2.memoizedState = null) : d = c, G3(ej, fj), fj |= d;
        Xi(a, b2, e2, c);
        return b2.child;
      }
      function gj(a, b2) {
        var c = b2.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b2.flags |= 512, b2.flags |= 2097152;
      }
      function cj(a, b2, c, d, e2) {
        var f2 = Zf(c) ? Xf : H.current;
        f2 = Yf(b2, f2);
        ch(b2, e2);
        c = Nh(a, b2, c, d, f2, e2);
        d = Sh();
        if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
        I2 && d && vg(b2);
        b2.flags |= 1;
        Xi(a, b2, c, e2);
        return b2.child;
      }
      function hj(a, b2, c, d, e2) {
        if (Zf(c)) {
          var f2 = true;
          cg(b2);
        } else f2 = false;
        ch(b2, e2);
        if (null === b2.stateNode) ij(a, b2), Gi(b2, c, d), Ii(b2, c, d, e2), d = true;
        else if (null === a) {
          var g = b2.stateNode, h = b2.memoizedProps;
          g.props = h;
          var k2 = g.context, l2 = c.contextType;
          "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b2, l2));
          var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b2, g, d, l2);
          jh = false;
          var r = b2.memoizedState;
          g.state = r;
          qh(b2, d, g, e2);
          k2 = b2.memoizedState;
          h !== d || r !== k2 || Wf.current || jh ? ("function" === typeof m && (Di(b2, c, m, d), k2 = b2.memoizedState), (h = jh || Fi(b2, c, h, d, r, k2, l2)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d, b2.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), d = false);
        } else {
          g = b2.stateNode;
          lh(a, b2);
          h = b2.memoizedProps;
          l2 = b2.type === b2.elementType ? h : Ci(b2.type, h);
          g.props = l2;
          q = b2.pendingProps;
          r = g.context;
          k2 = c.contextType;
          "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b2, k2));
          var y2 = c.getDerivedStateFromProps;
          (m = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k2) && Hi(b2, g, d, k2);
          jh = false;
          r = b2.memoizedState;
          g.state = r;
          qh(b2, d, g, e2);
          var n2 = b2.memoizedState;
          h !== q || r !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c, y2, d), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c, l2, d, r, n2, k2) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b2.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d, b2.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b2.flags |= 1024), d = false);
        }
        return jj(a, b2, c, d, f2, e2);
      }
      function jj(a, b2, c, d, e2, f2) {
        gj(a, b2);
        var g = 0 !== (b2.flags & 128);
        if (!d && !g) return e2 && dg(b2, c, false), Zi(a, b2, f2);
        d = b2.stateNode;
        Wi.current = b2;
        var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b2.flags |= 1;
        null !== a && g ? (b2.child = Ug(b2, a.child, null, f2), b2.child = Ug(b2, null, h, f2)) : Xi(a, b2, h, f2);
        b2.memoizedState = d.state;
        e2 && dg(b2, c, true);
        return b2.child;
      }
      function kj(a) {
        var b2 = a.stateNode;
        b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
        yh(a, b2.containerInfo);
      }
      function lj(a, b2, c, d, e2) {
        Ig();
        Jg(e2);
        b2.flags |= 256;
        Xi(a, b2, c, d);
        return b2.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b2, c) {
        var d = b2.pendingProps, e2 = L2.current, f2 = false, g = 0 !== (b2.flags & 128), h;
        (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
        if (h) f2 = true, b2.flags &= -129;
        else if (null === a || null !== a.memoizedState) e2 |= 1;
        G3(L2, e2 & 1);
        if (null === a) {
          Eg(b2);
          a = b2.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f2 ? (d = b2.mode, f2 = b2.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = nj(c), b2.memoizedState = mj, a) : qj(b2, g);
        }
        e2 = a.memoizedState;
        if (null !== e2 && (h = e2.dehydrated, null !== h)) return rj(a, b2, g, d, h, e2, c);
        if (f2) {
          f2 = d.fallback;
          g = b2.mode;
          e2 = a.child;
          h = e2.sibling;
          var k2 = { mode: "hidden", children: d.children };
          0 === (g & 1) && b2.child !== e2 ? (d = b2.child, d.childLanes = 0, d.pendingProps = k2, b2.deletions = null) : (d = Pg(e2, k2), d.subtreeFlags = e2.subtreeFlags & 14680064);
          null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
          f2.return = b2;
          d.return = b2;
          d.sibling = f2;
          b2.child = d;
          d = f2;
          f2 = b2.child;
          g = a.child.memoizedState;
          g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f2.memoizedState = g;
          f2.childLanes = a.childLanes & ~c;
          b2.memoizedState = mj;
          return d;
        }
        f2 = a.child;
        a = f2.sibling;
        d = Pg(f2, { mode: "visible", children: d.children });
        0 === (b2.mode & 1) && (d.lanes = c);
        d.return = b2;
        d.sibling = null;
        null !== a && (c = b2.deletions, null === c ? (b2.deletions = [a], b2.flags |= 16) : c.push(a));
        b2.child = d;
        b2.memoizedState = null;
        return d;
      }
      function qj(a, b2) {
        b2 = pj({ mode: "visible", children: b2 }, a.mode, 0, null);
        b2.return = a;
        return a.child = b2;
      }
      function sj(a, b2, c, d) {
        null !== d && Jg(d);
        Ug(b2, a.child, null, c);
        a = qj(b2, b2.pendingProps.children);
        a.flags |= 2;
        b2.memoizedState = null;
        return a;
      }
      function rj(a, b2, c, d, e2, f2, g) {
        if (c) {
          if (b2.flags & 256) return b2.flags &= -257, d = Ki(Error(p(422))), sj(a, b2, g, d);
          if (null !== b2.memoizedState) return b2.child = a.child, b2.flags |= 128, null;
          f2 = d.fallback;
          e2 = b2.mode;
          d = pj({ mode: "visible", children: d.children }, e2, 0, null);
          f2 = Tg(f2, e2, g, null);
          f2.flags |= 2;
          d.return = b2;
          f2.return = b2;
          d.sibling = f2;
          b2.child = d;
          0 !== (b2.mode & 1) && Ug(b2, a.child, null, g);
          b2.child.memoizedState = nj(g);
          b2.memoizedState = mj;
          return f2;
        }
        if (0 === (b2.mode & 1)) return sj(a, b2, g, null);
        if ("$!" === e2.data) {
          d = e2.nextSibling && e2.nextSibling.dataset;
          if (d) var h = d.dgst;
          d = h;
          f2 = Error(p(419));
          d = Ki(f2, d, void 0);
          return sj(a, b2, g, d);
        }
        h = 0 !== (g & a.childLanes);
        if (dh || h) {
          d = Q;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e2 = 2;
                break;
              case 16:
                e2 = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e2 = 32;
                break;
              case 536870912:
                e2 = 268435456;
                break;
              default:
                e2 = 0;
            }
            e2 = 0 !== (e2 & (d.suspendedLanes | g)) ? 0 : e2;
            0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a, e2), gi(d, a, e2, -1));
          }
          tj();
          d = Ki(Error(p(421)));
          return sj(a, b2, g, d);
        }
        if ("$?" === e2.data) return b2.flags |= 128, b2.child = a.child, b2 = uj.bind(null, a), e2._reactRetry = b2, null;
        a = f2.treeContext;
        yg = Lf(e2.nextSibling);
        xg = b2;
        I2 = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
        b2 = qj(b2, d.children);
        b2.flags |= 4096;
        return b2;
      }
      function vj(a, b2, c) {
        a.lanes |= b2;
        var d = a.alternate;
        null !== d && (d.lanes |= b2);
        bh(a.return, b2, c);
      }
      function wj(a, b2, c, d, e2) {
        var f2 = a.memoizedState;
        null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e2);
      }
      function xj(a, b2, c) {
        var d = b2.pendingProps, e2 = d.revealOrder, f2 = d.tail;
        Xi(a, b2, d.children, c);
        d = L2.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b2.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b2.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b2);
            else if (19 === a.tag) vj(a, c, b2);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b2) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b2) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G3(L2, d);
        if (0 === (b2.mode & 1)) b2.memoizedState = null;
        else switch (e2) {
          case "forwards":
            c = b2.child;
            for (e2 = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e2 = c), c = c.sibling;
            c = e2;
            null === c ? (e2 = b2.child, b2.child = null) : (e2 = c.sibling, c.sibling = null);
            wj(b2, false, e2, c, f2);
            break;
          case "backwards":
            c = null;
            e2 = b2.child;
            for (b2.child = null; null !== e2; ) {
              a = e2.alternate;
              if (null !== a && null === Ch(a)) {
                b2.child = e2;
                break;
              }
              a = e2.sibling;
              e2.sibling = c;
              c = e2;
              e2 = a;
            }
            wj(b2, true, c, null, f2);
            break;
          case "together":
            wj(b2, false, null, null, void 0);
            break;
          default:
            b2.memoizedState = null;
        }
        return b2.child;
      }
      function ij(a, b2) {
        0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
      }
      function Zi(a, b2, c) {
        null !== a && (b2.dependencies = a.dependencies);
        rh |= b2.lanes;
        if (0 === (c & b2.childLanes)) return null;
        if (null !== a && b2.child !== a.child) throw Error(p(153));
        if (null !== b2.child) {
          a = b2.child;
          c = Pg(a, a.pendingProps);
          b2.child = c;
          for (c.return = b2; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b2;
          c.sibling = null;
        }
        return b2.child;
      }
      function yj(a, b2, c) {
        switch (b2.tag) {
          case 3:
            kj(b2);
            Ig();
            break;
          case 5:
            Ah(b2);
            break;
          case 1:
            Zf(b2.type) && cg(b2);
            break;
          case 4:
            yh(b2, b2.stateNode.containerInfo);
            break;
          case 10:
            var d = b2.type._context, e2 = b2.memoizedProps.value;
            G3(Wg, d._currentValue);
            d._currentValue = e2;
            break;
          case 13:
            d = b2.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G3(L2, L2.current & 1), b2.flags |= 128, null;
              if (0 !== (c & b2.child.childLanes)) return oj(a, b2, c);
              G3(L2, L2.current & 1);
              a = Zi(a, b2, c);
              return null !== a ? a.sibling : null;
            }
            G3(L2, L2.current & 1);
            break;
          case 19:
            d = 0 !== (c & b2.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return xj(a, b2, c);
              b2.flags |= 128;
            }
            e2 = b2.memoizedState;
            null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
            G3(L2, L2.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b2.lanes = 0, dj(a, b2, c);
        }
        return Zi(a, b2, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b2) {
        for (var c = b2.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b2) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b2) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b2, c, d) {
        var e2 = a.memoizedProps;
        if (e2 !== d) {
          a = b2.stateNode;
          xh(uh.current);
          var f2 = null;
          switch (c) {
            case "input":
              e2 = Ya2(a, e2);
              d = Ya2(a, d);
              f2 = [];
              break;
            case "select":
              e2 = A3({}, e2, { value: void 0 });
              d = A3({}, d, { value: void 0 });
              f2 = [];
              break;
            case "textarea":
              e2 = gb(a, e2);
              d = gb(a, d);
              f2 = [];
              break;
            default:
              "function" !== typeof e2.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l2 in e2) if (!d.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
            var h = e2[l2];
            for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea2.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
          for (l2 in d) {
            var k2 = d[l2];
            h = null != e2 ? e2[l2] : void 0;
            if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
              for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
            } else c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k2;
            else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea2.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D2("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
          }
          c && (f2 = f2 || []).push("style", c);
          var l2 = f2;
          if (b2.updateQueue = l2) b2.flags |= 4;
        }
      };
      Cj = function(a, b2, c, d) {
        c !== d && (b2.flags |= 4);
      };
      function Dj(a, b2) {
        if (!I2) switch (a.tailMode) {
          case "hidden":
            b2 = a.tail;
            for (var c = null; null !== b2; ) null !== b2.alternate && (c = b2), b2 = b2.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S2(a) {
        var b2 = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b2) for (var e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags & 14680064, d |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
        else for (e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags, d |= e2.flags, e2.return = a, e2 = e2.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b2;
      }
      function Ej(a, b2, c) {
        var d = b2.pendingProps;
        wg(b2);
        switch (b2.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S2(b2), null;
          case 1:
            return Zf(b2.type) && $f(), S2(b2), null;
          case 3:
            d = b2.stateNode;
            zh();
            E3(Wf);
            E3(H);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b2);
            S2(b2);
            return null;
          case 5:
            Bh(b2);
            var e2 = xh(wh.current);
            c = b2.type;
            if (null !== a && null != b2.stateNode) Bj(a, b2, c, d, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
            else {
              if (!d) {
                if (null === b2.stateNode) throw Error(p(166));
                S2(b2);
                return null;
              }
              a = xh(uh.current);
              if (Gg(b2)) {
                d = b2.stateNode;
                c = b2.type;
                var f2 = b2.memoizedProps;
                d[Of] = b2;
                d[Pf] = f2;
                a = 0 !== (b2.mode & 1);
                switch (c) {
                  case "dialog":
                    D2("cancel", d);
                    D2("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D2("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], d);
                    break;
                  case "source":
                    D2("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D2(
                      "error",
                      d
                    );
                    D2("load", d);
                    break;
                  case "details":
                    D2("toggle", d);
                    break;
                  case "input":
                    Za2(d, f2);
                    D2("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f2.multiple };
                    D2("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f2), D2("invalid", d);
                }
                ub(c, f2);
                e2 = null;
                for (var g in f2) if (f2.hasOwnProperty(g)) {
                  var h = f2[g];
                  "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e2 = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                    d.textContent,
                    h,
                    a
                  ), e2 = ["children", "" + h]) : ea2.hasOwnProperty(g) && null != h && "onScroll" === g && D2("scroll", d);
                }
                switch (c) {
                  case "input":
                    Va2(d);
                    db(d, f2, true);
                    break;
                  case "textarea":
                    Va2(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f2.onClick && (d.onclick = Bf);
                }
                d = e2;
                b2.updateQueue = d;
                null !== d && (b2.flags |= 4);
              } else {
                g = 9 === e2.nodeType ? e2 : e2.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b2;
                a[Pf] = d;
                zj(a, b2, false, false);
                b2.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D2("cancel", a);
                      D2("close", a);
                      e2 = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D2("load", a);
                      e2 = d;
                      break;
                    case "video":
                    case "audio":
                      for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], a);
                      e2 = d;
                      break;
                    case "source":
                      D2("error", a);
                      e2 = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D2(
                        "error",
                        a
                      );
                      D2("load", a);
                      e2 = d;
                      break;
                    case "details":
                      D2("toggle", a);
                      e2 = d;
                      break;
                    case "input":
                      Za2(a, d);
                      e2 = Ya2(a, d);
                      D2("invalid", a);
                      break;
                    case "option":
                      e2 = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e2 = A3({}, d, { value: void 0 });
                      D2("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e2 = gb(a, d);
                      D2("invalid", a);
                      break;
                    default:
                      e2 = d;
                  }
                  ub(c, e2);
                  h = e2;
                  for (f2 in h) if (h.hasOwnProperty(f2)) {
                    var k2 = h[f2];
                    "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea2.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D2("scroll", a) : null != k2 && ta2(a, f2, k2, g));
                  }
                  switch (c) {
                    case "input":
                      Va2(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va2(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa2(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f2 = d.value;
                      null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e2.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b2.flags |= 4);
              }
              null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
            }
            S2(b2);
            return null;
          case 6:
            if (a && null != b2.stateNode) Cj(a, b2, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b2.stateNode) throw Error(p(166));
              c = xh(wh.current);
              xh(uh.current);
              if (Gg(b2)) {
                d = b2.stateNode;
                c = b2.memoizedProps;
                d[Of] = b2;
                if (f2 = d.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f2 && (b2.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b2, b2.stateNode = d;
            }
            S2(b2);
            return null;
          case 13:
            E3(L2);
            d = b2.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I2 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
              else if (f2 = Gg(b2), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f2) throw Error(p(318));
                  f2 = b2.memoizedState;
                  f2 = null !== f2 ? f2.dehydrated : null;
                  if (!f2) throw Error(p(317));
                  f2[Of] = b2;
                } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
                S2(b2);
                f2 = false;
              } else null !== zg && (Fj(zg), zg = null), f2 = true;
              if (!f2) return b2.flags & 65536 ? b2 : null;
            }
            if (0 !== (b2.flags & 128)) return b2.lanes = c, b2;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (L2.current & 1) ? 0 === T3 && (T3 = 3) : tj()));
            null !== b2.updateQueue && (b2.flags |= 4);
            S2(b2);
            return null;
          case 4:
            return zh(), Aj(a, b2), null === a && sf(b2.stateNode.containerInfo), S2(b2), null;
          case 10:
            return ah(b2.type._context), S2(b2), null;
          case 17:
            return Zf(b2.type) && $f(), S2(b2), null;
          case 19:
            E3(L2);
            f2 = b2.memoizedState;
            if (null === f2) return S2(b2), null;
            d = 0 !== (b2.flags & 128);
            g = f2.rendering;
            if (null === g) if (d) Dj(f2, false);
            else {
              if (0 !== T3 || null !== a && 0 !== (a.flags & 128)) for (a = b2.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b2.flags |= 128;
                  Dj(f2, false);
                  d = g.updateQueue;
                  null !== d && (b2.updateQueue = d, b2.flags |= 4);
                  b2.subtreeFlags = 0;
                  d = c;
                  for (c = b2.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G3(L2, L2.current & 1 | 2);
                  return b2.child;
                }
                a = a.sibling;
              }
              null !== f2.tail && B3() > Gj && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
            }
            else {
              if (!d) if (a = Ch(g), null !== a) {
                if (b2.flags |= 128, d = true, c = a.updateQueue, null !== c && (b2.updateQueue = c, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I2) return S2(b2), null;
              } else 2 * B3() - f2.renderingStartTime > Gj && 1073741824 !== c && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
              f2.isBackwards ? (g.sibling = b2.child, b2.child = g) : (c = f2.last, null !== c ? c.sibling = g : b2.child = g, f2.last = g);
            }
            if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B3(), b2.sibling = null, c = L2.current, G3(L2, d ? c & 1 | 2 : c & 1), b2;
            S2(b2);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d && (b2.flags |= 8192), d && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S2(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S2(b2), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b2.tag));
      }
      function Ij(a, b2) {
        wg(b2);
        switch (b2.tag) {
          case 1:
            return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
          case 3:
            return zh(), E3(Wf), E3(H), Eh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
          case 5:
            return Bh(b2), null;
          case 13:
            E3(L2);
            a = b2.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b2.alternate) throw Error(p(340));
              Ig();
            }
            a = b2.flags;
            return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
          case 19:
            return E3(L2), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b2.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U3 = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Lj(a, b2) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          W2(a, b2, d);
        }
        else c.current = null;
      }
      function Mj(a, b2, c) {
        try {
          c();
        } catch (d) {
          W2(a, b2, d);
        }
      }
      var Nj = false;
      function Oj(a, b2) {
        Cf = dd;
        a = Me2();
        if (Ne3(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e2 = d.anchorOffset, f2 = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f2.nodeType;
              } catch (F3) {
                c = null;
                break a;
              }
              var g = 0, h = -1, k2 = -1, l2 = 0, m = 0, q = a, r = null;
              b: for (; ; ) {
                for (var y2; ; ) {
                  q !== c || 0 !== e2 && 3 !== q.nodeType || (h = g + e2);
                  q !== f2 || 0 !== d && 3 !== q.nodeType || (k2 = g + d);
                  3 === q.nodeType && (g += q.nodeValue.length);
                  if (null === (y2 = q.firstChild)) break;
                  r = q;
                  q = y2;
                }
                for (; ; ) {
                  if (q === a) break b;
                  r === c && ++l2 === e2 && (h = g);
                  r === f2 && ++m === d && (k2 = g);
                  if (null !== (y2 = q.nextSibling)) break;
                  q = r;
                  r = q.parentNode;
                }
                q = y2;
              }
              c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V = b2; null !== V; ) if (b2 = V, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a) a.return = b2, V = a;
        else for (; null !== V; ) {
          b2 = V;
          try {
            var n2 = b2.alternate;
            if (0 !== (b2.flags & 1024)) switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t = n2.memoizedProps, J2 = n2.memoizedState, x = b2.stateNode, w2 = x.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t : Ci(b2.type, t), J2);
                  x.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u = b2.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F3) {
            W2(b2, b2.return, F3);
          }
          a = b2.sibling;
          if (null !== a) {
            a.return = b2.return;
            V = a;
            break;
          }
          V = b2.return;
        }
        n2 = Nj;
        Nj = false;
        return n2;
      }
      function Pj(a, b2, c) {
        var d = b2.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e2 = d = d.next;
          do {
            if ((e2.tag & a) === a) {
              var f2 = e2.destroy;
              e2.destroy = void 0;
              void 0 !== f2 && Mj(b2, c, f2);
            }
            e2 = e2.next;
          } while (e2 !== d);
        }
      }
      function Qj(a, b2) {
        b2 = b2.updateQueue;
        b2 = null !== b2 ? b2.lastEffect : null;
        if (null !== b2) {
          var c = b2 = b2.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b2);
        }
      }
      function Rj(a) {
        var b2 = a.ref;
        if (null !== b2) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b2 ? b2(a) : b2.current = a;
        }
      }
      function Sj(a) {
        var b2 = a.alternate;
        null !== b2 && (a.alternate = null, Sj(b2));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b2, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b2 ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b2) : c.insertBefore(a, b2) : (8 === c.nodeType ? (b2 = c.parentNode, b2.insertBefore(a, c)) : (b2 = c, b2.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b2.onclick || (b2.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b2, c), a = a.sibling; null !== a; ) Vj(a, b2, c), a = a.sibling;
      }
      function Wj(a, b2, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b2 ? c.insertBefore(a, b2) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b2, c), a = a.sibling; null !== a; ) Wj(a, b2, c), a = a.sibling;
      }
      var X2 = null;
      var Xj = false;
      function Yj(a, b2, c) {
        for (c = c.child; null !== c; ) Zj(a, b2, c), c = c.sibling;
      }
      function Zj(a, b2, c) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c);
        } catch (h) {
        }
        switch (c.tag) {
          case 5:
            U3 || Lj(c, b2);
          case 6:
            var d = X2, e2 = Xj;
            X2 = null;
            Yj(a, b2, c);
            X2 = d;
            Xj = e2;
            null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X2.removeChild(c.stateNode));
            break;
          case 18:
            null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X2, c.stateNode));
            break;
          case 4:
            d = X2;
            e2 = Xj;
            X2 = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b2, c);
            X2 = d;
            Xj = e2;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U3 && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e2 = d = d.next;
              do {
                var f2 = e2, g = f2.destroy;
                f2 = f2.tag;
                void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b2, g) : 0 !== (f2 & 4) && Mj(c, b2, g));
                e2 = e2.next;
              } while (e2 !== d);
            }
            Yj(a, b2, c);
            break;
          case 1:
            if (!U3 && (Lj(c, b2), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
              W2(c, b2, h);
            }
            Yj(a, b2, c);
            break;
          case 21:
            Yj(a, b2, c);
            break;
          case 22:
            c.mode & 1 ? (U3 = (d = U3) || null !== c.memoizedState, Yj(a, b2, c), U3 = d) : Yj(a, b2, c);
            break;
          default:
            Yj(a, b2, c);
        }
      }
      function ak(a) {
        var b2 = a.updateQueue;
        if (null !== b2) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b2.forEach(function(b3) {
            var d = bk.bind(null, a, b3);
            c.has(b3) || (c.add(b3), b3.then(d, d));
          });
        }
      }
      function ck(a, b2) {
        var c = b2.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e2 = c[d];
          try {
            var f2 = a, g = b2, h = g;
            a: for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X2 = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X2 = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X2 = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
            if (null === X2) throw Error(p(160));
            Zj(f2, g, e2);
            X2 = null;
            Xj = false;
            var k2 = e2.alternate;
            null !== k2 && (k2.return = null);
            e2.return = null;
          } catch (l2) {
            W2(e2, b2, l2);
          }
        }
        if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a), b2 = b2.sibling;
      }
      function dk(a, b2) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b2, a);
            ek(a);
            if (d & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t) {
                W2(a, a.return, t);
              }
              try {
                Pj(5, a, a.return);
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 1:
            ck(b2, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b2, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e2 = a.stateNode;
              try {
                ob(e2, "");
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            if (d & 4 && (e2 = a.stateNode, null != e2)) {
              var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
              a.updateQueue = null;
              if (null !== k2) try {
                "input" === h && "radio" === f2.type && null != f2.name && ab(e2, f2);
                vb(h, g);
                var l2 = vb(h, f2);
                for (g = 0; g < k2.length; g += 2) {
                  var m = k2[g], q = k2[g + 1];
                  "style" === m ? sb(e2, q) : "dangerouslySetInnerHTML" === m ? nb(e2, q) : "children" === m ? ob(e2, q) : ta2(e2, m, q, l2);
                }
                switch (h) {
                  case "input":
                    bb(e2, f2);
                    break;
                  case "textarea":
                    ib(e2, f2);
                    break;
                  case "select":
                    var r = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f2.multiple;
                    var y2 = f2.value;
                    null != y2 ? fb(e2, !!f2.multiple, y2, false) : r !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e2,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e2[Pf] = f2;
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 6:
            ck(b2, a);
            ek(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p(162));
              e2 = a.stateNode;
              f2 = a.memoizedProps;
              try {
                e2.nodeValue = f2;
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 3:
            ck(b2, a);
            ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd(b2.containerInfo);
            } catch (t) {
              W2(a, a.return, t);
            }
            break;
          case 4:
            ck(b2, a);
            ek(a);
            break;
          case 13:
            ck(b2, a);
            ek(a);
            e2 = a.child;
            e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B3()));
            d & 4 && ak(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U3 = (l2 = U3) || m, ck(b2, a), U3 = l2) : ck(b2, a);
            ek(a);
            if (d & 8192) {
              l2 = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l2) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
                for (q = V = m; null !== V; ) {
                  r = V;
                  y2 = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n2 = r.stateNode;
                      if ("function" === typeof n2.componentWillUnmount) {
                        d = r;
                        c = r.return;
                        try {
                          b2 = d, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                        } catch (t) {
                          W2(d, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q);
                        continue;
                      }
                  }
                  null !== y2 ? (y2.return = r, V = y2) : gk(q);
                }
                m = m.sibling;
              }
              a: for (m = null, q = a; ; ) {
                if (5 === q.tag) {
                  if (null === m) {
                    m = q;
                    try {
                      e2 = q.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q.stateNode, k2 = q.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                    } catch (t) {
                      W2(a, a.return, t);
                    }
                  }
                } else if (6 === q.tag) {
                  if (null === m) try {
                    q.stateNode.nodeValue = l2 ? "" : q.memoizedProps;
                  } catch (t) {
                    W2(a, a.return, t);
                  }
                } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a) break a;
                for (; null === q.sibling; ) {
                  if (null === q.return || q.return === a) break a;
                  m === q && (m = null);
                  q = q.return;
                }
                m === q && (m = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
            }
            break;
          case 19:
            ck(b2, a);
            ek(a);
            d & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b2,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b2 = a.flags;
        if (b2 & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e2 = d.stateNode;
                d.flags & 32 && (ob(e2, ""), d.flags &= -33);
                var f2 = Uj(a);
                Wj(a, f2, e2);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h = Uj(a);
                Vj(a, h, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k2) {
            W2(a, a.return, k2);
          }
          a.flags &= -3;
        }
        b2 & 4096 && (a.flags &= -4097);
      }
      function hk(a, b2, c) {
        V = a;
        ik(a, b2, c);
      }
      function ik(a, b2, c) {
        for (var d = 0 !== (a.mode & 1); null !== V; ) {
          var e2 = V, f2 = e2.child;
          if (22 === e2.tag && d) {
            var g = null !== e2.memoizedState || Jj;
            if (!g) {
              var h = e2.alternate, k2 = null !== h && null !== h.memoizedState || U3;
              h = Jj;
              var l2 = U3;
              Jj = g;
              if ((U3 = k2) && !l2) for (V = e2; null !== V; ) g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g, V = k2) : jk(e2);
              for (; null !== f2; ) V = f2, ik(f2, b2, c), f2 = f2.sibling;
              V = e2;
              Jj = h;
              U3 = l2;
            }
            kk(a, b2, c);
          } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : kk(a, b2, c);
        }
      }
      function kk(a) {
        for (; null !== V; ) {
          var b2 = V;
          if (0 !== (b2.flags & 8772)) {
            var c = b2.alternate;
            try {
              if (0 !== (b2.flags & 8772)) switch (b2.tag) {
                case 0:
                case 11:
                case 15:
                  U3 || Qj(5, b2);
                  break;
                case 1:
                  var d = b2.stateNode;
                  if (b2.flags & 4 && !U3) if (null === c) d.componentDidMount();
                  else {
                    var e2 = b2.elementType === b2.type ? c.memoizedProps : Ci(b2.type, c.memoizedProps);
                    d.componentDidUpdate(e2, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f2 = b2.updateQueue;
                  null !== f2 && sh(b2, f2, d);
                  break;
                case 3:
                  var g = b2.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b2.child) switch (b2.child.tag) {
                      case 5:
                        c = b2.child.stateNode;
                        break;
                      case 1:
                        c = b2.child.stateNode;
                    }
                    sh(b2, g, c);
                  }
                  break;
                case 5:
                  var h = b2.stateNode;
                  if (null === c && b2.flags & 4) {
                    c = h;
                    var k2 = b2.memoizedProps;
                    switch (b2.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k2.autoFocus && c.focus();
                        break;
                      case "img":
                        k2.src && (c.src = k2.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b2.memoizedState) {
                    var l2 = b2.alternate;
                    if (null !== l2) {
                      var m = l2.memoizedState;
                      if (null !== m) {
                        var q = m.dehydrated;
                        null !== q && bd(q);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p(163));
              }
              U3 || b2.flags & 512 && Rj(b2);
            } catch (r) {
              W2(b2, b2.return, r);
            }
          }
          if (b2 === a) {
            V = null;
            break;
          }
          c = b2.sibling;
          if (null !== c) {
            c.return = b2.return;
            V = c;
            break;
          }
          V = b2.return;
        }
      }
      function gk(a) {
        for (; null !== V; ) {
          var b2 = V;
          if (b2 === a) {
            V = null;
            break;
          }
          var c = b2.sibling;
          if (null !== c) {
            c.return = b2.return;
            V = c;
            break;
          }
          V = b2.return;
        }
      }
      function jk(a) {
        for (; null !== V; ) {
          var b2 = V;
          try {
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                var c = b2.return;
                try {
                  Qj(4, b2);
                } catch (k2) {
                  W2(b2, c, k2);
                }
                break;
              case 1:
                var d = b2.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e2 = b2.return;
                  try {
                    d.componentDidMount();
                  } catch (k2) {
                    W2(b2, e2, k2);
                  }
                }
                var f2 = b2.return;
                try {
                  Rj(b2);
                } catch (k2) {
                  W2(b2, f2, k2);
                }
                break;
              case 5:
                var g = b2.return;
                try {
                  Rj(b2);
                } catch (k2) {
                  W2(b2, g, k2);
                }
            }
          } catch (k2) {
            W2(b2, b2.return, k2);
          }
          if (b2 === a) {
            V = null;
            break;
          }
          var h = b2.sibling;
          if (null !== h) {
            h.return = b2.return;
            V = h;
            break;
          }
          V = b2.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua.ReactCurrentDispatcher;
      var nk = ua.ReactCurrentOwner;
      var ok = ua.ReactCurrentBatchConfig;
      var K2 = 0;
      var Q = null;
      var Y = null;
      var Z2 = 0;
      var fj = 0;
      var ej = Uf(0);
      var T3 = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi = false;
      var Pi = null;
      var Ri = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R3() {
        return 0 !== (K2 & 6) ? B3() : -1 !== Ak ? Ak : Ak = B3();
      }
      function yi(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K2 & 2) && 0 !== Z2) return Z2 & -Z2;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a = C2;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function gi(a, b2, c, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac(a, c, d);
        if (0 === (K2 & 2) || a !== Q) a === Q && (0 === (K2 & 2) && (qk |= c), 4 === T3 && Ck(a, Z2)), Dk(a, d), 1 === c && 0 === K2 && 0 === (b2.mode & 1) && (Gj = B3() + 500, fg && jg());
      }
      function Dk(a, b2) {
        var c = a.callbackNode;
        wc(a, b2);
        var d = uc(a, a === Q ? Z2 : 0);
        if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b2 = d & -d, a.callbackPriority !== b2) {
          null != c && bc(c);
          if (1 === b2) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K2 & 6) && jg();
          }), c = null;
          else {
            switch (Dc(d)) {
              case 1:
                c = fc;
                break;
              case 4:
                c = gc;
                break;
              case 16:
                c = hc;
                break;
              case 536870912:
                c = jc;
                break;
              default:
                c = hc;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b2;
          a.callbackNode = c;
        }
      }
      function Gk(a, b2) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K2 & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d = uc(a, a === Q ? Z2 : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b2) b2 = Ik(a, d);
        else {
          b2 = d;
          var e2 = K2;
          K2 |= 2;
          var f2 = Jk();
          if (Q !== a || Z2 !== b2) uk = null, Gj = B3() + 500, Kk(a, b2);
          do
            try {
              Lk();
              break;
            } catch (h) {
              Mk(a, h);
            }
          while (1);
          $g();
          mk.current = f2;
          K2 = e2;
          null !== Y ? b2 = 0 : (Q = null, Z2 = 0, b2 = T3);
        }
        if (0 !== b2) {
          2 === b2 && (e2 = xc(a), 0 !== e2 && (d = e2, b2 = Nk(a, e2)));
          if (1 === b2) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B3()), c;
          if (6 === b2) Ck(a, d);
          else {
            e2 = a.current.alternate;
            if (0 === (d & 30) && !Ok(e2) && (b2 = Ik(a, d), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d = f2, b2 = Nk(a, f2))), 1 === b2)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B3()), c;
            a.finishedWork = e2;
            a.finishedLanes = d;
            switch (b2) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d);
                if ((d & 130023424) === d && (b2 = fk + 500 - B3(), 10 < b2)) {
                  if (0 !== uc(a, 0)) break;
                  e2 = a.suspendedLanes;
                  if ((e2 & d) !== d) {
                    R3();
                    a.pingedLanes |= a.suspendedLanes & e2;
                    break;
                  }
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b2);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d);
                if ((d & 4194240) === d) break;
                b2 = a.eventTimes;
                for (e2 = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f2 = 1 << g;
                  g = b2[g];
                  g > e2 && (e2 = g);
                  d &= ~f2;
                }
                d = e2;
                d = B3() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a, B3());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b2) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b2).flags |= 256);
        a = Ik(a, b2);
        2 !== a && (b2 = tk, tk = c, null !== b2 && Fj(b2));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b2 = a; ; ) {
          if (b2.flags & 16384) {
            var c = b2.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e2 = c[d], f2 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He3(f2(), e2)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c = b2.child;
          if (b2.subtreeFlags & 16384 && null !== c) c.return = b2, b2 = c;
          else {
            if (b2 === a) break;
            for (; null === b2.sibling; ) {
              if (null === b2.return || b2.return === a) return true;
              b2 = b2.return;
            }
            b2.sibling.return = b2.return;
            b2 = b2.sibling;
          }
        }
        return true;
      }
      function Ck(a, b2) {
        b2 &= ~rk;
        b2 &= ~qk;
        a.suspendedLanes |= b2;
        a.pingedLanes &= ~b2;
        for (a = a.expirationTimes; 0 < b2; ) {
          var c = 31 - oc(b2), d = 1 << c;
          a[c] = -1;
          b2 &= ~d;
        }
      }
      function Ek(a) {
        if (0 !== (K2 & 6)) throw Error(p(327));
        Hk();
        var b2 = uc(a, 0);
        if (0 === (b2 & 1)) return Dk(a, B3()), null;
        var c = Ik(a, b2);
        if (0 !== a.tag && 2 === c) {
          var d = xc(a);
          0 !== d && (b2 = d, c = Nk(a, d));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b2), Dk(a, B3()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b2;
        Pk(a, tk, uk);
        Dk(a, B3());
        return null;
      }
      function Qk(a, b2) {
        var c = K2;
        K2 |= 1;
        try {
          return a(b2);
        } finally {
          K2 = c, 0 === K2 && (Gj = B3() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K2 & 6) && Hk();
        var b2 = K2;
        K2 |= 1;
        var c = ok.transition, d = C2;
        try {
          if (ok.transition = null, C2 = 1, a) return a();
        } finally {
          C2 = d, ok.transition = c, K2 = b2, 0 === (K2 & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E3(ej);
      }
      function Kk(a, b2) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y) for (c = Y.return; null !== c; ) {
          var d = c;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E3(Wf);
              E3(H);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E3(L2);
              break;
            case 19:
              E3(L2);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q = a;
        Y = a = Pg(a.current, null);
        Z2 = fj = b2;
        T3 = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b2 = 0; b2 < fh.length; b2++) if (c = fh[b2], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e2 = d.next, f2 = c.pending;
            if (null !== f2) {
              var g = f2.next;
              f2.next = e2;
              d.next = g;
            }
            c.pending = d;
          }
          fh = null;
        }
        return a;
      }
      function Mk(a, b2) {
        do {
          var c = Y;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M3.memoizedState; null !== d; ) {
                var e2 = d.queue;
                null !== e2 && (e2.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O3 = N2 = M3 = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T3 = 1;
              pk = b2;
              Y = null;
              break;
            }
            a: {
              var f2 = a, g = c.return, h = c, k2 = b2;
              b2 = Z2;
              h.flags |= 32768;
              if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
                var l2 = k2, m = h, q = m.tag;
                if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y2 = Ui(g);
                if (null !== y2) {
                  y2.flags &= -257;
                  Vi(y2, g, h, f2, b2);
                  y2.mode & 1 && Si(f2, l2, b2);
                  b2 = y2;
                  k2 = l2;
                  var n2 = b2.updateQueue;
                  if (null === n2) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k2);
                    b2.updateQueue = t;
                  } else n2.add(k2);
                  break a;
                } else {
                  if (0 === (b2 & 1)) {
                    Si(f2, l2, b2);
                    tj();
                    break a;
                  }
                  k2 = Error(p(426));
                }
              } else if (I2 && h.mode & 1) {
                var J2 = Ui(g);
                if (null !== J2) {
                  0 === (J2.flags & 65536) && (J2.flags |= 256);
                  Vi(J2, g, h, f2, b2);
                  Jg(Ji(k2, h));
                  break a;
                }
              }
              f2 = k2 = Ji(k2, h);
              4 !== T3 && (T3 = 2);
              null === sk ? sk = [f2] : sk.push(f2);
              f2 = g;
              do {
                switch (f2.tag) {
                  case 3:
                    f2.flags |= 65536;
                    b2 &= -b2;
                    f2.lanes |= b2;
                    var x = Ni(f2, k2, b2);
                    ph(f2, x);
                    break a;
                  case 1:
                    h = k2;
                    var w2 = f2.type, u = f2.stateNode;
                    if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                      f2.flags |= 65536;
                      b2 &= -b2;
                      f2.lanes |= b2;
                      var F3 = Qi(f2, h, b2);
                      ph(f2, F3);
                      break a;
                    }
                }
                f2 = f2.return;
              } while (null !== f2);
            }
            Sk(c);
          } catch (na2) {
            b2 = na2;
            Y === c && null !== c && (Y = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh;
        return null === a ? Rh : a;
      }
      function tj() {
        if (0 === T3 || 3 === T3 || 2 === T3) T3 = 4;
        null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z2);
      }
      function Ik(a, b2) {
        var c = K2;
        K2 |= 2;
        var d = Jk();
        if (Q !== a || Z2 !== b2) uk = null, Kk(a, b2);
        do
          try {
            Tk();
            break;
          } catch (e2) {
            Mk(a, e2);
          }
        while (1);
        $g();
        K2 = c;
        mk.current = d;
        if (null !== Y) throw Error(p(261));
        Q = null;
        Z2 = 0;
        return T3;
      }
      function Tk() {
        for (; null !== Y; ) Uk(Y);
      }
      function Lk() {
        for (; null !== Y && !cc(); ) Uk(Y);
      }
      function Uk(a) {
        var b2 = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b2 ? Sk(a) : Y = b2;
        nk.current = null;
      }
      function Sk(a) {
        var b2 = a;
        do {
          var c = b2.alternate;
          a = b2.return;
          if (0 === (b2.flags & 32768)) {
            if (c = Ej(c, b2, fj), null !== c) {
              Y = c;
              return;
            }
          } else {
            c = Ij(c, b2);
            if (null !== c) {
              c.flags &= 32767;
              Y = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T3 = 6;
              Y = null;
              return;
            }
          }
          b2 = b2.sibling;
          if (null !== b2) {
            Y = b2;
            return;
          }
          Y = b2 = a;
        } while (null !== b2);
        0 === T3 && (T3 = 5);
      }
      function Pk(a, b2, c) {
        var d = C2, e2 = ok.transition;
        try {
          ok.transition = null, C2 = 1, Wk(a, b2, c, d);
        } finally {
          ok.transition = e2, C2 = d;
        }
        return null;
      }
      function Wk(a, b2, c, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K2 & 6)) throw Error(p(327));
        c = a.finishedWork;
        var e2 = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f2 = c.lanes | c.childLanes;
        Bc(a, f2);
        a === Q && (Y = Q = null, Z2 = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f2 = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f2) {
          f2 = ok.transition;
          ok.transition = null;
          var g = C2;
          C2 = 1;
          var h = K2;
          K2 |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe3(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          hk(c, a, e2);
          dc();
          K2 = h;
          C2 = g;
          ok.transition = f2;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e2);
        f2 = a.pendingLanes;
        0 === f2 && (Ri = null);
        mc(c.stateNode, d);
        Dk(a, B3());
        if (null !== b2) for (d = a.onRecoverableError, c = 0; c < b2.length; c++) e2 = b2[c], d(e2.value, { componentStack: e2.stack, digest: e2.digest });
        if (Oi) throw Oi = false, a = Pi, Pi = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f2 = a.pendingLanes;
        0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc(xk), b2 = ok.transition, c = C2;
          try {
            ok.transition = null;
            C2 = 16 > a ? 16 : a;
            if (null === wk) var d = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K2 & 6)) throw Error(p(331));
              var e2 = K2;
              K2 |= 4;
              for (V = a.current; null !== V; ) {
                var f2 = V, g = f2.child;
                if (0 !== (V.flags & 16)) {
                  var h = f2.deletions;
                  if (null !== h) {
                    for (var k2 = 0; k2 < h.length; k2++) {
                      var l2 = h[k2];
                      for (V = l2; null !== V; ) {
                        var m = V;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f2);
                        }
                        var q = m.child;
                        if (null !== q) q.return = m, V = q;
                        else for (; null !== V; ) {
                          m = V;
                          var r = m.sibling, y2 = m.return;
                          Sj(m);
                          if (m === l2) {
                            V = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y2;
                            V = r;
                            break;
                          }
                          V = y2;
                        }
                      }
                    }
                    var n2 = f2.alternate;
                    if (null !== n2) {
                      var t = n2.child;
                      if (null !== t) {
                        n2.child = null;
                        do {
                          var J2 = t.sibling;
                          t.sibling = null;
                          t = J2;
                        } while (null !== t);
                      }
                    }
                    V = f2;
                  }
                }
                if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
                else b: for (; null !== V; ) {
                  f2 = V;
                  if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f2, f2.return);
                  }
                  var x = f2.sibling;
                  if (null !== x) {
                    x.return = f2.return;
                    V = x;
                    break b;
                  }
                  V = f2.return;
                }
              }
              var w2 = a.current;
              for (V = w2; null !== V; ) {
                g = V;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
                else b: for (g = w2; null !== V; ) {
                  h = V;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h);
                    }
                  } catch (na2) {
                    W2(h, h.return, na2);
                  }
                  if (h === g) {
                    V = null;
                    break b;
                  }
                  var F3 = h.sibling;
                  if (null !== F3) {
                    F3.return = h.return;
                    V = F3;
                    break b;
                  }
                  V = h.return;
                }
              }
              K2 = e2;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na2) {
              }
              d = true;
            }
            return d;
          } finally {
            C2 = c, ok.transition = b2;
          }
        }
        return false;
      }
      function Xk(a, b2, c) {
        b2 = Ji(c, b2);
        b2 = Ni(a, b2, 1);
        a = nh(a, b2, 1);
        b2 = R3();
        null !== a && (Ac(a, 1, b2), Dk(a, b2));
      }
      function W2(a, b2, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b2; ) {
          if (3 === b2.tag) {
            Xk(b2, a, c);
            break;
          } else if (1 === b2.tag) {
            var d = b2.stateNode;
            if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
              a = Ji(c, a);
              a = Qi(b2, a, 1);
              b2 = nh(b2, a, 1);
              a = R3();
              null !== b2 && (Ac(b2, 1, a), Dk(b2, a));
              break;
            }
          }
          b2 = b2.return;
        }
      }
      function Ti(a, b2, c) {
        var d = a.pingCache;
        null !== d && d.delete(b2);
        b2 = R3();
        a.pingedLanes |= a.suspendedLanes & c;
        Q === a && (Z2 & c) === c && (4 === T3 || 3 === T3 && (Z2 & 130023424) === Z2 && 500 > B3() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b2);
      }
      function Yk(a, b2) {
        0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c = R3();
        a = ih(a, b2);
        null !== a && (Ac(a, b2, c), Dk(a, c));
      }
      function uj(a) {
        var b2 = a.memoizedState, c = 0;
        null !== b2 && (c = b2.retryLane);
        Yk(a, c);
      }
      function bk(a, b2) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e2 = a.memoizedState;
            null !== e2 && (c = e2.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b2);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b2, c) {
        if (null !== a) if (a.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b2.flags & 128)) return dh = false, yj(a, b2, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh = false, I2 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
        b2.lanes = 0;
        switch (b2.tag) {
          case 2:
            var d = b2.type;
            ij(a, b2);
            a = b2.pendingProps;
            var e2 = Yf(b2, H.current);
            ch(b2, c);
            e2 = Nh(null, b2, d, a, e2, c);
            var f2 = Sh();
            b2.flags |= 1;
            "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei, b2.stateNode = e2, e2._reactInternals = b2, Ii(b2, d, a, c), b2 = jj(null, b2, d, true, f2, c)) : (b2.tag = 0, I2 && f2 && vg(b2), Xi(null, b2, e2, c), b2 = b2.child);
            return b2;
          case 16:
            d = b2.elementType;
            a: {
              ij(a, b2);
              a = b2.pendingProps;
              e2 = d._init;
              d = e2(d._payload);
              b2.type = d;
              e2 = b2.tag = Zk(d);
              a = Ci(d, a);
              switch (e2) {
                case 0:
                  b2 = cj(null, b2, d, a, c);
                  break a;
                case 1:
                  b2 = hj(null, b2, d, a, c);
                  break a;
                case 11:
                  b2 = Yi(null, b2, d, a, c);
                  break a;
                case 14:
                  b2 = $i(null, b2, d, Ci(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b2;
          case 0:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), cj(a, b2, d, e2, c);
          case 1:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), hj(a, b2, d, e2, c);
          case 3:
            a: {
              kj(b2);
              if (null === a) throw Error(p(387));
              d = b2.pendingProps;
              f2 = b2.memoizedState;
              e2 = f2.element;
              lh(a, b2);
              qh(b2, d, null, c);
              var g = b2.memoizedState;
              d = g.element;
              if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
                e2 = Ji(Error(p(423)), b2);
                b2 = lj(a, b2, d, c, e2);
                break a;
              } else if (d !== e2) {
                e2 = Ji(Error(p(424)), b2);
                b2 = lj(a, b2, d, c, e2);
                break a;
              } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I2 = true, zg = null, c = Vg(b2, null, d, c), b2.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e2) {
                  b2 = Zi(a, b2, c);
                  break a;
                }
                Xi(a, b2, d, c);
              }
              b2 = b2.child;
            }
            return b2;
          case 5:
            return Ah(b2), null === a && Eg(b2), d = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e2.children, Ef(d, e2) ? g = null : null !== f2 && Ef(d, f2) && (b2.flags |= 32), gj(a, b2), Xi(a, b2, g, c), b2.child;
          case 6:
            return null === a && Eg(b2), null;
          case 13:
            return oj(a, b2, c);
          case 4:
            return yh(b2, b2.stateNode.containerInfo), d = b2.pendingProps, null === a ? b2.child = Ug(b2, null, d, c) : Xi(a, b2, d, c), b2.child;
          case 11:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), Yi(a, b2, d, e2, c);
          case 7:
            return Xi(a, b2, b2.pendingProps, c), b2.child;
          case 8:
            return Xi(a, b2, b2.pendingProps.children, c), b2.child;
          case 12:
            return Xi(a, b2, b2.pendingProps.children, c), b2.child;
          case 10:
            a: {
              d = b2.type._context;
              e2 = b2.pendingProps;
              f2 = b2.memoizedProps;
              g = e2.value;
              G3(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f2) if (He3(f2.value, g)) {
                if (f2.children === e2.children && !Wf.current) {
                  b2 = Zi(a, b2, c);
                  break a;
                }
              } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
                var h = f2.dependencies;
                if (null !== h) {
                  g = f2.child;
                  for (var k2 = h.firstContext; null !== k2; ) {
                    if (k2.context === d) {
                      if (1 === f2.tag) {
                        k2 = mh(-1, c & -c);
                        k2.tag = 2;
                        var l2 = f2.updateQueue;
                        if (null !== l2) {
                          l2 = l2.shared;
                          var m = l2.pending;
                          null === m ? k2.next = k2 : (k2.next = m.next, m.next = k2);
                          l2.pending = k2;
                        }
                      }
                      f2.lanes |= c;
                      k2 = f2.alternate;
                      null !== k2 && (k2.lanes |= c);
                      bh(
                        f2.return,
                        c,
                        b2
                      );
                      h.lanes |= c;
                      break;
                    }
                    k2 = k2.next;
                  }
                } else if (10 === f2.tag) g = f2.type === b2.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g = f2.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c;
                  h = g.alternate;
                  null !== h && (h.lanes |= c);
                  bh(g, c, b2);
                  g = f2.sibling;
                } else g = f2.child;
                if (null !== g) g.return = f2;
                else for (g = f2; null !== g; ) {
                  if (g === b2) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
                f2 = g;
              }
              Xi(a, b2, e2.children, c);
              b2 = b2.child;
            }
            return b2;
          case 9:
            return e2 = b2.type, d = b2.pendingProps.children, ch(b2, c), e2 = eh(e2), d = d(e2), b2.flags |= 1, Xi(a, b2, d, c), b2.child;
          case 14:
            return d = b2.type, e2 = Ci(d, b2.pendingProps), e2 = Ci(d.type, e2), $i(a, b2, d, e2, c);
          case 15:
            return bj(a, b2, b2.type, b2.pendingProps, c);
          case 17:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), ij(a, b2), b2.tag = 1, Zf(d) ? (a = true, cg(b2)) : a = false, ch(b2, c), Gi(b2, d, e2), Ii(b2, d, e2, c), jj(null, b2, d, true, a, c);
          case 19:
            return xj(a, b2, c);
          case 22:
            return dj(a, b2, c);
        }
        throw Error(p(156, b2.tag));
      };
      function Fk(a, b2) {
        return ac(a, b2);
      }
      function $k(a, b2, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b2;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b2, c, d) {
        return new $k(a, b2, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da2) return 11;
          if (a === Ga2) return 14;
        }
        return 2;
      }
      function Pg(a, b2) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b2, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b2, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b2 = a.dependencies;
        c.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b2, c, d, e2, f2) {
        var g = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
          case ya:
            return Tg(c.children, e2, f2, b2);
          case za2:
            g = 8;
            e2 |= 8;
            break;
          case Aa2:
            return a = Bg(12, c, b2, e2 | 2), a.elementType = Aa2, a.lanes = f2, a;
          case Ea2:
            return a = Bg(13, c, b2, e2), a.elementType = Ea2, a.lanes = f2, a;
          case Fa2:
            return a = Bg(19, c, b2, e2), a.elementType = Fa2, a.lanes = f2, a;
          case Ia2:
            return pj(c, e2, f2, b2);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da2:
                g = 11;
                break a;
              case Ga2:
                g = 14;
                break a;
              case Ha2:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b2 = Bg(g, c, b2, e2);
        b2.elementType = a;
        b2.type = d;
        b2.lanes = f2;
        return b2;
      }
      function Tg(a, b2, c, d) {
        a = Bg(7, a, d, b2);
        a.lanes = c;
        return a;
      }
      function pj(a, b2, c, d) {
        a = Bg(22, a, d, b2);
        a.elementType = Ia2;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b2, c) {
        a = Bg(6, a, null, b2);
        a.lanes = c;
        return a;
      }
      function Sg(a, b2, c) {
        b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
        b2.lanes = c;
        b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b2;
      }
      function al2(a, b2, c, d, e2) {
        this.tag = b2;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e2;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl2(a, b2, c, d, e2, f2, g, h, k2) {
        a = new al2(a, b2, c, h, k2);
        1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
        f2 = Bg(3, null, null, b2);
        a.current = f2;
        f2.stateNode = a;
        f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f2);
        return a;
      }
      function cl2(a, b2, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa2, key: null == d ? null : "" + d, children: a, containerInfo: b2, implementation: c };
      }
      function dl2(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b2 = a;
          do {
            switch (b2.tag) {
              case 3:
                b2 = b2.stateNode.context;
                break a;
              case 1:
                if (Zf(b2.type)) {
                  b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b2 = b2.return;
          } while (null !== b2);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c)) return bg(a, c, b2);
        }
        return b2;
      }
      function el2(a, b2, c, d, e2, f2, g, h, k2) {
        a = bl2(c, d, true, a, e2, f2, g, h, k2);
        a.context = dl2(null);
        c = a.current;
        d = R3();
        e2 = yi(c);
        f2 = mh(d, e2);
        f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
        nh(c, f2, e2);
        a.current.lanes = e2;
        Ac(a, e2, d);
        Dk(a, d);
        return a;
      }
      function fl2(a, b2, c, d) {
        var e2 = b2.current, f2 = R3(), g = yi(e2);
        c = dl2(c);
        null === b2.context ? b2.context = c : b2.pendingContext = c;
        b2 = mh(f2, g);
        b2.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b2.callback = d);
        a = nh(e2, b2, g);
        null !== a && (gi(a, e2, g, f2), oh(a, e2, g));
        return g;
      }
      function gl(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl2(a, b2) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b2 ? c : b2;
        }
      }
      function il2(a, b2) {
        hl2(a, b2);
        (a = a.alternate) && hl2(a, b2);
      }
      function jl2() {
        return null;
      }
      var kl2 = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll2(a) {
        this._internalRoot = a;
      }
      ml2.prototype.render = ll2.prototype.render = function(a) {
        var b2 = this._internalRoot;
        if (null === b2) throw Error(p(409));
        fl2(a, b2, null, null);
      };
      ml2.prototype.unmount = ll2.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b2 = a.containerInfo;
          Rk(function() {
            fl2(null, a, null, null);
          });
          b2[uf] = null;
        }
      };
      function ml2(a) {
        this._internalRoot = a;
      }
      ml2.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b2 = Hc();
          a = { blockedOn: null, target: a, priority: b2 };
          for (var c = 0; c < Qc.length && 0 !== b2 && b2 < Qc[c].priority; c++) ;
          Qc.splice(c, 0, a);
          0 === c && Vc(a);
        }
      };
      function nl2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl2() {
      }
      function ql2(a, b2, c, d, e2) {
        if (e2) {
          if ("function" === typeof d) {
            var f2 = d;
            d = function() {
              var a2 = gl(g);
              f2.call(a2);
            };
          }
          var g = el2(b2, d, a, 0, null, false, false, "", pl2);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g;
        }
        for (; e2 = a.lastChild; ) a.removeChild(e2);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a2 = gl(k2);
            h.call(a2);
          };
        }
        var k2 = bl2(a, 0, false, null, null, false, false, "", pl2);
        a._reactRootContainer = k2;
        a[uf] = k2.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl2(b2, k2, c, d);
        });
        return k2;
      }
      function rl2(a, b2, c, d, e2) {
        var f2 = c._reactRootContainer;
        if (f2) {
          var g = f2;
          if ("function" === typeof e2) {
            var h = e2;
            e2 = function() {
              var a2 = gl(g);
              h.call(a2);
            };
          }
          fl2(b2, g, a, e2);
        } else g = ql2(c, b2, a, e2, d);
        return gl(g);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b2 = a.stateNode;
            if (b2.current.memoizedState.isDehydrated) {
              var c = tc(b2.pendingLanes);
              0 !== c && (Cc(b2, c | 1), Dk(b2, B3()), 0 === (K2 & 6) && (Gj = B3() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b3 = ih(a, 1);
              if (null !== b3) {
                var c2 = R3();
                gi(b3, a, 1, c2);
              }
            }), il2(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b2 = ih(a, 134217728);
          if (null !== b2) {
            var c = R3();
            gi(b2, a, 134217728, c);
          }
          il2(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b2 = yi(a), c = ih(a, b2);
          if (null !== c) {
            var d = R3();
            gi(c, a, b2, d);
          }
          il2(a, b2);
        }
      };
      Hc = function() {
        return C2;
      };
      Ic = function(a, b2) {
        var c = C2;
        try {
          return C2 = a, b2();
        } finally {
          C2 = c;
        }
      };
      yb = function(a, b2, c) {
        switch (b2) {
          case "input":
            bb(a, c);
            b2 = c.name;
            if ("radio" === c.type && null != b2) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
              for (b2 = 0; b2 < c.length; b2++) {
                var d = c[b2];
                if (d !== a && d.form === a.form) {
                  var e2 = Db(d);
                  if (!e2) throw Error(p(90));
                  Wa2(d);
                  bb(d, e2);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b2 = c.value, null != b2 && fb(a, !!c.multiple, b2, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl2 = { usingClientEntryPoint: false, Events: [Cb, ue2, Db, Eb, Fb, Qk] };
      var tl2 = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul2 = { bundleType: tl2.bundleType, version: tl2.version, rendererPackageName: tl2.rendererPackageName, rendererConfig: tl2.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl2.findFiberByHostInstance || jl2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl2 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl2.isDisabled && vl2.supportsFiber) try {
          kc = vl2.inject(ul2), lc = vl2;
        } catch (a) {
        }
      }
      var vl2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl2;
      exports.createPortal = function(a, b2) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl2(b2)) throw Error(p(200));
        return cl2(a, b2, null, c);
      };
      exports.createRoot = function(a, b2) {
        if (!nl2(a)) throw Error(p(299));
        var c = false, d = "", e2 = kl2;
        null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c = true), void 0 !== b2.identifierPrefix && (d = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
        b2 = bl2(a, 1, false, null, null, c, false, d, e2);
        a[uf] = b2.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ll2(b2);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b2 = a._reactInternals;
        if (void 0 === b2) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b2);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b2, c) {
        if (!ol2(b2)) throw Error(p(200));
        return rl2(null, a, b2, true, c);
      };
      exports.hydrateRoot = function(a, b2, c) {
        if (!nl2(a)) throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e2 = false, f2 = "", g = kl2;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e2 = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b2 = el2(b2, null, a, 1, null != c ? c : null, e2, false, f2, g);
        a[uf] = b2.current;
        sf(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e2 = c._getVersion, e2 = e2(c._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c, e2] : b2.mutableSourceEagerHydrationData.push(
          c,
          e2
        );
        return new ml2(b2);
      };
      exports.render = function(a, b2, c) {
        if (!ol2(b2)) throw Error(p(200));
        return rl2(null, a, b2, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol2(a)) throw Error(p(40));
        return a._reactRootContainer ? (Rk(function() {
          rl2(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b2, c, d) {
        if (!ol2(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return rl2(a, b2, c, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // ../../opt/files/node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "../../opt/files/node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/client.js
  var require_client = __commonJS({
    "../../opt/files/node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // ../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f2 = require_react();
      var k2 = /* @__PURE__ */ Symbol.for("react.element");
      var l2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var m = Object.prototype.hasOwnProperty;
      var n2 = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p = { key: true, ref: true, __self: true, __source: true };
      function q(c, a, g) {
        var b2, d = {}, e2 = null, h = null;
        void 0 !== g && (e2 = "" + g);
        void 0 !== a.key && (e2 = "" + a.key);
        void 0 !== a.ref && (h = a.ref);
        for (b2 in a) m.call(a, b2) && !p.hasOwnProperty(b2) && (d[b2] = a[b2]);
        if (c && c.defaultProps) for (b2 in a = c.defaultProps, a) void 0 === d[b2] && (d[b2] = a[b2]);
        return { $$typeof: k2, type: c, key: e2, ref: h, props: d, _owner: n2.current };
      }
      exports.Fragment = l2;
      exports.jsx = q;
      exports.jsxs = q;
    }
  });

  // ../../opt/files/node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "../../opt/files/node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // src/main.tsx
  var import_client = __toESM(require_client());

  // ../../opt/files/kit/index.tsx
  var import_react20 = __toESM(require_react());

  // ../../opt/files/kit/components.mjs
  var y = __toESM(require_react(), 1);
  var Je = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var import_react = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var import_react2 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function ee(e2) {
    var r, t, o = "";
    if (typeof e2 == "string" || typeof e2 == "number") o += e2;
    else if (typeof e2 == "object") if (Array.isArray(e2)) {
      var s = e2.length;
      for (r = 0; r < s; r++) e2[r] && (t = ee(e2[r])) && (o && (o += " "), o += t);
    } else for (t in e2) e2[t] && (o && (o += " "), o += t);
    return o;
  }
  function j() {
    for (var e2, r, t = 0, o = "", s = arguments.length; t < s; t++) (e2 = arguments[t]) && (r = ee(e2)) && (o && (o += " "), o += r);
    return o;
  }
  var ve = (e2) => {
    let r = Ce(e2), { conflictingClassGroups: t, conflictingClassGroupModifiers: o } = e2;
    return { getClassGroupId: (a) => {
      let i = a.split("-");
      return i[0] === "" && i.length !== 1 && i.shift(), oe(i, r) || we(a);
    }, getConflictingClassGroupIds: (a, i) => {
      let d = t[a] || [];
      return i && o[a] ? [...d, ...o[a]] : d;
    } };
  };
  var oe = (e2, r) => {
    if (e2.length === 0) return r.classGroupId;
    let t = e2[0], o = r.nextPart.get(t), s = o ? oe(e2.slice(1), o) : void 0;
    if (s) return s;
    if (r.validators.length === 0) return;
    let n2 = e2.join("-");
    return r.validators.find(({ validator: a }) => a(n2))?.classGroupId;
  };
  var te = /^\[(.+)\]$/;
  var we = (e2) => {
    if (te.test(e2)) {
      let r = te.exec(e2)[1], t = r?.substring(0, r.indexOf(":"));
      if (t) return "arbitrary.." + t;
    }
  };
  var Ce = (e2) => {
    let { theme: r, prefix: t } = e2, o = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
    return ke(Object.entries(e2.classGroups), t).forEach(([n2, a]) => {
      U(a, o, n2, r);
    }), o;
  };
  var U = (e2, r, t, o) => {
    e2.forEach((s) => {
      if (typeof s == "string") {
        let n2 = s === "" ? r : re(r, s);
        n2.classGroupId = t;
        return;
      }
      if (typeof s == "function") {
        if (Se(s)) {
          U(s(o), r, t, o);
          return;
        }
        r.validators.push({ validator: s, classGroupId: t });
        return;
      }
      Object.entries(s).forEach(([n2, a]) => {
        U(a, re(r, n2), t, o);
      });
    });
  };
  var re = (e2, r) => {
    let t = e2;
    return r.split("-").forEach((o) => {
      t.nextPart.has(o) || t.nextPart.set(o, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t = t.nextPart.get(o);
    }), t;
  };
  var Se = (e2) => e2.isThemeGetter;
  var ke = (e2, r) => r ? e2.map(([t, o]) => {
    let s = o.map((n2) => typeof n2 == "string" ? r + n2 : typeof n2 == "object" ? Object.fromEntries(Object.entries(n2).map(([a, i]) => [r + a, i])) : n2);
    return [t, s];
  }) : e2;
  var Re = (e2) => {
    if (e2 < 1) return { get: () => {
    }, set: () => {
    } };
    let r = 0, t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = (n2, a) => {
      t.set(n2, a), r++, r > e2 && (r = 0, o = t, t = /* @__PURE__ */ new Map());
    };
    return { get(n2) {
      let a = t.get(n2);
      if (a !== void 0) return a;
      if ((a = o.get(n2)) !== void 0) return s(n2, a), a;
    }, set(n2, a) {
      t.has(n2) ? t.set(n2, a) : s(n2, a);
    } };
  };
  var Ae = (e2) => {
    let { separator: r, experimentalParseClassName: t } = e2, o = r.length === 1, s = r[0], n2 = r.length, a = (i) => {
      let d = [], c = 0, u = 0, g;
      for (let p = 0; p < i.length; p++) {
        let x = i[p];
        if (c === 0) {
          if (x === s && (o || i.slice(p, p + n2) === r)) {
            d.push(i.slice(u, p)), u = p + n2;
            continue;
          }
          if (x === "/") {
            g = p;
            continue;
          }
        }
        x === "[" ? c++ : x === "]" && c--;
      }
      let m = d.length === 0 ? i : i.substring(u), v2 = m.startsWith("!"), w2 = v2 ? m.substring(1) : m, h = g && g > u ? g - u : void 0;
      return { modifiers: d, hasImportantModifier: v2, baseClassName: w2, maybePostfixModifierPosition: h };
    };
    return t ? (i) => t({ className: i, parseClassName: a }) : a;
  };
  var Pe = (e2) => {
    if (e2.length <= 1) return e2;
    let r = [], t = [];
    return e2.forEach((o) => {
      o[0] === "[" ? (r.push(...t.sort(), o), t = []) : t.push(o);
    }), r.push(...t.sort()), r;
  };
  var ze = (e2) => ({ cache: Re(e2.cacheSize), parseClassName: Ae(e2), ...ve(e2) });
  var Me = /\s+/;
  var Ne = (e2, r) => {
    let { parseClassName: t, getClassGroupId: o, getConflictingClassGroupIds: s } = r, n2 = [], a = e2.trim().split(Me), i = "";
    for (let d = a.length - 1; d >= 0; d -= 1) {
      let c = a[d], { modifiers: u, hasImportantModifier: g, baseClassName: m, maybePostfixModifierPosition: v2 } = t(c), w2 = !!v2, h = o(w2 ? m.substring(0, v2) : m);
      if (!h) {
        if (!w2) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (h = o(m), !h) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        w2 = false;
      }
      let p = Pe(u).join(":"), x = g ? p + "!" : p, C2 = x + h;
      if (n2.includes(C2)) continue;
      n2.push(C2);
      let N2 = s(h, w2);
      for (let P3 = 0; P3 < N2.length; ++P3) {
        let L2 = N2[P3];
        n2.push(x + L2);
      }
      i = c + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
  function Te() {
    let e2 = 0, r, t, o = "";
    for (; e2 < arguments.length; ) (r = arguments[e2++]) && (t = ne(r)) && (o && (o += " "), o += t);
    return o;
  }
  var ne = (e2) => {
    if (typeof e2 == "string") return e2;
    let r, t = "";
    for (let o = 0; o < e2.length; o++) e2[o] && (r = ne(e2[o])) && (t && (t += " "), t += r);
    return t;
  };
  function Be(e2, ...r) {
    let t, o, s, n2 = a;
    function a(d) {
      let c = r.reduce((u, g) => g(u), e2());
      return t = ze(c), o = t.cache.get, s = t.cache.set, n2 = i, i(d);
    }
    function i(d) {
      let c = o(d);
      if (c) return c;
      let u = Ne(d, t);
      return s(d, u), u;
    }
    return function() {
      return n2(Te.apply(null, arguments));
    };
  }
  var f = (e2) => {
    let r = (t) => t[e2] || [];
    return r.isThemeGetter = true, r;
  };
  var se = /^\[(?:([a-z-]+):)?(.+)\]$/i;
  var Ie = /^\d+\/\d+$/;
  var _e = /* @__PURE__ */ new Set(["px", "full", "screen"]);
  var Ee = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  var Le = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  var Ve = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
  var Ge = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  var je = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  var k = (e2) => z(e2) || _e.has(e2) || Ie.test(e2);
  var R = (e2) => M(e2, "length", Ke);
  var z = (e2) => !!e2 && !Number.isNaN(Number(e2));
  var F = (e2) => M(e2, "number", z);
  var B = (e2) => !!e2 && Number.isInteger(Number(e2));
  var Oe = (e2) => e2.endsWith("%") && z(e2.slice(0, -1));
  var l = (e2) => se.test(e2);
  var A = (e2) => Ee.test(e2);
  var We = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
  var $e = (e2) => M(e2, We, ie);
  var De = (e2) => M(e2, "position", ie);
  var He = /* @__PURE__ */ new Set(["image", "url"]);
  var Fe = (e2) => M(e2, He, qe);
  var Ue = (e2) => M(e2, "", Ze);
  var I = () => true;
  var M = (e2, r, t) => {
    let o = se.exec(e2);
    return o ? o[1] ? typeof r == "string" ? o[1] === r : r.has(o[1]) : t(o[2]) : false;
  };
  var Ke = (e2) => Le.test(e2) && !Ve.test(e2);
  var ie = () => false;
  var Ze = (e2) => Ge.test(e2);
  var qe = (e2) => je.test(e2);
  var Ye = () => {
    let e2 = f("colors"), r = f("spacing"), t = f("blur"), o = f("brightness"), s = f("borderColor"), n2 = f("borderRadius"), a = f("borderSpacing"), i = f("borderWidth"), d = f("contrast"), c = f("grayscale"), u = f("hueRotate"), g = f("invert"), m = f("gap"), v2 = f("gradientColorStops"), w2 = f("gradientColorStopPositions"), h = f("inset"), p = f("margin"), x = f("opacity"), C2 = f("padding"), N2 = f("saturate"), P3 = f("scale"), L2 = f("sepia"), K2 = f("skew"), Z2 = f("space"), q = f("translate"), W2 = () => ["auto", "contain", "none"], $2 = () => ["auto", "hidden", "clip", "visible", "scroll"], D2 = () => ["auto", l, r], b2 = () => [l, r], Y = () => ["", k, R], V = () => ["auto", z, l], J2 = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G3 = () => ["solid", "dashed", "dotted", "double", "none"], X2 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], T3 = () => ["", "0", l], Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S2 = () => [z, l];
    return { cacheSize: 500, separator: ":", theme: { colors: [I], spacing: [k, R], blur: ["none", "", A, l], brightness: S2(), borderColor: [e2], borderRadius: ["none", "", "full", A, l], borderSpacing: b2(), borderWidth: Y(), contrast: S2(), grayscale: T3(), hueRotate: S2(), invert: T3(), gap: b2(), gradientColorStops: [e2], gradientColorStopPositions: [Oe, R], inset: D2(), margin: D2(), opacity: S2(), padding: b2(), saturate: S2(), scale: S2(), sepia: T3(), skew: S2(), space: b2(), translate: b2() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l] }], container: ["container"], columns: [{ columns: [A] }], "break-after": [{ "break-after": Q() }], "break-before": [{ "break-before": Q() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...J2(), l] }], overflow: [{ overflow: $2() }], "overflow-x": [{ "overflow-x": $2() }], "overflow-y": [{ "overflow-y": $2() }], overscroll: [{ overscroll: W2() }], "overscroll-x": [{ "overscroll-x": W2() }], "overscroll-y": [{ "overscroll-y": W2() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [h] }], "inset-x": [{ "inset-x": [h] }], "inset-y": [{ "inset-y": [h] }], start: [{ start: [h] }], end: [{ end: [h] }], top: [{ top: [h] }], right: [{ right: [h] }], bottom: [{ bottom: [h] }], left: [{ left: [h] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", B, l] }], basis: [{ basis: D2() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l] }], grow: [{ grow: T3() }], shrink: [{ shrink: T3() }], order: [{ order: ["first", "last", "none", B, l] }], "grid-cols": [{ "grid-cols": [I] }], "col-start-end": [{ col: ["auto", { span: ["full", B, l] }, l] }], "col-start": [{ "col-start": V() }], "col-end": [{ "col-end": V() }], "grid-rows": [{ "grid-rows": [I] }], "row-start-end": [{ row: ["auto", { span: [B, l] }, l] }], "row-start": [{ "row-start": V() }], "row-end": [{ "row-end": V() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l] }], gap: [{ gap: [m] }], "gap-x": [{ "gap-x": [m] }], "gap-y": [{ "gap-y": [m] }], "justify-content": [{ justify: ["normal", ...H()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...H(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...H(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [C2] }], px: [{ px: [C2] }], py: [{ py: [C2] }], ps: [{ ps: [C2] }], pe: [{ pe: [C2] }], pt: [{ pt: [C2] }], pr: [{ pr: [C2] }], pb: [{ pb: [C2] }], pl: [{ pl: [C2] }], m: [{ m: [p] }], mx: [{ mx: [p] }], my: [{ my: [p] }], ms: [{ ms: [p] }], me: [{ me: [p] }], mt: [{ mt: [p] }], mr: [{ mr: [p] }], mb: [{ mb: [p] }], ml: [{ ml: [p] }], "space-x": [{ "space-x": [Z2] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [Z2] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", l, r] }], "min-w": [{ "min-w": [l, r, "min", "max", "fit"] }], "max-w": [{ "max-w": [l, r, "none", "full", "min", "max", "fit", "prose", { screen: [A] }, A] }], h: [{ h: [l, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [l, r, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", A, R] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", F] }], "font-family": [{ font: [I] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l] }], "line-clamp": [{ "line-clamp": ["none", z, F] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", k, l] }], "list-image": [{ "list-image": ["none", l] }], "list-style-type": [{ list: ["none", "disc", "decimal", l] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e2] }], "placeholder-opacity": [{ "placeholder-opacity": [x] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e2] }], "text-opacity": [{ "text-opacity": [x] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...G3(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", k, R] }], "underline-offset": [{ "underline-offset": ["auto", k, l] }], "text-decoration-color": [{ decoration: [e2] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: b2() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [x] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...J2(), De] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", $e] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Fe] }], "bg-color": [{ bg: [e2] }], "gradient-from-pos": [{ from: [w2] }], "gradient-via-pos": [{ via: [w2] }], "gradient-to-pos": [{ to: [w2] }], "gradient-from": [{ from: [v2] }], "gradient-via": [{ via: [v2] }], "gradient-to": [{ to: [v2] }], rounded: [{ rounded: [n2] }], "rounded-s": [{ "rounded-s": [n2] }], "rounded-e": [{ "rounded-e": [n2] }], "rounded-t": [{ "rounded-t": [n2] }], "rounded-r": [{ "rounded-r": [n2] }], "rounded-b": [{ "rounded-b": [n2] }], "rounded-l": [{ "rounded-l": [n2] }], "rounded-ss": [{ "rounded-ss": [n2] }], "rounded-se": [{ "rounded-se": [n2] }], "rounded-ee": [{ "rounded-ee": [n2] }], "rounded-es": [{ "rounded-es": [n2] }], "rounded-tl": [{ "rounded-tl": [n2] }], "rounded-tr": [{ "rounded-tr": [n2] }], "rounded-br": [{ "rounded-br": [n2] }], "rounded-bl": [{ "rounded-bl": [n2] }], "border-w": [{ border: [i] }], "border-w-x": [{ "border-x": [i] }], "border-w-y": [{ "border-y": [i] }], "border-w-s": [{ "border-s": [i] }], "border-w-e": [{ "border-e": [i] }], "border-w-t": [{ "border-t": [i] }], "border-w-r": [{ "border-r": [i] }], "border-w-b": [{ "border-b": [i] }], "border-w-l": [{ "border-l": [i] }], "border-opacity": [{ "border-opacity": [x] }], "border-style": [{ border: [...G3(), "hidden"] }], "divide-x": [{ "divide-x": [i] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [x] }], "divide-style": [{ divide: G3() }], "border-color": [{ border: [s] }], "border-color-x": [{ "border-x": [s] }], "border-color-y": [{ "border-y": [s] }], "border-color-s": [{ "border-s": [s] }], "border-color-e": [{ "border-e": [s] }], "border-color-t": [{ "border-t": [s] }], "border-color-r": [{ "border-r": [s] }], "border-color-b": [{ "border-b": [s] }], "border-color-l": [{ "border-l": [s] }], "divide-color": [{ divide: [s] }], "outline-style": [{ outline: ["", ...G3()] }], "outline-offset": [{ "outline-offset": [k, l] }], "outline-w": [{ outline: [k, R] }], "outline-color": [{ outline: [e2] }], "ring-w": [{ ring: Y() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e2] }], "ring-opacity": [{ "ring-opacity": [x] }], "ring-offset-w": [{ "ring-offset": [k, R] }], "ring-offset-color": [{ "ring-offset": [e2] }], shadow: [{ shadow: ["", "inner", "none", A, Ue] }], "shadow-color": [{ shadow: [I] }], opacity: [{ opacity: [x] }], "mix-blend": [{ "mix-blend": [...X2(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": X2() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t] }], brightness: [{ brightness: [o] }], contrast: [{ contrast: [d] }], "drop-shadow": [{ "drop-shadow": ["", "none", A, l] }], grayscale: [{ grayscale: [c] }], "hue-rotate": [{ "hue-rotate": [u] }], invert: [{ invert: [g] }], saturate: [{ saturate: [N2] }], sepia: [{ sepia: [L2] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t] }], "backdrop-brightness": [{ "backdrop-brightness": [o] }], "backdrop-contrast": [{ "backdrop-contrast": [d] }], "backdrop-grayscale": [{ "backdrop-grayscale": [c] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }], "backdrop-invert": [{ "backdrop-invert": [g] }], "backdrop-opacity": [{ "backdrop-opacity": [x] }], "backdrop-saturate": [{ "backdrop-saturate": [N2] }], "backdrop-sepia": [{ "backdrop-sepia": [L2] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [a] }], "border-spacing-x": [{ "border-spacing-x": [a] }], "border-spacing-y": [{ "border-spacing-y": [a] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l] }], duration: [{ duration: S2() }], ease: [{ ease: ["linear", "in", "out", "in-out", l] }], delay: [{ delay: S2() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [P3] }], "scale-x": [{ "scale-x": [P3] }], "scale-y": [{ "scale-y": [P3] }], rotate: [{ rotate: [B, l] }], "translate-x": [{ "translate-x": [q] }], "translate-y": [{ "translate-y": [q] }], "skew-x": [{ "skew-x": [K2] }], "skew-y": [{ "skew-y": [K2] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l] }], accent: [{ accent: ["auto", e2] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l] }], "caret-color": [{ caret: [e2] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": b2() }], "scroll-mx": [{ "scroll-mx": b2() }], "scroll-my": [{ "scroll-my": b2() }], "scroll-ms": [{ "scroll-ms": b2() }], "scroll-me": [{ "scroll-me": b2() }], "scroll-mt": [{ "scroll-mt": b2() }], "scroll-mr": [{ "scroll-mr": b2() }], "scroll-mb": [{ "scroll-mb": b2() }], "scroll-ml": [{ "scroll-ml": b2() }], "scroll-p": [{ "scroll-p": b2() }], "scroll-px": [{ "scroll-px": b2() }], "scroll-py": [{ "scroll-py": b2() }], "scroll-ps": [{ "scroll-ps": b2() }], "scroll-pe": [{ "scroll-pe": b2() }], "scroll-pt": [{ "scroll-pt": b2() }], "scroll-pr": [{ "scroll-pr": b2() }], "scroll-pb": [{ "scroll-pb": b2() }], "scroll-pl": [{ "scroll-pl": b2() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l] }], fill: [{ fill: [e2, "none"] }], "stroke-w": [{ stroke: [k, R, F] }], stroke: [{ stroke: [e2, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
  };
  var ae = Be(Ye);
  function _(...e2) {
    return ae(j(e2));
  }
  function le(e2, r) {
    if (typeof e2 == "function") return e2(r);
    e2 != null && (e2.current = r);
  }
  function ce(...e2) {
    return (r) => {
      let t = false, o = e2.map((s) => {
        let n2 = le(s, r);
        return !t && typeof n2 == "function" && (t = true), n2;
      });
      if (t) return () => {
        for (let s = 0; s < o.length; s++) {
          let n2 = o[s];
          typeof n2 == "function" ? n2() : le(e2[s], null);
        }
      };
    };
  }
  var Xe = /* @__PURE__ */ Symbol.for("react.lazy");
  var O = y[" use ".trim().toString()];
  function Qe(e2) {
    return typeof e2 == "object" && e2 !== null && "then" in e2;
  }
  function ue(e2) {
    return e2 != null && typeof e2 == "object" && "$$typeof" in e2 && e2.$$typeof === Xe && "_payload" in e2 && Qe(e2._payload);
  }
  function et(e2) {
    let r = tt(e2), t = y.forwardRef((o, s) => {
      let { children: n2, ...a } = o;
      ue(n2) && typeof O == "function" && (n2 = O(n2._payload));
      let i = y.Children.toArray(n2), d = i.find(ot);
      if (d) {
        let c = d.props.children, u = i.map((g) => g === d ? y.Children.count(c) > 1 ? y.Children.only(null) : y.isValidElement(c) ? c.props.children : null : g);
        return (0, import_jsx_runtime.jsx)(r, { ...a, ref: s, children: y.isValidElement(c) ? y.cloneElement(c, void 0, u) : null });
      }
      return (0, import_jsx_runtime.jsx)(r, { ...a, ref: s, children: n2 });
    });
    return t.displayName = `${e2}.Slot`, t;
  }
  var E = et("Slot");
  function tt(e2) {
    let r = y.forwardRef((t, o) => {
      let { children: s, ...n2 } = t;
      if (ue(s) && typeof O == "function" && (s = O(s._payload)), y.isValidElement(s)) {
        let a = st(s), i = nt(n2, s.props);
        return s.type !== y.Fragment && (i.ref = o ? ce(o, a) : a), y.cloneElement(s, i);
      }
      return y.Children.count(s) > 1 ? y.Children.only(null) : null;
    });
    return r.displayName = `${e2}.SlotClone`, r;
  }
  var rt = /* @__PURE__ */ Symbol("radix.slottable");
  function ot(e2) {
    return y.isValidElement(e2) && typeof e2.type == "function" && "__radixId" in e2.type && e2.type.__radixId === rt;
  }
  function nt(e2, r) {
    let t = { ...r };
    for (let o in r) {
      let s = e2[o], n2 = r[o];
      /^on[A-Z]/.test(o) ? s && n2 ? t[o] = (...i) => {
        let d = n2(...i);
        return s(...i), d;
      } : s && (t[o] = s) : o === "style" ? t[o] = { ...s, ...n2 } : o === "className" && (t[o] = [s, n2].filter(Boolean).join(" "));
    }
    return { ...e2, ...t };
  }
  function st(e2) {
    let r = Object.getOwnPropertyDescriptor(e2.props, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning;
    return t ? e2.ref : (r = Object.getOwnPropertyDescriptor(e2, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e2.props.ref : e2.props.ref || e2.ref);
  }
  var pe = (e2) => typeof e2 == "boolean" ? `${e2}` : e2 === 0 ? "0" : e2;
  var fe = j;
  var be = (e2, r) => (t) => {
    var o;
    if (r?.variants == null) return fe(e2, t?.class, t?.className);
    let { variants: s, defaultVariants: n2 } = r, a = Object.keys(s).map((c) => {
      let u = t?.[c], g = n2?.[c];
      if (u === null) return null;
      let m = pe(u) || pe(g);
      return s[c][m];
    }), i = t && Object.entries(t).reduce((c, u) => {
      let [g, m] = u;
      return m === void 0 || (c[g] = m), c;
    }, {}), d = r == null || (o = r.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, u) => {
      let { class: g, className: m, ...v2 } = u;
      return Object.entries(v2).every((w2) => {
        let [h, p] = w2;
        return Array.isArray(p) ? p.includes({ ...n2, ...i }[h]) : { ...n2, ...i }[h] === p;
      }) ? [...c, g, m] : c;
    }, []);
    return fe(e2, a, d, t?.class, t?.className);
  };
  var at = be("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "border border-border bg-card text-card-foreground shadow-sm hover:bg-muted", primary: "bg-foreground text-background hover:bg-foreground/90", destructive: "bg-red-600 text-white hover:bg-red-700", outline: "border border-border bg-transparent text-textSecondary hover:bg-muted hover:text-textPrimary", secondary: "bg-secondary text-textPrimary hover:bg-secondary/80", ghost: "text-textSecondary hover:bg-muted hover:text-textPrimary", link: "text-textSecondary underline-offset-4 hover:underline hover:text-textPrimary", danger: "bg-destructive/10 text-destructive hover:bg-destructive/20", destructiveOutline: "border border-destructive/40 bg-card text-destructive shadow-sm hover:bg-destructive/5" }, size: { default: "h-10 px-4 py-2 rounded-full", sm: "h-8 px-3 text-xs rounded-full", lg: "h-11 px-6 rounded-full", icon: "h-9 w-9 rounded-lg", control: "h-8 px-4 rounded font-normal", controlIcon: "h-8 w-8 rounded" } }, defaultVariants: { variant: "default", size: "default" } });
  var ge = (0, import_react.forwardRef)(({ className: e2, variant: r, size: t, asChild: o = false, ...s }, n2) => (0, import_jsx_runtime2.jsx)(o ? E : "button", { className: _(at({ variant: r, size: t, className: e2 })), ref: n2, ...s }));
  ge.displayName = "Button";
  var ct = { primary: "border-ds-ink bg-ds-ink text-ds-page shadow-ds-control", secondary: "border-ds-hairline bg-ds-white text-ds-ink shadow-ds-control", ghost: "border-transparent bg-transparent text-ds-ink", destructive: "border-ds-redBorder bg-ds-white text-ds-red shadow-ds-control", success: "border-ds-teal bg-ds-white text-ds-teal shadow-ds-control" };
  function dt({ variant: e2 = "primary", compact: r = false, fullWidth: t = false, large: o = false, mobileLarge: s = false, className: n2 }) {
    return _("box-border inline-flex h-8 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded border font-text text-[13px] font-normal leading-none tracking-[-0.01em] transition-[background-color,border-color,color,transform] [transition-duration:120ms]", "hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4", "disabled:cursor-default disabled:scale-100 disabled:border-ds-hairline disabled:bg-transparent disabled:text-ds-ink4 disabled:shadow-none", r ? "px-3" : "px-3 md:px-4", t && "flex w-full hover:scale-[1.02]", o && "h-[52px] rounded-lg text-[15px]", s && "max-md:flex max-md:h-[52px] max-md:w-full max-md:rounded-lg max-md:text-[15px] max-md:hover:scale-[1.02]", ct[e2], n2);
  }
  var he = (0, import_react2.forwardRef)(({ variant: e2, compact: r, fullWidth: t, large: o, mobileLarge: s, className: n2, asChild: a = false, iconBefore: i, iconAfter: d, type: c = "button", children: u, ...g }, m) => {
    let v2 = dt({ variant: e2, compact: r, fullWidth: t, large: o, mobileLarge: s, className: n2 });
    return a ? (0, import_jsx_runtime3.jsx)(E, { ref: m, className: v2, ...g, children: u }) : (0, import_jsx_runtime3.jsxs)("button", { ref: m, type: c, className: v2, ...g, children: [i, u, d] });
  });
  he.displayName = "DsButton";
  var ye = (0, import_react2.forwardRef)(({ label: e2, className: r, asChild: t = false, type: o = "button", ...s }, n2) => (0, import_jsx_runtime3.jsx)(t ? E : "button", { ref: n2, type: t ? void 0 : o, "aria-label": e2, title: e2, className: _("inline-flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded border-0 bg-transparent p-2 leading-none text-ds-ink transition-colors [transition-duration:120ms] hover:bg-ds-hover active:bg-ds-hoverStrong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4 disabled:cursor-default disabled:bg-transparent disabled:text-ds-ink4 [&_svg]:h-4 [&_svg]:w-4", r), ...s }));
  ye.displayName = "DsIconButton";

  // ../../opt/files/kit/library.mjs
  var import_react3 = __toESM(require_react(), 1);
  var import_react4 = __toESM(require_react(), 1);
  var import_react5 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var import_react6 = __toESM(require_react(), 1);
  var import_react7 = __toESM(require_react(), 1);
  var import_react8 = __toESM(require_react(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var import_react9 = __toESM(require_react(), 1);
  var import_react10 = __toESM(require_react(), 1);
  var import_react11 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var import_react12 = __toESM(require_react(), 1);
  var import_react13 = __toESM(require_react(), 1);
  var import_react14 = __toESM(require_react(), 1);
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var import_react15 = __toESM(require_react(), 1);
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var import_react16 = __toESM(require_react(), 1);
  var import_react17 = __toESM(require_react(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  var import_react18 = __toESM(require_react(), 1);
  var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
  var import_react19 = __toESM(require_react(), 1);
  var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
  var Zl = Object.create;
  var er = Object.defineProperty;
  var _l = Object.getOwnPropertyDescriptor;
  var Yl = Object.getOwnPropertyNames;
  var Ql = Object.getPrototypeOf;
  var jl = Object.prototype.hasOwnProperty;
  var Jl = (e2, a) => () => (a || e2((a = { exports: {} }).exports, a), a.exports);
  var eu = (e2, a, t, o) => {
    if (a && typeof a == "object" || typeof a == "function") for (let r of Yl(a)) !jl.call(e2, r) && r !== t && er(e2, r, { get: () => a[r], enumerable: !(o = _l(a, r)) || o.enumerable });
    return e2;
  };
  var ar = (e2, a, t) => (t = e2 != null ? Zl(Ql(e2)) : {}, eu(a || !e2 || !e2.__esModule ? er(t, "default", { value: e2, enumerable: true }) : t, e2));
  var ko = Jl((np, rt2) => {
    (function() {
      "use strict";
      var e2 = {}.hasOwnProperty;
      function a() {
        for (var r = "", l2 = 0; l2 < arguments.length; l2++) {
          var u = arguments[l2];
          u && (r = o(r, t(u)));
        }
        return r;
      }
      function t(r) {
        if (typeof r == "string" || typeof r == "number") return r;
        if (typeof r != "object") return "";
        if (Array.isArray(r)) return a.apply(null, r);
        if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) return r.toString();
        var l2 = "";
        for (var u in r) e2.call(r, u) && r[u] && (l2 = o(l2, u));
        return l2;
      }
      function o(r, l2) {
        return l2 ? r ? r + " " + l2 : r + l2 : r;
      }
      typeof rt2 < "u" && rt2.exports ? (a.default = a, rt2.exports = a) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
        return a;
      }) : window.classNames = a;
    })();
  });
  function ru({ children: e2, width: a = "fluid", className: t, ...o }) {
    return (0, import_jsx_runtime4.jsx)("main", { ...o, className: t ? `file-card ${t}` : "file-card", "data-width": a, children: e2 });
  }
  function ce2(e2, a) {
    return e2 == null || a == null ? NaN : e2 < a ? -1 : e2 > a ? 1 : e2 >= a ? 0 : NaN;
  }
  function St(e2, a) {
    return e2 == null || a == null ? NaN : a < e2 ? -1 : a > e2 ? 1 : a >= e2 ? 0 : NaN;
  }
  function Fa(e2) {
    let a, t, o;
    e2.length !== 2 ? (a = ce2, t = (s, d) => ce2(e2(s), d), o = (s, d) => e2(s) - d) : (a = e2 === ce2 || e2 === St ? e2 : yu, t = e2, o = e2);
    function r(s, d, f2 = 0, c = s.length) {
      if (f2 < c) {
        if (a(d, d) !== 0) return c;
        do {
          let i = f2 + c >>> 1;
          t(s[i], d) < 0 ? f2 = i + 1 : c = i;
        } while (f2 < c);
      }
      return f2;
    }
    function l2(s, d, f2 = 0, c = s.length) {
      if (f2 < c) {
        if (a(d, d) !== 0) return c;
        do {
          let i = f2 + c >>> 1;
          t(s[i], d) <= 0 ? f2 = i + 1 : c = i;
        } while (f2 < c);
      }
      return f2;
    }
    function u(s, d, f2 = 0, c = s.length) {
      let i = r(s, d, f2, c - 1);
      return i > f2 && o(s[i - 1], d) > -o(s[i], d) ? i - 1 : i;
    }
    return { left: r, center: u, right: l2 };
  }
  function yu() {
    return 0;
  }
  function yt(e2) {
    return e2 === null ? NaN : +e2;
  }
  var or = Fa(ce2);
  var rr = or.right;
  var bu = or.left;
  var wu = Fa(yt).center;
  var wt = Math.sqrt(50);
  var kt = Math.sqrt(10);
  var Pt = Math.sqrt(2);
  function j2(e2, a, t) {
    e2.prototype = a.prototype = t, t.constructor = e2;
  }
  function oe2(e2, a) {
    var t = Object.create(e2.prototype);
    for (var o in a) t[o] = a[o];
    return t;
  }
  function z2() {
  }
  var re2 = 0.7;
  var xe2 = 1 / re2;
  var Fe2 = "\\s*([+-]?\\d+)\\s*";
  var ea = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var G = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var Mu = /^#([0-9a-f]{3,8})$/;
  var Au = new RegExp(`^rgb\\(${Fe2},${Fe2},${Fe2}\\)$`);
  var Du = new RegExp(`^rgb\\(${G},${G},${G}\\)$`);
  var Ru = new RegExp(`^rgba\\(${Fe2},${Fe2},${Fe2},${ea}\\)$`);
  var Fu = new RegExp(`^rgba\\(${G},${G},${G},${ea}\\)$`);
  var Bu = new RegExp(`^hsl\\(${ea},${G},${G}\\)$`);
  var Tu = new RegExp(`^hsla\\(${ea},${G},${G},${ea}\\)$`);
  var sr = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  j2(z2, le2, { copy(e2) {
    return Object.assign(new this.constructor(), this, e2);
  }, displayable() {
    return this.rgb().displayable();
  }, hex: dr, formatHex: dr, formatHex8: qu, formatHsl: Ou, formatRgb: fr, toString: fr });
  function dr() {
    return this.rgb().formatHex();
  }
  function qu() {
    return this.rgb().formatHex8();
  }
  function Ou() {
    return xr(this).formatHsl();
  }
  function fr() {
    return this.rgb().formatRgb();
  }
  function le2(e2) {
    var a, t;
    return e2 = (e2 + "").trim().toLowerCase(), (a = Mu.exec(e2)) ? (t = a[1].length, a = parseInt(a[1], 16), t === 6 ? nr(a) : t === 3 ? new R2(a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, (a & 15) << 4 | a & 15, 1) : t === 8 ? Ha(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, (a & 255) / 255) : t === 4 ? Ha(a >> 12 & 15 | a >> 8 & 240, a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, ((a & 15) << 4 | a & 15) / 255) : null) : (a = Au.exec(e2)) ? new R2(a[1], a[2], a[3], 1) : (a = Du.exec(e2)) ? new R2(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, 1) : (a = Ru.exec(e2)) ? Ha(a[1], a[2], a[3], a[4]) : (a = Fu.exec(e2)) ? Ha(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, a[4]) : (a = Bu.exec(e2)) ? pr(a[1], a[2] / 100, a[3] / 100, 1) : (a = Tu.exec(e2)) ? pr(a[1], a[2] / 100, a[3] / 100, a[4]) : sr.hasOwnProperty(e2) ? nr(sr[e2]) : e2 === "transparent" ? new R2(NaN, NaN, NaN, 0) : null;
  }
  function nr(e2) {
    return new R2(e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255, 1);
  }
  function Ha(e2, a, t, o) {
    return o <= 0 && (e2 = a = t = NaN), new R2(e2, a, t, o);
  }
  function aa(e2) {
    return e2 instanceof z2 || (e2 = le2(e2)), e2 ? (e2 = e2.rgb(), new R2(e2.r, e2.g, e2.b, e2.opacity)) : new R2();
  }
  function Be2(e2, a, t, o) {
    return arguments.length === 1 ? aa(e2) : new R2(e2, a, t, o ?? 1);
  }
  function R2(e2, a, t, o) {
    this.r = +e2, this.g = +a, this.b = +t, this.opacity = +o;
  }
  j2(R2, Be2, oe2(z2, { brighter(e2) {
    return e2 = e2 == null ? xe2 : Math.pow(xe2, e2), new R2(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? re2 : Math.pow(re2, e2), new R2(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, rgb() {
    return this;
  }, clamp() {
    return new R2(me2(this.r), me2(this.g), me2(this.b), Na(this.opacity));
  }, displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  }, hex: ir, formatHex: ir, formatHex8: Hu, formatRgb: cr, toString: cr }));
  function ir() {
    return `#${pe2(this.r)}${pe2(this.g)}${pe2(this.b)}`;
  }
  function Hu() {
    return `#${pe2(this.r)}${pe2(this.g)}${pe2(this.b)}${pe2((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function cr() {
    let e2 = Na(this.opacity);
    return `${e2 === 1 ? "rgb(" : "rgba("}${me2(this.r)}, ${me2(this.g)}, ${me2(this.b)}${e2 === 1 ? ")" : `, ${e2})`}`;
  }
  function Na(e2) {
    return isNaN(e2) ? 1 : Math.max(0, Math.min(1, e2));
  }
  function me2(e2) {
    return Math.max(0, Math.min(255, Math.round(e2) || 0));
  }
  function pe2(e2) {
    return e2 = me2(e2), (e2 < 16 ? "0" : "") + e2.toString(16);
  }
  function pr(e2, a, t, o) {
    return o <= 0 ? e2 = a = t = NaN : t <= 0 || t >= 1 ? e2 = a = NaN : a <= 0 && (e2 = NaN), new E2(e2, a, t, o);
  }
  function xr(e2) {
    if (e2 instanceof E2) return new E2(e2.h, e2.s, e2.l, e2.opacity);
    if (e2 instanceof z2 || (e2 = le2(e2)), !e2) return new E2();
    if (e2 instanceof E2) return e2;
    e2 = e2.rgb();
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = Math.min(a, t, o), l2 = Math.max(a, t, o), u = NaN, s = l2 - r, d = (l2 + r) / 2;
    return s ? (a === l2 ? u = (t - o) / s + (t < o) * 6 : t === l2 ? u = (o - a) / s + 2 : u = (a - t) / s + 4, s /= d < 0.5 ? l2 + r : 2 - l2 - r, u *= 60) : s = d > 0 && d < 1 ? 0 : u, new E2(u, s, d, e2.opacity);
  }
  function ta(e2, a, t, o) {
    return arguments.length === 1 ? xr(e2) : new E2(e2, a, t, o ?? 1);
  }
  function E2(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  j2(E2, ta, oe2(z2, { brighter(e2) {
    return e2 = e2 == null ? xe2 : Math.pow(xe2, e2), new E2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? re2 : Math.pow(re2, e2), new E2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = this.h % 360 + (this.h < 0) * 360, a = isNaN(e2) || isNaN(this.s) ? 0 : this.s, t = this.l, o = t + (t < 0.5 ? t : 1 - t) * a, r = 2 * t - o;
    return new R2(Mt(e2 >= 240 ? e2 - 240 : e2 + 120, r, o), Mt(e2, r, o), Mt(e2 < 120 ? e2 + 240 : e2 - 120, r, o), this.opacity);
  }, clamp() {
    return new E2(mr(this.h), Ua(this.s), Ua(this.l), Na(this.opacity));
  }, displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }, formatHsl() {
    let e2 = Na(this.opacity);
    return `${e2 === 1 ? "hsl(" : "hsla("}${mr(this.h)}, ${Ua(this.s) * 100}%, ${Ua(this.l) * 100}%${e2 === 1 ? ")" : `, ${e2})`}`;
  } }));
  function mr(e2) {
    return e2 = (e2 || 0) % 360, e2 < 0 ? e2 + 360 : e2;
  }
  function Ua(e2) {
    return Math.max(0, Math.min(1, e2 || 0));
  }
  function Mt(e2, a, t) {
    return (e2 < 60 ? a + (t - a) * e2 / 60 : e2 < 180 ? t : e2 < 240 ? a + (t - a) * (240 - e2) / 60 : a) * 255;
  }
  var Va = Math.PI / 180;
  var Ea = 180 / Math.PI;
  var Wa = 18;
  var Lr = 0.96422;
  var hr = 1;
  var gr = 0.82521;
  var Ir = 4 / 29;
  var Te2 = 6 / 29;
  var Cr = 3 * Te2 * Te2;
  var Uu = Te2 * Te2 * Te2;
  function Sr(e2) {
    if (e2 instanceof X) return new X(e2.l, e2.a, e2.b, e2.opacity);
    if (e2 instanceof J) return yr(e2);
    e2 instanceof R2 || (e2 = aa(e2));
    var a = Ft(e2.r), t = Ft(e2.g), o = Ft(e2.b), r = At((0.2225045 * a + 0.7168786 * t + 0.0606169 * o) / hr), l2, u;
    return a === t && t === o ? l2 = u = r : (l2 = At((0.4360747 * a + 0.3850649 * t + 0.1430804 * o) / Lr), u = At((0.0139322 * a + 0.0971045 * t + 0.7141733 * o) / gr)), new X(116 * r - 16, 500 * (l2 - r), 200 * (r - u), e2.opacity);
  }
  function qe2(e2, a, t, o) {
    return arguments.length === 1 ? Sr(e2) : new X(e2, a, t, o ?? 1);
  }
  function X(e2, a, t, o) {
    this.l = +e2, this.a = +a, this.b = +t, this.opacity = +o;
  }
  j2(X, qe2, oe2(z2, { brighter(e2) {
    return new X(this.l + Wa * (e2 ?? 1), this.a, this.b, this.opacity);
  }, darker(e2) {
    return new X(this.l - Wa * (e2 ?? 1), this.a, this.b, this.opacity);
  }, rgb() {
    var e2 = (this.l + 16) / 116, a = isNaN(this.a) ? e2 : e2 + this.a / 500, t = isNaN(this.b) ? e2 : e2 - this.b / 200;
    return a = Lr * Dt(a), e2 = hr * Dt(e2), t = gr * Dt(t), new R2(Rt(3.1338561 * a - 1.6168667 * e2 - 0.4906146 * t), Rt(-0.9787684 * a + 1.9161415 * e2 + 0.033454 * t), Rt(0.0719453 * a - 0.2289914 * e2 + 1.4052427 * t), this.opacity);
  } }));
  function At(e2) {
    return e2 > Uu ? Math.pow(e2, 1 / 3) : e2 / Cr + Ir;
  }
  function Dt(e2) {
    return e2 > Te2 ? e2 * e2 * e2 : Cr * (e2 - Ir);
  }
  function Rt(e2) {
    return 255 * (e2 <= 31308e-7 ? 12.92 * e2 : 1.055 * Math.pow(e2, 1 / 2.4) - 0.055);
  }
  function Ft(e2) {
    return (e2 /= 255) <= 0.04045 ? e2 / 12.92 : Math.pow((e2 + 0.055) / 1.055, 2.4);
  }
  function Nu(e2) {
    if (e2 instanceof J) return new J(e2.h, e2.c, e2.l, e2.opacity);
    if (e2 instanceof X || (e2 = Sr(e2)), e2.a === 0 && e2.b === 0) return new J(NaN, 0 < e2.l && e2.l < 100 ? 0 : NaN, e2.l, e2.opacity);
    var a = Math.atan2(e2.b, e2.a) * Ea;
    return new J(a < 0 ? a + 360 : a, Math.sqrt(e2.a * e2.a + e2.b * e2.b), e2.l, e2.opacity);
  }
  function oa(e2, a, t, o) {
    return arguments.length === 1 ? Nu(e2) : new J(e2, a, t, o ?? 1);
  }
  function J(e2, a, t, o) {
    this.h = +e2, this.c = +a, this.l = +t, this.opacity = +o;
  }
  function yr(e2) {
    if (isNaN(e2.h)) return new X(e2.l, 0, 0, e2.opacity);
    var a = e2.h * Va;
    return new X(e2.l, Math.cos(a) * e2.c, Math.sin(a) * e2.c, e2.opacity);
  }
  j2(J, oa, oe2(z2, { brighter(e2) {
    return new J(this.h, this.c, this.l + Wa * (e2 ?? 1), this.opacity);
  }, darker(e2) {
    return new J(this.h, this.c, this.l - Wa * (e2 ?? 1), this.opacity);
  }, rgb() {
    return yr(this).rgb();
  } }));
  var Pr = -0.14861;
  var Bt = 1.78277;
  var Tt = -0.29227;
  var Ga = -0.90649;
  var ra = 1.97294;
  var br = ra * Ga;
  var wr = ra * Bt;
  var kr = Bt * Tt - Ga * Pr;
  function Vu(e2) {
    if (e2 instanceof Le2) return new Le2(e2.h, e2.s, e2.l, e2.opacity);
    e2 instanceof R2 || (e2 = aa(e2));
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = (kr * o + br * a - wr * t) / (kr + br - wr), l2 = o - r, u = (ra * (t - r) - Tt * l2) / Ga, s = Math.sqrt(u * u + l2 * l2) / (ra * r * (1 - r)), d = s ? Math.atan2(u, l2) * Ea - 120 : NaN;
    return new Le2(d < 0 ? d + 360 : d, s, r, e2.opacity);
  }
  function Oe2(e2, a, t, o) {
    return arguments.length === 1 ? Vu(e2) : new Le2(e2, a, t, o ?? 1);
  }
  function Le2(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  j2(Le2, Oe2, oe2(z2, { brighter(e2) {
    return e2 = e2 == null ? xe2 : Math.pow(xe2, e2), new Le2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? re2 : Math.pow(re2, e2), new Le2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = isNaN(this.h) ? 0 : (this.h + 120) * Va, a = +this.l, t = isNaN(this.s) ? 0 : this.s * a * (1 - a), o = Math.cos(e2), r = Math.sin(e2);
    return new R2(255 * (a + t * (Pr * o + Bt * r)), 255 * (a + t * (Tt * o + Ga * r)), 255 * (a + t * (ra * o)), this.opacity);
  } }));
  function qt(e2, a, t, o, r) {
    var l2 = e2 * e2, u = l2 * e2;
    return ((1 - 3 * e2 + 3 * l2 - u) * a + (4 - 6 * l2 + 3 * u) * t + (1 + 3 * e2 + 3 * l2 - 3 * u) * o + u * r) / 6;
  }
  function vr(e2) {
    var a = e2.length - 1;
    return function(t) {
      var o = t <= 0 ? t = 0 : t >= 1 ? (t = 1, a - 1) : Math.floor(t * a), r = e2[o], l2 = e2[o + 1], u = o > 0 ? e2[o - 1] : 2 * r - l2, s = o < a - 1 ? e2[o + 2] : 2 * l2 - r;
      return qt((t - o / a) * a, u, r, l2, s);
    };
  }
  function Mr(e2) {
    var a = e2.length;
    return function(t) {
      var o = Math.floor(((t %= 1) < 0 ? ++t : t) * a), r = e2[(o + a - 1) % a], l2 = e2[o % a], u = e2[(o + 1) % a], s = e2[(o + 2) % a];
      return qt((t - o / a) * a, r, l2, u, s);
    };
  }
  var He2 = (e2) => () => e2;
  function Ar(e2, a) {
    return function(t) {
      return e2 + t * a;
    };
  }
  function Eu(e2, a, t) {
    return e2 = Math.pow(e2, t), a = Math.pow(a, t) - e2, t = 1 / t, function(o) {
      return Math.pow(e2 + o * a, t);
    };
  }
  function Ue2(e2, a) {
    var t = a - e2;
    return t ? Ar(e2, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : He2(isNaN(e2) ? a : e2);
  }
  function Dr(e2) {
    return (e2 = +e2) == 1 ? M2 : function(a, t) {
      return t - a ? Eu(a, t, e2) : He2(isNaN(a) ? t : a);
    };
  }
  function M2(e2, a) {
    var t = a - e2;
    return t ? Ar(e2, t) : He2(isNaN(e2) ? a : e2);
  }
  var Ne2 = (function e(a) {
    var t = Dr(a);
    function o(r, l2) {
      var u = t((r = Be2(r)).r, (l2 = Be2(l2)).r), s = t(r.g, l2.g), d = t(r.b, l2.b), f2 = M2(r.opacity, l2.opacity);
      return function(c) {
        return r.r = u(c), r.g = s(c), r.b = d(c), r.opacity = f2(c), r + "";
      };
    }
    return o.gamma = e, o;
  })(1);
  function Rr(e2) {
    return function(a) {
      var t = a.length, o = new Array(t), r = new Array(t), l2 = new Array(t), u, s;
      for (u = 0; u < t; ++u) s = Be2(a[u]), o[u] = s.r || 0, r[u] = s.g || 0, l2[u] = s.b || 0;
      return o = e2(o), r = e2(r), l2 = e2(l2), s.opacity = 1, function(d) {
        return s.r = o(d), s.g = r(d), s.b = l2(d), s + "";
      };
    };
  }
  var Wu = Rr(vr);
  var Gu = Rr(Mr);
  var Ht = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var Ot = new RegExp(Ht.source, "g");
  function la(e2, a) {
    return e2 = +e2, a = +a, function(t) {
      return Math.round(e2 * (1 - t) + a * t);
    };
  }
  function Ur(e2) {
    return function(a, t) {
      var o = e2((a = ta(a)).h, (t = ta(t)).h), r = M2(a.s, t.s), l2 = M2(a.l, t.l), u = M2(a.opacity, t.opacity);
      return function(s) {
        return a.h = o(s), a.s = r(s), a.l = l2(s), a.opacity = u(s), a + "";
      };
    };
  }
  var Ut = Ur(Ue2);
  var Nt = Ur(M2);
  function za(e2, a) {
    var t = M2((e2 = qe2(e2)).l, (a = qe2(a)).l), o = M2(e2.a, a.a), r = M2(e2.b, a.b), l2 = M2(e2.opacity, a.opacity);
    return function(u) {
      return e2.l = t(u), e2.a = o(u), e2.b = r(u), e2.opacity = l2(u), e2 + "";
    };
  }
  function Nr(e2) {
    return function(a, t) {
      var o = e2((a = oa(a)).h, (t = oa(t)).h), r = M2(a.c, t.c), l2 = M2(a.l, t.l), u = M2(a.opacity, t.opacity);
      return function(s) {
        return a.h = o(s), a.c = r(s), a.l = l2(s), a.opacity = u(s), a + "";
      };
    };
  }
  var Vt = Nr(Ue2);
  var Et = Nr(M2);
  function Vr(e2) {
    return (function a(t) {
      t = +t;
      function o(r, l2) {
        var u = e2((r = Oe2(r)).h, (l2 = Oe2(l2)).h), s = M2(r.s, l2.s), d = M2(r.l, l2.l), f2 = M2(r.opacity, l2.opacity);
        return function(c) {
          return r.h = u(c), r.s = s(c), r.l = d(Math.pow(c, t)), r.opacity = f2(c), r + "";
        };
      }
      return o.gamma = a, o;
    })(1);
  }
  var Wt = Vr(Ue2);
  var Gt = Vr(M2);
  function Gr(e2) {
    return Math.abs(e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString("en").replace(/,/g, "") : e2.toString(10);
  }
  function ge2(e2, a) {
    if ((t = (e2 = a ? e2.toExponential(a - 1) : e2.toExponential()).indexOf("e")) < 0) return null;
    var t, o = e2.slice(0, t);
    return [o.length > 1 ? o[0] + o.slice(2) : o, +e2.slice(t + 1)];
  }
  function $(e2) {
    return e2 = ge2(Math.abs(e2)), e2 ? e2[1] : NaN;
  }
  function zr(e2, a) {
    return function(t, o) {
      for (var r = t.length, l2 = [], u = 0, s = e2[0], d = 0; r > 0 && s > 0 && (d + s + 1 > o && (s = Math.max(1, o - d)), l2.push(t.substring(r -= s, r + s)), !((d += s + 1) > o)); ) s = e2[u = (u + 1) % e2.length];
      return l2.reverse().join(a);
    };
  }
  function Xr(e2) {
    return function(a) {
      return a.replace(/[0-9]/g, function(t) {
        return e2[+t];
      });
    };
  }
  var Yu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function se2(e2) {
    if (!(a = Yu.exec(e2))) throw new Error("invalid format: " + e2);
    var a;
    return new Xa({ fill: a[1], align: a[2], sign: a[3], symbol: a[4], zero: a[5], width: a[6], comma: a[7], precision: a[8] && a[8].slice(1), trim: a[9], type: a[10] });
  }
  se2.prototype = Xa.prototype;
  function Xa(e2) {
    this.fill = e2.fill === void 0 ? " " : e2.fill + "", this.align = e2.align === void 0 ? ">" : e2.align + "", this.sign = e2.sign === void 0 ? "-" : e2.sign + "", this.symbol = e2.symbol === void 0 ? "" : e2.symbol + "", this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2.comma, this.precision = e2.precision === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? "" : e2.type + "";
  }
  Xa.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  function $r(e2) {
    e: for (var a = e2.length, t = 1, o = -1, r; t < a; ++t) switch (e2[t]) {
      case ".":
        o = r = t;
        break;
      case "0":
        o === 0 && (o = t), r = t;
        break;
      default:
        if (!+e2[t]) break e;
        o > 0 && (o = 0);
        break;
    }
    return o > 0 ? e2.slice(0, o) + e2.slice(r + 1) : e2;
  }
  var Zt;
  function Kr(e2, a) {
    var t = ge2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1], l2 = r - (Zt = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, u = o.length;
    return l2 === u ? o : l2 > u ? o + new Array(l2 - u + 1).join("0") : l2 > 0 ? o.slice(0, l2) + "." + o.slice(l2) : "0." + new Array(1 - l2).join("0") + ge2(e2, Math.max(0, a + l2 - 1))[0];
  }
  function _t(e2, a) {
    var t = ge2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1];
    return r < 0 ? "0." + new Array(-r).join("0") + o : o.length > r + 1 ? o.slice(0, r + 1) + "." + o.slice(r + 1) : o + new Array(r - o.length + 2).join("0");
  }
  var Yt = { "%": (e2, a) => (e2 * 100).toFixed(a), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + "", d: Gr, e: (e2, a) => e2.toExponential(a), f: (e2, a) => e2.toFixed(a), g: (e2, a) => e2.toPrecision(a), o: (e2) => Math.round(e2).toString(8), p: (e2, a) => _t(e2 * 100, a), r: _t, s: Kr, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
  function Qt(e2) {
    return e2;
  }
  var Zr = Array.prototype.map;
  var _r = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function Yr(e2) {
    var a = e2.grouping === void 0 || e2.thousands === void 0 ? Qt : zr(Zr.call(e2.grouping, Number), e2.thousands + ""), t = e2.currency === void 0 ? "" : e2.currency[0] + "", o = e2.currency === void 0 ? "" : e2.currency[1] + "", r = e2.decimal === void 0 ? "." : e2.decimal + "", l2 = e2.numerals === void 0 ? Qt : Xr(Zr.call(e2.numerals, String)), u = e2.percent === void 0 ? "%" : e2.percent + "", s = e2.minus === void 0 ? "\u2212" : e2.minus + "", d = e2.nan === void 0 ? "NaN" : e2.nan + "";
    function f2(i) {
      i = se2(i);
      var n2 = i.fill, m = i.align, x = i.sign, I2 = i.symbol, S2 = i.zero, k2 = i.width, D2 = i.comma, h = i.precision, P3 = i.trim, p = i.type;
      p === "n" ? (D2 = true, p = "g") : Yt[p] || (h === void 0 && (h = 12), P3 = true, p = "g"), (S2 || n2 === "0" && m === "=") && (S2 = true, n2 = "0", m = "=");
      var g = I2 === "$" ? t : I2 === "#" && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "", F3 = I2 === "$" ? o : /[%p]/.test(p) ? u : "", q = Yt[p], Y = /[defgprs%]/.test(p);
      h = h === void 0 ? 6 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, h)) : Math.max(0, Math.min(20, h));
      function ve2(y2) {
        var ie2 = g, H = F3, Me2, Jo, Pa;
        if (p === "c") H = q(y2) + H, y2 = "";
        else {
          y2 = +y2;
          var va = y2 < 0 || 1 / y2 < 0;
          if (y2 = isNaN(y2) ? d : q(Math.abs(y2), h), P3 && (y2 = $r(y2)), va && +y2 == 0 && x !== "+" && (va = false), ie2 = (va ? x === "(" ? x : s : x === "-" || x === "(" ? "" : x) + ie2, H = (p === "s" ? _r[8 + Zt / 3] : "") + H + (va && x === "(" ? ")" : ""), Y) {
            for (Me2 = -1, Jo = y2.length; ++Me2 < Jo; ) if (Pa = y2.charCodeAt(Me2), 48 > Pa || Pa > 57) {
              H = (Pa === 46 ? r + y2.slice(Me2 + 1) : y2.slice(Me2)) + H, y2 = y2.slice(0, Me2);
              break;
            }
          }
        }
        D2 && !S2 && (y2 = a(y2, 1 / 0));
        var Ma = ie2.length + y2.length + H.length, Q = Ma < k2 ? new Array(k2 - Ma + 1).join(n2) : "";
        switch (D2 && S2 && (y2 = a(Q + y2, Q.length ? k2 - H.length : 1 / 0), Q = ""), m) {
          case "<":
            y2 = ie2 + y2 + H + Q;
            break;
          case "=":
            y2 = ie2 + Q + y2 + H;
            break;
          case "^":
            y2 = Q.slice(0, Ma = Q.length >> 1) + ie2 + y2 + H + Q.slice(Ma);
            break;
          default:
            y2 = Q + ie2 + y2 + H;
            break;
        }
        return l2(y2);
      }
      return ve2.toString = function() {
        return i + "";
      }, ve2;
    }
    function c(i, n2) {
      var m = f2((i = se2(i), i.type = "f", i)), x = Math.max(-8, Math.min(8, Math.floor($(n2) / 3))) * 3, I2 = Math.pow(10, -x), S2 = _r[8 + x / 3];
      return function(k2) {
        return m(I2 * k2) + S2;
      };
    }
    return { format: f2, formatPrefix: c };
  }
  var $a;
  var Ka;
  var Za;
  jt({ thousands: ",", grouping: [3], currency: ["$", ""] });
  function jt(e2) {
    return $a = Yr(e2), Ka = $a.format, Za = $a.formatPrefix, $a;
  }
  var oo = /* @__PURE__ */ new Date();
  var ro = /* @__PURE__ */ new Date();
  function A2(e2, a, t, o) {
    function r(l2) {
      return e2(l2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l2)), l2;
    }
    return r.floor = (l2) => (e2(l2 = /* @__PURE__ */ new Date(+l2)), l2), r.ceil = (l2) => (e2(l2 = new Date(l2 - 1)), a(l2, 1), e2(l2), l2), r.round = (l2) => {
      let u = r(l2), s = r.ceil(l2);
      return l2 - u < s - l2 ? u : s;
    }, r.offset = (l2, u) => (a(l2 = /* @__PURE__ */ new Date(+l2), u == null ? 1 : Math.floor(u)), l2), r.range = (l2, u, s) => {
      let d = [];
      if (l2 = r.ceil(l2), s = s == null ? 1 : Math.floor(s), !(l2 < u) || !(s > 0)) return d;
      let f2;
      do
        d.push(f2 = /* @__PURE__ */ new Date(+l2)), a(l2, s), e2(l2);
      while (f2 < l2 && l2 < u);
      return d;
    }, r.filter = (l2) => A2((u) => {
      if (u >= u) for (; e2(u), !l2(u); ) u.setTime(u - 1);
    }, (u, s) => {
      if (u >= u) if (s < 0) for (; ++s <= 0; ) for (; a(u, -1), !l2(u); ) ;
      else for (; --s >= 0; ) for (; a(u, 1), !l2(u); ) ;
    }), t && (r.count = (l2, u) => (oo.setTime(+l2), ro.setTime(+u), e2(oo), e2(ro), Math.floor(t(oo, ro))), r.every = (l2) => (l2 = Math.floor(l2), !isFinite(l2) || !(l2 > 0) ? null : l2 > 1 ? r.filter(o ? (u) => o(u) % l2 === 0 : (u) => r.count(0, u) % l2 === 0) : r)), r;
  }
  var Ie2 = A2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds());
  }, (e2, a) => {
    e2.setTime(+e2 + a * 1e3);
  }, (e2, a) => (a - e2) / 1e3, (e2) => e2.getUTCSeconds());
  var Qr = Ie2.range;
  var _a = A2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getMinutes());
  var ju = _a.range;
  var Ya = A2((e2) => {
    e2.setUTCSeconds(0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getUTCMinutes());
  var Ju = Ya.range;
  var Qa = A2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3 - e2.getMinutes() * 6e4);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getHours());
  var es = Qa.range;
  var ja = A2((e2) => {
    e2.setUTCMinutes(0, 0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getUTCHours());
  var as = ja.range;
  var Ja = A2((e2) => e2.setHours(0, 0, 0, 0), (e2, a) => e2.setDate(e2.getDate() + a), (e2, a) => (a - e2 - (a.getTimezoneOffset() - e2.getTimezoneOffset()) * 6e4) / 864e5, (e2) => e2.getDate() - 1);
  var ts = Ja.range;
  var et2 = A2((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => e2.getUTCDate() - 1);
  var os = et2.range;
  var jr = A2((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => Math.floor(e2 / 864e5));
  var rs = jr.range;
  function Ce2(e2) {
    return A2((a) => {
      a.setDate(a.getDate() - (a.getDay() + 7 - e2) % 7), a.setHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setDate(a.getDate() + t * 7);
    }, (a, t) => (t - a - (t.getTimezoneOffset() - a.getTimezoneOffset()) * 6e4) / 6048e5);
  }
  var sa = Ce2(0);
  var Jr = Ce2(1);
  var el = Ce2(2);
  var al = Ce2(3);
  var tl = Ce2(4);
  var ol = Ce2(5);
  var rl = Ce2(6);
  var ll = sa.range;
  var us = Jr.range;
  var ss = el.range;
  var ds = al.range;
  var fs = tl.range;
  var ns = ol.range;
  var is = rl.range;
  function Se2(e2) {
    return A2((a) => {
      a.setUTCDate(a.getUTCDate() - (a.getUTCDay() + 7 - e2) % 7), a.setUTCHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setUTCDate(a.getUTCDate() + t * 7);
    }, (a, t) => (t - a) / 6048e5);
  }
  var da = Se2(0);
  var ul = Se2(1);
  var sl = Se2(2);
  var dl = Se2(3);
  var fl = Se2(4);
  var nl = Se2(5);
  var il = Se2(6);
  var cl = da.range;
  var cs = ul.range;
  var ps = sl.range;
  var ms = dl.range;
  var xs = fl.range;
  var Ls = nl.range;
  var hs = il.range;
  var at2 = A2((e2) => {
    e2.setDate(1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setMonth(e2.getMonth() + a);
  }, (e2, a) => a.getMonth() - e2.getMonth() + (a.getFullYear() - e2.getFullYear()) * 12, (e2) => e2.getMonth());
  var gs = at2.range;
  var tt2 = A2((e2) => {
    e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCMonth(e2.getUTCMonth() + a);
  }, (e2, a) => a.getUTCMonth() - e2.getUTCMonth() + (a.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
  var Is = tt2.range;
  var fa = A2((e2) => {
    e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setFullYear(e2.getFullYear() + a);
  }, (e2, a) => a.getFullYear() - e2.getFullYear(), (e2) => e2.getFullYear());
  fa.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : A2((a) => {
    a.setFullYear(Math.floor(a.getFullYear() / e2) * e2), a.setMonth(0, 1), a.setHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setFullYear(a.getFullYear() + t * e2);
  });
  var Cs = fa.range;
  var na = A2((e2) => {
    e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCFullYear(e2.getUTCFullYear() + a);
  }, (e2, a) => a.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
  na.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : A2((a) => {
    a.setUTCFullYear(Math.floor(a.getUTCFullYear() / e2) * e2), a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setUTCFullYear(a.getUTCFullYear() + t * e2);
  });
  var Ss = na.range;
  function fo(e2, a) {
    a.domain && ("nice" in e2 || "quantiles" in e2 || "padding" in e2, e2.domain(a.domain));
  }
  function no(e2, a) {
    a.range && ("padding" in e2, e2.range(a.range));
  }
  function io(e2, a) {
    "align" in e2 && "align" in a && typeof a.align < "u" && e2.align(a.align);
  }
  function co(e2, a) {
    "base" in e2 && "base" in a && typeof a.base < "u" && e2.base(a.base);
  }
  function po(e2, a) {
    "clamp" in e2 && "clamp" in a && typeof a.clamp < "u" && e2.clamp(a.clamp);
  }
  function mo(e2, a) {
    "constant" in e2 && "constant" in a && typeof a.constant < "u" && e2.constant(a.constant);
  }
  function xo(e2, a) {
    "exponent" in e2 && "exponent" in a && typeof a.exponent < "u" && e2.exponent(a.exponent);
  }
  var pl = { lab: za, hcl: Vt, "hcl-long": Et, hsl: Ut, "hsl-long": Nt, cubehelix: Wt, "cubehelix-long": Gt, rgb: Ne2 };
  function Lo(e2) {
    switch (e2) {
      case "lab":
      case "hcl":
      case "hcl-long":
      case "hsl":
      case "hsl-long":
      case "cubehelix":
      case "cubehelix-long":
      case "rgb":
        return pl[e2];
      default:
    }
    var a = e2.type, t = e2.gamma, o = pl[a];
    return typeof t > "u" ? o : o.gamma(t);
  }
  function ho(e2, a) {
    if ("interpolate" in a && "interpolate" in e2 && typeof a.interpolate < "u") {
      var t = Lo(a.interpolate);
      e2.interpolate(t);
    }
  }
  var ys = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
  var bs = "%Y-%m-%d %H:%M";
  function go(e2) {
    var a = e2.tickFormat(1, bs)(ys);
    return a === "2020-02-02 03:04";
  }
  var ml = { day: Ja, hour: Qa, minute: _a, month: at2, second: Ie2, week: sa, year: fa };
  var xl = { day: et2, hour: ja, minute: Ya, month: tt2, second: Ie2, week: da, year: na };
  function Io(e2, a) {
    if ("nice" in a && typeof a.nice < "u" && "nice" in e2) {
      var t = a.nice;
      if (typeof t == "boolean") t && e2.nice();
      else if (typeof t == "number") e2.nice(t);
      else {
        var o = e2, r = go(o);
        if (typeof t == "string") o.nice(r ? xl[t] : ml[t]);
        else {
          var l2 = t.interval, u = t.step, s = (r ? xl[l2] : ml[l2]).every(u);
          s != null && o.nice(s);
        }
      }
    }
  }
  function Co(e2, a) {
    "padding" in e2 && "padding" in a && typeof a.padding < "u" && e2.padding(a.padding), "paddingInner" in e2 && "paddingInner" in a && typeof a.paddingInner < "u" && e2.paddingInner(a.paddingInner), "paddingOuter" in e2 && "paddingOuter" in a && typeof a.paddingOuter < "u" && e2.paddingOuter(a.paddingOuter);
  }
  function So(e2, a) {
    if (a.reverse) {
      var t = e2.range().slice().reverse();
      "padding" in e2, e2.range(t);
    }
  }
  function yo(e2, a) {
    "round" in a && typeof a.round < "u" && (a.round && "interpolate" in a && typeof a.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", a) : "round" in e2 ? e2.round(a.round) : "interpolate" in e2 && a.round && e2.interpolate(la));
  }
  function bo(e2, a) {
    "unknown" in e2 && "unknown" in a && typeof a.unknown < "u" && e2.unknown(a.unknown);
  }
  function wo(e2, a) {
    if ("zero" in a && a.zero === true) {
      var t = e2.domain(), o = t[0], r = t[1], l2 = r < o, u = l2 ? [r, o] : [o, r], s = u[0], d = u[1], f2 = [Math.min(0, s), Math.max(0, d)];
      e2.domain(l2 ? f2.reverse() : f2);
    }
  }
  var ws = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
  var ks = { domain: fo, nice: Io, zero: wo, interpolate: ho, round: yo, align: io, base: co, clamp: po, constant: mo, exponent: xo, padding: Co, range: no, reverse: So, unknown: bo };
  function ia() {
    for (var e2 = arguments.length, a = new Array(e2), t = 0; t < e2; t++) a[t] = arguments[t];
    var o = new Set(a), r = ws.filter(function(l2) {
      return o.has(l2);
    });
    return function(u, s) {
      return typeof s < "u" && r.forEach(function(d) {
        ks[d](u, s);
      }), u;
    };
  }
  var Ps = ia("domain", "range", "reverse", "align", "padding", "round");
  var vs = ia("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
  var Po = Math.PI;
  var vo = 2 * Po;
  var be2 = 1e-6;
  var Ms = vo - be2;
  function Mo() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  function Ll() {
    return new Mo();
  }
  Mo.prototype = Ll.prototype = { constructor: Mo, moveTo: function(e2, a) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a);
  }, closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  }, lineTo: function(e2, a) {
    this._ += "L" + (this._x1 = +e2) + "," + (this._y1 = +a);
  }, quadraticCurveTo: function(e2, a, t, o) {
    this._ += "Q" + +e2 + "," + +a + "," + (this._x1 = +t) + "," + (this._y1 = +o);
  }, bezierCurveTo: function(e2, a, t, o, r, l2) {
    this._ += "C" + +e2 + "," + +a + "," + +t + "," + +o + "," + (this._x1 = +r) + "," + (this._y1 = +l2);
  }, arcTo: function(e2, a, t, o, r) {
    e2 = +e2, a = +a, t = +t, o = +o, r = +r;
    var l2 = this._x1, u = this._y1, s = t - e2, d = o - a, f2 = l2 - e2, c = u - a, i = f2 * f2 + c * c;
    if (r < 0) throw new Error("negative radius: " + r);
    if (this._x1 === null) this._ += "M" + (this._x1 = e2) + "," + (this._y1 = a);
    else if (i > be2) if (!(Math.abs(c * s - d * f2) > be2) || !r) this._ += "L" + (this._x1 = e2) + "," + (this._y1 = a);
    else {
      var n2 = t - l2, m = o - u, x = s * s + d * d, I2 = n2 * n2 + m * m, S2 = Math.sqrt(x), k2 = Math.sqrt(i), D2 = r * Math.tan((Po - Math.acos((x + i - I2) / (2 * S2 * k2))) / 2), h = D2 / k2, P3 = D2 / S2;
      Math.abs(h - 1) > be2 && (this._ += "L" + (e2 + h * f2) + "," + (a + h * c)), this._ += "A" + r + "," + r + ",0,0," + +(c * n2 > f2 * m) + "," + (this._x1 = e2 + P3 * s) + "," + (this._y1 = a + P3 * d);
    }
  }, arc: function(e2, a, t, o, r, l2) {
    e2 = +e2, a = +a, t = +t, l2 = !!l2;
    var u = t * Math.cos(o), s = t * Math.sin(o), d = e2 + u, f2 = a + s, c = 1 ^ l2, i = l2 ? o - r : r - o;
    if (t < 0) throw new Error("negative radius: " + t);
    this._x1 === null ? this._ += "M" + d + "," + f2 : (Math.abs(this._x1 - d) > be2 || Math.abs(this._y1 - f2) > be2) && (this._ += "L" + d + "," + f2), t && (i < 0 && (i = i % vo + vo), i > Ms ? this._ += "A" + t + "," + t + ",0,1," + c + "," + (e2 - u) + "," + (a - s) + "A" + t + "," + t + ",0,1," + c + "," + (this._x1 = d) + "," + (this._y1 = f2) : i > be2 && (this._ += "A" + t + "," + t + ",0," + +(i >= Po) + "," + c + "," + (this._x1 = e2 + t * Math.cos(r)) + "," + (this._y1 = a + t * Math.sin(r))));
  }, rect: function(e2, a, t, o) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a) + "h" + +t + "v" + +o + "h" + -t + "Z";
  }, toString: function() {
    return this._;
  } };
  function hl(e2) {
    this._context = e2;
  }
  hl.prototype = { areaStart: function() {
    this._line = 0;
  }, areaEnd: function() {
    this._line = NaN;
  }, lineStart: function() {
    this._point = 0;
  }, lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }, point: function(e2, a) {
    switch (e2 = +e2, a = +a, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e2, a) : this._context.moveTo(e2, a);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e2, a);
        break;
    }
  } };
  var yl = ar(ko());
  var bl = ar(ko());
  var ft = (...e2) => e2.filter((a, t, o) => !!a && a.trim() !== "" && o.indexOf(a) === t).join(" ").trim();
  var Pl = (e2) => e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var vl = (e2) => e2.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, t, o) => o ? o.toUpperCase() : t.toLowerCase());
  var Oo = (e2) => {
    let a = vl(e2);
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  var Ml = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  var Al = (e2) => {
    for (let a in e2) if (a.startsWith("aria-") || a === "role" || a === "title") return true;
    return false;
  };
  var Rl = (0, import_react10.forwardRef)(({ color: e2 = "currentColor", size: a = 24, strokeWidth: t = 2, absoluteStrokeWidth: o, className: r = "", children: l2, iconNode: u, ...s }, d) => (0, import_react10.createElement)("svg", { ref: d, ...Ml, width: a, height: a, stroke: e2, strokeWidth: o ? Number(t) * 24 / Number(a) : t, className: ft("lucide", r), ...!l2 && !Al(s) && { "aria-hidden": "true" }, ...s }, [...u.map(([f2, c]) => (0, import_react10.createElement)(f2, c)), ...Array.isArray(l2) ? l2 : [l2]]));
  var U2 = (e2, a) => {
    let t = (0, import_react9.forwardRef)(({ className: o, ...r }, l2) => (0, import_react9.createElement)(Rl, { ref: l2, iconNode: a, className: ft(`lucide-${Pl(Oo(e2))}`, `lucide-${e2}`, o), ...r }));
    return t.displayName = Oo(e2), t;
  };
  var Ks = [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]];
  var we2 = U2("arrow-up-right", Ks);
  var Zs = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var La = U2("check", Zs);
  var _s = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
  var ha = U2("chevron-left", _s);
  var Ys = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
  var ga = U2("chevron-right", Ys);
  var Qs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
  var fe2 = U2("loader-circle", Qs);
  var js = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]];
  var Ia = U2("x", js);
  var zo = { label: "Let\u2019s buy this", request: "I want this product. Check the current offer and prepare checkout for the selected variant. Resolve only essential missing choices in our conversation.", kind: "checkout" };
  function xd() {
    return (0, import_jsx_runtime11.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: (0, import_jsx_runtime11.jsx)("path", { d: "M20.5 12C20.5 9.76676 19.686 8.06004 18.2871 6.89355C16.8661 5.70886 14.7409 5 12 5C9.25912 5 7.13392 5.70886 5.71288 6.89355C4.31396 8.06004 3.49999 9.76677 3.49999 12C3.49999 12.4778 3.67754 13.2204 3.91698 13.9678C4.14619 14.6832 4.39417 15.2886 4.45995 15.4463C4.47153 15.474 4.45918 15.4447 4.47753 15.4883L4.51269 15.5781L4.55273 15.6973C4.71413 16.2258 4.88032 17.3955 4.10253 18.9609C4.45806 18.9447 4.80995 18.8667 5.14062 18.752C5.48117 18.6338 5.77064 18.4882 5.9746 18.3721C6.07544 18.3146 6.15337 18.2661 6.20312 18.2334C6.22792 18.2171 6.2459 18.2042 6.25585 18.1973C6.25889 18.1952 6.26114 18.1935 6.26269 18.1924C6.57078 17.9671 6.98047 17.9376 7.31835 18.1152C8.64944 18.8149 10.295 19 12 19C14.7409 19 16.8661 18.2911 18.2871 17.1064C19.686 15.94 20.5 14.2332 20.5 12ZM22.5 12C22.5 14.7665 21.4668 17.06 19.5674 18.6436C17.6898 20.2087 15.0646 21 12 21C10.3808 21 8.55858 20.8483 6.91699 20.1357C6.63773 20.2919 6.25326 20.4829 5.79589 20.6416C4.84476 20.9715 3.45924 21.2047 2.07226 20.5479C1.80018 20.419 1.59992 20.1742 1.52831 19.8818C1.45679 19.5894 1.52128 19.28 1.70312 19.04C2.39144 18.1322 2.60883 17.4279 2.66894 16.9775C2.72939 16.5244 2.63731 16.2736 2.63476 16.2666L2.63378 16.2646C2.63187 16.2601 2.63059 16.2546 2.62695 16.2461C2.62373 16.2386 2.61901 16.2282 2.61425 16.2168L2.61327 16.2158C2.53665 16.0321 2.2661 15.369 2.01269 14.5781C1.76944 13.8189 1.49999 12.8165 1.49999 12C1.49999 9.23347 2.5332 6.93995 4.43261 5.35645C6.31017 3.79128 8.93544 3 12 3C15.0646 3 17.6898 3.79129 19.5674 5.35645C21.4668 6.93996 22.5 9.23348 22.5 12Z" }) });
  }
  var Ld = { idle: { icon: (0, import_jsx_runtime11.jsx)(xd, {}), label: zo.label, shortLabel: "Buy this", variant: "active" }, sending: { icon: (0, import_jsx_runtime11.jsx)(fe2, { className: "file-spin", size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), label: "Sending\u2026", variant: "disabled" }, sent: { icon: (0, import_jsx_runtime11.jsx)(La, { size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), label: "Sent to Instinct", shortLabel: "Sent", variant: "disabled" } };

  // ../../opt/files/node_modules/react-router/dist/development/chunk-BV7QT456.mjs
  var React = __toESM(require_react(), 1);
  var React2 = __toESM(require_react(), 1);
  var React3 = __toESM(require_react(), 1);
  var React4 = __toESM(require_react(), 1);
  var React9 = __toESM(require_react(), 1);
  var React8 = __toESM(require_react(), 1);
  var React7 = __toESM(require_react(), 1);
  var React6 = __toESM(require_react(), 1);
  var React5 = __toESM(require_react(), 1);
  var React10 = __toESM(require_react(), 1);
  var React11 = __toESM(require_react(), 1);
  var import_meta = {};
  var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
  var PROTOCOL_RELATIVE_URL_REGEX = /^[\\/]{2}/;
  function normalizeProtocolRelativeUrl(url, protocol) {
    return protocol + url.replace(/\\/g, "/");
  }
  function isLocation(obj) {
    return typeof obj === "object" && obj != null && "pathname" in obj && "search" in obj && "hash" in obj && "state" in obj && "key" in obj;
  }
  function createMemoryHistory(options = {}) {
    let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
    let entries;
    entries = initialEntries.map(
      (entry, index2) => createMemoryLocation(
        entry,
        typeof entry === "string" ? null : entry.state,
        index2 === 0 ? "default" : void 0,
        typeof entry === "string" ? void 0 : entry.mask
      )
    );
    let index = clampIndex(
      initialIndex == null ? entries.length - 1 : initialIndex
    );
    let action = "POP";
    let listener = null;
    function clampIndex(n2) {
      return Math.min(Math.max(n2, 0), entries.length - 1);
    }
    function getCurrentLocation() {
      return entries[index];
    }
    function createMemoryLocation(to, state = null, key, mask) {
      let location = createLocation(
        entries ? getCurrentLocation().pathname : "/",
        to,
        state,
        key,
        mask
      );
      warning(
        location.pathname.charAt(0) === "/",
        `relative pathnames are not supported in memory history: ${JSON.stringify(
          to
        )}`
      );
      return location;
    }
    function createHref2(to) {
      return typeof to === "string" ? to : createPath(to);
    }
    let history = {
      get index() {
        return index;
      },
      get action() {
        return action;
      },
      get location() {
        return getCurrentLocation();
      },
      createHref: createHref2,
      createURL(to) {
        return new URL(createHref2(to), "http://localhost");
      },
      encodeLocation(to) {
        let path = typeof to === "string" ? parsePath(to) : to;
        return {
          pathname: path.pathname || "",
          search: path.search || "",
          hash: path.hash || ""
        };
      },
      push(to, state) {
        action = "PUSH";
        let nextLocation = isLocation(to) ? to : createMemoryLocation(to, state);
        index += 1;
        entries.splice(index, entries.length, nextLocation);
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 1 });
        }
      },
      replace(to, state) {
        action = "REPLACE";
        let nextLocation = isLocation(to) ? to : createMemoryLocation(to, state);
        entries[index] = nextLocation;
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 0 });
        }
      },
      go(delta) {
        action = "POP";
        let nextIndex = clampIndex(index + delta);
        let nextLocation = entries[nextIndex];
        index = nextIndex;
        if (listener) {
          listener({ action, location: nextLocation, delta });
        }
      },
      listen(fn) {
        listener = fn;
        return () => {
          listener = null;
        };
      }
    };
    return history;
  }
  function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function warning(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined") console.warn(message);
      try {
        throw new Error(message);
      } catch (e2) {
      }
    }
  }
  function createKey() {
    return Math.random().toString(36).substring(2, 10);
  }
  function createLocation(current, to, state = null, key, mask) {
    let location = {
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: "",
      ...typeof to === "string" ? parsePath(to) : to,
      state,
      // TODO: This could be cleaned up.  push/replace should probably just take
      // full Locations now and avoid the need to run through this flow at all
      // But that's a pretty big refactor to the current test suite so going to
      // keep as is for the time being and just let any incoming keys take precedence
      key: to && to.key || key || createKey(),
      mask
    };
    return location;
  }
  function createPath({
    pathname = "/",
    search = "",
    hash = ""
  }) {
    if (search && search !== "?")
      pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#")
      pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substring(hashIndex);
        path = path.substring(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substring(searchIndex);
        path = path.substring(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  var _map;
  _map = /* @__PURE__ */ new WeakMap();
  function matchRoutes(routes, locationArg, basename = "/") {
    return matchRoutesImpl(routes, locationArg, basename, false);
  }
  function matchRoutesImpl(routes, locationArg, basename, allowPartial, precomputedBranches) {
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = precomputedBranches ?? flattenAndRankRoutes(routes);
    let matches = null;
    let decoded = decodePath(pathname);
    for (let i = 0; matches == null && i < branches.length; ++i) {
      matches = matchRouteBranch(
        branches[i],
        decoded,
        allowPartial
      );
    }
    return matches;
  }
  function convertRouteMatchToUiMatch(match, loaderData) {
    let { route, pathname, params } = match;
    return {
      id: route.id,
      pathname,
      params,
      data: loaderData[route.id],
      loaderData: loaderData[route.id],
      handle: route.handle
    };
  }
  function flattenAndRankRoutes(routes) {
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    return branches;
  }
  function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
    let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
          return;
        }
        invariant(
          meta.relativePath.startsWith(parentPath),
          `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        );
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
        );
        flattenRoutes(
          route.children,
          branches,
          routesMeta,
          path,
          hasParentOptionalSegments
        );
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta: routesMeta.map((meta2, i) => {
          let [matcher, params] = compilePath(
            meta2.relativePath,
            meta2.caseSensitive,
            i === routesMeta.length - 1
          );
          return {
            ...meta2,
            matcher,
            compiledParams: params
          };
        })
      });
    };
    routes.forEach((route, index) => {
      if (route.path === "" || !route.path?.includes("?")) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, true, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(
      ...restExploded.map(
        (subpath) => subpath === "" ? required : [required, subpath].join("/")
      )
    );
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map(
      (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
    );
  }
  function rankRouteBranches(branches) {
    branches.sort(
      (a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(
        a.routesMeta.map((meta) => meta.childrenIndex),
        b2.routesMeta.map((meta) => meta.childrenIndex)
      )
    );
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce(
      (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
      initialScore
    );
  }
  function compareIndexes(a, b2) {
    let siblings = a.length === b2.length && a.slice(0, -1).every((n2, i) => n2 === b2[i]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b2[b2.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname, allowPartial = false) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let pattern = {
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      };
      let match = (
        // Use precomputed matcher if it exists
        meta.matcher && meta.compiledParams ? matchPathImpl(
          pattern,
          remainingPathname,
          meta.matcher,
          meta.compiledParams
        ) : matchPath(pattern, remainingPathname)
      );
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath(
          {
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          },
          remainingPathname
        );
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(
          joinPaths([matchedPathname, match.pathnameBase])
        ),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = { path: pattern, caseSensitive: false, end: true };
    }
    let [matcher, compiledParams] = compilePath(
      pattern.path,
      pattern.caseSensitive,
      pattern.end
    );
    return matchPathImpl(pattern, pathname, matcher, compiledParams);
  }
  function matchPathImpl(pattern, pathname, matcher, compiledParams) {
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = removeTrailingSlash(matchedPathname, 1);
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce(
      (memo2, { paramName, isOptional }, index) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index] || "";
          pathnameBase = removeTrailingSlash(
            matchedPathname.slice(0, matchedPathname.length - splatValue.length),
            1
          );
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
          memo2[paramName] = void 0;
        } else {
          memo2[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo2;
      },
      {}
    );
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive = false, end = true) {
    warning(
      path === "*" || !path.endsWith("*") || path.endsWith("/*"),
      `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
    );
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
      /\/:([\w-]+)(\?)?/g,
      (match, paramName, isOptional, index, str) => {
        params.push({ paramName, isOptional: isOptional != null });
        if (isOptional) {
          let nextChar = str.charAt(index + match.length);
          if (nextChar && nextChar !== "/") {
            return "/([^\\/]*)";
          }
          return "(?:/([^\\/]*))?";
        }
        return "/([^\\/]+)";
      }
    ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    if (path.endsWith("*")) {
      params.push({ paramName: "*" });
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else {
    }
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, params];
  }
  function decodePath(value) {
    try {
      return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
    } catch (error) {
      warning(
        false,
        `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
      );
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  function resolvePath(to, fromPathname = "/") {
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to === "string" ? parsePath(to) : to;
    let pathname;
    if (toPathname) {
      toPathname = removeDoubleSlashes(toPathname);
      if (toPathname.startsWith("/") || toPathname.startsWith("\\")) {
        pathname = resolvePathname(toPathname.substring(1), "/");
      } else {
        pathname = resolvePathname(toPathname, fromPathname);
      }
    } else {
      pathname = fromPathname;
    }
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = removeTrailingSlash(fromPathname).split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1) segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
      path
    )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function getPathContributingMatches(matches) {
    return matches.filter(
      (match, index) => index === 0 || match.route.path && match.route.path.length > 0
    );
  }
  function getResolveToMatches(matches) {
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches.map(
      (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
    );
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
    let to;
    if (typeof toArg === "string") {
      to = parsePath(toArg);
    } else {
      to = { ...toArg };
      invariant(
        !to.pathname || !to.pathname.includes("?"),
        getInvalidPathError("?", "pathname", "search", to)
      );
      invariant(
        !to.pathname || !to.pathname.includes("#"),
        getInvalidPathError("#", "pathname", "hash", to)
      );
      invariant(
        !to.search || !to.search.includes("#"),
        getInvalidPathError("#", "search", "hash", to)
      );
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (!isPathRelative && toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var removeDoubleSlashes = (path) => path.replace(/[\\/]{2,}/g, "/");
  var joinPaths = (paths) => removeDoubleSlashes(paths.join("/"));
  function removeTrailingSlash(path, minLength = 0) {
    let end = path.length;
    while (end > minLength && path.charCodeAt(end - 1) === 47) {
      end--;
    }
    return end === path.length ? path : path.slice(0, end);
  }
  var normalizePathname = (pathname) => removeTrailingSlash(pathname).replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  var ErrorResponseImpl = class {
    constructor(status, statusText, data2, internal = false) {
      this.status = status;
      this.statusText = statusText || "";
      this.internal = internal;
      if (data2 instanceof Error) {
        this.data = data2.toString();
        this.error = data2;
      } else {
        this.data = data2;
      }
    }
  };
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  function getRoutePattern(matches) {
    let parts = matches.map((m) => m.route.path).filter(Boolean);
    return joinPaths(parts) || "/";
  }
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  function parseToInfo(_to, basename) {
    let to = _to;
    if (typeof to !== "string" || !ABSOLUTE_URL_REGEX.test(to)) {
      return {
        absoluteURL: void 0,
        isExternal: false,
        to
      };
    }
    let absoluteURL = to;
    let isExternal = false;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = PROTOCOL_RELATIVE_URL_REGEX.test(to) ? new URL(normalizeProtocolRelativeUrl(to, currentUrl.protocol)) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e2) {
        warning(
          false,
          `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    }
    return {
      absoluteURL,
      isExternal,
      to
    };
  }
  var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var DEFAULT_NAVIGATION_URL = new URL("http://localhost");
  function getNavigatorCurrentUrl(navigator2) {
    if (navigator2.createURL) {
      return navigator2.createURL("/");
    }
    try {
      return new URL(navigator2.createHref("/"), DEFAULT_NAVIGATION_URL);
    } catch {
      return DEFAULT_NAVIGATION_URL;
    }
  }
  function isSameOrigin(a, b2) {
    return a.origin === b2.origin && (a.origin !== "null" || a.protocol === b2.protocol && a.host === b2.host);
  }
  function isExplicitUrl(destination, target) {
    if (destination.startsWith("//")) {
      return true;
    }
    let protocol = target.protocol.toLowerCase();
    if (!destination.toLowerCase().startsWith(protocol)) {
      return false;
    }
    return target.host === "" || destination.slice(protocol.length).startsWith("//");
  }
  function validateNavigationTarget(original, resolved, currentUrl, externalPolicy) {
    let originalUrl = null;
    try {
      originalUrl = original == null ? null : new URL(original, currentUrl);
    } catch {
    }
    let resolvedUrl = new URL(resolved, currentUrl);
    let originalIsExternal = originalUrl != null && !isSameOrigin(originalUrl, currentUrl);
    let resolvedIsExternal = !isSameOrigin(resolvedUrl, currentUrl);
    if (externalPolicy === "reject") {
      if (originalIsExternal || resolvedIsExternal) {
        throw new Error("External navigation is not allowed");
      }
    } else if (resolvedIsExternal) {
      if (originalUrl == null || !isExplicitUrl(original, originalUrl) || !isSameOrigin(originalUrl, resolvedUrl)) {
        throw new Error("External navigation is not allowed");
      }
    }
  }
  var validMutationMethodsArr = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  var validMutationMethods = new Set(
    validMutationMethodsArr
  );
  var validRequestMethodsArr = [
    "GET",
    ...validMutationMethodsArr
  ];
  var validRequestMethods = new Set(validRequestMethodsArr);
  var _routes;
  var _branches;
  var _hmrRoutes;
  var _hmrBranches;
  _routes = /* @__PURE__ */ new WeakMap();
  _branches = /* @__PURE__ */ new WeakMap();
  _hmrRoutes = /* @__PURE__ */ new WeakMap();
  _hmrBranches = /* @__PURE__ */ new WeakMap();
  var invalidProtocols = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  function hasInvalidProtocol(location) {
    try {
      return invalidProtocols.includes(new URL(location).protocol);
    } catch {
      return false;
    }
  }
  var DataRouterContext = React.createContext(null);
  DataRouterContext.displayName = "DataRouter";
  var DataRouterStateContext = React.createContext(null);
  DataRouterStateContext.displayName = "DataRouterState";
  var RSCRouterContext = React.createContext(false);
  function useIsRSCRouterContext() {
    return React.useContext(RSCRouterContext);
  }
  var ViewTransitionContext = React.createContext({
    isTransitioning: false
  });
  ViewTransitionContext.displayName = "ViewTransition";
  var FetchersContext = React.createContext(
    /* @__PURE__ */ new Map()
  );
  FetchersContext.displayName = "Fetchers";
  var AwaitContext = React.createContext(null);
  AwaitContext.displayName = "Await";
  var NavigationContext = React.createContext(
    null
  );
  NavigationContext.displayName = "Navigation";
  var LocationContext = React.createContext(
    null
  );
  LocationContext.displayName = "Location";
  var RouteContext = React.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  RouteContext.displayName = "Route";
  var RouteErrorContext = React.createContext(null);
  RouteErrorContext.displayName = "RouteError";
  var ENABLE_DEV_WARNINGS = true;
  var ERROR_DIGEST_BASE = "REACT_ROUTER_ERROR";
  var ERROR_DIGEST_REDIRECT = "REDIRECT";
  var ERROR_DIGEST_ROUTE_ERROR_RESPONSE = "ROUTE_ERROR_RESPONSE";
  function decodeRedirectErrorDigest(digest) {
    if (digest.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_REDIRECT}:{`)) {
      try {
        let parsed = JSON.parse(digest.slice(28));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string" && typeof parsed.location === "string" && typeof parsed.reloadDocument === "boolean" && typeof parsed.replace === "boolean") {
          return parsed;
        }
      } catch {
      }
    }
  }
  function decodeRouteErrorResponseDigest(digest) {
    if (digest.startsWith(
      `${ERROR_DIGEST_BASE}:${ERROR_DIGEST_ROUTE_ERROR_RESPONSE}:{`
    )) {
      try {
        let parsed = JSON.parse(digest.slice(40));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string") {
          return new ErrorResponseImpl(
            parsed.status,
            parsed.statusText,
            parsed.data
          );
        }
      } catch {
      }
    }
  }
  function useHref(to, { relative } = {}) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useHref() may be used only in the context of a <Router> component.`
    );
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to, { relative });
    let joinedPathname = pathname;
    if (basename !== "/") {
      joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
    }
    return navigator2.createHref({ pathname: joinedPathname, search, hash });
  }
  function useInRouterContext() {
    return React2.useContext(LocationContext) != null;
  }
  function useLocation() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useLocation() may be used only in the context of a <Router> component.`
    );
    return React2.useContext(LocationContext).location;
  }
  var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
  function useIsomorphicLayoutEffect(cb) {
    let isStatic = React2.useContext(NavigationContext).static;
    if (!isStatic) {
      React2.useLayoutEffect(cb);
    }
  }
  function useNavigate() {
    let { isDataRoute } = React2.useContext(RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
  }
  function useNavigateUnstable() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useNavigate() may be used only in the context of a <Router> component.`
    );
    let dataRouterContext = React2.useContext(DataRouterContext);
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      (to, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to === "number") {
          navigator2.go(to);
          return;
        }
        let path = resolveTo(
          to,
          JSON.parse(routePathnamesJson),
          locationPathname,
          options.relative === "path"
        );
        if (dataRouterContext == null && basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        validateNavigationTarget(
          typeof to === "string" ? to : createPath(to),
          navigator2.createHref(path),
          getNavigatorCurrentUrl(navigator2),
          "reject"
        );
        (!!options.replace ? navigator2.replace : navigator2.push)(
          path,
          options.state,
          options
        );
      },
      [
        basename,
        navigator2,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
      ]
    );
    return navigate;
  }
  var OutletContext = React2.createContext(null);
  function useResolvedPath(to, { relative } = {}) {
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    return React2.useMemo(
      () => resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        relative === "path"
      ),
      [to, routePathnamesJson, locationPathname, relative]
    );
  }
  function useRoutes(routes, locationArg) {
    return useRoutesImpl(routes, locationArg);
  }
  function useRoutesImpl(routes, locationArg, dataRouterOpts) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useRoutes() may be used only in the context of a <Router> component.`
    );
    let { navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches: parentMatches } = React2.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (ENABLE_DEV_WARNINGS) {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(
        parentPathname,
        !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
      );
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      invariant(
        parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
      );
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
      let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
      let segments = pathname.replace(/^\//, "").split("/");
      remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = dataRouterOpts && dataRouterOpts.state.matches.length ? (
      // If we're in a data router, use the matches we've already identified but ensure
      // we have the latest route instances from the manifest in case elements have changed
      dataRouterOpts.state.matches.map(
        (m) => Object.assign(m, {
          route: dataRouterOpts.manifest[m.route.id] || m.route
        })
      )
    ) : matchRoutes(routes, { pathname: remainingPathname });
    if (ENABLE_DEV_WARNINGS) {
      warning(
        parentRoute || matches != null,
        `No routes matched location "${location.pathname}${location.search}${location.hash}" `
      );
      warning(
        matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    }
    let renderedMatches = _renderMatches(
      matches && matches.map(
        (match) => Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes.
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathname
          ]),
          pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathnameBase
          ])
        })
      ),
      parentMatches,
      dataRouterOpts
    );
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ React2.createElement(
        LocationContext.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              mask: void 0,
              ...location
            },
            navigationType: "POP"
            /* Pop */
          }
        },
        renderedMatches
      );
    }
    return renderedMatches;
  }
  function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
    let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
    let devInfo = null;
    if (ENABLE_DEV_WARNINGS) {
      console.error(
        "Error handled by React Router default ErrorBoundary:",
        error
      );
      devInfo = /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React2.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React2.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ React2.createElement("pre", { style: preStyles }, stack) : null, devInfo);
  }
  var defaultErrorElement = /* @__PURE__ */ React2.createElement(DefaultErrorComponent, null);
  var RenderErrorBoundary = class extends React2.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        revalidation: props.revalidation,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
        return {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        };
      }
      return {
        error: props.error !== void 0 ? props.error : state.error,
        location: state.location,
        revalidation: props.revalidation || state.revalidation
      };
    }
    componentDidCatch(error, errorInfo) {
      if (this.props.onError) {
        this.props.onError(error, errorInfo);
      } else {
        console.error(
          "React Router caught the following error during render",
          error
        );
      }
    }
    render() {
      let error = this.state.error;
      if (this.context && typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
        const decoded = decodeRouteErrorResponseDigest(error.digest);
        if (decoded) error = decoded;
      }
      let result = error !== void 0 ? /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ React2.createElement(
        RouteErrorContext.Provider,
        {
          value: error,
          children: this.props.component
        }
      )) : this.props.children;
      if (this.context) {
        return /* @__PURE__ */ React2.createElement(RSCErrorHandler, { error }, result);
      }
      return result;
    }
  };
  RenderErrorBoundary.contextType = RSCRouterContext;
  var errorRedirectHandledMap = /* @__PURE__ */ new WeakMap();
  function RSCErrorHandler({
    children,
    error
  }) {
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    if (typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
      let redirect2 = decodeRedirectErrorDigest(error.digest);
      if (redirect2) {
        let existingRedirect = errorRedirectHandledMap.get(error);
        if (existingRedirect) throw existingRedirect;
        let parsed = parseToInfo(redirect2.location, basename);
        let target = parsed.absoluteURL || parsed.to;
        validateNavigationTarget(
          redirect2.location,
          target,
          getNavigatorCurrentUrl(navigator2),
          "allow-explicit"
        );
        if (hasInvalidProtocol(target)) {
          throw new Error("Invalid redirect location");
        }
        if (isBrowser && !errorRedirectHandledMap.get(error)) {
          if (parsed.isExternal || redirect2.reloadDocument) {
            window.location.href = target;
          } else {
            const redirectPromise = Promise.resolve().then(
              () => window.__reactRouterDataRouter.navigate(parsed.to, {
                replace: redirect2.replace
              })
            );
            errorRedirectHandledMap.set(error, redirectPromise);
            throw redirectPromise;
          }
        }
        return /* @__PURE__ */ React2.createElement("meta", { httpEquiv: "refresh", content: `0;url=${target}` });
      }
    }
    return children;
  }
  function RenderedRoute({ routeContext, match, children }) {
    let dataRouterContext = React2.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: routeContext }, children);
  }
  function _renderMatches(matches, parentMatches = [], dataRouterOpts) {
    let dataRouterState = dataRouterOpts?.state;
    if (matches == null) {
      if (!dataRouterState) {
        return null;
      }
      if (dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors = dataRouterState?.errors;
    if (errors != null) {
      let errorIndex = renderedMatches.findIndex(
        (m) => m.route.id && errors?.[m.route.id] !== void 0
      );
      invariant(
        errorIndex >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          errors
        ).join(",")}`
      );
      renderedMatches = renderedMatches.slice(
        0,
        Math.min(renderedMatches.length, errorIndex + 1)
      );
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterOpts && dataRouterState) {
      renderFallback = dataRouterState.renderFallback;
      for (let i = 0; i < renderedMatches.length; i++) {
        let match = renderedMatches[i];
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
          fallbackIndex = i;
        }
        if (match.route.id) {
          let { loaderData, errors: errors2 } = dataRouterState;
          let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
          if (match.route.lazy || needsToRunLoader) {
            if (dataRouterOpts.isStatic) {
              renderFallback = true;
            }
            if (fallbackIndex >= 0) {
              renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
            } else {
              renderedMatches = [renderedMatches[0]];
            }
            break;
          }
        }
      }
    }
    let onErrorHandler = dataRouterOpts?.onError;
    let onError = dataRouterState && onErrorHandler ? (error, errorInfo) => {
      onErrorHandler(error, {
        location: dataRouterState.location,
        params: dataRouterState.matches?.[0]?.params ?? {},
        pattern: getRoutePattern(dataRouterState.matches),
        errorInfo
      });
    } : void 0;
    return renderedMatches.reduceRight(
      (outlet, match, index) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors && match.route.id ? errors[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index === 0) {
              warningOnce(
                "route-fallback",
                false,
                "No `HydrateFallback` element provided to render during initial hydration"
              );
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ React2.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ React2.createElement(
            RenderedRoute,
            {
              match,
              routeContext: {
                outlet,
                matches: matches2,
                isDataRoute: dataRouterState != null
              },
              children
            }
          );
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React2.createElement(
          RenderErrorBoundary,
          {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error,
            children: getChildren(),
            routeContext: { outlet: null, matches: matches2, isDataRoute: true },
            onError
          }
        ) : getChildren();
      },
      null
    );
  }
  function getDataRouterConsoleError(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext(hookName) {
    let ctx = React2.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError(hookName));
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = React2.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError(hookName));
    return state;
  }
  function useRouteContext(hookName) {
    let route = React2.useContext(RouteContext);
    invariant(route, getDataRouterConsoleError(hookName));
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    invariant(
      thisRoute.route.id,
      `${hookName} can only be used on routes that contain a unique "id"`
    );
    return thisRoute.route.id;
  }
  function useRouteId() {
    return useCurrentRouteId(
      "useRouteId"
      /* UseRouteId */
    );
  }
  function useNavigation() {
    let state = useDataRouterState(
      "useNavigation"
      /* UseNavigation */
    );
    return React2.useMemo(() => {
      let { matches, historyAction, ...rest } = state.navigation;
      return rest;
    }, [state.navigation]);
  }
  function useMatches() {
    let { matches, loaderData } = useDataRouterState(
      "useMatches"
      /* UseMatches */
    );
    return React2.useMemo(
      () => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)),
      [matches, loaderData]
    );
  }
  function useRouteError() {
    let error = React2.useContext(RouteErrorContext);
    let state = useDataRouterState(
      "useRouteError"
      /* UseRouteError */
    );
    let routeId = useCurrentRouteId(
      "useRouteError"
      /* UseRouteError */
    );
    if (error !== void 0) {
      return error;
    }
    return state.errors?.[routeId];
  }
  function useNavigateStable() {
    let { router } = useDataRouterContext(
      "useNavigate"
      /* UseNavigateStable */
    );
    let id2 = useCurrentRouteId(
      "useNavigate"
      /* UseNavigateStable */
    );
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      async (to, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to === "number") {
          await router.navigate(to);
        } else {
          await router.navigate(to, { fromRouteId: id2, ...options });
        }
      },
      [router, id2]
    );
    return navigate;
  }
  var alreadyWarned = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
      alreadyWarned[key] = true;
      warning(false, message);
    }
  }
  var USE_OPTIMISTIC = "useOptimistic";
  var useOptimisticImpl = React3[USE_OPTIMISTIC];
  var MemoizedDataRoutes = React3.memo(DataRoutes2);
  function DataRoutes2({
    routes,
    manifest,
    future,
    state,
    isStatic,
    onError
  }) {
    return useRoutesImpl(routes, void 0, {
      manifest,
      state,
      isStatic,
      onError,
      future
    });
  }
  function MemoryRouter({
    basename,
    children,
    initialEntries,
    initialIndex,
    useTransitions
  }) {
    let historyRef = React3.useRef();
    if (historyRef.current == null) {
      historyRef.current = createMemoryHistory({
        initialEntries,
        initialIndex,
        v5Compat: true
      });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = React3.useState({
      action: history.action,
      location: history.location
    });
    let setState = React3.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React3.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React3.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React3.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        useTransitions
      }
    );
  }
  function Route(props) {
    invariant(
      false,
      `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`
    );
  }
  function Router({
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = "POP",
    navigator: navigator2,
    static: staticProp = false,
    useTransitions
  }) {
    invariant(
      !useInRouterContext(),
      `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
    );
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = React3.useMemo(
      () => ({
        basename,
        navigator: navigator2,
        static: staticProp,
        useTransitions,
        future: {}
      }),
      [basename, navigator2, staticProp, useTransitions]
    );
    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default",
      mask
    } = locationProp;
    let locationContext = React3.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        location: {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key,
          mask
        },
        navigationType
      };
    }, [basename, pathname, search, hash, state, key, navigationType, mask]);
    warning(
      locationContext != null,
      `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
    );
    if (locationContext == null) {
      return null;
    }
    return /* @__PURE__ */ React3.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ React3.createElement(LocationContext.Provider, { children, value: locationContext }));
  }
  function Routes({
    children,
    location
  }) {
    return useRoutes(createRoutesFromChildren(children), location);
  }
  function createRoutesFromChildren(children, parentPath = []) {
    let routes = [];
    React3.Children.forEach(children, (element, index) => {
      if (!React3.isValidElement(element)) {
        return;
      }
      let treePath = [...parentPath, index];
      if (element.type === React3.Fragment) {
        routes.push.apply(
          routes,
          createRoutesFromChildren(element.props.children, treePath)
        );
        return;
      }
      invariant(
        element.type === Route,
        `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      );
      invariant(
        !element.props.index || !element.props.children,
        "An index route cannot have child routes."
      );
      let route = {
        id: element.props.id || treePath.join("-"),
        caseSensitive: element.props.caseSensitive,
        element: element.props.element,
        Component: element.props.Component,
        index: element.props.index,
        path: element.props.path,
        middleware: element.props.middleware,
        loader: element.props.loader,
        action: element.props.action,
        hydrateFallbackElement: element.props.hydrateFallbackElement,
        HydrateFallback: element.props.HydrateFallback,
        errorElement: element.props.errorElement,
        ErrorBoundary: element.props.ErrorBoundary,
        hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
        shouldRevalidate: element.props.shouldRevalidate,
        handle: element.props.handle,
        lazy: element.props.lazy
      };
      if (element.props.children) {
        route.children = createRoutesFromChildren(
          element.props.children,
          treePath
        );
      }
      routes.push(route);
    });
    return routes;
  }
  var defaultMethod = "get";
  var defaultEncType = "application/x-www-form-urlencoded";
  function isHtmlElement(object) {
    return typeof HTMLElement !== "undefined" && object instanceof HTMLElement;
  }
  function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
  }
  function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
  }
  function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event);
  }
  var _formDataSupportsSubmitter = null;
  function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
      try {
        new FormData(
          document.createElement("form"),
          // @ts-expect-error if FormData supports the submitter parameter, this will throw
          0
        );
        _formDataSupportsSubmitter = false;
      } catch (e2) {
        _formDataSupportsSubmitter = true;
      }
    }
    return _formDataSupportsSubmitter;
  }
  var supportedFormEncTypes = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
      warning(
        false,
        `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
      );
      return null;
    }
    return encType;
  }
  function getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if (isFormElement(target)) {
      let attr = target.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(
          `Cannot submit a <button> or <input type="submit"> without a <form>`
        );
      }
      let attr = target.getAttribute("formaction") || form.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(form, target);
      if (!isFormDataSubmitterSupported()) {
        let { name, type, value } = target;
        if (type === "image") {
          let prefix = name ? `${name}.` : "";
          formData.append(`${prefix}x`, "0");
          formData.append(`${prefix}y`, "0");
        } else if (name) {
          formData.append(name, value);
        }
      }
    } else if (isHtmlElement(target)) {
      throw new Error(
        `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
      );
    } else {
      method = defaultMethod;
      action = null;
      encType = defaultEncType;
      body = target;
    }
    if (formData && encType === "text/plain") {
      body = formData;
      formData = void 0;
    }
    return { action, method: method.toLowerCase(), encType, formData, body };
  }
  var objectProtoNames2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  function escapeHtml(html) {
    return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
  }
  function invariant2(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function singleFetchUrl(reqUrl, basename, trailingSlashAware, extension) {
    let url = typeof reqUrl === "string" ? new URL(
      reqUrl,
      // This can be called during the SSR flow via PrefetchPageLinksImpl so
      // don't assume window is available
      typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
    ) : reqUrl;
    if (trailingSlashAware) {
      if (url.pathname.endsWith("/")) {
        url.pathname = `${url.pathname}_.${extension}`;
      } else {
        url.pathname = `${url.pathname}.${extension}`;
      }
    } else {
      if (url.pathname === "/") {
        url.pathname = `_root.${extension}`;
      } else if (basename && stripBasename(url.pathname, basename) === "/") {
        url.pathname = `${removeTrailingSlash(basename)}/_root.${extension}`;
      } else {
        url.pathname = `${removeTrailingSlash(url.pathname)}.${extension}`;
      }
    }
    return url;
  }
  async function loadRouteModule(route, routeModulesCache) {
    if (route.id in routeModulesCache) {
      return routeModulesCache[route.id];
    }
    try {
      let routeModule = await import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        route.module
      );
      routeModulesCache[route.id] = routeModule;
      return routeModule;
    } catch (error) {
      console.error(
        `Error loading route module \`${route.module}\`, reloading page...`
      );
      console.error(error);
      if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
      import_meta.hot) {
        throw error;
      }
      window.location.reload();
      return new Promise(() => {
      });
    }
  }
  function isPageLinkDescriptor(object) {
    return object != null && typeof object.page === "string";
  }
  function isHtmlLinkDescriptor(object) {
    if (object == null) {
      return false;
    }
    if (object.href == null) {
      return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
    }
    return typeof object.rel === "string" && typeof object.href === "string";
  }
  async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
    let links = await Promise.all(
      matches.map(async (match) => {
        let route = manifest.routes[match.route.id];
        if (route) {
          let mod = await loadRouteModule(route, routeModules);
          return mod.links ? mod.links() : [];
        }
        return [];
      })
    );
    return dedupeLinkDescriptors(
      links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
        (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
      )
    );
  }
  function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
    let isNew = (match, index) => {
      if (!currentMatches[index]) return true;
      return match.route.id !== currentMatches[index].route.id;
    };
    let matchPathChanged = (match, index) => {
      return (
        // param change, /users/123 -> /users/456
        currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]
      );
    };
    if (mode === "assets") {
      return nextMatches.filter(
        (match, index) => isNew(match, index) || matchPathChanged(match, index)
      );
    }
    if (mode === "data") {
      return nextMatches.filter((match, index) => {
        let manifestRoute = manifest.routes[match.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return false;
        }
        if (isNew(match, index) || matchPathChanged(match, index)) {
          return true;
        }
        if (match.route.shouldRevalidate) {
          let routeChoice = match.route.shouldRevalidate({
            currentUrl: new URL(
              location.pathname + location.search + location.hash,
              window.origin
            ),
            currentParams: currentMatches[0]?.params || {},
            nextUrl: new URL(page, window.origin),
            nextParams: match.params,
            defaultShouldRevalidate: true
          });
          if (typeof routeChoice === "boolean") {
            return routeChoice;
          }
        }
        return true;
      });
    }
    return [];
  }
  function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
    return dedupeHrefs(
      matches.map((match) => {
        let route = manifest.routes[match.route.id];
        if (!route) return [];
        let hrefs = [route.module];
        if (route.clientActionModule) {
          hrefs = hrefs.concat(route.clientActionModule);
        }
        if (route.clientLoaderModule) {
          hrefs = hrefs.concat(route.clientLoaderModule);
        }
        if (includeHydrateFallback && route.hydrateFallbackModule) {
          hrefs = hrefs.concat(route.hydrateFallbackModule);
        }
        if (route.imports) {
          hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
      }).flat(1)
    );
  }
  function dedupeHrefs(hrefs) {
    return [...new Set(hrefs)];
  }
  function sortKeys(obj) {
    let sorted = {};
    let keys = Object.keys(obj).sort();
    for (let key of keys) {
      sorted[key] = obj[key];
    }
    return sorted;
  }
  function dedupeLinkDescriptors(descriptors, preloads) {
    let set = /* @__PURE__ */ new Set();
    let preloadsSet = new Set(preloads);
    return descriptors.reduce((deduped, descriptor) => {
      let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
      if (alreadyModulePreload) {
        return deduped;
      }
      let key = JSON.stringify(sortKeys(descriptor));
      if (!set.has(key)) {
        set.add(key);
        deduped.push({ key, link: descriptor });
      }
      return deduped;
    }, []);
  }
  function useDataRouterContext2() {
    let context = React8.useContext(DataRouterContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterContext.Provider> element"
    );
    return context;
  }
  function useDataRouterStateContext() {
    let context = React8.useContext(DataRouterStateContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    );
    return context;
  }
  var FrameworkContext = React8.createContext(void 0);
  FrameworkContext.displayName = "FrameworkContext";
  function useFrameworkContext() {
    let context = React8.useContext(FrameworkContext);
    invariant2(
      context,
      "You must render this element inside a <HydratedRouter> element"
    );
    return context;
  }
  function usePrefetchBehavior(prefetch, theirElementProps) {
    let frameworkContext = React8.useContext(FrameworkContext);
    let [maybePrefetch, setMaybePrefetch] = React8.useState(false);
    let [shouldPrefetch, setShouldPrefetch] = React8.useState(false);
    let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
    let ref = React8.useRef(null);
    React8.useEffect(() => {
      if (prefetch === "render") {
        setShouldPrefetch(true);
      }
      if (prefetch === "viewport") {
        let callback = (entries) => {
          entries.forEach((entry) => {
            setShouldPrefetch(entry.isIntersecting);
          });
        };
        let observer = new IntersectionObserver(callback, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }
    }, [prefetch]);
    React8.useEffect(() => {
      if (maybePrefetch) {
        let id2 = setTimeout(() => {
          setShouldPrefetch(true);
        }, 100);
        return () => {
          clearTimeout(id2);
        };
      }
    }, [maybePrefetch]);
    let setIntent = () => {
      setMaybePrefetch(true);
    };
    let cancelIntent = () => {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    };
    if (!frameworkContext) {
      return [false, ref, {}];
    }
    if (prefetch !== "intent") {
      return [shouldPrefetch, ref, {}];
    }
    return [
      shouldPrefetch,
      ref,
      {
        onFocus: composeEventHandlers(onFocus, setIntent),
        onBlur: composeEventHandlers(onBlur, cancelIntent),
        onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
        onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
        onTouchStart: composeEventHandlers(onTouchStart, setIntent)
      }
    ];
  }
  function composeEventHandlers(theirHandler, ourHandler) {
    return (event) => {
      theirHandler && theirHandler(event);
      if (!event.defaultPrevented) {
        ourHandler(event);
      }
    };
  }
  function PrefetchPageLinks({ page, ...linkProps }) {
    let rsc = useIsRSCRouterContext();
    let { nonce: contextNonce } = useFrameworkContext();
    let { router } = useDataRouterContext2();
    let matches = React8.useMemo(
      () => matchRoutes(router.routes, page, router.basename),
      [router.routes, page, router.basename]
    );
    if (!matches) {
      return null;
    }
    if (linkProps.nonce == null && contextNonce) {
      linkProps = { ...linkProps, nonce: contextNonce };
    }
    if (rsc) {
      return /* @__PURE__ */ React8.createElement(RSCPrefetchPageLinksImpl, { page, matches, ...linkProps });
    }
    return /* @__PURE__ */ React8.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
  }
  function useKeyedPrefetchLinks(matches) {
    let { manifest, routeModules } = useFrameworkContext();
    let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React8.useState([]);
    React8.useEffect(() => {
      let interrupted = false;
      void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
        (links) => {
          if (!interrupted) {
            setKeyedPrefetchLinks(links);
          }
        }
      );
      return () => {
        interrupted = true;
      };
    }, [matches, manifest, routeModules]);
    return keyedPrefetchLinks;
  }
  function RSCPrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { future } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "rsc"
      );
      let hasSomeRoutesWithShouldRevalidate = false;
      let targetRoutes = [];
      for (let match of nextMatches) {
        if (typeof match.route.shouldRevalidate === "function") {
          hasSomeRoutesWithShouldRevalidate = true;
        } else {
          targetRoutes.push(match.route.id);
        }
      }
      if (hasSomeRoutesWithShouldRevalidate && targetRoutes.length > 0) {
        url.searchParams.set("_routes", targetRoutes.join(","));
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      page,
      location,
      nextMatches
    ]);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })));
  }
  function PrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { future, manifest, routeModules } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let { loaderData, matches } = useDataRouterStateContext();
    let newMatchesForData = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "data"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let newMatchesForAssets = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "assets"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let routesParams = /* @__PURE__ */ new Set();
      let foundOptOutRoute = false;
      nextMatches.forEach((m) => {
        let manifestRoute = manifest.routes[m.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return;
        }
        if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) {
          foundOptOutRoute = true;
        } else if (manifestRoute.hasClientLoader) {
          foundOptOutRoute = true;
        } else {
          routesParams.add(m.route.id);
        }
      });
      if (routesParams.size === 0) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "data"
      );
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set(
          "_routes",
          nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
        );
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      loaderData,
      location,
      manifest,
      newMatchesForData,
      nextMatches,
      page,
      routeModules
    ]);
    let moduleHrefs = React8.useMemo(
      () => getModuleLinkHrefs(newMatchesForAssets, manifest),
      [newMatchesForAssets, manifest]
    );
    let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
      // these don't spread `linkProps` because they are full link descriptors
      // already with their own props
      /* @__PURE__ */ React8.createElement(
        "link",
        {
          key,
          nonce: linkProps.nonce,
          ...link,
          crossOrigin: link.crossOrigin ?? linkProps.crossOrigin
        }
      )
    )));
  }
  function mergeRefs(...refs) {
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }
  var isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  try {
    if (isBrowser2) {
      window.__reactRouterVersion = // @ts-expect-error
      "7.18.3";
    }
  } catch (e2) {
  }
  function HistoryRouter({
    basename,
    children,
    history,
    useTransitions
  }) {
    let [state, setStateImpl] = React10.useState({
      action: history.action,
      location: history.location
    });
    let setState = React10.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React10.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React10.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        useTransitions
      }
    );
  }
  HistoryRouter.displayName = "unstable_HistoryRouter";
  var Link = React10.forwardRef(
    function LinkWithRef({
      onClick,
      discover = "render",
      prefetch = "none",
      relative,
      reloadDocument,
      replace: replace2,
      mask,
      state,
      target,
      to,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...rest
    }, forwardedRef) {
      let { basename, navigator: navigator2, useTransitions } = React10.useContext(NavigationContext);
      let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX.test(to);
      let parsed = parseToInfo(to, basename);
      to = parsed.to;
      let href = useHref(to, { relative });
      let location = useLocation();
      let maskedHref = null;
      if (mask) {
        let resolved = resolveTo(
          mask,
          [],
          location.mask ? location.mask.pathname : "/",
          true
        );
        if (basename !== "/") {
          resolved.pathname = resolved.pathname === "/" ? basename : joinPaths([basename, resolved.pathname]);
        }
        maskedHref = navigator2.createHref(resolved);
      }
      let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
        prefetch,
        rest
      );
      let internalOnClick = useLinkClickHandler(to, {
        replace: replace2,
        mask,
        state,
        target,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      });
      function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) {
          internalOnClick(event);
        }
      }
      let isSpaLink = !(parsed.isExternal || reloadDocument);
      let link = (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        /* @__PURE__ */ React10.createElement(
          "a",
          {
            ...rest,
            ...prefetchHandlers,
            href: (isSpaLink ? maskedHref : void 0) || parsed.absoluteURL || href,
            onClick: isSpaLink ? handleClick : onClick,
            ref: mergeRefs(forwardedRef, prefetchRef),
            target,
            "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
          }
        )
      );
      return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React10.createElement(React10.Fragment, null, link, /* @__PURE__ */ React10.createElement(PrefetchPageLinks, { page: href })) : link;
    }
  );
  Link.displayName = "Link";
  var NavLink = React10.forwardRef(
    function NavLinkWithRef({
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      viewTransition,
      children,
      ...rest
    }, ref) {
      let path = useResolvedPath(to, { relative: rest.relative });
      let location = useLocation();
      let routerState = React10.useContext(DataRouterStateContext);
      let { navigator: navigator2, basename } = React10.useContext(NavigationContext);
      let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useViewTransitionState(path) && viewTransition === true;
      let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
      let locationPathname = location.pathname;
      let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
      }
      if (nextLocationPathname && basename) {
        nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
      }
      const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
      let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
      let renderProps = {
        isActive,
        isPending,
        isTransitioning
      };
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp(renderProps);
      } else {
        className = [
          classNameProp,
          isActive ? "active" : null,
          isPending ? "pending" : null,
          isTransitioning ? "transitioning" : null
        ].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
      return /* @__PURE__ */ React10.createElement(
        Link,
        {
          ...rest,
          "aria-current": ariaCurrent,
          className,
          ref,
          style,
          to,
          viewTransition
        },
        typeof children === "function" ? children(renderProps) : children
      );
    }
  );
  NavLink.displayName = "NavLink";
  var Form = React10.forwardRef(
    ({
      discover = "render",
      fetcherKey,
      navigate,
      reloadDocument,
      replace: replace2,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...props
    }, forwardedRef) => {
      let { useTransitions } = React10.useContext(NavigationContext);
      let submit = useSubmit();
      let formAction = useFormAction(action, { relative });
      let formMethod = method.toLowerCase() === "get" ? "get" : "post";
      let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX.test(action);
      let submitHandler = (event) => {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = submitter?.getAttribute("formmethod") || method;
        let doSubmit = () => submit(submitter || event.currentTarget, {
          fetcherKey,
          method: submitMethod,
          navigate,
          replace: replace2,
          state,
          relative,
          preventScrollReset,
          viewTransition,
          defaultShouldRevalidate
        });
        if (useTransitions && navigate !== false) {
          React10.startTransition(() => doSubmit());
        } else {
          doSubmit();
        }
      };
      return /* @__PURE__ */ React10.createElement(
        "form",
        {
          ref: forwardedRef,
          method: formMethod,
          action: formAction,
          onSubmit: reloadDocument ? onSubmit : submitHandler,
          ...props,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      );
    }
  );
  Form.displayName = "Form";
  function ScrollRestoration({
    getKey,
    storageKey,
    ...props
  }) {
    let remixContext = React10.useContext(FrameworkContext);
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    useScrollRestoration({ getKey, storageKey });
    let ssrKey = React10.useMemo(
      () => {
        if (!remixContext || !getKey) return null;
        let userKey = getScrollRestorationKey(
          location,
          matches,
          basename,
          getKey
        );
        return userKey !== location.key ? userKey : null;
      },
      // Nah, we only need this the first time for the SSR render
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    if (!remixContext || remixContext.isSpaMode) {
      return null;
    }
    let restoreScroll = ((storageKey2, restoreKey) => {
      if (!window.history.state || !window.history.state.key) {
        let key = Math.random().toString(32).slice(2);
        window.history.replaceState({ key }, "");
      }
      try {
        let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
        let storedY = positions[restoreKey || window.history.state.key];
        if (typeof storedY === "number") {
          window.scrollTo(0, storedY);
        }
      } catch (error) {
        console.error(error);
        sessionStorage.removeItem(storageKey2);
      }
    }).toString();
    if (props.nonce == null && remixContext?.nonce) {
      props.nonce = remixContext.nonce;
    }
    return /* @__PURE__ */ React10.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
          __html: `(${restoreScroll})(${escapeHtml(
            JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)
          )}, ${escapeHtml(JSON.stringify(ssrKey))})`
        }
      }
    );
  }
  ScrollRestoration.displayName = "ScrollRestoration";
  function getDataRouterConsoleError2(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext3(hookName) {
    let ctx = React10.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError2(hookName));
    return ctx;
  }
  function useDataRouterState2(hookName) {
    let state = React10.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError2(hookName));
    return state;
  }
  function useLinkClickHandler(to, {
    target,
    replace: replaceProp,
    mask,
    state,
    preventScrollReset,
    relative,
    viewTransition,
    defaultShouldRevalidate,
    useTransitions
  } = {}) {
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to, { relative });
    return React10.useCallback(
      (event) => {
        if (shouldProcessLinkClick(event, target)) {
          event.preventDefault();
          let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
          let doNavigate = () => navigate(to, {
            replace: replace2,
            mask,
            state,
            preventScrollReset,
            relative,
            viewTransition,
            defaultShouldRevalidate
          });
          if (useTransitions) {
            React10.startTransition(() => doNavigate());
          } else {
            doNavigate();
          }
        }
      },
      [
        location,
        navigate,
        path,
        replaceProp,
        mask,
        state,
        target,
        to,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      ]
    );
  }
  var fetcherId = 0;
  var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
  function useSubmit() {
    let { router } = useDataRouterContext3(
      "useSubmit"
      /* UseSubmit */
    );
    let { basename } = React10.useContext(NavigationContext);
    let currentRouteId = useRouteId();
    let routerFetch = router.fetch;
    let routerNavigate = router.navigate;
    return React10.useCallback(
      async (target, options = {}) => {
        let { action, method, encType, formData, body } = getFormSubmissionInfo(
          target,
          basename
        );
        if (options.navigate === false) {
          let key = options.fetcherKey || getUniqueFetcherId();
          await routerFetch(key, currentRouteId, options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            flushSync: options.flushSync
          });
        } else {
          await routerNavigate(options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            flushSync: options.flushSync,
            viewTransition: options.viewTransition
          });
        }
      },
      [routerFetch, routerNavigate, basename, currentRouteId]
    );
  }
  function useFormAction(action, { relative } = {}) {
    let { basename } = React10.useContext(NavigationContext);
    let routeContext = React10.useContext(RouteContext);
    invariant(routeContext, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    let path = { ...useResolvedPath(action ? action : ".", { relative }) };
    let location = useLocation();
    if (action == null) {
      path.search = location.search;
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      let hasNakedIndexParam = indexValues.some((v2) => v2 === "");
      if (hasNakedIndexParam) {
        params.delete("index");
        indexValues.filter((v2) => v2).forEach((v2) => params.append("index", v2));
        let qs = params.toString();
        path.search = qs ? `?${qs}` : "";
      }
    }
    if ((!action || action === ".") && match.route.index) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    return createPath(path);
  }
  var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
  var savedScrollPositions = {};
  function getScrollRestorationKey(location, matches, basename, getKey) {
    let key = null;
    if (getKey) {
      if (basename !== "/") {
        key = getKey(
          {
            ...location,
            pathname: stripBasename(location.pathname, basename) || location.pathname
          },
          matches
        );
      } else {
        key = getKey(location, matches);
      }
    }
    if (key == null) {
      key = location.key;
    }
    return key;
  }
  function useScrollRestoration({
    getKey,
    storageKey
  } = {}) {
    let { router } = useDataRouterContext3(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    let navigation = useNavigation();
    React10.useEffect(() => {
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = "auto";
      };
    }, []);
    usePageHide(
      React10.useCallback(() => {
        if (navigation.state === "idle") {
          let key = getScrollRestorationKey(location, matches, basename, getKey);
          savedScrollPositions[key] = window.scrollY;
        }
        try {
          sessionStorage.setItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY,
            JSON.stringify(savedScrollPositions)
          );
        } catch (error) {
          warning(
            false,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
          );
        }
        window.history.scrollRestoration = "auto";
      }, [navigation.state, getKey, basename, location, matches, storageKey])
    );
    if (typeof document !== "undefined") {
      React10.useLayoutEffect(() => {
        try {
          let sessionPositions = sessionStorage.getItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY
          );
          if (sessionPositions) {
            savedScrollPositions = JSON.parse(sessionPositions);
          }
        } catch (e2) {
        }
      }, [storageKey]);
      React10.useLayoutEffect(() => {
        let disableScrollRestoration = router?.enableScrollRestoration(
          savedScrollPositions,
          () => window.scrollY,
          getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0
        );
        return () => disableScrollRestoration && disableScrollRestoration();
      }, [router, basename, getKey]);
      React10.useLayoutEffect(() => {
        if (restoreScrollPosition === false) {
          return;
        }
        if (typeof restoreScrollPosition === "number") {
          window.scrollTo(0, restoreScrollPosition);
          return;
        }
        try {
          if (location.hash) {
            let el2 = document.getElementById(
              decodeURIComponent(location.hash.slice(1))
            );
            if (el2) {
              el2.scrollIntoView();
              return;
            }
          }
        } catch {
          warning(
            false,
            `"${location.hash.slice(
              1
            )}" is not a decodable element ID. The view will not scroll to it.`
          );
        }
        if (preventScrollReset === true) {
          return;
        }
        window.scrollTo(0, 0);
      }, [location, restoreScrollPosition, preventScrollReset]);
    }
  }
  function usePageHide(callback, options) {
    let { capture } = options || {};
    React10.useEffect(() => {
      let opts = capture != null ? { capture } : void 0;
      window.addEventListener("pagehide", callback, opts);
      return () => {
        window.removeEventListener("pagehide", callback, opts);
      };
    }, [callback, capture]);
  }
  function useViewTransitionState(to, { relative } = {}) {
    let vtContext = React10.useContext(ViewTransitionContext);
    invariant(
      vtContext != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename } = useDataRouterContext3(
      "useViewTransitionState"
      /* useViewTransitionState */
    );
    let path = useResolvedPath(to, { relative });
    if (!vtContext.isTransitioning) {
      return false;
    }
    let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
  }

  // ../../opt/files/kit/index.tsx
  var import_jsx_runtime18 = __toESM(require_jsx_runtime());
  function RouteBridge() {
    const location = useLocation();
    const navigate = useNavigate();
    (0, import_react20.useEffect)(() => {
      window.instinctFile.route(location.pathname + location.search + location.hash);
    }, [location]);
    (0, import_react20.useEffect)(() => {
      const restore = (event) => navigate(event.detail, { replace: true });
      window.addEventListener("instinct-route", restore);
      return () => window.removeEventListener("instinct-route", restore);
    }, [navigate]);
    return null;
  }
  function FileRouter({ children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(MemoryRouter, { initialEntries: [window.instinctFile.initialRoute], children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(RouteBridge, {}),
      children
    ] });
  }

  // src/HeroName.tsx
  var import_react21 = __toESM(require_react());
  var import_jsx_runtime19 = __toESM(require_jsx_runtime());
  var S = [
    { l: "D", post: "DATA x DRAMA", say: "Data x drama" },
    { l: "I", post: "ICONIC HOOKS", say: "Iconic hooks" },
    { l: "Y", post: "CERTIFIED YAPPER", say: "Certified yapper" },
    { l: "A", post: "ALGORITHM OBSESSED", say: "Algorithm obsessed", end: true }
  ];
  function HeroName({ start = 0 }) {
    const [i, setI] = (0, import_react21.useState)(start);
    const [hov, setHov] = (0, import_react21.useState)(null);
    (0, import_react21.useEffect)(() => {
      if (hov !== null) return;
      const t = setInterval(() => setI((x) => (x + 1) % S.length), 2400);
      return () => clearInterval(t);
    }, [hov]);
    const active = hov ?? i;
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "hn", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "hn-tagrow", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { className: "hn-w", children: S[active].post }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("h1", { className: "hn-big", "aria-label": "Diya Nathwani: " + S.map((s) => s.say).join(", "), children: [
        S.map((s, k2) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "hn-l" + (k2 === active ? " is-on" : ""), onMouseEnter: () => setHov(k2), onMouseLeave: () => setHov(null), "aria-hidden": "true", children: s.l }, k2)),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "hn-l hn-dot", "aria-hidden": "true", children: "." })
      ] })
    ] });
  }

  // src/Title.tsx
  var import_jsx_runtime20 = __toESM(require_jsx_runtime());
  var P = {
    spade: "M12 2C9 6 3 9 3 14a4.5 4.5 0 0 0 7.6 3.2L9.5 22h5l-1.1-4.8A4.5 4.5 0 0 0 21 14c0-5-6-8-9-12z",
    heart: "M12 21C5 15.5 2 12.3 2 8.5A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 10 2.5c0 3.8-3 7-10 12.5z",
    diamond: "M12 1.5 21 12l-9 10.5L3 12z",
    club: "M12 2a4.3 4.3 0 0 0-3.4 7A4.3 4.3 0 1 0 10.8 17L9.5 22h5l-1.3-5a4.3 4.3 0 1 0 2.2-8A4.3 4.3 0 0 0 12 2z"
  };
  function Suit({ k: k2, c = "y" }) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { className: "suit suit-" + c, viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: P[k2] }) });
  }
  var PAIRS = [["diamond", "heart"], ["spade", "diamond"], ["heart", "club"], ["club", "spade"]];
  var n = 0;
  function Title({ pre, hl: hl2, post, center, id: id2, cls }) {
    if (cls) return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("h2", { className: cls + ((pre?.length || 0) + hl2.length > 27 && !cls.includes("is-mixed") ? " is-long" : ""), children: [
      pre && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "title-pre", children: pre }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "hk", children: hl2 }),
      post && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "title-post", children: post })
    ] });
    const [a, b2] = PAIRS[(id2 ?? n++) % PAIRS.length];
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("h2", { className: "dt" + (center ? " is-center" : "") + ((id2 ?? 0) % 2 ? " v-p" : " v-y"), "aria-label": [pre, hl2, post].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Suit, { k: a, c: "y" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "dt-words", "aria-hidden": "true", children: [
        pre && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "dt-pre", children: [
          pre,
          " "
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "dt-hl", children: hl2 }),
        post && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "dt-pre", children: [
          " ",
          post
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Suit, { k: b2, c: "p" })
    ] });
  }

  // src/photos/diya-events.jpg
  var diya_events_default = "./assets/RJPWS3EE.jpg";

  // src/GenreIcon.tsx
  var import_jsx_runtime21 = __toESM(require_jsx_runtime());
  function GenreIcon({ kind, className }) {
    const s = { fill: "#fff", stroke: "#141414", strokeWidth: 5, strokeLinejoin: "round", strokeLinecap: "round" };
    let body = null;
    if (kind === "think") body = /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", { d: "M14 18h72a8 8 0 0 1 8 8v38a8 8 0 0 1-8 8H48L28 88V72H14a8 8 0 0 1-8-8V26a8 8 0 0 1 8-8z", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("circle", { cx: "32", cy: "45", r: "5", fill: "#141414" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("circle", { cx: "50", cy: "45", r: "5", fill: "#141414" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("circle", { cx: "68", cy: "45", r: "5", fill: "#141414" })
    ] });
    if (kind === "music") body = /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", { d: "M38 70V20l46-10v50", ...s, fill: "none", strokeWidth: 7 }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", { d: "M38 20l46-10v14L38 34z", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("ellipse", { cx: "27", cy: "72", rx: "14", ry: "11", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("ellipse", { cx: "73", cy: "62", rx: "14", ry: "11", ...s })
    ] });
    if (kind === "film") body = /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("circle", { cx: "30", cy: "26", r: "15", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("circle", { cx: "62", cy: "22", r: "18", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("rect", { x: "10", y: "42", width: "60", height: "38", rx: "6", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", { d: "M70 54l22-12v38L70 68z", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("circle", { cx: "30", cy: "26", r: "4", fill: "#141414" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("circle", { cx: "62", cy: "22", r: "5", fill: "#141414" })
    ] });
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("svg", { className, viewBox: "0 0 100 100", "aria-hidden": "true", children: body });
  }

  // src/thumbs/d-walk.jpg
  var d_walk_default = "./assets/WHMA2ALD.jpg";

  // src/thumbs/d-cra.jpg
  var d_cra_default = "./assets/J4CIWBPV.jpg";

  // src/thumbs/d-mila.jpg
  var d_mila_default = "./assets/7RT5ZH34.jpg";

  // src/thumbs/d-founder.jpg
  var d_founder_default = "./assets/IWFNTYEV.jpg";

  // src/thumbs/d-pstrat.jpg
  var d_pstrat_default = "./assets/JSRGIRDM.jpg";

  // src/thumbs/d-news.jpg
  var d_news_default = "./assets/AZRQA3A4.jpg";

  // src/thumbs/d-fiction.jpg
  var d_fiction_default = "./assets/WOGFRNLE.jpg";

  // src/thumbs/d-novel.jpg
  var d_novel_default = "./assets/QK4PGT5D.jpg";

  // src/thumbs/d-gamified.jpg
  var d_gamified_default = "./assets/IVDS5N3Y.jpg";

  // src/thumbs/d-goodman.jpg
  var d_goodman_default = "./assets/A7LATOSQ.jpg";

  // src/thumbs/d-vidhi.jpg
  var d_vidhi_default = "./assets/RGGIDX4W.jpg";

  // src/thumbs/d-scripts.jpg
  var d_scripts_default = "./assets/XPANUF67.jpg";

  // src/thumbs/d-tools.jpg
  var d_tools_default = "./assets/5VQMVEAO.jpg";

  // src/thumbs/d-seller.jpg
  var d_seller_default = "./assets/TSWX5BQ5.jpg";

  // src/thumbs/d-statglow.jpg
  var d_statglow_default = "./assets/P6MJW5M6.jpg";

  // src/thumbs/d-fiscal.jpg
  var d_fiscal_default = "./assets/CCCH6TSV.jpg";

  // src/photos/love-podcasts.jpg
  var love_podcasts_default = "./assets/ARS6DUIL.jpg";

  // src/thumbs/volume3.jpg
  var volume3_default = "./assets/EDQJNRDF.jpg";

  // src/thumbs/luck.jpg
  var luck_default = "./assets/G66JJWFL.jpg";

  // src/thumbs/seekease.jpg
  var seekease_default = "./assets/FX3M2B7P.jpg";

  // src/thumbs/askiva.jpg
  var askiva_default = "./assets/JQSMRGUG.jpg";

  // src/thumbs/glow.jpg
  var glow_default = "./assets/YZ6FCLPJ.jpg";

  // src/thumbs/shock.jpg
  var shock_default = "./assets/5R6WT77H.jpg";

  // src/thumbs/b2b.jpg
  var b2b_default = "./assets/7GG7Q2WA.jpg";

  // src/thumbs/lg-pristilo.jpg
  var lg_pristilo_default = "./assets/HPZHSKX4.jpg";

  // src/thumbs/lg-amz.jpg
  var lg_amz_default = "./assets/5GRKOBKJ.jpg";

  // src/thumbs/lg-heltr.jpg
  var lg_heltr_default = "./assets/KCAWNZKI.jpg";

  // src/thumbs/lg-rltd.jpg
  var lg_rltd_default = "./assets/D4BAXOHL.jpg";

  // src/thumbs/lg-pocketfm.jpg
  var lg_pocketfm_default = "./assets/6RDO7DI7.jpg";

  // src/thumbs/naveen.jpg
  var naveen_default = "./assets/7DOEAXHJ.jpg";

  // src/thumbs/yash.jpg
  var yash_default = "./assets/ZWUBLP4Y.jpg";

  // src/App.tsx
  var import_react25 = __toESM(require_react());

  // src/ServicesPay.tsx
  var import_react22 = __toESM(require_react());

  // src/data.ts
  var EMAIL = "diyanathwani.media@gmail.com";
  var LINKEDIN = "https://www.linkedin.com/in/diya-nathwani6622";
  var drawers = [
    {
      key: "campaigns",
      label: "Campaigns & Strategies",
      blurb: "Ideas that get people talking.",
      pieces: [
        { title: "Zayke Ki Mehek", client: "House of Biryan", tag: "GTM + guerrilla", img: "biryan", text: "A full go\u2011to\u2011market plan: market-culture fit, positioning, supply chain, a 60\u201190 day contribution margin and retention model. Then the fun part: a scent-led guerrilla campaign that lets the biryani do the selling." },
        { title: "Walls That Raised Us", client: "Kukreja Builders, Nagpur", tag: "Launch + storytelling", img: "walls", text: 'Launch copy for Kukreja Paris City ("Redefining Royalty - brick by brick!") and a legacy campaign about the homes families grow up in. Selling belonging, not square feet.' },
        { title: "City In A Frame", client: "Kohinoor Viva City, Pune", tag: "Experiential", img: "city", text: "A future\u2011visualisation photo booth that puts buyers inside the view before the building exists. When you see it, you see yourself in it." },
        { title: "Find The Faces", client: "Stars N Celebs", tag: "Creator acquisition", img: "faces", text: "A campus creator hunt with college leaderboards and micro\u2011influencer loops, plus the talent\u2011registration strategy behind it. Students became the recruiters." },
        { title: "Nukkad se Netflix", client: "Yashita Singh, actress", tag: "Creative concept", img: "nukkad", text: 'A 14-page "How to Enter Bollywood" concept: a documented struggle told as a street-play series, ending in a hand-painted caravan premiere.' },
        { title: "Taste of Home, Miles Away", client: "Pristilo, Dubai", tag: "Social + UGC", text: "A 30-Day Dubai Fitness Challenge, a UGC concept for expat families and website stories (sesame as an Emirati superfood). Linked to a ~42% sales lift." },
        { title: "Luck shouldn\u2019t decide fame", client: "CreatorVerse", tag: "Marketing playbook", text: "A two\u2011sided creator\u2011economy playbook: 21 pages covering 80M+ creators, campus CAC of Rs 5-30 and a rate\u2011calculator viral drop." },
        { title: "Creator Revenue Architecture", client: "Own framework", tag: "Diya original", text: "A 7-stage system that turns creators into brands that can earn, starting from positioning. Built from watching too many talented people stay broke." },
        { title: "A multi-strategy walkthrough", client: "Web content strategy deck", tag: "Strategy deck", text: "Trend hijacking (Vanessa Hudgens and red light therapy), emotional pain scripts, repurposing and Google trust signals, in one deck." },
        { title: "Gamified event marketing", client: "CenturySoft", tag: "PR + moment marketing", text: "Gamified challenges, PR pushes and moment\u2011marketing campaigns that made a content company talk like a consumer brand." },
        { title: "Homepage + ads, QA\u2019d", client: "Goodman Creative (Daniel Goodman)", tag: "Web + Google Ads", text: "Homepage copy, Google Ads and QA, walked through on screen recordings." },
        { title: "Seek Ease", client: "Black Swan Co.", tag: "Mental wellness app", text: "Content strategy for a mental wellness app idea. Runner-up at Spirit @ Parivartan \u201923, IIT Delhi." },
        { title: "Helter, but strategic", client: "Heltr Skeltr", tag: "Content strategy", text: "A full content strategy, pitched as an assignment. Proof that I do homework before anyone asks." }
      ]
    },
    {
      key: "social",
      label: "Social Media Content",
      blurb: "Audits, reels, YouTube scripts and monetisation plans that people actually watch.",
      pieces: [
        { title: "The 3-volume brand", client: "Varun Agarwal", tag: "Personal brand system", text: "Perception audit, growth engine and execution layer for the entrepreneur and author with 147K followers, 1M+ book readers and 4M+ Ink Talk views." },
        { title: "The 3-second clarity test", client: "Ayush Wadhwa / @101xFounders", tag: "Instagram case study", text: 'A full content study of why @101xFounders grew, built on my CTP framework (Clarity, Trust, Predictability): username, bio, grid and the borrowed authority of India\u2019s top founder voices. Then 7 new content buckets to break the single-format ceiling, like "Jargon Breaker" (CAC, ROI and P&L in under 60 seconds), a "Founder Day X" binge series and trend-to-business reels.' },
        { title: "Reviewer to lifestyle brand", client: "Naveen Yadav", tag: "Positioning + monetisation", text: "A master plan to move a 100K+ film reviewer into a cinema culture and lifestyle brand, with growth and monetisation mapped out." },
        { title: "Founder-led B2B", client: "Sihr Salt", tag: "Instagram strategy", text: "A founder-led Instagram strategy for Bansharee, founder of a digital marketing agency, where the founder is the brand." },
        { title: "Shock-math in 5 seconds", client: "BigBrainCo (Ranveer Allahbadia)", tag: "Script analysis", text: "Why a hook failed, how to fix the first five seconds, and rewrite ideas that earn the next 55." },
        { title: "2025 Ka Manhoos Saal", client: "Melooha (Shark Tank India)", tag: "Paid ads, Hinglish", text: "Hinglish reel and Meta ad scripts for an AI astrology app, built on emotional pain hooks. Linked to a ~38% conversion lift." },
        { title: "58K views and counting", client: "Yash Garg (229K subscribers)", tag: "YouTube scripts", text: 'I wrote "Joining Manipal in 2026? BEWARE!!" for Yash Garg: 58K+ views, the most-viewed of his 24 uploads since March 2026, and the top YouTube result for "manipal 2026". Plus more tech-career scripts like "College v/s Branch" and "MIT Manipal 2026: Swarg, Soft Trap ya Smart Decision?"' },
        { title: "The 1-person AI business", client: "Ansh Mehra / Cutting Edge", tag: "YouTube script", text: '"Top 1-Person AI Businesses Sam Altman Bets Will Make You A Millionaire": research, structure and script.' },
        { title: "Pattern hunting", client: "Ansh Mehra / Cutting Edge School", tag: "YouTube strategy", text: "A pattern-finding report on top AI creators (Nate Herk, Nick Saraev, Greg Isenberg, Mo Bitar), a packaging framework and research walkthroughs." },
        { title: "Talking reels, A to Z", client: "Vidhi Chotai", tag: "Instagram + LinkedIn", text: "Ideation to execution for a creator: talking-reel scripts on the Barnum effect, brand colour, word-of-mouth marketing and more." },
        { title: "Phitkari, but make it glow", client: "Skincare roll-on", tag: "Ad script ideas", text: "Script ideas for an underarm brightening roll-on with phitkari (alum). Grandma\u2019s remedy, new packaging." },
        { title: "Dermatologist approved", client: "Red Light Therapy Digest", tag: "YouTube scripts", text: '"5 Best At-Home Laser Hair Removal Devices" and "Best LED Light Therapy Masks, According to Dermatologists", plus social.' },
        { title: "Money talks", client: "Investment Forum Company", tag: "YouTube + Instagram", text: "Scripts for YouTube and Instagram finance content." },
        { title: "Scripts with a pulse", client: "IG Reels", tag: "Reel scripts", text: 'A "Types of Age" script, a social media trailer and a raw personal script. Short, sharp, written to be said out loud.' },
        { title: "Kahani, in Hindi", client: "Pocket FM", tag: "Localisation", text: "Hindi localisation of an audio-series chapter for a creative writing test. Same story, new heartbeat." }
      ]
    },
    {
      key: "articles",
      label: "Articles & Blogs (B2B SaaS)",
      blurb: "Search-friendly, human-first, and read by a lot of people.",
      pieces: [
        { title: "300K+ readers a month", client: "Consumer Health Digest", tag: "Editorial + SEO", text: "Editorial and SEO for a flagship US health publication, reporting into a 12-writer team led across India and the US." },
        { title: "B2B, but make it clear", client: "Pepper: Harness AI, Talkspace, Atlan, Portkey AI", tag: "B2B tech content", text: "Content for AI and tech brands through Pepper, the content agency." },
        { title: "70+ pieces, one engine", client: "AMZ Ninja (Affinco)", tag: "E-commerce SEO", text: "Amazon and FBA guides, tool reviews, comparisons, pricing pages, a ROAS calculator and the homepage. Part of the work behind 18% CTR and 22% sign-up growth." },
        { title: "Listicles, reviews, face-offs", client: "Affinco network (AMZ Ninja, AFFNinja)", tag: "B2B SaaS articles", text: "Product reviews (Spocket, Perpetua, PiPiADS, Sell The Trend), comparisons (Helium 10 vs Quartile, Jungle Scout vs SmartScout, Minea vs PiPiADS), keyword and ROAS guides, and pricing pages. Filed in six neat buckets." },
        { title: "Tools, reviewed", client: "TweaksMe, Aff Ninja, AI Mojo, Blogging Eclipse", tag: "SaaS reviews", text: 'Reviews, coupons and comparisons: Originality AI, PiPiADS, Freed AI, Oxylabs, Beehiiv alternatives and "Is Affiliate Marketing Worth It".' },
        { title: "Seller\u2019s paradise", client: "Sellers Heaven (Affinco)", tag: "Marketplace content", text: 'About 24 pieces: Etsy tool reviews, export buyer guides, print-on-demand and an "Aaj Ka Gyaan" series on Indian marketplaces.' },
        { title: "Best Facial Moisturizers", client: "Gorgeous Girl", tag: "Beauty guide", text: "Built from scratch: studied the top 5 ranking sites, cleaned the product lists, ran traffic analysis and wrote 21 product entries." },
        { title: "Myth, busted", client: "Red Light Rays (Affinco)", tag: "Health content", text: 'Homepage, clinic page, editorial guidelines, review process and articles, including a "does it cause cancer?" myth buster.' },
        { title: "Red carpet, 27.2K+ reads", client: "CenturySoft network", tag: "Entertainment news", text: "Pop culture and news pieces, including a Pedro Pascal and Sydney Sweeney red carpet story with 27.2K+ traffic." },
        { title: "Breaking news, handled", client: "CenturySoft network", tag: "News writing", text: "A fast, careful news piece on Kourtney Kardashian\u2019s urgent fetal surgery. Speed without the tabloid tone." },
        { title: "When fiction becomes fact", client: "Affinco", tag: "Pop-culture feature", text: "AI girlfriends, from sci-fi screens to real apps. Research, subtopics, titles and the feature itself." },
        { title: "A novel about a robot", client: "Book news", tag: "News writing", text: 'A news piece on Sierra Greer\u2019s new novel "Annie Bot".' },
        { title: "Backlinks with manners", client: "Wellness Digest, Health Insiders, Glozine", tag: "Wellness content", text: "Backlink content, page reviews and wellness articles written for US audiences." }
      ]
    },
    {
      key: "pop",
      label: "Pop-culture Copies",
      blurb: "Iconic dialogues, bent into marketing truths.",
      pieces: [
        { title: "It's not extra. It's brand personality.", client: "Pop-culture copy", tag: "Copy 01", text: "Stop making boring content, sweetie.", img: "pop1" },
        { title: "Ek reel ki keemat tum kya jaano, client babu!", client: "Pop-culture copy", tag: "Copy 02", text: "", img: "pop2" },
        { title: "Utha le re Deva... is client ko utha le.", client: "Pop-culture copy", tag: "Copy 03", text: "Budget: \u20B90. Expectation: viral.", img: "pop3" },
        { title: "Campaign abhi baaki hai mere dost.", client: "Pop-culture copy", tag: "Copy 04", text: "One post \u2260 marketing.", img: "pop4" },
        { title: "Arre O Sambha, kitne conversions the?", client: "Pop-culture copy", tag: "Copy 05", text: "Reach se pet nahi bharta.", img: "pop5" },
        { title: "Welcome to the marketing world.", client: "Pop-culture copy", tag: "Copy 06", text: "It's chaos. You're gonna love it.", img: "pop6" }
      ]
    },
    {
      key: "writing",
      label: "Creative Writing & Thought Pieces",
      blurb: "The unpaid stuff, and the reason I do everything else.",
      pieces: [
        { title: "Mila toh Haathi, Gayi toh Pooch", client: "Personal", tag: "Personal essay", text: "A personal essay that sounds like a proverb and reads like a confession." }
      ]
    },
    {
      key: "podcast",
      label: "Podcast Writing",
      blurb: "Long-form thinking, written to be heard.",
      pieces: [
        { title: "The founder podcast", client: "Shantanu Deshpande (Bombay Shaving Company)", tag: "Podcast strategy", text: "A founder podcast strategy and the thinking behind long-form business content that people actually finish." },
        { title: "Podcast Strategy by Diya", client: "Own framework", tag: "Podcast strategy", text: "How to plan a podcast people finish: format, guests, hooks and the clips that travel." },
        { title: "My love for podcasts", client: "Personal", tag: "Podcast writing", text: "Why I think in episodes. Three shows hosted and one guest spot later, it checks out.", img: "love-podcasts" }
      ]
    },
    {
      key: "web",
      label: "Websites & Research",
      blurb: "Homepages that know what to say, and the research that told them.",
      pieces: [
        { title: "Level up your data game", client: "StatGlow", tag: "SaaS copy + wireframes", text: "Homepage copy and wireframe drafts for an AI and data science company, Oct 2023 - Mar 2024." },
        { title: "A rebrand, page by page", client: "Fiscaleye", tag: "Website rebrand", text: "Full site structure, content strategy and collateral for a finance brand\u2019s new website." },
        { title: "Affordable luxury", client: "Kohinoor Viva City", tag: "Real estate content", text: 'Content for 2 BHK homes that makes "affordable luxury" sound like a promise, not a cliche.' },
        { title: "Glow, wireframed", client: "Red Light Therapy Rays", tag: "Homepage wireframe", text: "A homepage wireframe that turns a science-heavy product into a clear buying journey." },
        { title: "AskIVA", client: "IIT\xA0Madras\xA0BS", tag: "Chatbot UX", text: "User stories, storyboard, user types and low-fidelity wireframes for a student AI chatbot." },
        { title: "Brands inside LLMs", client: "AI growth startup for D2C", tag: "Insights + content", text: "Qualitative insights and content on AI SEO, brand mentions in LLMs and social listening." },
        { title: "Reputation, researched", client: "Sagar Bhatt", tag: "Research reports", text: "Global marketing communications and branding reports, including an Airbus reputation study and a brand equity presentation." }
      ]
    }
  ];
  var numbers = [
    { n: "18", s: "%", l: "CTR growth at Affinco" },
    { n: "22", s: "%", l: "Sign-up growth at Affinco" },
    { n: "553.8", s: "%", l: "Instagram engagement growth, Paradox" },
    { n: "399.7", s: "%", l: "Instagram reach growth, Paradox" },
    { n: "300", s: "K+", l: "Monthly readers, Consumer Health Digest" },
    { n: "12.5", s: "%", l: "Engagement rate, about 2x benchmark" },
    { n: "~38", s: "%", l: "Conversion lift, Melooha ad scripts" },
    { n: "~42", s: "%", l: "Sales lift, Pristilo campaign" }
  ];
  var services = [
    ["Brand & content strategy", 'Positioning, messaging hierarchies, content pillars and territories, go-to-market. The "what do we even say" part, solved first.'],
    ["Editorial leadership", "Teams of writers, calendars, SOPs, QA and AI-assisted workflows that cut production time by about 30%. I have run a 12-writer team across India and the US."],
    ["SEO & long-form", "Search intent, topic clusters, E\u2011E\u2011A\u2011T, entity SEO, AEO and GEO. Written for health, beauty, SaaS and e\u2011commerce readers who can smell fluff."],
    ["Social & creator growth", "Founder and creator brand systems, Instagram and YouTube audits, reels, carousels and the monetisation plan behind them."],
    ["Scripts & campaign copy", "Ad, reel, YouTube and podcast scripts in English and Hinglish. Launch lines, taglines, guerrilla and experiential ideas."],
    ["AI-native content ops", "LLM trainer (Soul AI), corporate trainer on AI in Marketing, and a daily practice of prompt libraries, AI QA and faster research."]
  ];
  var journey = {
    corporate: [
      { y: "2024 - now", r: "Independent Content & Brand Strategy Consultant", o: "Founders, brands and creators", d: "**20+ clients** and **35+ end\u2011to\u2011end projects**\n**Brands:** Atlan, Harness AI, Portkey AI, Pepper, Melooha, Pristilo, House of Biryan, Kukreja Builders, Kohinoor Viva City\n**Creators:** Varun Agarwal, Yash Garg, Yashita Singh\n**Projects:** positioning and GTM, launch campaigns, brand systems, ad and YouTube scripts, SEO and web copy\n**AI trainer:** Soul AI (Project Mercury), LLM training and GenAI prompts\n**Corporate training:** live sessions on **AI in Marketing** for corporate teams" },
      { y: "2024", r: "Content Strategist", o: "Affinco Solutions, Nagpur", d: "Content strategy for an **AI SaaS and e\u2011commerce** publisher\n**18% CTR growth**, **22% sign-up growth**\n**3 junior editors** mentored" },
      { y: "2023", r: "Content Editor", o: "CenturySoft, Nagpur", d: "Led **12 writers** across India and the US\nHealth, beauty and wellness publications including **Consumer Health Digest**" },
      { y: "2022 - 23", r: "Content Creation Intern", o: "International Centre for Clean Water (IIT Madras initiative)", d: "Content for a **clean water research centre** in Chennai" },
      { y: "2022 - 23", r: "Head of Content, Team Professionals", o: "Paradox, IIT Madras BS annual fest", d: "Led the content team for a **3,000+ student fest**\n**25+ live formats**, **+3.5K followers**, **12.5% engagement**" },
      { y: "2022", r: "Business Development & Research Intern", o: "Younity Community", d: "Remote **research** and **business development**\nWhere the curiosity habit started" }
    ],
    education: [
      { y: "2021 - 2026", r: "BS in Data Science & Applications", o: "IIT Madras", d: "First batch\n**Diplomas** in Programming and Data Science\n**Minor** in Economics & Finance (Corporate Finance, Managerial Economics)" },
      { y: "2020 - 2023", r: "BBA", o: "Gondwana University", d: "Marketing, business and a lot of case studies." },
      { y: "Always", r: "Short courses", o: "Terribly Tiny Tales, Google, GenAI Mastermind", d: "**Writing That Sells Pro**, **Google Ads Creative**\n7-day **Generative AI Mastermind** workshop" }
    ],
    milestones: [
      { y: "2022", r: "Paradox in Saavan", o: "Virtual events", d: "Content for virtual events with **1,700+ attendees**" },
      { y: "2022 - 23", r: "Central Media Team, Paradox", o: "Content Coordinator", d: "**399.7%** Instagram reach growth\n**553.8%** engagement growth" },
      { y: "2023", r: "Paradox in Margazhi \u201923", o: "Coordinator, Design & Content", d: "Certificate of Recognition from the IIT\xA0Madras\xA0BS faculty." },
      { y: "2022 - 23", r: "Team Professionals (Entrepreneurship)", o: "Content Specialist", d: "Organised and hosted speaker sessions on AI, innovation and digital marketing, working with **Padma Shri Prof. Ashok Jhunjhunwala** and **Prof. G Venkatesh**" },
      { y: "2023", r: "Safar car-pooling app", o: "Gondwana University", d: "**Second runner-up**, Innovation & Ideation Competition" },
      { y: "2025 - 26", r: "India Film Project", o: "Season 15", d: "**Nominee**, 50 Hour Writing Challenge, think piece category" }
    ]
  };
  var clientGroups = [
    { k: "Brands & companies", items: ["Pepper", "Harness AI", "Talkspace", "Atlan", "Portkey AI", "Melooha", "Pristilo", "StatGlow", "Fiscaleye", "Goodman Creative", "House of Biryan", "Sihr Salt", "Stars N Celebs", "Investment Forum Company"] },
    { k: "Publishers", items: ["Consumer Health Digest", "Health Insiders", "Gorgeous Girl", "Wellness Digest", "Red Light Therapy Digest", "AMZ Ninja", "Sellers Heaven", "Red Light Rays", "Affinco", "CenturySoft"] },
    { k: "Real estate", items: ["Kukreja Builders", "Kohinoor Viva City"] },
    { k: "Creators & founders", items: ["Varun Agarwal", "Yash Garg (229K)", "Naveen Yadav", "Ansh Mehra", "BigBrainCo", "Ayush Wadhwa / 101xFounders", "Vidhi Chotai", "Yashita Singh", "Venkateshwaran Giri", "Shrirang Siras", "Darshan Thakral"] },
    { k: "Institutions", items: ["IIT Madras", "ICCW", "Paradox", "Soul AI", "Younity"] }
  ];
  var trophies = [
    { y: "2025", t: "IFP Season 15 nominee", s: "Think piece, 50 Hour Writing Challenge", e: "\u{1F3AC}" },
    { y: "2024", t: "Writing That Sells Pro", s: "Terribly Tiny Tales", e: "\u270D\uFE0F" },
    { y: "2023", t: "Spirit @ Parivartan runner-up", s: "Seek Ease, IIT Delhi", e: "\u{1F948}" },
    { y: "2026", t: "Featured in BS Insider", s: "IIT Madras, April 2026", e: "\u{1F4F0}" },
    { y: "2025", t: "Google Ads Creative", s: "Google certification", e: "\u{1F3AF}" },
    { y: "2023", t: "Certificate of Recognition", s: "Paradox in Margazhi \u201923, IIT Madras", e: "\u{1F3C5}" },
    { y: "2023", t: "Safar, second runner-up", s: "Innovation & Ideation, Gondwana University", e: "\u{1F697}" },
    { y: "Now", t: "15+ LinkedIn recommendations", s: "From clients, managers and her own team", e: "\u{1F4AC}" }
  ];
  var coreTools = ["ChatGPT", "Claude", "SEMrush", "Ahrefs", "GA4", "Search Console", "Google Ads", "Meta Business Suite", "WordPress", "Canva", "Notion", "HubSpot"];
  var tools = ["ChatGPT", "Claude", "Gemini", "Perplexity", "NotebookLM", "Jasper", "Copy.ai", "Writesonic", "Notion AI", "Midjourney", "Ideogram", "Grammarly", "Originality.ai", "Copyleaks", "SEMrush", "Ahrefs", "Ubersuggest", "SurferSEO", "Yoast", "GA4", "Search Console", "Google Trends", "Keyword Planner", "Tag Manager", "Google Ads", "Meta Business Suite", "Meta Ads Library", "WordPress", "Elementor", "Beehiiv", "Substack", "Medium", "Wix", "Canva", "Figma", "CapCut", "Premiere Pro", "Illustrator", "Notion", "Slack", "Trello", "Airtable", "ClickUp", "HubSpot", "Google Workspace", "Excel"];
  var frameworks = [
    ["Copy", "AIDA, PAS, FAB, PASTOR, hooks, direct response, UX writing"],
    ["SEO", "E\u2011E\u2011A\u2011T, intent mapping, topic clusters, entity SEO, AEO, GEO"],
    ["Funnels", "TOFU\u2011MOFU\u2011BOFU, Hero\u2011Hub-Help, pillars, territories"],
    ["Business", "STP, 4Ps/7Ps, PESTLE, Porter, Blue Ocean, GTM, CAC and contribution margin"],
    ["Psychology", "Barnum effect, FOMO, social proof, reciprocity, insight mining"],
    ["Culture", "Moment marketing, trend hijacking, memes, UGC, guerrilla, experiential"]
  ];
  var notes = [
    ["CTP: Clarity, Trust, Predictability", "Before I look at your reach, I ask three things. Can people tell what you do in one line? Do they believe you? Do they know what they get if they follow you? Fix those and the algorithm gets much friendlier."],
    ["Identity in the first 5 seconds", 'The first five seconds of a reel are not for information. They tell the viewer "this is for someone like you". Get that calibration right and the rest of the script gets watched.'],
    ["Creator Revenue Architecture", "My 7-stage system for turning a creator into a brand that earns. It starts with positioning, not sponsorships, because a clear brand is what makes money repeatable."],
    ["Hero, Hub, Help", "Big moments that get attention, regular formats that build habit, and useful content that answers search. Most brands only do one. The good ones plan all three."],
    ["Trend hijacking, with a brief", "A trend only works if it carries your message. I once tied a celebrity\u2019s red light therapy moment to a skincare publisher\u2019s content plan. Relevance first, virality second."],
    ["Pain before product", 'People buy relief, not features. The Melooha scripts opened with the feeling ("2025 ka manhoos saal") and only then offered the fix. That order matters.']
  ];
  var faqs = [
    ["What kind of role are you looking for?", "Full-time content strategy, brand or editorial leadership roles, in Mumbai or remote. I also take on select consulting projects with founders and brands."],
    ["Are you a writer or a strategist?", "Both, in that order of hours. I decide what should be said and why, then I can write it, brief it, or build the team and system that ships it."],
    ["Which industries do you know?", "Health, beauty and wellness (US publications), B2B SaaS and AI, e\u2011commerce, D2C food, real estate, astrology, edtech, finance and the creator economy."],
    ["Do you write in Hindi and Hinglish?", "Yes. Hinglish ad and reel scripts are some of my best-performing work. I speak English, Hindi, Marathi and Gujarati."],
    ["How do you use AI?", "A lot, and carefully. I have trained LLMs, taught AI in marketing to corporate teams, and I use AI for research, drafts and QA. The judgment stays human."],
    ["How do we start?", "Send me an email with what you are working on. I usually reply with questions before I reply with ideas."]
  ];
  var PORTFOLIO_ROOT = "https://drive.google.com/drive/folders/1ntvhZC00VXg9IUcfs-eDVRhMMK0892JY";
  var F2 = (id2) => `https://drive.google.com/drive/folders/${id2}`;
  var D = (id2) => `https://drive.google.com/file/d/${id2}/view`;
  var G2 = (id2) => `https://docs.google.com/document/d/${id2}/edit`;
  var LINKS = {
    "Zayke Ki Mehek": D("1kuxhdorkbKWSZykKaR9ighgdrjMovJYv"),
    "Nukkad se Netflix": D("1HbjMqGhRyRqtpZjIl-KCqDCuULmCXeoq"),
    "A multi-strategy walkthrough": D("11s2SEht5gFAAFqX_EFWLFAqvRYBRi31c"),
    "The 3-volume brand": D("1tgPvaOq6cosSPPkM7ymIGH91WAPsG0E_"),
    "Reviewer to lifestyle brand": D("1fVKVwgcHdNASVZ8z4Z8QOcwA8ks2AeR9"),
    "Founder-led B2B": D("1joujAJCB8uWUgGWn0qIZHaZgcZd5a1BU"),
    "Shock-math in 5 seconds": D("1gVJy_bCQokIhFTxXZb5i6A-M63xJmSSa"),
    "Creator Revenue Architecture": D("1OYOlkAsARJA590fXT4afSlOg6k5bp-zv"),
    "Scripts with a pulse": F2("1lcGR290_MSTP4eonNqtPkMvRZtDy-pga"),
    "Listicles, reviews, face-offs": F2("17qi05U5K-AuPnXxZolRwQTxCk_ZvYKDd"),
    "Breaking news, handled": D("153VeOXAB1kGbn1WgBUF5WFER9kbaqM64"),
    "Mila toh Haathi, Gayi toh Pooch": D("1KiGNwP5QBm8ii7uULWhlQRqgbxTPkZ5x"),
    "Ansuni": "https://youtu.be/tBJoXLpQn18?si=AUZb4LGcFJY9hJ96",
    "Pop-culture copies": F2("1Fzj79grt9WLlvaUpWbMR_bmpHiN2y9z8"),
    "The founder podcast": D("10XBnddM5xrrIQmbCNdyrrfkqJ14gQx0Q"),
    "Podcast Strategy by Diya": D("1CePBh530tk9c8Kt1BjJLP4_b7U8dMQxT"),
    "My love for podcasts": "https://youtu.be/VzfMYTQWEqs?si=T1_OrwLvsXnPpH1E",
    "Walls That Raised Us": G2("1lSHOJPShvMnURQ8giRIUlkvf_QCHCecH8t2dMP7KHo4"),
    "City In A Frame": G2("11RS1gev0TcPj8QUzv5wmP6pkhakjkK2Apy_ZxtaGvPM"),
    "Affordable luxury": G2("1nNGUWQghwKRNWH-NEiP1iePoCFMaozKEyaeZXvrnGC4"),
    "Find The Faces": D("1nYYxb5wsK63dwNZx8IzCCW3vhPfbouLb"),
    "Taste of Home, Miles Away": F2("1hvJRASC4WufmYvBfD_Zd1a7drNRaGPly"),
    "Gamified event marketing": F2("17Us0ImXZ63FRQdl4l6-_UkQW9OLLvyCt"),
    "The 3-second clarity test": F2("1C7PGEbhwUPI8CkNnG_MPmHg4lTuxCGab"),
    "Talking reels, A to Z": F2("1g75HOOpLrG7s2Uq1_5RDSzxTz2pLwoS4"),
    "Pattern hunting": D("1G7misreeeOMDYT9aLNQ_SabCzce6O-Bz"),
    "Luck shouldn\u2019t decide fame": D("1V98qfDqRltkq-xfHz6HSximQBizk8Cfi"),
    "2025 Ka Manhoos Saal": F2("1NAKV8fSitW4o8rDf-HeVZrFgK2uUpvQN"),
    "The 1-person AI business": F2("1WH6ik-HagXk1IOeJH8jCBXts4_M6mOpe"),
    "58K views and counting": "https://youtu.be/ZVm2Nn70GhY",
    "Dermatologist approved": "https://youtu.be/Rx0zd38S_bg",
    "Red carpet, 27.2K+ reads": "https://www.redlighttherapydigest.com/sydney-sweeney-skincare-solawave-wand",
    "300K+ readers a month": "https://www.instagram.com/consumerhealthdigest/",
    "Glow, wireframed": G2("1dZJ3iqAp8NstVhdmUSNnoZA3KUEc3TDJ0Xou7y1AsyY"),
    "Breakthrough": "https://youtu.be/9L3ntS7tvsY",
    "Kahani, in Hindi": D("1Fdrwsjd9kC2InsaJHmwDOn2kBAD7c8cV"),
    "70+ pieces, one engine": F2("1p0PgrH9r4G2LWb5NMvnXY9DeJxK8MCha"),
    "Seller\u2019s paradise": F2("1p0PgrH9r4G2LWb5NMvnXY9DeJxK8MCha"),
    "Myth, busted": F2("1p0PgrH9r4G2LWb5NMvnXY9DeJxK8MCha"),
    "Tools, reviewed": F2("1p0PgrH9r4G2LWb5NMvnXY9DeJxK8MCha"),
    "Level up your data game": F2("10-5mD5kzNm-jz75jHtmLUKj90PCexW0I"),
    "A rebrand, page by page": F2("1tbwjIkGzpr7K1DY8rQfCv75IfwWxoUgL"),
    "Homepage + ads, QA\u2019d": F2("1TC3Yju4A5a6E_W7GnsHGCAzr2FS0slRv"),
    "AskIVA": D("1GvxpRtB_EVR8_ZzMj1IBoY33H3Webbtj"),
    "Reputation, researched": F2("1_T2Hl-5YOOVAOmeyD4iejZl2uEPIUB9s"),
    "Seek Ease": D("1R0TuUEIwcqqZ3zwzH2k5uoIajDg0ktlr"),
    "Helter, but strategic": D("1bIl1Thu_4y3Ru6dJD2SyB_sypoxVzGq1"),
    "Phitkari, but make it glow": D("1AFzN6sn4iBXf49ziscUjfpVCSJZ9MXE3"),
    "When fiction becomes fact": "https://docs.google.com/document/d/1G1yDOCKczG5DueizqeJCkjeKG2OeFwYDdhnGM2cK_Wc/edit",
    "A novel about a robot": "https://docs.google.com/document/d/1KGXKFxupYTrj27o-CXpH1DEkkDzIIIyNo2do8fro4N4/edit",
    "The Invisible Architect": G2("18tOTkpvnfTnMxvhCx2zQCopA1iOHqk7pzyjsVcfcwp8")
  };
  var linkFor = (title) => LINKS[title] ?? PORTFOLIO_ROOT;
  var RESULTS_FOLDER = F2("1UPUKhps7blzQB9cj4gCmQ4e7HYytGAtA");
  var proofs = [
    { k: "YouTube, Yash Garg (229K subs)", t: "Beat every recent video", d: '"Joining Manipal in 2026? BEWARE!!", which I wrote.\n58.7K views: #1 on his channel right now among recent uploads, the most-viewed of his 24 videos since March 2026, about 4x their median (15K).\n#1 on YouTube search for "manipal 2026", top 2 for "Manipal".', img: "yash", href: "https://youtu.be/ZVm2Nn70GhY" },
    { k: "Brut India, Yashita Singh", t: "2M views on Brut", d: "Brut India featured Yashita Singh on being an outsider in the film industry. I wrote and strategised her Nukkad Naatak series.", img: "brut", href: "https://www.instagram.com/reel/DPk66KpCWYs/" },
    { k: "Melooha, Shark Tank India", t: "~38% conversion lift", d: "Hinglish ad scripts built on emotional pain hooks.", href: D("1uoAFRYh2lXzVkZDu2hacjZYlm2cRdk_m") },
    { k: "Paradox, IIT Madras", t: "399.7% reach, 553.8% engagement", d: "Instagram growth for the annual fest content team.", href: D("1SjPVeUBg3vucovX9bWveHBZy7ic1QXBl") },
    { k: "Paradox in Saavan", t: "1,700+ virtual attendees", d: "Content for the virtual edition of the fest.", href: D("1eeU1zVkYzMwzLUvKxQ8ASYgEy3zC6obH") },
    { k: "Pristilo, Dubai", t: "~42% sales lift", d: "The 30-Day Dubai Fitness Challenge and UGC push.", href: D("1OlCsrtqcVlExmkPnGZO2znF2SHbuaErN") }
  ];

  // src/grain.svg
  var grain_default = "./assets/SZ7CPVAB.svg";

  // src/photos/diya-writing.jpg
  var diya_writing_default = "./assets/MD4ETI73.jpg";

  // src/photos/upi-qr.png
  var upi_qr_default = "./assets/5SOZTAHF.png";

  // src/ServicesPay.tsx
  var import_jsx_runtime22 = __toESM(require_jsx_runtime());
  var WA = "https://wa.link/kzc6zv";
  var UPI_ID = "diyanathwani6563@okicici";
  var PAYEE = "Diya Nathwani";
  function DraftBadge({ big = false }) {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: big ? "sp-draft is-big" : "sp-draft", children: "DRAFT" });
  }
  function Bar({ back }) {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("header", { className: "nk-bar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Link, { to: "/", className: "nk-logo sp-logo", children: "DIYA N." }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "nk-status", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("i", { className: "nk-dot", "aria-hidden": "true" }),
        "Open to roles & great briefs",
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: "Mumbai / Nagpur / remote" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Link, { to: "/", className: "nk-btn is-outline is-sm", children: back })
    ] });
  }
  var MODELS = [
    { name: "One-off project", desc: "A strategy, a campaign, a script batch or an SEO sprint - scoped, priced, delivered.", best: "Launches, rebrands, one clear deliverable" },
    { name: "Monthly retainer", desc: "Your content engine on subscription: calendar, writing, editing and reporting, month on month.", best: "Brands and creators building consistently" },
    { name: "Workshop & training", desc: "Live sessions on AI in marketing and content strategy for corporate teams.", best: "Teams that want to level up in a day" }
  ];
  var STEPS = [
    ["Scope chat", "A quick call or WhatsApp thread on what you need and when."],
    ["Custom quote", "You get a written quote and timeline. Nothing vague, nothing hidden."],
    ["Advance to book", "An advance locks your slot on the calendar."],
    ["Balance on delivery", "The rest when the work lands. Then revisions, as agreed."]
  ];
  function ServicesPage() {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ru, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "nk-root", style: { ["--grain"]: `url(${grain_default})` }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Bar, { back: "\u2190 Back to portfolio" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("section", { className: "nk nk-dark sp-hero", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Title, { cls: "nk-serif is-center", pre: "Services &", hl: "pricing" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { className: "nk-sub", children: [
          "Six things I do well. Hire me for one, or all six. ",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, { big: true }),
          " Prices on this page are placeholders - every quote is confirmed personally before anything is final."
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("section", { className: "nk nk-light", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "sp-grid", children: services.map(([name, desc], i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: `sp-card r${i % 3}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "sp-no", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { children: name }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { children: desc }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-price", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "Price: shared after a scope chat" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {})
        ] })
      ] }, name)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("section", { className: "nk nk-beige", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Title, { cls: "nk-serif is-center", pre: "Ways to", hl: "work together" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { className: "nk-center-sub", children: [
          "Three shapes an engagement usually takes. ",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {}),
          " until Diya confirms the numbers."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "sp-models", children: MODELS.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: `sp-model r${i % 3}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { children: m.name }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { children: m.desc }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("small", { children: [
            "Best for: ",
            m.best
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-price", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { children: [
              "\u20B9",
              " on confirmation"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {})
          ] })
        ] }, m.name)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("section", { className: "nk nk-dark sp-how", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Title, { cls: "nk-serif is-center", pre: "How a project", hl: "usually runs" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { className: "nk-sub", children: [
          "Proposed flow ",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {}),
          " - the final schedule goes out with your quote."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "sp-steps", children: STEPS.map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-step", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("small", { children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: t }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: d })
        ] }, t)) }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "sp-cta", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { className: "nk-btn is-lime", href: WA, target: "_blank", rel: "noopener noreferrer", children: "Ask for a quote" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("section", { className: "nk nk-light sp-foot", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: diya_writing_default, alt: "Diya Nathwani typing at a typewriter at night" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { children: [
          "Every engagement starts with a conversation, not a checkout. ",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { href: WA, target: "_blank", rel: "noopener noreferrer", children: "WhatsApp" }),
          " or ",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { href: `mailto:${EMAIL}`, children: "email" }),
          " - tell me what you are building."
        ] })
      ] })
    ] }) });
  }
  function CopyUpi() {
    const [copied, setCopied] = import_react22.default.useState(false);
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { type: "button", className: "nk-btn is-black is-sm sp-copy", onClick: () => {
      const done = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      };
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(UPI_ID).then(done, done);
      } else {
        done();
      }
    }, children: copied ? "Copied!" : "Copy UPI ID" });
  }
  var HOW = [
    ["Open any UPI app", "GPay, PhonePe, Paytm, BHIM or your bank app - anything that scans a QR works."],
    ["Scan the QR or use the ID", `Payee: ${PAYEE}, UPI ID: ${UPI_ID}. On your phone, the pay button below opens your UPI app directly.`],
    ["Pick service + duration", "Choose what you are paying for. Your total, the 50% advance and the reference fill themselves in."],
    ["Pay, then tell us", "After paying, note the UPI transaction ID (UTR) and fill the confirmation form below."]
  ];
  var PRICES = {
    campaigns: { once: 75e3, monthly: 6e4 },
    social: { once: 3e4, monthly: 45e3 },
    articles: { once: 4e4, monthly: 5e4 },
    pop: { once: 25e3, monthly: 35e3 },
    writing: { once: 15e3, monthly: 25e3 },
    podcast: { once: 2e4, monthly: 3e4 },
    web: { once: 6e4, monthly: 4e4 }
  };
  var EMPTY_CLIENT = { name: "", email: "", phone: "", company: "", address: "", gstin: "" };
  var PAY_META = {
    campaigns: { timeline: "3-4 weeks", revisions: "2 revision rounds", deliverables: ["Campaign strategy + the big idea", "Channel + rollout plan", "Messaging + copy direction"] },
    social: { timeline: "runs monthly", revisions: "1 strategy review / month", deliverables: ["Monthly content calendar", "Platform-wise concepts + captions", "Performance review notes"] },
    articles: { timeline: "2-3 weeks", revisions: "2 revision rounds", deliverables: ["SEO topic map + briefs", "Long-form articles", "On-page optimization"] },
    pop: { timeline: "2 weeks", revisions: "2 revision rounds", deliverables: ["Trend + culture scan", "Content concepts", "Scripts / captions pack"] },
    writing: { timeline: "1-2 weeks", revisions: "2 revision rounds", deliverables: ["Scripts / copy drafts", "Voice + tone alignment", "Final polished files"] },
    podcast: { timeline: "2-3 weeks", revisions: "2 revision rounds", deliverables: ["Episode structure + questions", "Shownotes + titles", "Promo snippets"] },
    web: { timeline: "3-4 weeks", revisions: "2 revision rounds", deliverables: ["Site content architecture", "Page copy", "SEO foundations"] }
  };
  var inr = (n2) => n2 ? `\u20B9${n2.toLocaleString("en-IN")}` : "\u20B9 -";
  function InvoiceOverlay({ open, onClose, mode, invNo, rctNo, line, total, payAmount, payLabel, payRef, client, coupon }) {
    if (!open) return null;
    const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    const billed = [client.name, client.company, client.address, client.gstin ? `GSTIN: ${client.gstin}` : ""].filter(Boolean);
    const balance = total - payAmount;
    const isReceipt = mode === "receipt";
    const balCell = balance > 0 ? inr(balance) : "\u20B90 - fully paid";
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-inv", role: "dialog", "aria-label": isReceipt ? "Receipt preview" : "Invoice preview", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-inv-paper", id: "sp-invoice", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-inv-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "DIYA NATHWANI" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "Content & Brand Strategy" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-inv-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: isReceipt ? "Receipt no." : "Invoice no." }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: isReceipt ? rctNo : invNo })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: "Date" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: today })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: "Reference" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: payRef })
          ] })
        ] }),
        billed.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-inv-billto", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: "Bill to" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: billed.join(" \xB7 ") })
        ] }),
        isReceipt ? /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("table", { className: "sp-inv-table", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("th", { children: "Description" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("th", { children: "Amount" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("tbody", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("td", { children: [
                  "Amount received (",
                  payLabel,
                  ") - ",
                  line
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: inr(payAmount) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: "Payment mode" }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: "UPI" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: "Towards project total" }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: inr(total) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: "Balance due on delivery" }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: balCell })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { className: "sp-inv-pay", children: [
            "Received via UPI at ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: UPI_ID }),
            " (",
            PAYEE,
            ") against reference ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: payRef }),
            "."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "sp-inv-terms", children: "This receipt is valid once your UTR is matched - Diya emails the confirmed copy, usually the same day." })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("table", { className: "sp-inv-table", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("th", { children: "Description" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("th", { children: "Amount" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("tbody", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: line }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: inr(total) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: "GST (if applicable)" }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: "As per quote" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("td", { children: [
                  "Amount due now (",
                  payLabel,
                  ")"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: inr(payAmount) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: "Balance due on delivery" }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("td", { children: balCell })
              ] })
            ] })
          ] }),
          coupon.trim() && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { className: "sp-inv-pay", children: [
            "Coupon / discount reference: ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: coupon.trim() }),
            " - applied in the final quote."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { className: "sp-inv-pay", children: [
            "Pay to UPI ID ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: UPI_ID }),
            " (",
            PAYEE,
            "). Please quote reference ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: payRef }),
            " in the payment note."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "sp-inv-terms", children: "Payment confirms your project slot. Work begins on receipt of the advance. Payments are final and non-refundable once made." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-inv-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { type: "button", className: "nk-btn is-lime", onClick: () => window.print(), children: "Print / Save as PDF" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { type: "button", className: "nk-btn is-outline-dark", onClick: onClose, children: "Close" })
      ] })
    ] });
  }
  function ConfirmSection({ payRef, invNo, client, setClient, coupon, svcLabel, payAmount, payLabel }) {
    const [utr, setUtr] = import_react22.default.useState("");
    const [note, setNote] = import_react22.default.useState("");
    const amtLine = payAmount ? `${inr(payAmount)} (${payLabel})` : "(amount not set on the page)";
    const body = `Hi Diya,

I just paid you via UPI.

Name: ${client.name}
Email: ${client.email}
Phone/WhatsApp: ${client.phone}
Company/brand: ${client.company}
GSTIN: ${client.gstin}

Service: ${svcLabel}
Amount paid: ${amtLine}
Payment reference: ${payRef}
Invoice: ${invNo}
Coupon: ${coupon}
UPI transaction ID (UTR): ${utr}
Note: ${note}

(Sharing the payment screenshot on WhatsApp too.)`;
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent("Payment confirmation - " + (client.name || "UPI payment"))}&body=${encodeURIComponent(body)}`;
    const ready = client.name.trim() && utr.trim();
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "nk-sub", children: "Paid via UPI? Drop your UTR here - it lands straight in my inbox, and your project moves forward as soon as the payment shows up." }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-form", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { children: [
          "Your name",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { value: client.name, onChange: (e2) => setClient({ ...client, name: e2.target.value }), placeholder: "Priya Sharma" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { children: [
          "Your email",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { type: "email", value: client.email, onChange: (e2) => setClient({ ...client, email: e2.target.value }), placeholder: "you@company.com" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { children: [
          "UPI transaction ID / UTR",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { value: utr, onChange: (e2) => setUtr(e2.target.value), placeholder: "12-digit number from your UPI app" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { className: "is-wide", children: [
          "Note (optional)",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { value: note, onChange: (e2) => setNote(e2.target.value), placeholder: "Invoice number, project, anything I should know" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { className: ready ? "nk-btn is-lime" : "nk-btn is-lime is-off", href: ready ? href : void 0, "aria-disabled": !ready, children: "Send payment confirmation" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "sp-form-note", children: "Opens your email app with everything filled in - amount paid, project ID, invoice, UTR. Also WhatsApp the payment screenshot: that is the fastest confirmation." })
      ] })
    ] });
  }
  function StickyPayCta({ amount, href }) {
    const ref = import_react22.default.useRef(null);
    import_react22.default.useEffect(() => {
      const el2 = ref.current;
      if (!el2 || window.self === window.top) return;
      el2.style.position = "absolute";
      el2.style.bottom = "auto";
      const spacing = 60;
      let marks = [];
      const visible = /* @__PURE__ */ new Set();
      const place = () => {
        if (!visible.size) return;
        const maxIdx = Math.max(...visible);
        const docH = document.documentElement.scrollHeight;
        const bottom = Math.min((maxIdx + 1) * spacing, docH);
        el2.style.top = Math.max(0, bottom - el2.offsetHeight - 14) + "px";
      };
      const io2 = new IntersectionObserver((entries) => {
        for (const e2 of entries) {
          const i = Number(e2.target.dataset.i);
          if (e2.isIntersecting) visible.add(i);
          else visible.delete(i);
        }
        place();
      }, { threshold: 0 });
      const build = () => {
        visible.clear();
        marks.forEach((m) => {
          io2.unobserve(m);
          m.remove();
        });
        marks = [];
        const docH = document.documentElement.scrollHeight;
        const count = Math.ceil(docH / spacing);
        for (let i = 0; i < count; i++) {
          const m = document.createElement("div");
          m.dataset.i = String(i);
          m.style.cssText = "position:absolute;left:4px;top:" + i * spacing + "px;width:2px;height:" + spacing + "px;pointer-events:none";
          document.body.appendChild(m);
          marks.push(m);
          io2.observe(m);
        }
      };
      build();
      const ro2 = new ResizeObserver(() => build());
      ro2.observe(document.body);
      return () => {
        ro2.disconnect();
        io2.disconnect();
        marks.forEach((m) => m.remove());
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("a", { ref, className: "sp2-sticky" + (amount && href ? "" : " is-hidden"), href, children: [
      "Pay ",
      inr(amount),
      " via UPI"
    ] });
  }
  function PayPage() {
    const [payRef] = import_react22.default.useState(() => "DN-" + Date.now().toString(36).toUpperCase().slice(-6));
    const refSuffix = payRef.slice(3);
    const invNo = "INV-" + (/* @__PURE__ */ new Date()).getFullYear() + "-" + refSuffix;
    const rctNo = "RCT-" + (/* @__PURE__ */ new Date()).getFullYear() + "-" + refSuffix;
    const [svc, setSvc] = import_react22.default.useState(drawers[0].key);
    const [kind, setKind] = import_react22.default.useState("once");
    const [months, setMonths] = import_react22.default.useState(1);
    const [custom, setCustom] = import_react22.default.useState("");
    const [payNow, setPayNow] = import_react22.default.useState("advance");
    const [coupon, setCoupon] = import_react22.default.useState("");
    const [client, setClient] = import_react22.default.useState(EMPTY_CLIENT);
    const [invMode, setInvMode] = import_react22.default.useState(null);
    const d = drawers.find((x) => x.key === svc);
    const meta = PAY_META[svc];
    const rate = PRICES[svc]?.[kind === "custom" ? "once" : kind];
    const customAmt = Number(custom.replace(/[^0-9.]/g, "")) || 0;
    const total = kind === "custom" ? customAmt > 0 ? customAmt : void 0 : rate ? kind === "monthly" ? rate * months : rate : void 0;
    const kindLabel = kind === "custom" ? "custom amount" : kind === "monthly" ? `${months} month${months > 1 ? "s" : ""}` : "one-time project";
    const line = kind === "custom" ? "Professional services - as agreed" : `${d.label} (${kindLabel})`;
    const isAdv = kind !== "custom" && payNow === "advance";
    const payLabel = kind === "custom" ? "custom payment" : isAdv ? "50% advance" : "full payment";
    const payAmount = total ? isAdv ? total / 2 : total : void 0;
    const balance = total && payAmount ? total - payAmount : void 0;
    const tn = `${kind === "custom" ? `Custom payment` : `${d.label} - ${kindLabel}`} - ${payLabel} (${payRef})`;
    const href = payAmount ? `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(PAYEE)}&cu=INR&am=${payAmount}&tn=${encodeURIComponent(tn)}` : void 0;
    const scrollToPay = () => document.getElementById("sp2-payment")?.scrollIntoView({ behavior: "smooth" });
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ru, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "nk-root", style: { ["--grain"]: `url(${grain_default})` }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Bar, { back: "\u2190 Back to portfolio" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("section", { className: "nk nk-dark sp-hero sp2-hero", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Title, { cls: "nk-serif is-center", pre: "Let's make something", hl: "worth talking about." }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "nk-sub", children: "You are one step away from getting started - pick your project, pay, confirm. Three steps." }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { className: "nk-sub sp2-sub2", children: [
          "For confirmed projects only - no quote yet? ",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { href: WA, target: "_blank", rel: "noopener noreferrer", children: "Start with a WhatsApp chat" }),
          " or ",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { href: "https://calendly.com/diyanathwaniwrites/30min", target: "_blank", rel: "noopener noreferrer", children: "book a free intro call" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("section", { className: "nk nk-light", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-cols", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-card r0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "sp2-step-chip", children: "Step 1 of 3" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "sp2-h", children: "Your project" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-kind", role: "group", "aria-label": "Payment type", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { type: "button", className: kind === "once" ? "is-on" : "", onClick: () => setKind("once"), children: "One-time" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { type: "button", className: kind === "monthly" ? "is-on" : "", onClick: () => setKind("monthly"), children: "Monthly" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { type: "button", className: kind === "custom" ? "is-on" : "", onClick: () => setKind("custom"), children: "Custom" })
          ] }),
          kind !== "custom" && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { className: "sp2-lab", children: [
              "Service / project",
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("select", { value: svc, onChange: (e2) => setSvc(e2.target.value), children: drawers.map((x) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("option", { value: x.key, children: x.label }, x.key)) })
            ] }),
            kind === "monthly" && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { className: "sp2-lab", children: [
              "Duration",
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("select", { value: months, onChange: (e2) => setMonths(Number(e2.target.value)), children: [1, 2, 3, 6, 12].map((m) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("option", { value: m, children: [
                m,
                " month",
                m > 1 ? "s" : ""
              ] }, m)) })
            ] })
          ] }),
          kind === "custom" && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { className: "sp2-lab", children: [
            "Amount (",
            "\u20B9",
            ")",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { inputMode: "decimal", value: custom, onChange: (e2) => setCustom(e2.target.value), placeholder: "Amount from your invoice" })
          ] }),
          kind !== "custom" && meta && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-summary", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: "You are booking" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("strong", { children: [
              d.label,
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "sp2-kindline", children: [
                "- ",
                kindLabel
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("ul", { children: [
              meta.deliverables.map((x) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { children: x }, x)),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { children: meta.revisions })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "sp2-metaline", children: [
              "Timeline: ",
              meta.timeline,
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {})
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "sp2-metaline", children: [
              "Scope, deliverables and timeline are ",
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {}),
              " placeholders - the final ones arrive with your written quote."
            ] }),
            total && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("button", { type: "button", className: "nk-btn is-black is-sm sp2-gotopay", onClick: scrollToPay, children: [
              "Continue to payment ",
              "\u2192"
            ] })
          ] }),
          kind === "custom" && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-summary", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: "You are paying" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "A custom amount" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "sp2-metaline", children: "For amounts agreed over email or WhatsApp. Your invoice states the exact scope." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-card r1", id: "sp2-payment", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "sp2-step-chip", children: "Step 2 of 3" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "sp2-h", children: "Payment" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-rows", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-row", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "Project fee" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: inr(total) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-row", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "GST (if applicable)" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("b", { children: [
                "As per quote ",
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {})
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-row is-total", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "Total payable" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: inr(total) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-row is-adv", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: isAdv ? "Advance due now (50%)" : "You are paying now" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: inr(payAmount) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-row", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "Balance on delivery" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: balance ? inr(balance) : "\u20B90" })
            ] })
          ] }),
          kind !== "custom" && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-kind sp2-paychoice", role: "group", "aria-label": "How much to pay now", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { type: "button", className: payNow === "advance" ? "is-on" : "", onClick: () => setPayNow("advance"), children: "Pay 50% advance" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { type: "button", className: payNow === "full" ? "is-on" : "", onClick: () => setPayNow("full"), children: "Pay in full" })
          ] }),
          kind !== "custom" && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "sp-draftline", children: [
            "Rates are ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {}),
            " - the final quote comes with your invoice."
          ] }),
          payAmount ? /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("a", { className: "nk-btn is-lime sp-paybtn", href, children: [
            "Pay ",
            inr(payAmount),
            isAdv ? " advance" : "",
            " via UPI"
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "nk-btn is-lime sp-paybtn is-off", children: kind === "custom" ? "Enter an amount to pay" : "Pick a service to see your fee" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "sp2-trustline", children: "Goes straight to Diya's verified UPI account \xB7 Receipt by email \xB7 No card details on this page" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-upi", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { className: "sp2-qr", src: upi_qr_default, alt: `UPI QR code paying ${PAYEE} (${UPI_ID})` }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { className: "sp-handle", children: [
                PAYEE,
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
                "UPI ID: ",
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: UPI_ID })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CopyUpi, {})
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { className: "sp2-help", children: "The pay button opens GPay / PhonePe / Paytm with payee, amount and reference pre-filled. Scanning the QR? Type the same amount and reference manually." }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "sp2-validity", children: [
            "Your quote stays valid for 15 days from the day it is shared ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {})
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { className: "sp2-rails", children: [
            "UPI is live. Cards \xB7 Net Banking \xB7 Wallets - ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: "available on request" }),
            " (write to us). International: USD / GBP / EUR on request."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h4", { className: "sp2-h4", children: "Project reference" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-refgrid", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: "Project ID" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: payRef })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: "Service" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: kind === "custom" ? "Custom payment" : d.label })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: "Invoice ref" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: invNo })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: "Coupon (optional)" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { className: "sp2-mini", value: coupon, onChange: (e2) => setCoupon(e2.target.value), placeholder: "If you have one" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h4", { className: "sp2-h4", children: "Your details" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-form", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { children: [
              "Full name",
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { value: client.name, onChange: (e2) => setClient({ ...client, name: e2.target.value }), placeholder: "Priya Sharma" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { children: [
              "Email",
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { type: "email", value: client.email, onChange: (e2) => setClient({ ...client, email: e2.target.value }), placeholder: "you@company.com" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("details", { className: "sp2-opt", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("summary", { children: "Billing details (optional) - phone, company, address, GSTIN for the invoice" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-form", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { children: [
                "Phone / WhatsApp",
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { value: client.phone, onChange: (e2) => setClient({ ...client, phone: e2.target.value }), placeholder: "+91 ..." })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { children: [
                "Company / brand",
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { value: client.company, onChange: (e2) => setClient({ ...client, company: e2.target.value }), placeholder: "Optional" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { className: "is-wide", children: [
                "Billing address",
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { value: client.address, onChange: (e2) => setClient({ ...client, address: e2.target.value }), placeholder: "Goes on your invoice" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { className: "is-wide", children: [
                "GSTIN (if applicable)",
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { value: client.gstin, onChange: (e2) => setClient({ ...client, gstin: e2.target.value }), placeholder: "Optional" })
              ] })
            ] })
          ] }),
          total && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-invbtns", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { type: "button", className: "nk-btn is-outline-dark is-sm", onClick: () => setInvMode("invoice"), children: "Download invoice" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { type: "button", className: "nk-btn is-outline-dark is-sm", onClick: () => setInvMode("receipt"), children: "Download receipt" })
          ] }),
          total && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(InvoiceOverlay, { open: invMode !== null, mode: invMode ?? "invoice", onClose: () => setInvMode(null), invNo, rctNo, line, total, payAmount: payAmount ?? 0, payLabel, payRef, client, coupon })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("section", { className: "nk nk-light sp2-terms-sec", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("details", { className: "sp2-termsacc", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("summary", { children: [
          "Before you pay - the terms ",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { children: [
            "slot \xB7 schedule \xB7 revisions \xB7 refunds \xB7 validity \xB7 taxes ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {})
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-terms is-ink", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "Your slot." }),
            " Payment confirms your project slot. Work begins once the agreed advance is received. Additional work outside the agreed scope is quoted separately."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "Schedule." }),
            " Projects run 50% advance + 50% on delivery, before final handover."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "Revisions." }),
            " Every engagement includes the revision rounds stated on your quote (2 rounds is typical). ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {})
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "No refunds." }),
            " All payments are final and non-refundable once made, including advances. Confirm the scope, timeline and deliverables on your quote before paying. ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {})
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "Cancellations." }),
            " If a project is cancelled by either side after work has begun, payments already made are not returned; incomplete work is simply not billed further. ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {})
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "Payment validity." }),
            " A quote stays valid for 15 days from the date it is shared. ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {})
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "Taxes." }),
            " GST and other taxes apply as per your quote and invoice. ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {})
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("section", { className: "nk nk-light", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp2-trust", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: diya_writing_default, alt: "Diya Nathwani typing at a typewriter at night" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "sp2-h", children: "You are paying Diya directly." }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "Diya Nathwani" }),
            " - Content & Brand Strategist, Mumbai / Nagpur. Payments go straight to her verified UPI account; your card details never touch this page."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { children: "You will receive a payment confirmation and receipt by email once your UTR is matched - usually the same day." }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { className: "sp-darklink", href: `mailto:${EMAIL}`, children: EMAIL }),
            " \xB7 ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { className: "sp-darklink", href: "https://www.linkedin.com/in/diya-nathwani6622/", target: "_blank", rel: "noopener noreferrer", children: "LinkedIn" }),
            " \xB7 ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { className: "sp-darklink", href: WA, target: "_blank", rel: "noopener noreferrer", children: "WhatsApp" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("section", { className: "nk nk-dark sp-how", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "sp2-chipwrap", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "sp2-step-chip", children: "Step 3 of 3" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Title, { cls: "nk-serif is-center", pre: "Paid?", hl: "Tell me here" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ConfirmSection, { payRef, invNo, client, setClient, coupon, svcLabel: kind === "custom" ? "Custom payment" : `${d.label} (${kindLabel})`, payAmount, payLabel })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("section", { className: "nk nk-light", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Title, { cls: "nk-serif is-center", pre: "What happens", hl: "next" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-steps is-light", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-step", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: "01" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "Payment" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "Your advance locks the project slot on the calendar." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-step", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: "02" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "Kickoff" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { children: [
              "Once your UTR matches, you get a confirmation + receipt, and we kick off on call or WhatsApp. ",
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DraftBadge, {})
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-step", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: "03" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "Creation" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "Work runs on the agreed schedule. The balance is due on delivery, before final handover." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-book sp2-book", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-book-left", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "Rather talk first?" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "Book a free 30-minute intro call - scope it, then pay." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("a", { className: "nk-btn is-black", href: "https://calendly.com/diyanathwaniwrites/30min", target: "_blank", rel: "noopener noreferrer", children: [
            "Book a slot ",
            "\u2197"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("section", { className: "nk nk-dark sp-how", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { className: "nk-sub", children: [
          "Questions? ",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { href: `mailto:${EMAIL}`, children: EMAIL }),
          " - it gets sorted directly, no ticket systems."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sp-cta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { className: "nk-btn is-lime", href: WA, target: "_blank", rel: "noopener noreferrer", children: "Ask about a payment" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Link, { to: "/", className: "nk-btn is-outline", children: [
            "\u2190",
            " Back to portfolio"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(StickyPayCta, { amount: payAmount, href })
    ] }) });
  }

  // src/photos/diya-portrait.jpg
  var diya_portrait_default = "./assets/EXFXM46A.jpg";

  // src/photos/diya-phone.webp
  var diya_phone_default = "./assets/VNQDODA3.webp";

  // src/photos/diya-pro.jpg
  var diya_pro_default = "./assets/TQLYGLA5.jpg";

  // src/photos/diya-headphones.jpg
  var diya_headphones_default = "./assets/EYW6BXOP.jpg";

  // src/photos/diya-mic-hq.jpg
  var diya_mic_hq_default = "./assets/FPXYRULZ.jpg";

  // src/photos/house-of-biryan.jpg
  var house_of_biryan_default = "./assets/S3PWVBDW.jpg";

  // src/photos/walls-that-raised-us.jpg
  var walls_that_raised_us_default = "./assets/JAEIEW3F.jpg";

  // src/photos/city-in-a-frame.jpg
  var city_in_a_frame_default = "./assets/Z2XTUUWY.jpg";

  // src/photos/find-the-faces.jpg
  var find_the_faces_default = "./assets/Y56QNJNB.jpg";

  // src/photos/nukkad.jpg
  var nukkad_default = "./assets/VEGWG6XZ.jpg";

  // src/Testimonials.tsx
  var import_react23 = __toESM(require_react());

  // src/people/sagar-color.jpg
  var sagar_color_default = "./assets/GYUDNHVD.jpg";

  // src/people/piyush-color.jpg
  var piyush_color_default = "./assets/ORVVW6XS.jpg";

  // src/people/owais-original-color.jpg
  var owais_original_color_default = "./assets/X7EJX3JQ.jpg";

  // src/people/akshay-original-color.jpg
  var akshay_original_color_default = "./assets/XNQ2EMJ2.jpg";

  // src/people/akankssha-color.jpg
  var akankssha_color_default = "./assets/6VZJECT4.jpg";

  // src/people/vedant-original-color.jpg
  var vedant_original_color_default = "./assets/NUSMYXMK.jpg";

  // src/people/saurabh-color.jpg
  var saurabh_color_default = "./assets/6P74WGFO.jpg";

  // src/people/arohan-original-color.jpg
  var arohan_original_color_default = "./assets/EJ3Z63ZL.jpg";

  // src/people/sharad-original-color.jpg
  var sharad_original_color_default = "./assets/QT2KPLKW.jpg";

  // src/people/aditya-color.jpg
  var aditya_color_default = "./assets/RCOAQGZS.jpg";

  // src/people/chhayank-original-color.jpg
  var chhayank_original_color_default = "./assets/7VE5QNZP.jpg";

  // src/people/ashwin-color.jpg
  var ashwin_color_default = "./assets/NJIA2ZHE.jpg";

  // src/people/dev-color.jpg
  var dev_color_default = "./assets/SFJBAHPN.jpg";

  // src/people/kothai-color.jpg
  var kothai_color_default = "./assets/HZDKNZ7O.jpg";

  // src/people/prafful-color.jpg
  var prafful_color_default = "./assets/Y2LTKQ2H.jpg";

  // src/people/yash-color.jpg
  var yash_color_default = "./assets/MLQTWZQU.jpg";

  // src/Testimonials.tsx
  var import_jsx_runtime23 = __toESM(require_jsx_runtime());
  var T2 = [
    { h: "Grew Paradox\u2019s reach 399.7%", q: "Her capacity to engage an audience and articulate complex ideas in a clear and compelling manner is genuinely remarkable.\n\nHer exceptional organizational skills and effective leadership were instrumental in attracting over 3,000 students to the fest.", n: "Kothainayaki S Krishnamoorthy", r: "Head - Student Affairs, IITM BS Degree Program. Worked closely with Diya at IIT Madras", img: kothai_color_default, b: "Head - Student Affairs" },
    { h: "I could shoot the script right away!", q: "The points, the approach - kaafi sahi lage. Diya\u2019s script was in shootable condition, a complete shift. I could shoot it right away. Everything on track. Nicely done.", n: "Yash Garg", r: "YouTube creator, 229K subscribers. Diya scripts his long-form videos", img: yash_color_default, b: "YouTube creator, 229K subscribers" },
    { h: "Follows instructions. Takes initiative.", q: "She is one of those individuals who can both follow instructions and take initiatives. Her competence extends beyond the skills for which she was originally hired.", n: "Prafful Garg", r: "CEO & Founder, Younity.in. 2.3M Instagram followers. Diya was his Business Development & Research Intern", img: prafful_color_default, b: "CEO & Founder, Younity.in" },
    { h: "Made water tech make sense", q: "Diya showcased an unparalleled talent for converting highly technical content related to the water industry into an engaging body of work accessible to a wider and non-technical audience.", n: "Arohan Paul", r: "Data Scientist (GenAI, LLMs), Johnson Electric. NIT Rourkela. Diya reported to him at ICCW", img: arohan_original_color_default, b: "Data Scientist (GenAI, LLMs), Johnson Electric" },
    { h: "Led the team that ran the fest", q: "As the leader of the content team, Diya demonstrated outstanding content management and strategic skills in handling events of significant scale.", n: "Aman Kankriya", r: "Assistant Manager, Hindustan Zinc. IIT Madras. Was on Diya\u2019s team at Paradox", b: "Assistant Manager, Hindustan Zinc" },
    { h: "The copy goes the extra mile", q: "Diya is a gifted writer with a keen eye for detail and an impressive ability to craft compelling and engaging copy. Any team would be lucky to have her on board.", n: "Dev Khatri", r: "Brand & graphics designer, 30+ brands. IIT Madras \u201925. Managed Diya directly", img: dev_color_default, b: "Managed Diya directly" },
    { h: "Knows her audience cold", q: "During our time working together, she consistently demonstrated a keen eye for detail, creativity, and a deep understanding of target audiences. Diya excelled in crafting engaging and relevant content across various platforms, effectively driving engagement and brand visibility.", n: "Aditya Jaiswal", r: "PhD scholar, IIT Kanpur. Student Chair, 2024 ASCE India Student Symposium", img: aditya_color_default, b: "PhD scholar, IIT Kanpur" },
    { h: "The driving force", q: "While the project idea was initially mine, I must credit Diya for being the driving force behind its success. Diya\u2019s dedication, out-of-the-box thinking, and exceptional cooperation were the main ingredients that made our project stand out.", n: "Sharad Nathwani", r: "MBA, NIT Trichy \u201926. Analytica Club, DoMS. Her mentor on a 2nd-runner-up project", img: sharad_original_color_default, b: "MBA, NIT Trichy \u201926" },
    { h: "Fest promo under pressure", q: "Her unique perspective and ideas brought in engaging and high-quality content for the fest promotion. Her ability to work under pressure and meet deadlines was impressive.", n: "Owais Shaikh", r: "Founding Engineer, Nanneer Global. Paradox \u201923 teammate", img: owais_original_color_default, b: "Founding Engineer, Nanneer Global" },
    { h: "Deadlines? Met. Every time.", q: "She approaches every project with determination, creativity, and a strong commitment to meeting deadlines. Her ability to craft engaging and high-quality content sets her apart.", n: "Sagar Bhatt", r: "Client", img: sagar_color_default },
    { h: "Work ethic, noted", q: "Formidable work ethic, excellent leader and team member", n: "Ashwin Hebbar", r: "Product Engineer, AI (LLMs, GenAI, data science)", img: ashwin_color_default },
    { h: "Data-driven, and it shows", q: "Diya is an exceptional Content Strategist with a unique blend of creativity and analytical skills. Her ability to craft data-driven content strategies that align with business goals and engage audiences is remarkable.", n: "Piyush Badme", r: "Digital marketing expert, websites & organic growth for founders", img: piyush_color_default },
    { h: "Never had to worry. Not once.", q: "In my experience working with Diya, I never had to worry about the tasks assigned to her. She consistently exceeded expectations, delivering high-quality work within the set timelines.", n: "Ar. Vedant Mathankar", r: "Architect & BIM specialist, Jeswani Design Studio. Studied with Diya", img: vedant_original_color_default },
    { h: "Complex in, clear out", q: "Diya possesses a unique blend of creativity and strategic thinking that allows her to transform complex ideas into clear, compelling written content that resonates with audiences.", n: "Akankssha Singh", r: "Health & food writer, 50+ published articles. Biotech & nutrition", img: akankssha_color_default },
    { h: "Jolly, and very good at it", q: "She was helpful, jolly, always keen to learn something new everyday, and providing the best quality in her work. She was a very instrumental part of the team.", n: "Akshay Mair", r: "Content strategist & SEO writer. Worked alongside Diya for 6 months", img: akshay_original_color_default },
    { h: "No brief-babysitting needed", q: "You don\u2019t have to sit with her to explain what to write & what not. Her writing skill is a good mix of current trends & traditional, which makes the content worth reading.", n: "Saurabh Chahal", r: "Worked with Diya on a different team", img: saurabh_color_default },
    { h: "Short and sweet", q: "It was good working with you\u{1F604}", n: "Chhayank Thakur", r: "Worked with Diya on the same team", img: chhayank_original_color_default }
  ];
  function Testimonials() {
    const marquee = (0, import_react23.useRef)(null);
    const track = (0, import_react23.useRef)(null);
    const dragging = (0, import_react23.useRef)(null);
    const hovering = (0, import_react23.useRef)(false);
    (0, import_react23.useEffect)(() => {
      let frame = 0;
      let last = 0;
      const tick = (time) => {
        const el2 = marquee.current;
        if (el2 && !dragging.current && !hovering.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          if (last) el2.scrollLeft += Math.min(3, (time - last) * 0.025);
          const halfway = (track.current?.scrollWidth || 0) / 2;
          if (halfway > 0 && el2.scrollLeft >= halfway) el2.scrollLeft -= halfway;
        }
        last = time;
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    }, []);
    const go3 = (d) => {
      const el2 = marquee.current;
      if (el2) el2.scrollBy({ left: d * 340, behavior: "smooth" });
    };
    const dragMove = (e2) => {
      const el2 = marquee.current;
      if (el2 && dragging.current) {
        el2.scrollLeft = dragging.current.scroll + dragging.current.x - e2.clientX;
        const halfway = (track.current?.scrollWidth || 0) / 2;
        if (halfway > 0 && el2.scrollLeft >= halfway) {
          el2.scrollLeft -= halfway;
          dragging.current.scroll -= halfway;
        }
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("section", { className: "nk tm", id: "testimonials", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "tm-kicker", children: "These lovely people say" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Title, { cls: "nk-serif is-center", pre: "She's good,", hl: "at her craft" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "tm-marquee", ref: marquee, onMouseEnter: () => {
        hovering.current = true;
      }, onMouseLeave: () => {
        hovering.current = false;
      }, onPointerDown: (e2) => {
        if (marquee.current) {
          dragging.current = { x: e2.clientX, scroll: marquee.current.scrollLeft };
          e2.currentTarget.setPointerCapture(e2.pointerId);
        }
      }, onPointerMove: dragMove, onPointerUp: () => {
        dragging.current = null;
      }, onPointerCancel: () => {
        dragging.current = null;
      }, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "tm-track", ref: track, children: [...T2, ...T2].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("figure", { className: t.b ? "tm-card is-key" : "tm-card", "aria-hidden": i >= T2.length ? true : void 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "tm-frame", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "tm-mark", "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { children: t.h }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("blockquote", { children: t.q.split("\n\n").map((para, j3) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { children: para }, j3)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "tm-base", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "tm-cut", children: t.img ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: t.img, alt: t.n }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "tm-mono", children: t.n.split(" ").map((w2) => w2[0]).join("") }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("figcaption", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("strong", { children: t.n }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("small", { children: t.b && t.r.includes(t.b) ? /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
            t.r.split(t.b)[0],
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("b", { children: t.b }),
            t.r.split(t.b).slice(1).join(t.b)
          ] }) : t.r })
        ] })
      ] }, t.n + i)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "tm-arrows", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("button", { type: "button", "aria-label": "Previous testimonial", onClick: () => go3(-1), children: "\u2190" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("button", { type: "button", "aria-label": "Next testimonial", onClick: () => go3(1), children: "\u2192" })
      ] })
    ] });
  }

  // src/logos/iitm.png
  var iitm_default = "./assets/KSBXIDM7.png";

  // src/pods/jay-new.jpg
  var jay_new_default = "./assets/SITJ6MAK.jpg";

  // src/pods/jay-piyush.jpg
  var jay_piyush_default = "./assets/N3ANIZJP.jpg";

  // src/pods/naveen-circ.jpg
  var naveen_circ_default = "./assets/FU6J3UWA.jpg";

  // src/pods/naveen-cover.jpg
  var naveen_cover_default = "./assets/3PFYJVTI.jpg";

  // src/pods/sankalp-li.jpg
  var sankalp_li_default = "./assets/LYR6V5XY.jpg";

  // src/pods/fundaspring.jpg
  var fundaspring_default = "./assets/S5FPFC5Y.jpg";

  // src/Pods.tsx
  var import_jsx_runtime24 = __toESM(require_jsx_runtime());
  var DRIVE = (id2) => `https://drive.google.com/file/d/${id2}/view`;
  var PODS = [
    { show: "IITM BS Diaries", ep: "Diya as guest, IIT\xA0Madras\xA0BS, Class\xA0of\xA02026", line: "%%Out of everyone who qualifies, fewer than 1% graduate.%% (source: Careers360, Aug\xA02025)\n**Student gov:** Social Media & Web Admin @**Bandipur House** (UHC)\n**Fest:** Head of Content @Team Professionals, **IITM Paradox**\n**Society:** Head of Content @**Outliers E-Cell**", tone: "y", a: diya_portrait_default, b: iitm_default, bLogo: true, href: "https://drive.google.com/drive/folders/1ZgQWpJKc77GXE23lfTd5NJFNrWWrowbG" },
    { show: "Jay Morzaria", ep: "Hosted by Diya", line: "**Head of Creative & Strategy**, Voxxy Media (Jakarta)\nEx-**Creative Head**, McCann Indonesia\nEx-**Creative Head**, Rephrase.ai (acquired by **Adobe**)\nLed Schbang\u2019s team on **Fevicol\u2019s Ronaldo moment**\nCampaigns for **Netflix | Prime Video | Porsche | Colgate**\nRecognised at the **EFFIEs** and **Kyoorius Creative Awards**", tone: "p", a: diya_portrait_default, b: jay_new_default, bg: jay_piyush_default, bgTop: true, bgCap: "Jay with the late Piyush Pandey, Ogilvy\u2019s Chief Creative Officer Worldwide", href: DRIVE("15NkcnjnYynGWLCAY_JmQUEhxt4ZXIGk1") },
    { show: "Naveen Yadav", ep: "Hosted by Diya", line: "**@flicksandfunnys**, verified cinema creator\n**103K** followers on Instagram\nCollab with **Prime Video**", tone: "l", a: diya_portrait_default, b: naveen_circ_default, bg: naveen_cover_default, bgPos: "50% 30%", href: DRIVE("1xdjr0AONMN46VbhMpTwOwxTvaM6OzhHC") },
    { show: "Sankalp Arora", ep: "Hosted by Diya \xB7 Project Sankalp, FundaSpring x IIT Madras", line: "**Co\u2011founder** (Business & Marketing Strategy) and **CMO**, Founders\u2019 Office, **Fundaspring** by BodhBridge\nBodhBridge: started by **IIT Madras alumni**\n**Mentor**, Raahat mental health society\n**Workshops Category Head**, Paradox \u201923", tone: "y", a: diya_portrait_default, b: sankalp_li_default, bg: fundaspring_default, bgPos: "50% 50%", bgAlt: "Fundaspring by BodhBridge logo", href: DRIVE("1FtG8Fvfd0ZT6xWwmkmyS9iVHjF0gcHV4") }
  ];
  var CLIPS = ["Creator economy & one\u2011person businesses", "Event host to content strategist", "Creativity x AI x data science", "Running Paradox: nights, sponsors, promo", "Stress levels (honest edition)", "IIT superpowers, ranked"];
  function Pods({ guest = false }) {
    const LIST = PODS.filter((p) => p.show === "IITM BS Diaries" === guest);
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: guest ? "pd pd-guest" : "pd", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "pd-grid", children: LIST.map((p, i) => {
        const q = p;
        const swap = i % 2 === 1;
        const guestAlt = p.show === "IITM BS Diaries" ? "IIT Madras logo" : `${p.show}, podcast guest`;
        return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("a", { href: p.href, target: "_blank", rel: "noopener noreferrer", className: `pd-cover pd-v2 t-${p.tone}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "pd-hero", style: { ...q.bgTop ? { height: 300 } : {}, ...!q.bg ? { height: 110 } : {} }, children: [
            q.bg && (q.bgTop ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "pd-zoomwrap", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("img", { className: "pd-heroimg", style: { objectPosition: "50% 0%" }, src: q.bg, alt: q.bgAlt || q.bgCap || guestAlt }) }) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("img", { className: "pd-heroimg", style: q.bgPos ? { objectPosition: q.bgPos, objectFit: "contain", background: q.bgWhite ? "#fff" : "#000", padding: q.bgWhite ? "18px 0 60px" : void 0, boxSizing: "border-box" } : void 0, src: q.bg, alt: q.bgAlt || q.bgCap || guestAlt })),
            q.bgCap && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "pd-capline", children: q.bgCap }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("img", { className: `pd-circ ${swap ? "is-r" : "is-l is-flip"}`, src: p.a, alt: "Diya Nathwani" }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("img", { className: `pd-circ ${swap ? "is-l" : "is-r"}`, style: q.bLogo ? { objectFit: "contain", padding: 8, boxSizing: "border-box" } : void 0, src: p.b, alt: guestAlt }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "pd-vs", children: "x" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "pd-no pd-no2", children: guest ? "AS A GUEST" : `EP. ${String(i + 1).padStart(2, "0")}` }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h4", { children: p.show }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("small", { children: p.ep }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("ul", { className: "pd-pts", children: p.line.split("\n").map((ln, k2) => {
            const claim = ln.startsWith("%%");
            const seg = claim ? ln.split("%%") : null;
            return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { className: claim ? "pd-claim" : void 0, children: claim ? /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("mark", { children: seg[1] }),
              seg.slice(2).join("%%")
            ] }) : ln.split("**").map((t, m) => m % 2 ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("strong", { children: t }, m) : t) }, k2);
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { className: "pd-play", children: [
            "\u25B6",
            " Watch"
          ] })
        ] }, p.show);
      }) }),
      guest && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "pd-clips-h", children: "The IITM BS Diaries clips, bite-sized:" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "pd-clips", children: CLIPS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: `pd-clip c${i % 3}`, children: c }, c)) })
      ] })
    ] });
  }

  // src/photos/ifp-wall.jpg
  var ifp_wall_default = "./assets/QBL4NWX4.jpg";

  // src/photos/breakthrough.jpg
  var breakthrough_default = "./assets/CUKQ2NS3.jpg";

  // src/photos/think-piece.jpg
  var think_piece_default = "./assets/L2NM6P2Z.jpg";

  // src/photos/ansuni-artwork.jpg
  var ansuni_artwork_default = "./assets/ROGAN5DQ.jpg";

  // src/Playground.tsx
  var import_jsx_runtime25 = __toESM(require_jsx_runtime());
  var P2 = [
    { k: "Think piece", t: "The Invisible Architect", s: "The full think piece behind the nomination, written in 50 hours. No sleep was harmed. Okay, some.", cta: "Read it", href: "https://docs.google.com/document/d/18tOTkpvnfTnMxvhCx2zQCopA1iOHqk7pzyjsVcfcwp8/edit?usp=sharing", tone: "p", glyph: "think", img: think_piece_default },
    { k: "Original song", t: "Ansuni", s: "My IFP 2026 song. Yes, the strategist also writes lyrics. The brief was my own feelings; the client was very demanding.", cta: "Play it", href: "https://youtu.be/tBJoXLpQn18?si=AUZb4LGcFJY9hJ96", tone: "y", glyph: "music", img: ansuni_artwork_default },
    { k: "Short film", t: "Breakthrough", s: "A short film on depression by Team Saath, IIT Madras Paradox. I played the lead, Diya (not a stretch), and co-wrote the script.", cta: "Watch it", href: "https://youtu.be/9L3ntS7tvsY", tone: "l", glyph: "film", img: breakthrough_default, credit: "Cast: Diya Nathwani\nScript: Tanishka Sharma & Diya Nathwani" }
  ];
  function Playground() {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("section", { className: "nk nk-light pg", id: "playground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Title, { cls: "nk-serif is-center is-ondark", pre: "Make Art.", hl: "Win hearts!" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "pg-sub", children: "(the creative playground)" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "nk-center-sub is-left", children: "Things I made because a brief wasn't enough. Unpaid, and very much on purpose." }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("figure", { className: "pg-ifp", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("img", { src: ifp_wall_default, alt: "Diya Nathwani at the IFP graffiti wall" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("figcaption", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: "pg-award", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { fill: "currentColor", d: "M7 3h10v2h3v3a4 4 0 0 1-4 4h-.3A5 5 0 0 1 13 14.9V17h3v2H8v-2h3v-2.1A5 5 0 0 1 8.3 12H8a4 4 0 0 1-4-4V5h3V3Zm0 4H6v1a2 2 0 0 0 1.2 1.8A5 5 0 0 1 7 8.5V7Zm10 0v1.5c0 .5-.1.9-.2 1.3A2 2 0 0 0 18 8V7h-1ZM6 20h12v2H6v-2Z" }) }),
            "Nominated"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("strong", { children: "IFP Award Nominee" }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("em", { className: "pg-ifp-sub", children: [
            "Think Piece category",
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
            "50-Hour Writing Challenge, IFP Season 15"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: "pg-ifp-p", children: [
            "The theme: ",
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("b", { children: "Art as a Revolution" }),
            ".",
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
            "My take: ",
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("b", { children: "The Quiet Revolution" }),
            "."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "pg-ifp-p", children: "Art doesn't march with banners. It slips in through a song, a film or a meme, and rewires how you think while you believe it was your idea." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "pg-grid", children: P2.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("a", { className: `pg-card t-${p.tone}`, href: p.href, target: "_blank", rel: "noopener noreferrer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: "pg-no", children: [
          "No. ",
          String(i + 1).padStart(2, "0"),
          " / ",
          p.k
        ] }),
        !p.img && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(GenreIcon, { kind: p.glyph, className: "pg-glyph" }),
        p.img && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("img", { className: "pg-thumb", src: p.img, alt: p.glyph === "film" ? `${p.t} short film poster` : p.glyph === "music" ? `Illustrated artwork reading Song Ansuni` : `First page of ${p.t}` }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h3", { children: p.t }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { children: p.s }),
        p.credit && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("small", { className: "pg-credit", children: p.credit }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: "pg-cta", children: [
          p.cta,
          " ",
          "\u2192"
        ] })
      ] }, p.t)) })
    ] });
  }

  // src/Letter.tsx
  var import_jsx_runtime26 = __toESM(require_jsx_runtime());
  var LINES = [
    "I owe you my life, my identity, my entire existence.",
    "You're just a small part of my life, but in hindsight I am all of you, and you are the all of me. We call it Writing, but what we mean is the art of words. The words spoken, the words unspoken, and the selective gems we chose to pen down, defying every other thought that deserved to be scratched on the paper as well.",
    "We think anyone can write, but what a pleasure to be the chosen one, to share a small portion of the largest pie called writers. It's so chivalrous of you to be so welcoming that every other person has at least once borrowed a personality from you, or better, known theirs better.",
    "It's so funny how you wittily take all the geniuses under your radar yet keep them behind the fame curtains, letting them be the underrated mystery they all complain about, but also find most sexy.",
    "You've been the inspiration, you've been the revenge. The carrier of kiddish love and adult rage. The beholder of purity and insanity. You've seen it all, and still gave us artists the credit, and not the art.",
    "People diminish it, doubting your future existence, saying unnatural intelligence will take up your space. But how belittling of them to think that the one art, the next kin to the birth of the brain, could easily vanish. They thought this when print media started disappearing. They thought this when newspapers were replaced by TV news. They thought this when people stopped recognising writers and went crazy for the ones standing on the shoulders of their stories.",
    "Oh, what an honour to be called a 'Writer'. Oh, what a limiting thought, to believe such a universally huge flex could fit in one teeny tiny person.",
    "I am not a writer. And can writing ever be me, or mine? Impossible.",
    "It's been centuries, and we still couldn't capture your essence: the thoughts, the words, the feelings, the reactions, the euphemisms, the non-existent. To cage you in the word Writing is so unfair. And to commercialise you, oh, the dare!",
    "I'm nothing in front of you. Not a teenager with tantrums, not a kid with mischief. More like the unborn baby, with no idea what lies beyond its own bubble. You consume me, you hold me dear, and for that I will be eternally grateful to be chosen, in whatever capacity.",
    "A to Z credits to you, to the art of thinking, writing and feeling. I will spend my life, my existence, my entirety, trying to be a little bit closer to you and the divine."
  ];
  function Letter() {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("section", { className: "nk nk-light lt", id: "letter", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h2", { className: "nk-serif is-center lt-h", children: "WHY WRITING?" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "lt-tag", children: "My Raw Unfiltered Emotions!" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("details", { className: "lt-scroll", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("summary", { className: "lt-env", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "lt-airmail", "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("span", { className: "lt-stamp2", "aria-hidden": "true", children: [
            "Postage",
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("b", { children: "D" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "lt-postmark", "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("span", { className: "lt-to", children: [
            "To,",
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
            "The dear Art of Writing,"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("span", { className: "lt-ribbonwrap", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "lt-ribbonv" }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "lt-ribbonh" }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "lt-bow", children: "\u2726" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "lt-open", children: "Pull the ribbon to open the letter \u2193" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "lt-paper", children: [
          LINES.slice(1).map((l2) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { children: l2 }, l2)),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("p", { className: "lt-sign", children: [
            "From an immature self-proclaimed genius of your clan,",
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
            "Yours,",
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: "drishtie." })
          ] })
        ] })
      ] })
    ] });
  }

  // src/photos/celeb-panchayat.jpg
  var celeb_panchayat_default = "./assets/PPSTNUTM.jpg";

  // src/photos/celeb-kothai.jpg
  var celeb_kothai_default = "./assets/NNGIFVA4.jpg";

  // src/photos/celeb-gv.jpg
  var celeb_gv_default = "./assets/WV2VYL3B.jpg";

  // src/photos/celeb-bilal.jpg
  var celeb_bilal_default = "./assets/EC6AHJIB.jpg";

  // src/photos/celeb-anukrti.jpg
  var celeb_anukrti_default = "./assets/472Y2WTO.jpg";

  // src/Stars.tsx
  var import_jsx_runtime27 = __toESM(require_jsx_runtime());
  var STARS = [
    { src: celeb_panchayat_default, cap: "With Biswapati Sarkar", note: "Writer of TVF Pitchers, Permanent Roommates, Kaala Paani & Jaadugar.\nCo-founder, Posham Pa Pictures.", wide: false, top: true },
    { src: celeb_bilal_default, cap: "With Bilal Siddiqi", note: "Co\u2011creator and co-writer of The Ba***ds of Bollywood (Netflix).\nWrote the novel The Bard of Blood at 19, later a Netflix series.", wide: false, top: true },
    { src: celeb_anukrti_default, cap: "With Anukrti Upadhyay", note: "Bilingual author, English and Hindi.\nKintsugi won the Sushila Devi Award. Also Daura and Bhaunri (4th Estate, HarperCollins India).\nIn Hindi: Japani Sarai and Neena Aunty.", wide: false, top: true },
    { src: celeb_gv_default, cap: "With Prof. G. Venkatesh (GV sir) & the team", note: "Director, School of Technology, Dhirubhai\xA0Ambani University.\nProfessor of Practice, IIT Madras, teaching since 2014.\nCTO of Sasken for nearly 20 years. 8 years on the IIT Bombay CS faculty.\nFounder of Mylspot. Fellow of INAE and IETE.", wide: true, top: true },
    { src: celeb_kothai_default, cap: "With Kothai Krishnamoorthy", note: "Head - Student Affairs, IIT Madras.", wide: true }
  ];
  function Stars() {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-light st", id: "rooms", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", id: 2, pre: "The favs", hl: "IRL" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-center-sub is-left", children: "People whose work I love, and who I got to meet in real life." }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "st-row", children: STARS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("figure", { className: `st-card r${i % 3}${s.wide ? " is-wide" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { style: s.top ? { objectPosition: "50% 0%" } : void 0, src: s.src, alt: `Diya Nathwani ${s.cap.replace(/^With/, "with")}` }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("figcaption", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: s.cap }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("ul", { className: "st-notes", children: s.note.split("\n").map((l2) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { children: l2 }, l2)) })
        ] })
      ] }, s.cap)) })
    ] });
  }

  // src/CountUp.tsx
  var import_react24 = __toESM(require_react());
  var import_jsx_runtime28 = __toESM(require_jsx_runtime());
  function CountUp({ value, ms: ms2 = 1600 }) {
    const m = value.match(/^([^0-9]*)([0-9][0-9,]*\.?[0-9]*)(.*)$/);
    const pre = m ? m[1] : "", raw = m ? m[2] : "", post = m ? m[3] : value;
    const target = parseFloat(raw.replace(/,/g, "")) || 0;
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    const comma = raw.includes(",");
    const [v2, setV] = (0, import_react24.useState)(target);
    const ref = (0, import_react24.useRef)(null);
    (0, import_react24.useEffect)(() => {
      if (!m || !ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      let raf = 0;
      let started = false;
      const run = () => {
        if (started) return;
        started = true;
        setV(0);
        const start = performance.now();
        const tick = (time) => {
          const p = Math.min(1, (time - start) / ms2);
          setV(target * (1 - (1 - p) ** 3));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      };
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          run();
        }
      }, { threshold: 0.2 });
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
        cancelAnimationFrame(raf);
      };
    }, [value, ms2]);
    if (!m) return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("var", { className: "countup", children: value });
    let formatted = v2.toFixed(decimals);
    if (comma) formatted = Number(formatted).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("var", { ref, className: "countup", children: [
      pre,
      formatted,
      post
    ] });
  }

  // src/photos/bs-insider.jpg
  var bs_insider_default = "./assets/BWFIZXH2.jpg";

  // src/logos/paradox.png
  var paradox_default = "./assets/BDFPTKB4.png";

  // src/logos/iccw.png
  var iccw_default = "./assets/DEUQCUK6.png";

  // src/logos/harness.png
  var harness_default = "./assets/6A6NEU2J.png";

  // src/logos/atlan.png
  var atlan_default = "./assets/XFIGEGGO.png";

  // src/logos/portkey.png
  var portkey_default = "./assets/6UBTPJS6.png";

  // src/logos/pepper.png
  var pepper_default = "./assets/5JSIJCE2.png";

  // src/logos/chd1.png
  var chd1_default = "./assets/FZH72YH3.png";

  // src/logos/wellness.svg
  var wellness_default = "./assets/VNUTS6RC.svg";

  // src/logos/gorgeousgirl.svg
  var gorgeousgirl_default = "./assets/CMPG4IQJ.svg";

  // src/logos/melooha.svg
  var melooha_default = "./assets/CLBWN37G.svg";

  // src/logos/younity.png
  var younity_default = "./assets/LTMOCRME.png";

  // src/logos/biryan.png
  var biryan_default = "./assets/RJBR2O6D.png";

  // src/logos/kohinoor.svg
  var kohinoor_default = "./assets/OKJRRSRM.svg";

  // src/logos/kinfra.png
  var kinfra_default = "./assets/QGOW5WGU.png";

  // src/logos/bigbrain.png
  var bigbrain_default = "./assets/5TPXIXZY.png";

  // src/logos/owled.png
  var owled_default = "./assets/CENCWYFO.png";

  // src/logos/cuttingedge.png
  var cuttingedge_default = "./assets/URZPG72K.png";

  // src/photos/pop/pop1.jpg
  var pop1_default = "./assets/Y4EG6CCM.jpg";

  // src/photos/pop/pop2.jpg
  var pop2_default = "./assets/VJJXVYLX.jpg";

  // src/photos/pop/pop3.jpg
  var pop3_default = "./assets/VYOVZX4T.jpg";

  // src/photos/pop/pop4.jpg
  var pop4_default = "./assets/UUOPAPKS.jpg";

  // src/photos/pop/pop5.jpg
  var pop5_default = "./assets/7T6SRKYN.jpg";

  // src/photos/pop/pop6.jpg
  var pop6_default = "./assets/FZT6XOQE.jpg";

  // src/photos/proof-yash.jpg
  var proof_yash_default = "./assets/LWSRVUMP.jpg";

  // src/photos/proof-brut.jpg
  var proof_brut_default = "./assets/KQSKOPI2.jpg";

  // src/App.tsx
  var import_jsx_runtime29 = __toESM(require_jsx_runtime());
  var SHOW_NOTES = false;
  var LOGOS = [
    { src: paradox_default, name: "IIT Madras Paradox" },
    { dark: true, src: atlan_default, name: "Atlan" },
    { src: harness_default, name: "Harness" },
    { src: portkey_default, name: "Portkey" },
    { src: pepper_default, name: "Pepper" },
    { src: chd1_default, name: "Consumer Health Digest" },
    { dark: true, src: melooha_default, name: "Melooha" },
    { src: bigbrain_default, name: "BigBrainCo" },
    { dark: true, src: cuttingedge_default, name: "Cutting Edge School" },
    { src: kohinoor_default, name: "Kohinoor", dark: true },
    { src: kinfra_default, name: "Kukreja Infrastructures" },
    { src: biryan_default, name: "House of Biryan" },
    { src: gorgeousgirl_default, name: "Gorgeous Girl" },
    { src: wellness_default, name: "Wellness Digest" },
    { src: iccw_default, name: "ICCW" },
    { src: younity_default, name: "Younity" },
    { src: owled_default, name: "OWLED Media" }
  ];
  var POP = [pop1_default, pop2_default, pop3_default, pop4_default, pop5_default, pop6_default];
  var go2 = (id2) => document.getElementById(id2)?.scrollIntoView({ behavior: "smooth", block: "start" });
  var IMGS = {
    "love-podcasts": love_podcasts_default,
    biryan: house_of_biryan_default,
    walls: walls_that_raised_us_default,
    city: city_in_a_frame_default,
    faces: find_the_faces_default,
    nukkad: nukkad_default
  };
  var WA2 = "https://wa.link/kzc6zv";
  var SUBSTACK = "https://substack.com/@diyanathwani2";
  var YOUTUBE = "https://youtube.com/@diyanathwani";
  var keychains = [
    { k: "Instagram", h: "@mindonecstasy_", href: "https://www.instagram.com/mindonecstasy_/", g: "IG" },
    { k: "LinkedIn", h: "diya-nathwani6622", href: "https://www.linkedin.com/in/diya-nathwani6622/", g: "in" },
    { k: "Website", h: "diyanathwani.site", href: "https://diyanathwani.site", g: "www" },
    { k: "X", h: "@diya_nathwani", href: "https://x.com/diya_nathwani", g: "X" },
    { k: "WhatsApp", h: "Say hi", href: WA2, g: "WA" }
  ];
  var THUMBS = {
    "A multi-strategy walkthrough": d_walk_default,
    "Creator Revenue Architecture": d_cra_default,
    "Mila toh Haathi, Gayi toh Pooch": d_mila_default,
    "The founder podcast": d_founder_default,
    "Podcast Strategy by Diya": d_pstrat_default,
    "Breaking news, handled": d_news_default,
    "When fiction becomes fact": d_fiction_default,
    "A novel about a robot": d_novel_default,
    "Gamified event marketing": d_gamified_default,
    "Homepage + ads, QA\u2019d": d_goodman_default,
    "Talking reels, A to Z": d_vidhi_default,
    "Scripts with a pulse": d_scripts_default,
    "Tools, reviewed": d_tools_default,
    "Seller\u2019s paradise": d_seller_default,
    "Level up your data game": d_statglow_default,
    "A rebrand, page by page": d_fiscal_default,
    "The 3-volume brand": volume3_default,
    "Luck shouldn\u2019t decide fame": luck_default,
    "Seek Ease": seekease_default,
    "AskIVA": askiva_default,
    "Glow, wireframed": glow_default,
    "Shock-math in 5 seconds": shock_default,
    "Founder-led B2B": b2b_default,
    "Taste of Home, Miles Away": lg_pristilo_default,
    "Helter, but strategic": lg_heltr_default,
    "70+ pieces, one engine": lg_amz_default,
    "Listicles, reviews, face-offs": lg_amz_default,
    "Dermatologist approved": lg_rltd_default,
    "Kahani, in Hindi": lg_pocketfm_default,
    "Reviewer to lifestyle brand": naveen_default,
    "58K views and counting": yash_default,
    "2025 Ka Manhoos Saal": melooha_default,
    "The 1-person AI business": cuttingedge_default,
    "Pattern hunting": cuttingedge_default,
    "300K+ readers a month": chd1_default,
    "B2B, but make it clear": pepper_default,
    "Best Facial Moisturizers": gorgeousgirl_default,
    "Backlinks with manners": wellness_default,
    "Affordable luxury": kohinoor_default
  };
  var DARK_TH = /* @__PURE__ */ new Set([melooha_default, cuttingedge_default, kohinoor_default, lg_heltr_default]);
  var GENRE = { "Think piece": "think", "Original song": "music", "Short film": "film" };
  var TONES = ["ink", "lime", "cream", "coral", "lilac", "yellow"];
  var MOTIFS = ["num", "ring", "stripe", "quote", "grid", "arrow"];
  function AutoRow({ children }) {
    const ref = import_react25.default.useRef(null);
    const [moving, setMoving] = (0, import_react25.useState)(false);
    const paused = import_react25.default.useRef(false);
    (0, import_react25.useEffect)(() => {
      const el2 = ref.current;
      if (!el2) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      let t;
      const io2 = new IntersectionObserver((es2) => {
        if (es2.some((e2) => e2.isIntersecting)) {
          io2.disconnect();
          t = setTimeout(() => setMoving(true), 1e3);
        }
      }, { threshold: 0.15 });
      io2.observe(el2);
      return () => {
        io2.disconnect();
        if (t) clearTimeout(t);
      };
    }, []);
    (0, import_react25.useEffect)(() => {
      if (!moving) return;
      const el2 = ref.current;
      if (!el2) return;
      let raf = 0, last = performance.now();
      let resume;
      const step = (now) => {
        const dt2 = Math.min(60, now - last);
        last = now;
        if (!paused.current) {
          el2.scrollLeft += dt2 * 0.05;
          const half = el2.scrollWidth / 2;
          if (half > 0 && el2.scrollLeft >= half) el2.scrollLeft -= half;
        }
        raf = requestAnimationFrame(step);
      };
      const hold = () => {
        paused.current = true;
        if (resume) clearTimeout(resume);
      };
      const release = () => {
        if (resume) clearTimeout(resume);
        resume = setTimeout(() => {
          paused.current = false;
        }, 1800);
      };
      el2.addEventListener("pointerdown", hold);
      el2.addEventListener("pointerup", release);
      el2.addEventListener("pointercancel", release);
      el2.addEventListener("touchstart", hold, { passive: true });
      el2.addEventListener("touchend", release, { passive: true });
      raf = requestAnimationFrame(step);
      return () => {
        cancelAnimationFrame(raf);
        if (resume) clearTimeout(resume);
        el2.removeEventListener("pointerdown", hold);
        el2.removeEventListener("pointerup", release);
        el2.removeEventListener("pointercancel", release);
        el2.removeEventListener("touchstart", hold);
        el2.removeEventListener("touchend", release);
      };
    }, [moving]);
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-prow", ref, children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "nk-prow-in", children }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "nk-prow-in", "aria-hidden": "true", children })
    ] });
  }
  var POD_LINKS = [
    { t: "Jay Morzaria", s: "Hosted by me - Voxxy Media", href: "https://drive.google.com/file/d/15NkcnjnYynGWLCAY_JmQUEhxt4ZXIGk1/view" },
    { t: "Naveen Yadav", s: "Hosted by me - @flicksandfunnys", href: "https://drive.google.com/file/d/1xdjr0AONMN46VbhMpTwOwxTvaM6OzhHC/view" },
    { t: "Sankalp Arora", s: "Hosted by me - Project Sankalp", href: "https://drive.google.com/file/d/1FtG8Fvfd0ZT6xWwmkmyS9iVHjF0gcHV4/view" },
    { t: "IITM BS Diaries", s: "Guest spot - Class of 2026", href: "https://drive.google.com/drive/folders/1ZgQWpJKc77GXE23lfTd5NJFNrWWrowbG" }
  ];
  function Cover({ piece, no: no2, drawer }) {
    if (piece.img) {
      return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "cv cv-photo", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: IMGS[piece.img], alt: `${piece.title} campaign cover` }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "cv-issue", children: [
          "No. ",
          String(no2).padStart(2, "0")
        ] })
      ] });
    }
    const tone = TONES[(no2 * 7 + drawer.length) % TONES.length];
    const motif = MOTIFS[(no2 * 5 + drawer.length * 3) % MOTIFS.length];
    const th = THUMBS[piece.title];
    const emo = GENRE[piece.tag];
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: `cv cv-${tone} cv-m-${motif}${th ? " cv-hasdoc" : ""}${emo ? " cv-hasemo" : ""}`, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "cv-top", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "cv-mast", children: "DN." }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { children: [
          "No. ",
          String(no2).padStart(2, "0")
        ] })
      ] }),
      th && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { className: DARK_TH.has(th) ? "cv-doc is-dk" : "cv-doc", src: th, alt: "" }),
      emo && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(GenreIcon, { kind: emo, className: "cv-emoji" }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "cv-motif", children: motif === "num" ? String(no2).padStart(2, "0") : motif === "quote" ? "\u201C" : motif === "arrow" ? "\u2197" : null }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h4", { className: "cv-title", children: piece.title }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "cv-bottom", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: piece.tag }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: piece.client.split(/[,(:/]/)[0].trim() })
      ] })
    ] });
  }
  function useClock() {
    const fmt = () => new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" }).format(/* @__PURE__ */ new Date());
    const [t, setT] = (0, import_react25.useState)(fmt());
    (0, import_react25.useEffect)(() => {
      const id2 = setInterval(() => setT(fmt()), 3e4);
      return () => clearInterval(id2);
    }, []);
    return t;
  }
  function Tabs({ items, value, onChange, label, light = false }) {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: light ? "nk-tabs is-light" : "nk-tabs", role: "tablist", "aria-label": label, children: items.map(([k2, l2]) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("button", { role: "tab", "aria-selected": value === k2, className: value === k2 ? "is-on" : "", onClick: () => onChange(k2), children: l2 }, k2)) });
  }
  function Accordion({ items, numbered = false }) {
    const [open, setOpen] = (0, import_react25.useState)(0);
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "nk-acc", children: items.map(([q, a], i) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: open === i ? "nk-acc-item is-open" : "nk-acc-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("button", { "aria-expanded": open === i, onClick: () => setOpen(open === i ? -1 : i), children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { children: [
          numbered ? `${i + 1}. ` : "",
          q
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("i", { "aria-hidden": "true", children: open === i ? "\u2212" : "+" })
      ] }),
      open === i && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { children: a })
    ] }, q)) });
  }
  function Keychains() {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "kc-row", children: keychains.map((k2, i) => {
      const inner = /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "kc-ring", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "kc-glyph", children: k2.g }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "kc-name", children: k2.k }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "kc-handle", children: k2.h })
      ] });
      return k2.href ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("a", { className: `kc kc-${i % 4}`, href: k2.href, target: "_blank", rel: "noopener noreferrer", children: inner }, k2.k) : /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: `kc kc-${i % 4} is-soon`, children: inner }, k2.k);
    }) });
  }
  var CB_MSG = "hey diya!\nWould love to discuss a project with you!\ndetails attached \u{1F517}";
  function ChatType() {
    const ref = import_react25.default.useRef(null);
    const [phase, setPhase] = (0, import_react25.useState)("idle");
    const [n2, setN] = (0, import_react25.useState)(0);
    (0, import_react25.useEffect)(() => {
      const el2 = ref.current;
      if (!el2) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setN(Array.from(CB_MSG).length);
        setPhase("done");
        return;
      }
      const io2 = new IntersectionObserver((es2) => {
        if (es2.some((e2) => e2.isIntersecting)) {
          io2.disconnect();
          setTimeout(() => setPhase("typing"), 900);
        }
      }, { threshold: 0.6 });
      io2.observe(el2);
      return () => io2.disconnect();
    }, []);
    (0, import_react25.useEffect)(() => {
      if (phase !== "typing") return;
      const chars = Array.from(CB_MSG);
      let i = 0;
      const t = setInterval(() => {
        i += 1;
        setN(i);
        if (i >= chars.length) {
          clearInterval(t);
          setPhase("done");
        }
      }, 42);
      return () => clearInterval(t);
    }, [phase]);
    const typed = Array.from(CB_MSG).slice(0, n2).join("");
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { ref, className: `nk-hi is-say chatb cb-${phase}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "cb-dots", "aria-hidden": "true", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("i", {}),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("i", {}),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("i", {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "cb-text", children: typed.split("\n").map((ln, k2, arr) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_react25.default.Fragment, { children: [
        ln,
        k2 < arr.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("br", {}) : null
      ] }, k2)) })
    ] });
  }
  function Contact() {
    const [name, setName] = (0, import_react25.useState)("");
    const [brand, setBrand] = (0, import_react25.useState)("");
    const [need, setNeed] = (0, import_react25.useState)("Brand or content strategy");
    const [budget, setBudget] = (0, import_react25.useState)("");
    const [timeline, setTimeline] = (0, import_react25.useState)("");
    const body = `Hey Diya! Came across your portfolio and I'd love to chat about a project \u2728

Name: ${name}
Brand/Company: ${brand}
What I'm looking for: ${need}
Rough budget: ${budget}
Timeline: ${timeline}

Looking forward to hearing from you!`;
    const href = `https://wa.me/918407976805?text=${encodeURIComponent(body)}`;
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-dark nk-contact", id: "contact", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-contact-photo is-phone", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: diya_phone_default, alt: "Diya Nathwani winking, holding a pink toy phone" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "wave-hand is-contact", "aria-hidden": "true", children: "\u{1F44B}" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ChatType, {}),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("p", { className: "pen is-under", children: [
          "pen name: ",
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "drishti(\u0915\u094B\u0923)" }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "emo", children: "\u{1F440}" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center is-brk", id: 0, pre: "Got a brief?", hl: "Let's work together" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "nk-sub", children: "A role, a rebrand, a launch or a half-baked idea at 2 am? Tell me about it. I'll bring the strategy." }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-form", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("label", { children: [
            "Your name",
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { value: name, onChange: (e2) => setName(e2.target.value), placeholder: "Priya from a brand you love" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("label", { children: [
            "Brand / company",
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { value: brand, onChange: (e2) => setBrand(e2.target.value), placeholder: "Where the magic needs to happen" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("label", { children: [
            "What are you looking for?",
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("select", { value: need, onChange: (e2) => setNeed(e2.target.value), children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { children: "Brand or content strategy" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { children: "Scripts or campaigns" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { children: "SEO and long-form" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { children: "Social media that moves numbers" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { children: "A full-time role" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { children: "Something else, surprise me" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("label", { children: [
            "Rough budget",
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { value: budget, onChange: (e2) => setBudget(e2.target.value), placeholder: "A range you are comfortable with" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("label", { className: "is-wide", children: [
            "Timeline",
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { value: timeline, onChange: (e2) => setTimeline(e2.target.value), placeholder: "When do you want this live?" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("a", { className: "nk-btn is-lime", href, target: "_blank", rel: "noopener noreferrer", children: "Shoot your shot" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "nk-form-note", children: "Opens WhatsApp with your message ready - just press send. Nothing is stored here." })
        ] })
      ] })
    ] });
  }
  function WaFab() {
    const ref = import_react25.default.useRef(null);
    (0, import_react25.useEffect)(() => {
      const fab = ref.current;
      if (!fab) return;
      const hero = document.querySelector(".nk-hero");
      if (window.self === window.top) {
        const heroIo = new IntersectionObserver((es2) => {
          for (const e2 of es2) fab.classList.toggle("is-hidden", e2.isIntersecting);
        }, { threshold: 0 });
        if (hero) heroIo.observe(hero);
        else fab.classList.remove("is-hidden");
        return () => heroIo.disconnect();
      }
      fab.style.position = "absolute";
      fab.style.bottom = "auto";
      const spacing = 300;
      const heroBottom = () => hero ? hero.offsetTop + hero.offsetHeight : 0;
      let marks = [];
      const visible = /* @__PURE__ */ new Set();
      const place = () => {
        if (!visible.size) return;
        const minIdx = Math.min(...visible);
        fab.classList.toggle("is-hidden", minIdx * spacing < heroBottom());
        const bottom = Math.max(...visible) * spacing;
        fab.style.top = Math.max(0, bottom - fab.offsetHeight - 18) + "px";
      };
      const io2 = new IntersectionObserver((entries) => {
        for (const e2 of entries) {
          const i = Number(e2.target.dataset.i);
          if (e2.isIntersecting) visible.add(i);
          else visible.delete(i);
        }
        place();
      }, { threshold: 0 });
      const build = () => {
        visible.clear();
        marks.forEach((m) => {
          io2.unobserve(m);
          m.remove();
        });
        marks = [];
        const docH = document.documentElement.scrollHeight;
        const count = Math.ceil(docH / spacing);
        for (let i = 0; i < count; i++) {
          const m = document.createElement("div");
          m.dataset.i = String(i);
          m.style.cssText = "position:absolute;left:0;top:" + i * spacing + "px;width:2px;height:" + spacing + "px;pointer-events:none";
          document.body.appendChild(m);
          marks.push(m);
          io2.observe(m);
        }
      };
      build();
      let rt2;
      const ro2 = new ResizeObserver(() => {
        window.clearTimeout(rt2);
        rt2 = window.setTimeout(build, 800);
      });
      ro2.observe(document.body);
      return () => {
        window.clearTimeout(rt2);
        ro2.disconnect();
        io2.disconnect();
        marks.forEach((m) => m.remove());
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("a", { ref, className: "nk-wafab is-hidden", href: "https://wa.me/918407976805", target: "_blank", rel: "noopener noreferrer", "aria-label": "Chat with Diya on WhatsApp" });
  }
  function HomePage() {
    const clock = useClock();
    const [drawer, setDrawer] = (0, import_react25.useState)(drawers[0].key);
    const [jt2, setJt] = (0, import_react25.useState)("corporate");
    const [revealed, setRevealed] = (0, import_react25.useState)([]);
    const d = drawers.find((x) => x.key === drawer);
    const totalPieces = drawers.reduce((a, x) => a + x.pieces.length, 0);
    let counter = 0;
    const offsets = {};
    drawers.forEach((x) => {
      offsets[x.key] = counter;
      counter += x.pieces.length;
    });
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ru, { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-root", style: { ["--grain"]: `url(${grain_default})` }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("header", { className: "nk-bar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "nk-logo", children: "DIYA N." }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "nk-status", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("i", { className: "nk-dot", "aria-hidden": "true" }),
          "Open to roles & great briefs",
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("small", { children: "Mumbai / Nagpur / remote" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "nk-clock", children: [
          clock,
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("small", { children: "IST, probably overthinking a headline" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("nav", { className: "nk-nav", "aria-label": "Sections", children: [["about", "About"], ["results", "Results"], ["work", "Work"], ["journey", "Journey"], ["featured", "Featured"], ["media", "Media"]].map(([k2, l2]) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("button", { onClick: () => go2(k2), children: l2 }, k2)) }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("button", { className: "nk-btn is-outline is-sm", onClick: () => go2("contact"), children: "Let's talk" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-dark nk-hero", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(HeroName, {}),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-hero-stage", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h2", { className: "nk-hero-word is-left", children: "Content" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-hero-photo", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: diya_portrait_default, alt: "Diya Nathwani speaking into a microphone" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "orb o0", children: "Writer" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "orb o1", children: "Strategist" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "wave-badge", "aria-hidden": "true", children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "wb-hii", children: "hii!" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "wb-hand", children: "\u{1F44B}" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("svg", { className: "scrib s1", viewBox: "0 0 300 320", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("path", { d: "M28 158C20 60 90 18 152 16C230 14 282 78 278 168C274 252 214 306 142 302C70 298 34 236 30 176", fill: "none" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "scrib s2", children: "this one!!" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("svg", { className: "scrib s3", viewBox: "0 0 60 70", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("path", { d: "M52 6C40 30 24 46 8 58M8 58l14 -2M8 58l2 -14", fill: "none" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "scrib s4", children: "main character energy" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("svg", { className: "scrib s5", viewBox: "0 0 120 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("path", { d: "M4 14C26 4 46 22 66 10C86 2 102 18 116 12", fill: "none" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "scrib s6", children: "\u2726 \u2726 \u2726" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h2", { className: "nk-hero-word is-right", children: "Strategist" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-legacy", "aria-label": "Statement", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "legacy-l1", children: "Creating Content is like creating a Domino effect," }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("p", { className: "legacy-l2", children: [
          "and ultimately, a ",
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "legacy-hl", children: "LEGACY." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-quickstats", "aria-label": "At a glance", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center", pre: "Numbers", hl: "never lie!" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "qs-grid", children: [["3.5+", "years in content & brand"], ["20+", "clients, India to Dubai to the US"], ["35+", "end-to-end projects"], ["2,000+", "assets shipped"]].map(([n2, l2], i) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: `qs-card qs-${i}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "qs-index", children: [
            "0",
            i + 1,
            " / 04"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(CountUp, { value: n2 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "qs-label", children: l2 })
        ] }, l2)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk-marquee-wrap", "aria-label": "Brands and clients", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center is-onp is-mixed", pre: "My", hl: "MAIN CHARACTER", post: "Brands" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center is-onp is-mixed", pre: "The", hl: "client", post: "wall" }),
        [0, 1, 2].map((row) => {
          const L2 = LOGOS.filter((_3, i) => i % 3 === row);
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "nk-marquee" + (row === 1 ? " is-rev" : ""), children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "nk-marquee-track", children: [...L2, ...L2, ...L2].map((l2, i) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: l2.dark ? "mq is-dark" : "mq", "aria-hidden": i >= L2.length, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: l2.src, alt: i < L2.length ? l2.name : "" }) }, l2.name + i)) }) }, row);
        })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-dark nk-about", id: "about", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center is-brk", id: 1, pre: "The girl", hl: "behind the work" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "chat1", "aria-label": "About Diya", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("p", { children: [
              "Hi, I'm ",
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "Diya" }),
              "."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("p", { children: [
              "I studied ",
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "data science at IIT Madras" }),
              ", so yes, I will ask what your CTR is. Then I will write you something that makes people ",
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "feel things" }),
              "."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("p", { children: [
              "I help ",
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "founders, brands and creators" }),
              " work out:"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flow", children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "what to say" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("i", { children: "\u2192" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "who it's for" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("i", { children: "\u2192" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "how it makes money" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "Stories are the whole job." }),
              " Your brand has a good one, and I make sure people hear it. I write:"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("li", { children: "the plot" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("li", { children: "the dialogue" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("li", { children: [
                "the bit where the audience ",
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "can't look away" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("p", { className: "last", children: [
              "Also: I love breaking down ",
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "contradictory topics" }),
              " and I talk like I'm hosting a podcast. I've been on ",
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "four" }),
              ", so it checks out."
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-contactline", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("small", { children: "WhatsApp" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("a", { href: WA2, target: "_blank", rel: "noopener noreferrer", children: "Message me" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("small", { children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("a", { href: `mailto:${EMAIL}`, children: EMAIL })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("button", { className: "nk-btn is-outline", onClick: () => go2("journey"), children: "See my journey" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-about-photo", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "mc-clap", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "mc-top" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "mc-board", children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "Rolling" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "your story" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "mc-row", children: [
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("i", { children: "Scene 1" }),
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("i", { children: "Take 35+" }),
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("i", { children: "Brand: yours" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: diya_mic_hq_default, alt: "Diya Nathwani speaking into a microphone, arm raised" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Playground, {}),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-light nk-work", id: "work", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-work-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center", id: 3, pre: "My", hl: "best work" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("p", { children: [
            totalPieces,
            " pieces in ",
            drawers.length,
            " drawers. Pick one. They're all full."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Tabs, { light: true, label: "Work categories", value: drawer, onChange: setDrawer, items: drawers.map((x) => [x.key, `${x.label} (${x.pieces.length})`]) }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: d.key === "pop" ? "nk-drawer-blurb no-swipe" : "nk-drawer-blurb", children: d.blurb }),
        d.key === "pop" ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "pop-wall", children: d.pieces.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("a", { className: `pop-tile r${i % 3}`, href: linkFor("Pop-culture copies"), target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: POP[i], alt: `Pop-culture copy: ${p.title}`, loading: "lazy" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "pop-cap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: p.tag }),
            p.title
          ] })
        ] }, p.title)) }) : /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_jsx_runtime29.Fragment, { children: (() => {
          const card = (p, i, lead) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("article", { className: lead ? "nk-piece is-lead" : "nk-piece", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Cover, { piece: p, no: offsets[d.key] + i + 1, drawer: d.key }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-piece-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "nk-piece-tag", children: p.tag }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h3", { children: p.title }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "nk-piece-client", children: p.client }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { children: p.text }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("a", { className: "nk-piece-link", href: linkFor(p.title), target: "_blank", rel: "noopener noreferrer", children: [
                linkFor(p.title) === PORTFOLIO_ROOT ? "Browse the portfolio" : "See the work",
                " ",
                "\u2197"
              ] })
            ] })
          ] }, p.title);
          const rest = d.pieces.slice(1);
          const rowA = rest.filter((_3, j3) => j3 % 2 === 0);
          const rowB = rest.filter((_3, j3) => j3 % 2 === 1);
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "nk-pieces", children: card(d.pieces[0], 0, true) }),
            d.key === "podcast" ? /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(AutoRow, { children: rest.map((p, j3) => card(p, j3 + 1, false)) }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(AutoRow, { children: POD_LINKS.map((pl2) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("a", { className: "nk-podbox", href: pl2.href, target: "_blank", rel: "noopener noreferrer", children: [
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("strong", { children: pl2.t }),
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("small", { children: pl2.s })
              ] }, pl2.t)) })
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(AutoRow, { children: rowA.map((p, j3) => card(p, 1 + j3 * 2, false)) }),
              rowB.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(AutoRow, { children: rowB.map((p, j3) => card(p, 2 + j3 * 2, false)) })
            ] })
          ] });
        })() })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-light nk-journey", id: "journey", children: [
        jt2 === "milestones" ? /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("figure", { className: "jr-id is-event", "aria-label": "Event mode ID card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "jr-id-top", children: "Event mode: ON" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: diya_events_default, alt: "Diya Nathwani laughing in the front row at an event" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("figcaption", { children: [
            "Diya Nathwani",
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("small", { children: "Front row, always." })
          ] })
        ] }) : jt2 === "clients" ? /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("figure", { className: "jr-id is-client", "aria-label": "Client mode ID card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "jr-id-top", children: "Client mode: ON" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: diya_headphones_default, alt: "Diya Nathwani in headphones, focused on her screen, black and white" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("figcaption", { children: [
            "Diya Nathwani",
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("small", { children: "Headphones on. Brief loaded." })
          ] })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("figure", { className: "jr-id", "aria-label": "Corporate mode ID card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "jr-id-top", children: "Corporate mode: ON" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: diya_pro_default, alt: "Diya Nathwani, professional portrait in a black blazer" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("figcaption", { children: [
            "Diya Nathwani",
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("small", { children: "Same chaos, pressed blazer." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center is-brk", id: 1, center: true, pre: "How I got here:", hl: "MY JOURNEY" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "nk-center-sub", children: "Four chapters. Zero boring ones." }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Tabs, { light: true, label: "Journey", value: jt2, onChange: setJt, items: [["corporate", "Corporate"], ["milestones", "Events & Projects"], ["education", "Education"], ["clients", "Clients"]] }),
        jt2 === "clients" ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "nk-clientlist", children: clientGroups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "nk-piece-tag", children: g.k }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { children: g.items.join(" \xB7 ") })
        ] }, g.k)) }) : /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
          jt2 === "education" && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "jr-edu", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: iitm_default, alt: "IIT Madras logo" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "jr-edu-k", children: "Alma mater" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "jr-edu-t", children: "IIT Madras" }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "jr-edu-s", children: "BS in Data Science & Applications, 2021 - 2026. First batch. Four years of data science and every side quest in between." }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "jr-edu-s", style: { whiteSpace: "pre-line" }, children: "Owned the story on every stage of campus: fest, society, house and student government.\nUniversity fest: Head of Content @Team Professionals, IITM Paradox.\nSociety: Head of Content @Outliers\xA0E\u2011Cell.\nHouse & student government: Social Media & Web Admin @Bandipur\xA0House (UHC)." })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("ol", { className: "nk-timeline", children: journey[jt2].map((j3) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "nk-year", children: j3.y }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "nk-tl-role", children: j3.r }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "nk-tl-org", children: j3.o }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("ul", { className: "tl-pts", children: j3.d.split("\n").map((ln, k2) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("li", { children: ln.split("**").map((t, m) => m % 2 ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("strong", { children: t }, m) : t) }, k2)) })
            ] })
          ] }, j3.r + j3.o)) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-light nk-trophysec", id: "trophies", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center", pre: "The trophy", hl: "shelf" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "nk-center-sub", children: "It's getting crowded." }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "nk-trophies", children: trophies.map((t) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-trophy-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "nk-emoji", children: t.e }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "nk-chip", children: t.y }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("strong", { children: t.t }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("small", { children: t.s })
        ] }, t.t)) }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "jr-receipts", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("a", { href: "https://drive.google.com/drive/folders/1iMauSG8PlMqZkEPw6bs37qZ7uRv7vHSZ", target: "_blank", rel: "noopener noreferrer", children: "Certificates \u2197" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("a", { href: "https://drive.google.com/drive/folders/1E_t7yAOhDun2aYzpS8uLKSELScgkFvTY", target: "_blank", rel: "noopener noreferrer", children: "Recommendation letters \u2197" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("a", { href: "https://drive.google.com/drive/folders/15MVxYi-wn4JLC6ylPTULbUXMbHvw5Kx5", target: "_blank", rel: "noopener noreferrer", children: "Features \u2197" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-black nk-numbers", id: "results", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "nk-eyebrow", children: "(Results)" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-numbers-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center", id: 0, pre: "Real numbers,", hl: "real results" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "nk-sub", children: "Real numbers from real projects, with the receipts to back them." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "nk-numgrid", children: numbers.map((n2) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("strong", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(CountUp, { value: n2.n }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("em", { children: n2.s })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: n2.l })
        ] }, n2.l)) }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-numstrip", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "27K to 103K creator growth" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "12 writers led" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "3,000+ fest attendees" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "1,700+ virtual attendees" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "10+ sectors" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "4 languages" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "rs-proofs", children: proofs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("a", { className: p.img ? "rs-proof has-img" : "rs-proof", href: p.href, target: "_blank", rel: "noopener noreferrer", children: [
          p.img && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: p.img === "brut" ? proof_brut_default : proof_yash_default, alt: p.img === "brut" ? "Brut India reel featuring Yashita Singh at 2M views" : "YouTube search for manipal 2026 showing Joining Manipal in 2026? BEWARE!! by Yash Garg at 58K views" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("small", { children: p.k }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("strong", { children: p.t }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: p.d }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "See the proof \u2197" })
        ] }, p.k)) }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("a", { className: "nk-btn is-yellow rs-all", href: RESULTS_FOLDER, target: "_blank", rel: "noopener noreferrer", children: "All the receipts \u2197" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-white nk-tools", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-orbit", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", {}),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", {}),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center", id: 2, center: true, pre: "Tools I", hl: "work with" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("p", { className: "nk-center-sub", children: [
          tools.length,
          " tools, 4 languages and the frameworks I actually use."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("p", { className: "core-h", children: [
          "Core stack ",
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "(the non-negotiables)" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "core-stack", children: coreTools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: t }, t)) }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("details", { className: "tools-more", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("summary", { onClick: (e2) => {
            e2.preventDefault();
            const d2 = e2.currentTarget.parentElement;
            d2.open = !d2.open;
          }, children: [
            "+ the rest of the toolbox ",
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "(tap to expand)" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "nk-tools-cloud", children: tools.filter((t) => !coreTools.includes(t)).map((t) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: t }, t)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "nk-frameworks", children: frameworks.map(([k2, v2]) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("strong", { children: k2 }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: v2 })
        ] }, k2)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-light nk-media nk-feat", id: "featured", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center", pre: "I got", hl: "featured, YAY!" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("a", { className: "px-clip", href: "https://bsinsider.in/diya-nathwani-came-to-iit-madras-for-data-science-she-found-everything-else-too/", target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: bs_insider_default, alt: "BS Insider article: Diya Nathwani Came to IIT Madras for Data Science, she Found Everything Else Too" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "px-cap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("strong", { children: "Featured on BS Insider, IITM BS Diaries" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("em", { children: "2026. Came for the data science, found everything else too. The plot, basically." }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "Read the feature \u2197" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Pods, { guest: true })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Stars, {}),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-light nk-media nk-pods", id: "media", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center is-brk", id: 1, pre: "In the Parallel Universe,", hl: "I HOST PODCASTS!" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Pods, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Letter, {}),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Testimonials, {}),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-light nk-media nk-mzsec", id: "gallery", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center", id: 3, pre: "Find me", hl: "online" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-media-links", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("a", { className: "nk-btn is-black", href: YOUTUBE, target: "_blank", rel: "noopener noreferrer", children: "Watch on YouTube" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("a", { className: "nk-btn is-outline-dark", href: SUBSTACK, target: "_blank", rel: "noopener noreferrer", children: "Read on Substack" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Keychains, {})
      ] }),
      SHOW_NOTES && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_jsx_runtime29.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-light nk-notes", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center", id: 0, pre: "How I think:", hl: "strategy notes" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "nk-center-sub is-left", children: "Tap a card. The strategy spills itself." }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "nk-notegrid", children: notes.map(([t, b2], i) => {
          const on = revealed.includes(i);
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("button", { className: on ? "nk-note is-on" : "nk-note", "aria-expanded": on, onClick: () => setRevealed(on ? revealed.filter((x) => x !== i) : [...revealed, i]), children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "nk-note-no", children: String(i + 1).padStart(2, "0") }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("strong", { children: t }),
            on ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "nk-note-body", children: b2 }) : /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "nk-note-hint", children: "Tap to reveal" })
          ] }, t);
        }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-dark nk-faq", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Title, { cls: "nk-serif is-center", id: 1, pre: "Your", hl: "questions, answered" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "nk-sub", children: "What hiring managers and founders ask me on the first call, answered upfront." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Accordion, { items: faqs, numbered: true })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Contact, {}),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(WaFab, {}),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "nk nk-light nk-cards", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("a", { className: "nk-ccard", href: `mailto:${EMAIL}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "\u2709\uFE0F" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("small", { children: "Email" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("strong", { children: EMAIL })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("a", { className: "nk-ccard", href: WA2, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "\u{1F4AC}" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("small", { children: "WhatsApp" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("strong", { children: "Tap to chat" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-ccard", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "\u{1F4CD}" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("small", { children: "Location" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("strong", { children: "Mumbai / Nagpur, India. Remote\u2011friendly." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "nk-foot", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("a", { href: LINKEDIN, target: "_blank", rel: "noopener noreferrer", children: [
            "LinkedIn ",
            "\u2197"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("a", { href: "https://www.instagram.com/mindonecstasy_/", target: "_blank", rel: "noopener noreferrer", children: [
            "Instagram ",
            "\u2197"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("a", { href: YOUTUBE, target: "_blank", rel: "noopener noreferrer", children: [
            "YouTube ",
            "\u2197"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("a", { href: SUBSTACK, target: "_blank", rel: "noopener noreferrer", children: [
            "Substack ",
            "\u2197"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("a", { href: "https://x.com/diya_nathwani", target: "_blank", rel: "noopener noreferrer", children: [
            "X ",
            "\u2197"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("a", { href: `mailto:${EMAIL}`, children: [
            "Email ",
            "\u2197"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "nk-updated", children: "Updated September 2026." })
      ] })
    ] }) });
  }
  function App() {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(Routes, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Route, { path: "/", element: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(HomePage, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Route, { path: "/services", element: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ServicesPage, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Route, { path: "/pay", element: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(PayPage, {}) })
    ] });
  }

  // src/main.tsx
  var import_jsx_runtime30 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime30.jsx)(FileRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(App, {}) }));
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-up-right.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-left.js:
lucide-react/dist/esm/icons/chevron-right.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-BV7QT456.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
