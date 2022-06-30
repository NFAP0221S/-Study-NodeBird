webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\hs\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\CodeBox\\Inflearn\\NodeBird\\front\\components\\PostImages.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PostImages = function PostImages(_ref) {
  _s();

  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showImagesZoom = _useState[0],
      setShowImagesZoom = _useState[1];

  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImagesZoom(true);
  }, []);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      src: "http://localhost:3065/".concat(images[0].src),
      alt: images[0].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 28
      }
    }));
  }

  if (images.length === 2) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      style: {
        width: "50%",
        display: "inline-block"
      },
      src: "http://localhost:3065/".concat(images[0].src),
      alt: images[0].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }), __jsx("img", {
      role: "presentation",
      style: {
        width: "50%",
        display: "inline-block"
      },
      src: "http://localhost:3065/".concat(images[1].src),
      alt: images[1].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 28
      }
    }));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("img", {
    role: "presentation",
    style: {
      width: "50%"
    },
    src: "http://localhost:3065/".concat(images[0].src),
    alt: images[0].src,
    onClick: onZoom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx("div", {
    role: "presentation",
    style: {
      display: "inline-block",
      width: "50%",
      textAlign: "center",
      verticalAlign: "middle"
    },
    onClick: onZoom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30")), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    images: images,
    onClose: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 26
    }
  }));
};

_s(PostImages, "xZ+WVc/D16Fmvriq1CwZMW/wLmE=");

_c = PostImages;
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c;

$RefreshReg$(_c, "PostImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsIm9uQ2xvc2UiLCJsZW5ndGgiLCJzcmMiLCJ3aWR0aCIsImRpc3BsYXkiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQjtFQUFBOztFQUFBLElBQWJDLE1BQWEsUUFBYkEsTUFBYTs7RUFDakMsZ0JBQTRDQyxzREFBUSxDQUFDLEtBQUQsQ0FBcEQ7RUFBQSxJQUFPQyxjQUFQO0VBQUEsSUFBdUJDLGlCQUF2Qjs7RUFFQSxJQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUMvQkYsaUJBQWlCLENBQUMsSUFBRCxDQUFqQjtFQUNELENBRnlCLEVBRXZCLEVBRnVCLENBQTFCO0VBR0EsSUFBTUcsT0FBTyxHQUFHRCx5REFBVyxDQUFDLFlBQU07SUFDaENGLGlCQUFpQixDQUFDLEtBQUQsQ0FBakI7RUFDRCxDQUYwQixFQUV4QixFQUZ3QixDQUEzQjs7RUFJQSxJQUFJSCxNQUFNLENBQUNPLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7SUFDdkIsT0FDRSxtRUFDRTtNQUNFLElBQUksRUFBQyxjQURQO01BRUUsR0FBRyxrQ0FBMkJQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBckMsQ0FGTDtNQUdFLEdBQUcsRUFBRVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUhqQjtNQUlFLE9BQU8sRUFBRUosTUFKWDtN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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCBJbWFnZXNab29tIGZyb20gXCIuL0ltYWdlc1pvb21cIjtcclxuXHJcbmNvbnN0IFBvc3RJbWFnZXMgPSAoeyBpbWFnZXMgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvblpvb20gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dJbWFnZXNab29tKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzBdLnNyY31gfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XHJcbiAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XHJcbiAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMV0uc3JjfWB9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlc1sxXS5zcmN9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIgfX1cclxuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1swXS5zcmN9YH1cclxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgICDqsJzsnZgg7IKs7KeEIOuNlOuztOq4sFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SW1hZ2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9