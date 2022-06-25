webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");



var _templateObject,
    _this = undefined,
    _jsxFileName = "C:\\Users\\hs\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\CodeBox\\Inflearn\\NodeBird\\front\\components\\AppLayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"].Search)(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  vertical-align: middle;\n"])));
_c = SearchInput;

var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;

  var _useInput = useInput(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      searchInput = _useInput2[0],
      onChangeSearchInput = _useInput2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    mode: "horizontal",
    items: [{
      label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }, "\uB178\uB4DC\uBC84\uB4DC")),
      key: "/"
    }, {
      label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/profile",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }, "\uD504\uB85C\uD544")),
      key: "/profile"
    }, {
      label: __jsx(SearchInput, {
        enterButton: true,
        value: searchInput,
        onChange: onChangeSearchInput,
        onSearch: onSearch,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }
      }),
      key: "/search"
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    gutter: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 24,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, me ? __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 35
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 24,
    md: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 24,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://www.zerocho.com",
    target: "_blank",
    rel: "noreferrer noopener",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Made by ZeroCho"))));
};

_s(AppLayout, "XHaBB+xlEiPfa7u47xTZZVKU3dA=", true, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c2 = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c, _c2;

$RefreshReg$(_c, "SearchInput");
$RefreshReg$(_c2, "AppLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiU2VhcmNoSW5wdXQiLCJzdHlsZWQiLCJJbnB1dCIsIlNlYXJjaCIsIkFwcExheW91dCIsImNoaWxkcmVuIiwidXNlSW5wdXQiLCJzZWFyY2hJbnB1dCIsIm9uQ2hhbmdlU2VhcmNoSW5wdXQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibGFiZWwiLCJrZXkiLCJvblNlYXJjaCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxpRUFBTSxDQUFDQywwQ0FBSyxDQUFDQyxNQUFQLENBQVQsNEtBQWpCO0tBQU1ILFc7O0FBSU4sSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0I7RUFBQTs7RUFBQSxJQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0VBQ2xDLGdCQUEyQ0MsUUFBUSxDQUFDLEVBQUQsQ0FBbkQ7RUFBQTtFQUFBLElBQU9DLFdBQVA7RUFBQSxJQUFvQkMsbUJBQXBCOztFQUNBLG1CQUFlQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNDLElBQWpCO0VBQUEsQ0FBRCxDQUExQjtFQUFBLElBQVFDLEVBQVIsZ0JBQVFBLEVBQVI7O0VBQ0EsT0FDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyx5Q0FBRDtJQUNFLElBQUksRUFBQyxZQURQO0lBRUUsS0FBSyxFQUFFLENBQ0w7TUFDRUMsS0FBSyxFQUNILE1BQUMsZ0RBQUQ7UUFBTSxJQUFJLEVBQUMsR0FBWDtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0U7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSw4QkFERixDQUZKO01BTUVDLEdBQUcsRUFBRTtJQU5QLENBREssRUFTTDtNQUNFRCxLQUFLLEVBQ0gsTUFBQyxnREFBRDtRQUFNLElBQUksRUFBQyxVQUFYO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDRTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLHdCQURGLENBRko7TUFNRUMsR0FBRyxFQUFFO0lBTlAsQ0FUSyxFQWlCTDtNQUNFRCxLQUFLLEVBQ0gsTUFBQyxXQUFEO1FBQ0UsV0FBVyxNQURiO1FBRUUsS0FBSyxFQUFFTixXQUZUO1FBR0UsUUFBUSxFQUFFQyxtQkFIWjtRQUlFLFFBQVEsRUFBRU8sUUFKWjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBRko7TUFTRUQsR0FBRyxFQUFFO0lBVFAsQ0FqQkssQ0FGVDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsRUFpQ0UsTUFBQyx3Q0FBRDtJQUFLLE1BQU0sRUFBRSxDQUFiO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLHdDQUFEO0lBQUssRUFBRSxFQUFFLEVBQVQ7SUFBYSxFQUFFLEVBQUUsQ0FBakI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNHRixFQUFFLEdBQUcsTUFBQyxvREFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUgsR0FBcUIsTUFBQyxrREFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRDFCLENBREYsRUFJRSxNQUFDLHdDQUFEO0lBQUssRUFBRSxFQUFFLEVBQVQ7SUFBYSxFQUFFLEVBQUUsRUFBakI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNHUCxRQURILENBSkYsRUFPRSxNQUFDLHdDQUFEO0lBQUssRUFBRSxFQUFFLEVBQVQ7SUFBYSxFQUFFLEVBQUUsQ0FBakI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQ0UsSUFBSSxFQUFDLHlCQURQO0lBRUUsTUFBTSxFQUFDLFFBRlQ7SUFHRSxHQUFHLEVBQUMscUJBSE47SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxxQkFERixDQVBGLENBakNGLENBREY7QUFxREQsQ0F4REQ7O0dBQU1ELFM7VUFFV0ssdUQ7OztNQUZYTCxTO0FBMEROQSxTQUFTLENBQUNZLFNBQVYsR0FBc0I7RUFDcEJYLFFBQVEsRUFBRVksaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURMLENBQXRCO0FBSWVmLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM1YzkxNWNkYjlmZjI4ZjJhMzExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBDb2wsIElucHV0LCBNZW51LCBSb3cgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9Mb2dpbkZvcm1cIjtcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuL1VzZXJQcm9maWxlXCI7XHJcblxyXG5jb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZChJbnB1dC5TZWFyY2gpYFxyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbmA7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaElucHV0LCBvbkNoYW5nZVNlYXJjaElucHV0XSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgbW9kZT1cImhvcml6b250YWxcIlxyXG4gICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPuuFuOuTnOuyhOuTnDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGtleTogXCIvXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogKFxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGE+7ZSE66Gc7ZWEPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAga2V5OiBcIi9wcm9maWxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogKFxyXG4gICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgZW50ZXJCdXR0b25cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGtleTogXCIvc2VhcmNoXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAge21lID8gPFVzZXJQcm9maWxlIC8+IDogPExvZ2luRm9ybSAvPn1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lnplcm9jaG8uY29tXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE1hZGUgYnkgWmVyb0Nob1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9