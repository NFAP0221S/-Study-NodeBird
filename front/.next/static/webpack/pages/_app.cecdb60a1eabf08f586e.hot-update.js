webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var _marked = /*#__PURE__*/_regeneratorRuntime().mark(changeNickname),
    _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(loadUser),
    _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(logIn),
    _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(logOut),
    _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(signUp),
    _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(follow),
    _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(unfollow),
    _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchChangeNickname),
    _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadUser),
    _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchFollow),
    _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnfollow),
    _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogIn),
    _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogOut),
    _marked14 = /*#__PURE__*/_regeneratorRuntime().mark(watchSignUp),
    _marked15 = /*#__PURE__*/_regeneratorRuntime().mark(userSaga);



 // LoadUser

function changeNicknameAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/user/nickname");
}

function changeNickname(action) {
  var result;
  return _regeneratorRuntime().wrap(function changeNickname$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
            error: _context.t0.response.data
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
} // LoadUser


function loadUserAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/user");
}

function loadUser(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
            data: result.data
          });

        case 6:
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
            error: _context2.t0.response.data
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
} // 로그인


function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user/login", data);
}

function logIn(action) {
  var result;
  return _regeneratorRuntime().wrap(function logIn$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 13;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
            error: _context3.t0.response.data
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
} // 로그아웃


function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/logout");
}

function logOut() {
  return _regeneratorRuntime().wrap(function logOut$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);

        case 3:
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
          });

        case 5:
          _context4.next = 12;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
            error: _context4.t0.response.data
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
} // 회원가입


function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user", data);
}

function signUp(action) {
  var result;
  return _regeneratorRuntime().wrap(function signUp$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);

        case 3:
          result = _context5.sent;
          console.log(result);
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
          });

        case 7:
          _context5.next = 14;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
            error: _context5.t0.response.data
          });

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 9]]);
} // 팔로우


function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/follow");
}

function follow(action) {
  return _regeneratorRuntime().wrap(function follow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);

        case 3:
          _context6.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context6.next = 12;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
            error: _context6.t0.response.data
          });

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 7]]);
}

function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/unfollow");
}

function unfollow(action) {
  return _regeneratorRuntime().wrap(function unfollow$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);

        case 3:
          _context7.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context7.next = 12;
          break;

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
            error: _context7.t0.response.data
          });

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 7]]);
}

function watchChangeNickname() {
  return _regeneratorRuntime().wrap(function watchChangeNickname$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(CHANGE_NICKNAME_REQUEST, changeNickname);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchLoadUser() {
  return _regeneratorRuntime().wrap(function watchLoadUser$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchFollow() {
  return _regeneratorRuntime().wrap(function watchFollow$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchUnfollow() {
  return _regeneratorRuntime().wrap(function watchUnfollow$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchLogIn() {
  return _regeneratorRuntime().wrap(function watchLogIn$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchLogOut() {
  return _regeneratorRuntime().wrap(function watchLogOut$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchSignUp() {
  return _regeneratorRuntime().wrap(function watchSignUp$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function userSaga() {
  return _regeneratorRuntime().wrap(function userSaga$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp) // fork(watchRemoveFollower),
          // fork(watchLoadFollowers),
          // fork(watchLoadFollowings),
          // fork(watchChangeNickname),
          // fork(watchLoadUser),
          ]);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJjaGFuZ2VOaWNrbmFtZSIsImxvYWRVc2VyIiwibG9nSW4iLCJsb2dPdXQiLCJzaWduVXAiLCJmb2xsb3ciLCJ1bmZvbGxvdyIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ1c2VyU2FnYSIsImNoYW5nZU5pY2tuYW1lQVBJIiwiYXhpb3MiLCJwYXRjaCIsImFjdGlvbiIsImNhbGwiLCJkYXRhIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkxPQURfVVNFUl9TVUNDRVNTIiwiY29uc29sZSIsImVycm9yIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJyZXNwb25zZSIsImxvYWRVc2VyQVBJIiwiZ2V0IiwibG9nSW5BUEkiLCJwb3N0IiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsImxvZ091dEFQSSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsInNpZ25VcEFQSSIsImxvZyIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImZvbGxvd0FQSSIsImRlbGF5IiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuZm9sbG93QVBJIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfUkVRVUVTVCIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX09VVF9SRVFVRVNUIiwiU0lHTl9VUF9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxvSjs7c0RBMkJVQSxj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QVY7RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQ2IsT0FBTTJDLDhEQUFHLENBQUMsQ0FDUkMsK0RBQUksQ0FBQ25ELG1CQUFELENBREksRUFFUm1ELCtEQUFJLENBQUNsRCxhQUFELENBRkksRUFHUmtELCtEQUFJLENBQUNqRCxXQUFELENBSEksRUFJUmlELCtEQUFJLENBQUNoRCxhQUFELENBSkksRUFLUmdELCtEQUFJLENBQUMvQyxVQUFELENBTEksRUFNUitDLCtEQUFJLENBQUM5QyxXQUFELENBTkksRUFPUjhDLCtEQUFJLENBQUM3QyxXQUFELENBUEksQ0FTUjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBYlEsQ0FBRCxDQUFUOztRQURhO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2VjZGI2MGExZWFiZjA4ZjU4NmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICBGT0xMT1dfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxuICBVTkZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuLy8gTG9hZFVzZXJcclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKFwiL3VzZXIvbmlja25hbWVcIik7XHJcbn1cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIExvYWRVc2VyXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlclwiKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8g66Gc6re47J24XHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyL2xvZ2luXCIsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDroZzqt7jslYTsm4NcclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2xvZ291dFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8g7ZqM7JuQ6rCA7J6FXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlclwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDtjJTroZzsmrBcclxuZnVuY3Rpb24gZm9sbG93QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9mb2xsb3dcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdW5mb2xsb3dcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlciksXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuXHJcbiAgICAvLyBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgLy8gZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgLy8gZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgIC8vIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICAvLyBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=