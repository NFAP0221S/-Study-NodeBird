webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

var initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
};
var UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
var UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
var UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
var LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
var LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
var LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
var UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
var UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
var UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
var LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
var LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
var LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FAILURE = "ADD_POST_FAILURE";
var REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
var REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
var REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
var ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
var ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
var ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
var RETWEET_REQUEST = "RETWEET_REQUEST";
var RETWEET_SUCCESS = "RETWEET_SUCCESS";
var RETWEET_FAILURE = "RETWEET_FAILURE";
var REMOVE_IMAGE = "REMOVE_IMAGE";
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
}; // 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;

      case RETWEET_SUCCESS:
        {
          draft.retweetLoading = false;
          draft.retweetDone = true;
          draft.mainPosts.unshift(action.data);
          break;
        }

      case RETWEET_FAILURE:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;

      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths = action.data;
          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          break;
        }

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          var _post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post.Likers = _post.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;

      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data.PostId;
        });
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post2.Comments.unshift(action.data);

          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break; // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
          // const post = { ...state.mainPosts[postIndex] };
          // post.Comments = [dummyComment(action.data.content), ...post.Comments];
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = post;
          // return {
          //   ...state,
          //   mainPosts,
          //   addCommentLoading: false,
          //   addCommentDone: true,
          // };
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImVycm9yIiwiZmlsdGVyIiwidiIsImkiLCJwb3N0IiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImNvbmNhdCIsImxlbmd0aCIsIkNvbW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7RUFDMUJDLFNBQVMsRUFBRSxFQURlO0VBRTFCQyxVQUFVLEVBQUUsRUFGYztFQUcxQkMsWUFBWSxFQUFFLElBSFk7RUFJMUJDLGVBQWUsRUFBRSxLQUpTO0VBSzFCQyxZQUFZLEVBQUUsS0FMWTtFQU0xQkMsYUFBYSxFQUFFLElBTlc7RUFPMUJDLGlCQUFpQixFQUFFLEtBUE87RUFRMUJDLGNBQWMsRUFBRSxLQVJVO0VBUzFCQyxlQUFlLEVBQUUsSUFUUztFQVUxQkMsZ0JBQWdCLEVBQUUsS0FWUTtFQVcxQkMsYUFBYSxFQUFFLEtBWFc7RUFZMUJDLGNBQWMsRUFBRSxJQVpVO0VBYTFCQyxjQUFjLEVBQUUsS0FiVTtFQWMxQkMsV0FBVyxFQUFFLEtBZGE7RUFlMUJDLFlBQVksRUFBRSxJQWZZO0VBZ0Ix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Q0FILE1BQUksQ0FBQ1MsUUFBTCxDQUFjZCxPQUFkLENBQXNCSCxNQUFNLENBQUNMLElBQTdCOztVQUNBTyxLQUFLLENBQUMxQyxpQkFBTixHQUEwQixLQUExQjtVQUNBMEMsS0FBSyxDQUFDekMsY0FBTixHQUF1QixJQUF2QjtVQUNBLE1BTHdCLENBTXhCO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7UUFDRDs7TUFDRCxLQUFLNEIsbUJBQUw7UUFDRWEsS0FBSyxDQUFDMUMsaUJBQU4sR0FBMEIsS0FBMUI7UUFDQTBDLEtBQUssQ0FBQ3hDLGVBQU4sR0FBd0JzQyxNQUFNLENBQUNJLEtBQS9CO1FBQ0E7O01BQ0Y7UUFDRTtJQTVJSjtFQThJRCxDQS9JTSxDQURPO0FBQUEsQ0FBaEI7O0FBa0plTixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjcyOTAyMjNhMDAwYTY4ZDUxNmI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiLi4vdXRpbC9wcm9kdWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG4gIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICByZXR3ZWV0RG9uZTogZmFsc2UsXHJcbiAgcmV0d2VldEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9IFwiVVBMT0FEX0lNQUdFU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSBcIlVQTE9BRF9JTUFHRVNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gXCJVUExPQURfSU1BR0VTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwiTElLRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gXCJMSUtFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSBcIkxJS0VfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9IFwiVU5MSUtFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9IFwiVU5MSUtFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9IFwiVU5MSUtFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1BPU1RTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSBcIlJFVFdFRVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gXCJSRVRXRUVUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9IFwiUkVUV0VFVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gXCJSRU1PVkVfSU1BR0VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbi8vIOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJgo67aI67OA7ISx7J2AIOyngO2CpOuptOyEnClcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PlxyXG4gIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFJFVFdFRVRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoXHJcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgbWFpblBvc3RzLFxyXG4gICAgICAgIC8vICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9