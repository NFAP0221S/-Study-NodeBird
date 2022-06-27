webpackHotUpdate_N_E("pages/signup",{

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");



var _templateObject,
    _jsxFileName = "C:\\Users\\hs\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\CodeBox\\Inflearn\\NodeBird\\front\\components\\AppLayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// import React from "react";
// import Link from "next/link";
// import PropTypes from "prop-types";
// import { Col, Input, Menu, Row } from "antd";
// import { useSelector } from "react-redux";
// import styled from "styled-components";
// import useInput from "../hooks/useInput";
// import LoginForm from "./LoginForm";
// import UserProfile from "./UserProfile";
// const SearchInput = styled(Input.Search)`
//   vertical-align: middle;
// `;
// const AppLayout = ({ children }) => {
//   const [searchInput, onChangeSearchInput] = useInput("");
//   const { me } = useSelector((state) => state.user);
//   return (
//     <div>
//       <Menu
//         mode="horizontal"
//         items={[
//           {
//             label: (
//               <Link href="/">
//                 <a>노드버드</a>
//               </Link>
//             ),
//             key: "/",
//           },
//           {
//             label: (
//               <Link href="/profile">
//                 <a>프로필</a>
//               </Link>
//             ),
//             key: "/profile",
//           },
//           {
//             label: (
//               <SearchInput
//                 enterButton
//                 value={searchInput}
//                 onChange={onChangeSearchInput}
//               />
//             ),
//             key: "/search",
//           },
//         ]}
//       />
//       <Row gutter={8}>
//         <Col xs={24} md={6}>
//           {me ? <UserProfile /> : <LoginForm />}
//         </Col>
//         <Col xs={24} md={12}>
//           {children}
//         </Col>
//         <Col xs={24} md={6}>
//           <a
//             href="https://www.zerocho.com"
//             target="_blank"
//             rel="noreferrer noopener"
//           >
//             Made by ZeroCho
//           </a>
//         </Col>
//       </Row>
//     </div>
//   );
// };
// AppLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };
// export default AppLayout;










var SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"].Search)(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  vertical-align: middle;\n"])));
_c = SearchInput;

function AppLayout(_ref) {
  _s();

  var children = _ref.children;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_11__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      searchInput = _useInput2[0],
      onChangeSearchInput = _useInput2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var onSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/hashtag/".concat(searchInput));
  }, [searchInput]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    mode: "horizontal",
    selectedKeys: [router.pathname],
    items: [{
      label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }
      }, "\uB178\uB4DC\uBC84\uB4DC")),
      key: "/"
    }, {
      label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
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
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 15
        }
      }),
      key: "/search"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    gutter: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 24,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, me ? __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 35
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 24,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 24,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://www.zerocho.com",
    target: "_blank",
    rel: "noreferrer noopener",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, "Made by ZeroCho"))));
}

_s(AppLayout, "SG+DU7TJK9sAIsYImbMeLebFQI4=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_11__["default"], next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c2 = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiU2VhcmNoSW5wdXQiLCJzdHlsZWQiLCJJbnB1dCIsIlNlYXJjaCIsIkFwcExheW91dCIsImNoaWxkcmVuIiwidXNlSW5wdXQiLCJzZWFyY2hJbnB1dCIsIm9uQ2hhbmdlU2VhcmNoSW5wdXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwib25TZWFyY2giLCJ1c2VDYWxsYmFjayIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsImxhYmVsIiwia2V5IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLGlFQUFNLENBQUNDLDBDQUFLLENBQUNDLE1BQVAsQ0FBVCw0S0FBakI7S0FBTUgsVzs7QUFJTixTQUFTSSxTQUFULE9B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QVYsQ0FBZUM7QUFETCxDQUF0QjtBQUllckIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjA1YjAxM2I0ZGU1YjIwNGJkYTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBpbXBvcnQgeyBDb2wsIElucHV0LCBNZW51LCBSb3cgfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuLy8gaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG4vLyBpbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuL0xvZ2luRm9ybVwiO1xyXG4vLyBpbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcclxuXHJcbi8vIGNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkKElucHV0LlNlYXJjaClgXHJcbi8vICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuLy8gICBjb25zdCBbc2VhcmNoSW5wdXQsIG9uQ2hhbmdlU2VhcmNoSW5wdXRdID0gdXNlSW5wdXQoXCJcIik7XHJcbi8vICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGRpdj5cclxuLy8gICAgICAgPE1lbnVcclxuLy8gICAgICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiXHJcbi8vICAgICAgICAgaXRlbXM9e1tcclxuLy8gICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgbGFiZWw6IChcclxuLy8gICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGE+64W465Oc67KE65OcPC9hPlxyXG4vLyAgICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgKSxcclxuLy8gICAgICAgICAgICAga2V5OiBcIi9cIixcclxuLy8gICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGxhYmVsOiAoXHJcbi8vICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8YT7tlITroZztlYQ8L2E+XHJcbi8vICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICApLFxyXG4vLyAgICAgICAgICAgICBrZXk6IFwiL3Byb2ZpbGVcIixcclxuLy8gICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGxhYmVsOiAoXHJcbi8vICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbi8vICAgICAgICAgICAgICAgICBlbnRlckJ1dHRvblxyXG4vLyAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxyXG4vLyAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoSW5wdXR9XHJcbi8vICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgKSxcclxuLy8gICAgICAgICAgICAga2V5OiBcIi9zZWFyY2hcIixcclxuLy8gICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgXX1cclxuLy8gICAgICAgLz5cclxuLy8gICAgICAgPFJvdyBndXR0ZXI9ezh9PlxyXG4vLyAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbi8vICAgICAgICAgICB7bWUgPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9naW5Gb3JtIC8+fVxyXG4vLyAgICAgICAgIDwvQ29sPlxyXG4vLyAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PlxyXG4vLyAgICAgICAgICAge2NoaWxkcmVufVxyXG4vLyAgICAgICAgIDwvQ29sPlxyXG4vLyAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbi8vICAgICAgICAgICA8YVxyXG4vLyAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuemVyb2Noby5jb21cIlxyXG4vLyAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4vLyAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcclxuLy8gICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgTWFkZSBieSBaZXJvQ2hvXHJcbi8vICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgIDwvUm93PlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIEFwcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbi8vICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IE1lbnUsIElucHV0LCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9Mb2dpbkZvcm1cIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5cclxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gQXBwTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgb25DaGFuZ2VTZWFyY2hJbnB1dF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBvblNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIFJvdXRlci5wdXNoKGAvaGFzaHRhZy8ke3NlYXJjaElucHV0fWApO1xyXG4gIH0sIFtzZWFyY2hJbnB1dF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgc2VsZWN0ZWRLZXlzPXtbcm91dGVyLnBhdGhuYW1lXX1cclxuICAgICAgICBpdGVtcz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogKFxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT7rhbjrk5zrsoTrk5w8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBrZXk6IFwiL1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IChcclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxhPu2UhOuhnO2VhDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGtleTogXCIvcHJvZmlsZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IChcclxuICAgICAgICAgICAgICA8U2VhcmNoSW5wdXRcclxuICAgICAgICAgICAgICAgIGVudGVyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBrZXk6IFwiL3NlYXJjaFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgICA8Um93IGd1dHRlcj17OH0+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgIHttZSA/IDxVc2VyUHJvZmlsZSAvPiA6IDxMb2dpbkZvcm0gLz59XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy56ZXJvY2hvLmNvbVwiXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBNYWRlIGJ5IFplcm9DaG9cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9