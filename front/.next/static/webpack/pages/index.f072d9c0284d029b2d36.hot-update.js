webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-intersection-observer/react-intersection-observer.esm.js ***!
  \*************************************************************************************/
/*! exports provided: InView, defaultFallbackInView, observe, useInView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InView", function() { return InView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFallbackInView", function() { return defaultFallbackInView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInView", function() { return useInView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var observerMap = new Map();
var RootIds = new WeakMap();
var rootId = 0;
var unsupportedValue = undefined;
/**
 * What should be the default behavior if the IntersectionObserver is unsupported?
 * Ideally the polyfill has been loaded, you can have the following happen:
 * - `undefined`: Throw an error
 * - `true` or `false`: Set the `inView` value to this regardless of intersection state
 * **/

function defaultFallbackInView(inView) {
  unsupportedValue = inView;
}
/**
 * Generate a unique ID for the root element
 * @param root
 */

function getRootId(root) {
  if (!root) return '0';
  if (RootIds.has(root)) return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
/**
 * Convert the options to a string Id, based on the values.
 * Ensures we can reuse the same observer when observing elements with the same options.
 * @param options
 */


function optionsToId(options) {
  return Object.keys(options).sort().filter(function (key) {
    return options[key] !== undefined;
  }).map(function (key) {
    return key + "_" + (key === 'root' ? getRootId(options.root) : options[key]);
  }).toString();
}

function createObserver(options) {
  // Create a unique ID for this observer instance, based on the root, root margin and threshold.
  var id = optionsToId(options);
  var instance = observerMap.get(id);

  if (!instance) {
    // Create a map of elements this observer is going to observe. Each element has a list of callbacks that should be triggered, once it comes into view.
    var elements = new Map();
    var thresholds;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var _elements$get;

        // While it would be nice if you could just look at isIntersecting to determine if the component is inside the viewport, browsers can't agree on how to use it.
        // -Firefox ignores `threshold` when considering `isIntersecting`, so it will never be false again if `threshold` is > 0
        var inView = entry.isIntersecting && thresholds.some(function (threshold) {
          return entry.intersectionRatio >= threshold;
        }); // @ts-ignore support IntersectionObserver v2

        if (options.trackVisibility && typeof entry.isVisible === 'undefined') {
          // The browser doesn't support Intersection Observer v2, falling back to v1 behavior.
          // @ts-ignore
          entry.isVisible = inView;
        }

        (_elements$get = elements.get(entry.target)) == null ? void 0 : _elements$get.forEach(function (callback) {
          callback(inView, entry);
        });
      });
    }, options); // Ensure we have a valid thresholds array. If not, use the threshold from the options

    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id: id,
      observer: observer,
      elements: elements
    };
    observerMap.set(id, instance);
  }

  return instance;
}
/**
 * @param element - DOM Element to observe
 * @param callback - Callback function to trigger when intersection status changes
 * @param options - Intersection Observer options
 * @param fallbackInView - Fallback inView value.
 * @return Function - Cleanup function that should be triggered to unregister the observer
 */


function observe(element, callback, options, fallbackInView) {
  if (options === void 0) {
    options = {};
  }

  if (fallbackInView === void 0) {
    fallbackInView = unsupportedValue;
  }

  if (typeof window.IntersectionObserver === 'undefined' && fallbackInView !== undefined) {
    var bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === 'number' ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return function () {// Nothing to cleanup
    };
  } // An observer with the same options can be reused, so lets use this fact


  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements; // Register the callback listener for this element


  var callbacks = elements.get(element) || [];

  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }

  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    // Remove the callback from the callback list
    callbacks.splice(callbacks.indexOf(callback), 1);

    if (callbacks.length === 0) {
      // No more callback exists for element, so destroy it
      elements["delete"](element);
      observer.unobserve(element);
    }

    if (elements.size === 0) {
      // No more elements are being observer by this instance, so destroy it
      observer.disconnect();
      observerMap["delete"](id);
    }
  };
}

var _excluded = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

function isPlainChildren(props) {
  return typeof props.children !== 'function';
}
/**
 ## Render props

 To use the `<InView>` component, you pass it a function. It will be called
 whenever the state changes, with the new value of `inView`. In addition to the
 `inView` prop, children also receive a `ref` that should be set on the
 containing DOM element. This is the element that the IntersectionObserver will
 monitor.

 If you need it, you can also access the
 [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)
 on `entry`, giving you access to all the details about the current intersection
 state.

 ```jsx
 import { InView } from 'react-intersection-observer';

 const Component = () => (
 <InView>
 {({ inView, ref, entry }) => (
      <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div>
    )}
 </InView>
 );

 export default Component;
 ```

 ## Plain children

 You can pass any element to the `<InView />`, and it will handle creating the
 wrapping DOM element. Add a handler to the `onChange` method, and control the
 state in your own component. Any extra props you add to `<InView>` will be
 passed to the HTML element, allowing you set the `className`, `style`, etc.

 ```jsx
 import { InView } from 'react-intersection-observer';

 const Component = () => (
 <InView as="div" onChange={(inView, entry) => console.log('Inview:', inView)}>
 <h2>Plain children are always rendered. Use onChange to monitor state.</h2>
 </InView>
 );

 export default Component;
 ```
 */


var InView = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(InView, _React$Component);

  function InView(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.node = null;
    _this._unobserveCb = null;

    _this.handleNode = function (node) {
      if (_this.node) {
        // Clear the old observer, before we start observing a new element
        _this.unobserve();

        if (!node && !_this.props.triggerOnce && !_this.props.skip) {
          // Reset the state if we get a new node, and we aren't ignoring updates
          _this.setState({
            inView: !!_this.props.initialInView,
            entry: undefined
          });
        }
      }

      _this.node = node ? node : null;

      _this.observeNode();
    };

    _this.handleChange = function (inView, entry) {
      if (inView && _this.props.triggerOnce) {
        // If `triggerOnce` is true, we should stop observing the element.
        _this.unobserve();
      }

      if (!isPlainChildren(_this.props)) {
        // Store the current State, so we can pass it to the children in the next render update
        // There's no reason to update the state for plain children, since it's not used in the rendering.
        _this.setState({
          inView: inView,
          entry: entry
        });
      }

      if (_this.props.onChange) {
        // If the user is actively listening for onChange, always trigger it
        _this.props.onChange(inView, entry);
      }
    };

    _this.state = {
      inView: !!props.initialInView,
      entry: undefined
    };
    return _this;
  }

  var _proto = InView.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    // If a IntersectionObserver option changed, reinit the observer
    if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {
      this.unobserve();
      this.observeNode();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unobserve();
    this.node = null;
  };

  _proto.observeNode = function observeNode() {
    if (!this.node || this.props.skip) return;
    var _this$props = this.props,
        threshold = _this$props.threshold,
        root = _this$props.root,
        rootMargin = _this$props.rootMargin,
        trackVisibility = _this$props.trackVisibility,
        delay = _this$props.delay,
        fallbackInView = _this$props.fallbackInView;
    this._unobserveCb = observe(this.node, this.handleChange, {
      threshold: threshold,
      root: root,
      rootMargin: rootMargin,
      // @ts-ignore
      trackVisibility: trackVisibility,
      // @ts-ignore
      delay: delay
    }, fallbackInView);
  };

  _proto.unobserve = function unobserve() {
    if (this._unobserveCb) {
      this._unobserveCb();

      this._unobserveCb = null;
    }
  };

  _proto.render = function render() {
    if (!isPlainChildren(this.props)) {
      var _this$state = this.state,
          inView = _this$state.inView,
          entry = _this$state.entry;
      return this.props.children({
        inView: inView,
        entry: entry,
        ref: this.handleNode
      });
    }

    var _this$props2 = this.props,
        children = _this$props2.children,
        as = _this$props2.as,
        props = _objectWithoutPropertiesLoose(_this$props2, _excluded);

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](as || 'div', _extends({
      ref: this.handleNode
    }, props), children);
  };

  return InView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/**
 * React Hooks make it easy to monitor the `inView` state of your components. Call
 * the `useInView` hook with the (optional) [options](#options) you need. It will
 * return an array containing a `ref`, the `inView` status and the current
 * [`entry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry).
 * Assign the `ref` to the DOM element you want to monitor, and the hook will
 * report the status.
 *
 * @example
 * ```jsx
 * import React from 'react';
 * import { useInView } from 'react-intersection-observer';
 *
 * const Component = () => {
 *   const { ref, inView, entry } = useInView({
 *       threshold: 0,
 *   });
 *
 *   return (
 *     <div ref={ref}>
 *       <h2>{`Header inside viewport ${inView}.`}</h2>
 *     </div>
 *   );
 * };
 * ```
 */

function useInView(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      threshold = _ref.threshold,
      delay = _ref.delay,
      trackVisibility = _ref.trackVisibility,
      rootMargin = _ref.rootMargin,
      root = _ref.root,
      triggerOnce = _ref.triggerOnce,
      skip = _ref.skip,
      initialInView = _ref.initialInView,
      fallbackInView = _ref.fallbackInView,
      onChange = _ref.onChange;

  var unobserve = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
  var callback = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    inView: !!initialInView
  }),
      state = _React$useState[0],
      setState = _React$useState[1]; // Store the onChange callback in a `ref`, so we can access the latest instance inside the `useCallback`.


  callback.current = onChange;
  var setRef = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (node) {
    if (unobserve.current !== undefined) {
      unobserve.current();
      unobserve.current = undefined;
    } // Skip creating the observer


    if (skip) return;

    if (node) {
      unobserve.current = observe(node, function (inView, entry) {
        setState({
          inView: inView,
          entry: entry
        });
        if (callback.current) callback.current(inView, entry);

        if (entry.isIntersecting && triggerOnce && unobserve.current) {
          // If it should only trigger once, unobserve the element after it's inView
          unobserve.current();
          unobserve.current = undefined;
        }
      }, {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold,
        // @ts-ignore
        trackVisibility: trackVisibility,
        // @ts-ignore
        delay: delay
      }, fallbackInView);
    }
  }, // We break the rule here, because we aren't including the actual `threshold` variable
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [// If the threshold is an array, convert it to a string so it won't change between renders.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  Array.isArray(threshold) ? threshold.toString() : threshold, root, rootMargin, triggerOnce, skip, trackVisibility, fallbackInView, delay]);
  /* eslint-disable-next-line */

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (!unobserve.current && state.entry && !triggerOnce && !skip) {
      // If we don't have a ref, then reset the state (unless the hook is set to only `triggerOnce` or `skip`)
      // This ensures we correctly reflect the current state - If you aren't observing anything, then nothing is inView
      setState({
        inView: !!initialInView
      });
    }
  });
  var result = [setRef, state.inView, state.entry]; // Support object destructuring, by adding the specific values.

  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}


//# sourceMappingURL=react-intersection-observer.esm.js.map


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\hs\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\CodeBox\\Inflearn\\NodeBird\\front\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading;

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"])(),
      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LOAD_USER_REQUEST"]
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostsLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_POSTS_REQUEST"] // data: mainPosts[mainPosts.length - 1].id,

          });
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 14
    }
  }), mainPosts.map(function (post) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    });
  }), __jsx("div", {
    ref: hasMorePosts && !loadPostsLoading ? ref : undefined,
    style: {
      height: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }));
};

_s(Home, "+cBxueO0jqRPW3NPxMmZOIF/Frc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlci9yZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInVzZUluVmlldyIsInJlZiIsImluVmlldyIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIm9uU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiaGFzTW9yZVBvc3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImlkIiwidW5kZWZpbmVkIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7O0FBRS9CO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUFwQjtNQUF3QixJQUFJLEVBQUV0QixJQUE5QjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBRGE7RUFBQSxDQUFkLENBRkgsRUFLRTtJQUNFLEdBQUcsRUFBRUUsWUFBWSxJQUFJLENBQUNDLGdCQUFqQixHQUFvQ0UsR0FBcEMsR0FBMENrQixTQURqRDtJQUVFLEtBQUssRUFBRTtNQUFFQyxNQUFNLEVBQUU7SUFBVixDQUZUO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFMRixDQURGO0FBWUQsQ0FqREQ7O0dBQU0vQixJO1VBQ2FFLHVELEVBQ0ZDLHVELEVBQ3VDQSx1RCxFQUdoQ1EscUU7OztLQU5sQlgsSTtBQW1EU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjA3MmQ5YzAyODRkMDI5YjJkMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuXG4gIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIG9ic2VydmVyTWFwID0gbmV3IE1hcCgpO1xudmFyIFJvb3RJZHMgPSBuZXcgV2Vha01hcCgpO1xudmFyIHJvb3RJZCA9IDA7XG52YXIgdW5zdXBwb3J0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbi8qKlxyXG4gKiBXaGF0IHNob3VsZCBiZSB0aGUgZGVmYXVsdCBiZWhhdmlvciBpZiB0aGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaXMgdW5zdXBwb3J0ZWQ/XHJcbiAqIElkZWFsbHkgdGhlIHBvbHlmaWxsIGhhcyBiZWVuIGxvYWRlZCwgeW91IGNhbiBoYXZlIHRoZSBmb2xsb3dpbmcgaGFwcGVuOlxyXG4gKiAtIGB1bmRlZmluZWRgOiBUaHJvdyBhbiBlcnJvclxyXG4gKiAtIGB0cnVlYCBvciBgZmFsc2VgOiBTZXQgdGhlIGBpblZpZXdgIHZhbHVlIHRvIHRoaXMgcmVnYXJkbGVzcyBvZiBpbnRlcnNlY3Rpb24gc3RhdGVcclxuICogKiovXG5cbmZ1bmN0aW9uIGRlZmF1bHRGYWxsYmFja0luVmlldyhpblZpZXcpIHtcbiAgdW5zdXBwb3J0ZWRWYWx1ZSA9IGluVmlldztcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgdGhlIHJvb3QgZWxlbWVudFxyXG4gKiBAcGFyYW0gcm9vdFxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0Um9vdElkKHJvb3QpIHtcbiAgaWYgKCFyb290KSByZXR1cm4gJzAnO1xuICBpZiAoUm9vdElkcy5oYXMocm9vdCkpIHJldHVybiBSb290SWRzLmdldChyb290KTtcbiAgcm9vdElkICs9IDE7XG4gIFJvb3RJZHMuc2V0KHJvb3QsIHJvb3RJZC50b1N0cmluZygpKTtcbiAgcmV0dXJuIFJvb3RJZHMuZ2V0KHJvb3QpO1xufVxuLyoqXHJcbiAqIENvbnZlcnQgdGhlIG9wdGlvbnMgdG8gYSBzdHJpbmcgSWQsIGJhc2VkIG9uIHRoZSB2YWx1ZXMuXHJcbiAqIEVuc3VyZXMgd2UgY2FuIHJldXNlIHRoZSBzYW1lIG9ic2VydmVyIHdoZW4gb2JzZXJ2aW5nIGVsZW1lbnRzIHdpdGggdGhlIHNhbWUgb3B0aW9ucy5cclxuICogQHBhcmFtIG9wdGlvbnNcclxuICovXG5cblxuZnVuY3Rpb24gb3B0aW9uc1RvSWQob3B0aW9ucykge1xuICByZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykuc29ydCgpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG9wdGlvbnNba2V5XSAhPT0gdW5kZWZpbmVkO1xuICB9KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXkgKyBcIl9cIiArIChrZXkgPT09ICdyb290JyA/IGdldFJvb3RJZChvcHRpb25zLnJvb3QpIDogb3B0aW9uc1trZXldKTtcbiAgfSkudG9TdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAvLyBDcmVhdGUgYSB1bmlxdWUgSUQgZm9yIHRoaXMgb2JzZXJ2ZXIgaW5zdGFuY2UsIGJhc2VkIG9uIHRoZSByb290LCByb290IG1hcmdpbiBhbmQgdGhyZXNob2xkLlxuICB2YXIgaWQgPSBvcHRpb25zVG9JZChvcHRpb25zKTtcbiAgdmFyIGluc3RhbmNlID0gb2JzZXJ2ZXJNYXAuZ2V0KGlkKTtcblxuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgLy8gQ3JlYXRlIGEgbWFwIG9mIGVsZW1lbnRzIHRoaXMgb2JzZXJ2ZXIgaXMgZ29pbmcgdG8gb2JzZXJ2ZS4gRWFjaCBlbGVtZW50IGhhcyBhIGxpc3Qgb2YgY2FsbGJhY2tzIHRoYXQgc2hvdWxkIGJlIHRyaWdnZXJlZCwgb25jZSBpdCBjb21lcyBpbnRvIHZpZXcuXG4gICAgdmFyIGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIHZhciB0aHJlc2hvbGRzO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICB2YXIgX2VsZW1lbnRzJGdldDtcblxuICAgICAgICAvLyBXaGlsZSBpdCB3b3VsZCBiZSBuaWNlIGlmIHlvdSBjb3VsZCBqdXN0IGxvb2sgYXQgaXNJbnRlcnNlY3RpbmcgdG8gZGV0ZXJtaW5lIGlmIHRoZSBjb21wb25lbnQgaXMgaW5zaWRlIHRoZSB2aWV3cG9ydCwgYnJvd3NlcnMgY2FuJ3QgYWdyZWUgb24gaG93IHRvIHVzZSBpdC5cbiAgICAgICAgLy8gLUZpcmVmb3ggaWdub3JlcyBgdGhyZXNob2xkYCB3aGVuIGNvbnNpZGVyaW5nIGBpc0ludGVyc2VjdGluZ2AsIHNvIGl0IHdpbGwgbmV2ZXIgYmUgZmFsc2UgYWdhaW4gaWYgYHRocmVzaG9sZGAgaXMgPiAwXG4gICAgICAgIHZhciBpblZpZXcgPSBlbnRyeS5pc0ludGVyc2VjdGluZyAmJiB0aHJlc2hvbGRzLnNvbWUoZnVuY3Rpb24gKHRocmVzaG9sZCkge1xuICAgICAgICAgIHJldHVybiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+PSB0aHJlc2hvbGQ7XG4gICAgICAgIH0pOyAvLyBAdHMtaWdub3JlIHN1cHBvcnQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgdjJcblxuICAgICAgICBpZiAob3B0aW9ucy50cmFja1Zpc2liaWxpdHkgJiYgdHlwZW9mIGVudHJ5LmlzVmlzaWJsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBUaGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgSW50ZXJzZWN0aW9uIE9ic2VydmVyIHYyLCBmYWxsaW5nIGJhY2sgdG8gdjEgYmVoYXZpb3IuXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGVudHJ5LmlzVmlzaWJsZSA9IGluVmlldztcbiAgICAgICAgfVxuXG4gICAgICAgIChfZWxlbWVudHMkZ2V0ID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCkpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudHMkZ2V0LmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soaW5WaWV3LCBlbnRyeSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7IC8vIEVuc3VyZSB3ZSBoYXZlIGEgdmFsaWQgdGhyZXNob2xkcyBhcnJheS4gSWYgbm90LCB1c2UgdGhlIHRocmVzaG9sZCBmcm9tIHRoZSBvcHRpb25zXG5cbiAgICB0aHJlc2hvbGRzID0gb2JzZXJ2ZXIudGhyZXNob2xkcyB8fCAoQXJyYXkuaXNBcnJheShvcHRpb25zLnRocmVzaG9sZCkgPyBvcHRpb25zLnRocmVzaG9sZCA6IFtvcHRpb25zLnRocmVzaG9sZCB8fCAwXSk7XG4gICAgaW5zdGFuY2UgPSB7XG4gICAgICBpZDogaWQsXG4gICAgICBvYnNlcnZlcjogb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50czogZWxlbWVudHNcbiAgICB9O1xuICAgIG9ic2VydmVyTWFwLnNldChpZCwgaW5zdGFuY2UpO1xuICB9XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuLyoqXHJcbiAqIEBwYXJhbSBlbGVtZW50IC0gRE9NIEVsZW1lbnQgdG8gb2JzZXJ2ZVxyXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB0byB0cmlnZ2VyIHdoZW4gaW50ZXJzZWN0aW9uIHN0YXR1cyBjaGFuZ2VzXHJcbiAqIEBwYXJhbSBvcHRpb25zIC0gSW50ZXJzZWN0aW9uIE9ic2VydmVyIG9wdGlvbnNcclxuICogQHBhcmFtIGZhbGxiYWNrSW5WaWV3IC0gRmFsbGJhY2sgaW5WaWV3IHZhbHVlLlxyXG4gKiBAcmV0dXJuIEZ1bmN0aW9uIC0gQ2xlYW51cCBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSB0cmlnZ2VyZWQgdG8gdW5yZWdpc3RlciB0aGUgb2JzZXJ2ZXJcclxuICovXG5cblxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucywgZmFsbGJhY2tJblZpZXcpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmIChmYWxsYmFja0luVmlldyA9PT0gdm9pZCAwKSB7XG4gICAgZmFsbGJhY2tJblZpZXcgPSB1bnN1cHBvcnRlZFZhbHVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnICYmIGZhbGxiYWNrSW5WaWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgYm91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjYWxsYmFjayhmYWxsYmFja0luVmlldywge1xuICAgICAgaXNJbnRlcnNlY3Rpbmc6IGZhbGxiYWNrSW5WaWV3LFxuICAgICAgdGFyZ2V0OiBlbGVtZW50LFxuICAgICAgaW50ZXJzZWN0aW9uUmF0aW86IHR5cGVvZiBvcHRpb25zLnRocmVzaG9sZCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnRocmVzaG9sZCA6IDAsXG4gICAgICB0aW1lOiAwLFxuICAgICAgYm91bmRpbmdDbGllbnRSZWN0OiBib3VuZHMsXG4gICAgICBpbnRlcnNlY3Rpb25SZWN0OiBib3VuZHMsXG4gICAgICByb290Qm91bmRzOiBib3VuZHNcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkgey8vIE5vdGhpbmcgdG8gY2xlYW51cFxuICAgIH07XG4gIH0gLy8gQW4gb2JzZXJ2ZXIgd2l0aCB0aGUgc2FtZSBvcHRpb25zIGNhbiBiZSByZXVzZWQsIHNvIGxldHMgdXNlIHRoaXMgZmFjdFxuXG5cbiAgdmFyIF9jcmVhdGVPYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpLFxuICAgICAgaWQgPSBfY3JlYXRlT2JzZXJ2ZXIuaWQsXG4gICAgICBvYnNlcnZlciA9IF9jcmVhdGVPYnNlcnZlci5vYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzID0gX2NyZWF0ZU9ic2VydmVyLmVsZW1lbnRzOyAvLyBSZWdpc3RlciB0aGUgY2FsbGJhY2sgbGlzdGVuZXIgZm9yIHRoaXMgZWxlbWVudFxuXG5cbiAgdmFyIGNhbGxiYWNrcyA9IGVsZW1lbnRzLmdldChlbGVtZW50KSB8fCBbXTtcblxuICBpZiAoIWVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFja3MpO1xuICB9XG5cbiAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgY2FsbGJhY2sgZnJvbSB0aGUgY2FsbGJhY2sgbGlzdFxuICAgIGNhbGxiYWNrcy5zcGxpY2UoY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spLCAxKTtcblxuICAgIGlmIChjYWxsYmFja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBObyBtb3JlIGNhbGxiYWNrIGV4aXN0cyBmb3IgZWxlbWVudCwgc28gZGVzdHJveSBpdFxuICAgICAgZWxlbWVudHNbXCJkZWxldGVcIl0oZWxlbWVudCk7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIC8vIE5vIG1vcmUgZWxlbWVudHMgYXJlIGJlaW5nIG9ic2VydmVyIGJ5IHRoaXMgaW5zdGFuY2UsIHNvIGRlc3Ryb3kgaXRcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIG9ic2VydmVyTWFwW1wiZGVsZXRlXCJdKGlkKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJjaGlsZHJlblwiLCBcImFzXCIsIFwidHJpZ2dlck9uY2VcIiwgXCJ0aHJlc2hvbGRcIiwgXCJyb290XCIsIFwicm9vdE1hcmdpblwiLCBcIm9uQ2hhbmdlXCIsIFwic2tpcFwiLCBcInRyYWNrVmlzaWJpbGl0eVwiLCBcImRlbGF5XCIsIFwiaW5pdGlhbEluVmlld1wiLCBcImZhbGxiYWNrSW5WaWV3XCJdO1xuXG5mdW5jdGlvbiBpc1BsYWluQ2hpbGRyZW4ocHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9wcy5jaGlsZHJlbiAhPT0gJ2Z1bmN0aW9uJztcbn1cbi8qKlxyXG4gIyMgUmVuZGVyIHByb3BzXHJcblxuIFRvIHVzZSB0aGUgYDxJblZpZXc+YCBjb21wb25lbnQsIHlvdSBwYXNzIGl0IGEgZnVuY3Rpb24uIEl0IHdpbGwgYmUgY2FsbGVkXHJcbiB3aGVuZXZlciB0aGUgc3RhdGUgY2hhbmdlcywgd2l0aCB0aGUgbmV3IHZhbHVlIG9mIGBpblZpZXdgLiBJbiBhZGRpdGlvbiB0byB0aGVcclxuIGBpblZpZXdgIHByb3AsIGNoaWxkcmVuIGFsc28gcmVjZWl2ZSBhIGByZWZgIHRoYXQgc2hvdWxkIGJlIHNldCBvbiB0aGVcclxuIGNvbnRhaW5pbmcgRE9NIGVsZW1lbnQuIFRoaXMgaXMgdGhlIGVsZW1lbnQgdGhhdCB0aGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgd2lsbFxyXG4gbW9uaXRvci5cclxuXG4gSWYgeW91IG5lZWQgaXQsIHlvdSBjYW4gYWxzbyBhY2Nlc3MgdGhlXHJcbiBbYEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSlcclxuIG9uIGBlbnRyeWAsIGdpdmluZyB5b3UgYWNjZXNzIHRvIGFsbCB0aGUgZGV0YWlscyBhYm91dCB0aGUgY3VycmVudCBpbnRlcnNlY3Rpb25cclxuIHN0YXRlLlxyXG5cbiBgYGBqc3hcclxuIGltcG9ydCB7IEluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcblxuIGNvbnN0IENvbXBvbmVudCA9ICgpID0+IChcclxuIDxJblZpZXc+XHJcbiB7KHsgaW5WaWV3LCByZWYsIGVudHJ5IH0pID0+IChcclxuICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgPGgyPntgSGVhZGVyIGluc2lkZSB2aWV3cG9ydCAke2luVmlld30uYH08L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICl9XHJcbiA8L0luVmlldz5cclxuICk7XHJcblxuIGV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcclxuIGBgYFxyXG5cbiAjIyBQbGFpbiBjaGlsZHJlblxyXG5cbiBZb3UgY2FuIHBhc3MgYW55IGVsZW1lbnQgdG8gdGhlIGA8SW5WaWV3IC8+YCwgYW5kIGl0IHdpbGwgaGFuZGxlIGNyZWF0aW5nIHRoZVxyXG4gd3JhcHBpbmcgRE9NIGVsZW1lbnQuIEFkZCBhIGhhbmRsZXIgdG8gdGhlIGBvbkNoYW5nZWAgbWV0aG9kLCBhbmQgY29udHJvbCB0aGVcclxuIHN0YXRlIGluIHlvdXIgb3duIGNvbXBvbmVudC4gQW55IGV4dHJhIHByb3BzIHlvdSBhZGQgdG8gYDxJblZpZXc+YCB3aWxsIGJlXHJcbiBwYXNzZWQgdG8gdGhlIEhUTUwgZWxlbWVudCwgYWxsb3dpbmcgeW91IHNldCB0aGUgYGNsYXNzTmFtZWAsIGBzdHlsZWAsIGV0Yy5cclxuXG4gYGBganN4XHJcbiBpbXBvcnQgeyBJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xyXG5cbiBjb25zdCBDb21wb25lbnQgPSAoKSA9PiAoXHJcbiA8SW5WaWV3IGFzPVwiZGl2XCIgb25DaGFuZ2U9eyhpblZpZXcsIGVudHJ5KSA9PiBjb25zb2xlLmxvZygnSW52aWV3OicsIGluVmlldyl9PlxyXG4gPGgyPlBsYWluIGNoaWxkcmVuIGFyZSBhbHdheXMgcmVuZGVyZWQuIFVzZSBvbkNoYW5nZSB0byBtb25pdG9yIHN0YXRlLjwvaDI+XHJcbiA8L0luVmlldz5cclxuICk7XHJcblxuIGV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcclxuIGBgYFxyXG4gKi9cblxuXG52YXIgSW5WaWV3ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEluVmlldywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5WaWV3KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMubm9kZSA9IG51bGw7XG4gICAgX3RoaXMuX3Vub2JzZXJ2ZUNiID0gbnVsbDtcblxuICAgIF90aGlzLmhhbmRsZU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgaWYgKF90aGlzLm5vZGUpIHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIG9sZCBvYnNlcnZlciwgYmVmb3JlIHdlIHN0YXJ0IG9ic2VydmluZyBhIG5ldyBlbGVtZW50XG4gICAgICAgIF90aGlzLnVub2JzZXJ2ZSgpO1xuXG4gICAgICAgIGlmICghbm9kZSAmJiAhX3RoaXMucHJvcHMudHJpZ2dlck9uY2UgJiYgIV90aGlzLnByb3BzLnNraXApIHtcbiAgICAgICAgICAvLyBSZXNldCB0aGUgc3RhdGUgaWYgd2UgZ2V0IGEgbmV3IG5vZGUsIGFuZCB3ZSBhcmVuJ3QgaWdub3JpbmcgdXBkYXRlc1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGluVmlldzogISFfdGhpcy5wcm9wcy5pbml0aWFsSW5WaWV3LFxuICAgICAgICAgICAgZW50cnk6IHVuZGVmaW5lZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLm5vZGUgPSBub2RlID8gbm9kZSA6IG51bGw7XG5cbiAgICAgIF90aGlzLm9ic2VydmVOb2RlKCk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChpblZpZXcsIGVudHJ5KSB7XG4gICAgICBpZiAoaW5WaWV3ICYmIF90aGlzLnByb3BzLnRyaWdnZXJPbmNlKSB7XG4gICAgICAgIC8vIElmIGB0cmlnZ2VyT25jZWAgaXMgdHJ1ZSwgd2Ugc2hvdWxkIHN0b3Agb2JzZXJ2aW5nIHRoZSBlbGVtZW50LlxuICAgICAgICBfdGhpcy51bm9ic2VydmUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1BsYWluQ2hpbGRyZW4oX3RoaXMucHJvcHMpKSB7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBjdXJyZW50IFN0YXRlLCBzbyB3ZSBjYW4gcGFzcyBpdCB0byB0aGUgY2hpbGRyZW4gaW4gdGhlIG5leHQgcmVuZGVyIHVwZGF0ZVxuICAgICAgICAvLyBUaGVyZSdzIG5vIHJlYXNvbiB0byB1cGRhdGUgdGhlIHN0YXRlIGZvciBwbGFpbiBjaGlsZHJlbiwgc2luY2UgaXQncyBub3QgdXNlZCBpbiB0aGUgcmVuZGVyaW5nLlxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5WaWV3OiBpblZpZXcsXG4gICAgICAgICAgZW50cnk6IGVudHJ5XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgaXMgYWN0aXZlbHkgbGlzdGVuaW5nIGZvciBvbkNoYW5nZSwgYWx3YXlzIHRyaWdnZXIgaXRcbiAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoaW5WaWV3LCBlbnRyeSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaW5WaWV3OiAhIXByb3BzLmluaXRpYWxJblZpZXcsXG4gICAgICBlbnRyeTogdW5kZWZpbmVkXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5WaWV3LnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIC8vIElmIGEgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgb3B0aW9uIGNoYW5nZWQsIHJlaW5pdCB0aGUgb2JzZXJ2ZXJcbiAgICBpZiAocHJldlByb3BzLnJvb3RNYXJnaW4gIT09IHRoaXMucHJvcHMucm9vdE1hcmdpbiB8fCBwcmV2UHJvcHMucm9vdCAhPT0gdGhpcy5wcm9wcy5yb290IHx8IHByZXZQcm9wcy50aHJlc2hvbGQgIT09IHRoaXMucHJvcHMudGhyZXNob2xkIHx8IHByZXZQcm9wcy5za2lwICE9PSB0aGlzLnByb3BzLnNraXAgfHwgcHJldlByb3BzLnRyYWNrVmlzaWJpbGl0eSAhPT0gdGhpcy5wcm9wcy50cmFja1Zpc2liaWxpdHkgfHwgcHJldlByb3BzLmRlbGF5ICE9PSB0aGlzLnByb3BzLmRlbGF5KSB7XG4gICAgICB0aGlzLnVub2JzZXJ2ZSgpO1xuICAgICAgdGhpcy5vYnNlcnZlTm9kZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVub2JzZXJ2ZSgpO1xuICAgIHRoaXMubm9kZSA9IG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLm9ic2VydmVOb2RlID0gZnVuY3Rpb24gb2JzZXJ2ZU5vZGUoKSB7XG4gICAgaWYgKCF0aGlzLm5vZGUgfHwgdGhpcy5wcm9wcy5za2lwKSByZXR1cm47XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgdGhyZXNob2xkID0gX3RoaXMkcHJvcHMudGhyZXNob2xkLFxuICAgICAgICByb290ID0gX3RoaXMkcHJvcHMucm9vdCxcbiAgICAgICAgcm9vdE1hcmdpbiA9IF90aGlzJHByb3BzLnJvb3RNYXJnaW4sXG4gICAgICAgIHRyYWNrVmlzaWJpbGl0eSA9IF90aGlzJHByb3BzLnRyYWNrVmlzaWJpbGl0eSxcbiAgICAgICAgZGVsYXkgPSBfdGhpcyRwcm9wcy5kZWxheSxcbiAgICAgICAgZmFsbGJhY2tJblZpZXcgPSBfdGhpcyRwcm9wcy5mYWxsYmFja0luVmlldztcbiAgICB0aGlzLl91bm9ic2VydmVDYiA9IG9ic2VydmUodGhpcy5ub2RlLCB0aGlzLmhhbmRsZUNoYW5nZSwge1xuICAgICAgdGhyZXNob2xkOiB0aHJlc2hvbGQsXG4gICAgICByb290OiByb290LFxuICAgICAgcm9vdE1hcmdpbjogcm9vdE1hcmdpbixcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRyYWNrVmlzaWJpbGl0eTogdHJhY2tWaXNpYmlsaXR5LFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgZGVsYXk6IGRlbGF5XG4gICAgfSwgZmFsbGJhY2tJblZpZXcpO1xuICB9O1xuXG4gIF9wcm90by51bm9ic2VydmUgPSBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgaWYgKHRoaXMuX3Vub2JzZXJ2ZUNiKSB7XG4gICAgICB0aGlzLl91bm9ic2VydmVDYigpO1xuXG4gICAgICB0aGlzLl91bm9ic2VydmVDYiA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKCFpc1BsYWluQ2hpbGRyZW4odGhpcy5wcm9wcykpIHtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaW5WaWV3ID0gX3RoaXMkc3RhdGUuaW5WaWV3LFxuICAgICAgICAgIGVudHJ5ID0gX3RoaXMkc3RhdGUuZW50cnk7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICAgIGluVmlldzogaW5WaWV3LFxuICAgICAgICBlbnRyeTogZW50cnksXG4gICAgICAgIHJlZjogdGhpcy5oYW5kbGVOb2RlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgIGFzID0gX3RoaXMkcHJvcHMyLmFzLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzMiwgX2V4Y2x1ZGVkKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGFzIHx8ICdkaXYnLCBfZXh0ZW5kcyh7XG4gICAgICByZWY6IHRoaXMuaGFuZGxlTm9kZVxuICAgIH0sIHByb3BzKSwgY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBJblZpZXc7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbi8qKlxyXG4gKiBSZWFjdCBIb29rcyBtYWtlIGl0IGVhc3kgdG8gbW9uaXRvciB0aGUgYGluVmlld2Agc3RhdGUgb2YgeW91ciBjb21wb25lbnRzLiBDYWxsXHJcbiAqIHRoZSBgdXNlSW5WaWV3YCBob29rIHdpdGggdGhlIChvcHRpb25hbCkgW29wdGlvbnNdKCNvcHRpb25zKSB5b3UgbmVlZC4gSXQgd2lsbFxyXG4gKiByZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBhIGByZWZgLCB0aGUgYGluVmlld2Agc3RhdHVzIGFuZCB0aGUgY3VycmVudFxyXG4gKiBbYGVudHJ5YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnkpLlxyXG4gKiBBc3NpZ24gdGhlIGByZWZgIHRvIHRoZSBET00gZWxlbWVudCB5b3Ugd2FudCB0byBtb25pdG9yLCBhbmQgdGhlIGhvb2sgd2lsbFxyXG4gKiByZXBvcnQgdGhlIHN0YXR1cy5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBganN4XHJcbiAqIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbiAqIGltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcbiAqXHJcbiAqIGNvbnN0IENvbXBvbmVudCA9ICgpID0+IHtcclxuICogICBjb25zdCB7IHJlZiwgaW5WaWV3LCBlbnRyeSB9ID0gdXNlSW5WaWV3KHtcclxuICogICAgICAgdGhyZXNob2xkOiAwLFxyXG4gKiAgIH0pO1xyXG4gKlxyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8ZGl2IHJlZj17cmVmfT5cclxuICogICAgICAgPGgyPntgSGVhZGVyIGluc2lkZSB2aWV3cG9ydCAke2luVmlld30uYH08L2gyPlxyXG4gKiAgICAgPC9kaXY+XHJcbiAqICAgKTtcclxuICogfTtcclxuICogYGBgXHJcbiAqL1xuXG5mdW5jdGlvbiB1c2VJblZpZXcoX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIHRocmVzaG9sZCA9IF9yZWYudGhyZXNob2xkLFxuICAgICAgZGVsYXkgPSBfcmVmLmRlbGF5LFxuICAgICAgdHJhY2tWaXNpYmlsaXR5ID0gX3JlZi50cmFja1Zpc2liaWxpdHksXG4gICAgICByb290TWFyZ2luID0gX3JlZi5yb290TWFyZ2luLFxuICAgICAgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHRyaWdnZXJPbmNlID0gX3JlZi50cmlnZ2VyT25jZSxcbiAgICAgIHNraXAgPSBfcmVmLnNraXAsXG4gICAgICBpbml0aWFsSW5WaWV3ID0gX3JlZi5pbml0aWFsSW5WaWV3LFxuICAgICAgZmFsbGJhY2tJblZpZXcgPSBfcmVmLmZhbGxiYWNrSW5WaWV3LFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuXG4gIHZhciB1bm9ic2VydmUgPSBSZWFjdC51c2VSZWYoKTtcbiAgdmFyIGNhbGxiYWNrID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBpblZpZXc6ICEhaW5pdGlhbEluVmlld1xuICB9KSxcbiAgICAgIHN0YXRlID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07IC8vIFN0b3JlIHRoZSBvbkNoYW5nZSBjYWxsYmFjayBpbiBhIGByZWZgLCBzbyB3ZSBjYW4gYWNjZXNzIHRoZSBsYXRlc3QgaW5zdGFuY2UgaW5zaWRlIHRoZSBgdXNlQ2FsbGJhY2tgLlxuXG5cbiAgY2FsbGJhY2suY3VycmVudCA9IG9uQ2hhbmdlO1xuICB2YXIgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgIH0gLy8gU2tpcCBjcmVhdGluZyB0aGUgb2JzZXJ2ZXJcblxuXG4gICAgaWYgKHNraXApIHJldHVybjtcblxuICAgIGlmIChub2RlKSB7XG4gICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUobm9kZSwgZnVuY3Rpb24gKGluVmlldywgZW50cnkpIHtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGluVmlldzogaW5WaWV3LFxuICAgICAgICAgIGVudHJ5OiBlbnRyeVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNhbGxiYWNrLmN1cnJlbnQpIGNhbGxiYWNrLmN1cnJlbnQoaW5WaWV3LCBlbnRyeSk7XG5cbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmIHRyaWdnZXJPbmNlICYmIHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgLy8gSWYgaXQgc2hvdWxkIG9ubHkgdHJpZ2dlciBvbmNlLCB1bm9ic2VydmUgdGhlIGVsZW1lbnQgYWZ0ZXIgaXQncyBpblZpZXdcbiAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHJvb3Q6IHJvb3QsXG4gICAgICAgIHJvb3RNYXJnaW46IHJvb3RNYXJnaW4sXG4gICAgICAgIHRocmVzaG9sZDogdGhyZXNob2xkLFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRyYWNrVmlzaWJpbGl0eTogdHJhY2tWaXNpYmlsaXR5LFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGRlbGF5OiBkZWxheVxuICAgICAgfSwgZmFsbGJhY2tJblZpZXcpO1xuICAgIH1cbiAgfSwgLy8gV2UgYnJlYWsgdGhlIHJ1bGUgaGVyZSwgYmVjYXVzZSB3ZSBhcmVuJ3QgaW5jbHVkaW5nIHRoZSBhY3R1YWwgYHRocmVzaG9sZGAgdmFyaWFibGVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBbLy8gSWYgdGhlIHRocmVzaG9sZCBpcyBhbiBhcnJheSwgY29udmVydCBpdCB0byBhIHN0cmluZyBzbyBpdCB3b24ndCBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIEFycmF5LmlzQXJyYXkodGhyZXNob2xkKSA/IHRocmVzaG9sZC50b1N0cmluZygpIDogdGhyZXNob2xkLCByb290LCByb290TWFyZ2luLCB0cmlnZ2VyT25jZSwgc2tpcCwgdHJhY2tWaXNpYmlsaXR5LCBmYWxsYmFja0luVmlldywgZGVsYXldKTtcbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXVub2JzZXJ2ZS5jdXJyZW50ICYmIHN0YXRlLmVudHJ5ICYmICF0cmlnZ2VyT25jZSAmJiAhc2tpcCkge1xuICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHJlZiwgdGhlbiByZXNldCB0aGUgc3RhdGUgKHVubGVzcyB0aGUgaG9vayBpcyBzZXQgdG8gb25seSBgdHJpZ2dlck9uY2VgIG9yIGBza2lwYClcbiAgICAgIC8vIFRoaXMgZW5zdXJlcyB3ZSBjb3JyZWN0bHkgcmVmbGVjdCB0aGUgY3VycmVudCBzdGF0ZSAtIElmIHlvdSBhcmVuJ3Qgb2JzZXJ2aW5nIGFueXRoaW5nLCB0aGVuIG5vdGhpbmcgaXMgaW5WaWV3XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGluVmlldzogISFpbml0aWFsSW5WaWV3XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICB2YXIgcmVzdWx0ID0gW3NldFJlZiwgc3RhdGUuaW5WaWV3LCBzdGF0ZS5lbnRyeV07IC8vIFN1cHBvcnQgb2JqZWN0IGRlc3RydWN0dXJpbmcsIGJ5IGFkZGluZyB0aGUgc3BlY2lmaWMgdmFsdWVzLlxuXG4gIHJlc3VsdC5yZWYgPSByZXN1bHRbMF07XG4gIHJlc3VsdC5pblZpZXcgPSByZXN1bHRbMV07XG4gIHJlc3VsdC5lbnRyeSA9IHJlc3VsdFsyXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IHsgSW5WaWV3LCBkZWZhdWx0RmFsbGJhY2tJblZpZXcsIG9ic2VydmUsIHVzZUluVmlldyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyLmVzbS5qcy5tYXBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldygpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMFxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoaGFzTW9yZVBvc3QgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICAvLyBkYXRhOiBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdLmlkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFttYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICApKX1cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHJlZj17aGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nID8gcmVmIDogdW5kZWZpbmVkfVxyXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogMTAgfX1cclxuICAgICAgLz5cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9