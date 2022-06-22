webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "제로초"
    },
    content: "첫 번째 게시글 #해시태그 #익스프레스 ",
    Images: [{
      src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726"
    }, {
      src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg"
    }, {
      src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg"
    }],
    Comments: [{
      User: {
        nickname: "nero"
      },
      content: "우와 개정판이 나왔군요~"
    }, {
      User: {
        nickname: "hero"
      },
      content: "얼른 사고싶어요~"
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
}; // export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
// export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
// export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FAILURE = "ADD_POST_FAILURE"; // export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
// export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
// export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

var ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
var ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
var ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE"; // action 객체

var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
}; // 더미 데이터

var dummyPost = function dummyPost(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default()().generate(),
    content: data,
    User: {
      id: 1,
      nickname: "제로초"
    },
    Images: [],
    Comments: []
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    // post
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        addPostLoading: false,
        addPostDone: true
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });
    // comment

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      {
        var postIndex = state.mainPosts.findIndex(function (v) {
          return v.id === action.data.postId;
        });

        var post = _objectSpread({}, state.mainPosts[postIndex]);

        post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments));

        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts);

        mainPosts[postIndex] = post;
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: mainPosts,
          addCommentLoading: false,
          addCommentDone: true
        });
      }

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentError: action.error
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0IiwiZHVtbXlDb21tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7RUFDMUJDLFNBQVMsRUFBRSxDQUNUO0lBQ0VDLEVBQUUsRUFBRSxDQUROO0lBRUVDLElBQUksRUFBRTtNQUNKRCxFQUFFLEVBQUUsQ0FEQTtNQUVKRSxRQUFRLEVBQUU7SUFGTixDQUZSO0lBTUVDLE9BQU8sRUFBRSx3QkFOWDtJQU9FQyxNQUFNLEVBQUUsQ0FDTjtNQUNFQyxHQUFHLEVBQUU7SUFEUCxDQURNLEVBSU47TUFDRUEsR0FBRyxFQUFFO0lBRFAsQ0FKTSxFQU9OO01BQ0VBLEdBQUcsRUFBRTtJQURQLENBUE0sQ0FQVjtJQWtCRUMsUUFBUSxFQUFFLENBQ1I7TUFDRUwsSUFBSSxFQUFFO1FBQ0pDLFFBQVEsRUFBRTtNQUROLENBRFI7TUFJRUMsT0FBTyxFQUFFO0lBSlgsQ0FEUSxFQU9SO01BQ0VGLElBQUksRUFBRTtRQUNKQyxRQUFRLEVBQUU7TUFETixDQURSO01BSUVDLE9BQU8sRUFBRTtJQUpYLENBUFE7RUFsQlosQ0FEUyxDQURlO0VBb0MxQkksVUFBVSxFQUFFLEVBcENjO0VBcUMxQkMsY0FBYyxFQUFFLEtBckNVO0VBc0MxQkMsV0FBVyxFQUFFLEtBdENhO0VBdUMxQkMsWUFBWSxFQUFFLElBdkNZO0VBd0MxQkMsaUJBQWlCLEVBQUUsS0F4Q087RUF5QzFCQyxjQUFjLEVBQUUsS0F6Q1U7RUEwQzFCQyxlQUFlLEVBQUU7QUExQ1MsQ0FBckIsQyxDQTZDUDtBQUNBO0FBQ0E7O0FBRU8sSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCLEMsQ0FFUDtBQUNBO0FBQ0E7O0FBRU8sSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCLEMsQ0FDUDs7QUFDTyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFEO0VBQUEsT0FBVztJQUNoQ0MsSUFBSSxFQUFFUixnQkFEMEI7SUFFaENPLElBQUksRUFBSkE7RUFGZ0MsQ0FBWDtBQUFBLENBQWhCO0FBS0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0YsSUFBRDtFQUFBLE9BQVc7SUFDbkNDLElBQUksRUFBRUwsbUJBRDZCO0lBRW5DSSxJQUFJLEVBQUpBO0VBRm1DLENBQVg7QUFBQSxDQUFuQixDLENBS1A7O0FBQ0EsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0gsSUFBRDtFQUFBLE9BQVc7SUFDM0JyQixFQUFFLEVBQUV5Qiw4Q0FBTyxHQUFHQyxRQUFWLEVBRHVCO0lBRTNCdkIsT0FBTyxFQUFFa0IsSUFGa0I7SUFHM0JwQixJQUFJLEVBQUU7TUFDSkQsRUFBRSxFQUFFLENBREE7TUFFSkUsUUFBUSxFQUFFO0lBRk4sQ0FIcUI7SUFPM0JFLE1BQU0sRUFBRSxFQVBtQjtJQVEzQkUsUUFBUSxFQUFFO0VBUmlCLENBQVg7QUFBQSxDQUFsQjs7QUFXQSxJQUFNcUIsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7RUFBQSxJQUFqQ0MsS0FBaUMsdUVBQXpCOUIsWUFBeUI7RUFBQSxJQUFYK0IsTUFBVzs7RUFDaEQsUUFBUUEsTUFBTSxDQUFDUCxJQUFmO0lBQ0U7SUFDQSxLQUFLUixnQkFBTDtNQUNFLHVDQUNLYyxLQURMO1FBRUVwQixjQUFjLEVBQUUsSUFGbEI7UUFHRUMsV0FBVyxFQUFFLEtBSGY7UUFJRUMsWUFBWSxFQUFFO01BSmhCOztJQU1GLEtBQUtLLGdCQUFMO01BQ0UsdUNBQ0thLEtBREw7UUFFRTdCLFNBQVMsR0FBR3lCLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDUixJQUFSLENBQVosc0dBQThCTyxLQUFLLENBQUM3QixTQUFwQyxFQUZYO1FBR0VTLGNBQWMsRUFBRSxLQUhsQjtRQUlFQyxXQUFXLEVBQUU7TUFKZjs7SUFNRixLQUFLTyxnQkFBTDtNQUNFLHVDQUNLWSxLQURMO1FBRUVwQixjQUFjLEVBQUUsS0FGbEI7UUFHRUUsWUFBWSxFQUFFbUIsTUFBTSxDQUFDQztNQUh2QjtJQUtGOztJQUNBLEtBQUtiLG1CQUFMO01BQ0UsdUNBQ0tXLEtBREw7UUFFRWpCLGlCQUFpQixFQUFFLElBRnJCO1FBR0VDLGNBQWMsRUFBRSxLQUhsQjtRQUlFQyxlQUFlLEVBQUU7TUFKbkI7O0lBTUYsS0FBS0ssbUJBQUw7TUFBMEI7UUFDeEIsSUFBTWEsU0FBUyxHQUFHSCxLQUFLLENBQUM3QixTQUFOLENBQWdCaUMsU0FBaEIsQ0FDaEIsVUFBQ0MsQ0FBRDtVQUFBLE9BQU9BLENBQUMsQ0FBQ2pDLEVBQUYsS0FBUzZCLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZYSxNQUE1QjtRQUFBLENBRGdCLENBQWxCOztRQUdBLElBQU1DLElBQUkscUJBQVFQLEtBQUssQ0FBQzdCLFNBQU4sQ0FBZ0JnQyxTQUFoQixDQUFSLENBQVY7O1FBQ0FJLElBQUksQ0FBQzdCLFFBQUwsSUFBaUI4QixZQUFZLENBQUNQLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZbEIsT0FBYixDQUE3QixzR0FBdURnQyxJQUFJLENBQUM3QixRQUE1RDs7UUFDQSxJQUFNUCxTQUFTLEdBQUcsNkZBQUk2QixLQUFLLENBQUM3QixTQUFiLENBQWY7O1FBQ0FBLFNBQVMsQ0FBQ2dDLFNBQUQsQ0FBVCxHQUF1QkksSUFBdkI7UUFDQSx1Q0FDS1AsS0FETDtVQUVFN0IsU0FBUyxFQUFUQSxTQUZGO1VBR0VZLGlCQUFpQixFQUFFLEtBSHJCO1VBSUVDLGNBQWMsRUFBRTtRQUpsQjtNQU1EOztJQUNELEtBQUtPLG1CQUFMO01BQ0UsdUNBQ0tTLEtBREw7UUFFRWpCLGlCQUFpQixFQUFFLEtBRnJCO1FBR0VFLGVBQWUsRUFBRWdCLE1BQU0sQ0FBQ0M7TUFIMUI7O0lBS0Y7TUFDRSxPQUFPRixLQUFQO0VBcERKO0FBc0RELENBdkREOztBQXlEZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzlhZDA5NWMxMWYyYTJiZTI2MTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCBcIixcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgQ29tbWVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIuyasOyZgCDqsJzsoJXtjJDsnbQg64KY7JmU6rWw7JqUflwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogXCJoZXJvXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogXCLslrzrpbgg7IKs6rOg7Iu27Ja07JqUflwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcclxuLy8gZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XHJcbi8vIGV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbi8vIGV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbi8vIGV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xyXG4vLyBhY3Rpb24g6rCd7LK0XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbi8vIOuNlOuvuCDrjbDsnbTthLBcclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQoKS5nZW5lcmF0ZSgpLFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogXCLsoJzroZzstIhcIixcclxuICB9LFxyXG4gIEltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIC8vIHBvc3RcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgIC8vIGNvbW1lbnRcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXHJcbiAgICAgICAgKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==