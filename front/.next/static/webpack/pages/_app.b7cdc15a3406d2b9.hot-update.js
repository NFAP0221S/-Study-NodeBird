"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginAction\": function() { return /* binding */ loginAction; },\n/* harmony export */   \"logoutAction\": function() { return /* binding */ logoutAction; }\n/* harmony export */ });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar initialState = {\n    user: {\n        isLoggedIn: false,\n        user: null,\n        signUpData: {},\n        loginData: {}\n    },\n    post: {\n        mainPosts: []\n    }\n};\n// action creator\nvar loginAction = function(data) {\n    return {\n        type: \"LOG_IN\",\n        data: data\n    };\n};\nvar logoutAction = function() {\n    return {\n        type: \"LOG_OUT\"\n    };\n};\n// 루트 리듀서\nvar rootReducer = function() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:\n            console.log(\"HYDRATE\", action);\n        case \"LOG_IN\":\n            return _objectSpread({}, state, {\n                user: _objectSpread({}, state.user, {\n                    isLoggedIn: true,\n                    user: action.data\n                })\n            });\n        case \"LOG_OUT\":\n            return _objectSpread({}, state, {\n                user: _objectSpread({}, state.user, {\n                    isLoggedIn: false,\n                    user: null\n                })\n            });\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUU3QyxJQUFNQyxZQUFZLEdBQUc7SUFDbkJDLElBQUksRUFBRTtRQUNKQyxVQUFVLEVBQUUsS0FBSztRQUNqQkQsSUFBSSxFQUFFLElBQUk7UUFDVkUsVUFBVSxFQUFFLEVBQUU7UUFDZEMsU0FBUyxFQUFFLEVBQUU7S0FDZDtJQUNEQyxJQUFJLEVBQUU7UUFDSkMsU0FBUyxFQUFFLEVBQUU7S0FDZDtDQUNGO0FBRUQsaUJBQWlCO0FBQ1YsSUFBTUMsV0FBVyxHQUFHLFNBQUNDLElBQUksRUFBSztJQUNuQyxPQUFPO1FBQ0xDLElBQUksRUFBRSxRQUFRO1FBQ2RELElBQUksRUFBSkEsSUFBSTtLQUNMLENBQUM7Q0FDSCxDQUFDO0FBRUssSUFBTUUsWUFBWSxHQUFHLFdBQU07SUFDaEMsT0FBTztRQUNMRCxJQUFJLEVBQUUsU0FBUztLQUNoQixDQUFDO0NBQ0gsQ0FBQztBQUVGO0FBQ0EsSUFBTUUsV0FBVyxHQUFHLFdBQWtDO1FBQWpDQyxLQUFLLG9FQUFHWixZQUFZLEVBQUVhLE1BQU07SUFDL0MsT0FBUUEsTUFBTSxDQUFDSixJQUFJO1FBQ2pCLEtBQUtWLHVEQUFPO1lBQ1ZlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRUYsTUFBTSxDQUFDLENBQUM7UUFDakMsS0FBSyxRQUFRO1lBQ1gsT0FBTyxrQkFDRkQsS0FBSztnQkFDUlgsSUFBSSxFQUFFLGtCQUNEVyxLQUFLLENBQUNYLElBQUk7b0JBQ2JDLFVBQVUsRUFBRSxJQUFJO29CQUNoQkQsSUFBSSxFQUFFWSxNQUFNLENBQUNMLElBQUk7a0JBQ2xCO2NBQ0YsQ0FBQztRQUNKLEtBQUssU0FBUztZQUNaLE9BQU8sa0JBQ0ZJLEtBQUs7Z0JBQ1JYLElBQUksRUFBRSxrQkFDRFcsS0FBSyxDQUFDWCxJQUFJO29CQUNiQyxVQUFVLEVBQUUsS0FBSztvQkFDakJELElBQUksRUFBRSxJQUFJO2tCQUNYO2NBQ0YsQ0FBQztRQUNKO1lBQ0UsT0FBT1csS0FBSyxDQUFDO0tBQ2hCO0NBQ0Y7QUFFRCwrREFBZUQsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL2luZGV4LmpzP2I5YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiB7XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbiAgfSxcclxuICBwb3N0OiB7XHJcbiAgICBtYWluUG9zdHM6IFtdLFxyXG4gIH0sXHJcbn07XHJcblxyXG4vLyBhY3Rpb24gY3JlYXRvclxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19JTlwiLFxyXG4gICAgZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJMT0dfT1VUXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vIOujqO2KuCDrpqzrk4DshJxcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICBjYXNlIFwiTE9HX0lOXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkxPR19PVVRcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJIWURSQVRFIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsImlzTG9nZ2VkSW4iLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwicG9zdCIsIm1haW5Qb3N0cyIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ })

});