webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var _marked = /*#__PURE__*/_regeneratorRuntime().mark(likePosts),
    _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(loadPosts),
    _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(addPost),
    _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(removePost),
    _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(addComment),
    _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(watchLikePost),
    _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnlikePost),
    _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadPosts),
    _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddPost),
    _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemovePost),
    _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddComment),
    _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(postSaga);






function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/posts", data);
}

function likePosts(action) {
  var result;
  return _regeneratorRuntime().wrap(function likePosts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
            data: _context.t0.response.data
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/posts", data);
}

function loadPosts(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadPosts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
            data: _context2.t0.response.data
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/post", {
    content: data
  }, {
    withCredentials: true
  });
}

function addPost(action) {
  var result;
  return _regeneratorRuntime().wrap(function addPost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
            data: result.data.id
          });

        case 8:
          _context3.next = 15;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
            data: _context3.t0.response.data
          });

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 10]]);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/post", data, {
    withCredentials: true
  });
}

function removePost(action) {
  return _regeneratorRuntime().wrap(function removePost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
            data: action.data
          });

        case 5:
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
            data: action.data
          });

        case 7:
          _context4.next = 14;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
            data: _context4.t0.response.data
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 9]]);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/post/".concat(data.postId, "/comment"), data);
}

function addComment(action) {
  var result;
  return _regeneratorRuntime().wrap(function addComment$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
            data: result.data
          });

        case 6:
          _context5.next = 13;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
            data: _context5.t0.response.data
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

function watchLikePost() {
  return _regeneratorRuntime().wrap(function watchLikePost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePosts);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchUnlikePost() {
  return _regeneratorRuntime().wrap(function watchUnlikePost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], UnlikePosts);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchLoadPosts() {
  return _regeneratorRuntime().wrap(function watchLoadPosts$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchAddPost() {
  return _regeneratorRuntime().wrap(function watchAddPost$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchRemovePost() {
  return _regeneratorRuntime().wrap(function watchRemovePost$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchAddComment() {
  return _regeneratorRuntime().wrap(function watchAddComment$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function postSaga() {
  return _regeneratorRuntime().wrap(function postSaga$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJsaWtlUG9zdHMiLCJsb2FkUG9zdHMiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnQiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJwb3N0U2FnYSIsImxpa2VQb3N0QVBJIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwicmVzcG9uc2UiLCJsb2FkUG9zdHNBUEkiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJhZGRQb3N0QVBJIiwicG9zdCIsImNvbnRlbnQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJpZCIsImNvbnNvbGUiLCJlcnJvciIsIkFERF9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwiZGVsYXkiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwidGhyb3R0bGUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVbmxpa2VQb3N0cyIsIkxPQURfUE9TVFNfUkVRVUVTVCIsInRha2VMYXRlc3QiLCJBRERfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7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QU0wQyxxRUFBVSxDQUFDRSxrRUFBRCxFQUFzQmxELFVBQXRCLENBQWhCOztRQURGO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlBLFNBQVVPLGVBQVY7RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQ0UsT0FBTXlDLHFFQUFVLENBQUNHLGtFQUFELEVBQXNCbEQsVUFBdEIsQ0FBaEI7O1FBREY7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7O0FBSWUsU0FBVU8sUUFBVjtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFDYixPQUFNNEMsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDbkQsYUFBRCxDQURJLEVBRVJtRCwrREFBSSxDQUFDbEQsZUFBRCxDQUZJLEVBR1JrRCwrREFBSSxDQUFDaEQsWUFBRCxDQUhJLEVBSVJnRCwrREFBSSxDQUFDakQsY0FBRCxDQUpJLEVBS1JpRCwrREFBSSxDQUFDL0MsZUFBRCxDQUxJLEVBTVIrQywrREFBSSxDQUFDOUMsZUFBRCxDQU5JLENBQUQsQ0FBVDs7UUFEYTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmZiYjg3ODRlNjI2MDEzM2U1YTZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgYWxsLFxyXG4gIGRlbGF5LFxyXG4gIGZvcmssXHJcbiAgcHV0LFxyXG4gIHRha2VMYXRlc3QsXHJcbiAgdGhyb3R0bGUsXHJcbiAgY2FsbCxcclxufSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChcIi9wb3N0c1wiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3Bvc3RzXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXHJcbiAgICBcIi9wb3N0XCIsXHJcbiAgICB7IGNvbnRlbnQ6IGRhdGEgfSxcclxuICAgIHtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKFwiL2FwaS9wb3N0XCIsIGRhdGEsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBVTkxJS0VfUE9TVF9SRVFVRVNULCBVbmxpa2VQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=