webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js ***!
  \*******************************************************************/
/*! exports provided: CANCEL, SAGA_LOCATION, buffers, detach, default, END, channel, eventChannel, isEnd, multicastChannel, runSaga, stdChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return eventChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return isEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicastChannel", function() { return multicastChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runSaga", function() { return runSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return stdChannel; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]; });

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./io-6de156f3.js */ "./node_modules/@redux-saga/core/dist/io-6de156f3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["I"]; });

/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_saga_deferred__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redux-saga/deferred */ "./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");











var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/

var semaphore = 0;
/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/

function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}
/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/


function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}
/**
 * Puts the scheduler in a `suspended` state and executes a task immediately.
 */

function immediately(task) {
  try {
    suspend();
    return task();
  } finally {
    flush();
  }
}
/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/

function suspend() {
  semaphore++;
}
/**
  Puts the scheduler in a `released` state.
**/


function release() {
  semaphore--;
}
/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/


function flush() {
  release();
  var task;

  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

var array = function array(patterns) {
  return function (input) {
    return patterns.some(function (p) {
      return matcher(p)(input);
    });
  };
};
var predicate = function predicate(_predicate) {
  return function (input) {
    return _predicate(input);
  };
};
var string = function string(pattern) {
  return function (input) {
    return input.type === String(pattern);
  };
};
var symbol = function symbol(pattern) {
  return function (input) {
    return input.type === pattern;
  };
};
var wildcard = function wildcard() {
  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["k"];
};
function matcher(pattern) {
  // prettier-ignore
  var matcherCreator = pattern === '*' ? wildcard : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["string"])(pattern) ? string : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(pattern) ? array : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["stringableFunc"])(pattern) ? string : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(pattern) ? predicate : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["symbol"])(pattern) ? symbol : null;

  if (matcherCreator === null) {
    throw new Error("invalid pattern: " + pattern);
  }

  return matcherCreator(pattern);
}

var END = {
  type: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_END_TYPE"]
};
var isEnd = function isEnd(a) {
  return a && a.type === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_END_TYPE"];
};
var CLOSED_CHANNEL_WITH_TAKERS = 'Cannot have a closed channel with pending takers';
var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = "Saga or channel was provided with an undefined action\nHints:\n  - check that your Action Creator returns a non-undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners";
function channel(buffer$1) {
  if (buffer$1 === void 0) {
    buffer$1 = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["e"])();
  }

  var closed = false;
  var takers = [];

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["buffer"], INVALID_BUFFER);
  }

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(CLOSED_CHANNEL_WITH_TAKERS);
    }

    if (takers.length && !buffer$1.isEmpty()) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"], UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (takers.length === 0) {
      return buffer$1.put(input);
    }

    var cb = takers.shift();
    cb(input);
  }

  function take(cb) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], "channel.take's callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
    } else if (!buffer$1.isEmpty()) {
      cb(buffer$1.take());
    } else {
      takers.push(cb);

      cb.cancel = function () {
        Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(takers, cb);
      };
    }
  }

  function flush(cb) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], "channel.flush' callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
      return;
    }

    cb(buffer$1.flush());
  }

  function close() {
    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      return;
    }

    closed = true;
    var arr = takers;
    takers = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      var taker = arr[i];
      taker(END);
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close
  };
}
function eventChannel(subscribe, buffer) {
  if (buffer === void 0) {
    buffer = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["n"])();
  }

  var closed = false;
  var unsubscribe;
  var chan = channel(buffer);

  var close = function close() {
    if (closed) {
      return;
    }

    closed = true;

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(unsubscribe)) {
      unsubscribe();
    }

    chan.close();
  };

  unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }

    chan.put(input);
  });

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(unsubscribe, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'in eventChannel: subscribe should return a function to unsubscribe');
  }

  unsubscribe = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(unsubscribe);

  if (closed) {
    unsubscribe();
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}
function multicastChannel() {
  var _ref;

  var closed = false;
  var currentTakers = [];
  var nextTakers = currentTakers;

  function checkForbiddenStates() {
    if (closed && nextTakers.length) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(CLOSED_CHANNEL_WITH_TAKERS);
    }
  }

  var ensureCanMutateNextTakers = function ensureCanMutateNextTakers() {
    if (nextTakers !== currentTakers) {
      return;
    }

    nextTakers = currentTakers.slice();
  };

  var close = function close() {
    if (true) {
      checkForbiddenStates();
    }

    closed = true;
    var takers = currentTakers = nextTakers;
    nextTakers = [];
    takers.forEach(function (taker) {
      taker(END);
    });
  };

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MULTICAST"]] = true, _ref.put = function put(input) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"], UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (isEnd(input)) {
      close();
      return;
    }

    var takers = currentTakers = nextTakers;

    for (var i = 0, len = takers.length; i < len; i++) {
      var taker = takers[i];

      if (taker[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MATCH"]](input)) {
        taker.cancel();
        taker(input);
      }
    }
  }, _ref.take = function take(cb, matcher) {
    if (matcher === void 0) {
      matcher = wildcard;
    }

    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      cb(END);
      return;
    }

    cb[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MATCH"]] = matcher;
    ensureCanMutateNextTakers();
    nextTakers.push(cb);
    cb.cancel = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(function () {
      ensureCanMutateNextTakers();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(nextTakers, cb);
    });
  }, _ref.close = close, _ref;
}
function stdChannel() {
  var chan = multicastChannel();
  var put = chan.put;

  chan.put = function (input) {
    if (input[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]) {
      put(input);
      return;
    }

    asap(function () {
      put(input);
    });
  };

  return chan;
}

var RUNNING = 0;
var CANCELLED = 1;
var ABORTED = 2;
var DONE = 3;

function resolvePromise(promise, cb) {
  var cancelPromise = promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]];

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(cancelPromise)) {
    cb.cancel = cancelPromise;
  }

  promise.then(cb, function (error) {
    cb(error, true);
  });
}

var current = 0;
var nextSagaId = (function () {
  return ++current;
});

var _effectRunnerMap;

function getIteratorMetaInfo(iterator, fn) {
  if (iterator.isSagaIterator) {
    return {
      name: iterator.meta.name
    };
  }

  return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(fn);
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  // catch synchronous failures; see #152 and #441
  try {
    var result = fn.apply(context, args); // i.e. a generator function returns an iterator

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(result)) {
      return result;
    }

    var resolved = false;

    var next = function next(arg) {
      if (!resolved) {
        resolved = true; // Only promises returned from fork will be interpreted. See #1573

        return {
          value: result,
          done: !Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)
        };
      } else {
        return {
          value: arg,
          done: true
        };
      }
    };

    return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["q"])(next);
  } catch (err) {
    // do not bubble up synchronous failures for detached forks
    // instead create a failed task. See #152 and #441
    return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["q"])(function () {
      throw err;
    });
  }
}

function runPutEffect(env, _ref2, cb) {
  var channel = _ref2.channel,
      action = _ref2.action,
      resolve = _ref2.resolve;

  /**
   Schedule the put in case another saga is holding a lock.
   The put will be executed atomically. ie nested puts will execute after
   this put has terminated.
   **/
  asap(function () {
    var result;

    try {
      result = (channel ? channel.put : env.dispatch)(action);
    } catch (error) {
      cb(error, true);
      return;
    }

    if (resolve && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)) {
      resolvePromise(result, cb);
    } else {
      cb(result);
    }
  }); // Put effects are non cancellables
}

function runTakeEffect(env, _ref3, cb) {
  var _ref3$channel = _ref3.channel,
      channel = _ref3$channel === void 0 ? env.channel : _ref3$channel,
      pattern = _ref3.pattern,
      maybe = _ref3.maybe;

  var takeCb = function takeCb(input) {
    if (input instanceof Error) {
      cb(input, true);
      return;
    }

    if (isEnd(input) && !maybe) {
      cb(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TERMINATE"]);
      return;
    }

    cb(input);
  };

  try {
    channel.take(takeCb, Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(pattern) ? matcher(pattern) : null);
  } catch (err) {
    cb(err, true);
    return;
  }

  cb.cancel = takeCb.cancel;
}

function runCallEffect(env, _ref4, cb, _ref5) {
  var context = _ref4.context,
      fn = _ref4.fn,
      args = _ref4.args;
  var task = _ref5.task;

  // catch synchronous failures; see #152
  try {
    var result = fn.apply(context, args);

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)) {
      resolvePromise(result, cb);
      return;
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(result)) {
      // resolve iterator
      proc(env, result, task.context, current, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(fn),
      /* isRoot */
      false, cb);
      return;
    }

    cb(result);
  } catch (error) {
    cb(error, true);
  }
}

function runCPSEffect(env, _ref6, cb) {
  var context = _ref6.context,
      fn = _ref6.fn,
      args = _ref6.args;

  // CPS (ie node style functions) can define their own cancellation logic
  // by setting cancel field on the cb
  // catch synchronous failures; see #152
  try {
    var cpsCb = function cpsCb(err, res) {
      if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["undef"])(err)) {
        cb(res);
      } else {
        cb(err, true);
      }
    };

    fn.apply(context, args.concat(cpsCb));

    if (cpsCb.cancel) {
      cb.cancel = cpsCb.cancel;
    }
  } catch (error) {
    cb(error, true);
  }
}

function runForkEffect(env, _ref7, cb, _ref8) {
  var context = _ref7.context,
      fn = _ref7.fn,
      args = _ref7.args,
      detached = _ref7.detached;
  var parent = _ref8.task;
  var taskIterator = createTaskIterator({
    context: context,
    fn: fn,
    args: args
  });
  var meta = getIteratorMetaInfo(taskIterator, fn);
  immediately(function () {
    var child = proc(env, taskIterator, parent.context, current, meta, detached, undefined);

    if (detached) {
      cb(child);
    } else {
      if (child.isRunning()) {
        parent.queue.addTask(child);
        cb(child);
      } else if (child.isAborted()) {
        parent.queue.abort(child.error());
      } else {
        cb(child);
      }
    }
  }); // Fork effects are non cancellables
}

function runJoinEffect(env, taskOrTasks, cb, _ref9) {
  var task = _ref9.task;

  var joinSingleTask = function joinSingleTask(taskToJoin, cb) {
    if (taskToJoin.isRunning()) {
      var joiner = {
        task: task,
        cb: cb
      };

      cb.cancel = function () {
        if (taskToJoin.isRunning()) Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(taskToJoin.joiners, joiner);
      };

      taskToJoin.joiners.push(joiner);
    } else {
      if (taskToJoin.isAborted()) {
        cb(taskToJoin.error(), true);
      } else {
        cb(taskToJoin.result());
      }
    }
  };

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(taskOrTasks)) {
    if (taskOrTasks.length === 0) {
      cb([]);
      return;
    }

    var childCallbacks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(taskOrTasks, cb);
    taskOrTasks.forEach(function (t, i) {
      joinSingleTask(t, childCallbacks[i]);
    });
  } else {
    joinSingleTask(taskOrTasks, cb);
  }
}

function cancelSingleTask(taskToCancel) {
  if (taskToCancel.isRunning()) {
    taskToCancel.cancel();
  }
}

function runCancelEffect(env, taskOrTasks, cb, _ref10) {
  var task = _ref10.task;

  if (taskOrTasks === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"]) {
    cancelSingleTask(task);
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(taskOrTasks)) {
    taskOrTasks.forEach(cancelSingleTask);
  } else {
    cancelSingleTask(taskOrTasks);
  }

  cb(); // cancel effects are non cancellables
}

function runAllEffect(env, effects, cb, _ref11) {
  var digestEffect = _ref11.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);

  if (keys.length === 0) {
    cb(Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(effects) ? [] : {});
    return;
  }

  var childCallbacks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(effects, cb);
  keys.forEach(function (key) {
    digestEffect(effects[key], effectId, childCallbacks[key], key);
  });
}

function runRaceEffect(env, effects, cb, _ref12) {
  var digestEffect = _ref12.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);
  var response = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(effects) ? Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(keys.length) : {};
  var childCbs = {};
  var completed = false;
  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(res)) {
        // Race Auto cancellation
        cb.cancel();
        cb(res, isErr);
      } else {
        cb.cancel();
        completed = true;
        response[key] = res;
        cb(response);
      }
    };

    chCbAtKey.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    childCbs[key] = chCbAtKey;
  });

  cb.cancel = function () {
    // prevents unnecessary cancellation
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCbs[key].cancel();
      });
    }
  };

  keys.forEach(function (key) {
    if (completed) {
      return;
    }

    digestEffect(effects[key], effectId, childCbs[key], key);
  });
}

function runSelectEffect(env, _ref13, cb) {
  var selector = _ref13.selector,
      args = _ref13.args;

  try {
    var state = selector.apply(void 0, [env.getState()].concat(args));
    cb(state);
  } catch (error) {
    cb(error, true);
  }
}

function runChannelEffect(env, _ref14, cb) {
  var pattern = _ref14.pattern,
      buffer = _ref14.buffer;
  var chan = channel(buffer);
  var match = matcher(pattern);

  var taker = function taker(action) {
    if (!isEnd(action)) {
      env.channel.take(taker, match);
    }

    chan.put(action);
  };

  var close = chan.close;

  chan.close = function () {
    taker.cancel();
    close();
  };

  env.channel.take(taker, match);
  cb(chan);
}

function runCancelledEffect(env, data, cb, _ref15) {
  var task = _ref15.task;
  cb(task.isCancelled());
}

function runFlushEffect(env, channel, cb) {
  channel.flush(cb);
}

function runGetContextEffect(env, prop, cb, _ref16) {
  var task = _ref16.task;
  cb(task.context[prop]);
}

function runSetContextEffect(env, props, cb, _ref17) {
  var task = _ref17.task;
  Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(task.context, props);
  cb();
}

var effectRunnerMap = (_effectRunnerMap = {}, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["T"]] = runTakeEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["P"]] = runPutEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["A"]] = runAllEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["R"]] = runRaceEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["C"]] = runCallEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["a"]] = runCPSEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["F"]] = runForkEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["J"]] = runJoinEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["b"]] = runCancelEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["S"]] = runSelectEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["d"]] = runChannelEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["f"]] = runCancelledEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["g"]] = runFlushEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["G"]] = runGetContextEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["h"]] = runSetContextEffect, _effectRunnerMap);

/**
 Used to track a parent task and its forks
 In the fork model, forked tasks are attached by default to their parent
 We model this using the concept of Parent task && main Task
 main task is the main flow of the current Generator, the parent tasks is the
 aggregation of the main tasks + all its forked tasks.
 Thus the whole model represents an execution tree with multiple branches (vs the
 linear execution tree in sequential (non parallel) programming)

 A parent tasks has the following semantics
 - It completes if all its forks either complete or all cancelled
 - If it's cancelled, all forks are cancelled as well
 - It aborts if any uncaught error bubbles up from forks
 - If it completes, the return value is the one returned by the main task
 **/

function forkQueue(mainTask, onAbort, cont) {
  var tasks = [];
  var result;
  var completed = false;
  addTask(mainTask);

  var getTasks = function getTasks() {
    return tasks;
  };

  function abort(err) {
    onAbort();
    cancelAll();
    cont(err, true);
  }

  function addTask(task) {
    tasks.push(task);

    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(tasks, task);
      task.cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];

      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }

        if (!tasks.length) {
          completed = true;
          cont(result);
        }
      }
    };
  }

  function cancelAll() {
    if (completed) {
      return;
    }

    completed = true;
    tasks.forEach(function (t) {
      t.cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: getTasks
  };
}

// there can be only a single saga error created at any given moment

function formatLocation(fileName, lineNumber) {
  return fileName + "?" + lineNumber;
}

function effectLocationAsString(effect) {
  var location = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["v"])(effect);

  if (location) {
    var code = location.code,
        fileName = location.fileName,
        lineNumber = location.lineNumber;
    var source = code + "  " + formatLocation(fileName, lineNumber);
    return source;
  }

  return '';
}

function sagaLocationAsString(sagaMeta) {
  var name = sagaMeta.name,
      location = sagaMeta.location;

  if (location) {
    return name + "  " + formatLocation(location.fileName, location.lineNumber);
  }

  return name;
}

function cancelledTasksAsString(sagaStack) {
  var cancelledTasks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["u"])(function (i) {
    return i.cancelledTasks;
  }, sagaStack);

  if (!cancelledTasks.length) {
    return '';
  }

  return ['Tasks cancelled due to error:'].concat(cancelledTasks).join('\n');
}

var crashedEffect = null;
var sagaStack = [];
var addSagaFrame = function addSagaFrame(frame) {
  frame.crashedEffect = crashedEffect;
  sagaStack.push(frame);
};
var clear = function clear() {
  crashedEffect = null;
  sagaStack.length = 0;
}; // this sets crashed effect for the soon-to-be-reported saga frame
// this slightly streatches the singleton nature of this module into wrong direction
// as it's even less obvious what's the data flow here, but it is what it is for now

var setCrashedEffect = function setCrashedEffect(effect) {
  crashedEffect = effect;
};
/**
  @returns {string}

  @example
  The above error occurred in task errorInPutSaga {pathToFile}
  when executing effect put({type: 'REDUCER_ACTION_ERROR_IN_PUT'}) {pathToFile}
      created by fetchSaga {pathToFile}
      created by rootSaga {pathToFile}
*/

var toString = function toString() {
  var firstSaga = sagaStack[0],
      otherSagas = sagaStack.slice(1);
  var crashedEffectLocation = firstSaga.crashedEffect ? effectLocationAsString(firstSaga.crashedEffect) : null;
  var errorMessage = "The above error occurred in task " + sagaLocationAsString(firstSaga.meta) + (crashedEffectLocation ? " \n when executing effect " + crashedEffectLocation : '');
  return [errorMessage].concat(otherSagas.map(function (s) {
    return "    created by " + sagaLocationAsString(s.meta);
  }), [cancelledTasksAsString(sagaStack)]).join('\n');
};

function newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont) {
  var _task;

  if (cont === void 0) {
    cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
  }

  var status = RUNNING;
  var taskResult;
  var taskError;
  var deferredEnd = null;
  var cancelledDueToErrorTasks = [];
  var context = Object.create(parentContext);
  var queue = forkQueue(mainTask, function onAbort() {
    cancelledDueToErrorTasks.push.apply(cancelledDueToErrorTasks, queue.getTasks().map(function (t) {
      return t.meta.name;
    }));
  }, end);
  /**
   This may be called by a parent generator to trigger/propagate cancellation
   cancel all pending tasks (including the main task), then end the current task.
    Cancellation propagates down to the whole execution tree held by this Parent task
   It's also propagated to all joiners of this task and their execution tree/joiners
    Cancellation is noop for terminated/Cancelled tasks tasks
   **/

  function cancel() {
    if (status === RUNNING) {
      // Setting status to CANCELLED does not necessarily mean that the task/iterators are stopped
      // effects in the iterator's finally block will still be executed
      status = CANCELLED;
      queue.cancelAll(); // Ending with a TASK_CANCEL will propagate the Cancellation to all joiners

      end(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"], false);
    }
  }

  function end(result, isErr) {
    if (!isErr) {
      // The status here may be RUNNING or CANCELLED
      // If the status is CANCELLED, then we do not need to change it here
      if (result === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]) {
        status = CANCELLED;
      } else if (status !== CANCELLED) {
        status = DONE;
      }

      taskResult = result;
      deferredEnd && deferredEnd.resolve(result);
    } else {
      status = ABORTED;
      addSagaFrame({
        meta: meta,
        cancelledTasks: cancelledDueToErrorTasks
      });

      if (task.isRoot) {
        var sagaStack = toString(); // we've dumped the saga stack to string and are passing it to user's code
        // we know that it won't be needed anymore and we need to clear it

        clear();
        env.onError(result, {
          sagaStack: sagaStack
        });
      }

      taskError = result;
      deferredEnd && deferredEnd.reject(result);
    }

    task.cont(result, isErr);
    task.joiners.forEach(function (joiner) {
      joiner.cb(result, isErr);
    });
    task.joiners = null;
  }

  function setContext(props) {
    if (true) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["object"], Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["w"])('task', props));
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(context, props);
  }

  function toPromise() {
    if (deferredEnd) {
      return deferredEnd.promise;
    }

    deferredEnd = Object(_redux_saga_deferred__WEBPACK_IMPORTED_MODULE_6__["default"])();

    if (status === ABORTED) {
      deferredEnd.reject(taskError);
    } else if (status !== RUNNING) {
      deferredEnd.resolve(taskResult);
    }

    return deferredEnd.promise;
  }

  var task = (_task = {}, _task[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK"]] = true, _task.id = parentEffectId, _task.meta = meta, _task.isRoot = isRoot, _task.context = context, _task.joiners = [], _task.queue = queue, _task.cancel = cancel, _task.cont = cont, _task.end = end, _task.setContext = setContext, _task.toPromise = toPromise, _task.isRunning = function isRunning() {
    return status === RUNNING;
  }, _task.isCancelled = function isCancelled() {
    return status === CANCELLED || status === RUNNING && mainTask.status === CANCELLED;
  }, _task.isAborted = function isAborted() {
    return status === ABORTED;
  }, _task.result = function result() {
    return taskResult;
  }, _task.error = function error() {
    return taskError;
  }, _task);
  return task;
}

function proc(env, iterator$1, parentContext, parentEffectId, meta, isRoot, cont) {
  if ( true && iterator$1[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["x"]]) {
    throw new Error("redux-saga doesn't support async generators, please use only regular ones");
  }

  var finalRunEffect = env.finalizeRunEffect(runEffect);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/

  next.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
  /** Creates a main task to track the main flow */

  var mainTask = {
    meta: meta,
    cancel: cancelMain,
    status: RUNNING
  };
  /**
   Creates a new task descriptor for this generator.
   A task is the aggregation of it's mainTask and all it's forked tasks.
   **/

  var task = newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont);
  var executingContext = {
    task: task,
    digestEffect: digestEffect
  };
  /**
    cancellation of the main task. We'll simply resume the Generator with a TASK_CANCEL
  **/

  function cancelMain() {
    if (mainTask.status === RUNNING) {
      mainTask.status = CANCELLED;
      next(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/


  if (cont) {
    cont.cancel = task.cancel;
  } // kicks up the generator


  next(); // then return the task descriptor to the caller

  return task;
  /**
   * This is the generator driver
   * It's a recursive async/continuation function which calls itself
   * until the generator terminates or throws
   * @param {internal commands(TASK_CANCEL | TERMINATE) | any} arg - value, generator will be resumed with.
   * @param {boolean} isErr - the flag shows if effect finished with an error
   *
   * receives either (command | effect result, false) or (any thrown thing, true)
   */

  function next(arg, isErr) {
    try {
      var result;

      if (isErr) {
        result = iterator$1.throw(arg); // user handled the error, we can clear bookkept values

        clear();
      } else if (Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["y"])(arg)) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.status = CANCELLED;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/

        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          This will jump to the finally block
        **/

        result = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(iterator$1.return) ? iterator$1.return(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]) : {
          done: true,
          value: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]
        };
      } else if (Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["z"])(arg)) {
        // We get TERMINATE flag, i.e. by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(iterator$1.return) ? iterator$1.return() : {
          done: true
        };
      } else {
        result = iterator$1.next(arg);
      }

      if (!result.done) {
        digestEffect(result.value, parentEffectId, next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        if (mainTask.status !== CANCELLED) {
          mainTask.status = DONE;
        }

        mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.status === CANCELLED) {
        throw error;
      }

      mainTask.status = ABORTED;
      mainTask.cont(error, true);
    }
  }

  function runEffect(effect, effectId, currCb) {
    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      of completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(effect)) {
      resolvePromise(effect, currCb);
    } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(effect)) {
      // resolve iterator
      proc(env, effect, task.context, effectId, meta,
      /* isRoot */
      false, currCb);
    } else if (effect && effect[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]]) {
      var effectRunner = effectRunnerMap[effect.type];
      effectRunner(env, effect.payload, currCb, executingContext);
    } else {
      // anything else returned as is
      currCb(effect);
    }
  }

  function digestEffect(effect, parentEffectId, cb, label) {
    if (label === void 0) {
      label = '';
    }

    var effectId = nextSagaId();
    env.sagaMonitor && env.sagaMonitor.effectTriggered({
      effectId: effectId,
      parentEffectId: parentEffectId,
      label: label,
      effect: effect
    });
    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/

    var effectSettled; // Completion callback passed to the appropriate effect runner

    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // defensive measure

      if (env.sagaMonitor) {
        if (isErr) {
          env.sagaMonitor.effectRejected(effectId, res);
        } else {
          env.sagaMonitor.effectResolved(effectId, res);
        }
      }

      if (isErr) {
        setCrashedEffect(effect);
      }

      cb(res, isErr);
    } // tracks down the current cancel


    currCb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // setup cancellation logic on the parent cb

    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      currCb.cancel(); // propagates cancel downward

      currCb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // defensive measure

      env.sagaMonitor && env.sagaMonitor.effectCancelled(effectId);
    };

    finalRunEffect(effect, effectId, currCb);
  }
}

var RUN_SAGA_SIGNATURE = 'runSaga(options, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ": saga argument must be a Generator function!";
function runSaga(_ref, saga) {
  var _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      dispatch = _ref.dispatch,
      getState = _ref.getState,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      sagaMonitor = _ref.sagaMonitor,
      effectMiddlewares = _ref.effectMiddlewares,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["B"] : _ref$onError;

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(saga, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], NON_GENERATOR_ERR);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var iterator$1 = saga.apply(void 0, args);

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(iterator$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"], NON_GENERATOR_ERR);
  }

  var effectId = nextSagaId();

  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.rootSagaStarted = sagaMonitor.rootSagaStarted || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.rootSagaStarted({
      effectId: effectId,
      saga: saga,
      args: args
    });
  }

  if (true) {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(dispatch)) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(dispatch, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'dispatch must be a function');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(getState)) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(getState, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'getState must be a function');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(effectMiddlewares)) {
      var MIDDLEWARE_TYPE_ERROR = 'effectMiddlewares must be an array of functions';
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(effectMiddlewares, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"], MIDDLEWARE_TYPE_ERROR);
      effectMiddlewares.forEach(function (effectMiddleware) {
        return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(effectMiddleware, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], MIDDLEWARE_TYPE_ERROR);
      });
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(onError, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'onError passed to the redux-saga is not a function!');
  }

  var finalizeRunEffect;

  if (effectMiddlewares) {
    var middleware = redux__WEBPACK_IMPORTED_MODULE_5__["compose"].apply(void 0, effectMiddlewares);

    finalizeRunEffect = function finalizeRunEffect(runEffect) {
      return function (effect, effectId, currCb) {
        var plainRunEffect = function plainRunEffect(eff) {
          return runEffect(eff, effectId, currCb);
        };

        return middleware(plainRunEffect)(effect);
      };
    };
  } else {
    finalizeRunEffect = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["E"];
  }

  var env = {
    channel: channel,
    dispatch: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["D"])(dispatch),
    getState: getState,
    sagaMonitor: sagaMonitor,
    onError: onError,
    finalizeRunEffect: finalizeRunEffect
  };
  return immediately(function () {
    var task = proc(env, iterator$1, context, effectId, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(saga),
    /* isRoot */
    true, undefined);

    if (sagaMonitor) {
      sagaMonitor.effectResolved(effectId, task);
    }

    return task;
  });
}

function sagaMiddlewareFactory(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      sagaMonitor = _ref.sagaMonitor,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["context", "channel", "sagaMonitor"]);

  var boundRunSaga;

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(channel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["channel"], 'options.channel passed to the Saga middleware is not a channel');
  }

  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState,
        dispatch = _ref2.dispatch;
    boundRunSaga = runSaga.bind(null, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
      context: context,
      channel: channel,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor
    }));
    return function (next) {
      return function (action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }

        var result = next(action); // hit reducers

        channel.put(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function () {
    if ( true && !boundRunSaga) {
      throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
    }

    return boundRunSaga.apply(void 0, arguments);
  };

  sagaMiddleware.setContext = function (props) {
    if (true) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["object"], Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["w"])('sagaMiddleware', props));
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(context, props);
  };

  return sagaMiddleware;
}

/* harmony default export */ __webpack_exports__["default"] = (sagaMiddlewareFactory);



/***/ }),

/***/ "./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js ***!
  \***************************************************************************/
/*! exports provided: default, arrayOfDeferred */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOfDeferred", function() { return arrayOfDeferred; });
function deferred() {
  var def = {};
  def.promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  return def;
}
function arrayOfDeferred(length) {
  var arr = [];

  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }

  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (deferred);



/***/ }),

/***/ "./node_modules/next-redux-wrapper/es6/index.js":
/*!******************************************************!*\
  !*** ./node_modules/next-redux-wrapper/es6/index.js ***!
  \******************************************************/
/*! exports provided: HYDRATE, STOREKEY, createWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HYDRATE", function() { return HYDRATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOREKEY", function() { return STOREKEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWrapper", function() { return createWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var HYDRATE = '__NEXT_REDUX_WRAPPER_HYDRATE__';
var STOREKEY = '__NEXT_REDUX_WRAPPER_STORE__';
var getIsServer = function () { return typeof window === 'undefined'; };
var getDeserializedState = function (initialState, _a) {
    var deserializeState = (_a === void 0 ? {} : _a).deserializeState;
    return deserializeState ? deserializeState(initialState) : initialState;
};
var getSerializedState = function (state, _a) {
    var serializeState = (_a === void 0 ? {} : _a).serializeState;
    return serializeState ? serializeState(state) : state;
};
var getStoreKey = function (_a) {
    var storeKey = (_a === void 0 ? {} : _a).storeKey;
    return storeKey || STOREKEY;
};
var initStore = function (_a) {
    var makeStore = _a.makeStore, context = _a.context, config = _a.config;
    var storeKey = getStoreKey(config);
    var createStore = function () { return makeStore(context); };
    if (getIsServer()) {
        var c = context;
        var req = void 0;
        if (c.req)
            req = c.req;
        if (c.ctx && c.ctx.req)
            req = c.ctx.req;
        if (req) {
            // ATTENTION! THIS IS INTERNAL, DO NOT ACCESS DIRECTLY ANYWHERE ELSE
            // @see https://github.com/kirill-konshin/next-redux-wrapper/pull/196#issuecomment-611673546
            if (!req.__nextReduxWrapperStore)
                req.__nextReduxWrapperStore = createStore();
            return req.__nextReduxWrapperStore;
        }
        return createStore();
    }
    // Memoize store if client
    if (!(storeKey in window)) {
        window[storeKey] = createStore();
    }
    return window[storeKey];
};
var createWrapper = function (makeStore, config) {
    if (config === void 0) { config = {}; }
    var makeProps = function (_a) {
        var callback = _a.callback, context = _a.context, _b = _a.isApp, isApp = _b === void 0 ? false : _b;
        return __awaiter(void 0, void 0, void 0, function () {
            var store, initialProps, _c, state;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        store = initStore({ context: context, makeStore: makeStore, config: config });
                        if (config.debug)
                            console.log("1. getProps created store with state", store.getState());
                        _c = callback;
                        if (!_c) return [3 /*break*/, 2];
                        return [4 /*yield*/, callback(
                            // merging store into context instead of just passing as another argument because it's impossible to override getInitialProps signature
                            isApp ? __assign(__assign({}, context), { ctx: __assign(__assign({}, context.ctx), { store: store }) }) : __assign(__assign({}, context), { store: store }))];
                    case 1:
                        _c = (_d.sent());
                        _d.label = 2;
                    case 2:
                        initialProps = (_c) ||
                            {};
                        if (config.debug)
                            console.log("3. getProps after dispatches has store state", store.getState());
                        state = store.getState();
                        return [2 /*return*/, {
                                initialProps: initialProps,
                                initialState: getIsServer() ? getSerializedState(state, config) : state,
                            }];
                }
            });
        });
    };
    var getInitialPageProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (context.store) {
                console.warn('No need to wrap pages if _app was wrapped');
                return [2 /*return*/, callback(context)];
            }
            return [2 /*return*/, makeProps({ callback: callback, context: context })];
        });
    }); }; };
    var getInitialAppProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, makeProps({ callback: callback, context: context, isApp: true })];
            case 1: return [2 /*return*/, (_a.sent())];
        }
    }); }); }; }; // this is just to convince TS
    var getStaticProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, props, settings, wrapperProps;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, makeProps({ callback: callback, context: context })];
                case 1:
                    _a = _c.sent(), _b = _a.initialProps, props = _b.props, settings = __rest(_b, ["props"]), wrapperProps = __rest(_a, ["initialProps"]);
                    return [2 /*return*/, __assign(__assign({}, settings), { props: __assign(__assign({}, wrapperProps), props) })];
            }
        });
    }); }; };
    var getServerSideProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getStaticProps(callback)(context)];
                case 1: return [2 /*return*/, _a.sent()]; // just not to repeat myself
            }
        });
    }); }; };
    var withRedux = function (Component) {
        var displayName = "withRedux(" + (Component.displayName || Component.name || 'Component') + ")";
        //TODO Check if pages/_app was wrapped so there's no need to wrap a page itself
        var Wrapper = function (_a, context) {
            var _b;
            var initialState = _a.initialState, initialProps = _a.initialProps, props = __rest(_a, ["initialState", "initialProps"]);
            var isFirstRender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
            // this happens when App has page with getServerSideProps/getStaticProps
            var initialStateFromGSPorGSSR = (_b = props === null || props === void 0 ? void 0 : props.pageProps) === null || _b === void 0 ? void 0 : _b.initialState;
            if (config.debug)
                console.log('4. WrappedApp created new store with', displayName, {
                    initialState: initialState,
                    initialStateFromGSPorGSSR: initialStateFromGSPorGSSR,
                });
            var store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initStore({ makeStore: makeStore, config: config, context: context }));
            var hydrate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
                if (initialState)
                    store.current.dispatch({
                        type: HYDRATE,
                        payload: getDeserializedState(initialState, config),
                    });
                // ATTENTION! This code assumes that Page's getServerSideProps is executed after App.getInitialProps
                // so we dispatch in this order
                if (initialStateFromGSPorGSSR)
                    store.current.dispatch({
                        type: HYDRATE,
                        payload: getDeserializedState(initialStateFromGSPorGSSR, config),
                    });
            }, [initialStateFromGSPorGSSR, initialState]);
            // apply synchronously on first render (both server side and client side)
            if (isFirstRender.current)
                hydrate();
            // apply async in case props have changed, on navigation for example
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
                if (isFirstRender.current) {
                    isFirstRender.current = false;
                    return;
                }
                hydrate();
            }, [hydrate]);
            // order is important! Next.js overwrites props from pages/_app with getStaticProps from page
            // @see https://github.com/zeit/next.js/issues/11648
            if (initialProps && initialProps.pageProps)
                props.pageProps = __assign(__assign({}, initialProps.pageProps), props.pageProps);
            var resultProps = props;
            // just some cleanup to prevent passing it as props, we need to clone props to safely delete initialState
            if (initialStateFromGSPorGSSR) {
                resultProps = __assign(__assign({}, props), { pageProps: __assign({}, props.pageProps) });
                delete resultProps.pageProps.initialState;
            }
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], { store: store.current },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, __assign({}, initialProps, resultProps))));
        };
        Wrapper.displayName = displayName;
        if ('getInitialProps' in Component)
            Wrapper.getInitialProps = function (context) { return __awaiter(void 0, void 0, void 0, function () {
                var callback;
                return __generator(this, function (_a) {
                    callback = Component.getInitialProps;
                    return [2 /*return*/, (context.ctx ? getInitialAppProps(callback) : getInitialPageProps(callback))(context)];
                });
            }); };
        return Wrapper;
    };
    return {
        getServerSideProps: getServerSideProps,
        getStaticProps: getStaticProps,
        withRedux: withRedux,
    };
};
// Legacy
/* harmony default export */ __webpack_exports__["default"] = (function (makeStore, config) {
    if (config === void 0) { config = {}; }
    console.warn('/!\\ You are using legacy implementaion. Please update your code: use createWrapper() and wrapper.withRedux().');
    return createWrapper(makeStore, config).withRedux;
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;

exports.__esModule = true;
exports.composeWithDevTools =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length === 0) return undefined;
        if (typeof arguments[0] === 'object') return compose;
        return compose.apply(null, arguments);
      };

exports.devToolsEnhancer =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__
    : function () {
        return function (noop) {
          return noop;
        };
      };


/***/ }),

/***/ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js ***!
  \***********************************************************************/
/*! exports provided: CANCEL, SAGA_LOCATION, buffers, detach, END, channel, eventChannel, isEnd, multicastChannel, runSaga, stdChannel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core */ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["buffers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["detach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "END", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["channel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["eventChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["isEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multicastChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["multicastChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runSaga", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["runSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["stdChannel"]; });






/* harmony default export */ __webpack_exports__["default"] = (_redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore, legacy_createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legacy_createStore", function() { return legacy_createStore; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (true) {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( false ? undefined : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( false ? undefined : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( false ? undefined : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( false ? undefined : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( false ? undefined : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( false ? undefined : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( false ? undefined : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? undefined : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( false ? undefined : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( false ? undefined : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( false ? undefined : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( false ? undefined : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( false ? undefined : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( false ? undefined : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( false ? undefined : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( false ? undefined : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( false ? undefined : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ "./reducers/post.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




 // 루트 리듀서

var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  // 서버 사이드 렌더링을 위해서 HYDRATE 추가, 원래는 index 없어도 됨
  index: function index() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
        console.log("HYDRATE", action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_3__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var _marked = /*#__PURE__*/_regeneratorRuntime().mark(rootSaga);

 // 사가 이펙트


 // 사가 이펙트
// delay, debounce, throttle, takeLatest, takeEvery, takeLeading, takeMaybe
// all 은 배열을 받고 배열안의것들을 동시에 실행해줌
// put 은 dispatch 역할
// take 는 해당 요청이 들어올때까지 기다리는 것, 동기
// takeEvery take의 비동기
// takeLatest 클릭 실수 방지 , 마지막 요청만 실행
// fork는 비동기 호출, 함수안의것들을 실행
// call은 동기 호출, 함수안의것들을 실행
// delay, setTimeOut 과 역할이 비슷함
// 서버에 로그인 요청을 보냄
// Post

function rootSaga() {
  return _regeneratorRuntime().wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
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

/***/ }),

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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var _marked = /*#__PURE__*/_regeneratorRuntime().mark(loadPosts),
    _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(addPost),
    _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(removePost),
    _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(addComment),
    _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadPosts),
    _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddPost),
    _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemovePost),
    _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddComment),
    _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(postSaga);







function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/posts", data);
}

function loadPosts(action) {
  return _regeneratorRuntime().wrap(function loadPosts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
            data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["generateDummyPost"])(10)
          });

        case 5:
          _context.next = 12;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
            data: _context.t0.response.data
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/post", data);
}

function addPost(action) {
  var id;
  return _regeneratorRuntime().wrap(function addPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 3:
          id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
            data: {
              id: id,
              content: action.data
            }
          });

        case 6:
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            data: id
          });

        case 8:
          _context2.next = 15;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            data: _context2.t0.response.data
          });

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/post", data);
}

function removePost(action) {
  return _regeneratorRuntime().wrap(function removePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
            data: action.data
          });

        case 5:
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
            data: action.data
          });

        case 7:
          _context3.next = 14;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
            data: _context3.t0.response.data
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/post/".concat(data.postId, "/comment"), data);
}

function addComment(action) {
  return _regeneratorRuntime().wrap(function addComment$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 3:
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
            data: action.data
          });

        case 5:
          _context4.next = 11;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
            data: _context4.t0.response.data
          });

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}

function watchLoadPosts() {
  return _regeneratorRuntime().wrap(function watchLoadPosts$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchAddPost() {
  return _regeneratorRuntime().wrap(function watchAddPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchRemovePost() {
  return _regeneratorRuntime().wrap(function watchRemovePost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchAddComment() {
  return _regeneratorRuntime().wrap(function watchAddComment$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function postSaga() {
  return _regeneratorRuntime().wrap(function postSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddComment)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
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

/***/ }),

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

var _marked = /*#__PURE__*/_regeneratorRuntime().mark(logIn),
    _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(logOut),
    _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(signUp),
    _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(follow),
    _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(unfollow),
    _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(watchFollow),
    _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnfollow),
    _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogIn),
    _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogOut),
    _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchSignUp),
    _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(userSaga);



 // 로그인

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/login", data);
}

function logIn(action) {
  return _regeneratorRuntime().wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log("saga logIn"); // const result = yield call(logInAPI);

          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            data: action.data
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
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
            error: _context.t0.response.data
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
} // 로그아웃


function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/logout");
}

function logOut() {
  return _regeneratorRuntime().wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
          });

        case 5:
          _context2.next = 12;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
            error: _context2.t0.response.data
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
} // 회원가입


function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://localhost:3065/user", data);
}

function signUp(action) {
  var result;
  return _regeneratorRuntime().wrap(function signUp$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);

        case 3:
          result = _context3.sent;
          console.log(result);
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
          });

        case 7:
          _context3.next = 14;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
            error: _context3.t0.response.data
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
} // 팔로우


function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/follow");
}

function follow(action) {
  return _regeneratorRuntime().wrap(function follow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);

        case 3:
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
            data: action.data
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
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
            error: _context4.t0.response.data
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}

function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/unfollow");
}

function unfollow(action) {
  return _regeneratorRuntime().wrap(function unfollow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);

        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context5.next = 12;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
            error: _context5.t0.response.data
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 7]]);
}

function watchFollow() {
  return _regeneratorRuntime().wrap(function watchFollow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchUnfollow() {
  return _regeneratorRuntime().wrap(function watchUnfollow$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchLogIn() {
  return _regeneratorRuntime().wrap(function watchLogIn$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchLogOut() {
  return _regeneratorRuntime().wrap(function watchLogOut$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchSignUp() {
  return _regeneratorRuntime().wrap(function watchSignUp$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function userSaga() {
  return _regeneratorRuntime().wrap(function userSaga$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp) // fork(watchRemoveFollower),
          // fork(watchLoadFollowers),
          // fork(watchLoadFollowings),
          // fork(watchChangeNickname),
          // fork(watchLoadUser),
          ]);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
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

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







var configureStore = function configureStore(context) {
  console.log(context); // 미들웨어

  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var middlewares = [sagaMiddleware];
  var enhancer = false ? undefined // 배포용 미들웨어
  : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middlewares)); // 개발용 미들웨어

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]); // saga설정

  return store;
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2NvcmUvZGlzdC9yZWR1eC1zYWdhLWNvcmUuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvZGVmZXJyZWQvZGlzdC9yZWR1eC1zYWdhLWRlZmVycmVkLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQtcmVkdXgtd3JhcHBlci9lczYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1kZXZ0b29scy1leHRlbnNpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2Rpc3QvcmVkdXgtc2FnYS1jb3JlLW5wbS1wcm94eS5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9yZWR1eC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovL19OX0UvLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwibG9hZFBvc3RzIiwiYWRkUG9zdCIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50Iiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJsb2FkUG9zdHNBUEkiLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJkZWxheSIsInB1dCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsImdlbmVyYXRlRHVtbXlQb3N0IiwiZXJyb3IiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJyZXNwb25zZSIsImFkZFBvc3RBUEkiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJjb250ZW50IiwiQUREX1BPU1RfVE9fTUUiLCJBRERfUE9TVF9GQUlMVVJFIiwicmVtb3ZlUG9zdEFQSSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJ0aHJvdHRsZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsInRha2VMYXRlc3QiLCJBRERfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsImZvbGxvdyIsInVuZm9sbG93Iiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJsb2dJbkFQSSIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJsb2dPdXRBUEkiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJzaWduVXBBUEkiLCJjYWxsIiwicmVzdWx0IiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiZm9sbG93QVBJIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuZm9sbG93QVBJIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1JFUVVFU1QiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsIlNJR05fVVBfUkVRVUVTVCIsImNvbmZpZ3VyZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtSjtBQUN2RjtBQUNGO0FBQzBDO0FBQ3NGO0FBQzBkO0FBQ3ZsQjtBQUM3QjtBQUNZO0FBQ2Y7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDRixjQUFELENBQXBCO0VBQ0EsSUFBTUcsUUFBUSxHQUNaLFFBQ0lDLFNBREosQ0FDNkM7RUFEN0MsRUFFSUMsb0ZBQW1CLENBQUNDLHFEQUFlLE1BQWYsU0FBbUJKLFdBQW5CLENBQUQsQ0FIekIsQ0FOa0MsQ0FTMEI7O0VBQzVELElBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsaURBQUQsRUFBVU4sUUFBVixDQUF6QjtFQUNBSSxLQUFLLENBQUNHLFFBQU4sR0FBaUJWLGNBQWMsQ0FBQ1csR0FBZixDQUFtQjNGLDhDQUFuQixDQUFqQixDQVhrQyxDQVdhOztFQUMvQyxPQUFPdUYsS0FBUDtBQUNELENBYkQ7O0FBZUEsSUFBTUssT0FBTyxHQUFHQyx3RUFBYSxDQUFDZixjQUFELEVBQWlCO0VBQzVDZ0IsS0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUllRixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA0ZDk5MTRkYTUyZjAyYzM1ZThiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDSEFOTkVMX0VORF9UWVBFLCBNVUxUSUNBU1QsIE1BVENILCBTQUdBX0FDVElPTiwgQ0FOQ0VMLCBTRUxGX0NBTkNFTExBVElPTiwgVEVSTUlOQVRFLCBUQVNLLCBUQVNLX0NBTkNFTCwgSU8gfSBmcm9tICdAcmVkdXgtc2FnYS9zeW1ib2xzJztcbmV4cG9ydCB7IENBTkNFTCwgU0FHQV9MT0NBVElPTiB9IGZyb20gJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuaW1wb3J0IHsgc3RyaW5nIGFzIHN0cmluZyQxLCBhcnJheSBhcyBhcnJheSQxLCBzdHJpbmdhYmxlRnVuYywgZnVuYywgc3ltYm9sIGFzIHN5bWJvbCQxLCBidWZmZXIsIG5vdFVuZGVmLCBwcm9taXNlLCBpdGVyYXRvciwgdW5kZWYsIG9iamVjdCwgY2hhbm5lbCBhcyBjaGFubmVsJDEgfSBmcm9tICdAcmVkdXgtc2FnYS9pcyc7XG5pbXBvcnQgeyBrIGFzIGtUcnVlLCBlIGFzIGV4cGFuZGluZywgYyBhcyBjaGVjaywgbyBhcyBvbmNlLCByIGFzIHJlbW92ZSwgbiBhcyBub25lLCBpIGFzIGludGVybmFsRXJyLCBUIGFzIFRBS0UsIFAgYXMgUFVULCBBIGFzIEFMTCwgUiBhcyBSQUNFLCBDIGFzIENBTEwsIGEgYXMgQ1BTLCBGIGFzIEZPUkssIEogYXMgSk9JTiwgYiBhcyBDQU5DRUwkMSwgUyBhcyBTRUxFQ1QsIGQgYXMgQUNUSU9OX0NIQU5ORUwsIGYgYXMgQ0FOQ0VMTEVEJDEsIGcgYXMgRkxVU0gsIEcgYXMgR0VUX0NPTlRFWFQsIGggYXMgU0VUX0NPTlRFWFQsIGogYXMgZ2V0TWV0YUluZm8sIGwgYXMgY3JlYXRlQWxsU3R5bGVDaGlsZENhbGxiYWNrcywgbSBhcyBjcmVhdGVFbXB0eUFycmF5LCBwIGFzIGFzc2lnbldpdGhTeW1ib2xzLCBxIGFzIG1ha2VJdGVyYXRvciwgcyBhcyBzaG91bGRDb21wbGV0ZSwgdCBhcyBub29wLCB1IGFzIGZsYXRNYXAsIHYgYXMgZ2V0TG9jYXRpb24sIHcgYXMgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcsIHggYXMgYXN5bmNJdGVyYXRvclN5bWJvbCwgeSBhcyBzaG91bGRDYW5jZWwsIHogYXMgc2hvdWxkVGVybWluYXRlLCBCIGFzIGxvZ0Vycm9yLCBEIGFzIHdyYXBTYWdhRGlzcGF0Y2gsIEUgYXMgaWRlbnRpdHkgfSBmcm9tICcuL2lvLTZkZTE1NmYzLmpzJztcbmV4cG9ydCB7IEggYXMgYnVmZmVycywgSSBhcyBkZXRhY2ggfSBmcm9tICcuL2lvLTZkZTE1NmYzLmpzJztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgZGVmZXJyZWQgZnJvbSAnQHJlZHV4LXNhZ2EvZGVmZXJyZWQnO1xuaW1wb3J0ICdAcmVkdXgtc2FnYS9kZWxheS1wJztcblxudmFyIHF1ZXVlID0gW107XG4vKipcbiAgVmFyaWFibGUgdG8gaG9sZCBhIGNvdW50aW5nIHNlbWFwaG9yZVxuICAtIEluY3JlbWVudGluZyBhZGRzIGEgbG9jayBhbmQgcHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHN1c3BlbmRlZGAgc3RhdGUgKGlmIGl0J3Mgbm90XG4gICAgYWxyZWFkeSBzdXNwZW5kZWQpXG4gIC0gRGVjcmVtZW50aW5nIHJlbGVhc2VzIGEgbG9jay4gWmVybyBsb2NrcyBwdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgcmVsZWFzZWRgIHN0YXRlLiBUaGlzXG4gICAgdHJpZ2dlcnMgZmx1c2hpbmcgdGhlIHF1ZXVlZCB0YXNrcy5cbioqL1xuXG52YXIgc2VtYXBob3JlID0gMDtcbi8qKlxuICBFeGVjdXRlcyBhIHRhc2sgJ2F0b21pY2FsbHknLiBUYXNrcyBzY2hlZHVsZWQgZHVyaW5nIHRoaXMgZXhlY3V0aW9uIHdpbGwgYmUgcXVldWVkXG4gIGFuZCBmbHVzaGVkIGFmdGVyIHRoaXMgdGFzayBoYXMgZmluaXNoZWQgKGFzc3VtaW5nIHRoZSBzY2hlZHVsZXIgZW5kdXAgaW4gYSByZWxlYXNlZFxuICBzdGF0ZSkuXG4qKi9cblxuZnVuY3Rpb24gZXhlYyh0YXNrKSB7XG4gIHRyeSB7XG4gICAgc3VzcGVuZCgpO1xuICAgIHRhc2soKTtcbiAgfSBmaW5hbGx5IHtcbiAgICByZWxlYXNlKCk7XG4gIH1cbn1cbi8qKlxuICBFeGVjdXRlcyBvciBxdWV1ZXMgYSB0YXNrIGRlcGVuZGluZyBvbiB0aGUgc3RhdGUgb2YgdGhlIHNjaGVkdWxlciAoYHN1c3BlbmRlZGAgb3IgYHJlbGVhc2VkYClcbioqL1xuXG5cbmZ1bmN0aW9uIGFzYXAodGFzaykge1xuICBxdWV1ZS5wdXNoKHRhc2spO1xuXG4gIGlmICghc2VtYXBob3JlKSB7XG4gICAgc3VzcGVuZCgpO1xuICAgIGZsdXNoKCk7XG4gIH1cbn1cbi8qKlxuICogUHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHN1c3BlbmRlZGAgc3RhdGUgYW5kIGV4ZWN1dGVzIGEgdGFzayBpbW1lZGlhdGVseS5cbiAqL1xuXG5mdW5jdGlvbiBpbW1lZGlhdGVseSh0YXNrKSB7XG4gIHRyeSB7XG4gICAgc3VzcGVuZCgpO1xuICAgIHJldHVybiB0YXNrKCk7XG4gIH0gZmluYWxseSB7XG4gICAgZmx1c2goKTtcbiAgfVxufVxuLyoqXG4gIFB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGBzdXNwZW5kZWRgIHN0YXRlLiBTY2hlZHVsZWQgdGFza3Mgd2lsbCBiZSBxdWV1ZWQgdW50aWwgdGhlXG4gIHNjaGVkdWxlciBpcyByZWxlYXNlZC5cbioqL1xuXG5mdW5jdGlvbiBzdXNwZW5kKCkge1xuICBzZW1hcGhvcmUrKztcbn1cbi8qKlxuICBQdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgcmVsZWFzZWRgIHN0YXRlLlxuKiovXG5cblxuZnVuY3Rpb24gcmVsZWFzZSgpIHtcbiAgc2VtYXBob3JlLS07XG59XG4vKipcbiAgUmVsZWFzZXMgdGhlIGN1cnJlbnQgbG9jay4gRXhlY3V0ZXMgYWxsIHF1ZXVlZCB0YXNrcyBpZiB0aGUgc2NoZWR1bGVyIGlzIGluIHRoZSByZWxlYXNlZCBzdGF0ZS5cbioqL1xuXG5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICByZWxlYXNlKCk7XG4gIHZhciB0YXNrO1xuXG4gIHdoaWxlICghc2VtYXBob3JlICYmICh0YXNrID0gcXVldWUuc2hpZnQoKSkgIT09IHVuZGVmaW5lZCkge1xuICAgIGV4ZWModGFzayk7XG4gIH1cbn1cblxudmFyIGFycmF5ID0gZnVuY3Rpb24gYXJyYXkocGF0dGVybnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiBwYXR0ZXJucy5zb21lKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlcihwKShpbnB1dCk7XG4gICAgfSk7XG4gIH07XG59O1xudmFyIHByZWRpY2F0ZSA9IGZ1bmN0aW9uIHByZWRpY2F0ZShfcHJlZGljYXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICByZXR1cm4gX3ByZWRpY2F0ZShpbnB1dCk7XG4gIH07XG59O1xudmFyIHN0cmluZyA9IGZ1bmN0aW9uIHN0cmluZyhwYXR0ZXJuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQudHlwZSA9PT0gU3RyaW5nKHBhdHRlcm4pO1xuICB9O1xufTtcbnZhciBzeW1ib2wgPSBmdW5jdGlvbiBzeW1ib2wocGF0dGVybikge1xuICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LnR5cGUgPT09IHBhdHRlcm47XG4gIH07XG59O1xudmFyIHdpbGRjYXJkID0gZnVuY3Rpb24gd2lsZGNhcmQoKSB7XG4gIHJldHVybiBrVHJ1ZTtcbn07XG5mdW5jdGlvbiBtYXRjaGVyKHBhdHRlcm4pIHtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIHZhciBtYXRjaGVyQ3JlYXRvciA9IHBhdHRlcm4gPT09ICcqJyA/IHdpbGRjYXJkIDogc3RyaW5nJDEocGF0dGVybikgPyBzdHJpbmcgOiBhcnJheSQxKHBhdHRlcm4pID8gYXJyYXkgOiBzdHJpbmdhYmxlRnVuYyhwYXR0ZXJuKSA/IHN0cmluZyA6IGZ1bmMocGF0dGVybikgPyBwcmVkaWNhdGUgOiBzeW1ib2wkMShwYXR0ZXJuKSA/IHN5bWJvbCA6IG51bGw7XG5cbiAgaWYgKG1hdGNoZXJDcmVhdG9yID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBwYXR0ZXJuOiBcIiArIHBhdHRlcm4pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXJDcmVhdG9yKHBhdHRlcm4pO1xufVxuXG52YXIgRU5EID0ge1xuICB0eXBlOiBDSEFOTkVMX0VORF9UWVBFXG59O1xudmFyIGlzRW5kID0gZnVuY3Rpb24gaXNFbmQoYSkge1xuICByZXR1cm4gYSAmJiBhLnR5cGUgPT09IENIQU5ORUxfRU5EX1RZUEU7XG59O1xudmFyIENMT1NFRF9DSEFOTkVMX1dJVEhfVEFLRVJTID0gJ0Nhbm5vdCBoYXZlIGEgY2xvc2VkIGNoYW5uZWwgd2l0aCBwZW5kaW5nIHRha2Vycyc7XG52YXIgSU5WQUxJRF9CVUZGRVIgPSAnaW52YWxpZCBidWZmZXIgcGFzc2VkIHRvIGNoYW5uZWwgZmFjdG9yeSBmdW5jdGlvbic7XG52YXIgVU5ERUZJTkVEX0lOUFVUX0VSUk9SID0gXCJTYWdhIG9yIGNoYW5uZWwgd2FzIHByb3ZpZGVkIHdpdGggYW4gdW5kZWZpbmVkIGFjdGlvblxcbkhpbnRzOlxcbiAgLSBjaGVjayB0aGF0IHlvdXIgQWN0aW9uIENyZWF0b3IgcmV0dXJucyBhIG5vbi11bmRlZmluZWQgdmFsdWVcXG4gIC0gaWYgdGhlIFNhZ2Egd2FzIHN0YXJ0ZWQgdXNpbmcgcnVuU2FnYSwgY2hlY2sgdGhhdCB5b3VyIHN1YnNjcmliZSBzb3VyY2UgcHJvdmlkZXMgdGhlIGFjdGlvbiB0byBpdHMgbGlzdGVuZXJzXCI7XG5mdW5jdGlvbiBjaGFubmVsKGJ1ZmZlciQxKSB7XG4gIGlmIChidWZmZXIkMSA9PT0gdm9pZCAwKSB7XG4gICAgYnVmZmVyJDEgPSBleHBhbmRpbmcoKTtcbiAgfVxuXG4gIHZhciBjbG9zZWQgPSBmYWxzZTtcbiAgdmFyIHRha2VycyA9IFtdO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2soYnVmZmVyJDEsIGJ1ZmZlciwgSU5WQUxJRF9CVUZGRVIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKSB7XG4gICAgaWYgKGNsb3NlZCAmJiB0YWtlcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBpbnRlcm5hbEVycihDTE9TRURfQ0hBTk5FTF9XSVRIX1RBS0VSUyk7XG4gICAgfVxuXG4gICAgaWYgKHRha2Vycy5sZW5ndGggJiYgIWJ1ZmZlciQxLmlzRW1wdHkoKSkge1xuICAgICAgdGhyb3cgaW50ZXJuYWxFcnIoJ0Nhbm5vdCBoYXZlIHBlbmRpbmcgdGFrZXJzIHdpdGggbm9uIGVtcHR5IGJ1ZmZlcicpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHB1dChpbnB1dCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgICAgY2hlY2soaW5wdXQsIG5vdFVuZGVmLCBVTkRFRklORURfSU5QVVRfRVJST1IpO1xuICAgIH1cblxuICAgIGlmIChjbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFrZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGJ1ZmZlciQxLnB1dChpbnB1dCk7XG4gICAgfVxuXG4gICAgdmFyIGNiID0gdGFrZXJzLnNoaWZ0KCk7XG4gICAgY2IoaW5wdXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGFrZShjYikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgICAgY2hlY2soY2IsIGZ1bmMsIFwiY2hhbm5lbC50YWtlJ3MgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmIChjbG9zZWQgJiYgYnVmZmVyJDEuaXNFbXB0eSgpKSB7XG4gICAgICBjYihFTkQpO1xuICAgIH0gZWxzZSBpZiAoIWJ1ZmZlciQxLmlzRW1wdHkoKSkge1xuICAgICAgY2IoYnVmZmVyJDEudGFrZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFrZXJzLnB1c2goY2IpO1xuXG4gICAgICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbW92ZSh0YWtlcnMsIGNiKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goY2IpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICAgIGNoZWNrKGNiLCBmdW5jLCBcImNoYW5uZWwuZmx1c2gnIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VkICYmIGJ1ZmZlciQxLmlzRW1wdHkoKSkge1xuICAgICAgY2IoRU5EKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYihidWZmZXIkMS5mbHVzaCgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgIH1cblxuICAgIGlmIChjbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbG9zZWQgPSB0cnVlO1xuICAgIHZhciBhcnIgPSB0YWtlcnM7XG4gICAgdGFrZXJzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgdGFrZXIgPSBhcnJbaV07XG4gICAgICB0YWtlcihFTkQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGFrZTogdGFrZSxcbiAgICBwdXQ6IHB1dCxcbiAgICBmbHVzaDogZmx1c2gsXG4gICAgY2xvc2U6IGNsb3NlXG4gIH07XG59XG5mdW5jdGlvbiBldmVudENoYW5uZWwoc3Vic2NyaWJlLCBidWZmZXIpIHtcbiAgaWYgKGJ1ZmZlciA9PT0gdm9pZCAwKSB7XG4gICAgYnVmZmVyID0gbm9uZSgpO1xuICB9XG5cbiAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICB2YXIgdW5zdWJzY3JpYmU7XG4gIHZhciBjaGFuID0gY2hhbm5lbChidWZmZXIpO1xuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGlmIChjbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbG9zZWQgPSB0cnVlO1xuXG4gICAgaWYgKGZ1bmModW5zdWJzY3JpYmUpKSB7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGNoYW4uY2xvc2UoKTtcbiAgfTtcblxuICB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaXNFbmQoaW5wdXQpKSB7XG4gICAgICBjbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNoYW4ucHV0KGlucHV0KTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayh1bnN1YnNjcmliZSwgZnVuYywgJ2luIGV2ZW50Q2hhbm5lbDogc3Vic2NyaWJlIHNob3VsZCByZXR1cm4gYSBmdW5jdGlvbiB0byB1bnN1YnNjcmliZScpO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUgPSBvbmNlKHVuc3Vic2NyaWJlKTtcblxuICBpZiAoY2xvc2VkKSB7XG4gICAgdW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGFrZTogY2hhbi50YWtlLFxuICAgIGZsdXNoOiBjaGFuLmZsdXNoLFxuICAgIGNsb3NlOiBjbG9zZVxuICB9O1xufVxuZnVuY3Rpb24gbXVsdGljYXN0Q2hhbm5lbCgpIHtcbiAgdmFyIF9yZWY7XG5cbiAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICB2YXIgY3VycmVudFRha2VycyA9IFtdO1xuICB2YXIgbmV4dFRha2VycyA9IGN1cnJlbnRUYWtlcnM7XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKSB7XG4gICAgaWYgKGNsb3NlZCAmJiBuZXh0VGFrZXJzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgaW50ZXJuYWxFcnIoQ0xPU0VEX0NIQU5ORUxfV0lUSF9UQUtFUlMpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbnN1cmVDYW5NdXRhdGVOZXh0VGFrZXJzID0gZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dFRha2VycygpIHtcbiAgICBpZiAobmV4dFRha2VycyAhPT0gY3VycmVudFRha2Vycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHRUYWtlcnMgPSBjdXJyZW50VGFrZXJzLnNsaWNlKCk7XG4gIH07XG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgY2xvc2VkID0gdHJ1ZTtcbiAgICB2YXIgdGFrZXJzID0gY3VycmVudFRha2VycyA9IG5leHRUYWtlcnM7XG4gICAgbmV4dFRha2VycyA9IFtdO1xuICAgIHRha2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0YWtlcikge1xuICAgICAgdGFrZXIoRU5EKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW01VTFRJQ0FTVF0gPSB0cnVlLCBfcmVmLnB1dCA9IGZ1bmN0aW9uIHB1dChpbnB1dCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgICAgY2hlY2soaW5wdXQsIG5vdFVuZGVmLCBVTkRFRklORURfSU5QVVRfRVJST1IpO1xuICAgIH1cblxuICAgIGlmIChjbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNFbmQoaW5wdXQpKSB7XG4gICAgICBjbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0YWtlcnMgPSBjdXJyZW50VGFrZXJzID0gbmV4dFRha2VycztcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0YWtlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciB0YWtlciA9IHRha2Vyc1tpXTtcblxuICAgICAgaWYgKHRha2VyW01BVENIXShpbnB1dCkpIHtcbiAgICAgICAgdGFrZXIuY2FuY2VsKCk7XG4gICAgICAgIHRha2VyKGlucHV0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIF9yZWYudGFrZSA9IGZ1bmN0aW9uIHRha2UoY2IsIG1hdGNoZXIpIHtcbiAgICBpZiAobWF0Y2hlciA9PT0gdm9pZCAwKSB7XG4gICAgICBtYXRjaGVyID0gd2lsZGNhcmQ7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgY2IoRU5EKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYltNQVRDSF0gPSBtYXRjaGVyO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRUYWtlcnMoKTtcbiAgICBuZXh0VGFrZXJzLnB1c2goY2IpO1xuICAgIGNiLmNhbmNlbCA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dFRha2VycygpO1xuICAgICAgcmVtb3ZlKG5leHRUYWtlcnMsIGNiKTtcbiAgICB9KTtcbiAgfSwgX3JlZi5jbG9zZSA9IGNsb3NlLCBfcmVmO1xufVxuZnVuY3Rpb24gc3RkQ2hhbm5lbCgpIHtcbiAgdmFyIGNoYW4gPSBtdWx0aWNhc3RDaGFubmVsKCk7XG4gIHZhciBwdXQgPSBjaGFuLnB1dDtcblxuICBjaGFuLnB1dCA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIGlmIChpbnB1dFtTQUdBX0FDVElPTl0pIHtcbiAgICAgIHB1dChpbnB1dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXNhcChmdW5jdGlvbiAoKSB7XG4gICAgICBwdXQoaW5wdXQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBjaGFuO1xufVxuXG52YXIgUlVOTklORyA9IDA7XG52YXIgQ0FOQ0VMTEVEID0gMTtcbnZhciBBQk9SVEVEID0gMjtcbnZhciBET05FID0gMztcblxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgY2IpIHtcbiAgdmFyIGNhbmNlbFByb21pc2UgPSBwcm9taXNlW0NBTkNFTF07XG5cbiAgaWYgKGZ1bmMoY2FuY2VsUHJvbWlzZSkpIHtcbiAgICBjYi5jYW5jZWwgPSBjYW5jZWxQcm9taXNlO1xuICB9XG5cbiAgcHJvbWlzZS50aGVuKGNiLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBjYihlcnJvciwgdHJ1ZSk7XG4gIH0pO1xufVxuXG52YXIgY3VycmVudCA9IDA7XG52YXIgbmV4dFNhZ2FJZCA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiArK2N1cnJlbnQ7XG59KTtcblxudmFyIF9lZmZlY3RSdW5uZXJNYXA7XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yTWV0YUluZm8oaXRlcmF0b3IsIGZuKSB7XG4gIGlmIChpdGVyYXRvci5pc1NhZ2FJdGVyYXRvcikge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBpdGVyYXRvci5tZXRhLm5hbWVcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGdldE1ldGFJbmZvKGZuKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0l0ZXJhdG9yKF9yZWYpIHtcbiAgdmFyIGNvbnRleHQgPSBfcmVmLmNvbnRleHQsXG4gICAgICBmbiA9IF9yZWYuZm4sXG4gICAgICBhcmdzID0gX3JlZi5hcmdzO1xuXG4gIC8vIGNhdGNoIHN5bmNocm9ub3VzIGZhaWx1cmVzOyBzZWUgIzE1MiBhbmQgIzQ0MVxuICB0cnkge1xuICAgIHZhciByZXN1bHQgPSBmbi5hcHBseShjb250ZXh0LCBhcmdzKTsgLy8gaS5lLiBhIGdlbmVyYXRvciBmdW5jdGlvbiByZXR1cm5zIGFuIGl0ZXJhdG9yXG5cbiAgICBpZiAoaXRlcmF0b3IocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB2YXIgcmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gbmV4dChhcmcpIHtcbiAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlOyAvLyBPbmx5IHByb21pc2VzIHJldHVybmVkIGZyb20gZm9yayB3aWxsIGJlIGludGVycHJldGVkLiBTZWUgIzE1NzNcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiByZXN1bHQsXG4gICAgICAgICAgZG9uZTogIXByb21pc2UocmVzdWx0KVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogYXJnLFxuICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG1ha2VJdGVyYXRvcihuZXh0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gZG8gbm90IGJ1YmJsZSB1cCBzeW5jaHJvbm91cyBmYWlsdXJlcyBmb3IgZGV0YWNoZWQgZm9ya3NcbiAgICAvLyBpbnN0ZWFkIGNyZWF0ZSBhIGZhaWxlZCB0YXNrLiBTZWUgIzE1MiBhbmQgIzQ0MVxuICAgIHJldHVybiBtYWtlSXRlcmF0b3IoZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJ1blB1dEVmZmVjdChlbnYsIF9yZWYyLCBjYikge1xuICB2YXIgY2hhbm5lbCA9IF9yZWYyLmNoYW5uZWwsXG4gICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb24sXG4gICAgICByZXNvbHZlID0gX3JlZjIucmVzb2x2ZTtcblxuICAvKipcbiAgIFNjaGVkdWxlIHRoZSBwdXQgaW4gY2FzZSBhbm90aGVyIHNhZ2EgaXMgaG9sZGluZyBhIGxvY2suXG4gICBUaGUgcHV0IHdpbGwgYmUgZXhlY3V0ZWQgYXRvbWljYWxseS4gaWUgbmVzdGVkIHB1dHMgd2lsbCBleGVjdXRlIGFmdGVyXG4gICB0aGlzIHB1dCBoYXMgdGVybWluYXRlZC5cbiAgICoqL1xuICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IChjaGFubmVsID8gY2hhbm5lbC5wdXQgOiBlbnYuZGlzcGF0Y2gpKGFjdGlvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNiKGVycm9yLCB0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVzb2x2ZSAmJiBwcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgIHJlc29sdmVQcm9taXNlKHJlc3VsdCwgY2IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYihyZXN1bHQpO1xuICAgIH1cbiAgfSk7IC8vIFB1dCBlZmZlY3RzIGFyZSBub24gY2FuY2VsbGFibGVzXG59XG5cbmZ1bmN0aW9uIHJ1blRha2VFZmZlY3QoZW52LCBfcmVmMywgY2IpIHtcbiAgdmFyIF9yZWYzJGNoYW5uZWwgPSBfcmVmMy5jaGFubmVsLFxuICAgICAgY2hhbm5lbCA9IF9yZWYzJGNoYW5uZWwgPT09IHZvaWQgMCA/IGVudi5jaGFubmVsIDogX3JlZjMkY2hhbm5lbCxcbiAgICAgIHBhdHRlcm4gPSBfcmVmMy5wYXR0ZXJuLFxuICAgICAgbWF5YmUgPSBfcmVmMy5tYXliZTtcblxuICB2YXIgdGFrZUNiID0gZnVuY3Rpb24gdGFrZUNiKGlucHV0KSB7XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGNiKGlucHV0LCB0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNFbmQoaW5wdXQpICYmICFtYXliZSkge1xuICAgICAgY2IoVEVSTUlOQVRFKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYihpbnB1dCk7XG4gIH07XG5cbiAgdHJ5IHtcbiAgICBjaGFubmVsLnRha2UodGFrZUNiLCBub3RVbmRlZihwYXR0ZXJuKSA/IG1hdGNoZXIocGF0dGVybikgOiBudWxsKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY2IoZXJyLCB0cnVlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjYi5jYW5jZWwgPSB0YWtlQ2IuY2FuY2VsO1xufVxuXG5mdW5jdGlvbiBydW5DYWxsRWZmZWN0KGVudiwgX3JlZjQsIGNiLCBfcmVmNSkge1xuICB2YXIgY29udGV4dCA9IF9yZWY0LmNvbnRleHQsXG4gICAgICBmbiA9IF9yZWY0LmZuLFxuICAgICAgYXJncyA9IF9yZWY0LmFyZ3M7XG4gIHZhciB0YXNrID0gX3JlZjUudGFzaztcblxuICAvLyBjYXRjaCBzeW5jaHJvbm91cyBmYWlsdXJlczsgc2VlICMxNTJcbiAgdHJ5IHtcbiAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG5cbiAgICBpZiAocHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICByZXNvbHZlUHJvbWlzZShyZXN1bHQsIGNiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXRlcmF0b3IocmVzdWx0KSkge1xuICAgICAgLy8gcmVzb2x2ZSBpdGVyYXRvclxuICAgICAgcHJvYyhlbnYsIHJlc3VsdCwgdGFzay5jb250ZXh0LCBjdXJyZW50LCBnZXRNZXRhSW5mbyhmbiksXG4gICAgICAvKiBpc1Jvb3QgKi9cbiAgICAgIGZhbHNlLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2IocmVzdWx0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjYihlcnJvciwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuQ1BTRWZmZWN0KGVudiwgX3JlZjYsIGNiKSB7XG4gIHZhciBjb250ZXh0ID0gX3JlZjYuY29udGV4dCxcbiAgICAgIGZuID0gX3JlZjYuZm4sXG4gICAgICBhcmdzID0gX3JlZjYuYXJncztcblxuICAvLyBDUFMgKGllIG5vZGUgc3R5bGUgZnVuY3Rpb25zKSBjYW4gZGVmaW5lIHRoZWlyIG93biBjYW5jZWxsYXRpb24gbG9naWNcbiAgLy8gYnkgc2V0dGluZyBjYW5jZWwgZmllbGQgb24gdGhlIGNiXG4gIC8vIGNhdGNoIHN5bmNocm9ub3VzIGZhaWx1cmVzOyBzZWUgIzE1MlxuICB0cnkge1xuICAgIHZhciBjcHNDYiA9IGZ1bmN0aW9uIGNwc0NiKGVyciwgcmVzKSB7XG4gICAgICBpZiAodW5kZWYoZXJyKSkge1xuICAgICAgICBjYihyZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2IoZXJyLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm4uYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoY3BzQ2IpKTtcblxuICAgIGlmIChjcHNDYi5jYW5jZWwpIHtcbiAgICAgIGNiLmNhbmNlbCA9IGNwc0NiLmNhbmNlbDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY2IoZXJyb3IsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJ1bkZvcmtFZmZlY3QoZW52LCBfcmVmNywgY2IsIF9yZWY4KSB7XG4gIHZhciBjb250ZXh0ID0gX3JlZjcuY29udGV4dCxcbiAgICAgIGZuID0gX3JlZjcuZm4sXG4gICAgICBhcmdzID0gX3JlZjcuYXJncyxcbiAgICAgIGRldGFjaGVkID0gX3JlZjcuZGV0YWNoZWQ7XG4gIHZhciBwYXJlbnQgPSBfcmVmOC50YXNrO1xuICB2YXIgdGFza0l0ZXJhdG9yID0gY3JlYXRlVGFza0l0ZXJhdG9yKHtcbiAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgIGZuOiBmbixcbiAgICBhcmdzOiBhcmdzXG4gIH0pO1xuICB2YXIgbWV0YSA9IGdldEl0ZXJhdG9yTWV0YUluZm8odGFza0l0ZXJhdG9yLCBmbik7XG4gIGltbWVkaWF0ZWx5KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2hpbGQgPSBwcm9jKGVudiwgdGFza0l0ZXJhdG9yLCBwYXJlbnQuY29udGV4dCwgY3VycmVudCwgbWV0YSwgZGV0YWNoZWQsIHVuZGVmaW5lZCk7XG5cbiAgICBpZiAoZGV0YWNoZWQpIHtcbiAgICAgIGNiKGNoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNoaWxkLmlzUnVubmluZygpKSB7XG4gICAgICAgIHBhcmVudC5xdWV1ZS5hZGRUYXNrKGNoaWxkKTtcbiAgICAgICAgY2IoY2hpbGQpO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZC5pc0Fib3J0ZWQoKSkge1xuICAgICAgICBwYXJlbnQucXVldWUuYWJvcnQoY2hpbGQuZXJyb3IoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYihjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTsgLy8gRm9yayBlZmZlY3RzIGFyZSBub24gY2FuY2VsbGFibGVzXG59XG5cbmZ1bmN0aW9uIHJ1bkpvaW5FZmZlY3QoZW52LCB0YXNrT3JUYXNrcywgY2IsIF9yZWY5KSB7XG4gIHZhciB0YXNrID0gX3JlZjkudGFzaztcblxuICB2YXIgam9pblNpbmdsZVRhc2sgPSBmdW5jdGlvbiBqb2luU2luZ2xlVGFzayh0YXNrVG9Kb2luLCBjYikge1xuICAgIGlmICh0YXNrVG9Kb2luLmlzUnVubmluZygpKSB7XG4gICAgICB2YXIgam9pbmVyID0ge1xuICAgICAgICB0YXNrOiB0YXNrLFxuICAgICAgICBjYjogY2JcbiAgICAgIH07XG5cbiAgICAgIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRhc2tUb0pvaW4uaXNSdW5uaW5nKCkpIHJlbW92ZSh0YXNrVG9Kb2luLmpvaW5lcnMsIGpvaW5lcik7XG4gICAgICB9O1xuXG4gICAgICB0YXNrVG9Kb2luLmpvaW5lcnMucHVzaChqb2luZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGFza1RvSm9pbi5pc0Fib3J0ZWQoKSkge1xuICAgICAgICBjYih0YXNrVG9Kb2luLmVycm9yKCksIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2IodGFza1RvSm9pbi5yZXN1bHQoKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGlmIChhcnJheSQxKHRhc2tPclRhc2tzKSkge1xuICAgIGlmICh0YXNrT3JUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNiKFtdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRDYWxsYmFja3MgPSBjcmVhdGVBbGxTdHlsZUNoaWxkQ2FsbGJhY2tzKHRhc2tPclRhc2tzLCBjYik7XG4gICAgdGFza09yVGFza3MuZm9yRWFjaChmdW5jdGlvbiAodCwgaSkge1xuICAgICAgam9pblNpbmdsZVRhc2sodCwgY2hpbGRDYWxsYmFja3NbaV0pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGpvaW5TaW5nbGVUYXNrKHRhc2tPclRhc2tzLCBjYik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FuY2VsU2luZ2xlVGFzayh0YXNrVG9DYW5jZWwpIHtcbiAgaWYgKHRhc2tUb0NhbmNlbC5pc1J1bm5pbmcoKSkge1xuICAgIHRhc2tUb0NhbmNlbC5jYW5jZWwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBydW5DYW5jZWxFZmZlY3QoZW52LCB0YXNrT3JUYXNrcywgY2IsIF9yZWYxMCkge1xuICB2YXIgdGFzayA9IF9yZWYxMC50YXNrO1xuXG4gIGlmICh0YXNrT3JUYXNrcyA9PT0gU0VMRl9DQU5DRUxMQVRJT04pIHtcbiAgICBjYW5jZWxTaW5nbGVUYXNrKHRhc2spO1xuICB9IGVsc2UgaWYgKGFycmF5JDEodGFza09yVGFza3MpKSB7XG4gICAgdGFza09yVGFza3MuZm9yRWFjaChjYW5jZWxTaW5nbGVUYXNrKTtcbiAgfSBlbHNlIHtcbiAgICBjYW5jZWxTaW5nbGVUYXNrKHRhc2tPclRhc2tzKTtcbiAgfVxuXG4gIGNiKCk7IC8vIGNhbmNlbCBlZmZlY3RzIGFyZSBub24gY2FuY2VsbGFibGVzXG59XG5cbmZ1bmN0aW9uIHJ1bkFsbEVmZmVjdChlbnYsIGVmZmVjdHMsIGNiLCBfcmVmMTEpIHtcbiAgdmFyIGRpZ2VzdEVmZmVjdCA9IF9yZWYxMS5kaWdlc3RFZmZlY3Q7XG4gIHZhciBlZmZlY3RJZCA9IGN1cnJlbnQ7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZWZmZWN0cyk7XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgY2IoYXJyYXkkMShlZmZlY3RzKSA/IFtdIDoge30pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjaGlsZENhbGxiYWNrcyA9IGNyZWF0ZUFsbFN0eWxlQ2hpbGRDYWxsYmFja3MoZWZmZWN0cywgY2IpO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRpZ2VzdEVmZmVjdChlZmZlY3RzW2tleV0sIGVmZmVjdElkLCBjaGlsZENhbGxiYWNrc1trZXldLCBrZXkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcnVuUmFjZUVmZmVjdChlbnYsIGVmZmVjdHMsIGNiLCBfcmVmMTIpIHtcbiAgdmFyIGRpZ2VzdEVmZmVjdCA9IF9yZWYxMi5kaWdlc3RFZmZlY3Q7XG4gIHZhciBlZmZlY3RJZCA9IGN1cnJlbnQ7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZWZmZWN0cyk7XG4gIHZhciByZXNwb25zZSA9IGFycmF5JDEoZWZmZWN0cykgPyBjcmVhdGVFbXB0eUFycmF5KGtleXMubGVuZ3RoKSA6IHt9O1xuICB2YXIgY2hpbGRDYnMgPSB7fTtcbiAgdmFyIGNvbXBsZXRlZCA9IGZhbHNlO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjaENiQXRLZXkgPSBmdW5jdGlvbiBjaENiQXRLZXkocmVzLCBpc0Vycikge1xuICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0VyciB8fCBzaG91bGRDb21wbGV0ZShyZXMpKSB7XG4gICAgICAgIC8vIFJhY2UgQXV0byBjYW5jZWxsYXRpb25cbiAgICAgICAgY2IuY2FuY2VsKCk7XG4gICAgICAgIGNiKHJlcywgaXNFcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2IuY2FuY2VsKCk7XG4gICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHJlc3BvbnNlW2tleV0gPSByZXM7XG4gICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2hDYkF0S2V5LmNhbmNlbCA9IG5vb3A7XG4gICAgY2hpbGRDYnNba2V5XSA9IGNoQ2JBdEtleTtcbiAgfSk7XG5cbiAgY2IuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHByZXZlbnRzIHVubmVjZXNzYXJ5IGNhbmNlbGxhdGlvblxuICAgIGlmICghY29tcGxldGVkKSB7XG4gICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkQ2JzW2tleV0uY2FuY2VsKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlnZXN0RWZmZWN0KGVmZmVjdHNba2V5XSwgZWZmZWN0SWQsIGNoaWxkQ2JzW2tleV0sIGtleSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBydW5TZWxlY3RFZmZlY3QoZW52LCBfcmVmMTMsIGNiKSB7XG4gIHZhciBzZWxlY3RvciA9IF9yZWYxMy5zZWxlY3RvcixcbiAgICAgIGFyZ3MgPSBfcmVmMTMuYXJncztcblxuICB0cnkge1xuICAgIHZhciBzdGF0ZSA9IHNlbGVjdG9yLmFwcGx5KHZvaWQgMCwgW2Vudi5nZXRTdGF0ZSgpXS5jb25jYXQoYXJncykpO1xuICAgIGNiKHN0YXRlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjYihlcnJvciwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuQ2hhbm5lbEVmZmVjdChlbnYsIF9yZWYxNCwgY2IpIHtcbiAgdmFyIHBhdHRlcm4gPSBfcmVmMTQucGF0dGVybixcbiAgICAgIGJ1ZmZlciA9IF9yZWYxNC5idWZmZXI7XG4gIHZhciBjaGFuID0gY2hhbm5lbChidWZmZXIpO1xuICB2YXIgbWF0Y2ggPSBtYXRjaGVyKHBhdHRlcm4pO1xuXG4gIHZhciB0YWtlciA9IGZ1bmN0aW9uIHRha2VyKGFjdGlvbikge1xuICAgIGlmICghaXNFbmQoYWN0aW9uKSkge1xuICAgICAgZW52LmNoYW5uZWwudGFrZSh0YWtlciwgbWF0Y2gpO1xuICAgIH1cblxuICAgIGNoYW4ucHV0KGFjdGlvbik7XG4gIH07XG5cbiAgdmFyIGNsb3NlID0gY2hhbi5jbG9zZTtcblxuICBjaGFuLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHRha2VyLmNhbmNlbCgpO1xuICAgIGNsb3NlKCk7XG4gIH07XG5cbiAgZW52LmNoYW5uZWwudGFrZSh0YWtlciwgbWF0Y2gpO1xuICBjYihjaGFuKTtcbn1cblxuZnVuY3Rpb24gcnVuQ2FuY2VsbGVkRWZmZWN0KGVudiwgZGF0YSwgY2IsIF9yZWYxNSkge1xuICB2YXIgdGFzayA9IF9yZWYxNS50YXNrO1xuICBjYih0YXNrLmlzQ2FuY2VsbGVkKCkpO1xufVxuXG5mdW5jdGlvbiBydW5GbHVzaEVmZmVjdChlbnYsIGNoYW5uZWwsIGNiKSB7XG4gIGNoYW5uZWwuZmx1c2goY2IpO1xufVxuXG5mdW5jdGlvbiBydW5HZXRDb250ZXh0RWZmZWN0KGVudiwgcHJvcCwgY2IsIF9yZWYxNikge1xuICB2YXIgdGFzayA9IF9yZWYxNi50YXNrO1xuICBjYih0YXNrLmNvbnRleHRbcHJvcF0pO1xufVxuXG5mdW5jdGlvbiBydW5TZXRDb250ZXh0RWZmZWN0KGVudiwgcHJvcHMsIGNiLCBfcmVmMTcpIHtcbiAgdmFyIHRhc2sgPSBfcmVmMTcudGFzaztcbiAgYXNzaWduV2l0aFN5bWJvbHModGFzay5jb250ZXh0LCBwcm9wcyk7XG4gIGNiKCk7XG59XG5cbnZhciBlZmZlY3RSdW5uZXJNYXAgPSAoX2VmZmVjdFJ1bm5lck1hcCA9IHt9LCBfZWZmZWN0UnVubmVyTWFwW1RBS0VdID0gcnVuVGFrZUVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtQVVRdID0gcnVuUHV0RWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW0FMTF0gPSBydW5BbGxFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbUkFDRV0gPSBydW5SYWNlRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW0NBTExdID0gcnVuQ2FsbEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtDUFNdID0gcnVuQ1BTRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW0ZPUktdID0gcnVuRm9ya0VmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtKT0lOXSA9IHJ1bkpvaW5FZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbQ0FOQ0VMJDFdID0gcnVuQ2FuY2VsRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW1NFTEVDVF0gPSBydW5TZWxlY3RFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbQUNUSU9OX0NIQU5ORUxdID0gcnVuQ2hhbm5lbEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtDQU5DRUxMRUQkMV0gPSBydW5DYW5jZWxsZWRFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbRkxVU0hdID0gcnVuRmx1c2hFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbR0VUX0NPTlRFWFRdID0gcnVuR2V0Q29udGV4dEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtTRVRfQ09OVEVYVF0gPSBydW5TZXRDb250ZXh0RWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwKTtcblxuLyoqXG4gVXNlZCB0byB0cmFjayBhIHBhcmVudCB0YXNrIGFuZCBpdHMgZm9ya3NcbiBJbiB0aGUgZm9yayBtb2RlbCwgZm9ya2VkIHRhc2tzIGFyZSBhdHRhY2hlZCBieSBkZWZhdWx0IHRvIHRoZWlyIHBhcmVudFxuIFdlIG1vZGVsIHRoaXMgdXNpbmcgdGhlIGNvbmNlcHQgb2YgUGFyZW50IHRhc2sgJiYgbWFpbiBUYXNrXG4gbWFpbiB0YXNrIGlzIHRoZSBtYWluIGZsb3cgb2YgdGhlIGN1cnJlbnQgR2VuZXJhdG9yLCB0aGUgcGFyZW50IHRhc2tzIGlzIHRoZVxuIGFnZ3JlZ2F0aW9uIG9mIHRoZSBtYWluIHRhc2tzICsgYWxsIGl0cyBmb3JrZWQgdGFza3MuXG4gVGh1cyB0aGUgd2hvbGUgbW9kZWwgcmVwcmVzZW50cyBhbiBleGVjdXRpb24gdHJlZSB3aXRoIG11bHRpcGxlIGJyYW5jaGVzICh2cyB0aGVcbiBsaW5lYXIgZXhlY3V0aW9uIHRyZWUgaW4gc2VxdWVudGlhbCAobm9uIHBhcmFsbGVsKSBwcm9ncmFtbWluZylcblxuIEEgcGFyZW50IHRhc2tzIGhhcyB0aGUgZm9sbG93aW5nIHNlbWFudGljc1xuIC0gSXQgY29tcGxldGVzIGlmIGFsbCBpdHMgZm9ya3MgZWl0aGVyIGNvbXBsZXRlIG9yIGFsbCBjYW5jZWxsZWRcbiAtIElmIGl0J3MgY2FuY2VsbGVkLCBhbGwgZm9ya3MgYXJlIGNhbmNlbGxlZCBhcyB3ZWxsXG4gLSBJdCBhYm9ydHMgaWYgYW55IHVuY2F1Z2h0IGVycm9yIGJ1YmJsZXMgdXAgZnJvbSBmb3Jrc1xuIC0gSWYgaXQgY29tcGxldGVzLCB0aGUgcmV0dXJuIHZhbHVlIGlzIHRoZSBvbmUgcmV0dXJuZWQgYnkgdGhlIG1haW4gdGFza1xuICoqL1xuXG5mdW5jdGlvbiBmb3JrUXVldWUobWFpblRhc2ssIG9uQWJvcnQsIGNvbnQpIHtcbiAgdmFyIHRhc2tzID0gW107XG4gIHZhciByZXN1bHQ7XG4gIHZhciBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgYWRkVGFzayhtYWluVGFzayk7XG5cbiAgdmFyIGdldFRhc2tzID0gZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRhc2tzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFib3J0KGVycikge1xuICAgIG9uQWJvcnQoKTtcbiAgICBjYW5jZWxBbGwoKTtcbiAgICBjb250KGVyciwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuXG4gICAgdGFzay5jb250ID0gZnVuY3Rpb24gKHJlcywgaXNFcnIpIHtcbiAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZW1vdmUodGFza3MsIHRhc2spO1xuICAgICAgdGFzay5jb250ID0gbm9vcDtcblxuICAgICAgaWYgKGlzRXJyKSB7XG4gICAgICAgIGFib3J0KHJlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGFzayA9PT0gbWFpblRhc2spIHtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgY29udChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbEFsbCgpIHtcbiAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICB0YXNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICB0LmNvbnQgPSBub29wO1xuICAgICAgdC5jYW5jZWwoKTtcbiAgICB9KTtcbiAgICB0YXNrcyA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRUYXNrOiBhZGRUYXNrLFxuICAgIGNhbmNlbEFsbDogY2FuY2VsQWxsLFxuICAgIGFib3J0OiBhYm9ydCxcbiAgICBnZXRUYXNrczogZ2V0VGFza3NcbiAgfTtcbn1cblxuLy8gdGhlcmUgY2FuIGJlIG9ubHkgYSBzaW5nbGUgc2FnYSBlcnJvciBjcmVhdGVkIGF0IGFueSBnaXZlbiBtb21lbnRcblxuZnVuY3Rpb24gZm9ybWF0TG9jYXRpb24oZmlsZU5hbWUsIGxpbmVOdW1iZXIpIHtcbiAgcmV0dXJuIGZpbGVOYW1lICsgXCI/XCIgKyBsaW5lTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBlZmZlY3RMb2NhdGlvbkFzU3RyaW5nKGVmZmVjdCkge1xuICB2YXIgbG9jYXRpb24gPSBnZXRMb2NhdGlvbihlZmZlY3QpO1xuXG4gIGlmIChsb2NhdGlvbikge1xuICAgIHZhciBjb2RlID0gbG9jYXRpb24uY29kZSxcbiAgICAgICAgZmlsZU5hbWUgPSBsb2NhdGlvbi5maWxlTmFtZSxcbiAgICAgICAgbGluZU51bWJlciA9IGxvY2F0aW9uLmxpbmVOdW1iZXI7XG4gICAgdmFyIHNvdXJjZSA9IGNvZGUgKyBcIiAgXCIgKyBmb3JtYXRMb2NhdGlvbihmaWxlTmFtZSwgbGluZU51bWJlcik7XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gc2FnYUxvY2F0aW9uQXNTdHJpbmcoc2FnYU1ldGEpIHtcbiAgdmFyIG5hbWUgPSBzYWdhTWV0YS5uYW1lLFxuICAgICAgbG9jYXRpb24gPSBzYWdhTWV0YS5sb2NhdGlvbjtcblxuICBpZiAobG9jYXRpb24pIHtcbiAgICByZXR1cm4gbmFtZSArIFwiICBcIiArIGZvcm1hdExvY2F0aW9uKGxvY2F0aW9uLmZpbGVOYW1lLCBsb2NhdGlvbi5saW5lTnVtYmVyKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxsZWRUYXNrc0FzU3RyaW5nKHNhZ2FTdGFjaykge1xuICB2YXIgY2FuY2VsbGVkVGFza3MgPSBmbGF0TWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGkuY2FuY2VsbGVkVGFza3M7XG4gIH0sIHNhZ2FTdGFjayk7XG5cbiAgaWYgKCFjYW5jZWxsZWRUYXNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gWydUYXNrcyBjYW5jZWxsZWQgZHVlIHRvIGVycm9yOiddLmNvbmNhdChjYW5jZWxsZWRUYXNrcykuam9pbignXFxuJyk7XG59XG5cbnZhciBjcmFzaGVkRWZmZWN0ID0gbnVsbDtcbnZhciBzYWdhU3RhY2sgPSBbXTtcbnZhciBhZGRTYWdhRnJhbWUgPSBmdW5jdGlvbiBhZGRTYWdhRnJhbWUoZnJhbWUpIHtcbiAgZnJhbWUuY3Jhc2hlZEVmZmVjdCA9IGNyYXNoZWRFZmZlY3Q7XG4gIHNhZ2FTdGFjay5wdXNoKGZyYW1lKTtcbn07XG52YXIgY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgY3Jhc2hlZEVmZmVjdCA9IG51bGw7XG4gIHNhZ2FTdGFjay5sZW5ndGggPSAwO1xufTsgLy8gdGhpcyBzZXRzIGNyYXNoZWQgZWZmZWN0IGZvciB0aGUgc29vbi10by1iZS1yZXBvcnRlZCBzYWdhIGZyYW1lXG4vLyB0aGlzIHNsaWdodGx5IHN0cmVhdGNoZXMgdGhlIHNpbmdsZXRvbiBuYXR1cmUgb2YgdGhpcyBtb2R1bGUgaW50byB3cm9uZyBkaXJlY3Rpb25cbi8vIGFzIGl0J3MgZXZlbiBsZXNzIG9idmlvdXMgd2hhdCdzIHRoZSBkYXRhIGZsb3cgaGVyZSwgYnV0IGl0IGlzIHdoYXQgaXQgaXMgZm9yIG5vd1xuXG52YXIgc2V0Q3Jhc2hlZEVmZmVjdCA9IGZ1bmN0aW9uIHNldENyYXNoZWRFZmZlY3QoZWZmZWN0KSB7XG4gIGNyYXNoZWRFZmZlY3QgPSBlZmZlY3Q7XG59O1xuLyoqXG4gIEByZXR1cm5zIHtzdHJpbmd9XG5cbiAgQGV4YW1wbGVcbiAgVGhlIGFib3ZlIGVycm9yIG9jY3VycmVkIGluIHRhc2sgZXJyb3JJblB1dFNhZ2Ege3BhdGhUb0ZpbGV9XG4gIHdoZW4gZXhlY3V0aW5nIGVmZmVjdCBwdXQoe3R5cGU6ICdSRURVQ0VSX0FDVElPTl9FUlJPUl9JTl9QVVQnfSkge3BhdGhUb0ZpbGV9XG4gICAgICBjcmVhdGVkIGJ5IGZldGNoU2FnYSB7cGF0aFRvRmlsZX1cbiAgICAgIGNyZWF0ZWQgYnkgcm9vdFNhZ2Ege3BhdGhUb0ZpbGV9XG4qL1xuXG52YXIgdG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgdmFyIGZpcnN0U2FnYSA9IHNhZ2FTdGFja1swXSxcbiAgICAgIG90aGVyU2FnYXMgPSBzYWdhU3RhY2suc2xpY2UoMSk7XG4gIHZhciBjcmFzaGVkRWZmZWN0TG9jYXRpb24gPSBmaXJzdFNhZ2EuY3Jhc2hlZEVmZmVjdCA/IGVmZmVjdExvY2F0aW9uQXNTdHJpbmcoZmlyc3RTYWdhLmNyYXNoZWRFZmZlY3QpIDogbnVsbDtcbiAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVGhlIGFib3ZlIGVycm9yIG9jY3VycmVkIGluIHRhc2sgXCIgKyBzYWdhTG9jYXRpb25Bc1N0cmluZyhmaXJzdFNhZ2EubWV0YSkgKyAoY3Jhc2hlZEVmZmVjdExvY2F0aW9uID8gXCIgXFxuIHdoZW4gZXhlY3V0aW5nIGVmZmVjdCBcIiArIGNyYXNoZWRFZmZlY3RMb2NhdGlvbiA6ICcnKTtcbiAgcmV0dXJuIFtlcnJvck1lc3NhZ2VdLmNvbmNhdChvdGhlclNhZ2FzLm1hcChmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBcIiAgICBjcmVhdGVkIGJ5IFwiICsgc2FnYUxvY2F0aW9uQXNTdHJpbmcocy5tZXRhKTtcbiAgfSksIFtjYW5jZWxsZWRUYXNrc0FzU3RyaW5nKHNhZ2FTdGFjayldKS5qb2luKCdcXG4nKTtcbn07XG5cbmZ1bmN0aW9uIG5ld1Rhc2soZW52LCBtYWluVGFzaywgcGFyZW50Q29udGV4dCwgcGFyZW50RWZmZWN0SWQsIG1ldGEsIGlzUm9vdCwgY29udCkge1xuICB2YXIgX3Rhc2s7XG5cbiAgaWYgKGNvbnQgPT09IHZvaWQgMCkge1xuICAgIGNvbnQgPSBub29wO1xuICB9XG5cbiAgdmFyIHN0YXR1cyA9IFJVTk5JTkc7XG4gIHZhciB0YXNrUmVzdWx0O1xuICB2YXIgdGFza0Vycm9yO1xuICB2YXIgZGVmZXJyZWRFbmQgPSBudWxsO1xuICB2YXIgY2FuY2VsbGVkRHVlVG9FcnJvclRhc2tzID0gW107XG4gIHZhciBjb250ZXh0ID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRDb250ZXh0KTtcbiAgdmFyIHF1ZXVlID0gZm9ya1F1ZXVlKG1haW5UYXNrLCBmdW5jdGlvbiBvbkFib3J0KCkge1xuICAgIGNhbmNlbGxlZER1ZVRvRXJyb3JUYXNrcy5wdXNoLmFwcGx5KGNhbmNlbGxlZER1ZVRvRXJyb3JUYXNrcywgcXVldWUuZ2V0VGFza3MoKS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0Lm1ldGEubmFtZTtcbiAgICB9KSk7XG4gIH0sIGVuZCk7XG4gIC8qKlxuICAgVGhpcyBtYXkgYmUgY2FsbGVkIGJ5IGEgcGFyZW50IGdlbmVyYXRvciB0byB0cmlnZ2VyL3Byb3BhZ2F0ZSBjYW5jZWxsYXRpb25cbiAgIGNhbmNlbCBhbGwgcGVuZGluZyB0YXNrcyAoaW5jbHVkaW5nIHRoZSBtYWluIHRhc2spLCB0aGVuIGVuZCB0aGUgY3VycmVudCB0YXNrLlxuICAgIENhbmNlbGxhdGlvbiBwcm9wYWdhdGVzIGRvd24gdG8gdGhlIHdob2xlIGV4ZWN1dGlvbiB0cmVlIGhlbGQgYnkgdGhpcyBQYXJlbnQgdGFza1xuICAgSXQncyBhbHNvIHByb3BhZ2F0ZWQgdG8gYWxsIGpvaW5lcnMgb2YgdGhpcyB0YXNrIGFuZCB0aGVpciBleGVjdXRpb24gdHJlZS9qb2luZXJzXG4gICAgQ2FuY2VsbGF0aW9uIGlzIG5vb3AgZm9yIHRlcm1pbmF0ZWQvQ2FuY2VsbGVkIHRhc2tzIHRhc2tzXG4gICAqKi9cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHN0YXR1cyA9PT0gUlVOTklORykge1xuICAgICAgLy8gU2V0dGluZyBzdGF0dXMgdG8gQ0FOQ0VMTEVEIGRvZXMgbm90IG5lY2Vzc2FyaWx5IG1lYW4gdGhhdCB0aGUgdGFzay9pdGVyYXRvcnMgYXJlIHN0b3BwZWRcbiAgICAgIC8vIGVmZmVjdHMgaW4gdGhlIGl0ZXJhdG9yJ3MgZmluYWxseSBibG9jayB3aWxsIHN0aWxsIGJlIGV4ZWN1dGVkXG4gICAgICBzdGF0dXMgPSBDQU5DRUxMRUQ7XG4gICAgICBxdWV1ZS5jYW5jZWxBbGwoKTsgLy8gRW5kaW5nIHdpdGggYSBUQVNLX0NBTkNFTCB3aWxsIHByb3BhZ2F0ZSB0aGUgQ2FuY2VsbGF0aW9uIHRvIGFsbCBqb2luZXJzXG5cbiAgICAgIGVuZChUQVNLX0NBTkNFTCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZChyZXN1bHQsIGlzRXJyKSB7XG4gICAgaWYgKCFpc0Vycikge1xuICAgICAgLy8gVGhlIHN0YXR1cyBoZXJlIG1heSBiZSBSVU5OSU5HIG9yIENBTkNFTExFRFxuICAgICAgLy8gSWYgdGhlIHN0YXR1cyBpcyBDQU5DRUxMRUQsIHRoZW4gd2UgZG8gbm90IG5lZWQgdG8gY2hhbmdlIGl0IGhlcmVcbiAgICAgIGlmIChyZXN1bHQgPT09IFRBU0tfQ0FOQ0VMKSB7XG4gICAgICAgIHN0YXR1cyA9IENBTkNFTExFRDtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzICE9PSBDQU5DRUxMRUQpIHtcbiAgICAgICAgc3RhdHVzID0gRE9ORTtcbiAgICAgIH1cblxuICAgICAgdGFza1Jlc3VsdCA9IHJlc3VsdDtcbiAgICAgIGRlZmVycmVkRW5kICYmIGRlZmVycmVkRW5kLnJlc29sdmUocmVzdWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdHVzID0gQUJPUlRFRDtcbiAgICAgIGFkZFNhZ2FGcmFtZSh7XG4gICAgICAgIG1ldGE6IG1ldGEsXG4gICAgICAgIGNhbmNlbGxlZFRhc2tzOiBjYW5jZWxsZWREdWVUb0Vycm9yVGFza3NcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGFzay5pc1Jvb3QpIHtcbiAgICAgICAgdmFyIHNhZ2FTdGFjayA9IHRvU3RyaW5nKCk7IC8vIHdlJ3ZlIGR1bXBlZCB0aGUgc2FnYSBzdGFjayB0byBzdHJpbmcgYW5kIGFyZSBwYXNzaW5nIGl0IHRvIHVzZXIncyBjb2RlXG4gICAgICAgIC8vIHdlIGtub3cgdGhhdCBpdCB3b24ndCBiZSBuZWVkZWQgYW55bW9yZSBhbmQgd2UgbmVlZCB0byBjbGVhciBpdFxuXG4gICAgICAgIGNsZWFyKCk7XG4gICAgICAgIGVudi5vbkVycm9yKHJlc3VsdCwge1xuICAgICAgICAgIHNhZ2FTdGFjazogc2FnYVN0YWNrXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0YXNrRXJyb3IgPSByZXN1bHQ7XG4gICAgICBkZWZlcnJlZEVuZCAmJiBkZWZlcnJlZEVuZC5yZWplY3QocmVzdWx0KTtcbiAgICB9XG5cbiAgICB0YXNrLmNvbnQocmVzdWx0LCBpc0Vycik7XG4gICAgdGFzay5qb2luZXJzLmZvckVhY2goZnVuY3Rpb24gKGpvaW5lcikge1xuICAgICAgam9pbmVyLmNiKHJlc3VsdCwgaXNFcnIpO1xuICAgIH0pO1xuICAgIHRhc2suam9pbmVycyA9IG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRDb250ZXh0KHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrKHByb3BzLCBvYmplY3QsIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nKCd0YXNrJywgcHJvcHMpKTtcbiAgICB9XG5cbiAgICBhc3NpZ25XaXRoU3ltYm9scyhjb250ZXh0LCBwcm9wcyk7XG4gIH1cblxuICBmdW5jdGlvbiB0b1Byb21pc2UoKSB7XG4gICAgaWYgKGRlZmVycmVkRW5kKSB7XG4gICAgICByZXR1cm4gZGVmZXJyZWRFbmQucHJvbWlzZTtcbiAgICB9XG5cbiAgICBkZWZlcnJlZEVuZCA9IGRlZmVycmVkKCk7XG5cbiAgICBpZiAoc3RhdHVzID09PSBBQk9SVEVEKSB7XG4gICAgICBkZWZlcnJlZEVuZC5yZWplY3QodGFza0Vycm9yKTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyAhPT0gUlVOTklORykge1xuICAgICAgZGVmZXJyZWRFbmQucmVzb2x2ZSh0YXNrUmVzdWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmZXJyZWRFbmQucHJvbWlzZTtcbiAgfVxuXG4gIHZhciB0YXNrID0gKF90YXNrID0ge30sIF90YXNrW1RBU0tdID0gdHJ1ZSwgX3Rhc2suaWQgPSBwYXJlbnRFZmZlY3RJZCwgX3Rhc2subWV0YSA9IG1ldGEsIF90YXNrLmlzUm9vdCA9IGlzUm9vdCwgX3Rhc2suY29udGV4dCA9IGNvbnRleHQsIF90YXNrLmpvaW5lcnMgPSBbXSwgX3Rhc2sucXVldWUgPSBxdWV1ZSwgX3Rhc2suY2FuY2VsID0gY2FuY2VsLCBfdGFzay5jb250ID0gY29udCwgX3Rhc2suZW5kID0gZW5kLCBfdGFzay5zZXRDb250ZXh0ID0gc2V0Q29udGV4dCwgX3Rhc2sudG9Qcm9taXNlID0gdG9Qcm9taXNlLCBfdGFzay5pc1J1bm5pbmcgPSBmdW5jdGlvbiBpc1J1bm5pbmcoKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA9PT0gUlVOTklORztcbiAgfSwgX3Rhc2suaXNDYW5jZWxsZWQgPSBmdW5jdGlvbiBpc0NhbmNlbGxlZCgpIHtcbiAgICByZXR1cm4gc3RhdHVzID09PSBDQU5DRUxMRUQgfHwgc3RhdHVzID09PSBSVU5OSU5HICYmIG1haW5UYXNrLnN0YXR1cyA9PT0gQ0FOQ0VMTEVEO1xuICB9LCBfdGFzay5pc0Fib3J0ZWQgPSBmdW5jdGlvbiBpc0Fib3J0ZWQoKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA9PT0gQUJPUlRFRDtcbiAgfSwgX3Rhc2sucmVzdWx0ID0gZnVuY3Rpb24gcmVzdWx0KCkge1xuICAgIHJldHVybiB0YXNrUmVzdWx0O1xuICB9LCBfdGFzay5lcnJvciA9IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgIHJldHVybiB0YXNrRXJyb3I7XG4gIH0sIF90YXNrKTtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIHByb2MoZW52LCBpdGVyYXRvciQxLCBwYXJlbnRDb250ZXh0LCBwYXJlbnRFZmZlY3RJZCwgbWV0YSwgaXNSb290LCBjb250KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGl0ZXJhdG9yJDFbYXN5bmNJdGVyYXRvclN5bWJvbF0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZWR1eC1zYWdhIGRvZXNuJ3Qgc3VwcG9ydCBhc3luYyBnZW5lcmF0b3JzLCBwbGVhc2UgdXNlIG9ubHkgcmVndWxhciBvbmVzXCIpO1xuICB9XG5cbiAgdmFyIGZpbmFsUnVuRWZmZWN0ID0gZW52LmZpbmFsaXplUnVuRWZmZWN0KHJ1bkVmZmVjdCk7XG4gIC8qKlxuICAgIFRyYWNrcyB0aGUgY3VycmVudCBlZmZlY3QgY2FuY2VsbGF0aW9uXG4gICAgRWFjaCB0aW1lIHRoZSBnZW5lcmF0b3IgcHJvZ3Jlc3Nlcy4gY2FsbGluZyBydW5FZmZlY3Qgd2lsbCBzZXQgYSBuZXcgdmFsdWVcbiAgICBvbiBpdC4gSXQgYWxsb3dzIHByb3BhZ2F0aW5nIGNhbmNlbGxhdGlvbiB0byBjaGlsZCBlZmZlY3RzXG4gICoqL1xuXG4gIG5leHQuY2FuY2VsID0gbm9vcDtcbiAgLyoqIENyZWF0ZXMgYSBtYWluIHRhc2sgdG8gdHJhY2sgdGhlIG1haW4gZmxvdyAqL1xuXG4gIHZhciBtYWluVGFzayA9IHtcbiAgICBtZXRhOiBtZXRhLFxuICAgIGNhbmNlbDogY2FuY2VsTWFpbixcbiAgICBzdGF0dXM6IFJVTk5JTkdcbiAgfTtcbiAgLyoqXG4gICBDcmVhdGVzIGEgbmV3IHRhc2sgZGVzY3JpcHRvciBmb3IgdGhpcyBnZW5lcmF0b3IuXG4gICBBIHRhc2sgaXMgdGhlIGFnZ3JlZ2F0aW9uIG9mIGl0J3MgbWFpblRhc2sgYW5kIGFsbCBpdCdzIGZvcmtlZCB0YXNrcy5cbiAgICoqL1xuXG4gIHZhciB0YXNrID0gbmV3VGFzayhlbnYsIG1haW5UYXNrLCBwYXJlbnRDb250ZXh0LCBwYXJlbnRFZmZlY3RJZCwgbWV0YSwgaXNSb290LCBjb250KTtcbiAgdmFyIGV4ZWN1dGluZ0NvbnRleHQgPSB7XG4gICAgdGFzazogdGFzayxcbiAgICBkaWdlc3RFZmZlY3Q6IGRpZ2VzdEVmZmVjdFxuICB9O1xuICAvKipcbiAgICBjYW5jZWxsYXRpb24gb2YgdGhlIG1haW4gdGFzay4gV2UnbGwgc2ltcGx5IHJlc3VtZSB0aGUgR2VuZXJhdG9yIHdpdGggYSBUQVNLX0NBTkNFTFxuICAqKi9cblxuICBmdW5jdGlvbiBjYW5jZWxNYWluKCkge1xuICAgIGlmIChtYWluVGFzay5zdGF0dXMgPT09IFJVTk5JTkcpIHtcbiAgICAgIG1haW5UYXNrLnN0YXR1cyA9IENBTkNFTExFRDtcbiAgICAgIG5leHQoVEFTS19DQU5DRUwpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICBhdHRhY2hlcyBjYW5jZWxsYXRpb24gbG9naWMgdG8gdGhpcyB0YXNrJ3MgY29udGludWF0aW9uXG4gICAgdGhpcyB3aWxsIHBlcm1pdCBjYW5jZWxsYXRpb24gdG8gcHJvcGFnYXRlIGRvd24gdGhlIGNhbGwgY2hhaW5cbiAgKiovXG5cblxuICBpZiAoY29udCkge1xuICAgIGNvbnQuY2FuY2VsID0gdGFzay5jYW5jZWw7XG4gIH0gLy8ga2lja3MgdXAgdGhlIGdlbmVyYXRvclxuXG5cbiAgbmV4dCgpOyAvLyB0aGVuIHJldHVybiB0aGUgdGFzayBkZXNjcmlwdG9yIHRvIHRoZSBjYWxsZXJcblxuICByZXR1cm4gdGFzaztcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGdlbmVyYXRvciBkcml2ZXJcbiAgICogSXQncyBhIHJlY3Vyc2l2ZSBhc3luYy9jb250aW51YXRpb24gZnVuY3Rpb24gd2hpY2ggY2FsbHMgaXRzZWxmXG4gICAqIHVudGlsIHRoZSBnZW5lcmF0b3IgdGVybWluYXRlcyBvciB0aHJvd3NcbiAgICogQHBhcmFtIHtpbnRlcm5hbCBjb21tYW5kcyhUQVNLX0NBTkNFTCB8IFRFUk1JTkFURSkgfCBhbnl9IGFyZyAtIHZhbHVlLCBnZW5lcmF0b3Igd2lsbCBiZSByZXN1bWVkIHdpdGguXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNFcnIgLSB0aGUgZmxhZyBzaG93cyBpZiBlZmZlY3QgZmluaXNoZWQgd2l0aCBhbiBlcnJvclxuICAgKlxuICAgKiByZWNlaXZlcyBlaXRoZXIgKGNvbW1hbmQgfCBlZmZlY3QgcmVzdWx0LCBmYWxzZSkgb3IgKGFueSB0aHJvd24gdGhpbmcsIHRydWUpXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG5leHQoYXJnLCBpc0Vycikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICBpZiAoaXNFcnIpIHtcbiAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IkMS50aHJvdyhhcmcpOyAvLyB1c2VyIGhhbmRsZWQgdGhlIGVycm9yLCB3ZSBjYW4gY2xlYXIgYm9va2tlcHQgdmFsdWVzXG5cbiAgICAgICAgY2xlYXIoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkQ2FuY2VsKGFyZykpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAgZ2V0dGluZyBUQVNLX0NBTkNFTCBhdXRvbWF0aWNhbGx5IGNhbmNlbHMgdGhlIG1haW4gdGFza1xuICAgICAgICAgIFdlIGNhbiBnZXQgdGhpcyB2YWx1ZSBoZXJlXG4gICAgICAgICAgIC0gQnkgY2FuY2VsbGluZyB0aGUgcGFyZW50IHRhc2sgbWFudWFsbHlcbiAgICAgICAgICAtIEJ5IGpvaW5pbmcgYSBDYW5jZWxsZWQgdGFza1xuICAgICAgICAqKi9cbiAgICAgICAgbWFpblRhc2suc3RhdHVzID0gQ0FOQ0VMTEVEO1xuICAgICAgICAvKipcbiAgICAgICAgICBDYW5jZWxzIHRoZSBjdXJyZW50IGVmZmVjdDsgdGhpcyB3aWxsIHByb3BhZ2F0ZSB0aGUgY2FuY2VsbGF0aW9uIGRvd24gdG8gYW55IGNhbGxlZCB0YXNrc1xuICAgICAgICAqKi9cblxuICAgICAgICBuZXh0LmNhbmNlbCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICBJZiB0aGlzIEdlbmVyYXRvciBoYXMgYSBgcmV0dXJuYCBtZXRob2QgdGhlbiBpbnZva2VzIGl0XG4gICAgICAgICAgVGhpcyB3aWxsIGp1bXAgdG8gdGhlIGZpbmFsbHkgYmxvY2tcbiAgICAgICAgKiovXG5cbiAgICAgICAgcmVzdWx0ID0gZnVuYyhpdGVyYXRvciQxLnJldHVybikgPyBpdGVyYXRvciQxLnJldHVybihUQVNLX0NBTkNFTCkgOiB7XG4gICAgICAgICAgZG9uZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogVEFTS19DQU5DRUxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkVGVybWluYXRlKGFyZykpIHtcbiAgICAgICAgLy8gV2UgZ2V0IFRFUk1JTkFURSBmbGFnLCBpLmUuIGJ5IHRha2luZyBmcm9tIGEgY2hhbm5lbCB0aGF0IGVuZGVkIHVzaW5nIGB0YWtlYCAoYW5kIG5vdCBgdGFrZW1gIHVzZWQgdG8gdHJhcCBFbmQgb2YgY2hhbm5lbHMpXG4gICAgICAgIHJlc3VsdCA9IGZ1bmMoaXRlcmF0b3IkMS5yZXR1cm4pID8gaXRlcmF0b3IkMS5yZXR1cm4oKSA6IHtcbiAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBpdGVyYXRvciQxLm5leHQoYXJnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXN1bHQuZG9uZSkge1xuICAgICAgICBkaWdlc3RFZmZlY3QocmVzdWx0LnZhbHVlLCBwYXJlbnRFZmZlY3RJZCwgbmV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICBUaGlzIEdlbmVyYXRvciBoYXMgZW5kZWQsIHRlcm1pbmF0ZSB0aGUgbWFpbiB0YXNrIGFuZCBub3RpZnkgdGhlIGZvcmsgcXVldWVcbiAgICAgICAgKiovXG4gICAgICAgIGlmIChtYWluVGFzay5zdGF0dXMgIT09IENBTkNFTExFRCkge1xuICAgICAgICAgIG1haW5UYXNrLnN0YXR1cyA9IERPTkU7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluVGFzay5jb250KHJlc3VsdC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChtYWluVGFzay5zdGF0dXMgPT09IENBTkNFTExFRCkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cblxuICAgICAgbWFpblRhc2suc3RhdHVzID0gQUJPUlRFRDtcbiAgICAgIG1haW5UYXNrLmNvbnQoZXJyb3IsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJ1bkVmZmVjdChlZmZlY3QsIGVmZmVjdElkLCBjdXJyQ2IpIHtcbiAgICAvKipcbiAgICAgIGVhY2ggZWZmZWN0IHJ1bm5lciBtdXN0IGF0dGFjaCBpdHMgb3duIGxvZ2ljIG9mIGNhbmNlbGxhdGlvbiB0byB0aGUgcHJvdmlkZWQgY2FsbGJhY2tcbiAgICAgIGl0IGFsbG93cyB0aGlzIGdlbmVyYXRvciB0byBwcm9wYWdhdGUgY2FuY2VsbGF0aW9uIGRvd253YXJkLlxuICAgICAgIEFUVEVOVElPTiEgZWZmZWN0IHJ1bm5lcnMgbXVzdCBzZXR1cCB0aGUgY2FuY2VsIGxvZ2ljIGJ5IHNldHRpbmcgY2IuY2FuY2VsID0gW2NhbmNlbE1ldGhvZF1cbiAgICAgIEFuZCB0aGUgc2V0dXAgbXVzdCBvY2N1ciBiZWZvcmUgY2FsbGluZyB0aGUgY2FsbGJhY2tcbiAgICAgICBUaGlzIGlzIGEgc29ydCBvZiBpbnZlcnNpb24gb2YgY29udHJvbDogY2FsbGVkIGFzeW5jIGZ1bmN0aW9ucyBhcmUgcmVzcG9uc2libGVcbiAgICAgIG9mIGNvbXBsZXRpbmcgdGhlIGZsb3cgYnkgY2FsbGluZyB0aGUgcHJvdmlkZWQgY29udGludWF0aW9uOyB3aGlsZSBjYWxsZXIgZnVuY3Rpb25zXG4gICAgICBhcmUgcmVzcG9uc2libGUgZm9yIGFib3J0aW5nIHRoZSBjdXJyZW50IGZsb3cgYnkgY2FsbGluZyB0aGUgYXR0YWNoZWQgY2FuY2VsIGZ1bmN0aW9uXG4gICAgICAgTGlicmFyeSB1c2VycyBjYW4gYXR0YWNoIHRoZWlyIG93biBjYW5jZWxsYXRpb24gbG9naWMgdG8gcHJvbWlzZXMgYnkgZGVmaW5pbmcgYVxuICAgICAgcHJvbWlzZVtDQU5DRUxdIG1ldGhvZCBpbiB0aGVpciByZXR1cm5lZCBwcm9taXNlc1xuICAgICAgQVRURU5USU9OISBjYWxsaW5nIGNhbmNlbCBtdXN0IGhhdmUgbm8gZWZmZWN0IG9uIGFuIGFscmVhZHkgY29tcGxldGVkIG9yIGNhbmNlbGxlZCBlZmZlY3RcbiAgICAqKi9cbiAgICBpZiAocHJvbWlzZShlZmZlY3QpKSB7XG4gICAgICByZXNvbHZlUHJvbWlzZShlZmZlY3QsIGN1cnJDYik7XG4gICAgfSBlbHNlIGlmIChpdGVyYXRvcihlZmZlY3QpKSB7XG4gICAgICAvLyByZXNvbHZlIGl0ZXJhdG9yXG4gICAgICBwcm9jKGVudiwgZWZmZWN0LCB0YXNrLmNvbnRleHQsIGVmZmVjdElkLCBtZXRhLFxuICAgICAgLyogaXNSb290ICovXG4gICAgICBmYWxzZSwgY3VyckNiKTtcbiAgICB9IGVsc2UgaWYgKGVmZmVjdCAmJiBlZmZlY3RbSU9dKSB7XG4gICAgICB2YXIgZWZmZWN0UnVubmVyID0gZWZmZWN0UnVubmVyTWFwW2VmZmVjdC50eXBlXTtcbiAgICAgIGVmZmVjdFJ1bm5lcihlbnYsIGVmZmVjdC5wYXlsb2FkLCBjdXJyQ2IsIGV4ZWN1dGluZ0NvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIHJldHVybmVkIGFzIGlzXG4gICAgICBjdXJyQ2IoZWZmZWN0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaWdlc3RFZmZlY3QoZWZmZWN0LCBwYXJlbnRFZmZlY3RJZCwgY2IsIGxhYmVsKSB7XG4gICAgaWYgKGxhYmVsID09PSB2b2lkIDApIHtcbiAgICAgIGxhYmVsID0gJyc7XG4gICAgfVxuXG4gICAgdmFyIGVmZmVjdElkID0gbmV4dFNhZ2FJZCgpO1xuICAgIGVudi5zYWdhTW9uaXRvciAmJiBlbnYuc2FnYU1vbml0b3IuZWZmZWN0VHJpZ2dlcmVkKHtcbiAgICAgIGVmZmVjdElkOiBlZmZlY3RJZCxcbiAgICAgIHBhcmVudEVmZmVjdElkOiBwYXJlbnRFZmZlY3RJZCxcbiAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgIGVmZmVjdDogZWZmZWN0XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICBjb21wbGV0aW9uIGNhbGxiYWNrIGFuZCBjYW5jZWwgY2FsbGJhY2sgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZVxuICAgICAgV2UgY2FuJ3QgY2FuY2VsIGFuIGFscmVhZHkgY29tcGxldGVkIGVmZmVjdFxuICAgICAgQW5kIFdlIGNhbid0IGNvbXBsZXRlIGFuIGFscmVhZHkgY2FuY2VsbGVkIGVmZmVjdElkXG4gICAgKiovXG5cbiAgICB2YXIgZWZmZWN0U2V0dGxlZDsgLy8gQ29tcGxldGlvbiBjYWxsYmFjayBwYXNzZWQgdG8gdGhlIGFwcHJvcHJpYXRlIGVmZmVjdCBydW5uZXJcblxuICAgIGZ1bmN0aW9uIGN1cnJDYihyZXMsIGlzRXJyKSB7XG4gICAgICBpZiAoZWZmZWN0U2V0dGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGVmZmVjdFNldHRsZWQgPSB0cnVlO1xuICAgICAgY2IuY2FuY2VsID0gbm9vcDsgLy8gZGVmZW5zaXZlIG1lYXN1cmVcblxuICAgICAgaWYgKGVudi5zYWdhTW9uaXRvcikge1xuICAgICAgICBpZiAoaXNFcnIpIHtcbiAgICAgICAgICBlbnYuc2FnYU1vbml0b3IuZWZmZWN0UmVqZWN0ZWQoZWZmZWN0SWQsIHJlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW52LnNhZ2FNb25pdG9yLmVmZmVjdFJlc29sdmVkKGVmZmVjdElkLCByZXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Vycikge1xuICAgICAgICBzZXRDcmFzaGVkRWZmZWN0KGVmZmVjdCk7XG4gICAgICB9XG5cbiAgICAgIGNiKHJlcywgaXNFcnIpO1xuICAgIH0gLy8gdHJhY2tzIGRvd24gdGhlIGN1cnJlbnQgY2FuY2VsXG5cblxuICAgIGN1cnJDYi5jYW5jZWwgPSBub29wOyAvLyBzZXR1cCBjYW5jZWxsYXRpb24gbG9naWMgb24gdGhlIHBhcmVudCBjYlxuXG4gICAgY2IuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gcHJldmVudHMgY2FuY2VsbGluZyBhbiBhbHJlYWR5IGNvbXBsZXRlZCBlZmZlY3RcbiAgICAgIGlmIChlZmZlY3RTZXR0bGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZWZmZWN0U2V0dGxlZCA9IHRydWU7XG4gICAgICBjdXJyQ2IuY2FuY2VsKCk7IC8vIHByb3BhZ2F0ZXMgY2FuY2VsIGRvd253YXJkXG5cbiAgICAgIGN1cnJDYi5jYW5jZWwgPSBub29wOyAvLyBkZWZlbnNpdmUgbWVhc3VyZVxuXG4gICAgICBlbnYuc2FnYU1vbml0b3IgJiYgZW52LnNhZ2FNb25pdG9yLmVmZmVjdENhbmNlbGxlZChlZmZlY3RJZCk7XG4gICAgfTtcblxuICAgIGZpbmFsUnVuRWZmZWN0KGVmZmVjdCwgZWZmZWN0SWQsIGN1cnJDYik7XG4gIH1cbn1cblxudmFyIFJVTl9TQUdBX1NJR05BVFVSRSA9ICdydW5TYWdhKG9wdGlvbnMsIHNhZ2EsIC4uLmFyZ3MpJztcbnZhciBOT05fR0VORVJBVE9SX0VSUiA9IFJVTl9TQUdBX1NJR05BVFVSRSArIFwiOiBzYWdhIGFyZ3VtZW50IG11c3QgYmUgYSBHZW5lcmF0b3IgZnVuY3Rpb24hXCI7XG5mdW5jdGlvbiBydW5TYWdhKF9yZWYsIHNhZ2EpIHtcbiAgdmFyIF9yZWYkY2hhbm5lbCA9IF9yZWYuY2hhbm5lbCxcbiAgICAgIGNoYW5uZWwgPSBfcmVmJGNoYW5uZWwgPT09IHZvaWQgMCA/IHN0ZENoYW5uZWwoKSA6IF9yZWYkY2hhbm5lbCxcbiAgICAgIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaCxcbiAgICAgIGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZSxcbiAgICAgIF9yZWYkY29udGV4dCA9IF9yZWYuY29udGV4dCxcbiAgICAgIGNvbnRleHQgPSBfcmVmJGNvbnRleHQgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRjb250ZXh0LFxuICAgICAgc2FnYU1vbml0b3IgPSBfcmVmLnNhZ2FNb25pdG9yLFxuICAgICAgZWZmZWN0TWlkZGxld2FyZXMgPSBfcmVmLmVmZmVjdE1pZGRsZXdhcmVzLFxuICAgICAgX3JlZiRvbkVycm9yID0gX3JlZi5vbkVycm9yLFxuICAgICAgb25FcnJvciA9IF9yZWYkb25FcnJvciA9PT0gdm9pZCAwID8gbG9nRXJyb3IgOiBfcmVmJG9uRXJyb3I7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhzYWdhLCBmdW5jLCBOT05fR0VORVJBVE9SX0VSUik7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgaXRlcmF0b3IkMSA9IHNhZ2EuYXBwbHkodm9pZCAwLCBhcmdzKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKGl0ZXJhdG9yJDEsIGl0ZXJhdG9yLCBOT05fR0VORVJBVE9SX0VSUik7XG4gIH1cblxuICB2YXIgZWZmZWN0SWQgPSBuZXh0U2FnYUlkKCk7XG5cbiAgaWYgKHNhZ2FNb25pdG9yKSB7XG4gICAgLy8gbW9uaXRvcnMgYXJlIGV4cGVjdGVkIHRvIGhhdmUgYSBjZXJ0YWluIGludGVyZmFjZSwgbGV0J3MgZmlsbC1pbiBhbnkgbWlzc2luZyBvbmVzXG4gICAgc2FnYU1vbml0b3Iucm9vdFNhZ2FTdGFydGVkID0gc2FnYU1vbml0b3Iucm9vdFNhZ2FTdGFydGVkIHx8IG5vb3A7XG4gICAgc2FnYU1vbml0b3IuZWZmZWN0VHJpZ2dlcmVkID0gc2FnYU1vbml0b3IuZWZmZWN0VHJpZ2dlcmVkIHx8IG5vb3A7XG4gICAgc2FnYU1vbml0b3IuZWZmZWN0UmVzb2x2ZWQgPSBzYWdhTW9uaXRvci5lZmZlY3RSZXNvbHZlZCB8fCBub29wO1xuICAgIHNhZ2FNb25pdG9yLmVmZmVjdFJlamVjdGVkID0gc2FnYU1vbml0b3IuZWZmZWN0UmVqZWN0ZWQgfHwgbm9vcDtcbiAgICBzYWdhTW9uaXRvci5lZmZlY3RDYW5jZWxsZWQgPSBzYWdhTW9uaXRvci5lZmZlY3RDYW5jZWxsZWQgfHwgbm9vcDtcbiAgICBzYWdhTW9uaXRvci5hY3Rpb25EaXNwYXRjaGVkID0gc2FnYU1vbml0b3IuYWN0aW9uRGlzcGF0Y2hlZCB8fCBub29wO1xuICAgIHNhZ2FNb25pdG9yLnJvb3RTYWdhU3RhcnRlZCh7XG4gICAgICBlZmZlY3RJZDogZWZmZWN0SWQsXG4gICAgICBzYWdhOiBzYWdhLFxuICAgICAgYXJnczogYXJnc1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAobm90VW5kZWYoZGlzcGF0Y2gpKSB7XG4gICAgICBjaGVjayhkaXNwYXRjaCwgZnVuYywgJ2Rpc3BhdGNoIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIGlmIChub3RVbmRlZihnZXRTdGF0ZSkpIHtcbiAgICAgIGNoZWNrKGdldFN0YXRlLCBmdW5jLCAnZ2V0U3RhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKG5vdFVuZGVmKGVmZmVjdE1pZGRsZXdhcmVzKSkge1xuICAgICAgdmFyIE1JRERMRVdBUkVfVFlQRV9FUlJPUiA9ICdlZmZlY3RNaWRkbGV3YXJlcyBtdXN0IGJlIGFuIGFycmF5IG9mIGZ1bmN0aW9ucyc7XG4gICAgICBjaGVjayhlZmZlY3RNaWRkbGV3YXJlcywgYXJyYXkkMSwgTUlERExFV0FSRV9UWVBFX0VSUk9SKTtcbiAgICAgIGVmZmVjdE1pZGRsZXdhcmVzLmZvckVhY2goZnVuY3Rpb24gKGVmZmVjdE1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrKGVmZmVjdE1pZGRsZXdhcmUsIGZ1bmMsIE1JRERMRVdBUkVfVFlQRV9FUlJPUik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVjayhvbkVycm9yLCBmdW5jLCAnb25FcnJvciBwYXNzZWQgdG8gdGhlIHJlZHV4LXNhZ2EgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIH1cblxuICB2YXIgZmluYWxpemVSdW5FZmZlY3Q7XG5cbiAgaWYgKGVmZmVjdE1pZGRsZXdhcmVzKSB7XG4gICAgdmFyIG1pZGRsZXdhcmUgPSBjb21wb3NlLmFwcGx5KHZvaWQgMCwgZWZmZWN0TWlkZGxld2FyZXMpO1xuXG4gICAgZmluYWxpemVSdW5FZmZlY3QgPSBmdW5jdGlvbiBmaW5hbGl6ZVJ1bkVmZmVjdChydW5FZmZlY3QpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZWZmZWN0LCBlZmZlY3RJZCwgY3VyckNiKSB7XG4gICAgICAgIHZhciBwbGFpblJ1bkVmZmVjdCA9IGZ1bmN0aW9uIHBsYWluUnVuRWZmZWN0KGVmZikge1xuICAgICAgICAgIHJldHVybiBydW5FZmZlY3QoZWZmLCBlZmZlY3RJZCwgY3VyckNiKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShwbGFpblJ1bkVmZmVjdCkoZWZmZWN0KTtcbiAgICAgIH07XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBmaW5hbGl6ZVJ1bkVmZmVjdCA9IGlkZW50aXR5O1xuICB9XG5cbiAgdmFyIGVudiA9IHtcbiAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgIGRpc3BhdGNoOiB3cmFwU2FnYURpc3BhdGNoKGRpc3BhdGNoKSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgc2FnYU1vbml0b3I6IHNhZ2FNb25pdG9yLFxuICAgIG9uRXJyb3I6IG9uRXJyb3IsXG4gICAgZmluYWxpemVSdW5FZmZlY3Q6IGZpbmFsaXplUnVuRWZmZWN0XG4gIH07XG4gIHJldHVybiBpbW1lZGlhdGVseShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRhc2sgPSBwcm9jKGVudiwgaXRlcmF0b3IkMSwgY29udGV4dCwgZWZmZWN0SWQsIGdldE1ldGFJbmZvKHNhZ2EpLFxuICAgIC8qIGlzUm9vdCAqL1xuICAgIHRydWUsIHVuZGVmaW5lZCk7XG5cbiAgICBpZiAoc2FnYU1vbml0b3IpIHtcbiAgICAgIHNhZ2FNb25pdG9yLmVmZmVjdFJlc29sdmVkKGVmZmVjdElkLCB0YXNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFzaztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNhZ2FNaWRkbGV3YXJlRmFjdG9yeShfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgX3JlZiRjb250ZXh0ID0gX3JlZi5jb250ZXh0LFxuICAgICAgY29udGV4dCA9IF9yZWYkY29udGV4dCA9PT0gdm9pZCAwID8ge30gOiBfcmVmJGNvbnRleHQsXG4gICAgICBfcmVmJGNoYW5uZWwgPSBfcmVmLmNoYW5uZWwsXG4gICAgICBjaGFubmVsID0gX3JlZiRjaGFubmVsID09PSB2b2lkIDAgPyBzdGRDaGFubmVsKCkgOiBfcmVmJGNoYW5uZWwsXG4gICAgICBzYWdhTW9uaXRvciA9IF9yZWYuc2FnYU1vbml0b3IsXG4gICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiY29udGV4dFwiLCBcImNoYW5uZWxcIiwgXCJzYWdhTW9uaXRvclwiXSk7XG5cbiAgdmFyIGJvdW5kUnVuU2FnYTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKGNoYW5uZWwsIGNoYW5uZWwkMSwgJ29wdGlvbnMuY2hhbm5lbCBwYXNzZWQgdG8gdGhlIFNhZ2EgbWlkZGxld2FyZSBpcyBub3QgYSBjaGFubmVsJyk7XG4gIH1cblxuICBmdW5jdGlvbiBzYWdhTWlkZGxld2FyZShfcmVmMikge1xuICAgIHZhciBnZXRTdGF0ZSA9IF9yZWYyLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaCA9IF9yZWYyLmRpc3BhdGNoO1xuICAgIGJvdW5kUnVuU2FnYSA9IHJ1blNhZ2EuYmluZChudWxsLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgICBzYWdhTW9uaXRvcjogc2FnYU1vbml0b3JcbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBpZiAoc2FnYU1vbml0b3IgJiYgc2FnYU1vbml0b3IuYWN0aW9uRGlzcGF0Y2hlZCkge1xuICAgICAgICAgIHNhZ2FNb25pdG9yLmFjdGlvbkRpc3BhdGNoZWQoYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXh0KGFjdGlvbik7IC8vIGhpdCByZWR1Y2Vyc1xuXG4gICAgICAgIGNoYW5uZWwucHV0KGFjdGlvbik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICBzYWdhTWlkZGxld2FyZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWJvdW5kUnVuU2FnYSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCZWZvcmUgcnVubmluZyBhIFNhZ2EsIHlvdSBtdXN0IG1vdW50IHRoZSBTYWdhIG1pZGRsZXdhcmUgb24gdGhlIFN0b3JlIHVzaW5nIGFwcGx5TWlkZGxld2FyZScpO1xuICAgIH1cblxuICAgIHJldHVybiBib3VuZFJ1blNhZ2EuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHNhZ2FNaWRkbGV3YXJlLnNldENvbnRleHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2socHJvcHMsIG9iamVjdCwgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcoJ3NhZ2FNaWRkbGV3YXJlJywgcHJvcHMpKTtcbiAgICB9XG5cbiAgICBhc3NpZ25XaXRoU3ltYm9scyhjb250ZXh0LCBwcm9wcyk7XG4gIH07XG5cbiAgcmV0dXJuIHNhZ2FNaWRkbGV3YXJlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzYWdhTWlkZGxld2FyZUZhY3Rvcnk7XG5leHBvcnQgeyBFTkQsIGNoYW5uZWwsIGV2ZW50Q2hhbm5lbCwgaXNFbmQsIG11bHRpY2FzdENoYW5uZWwsIHJ1blNhZ2EsIHN0ZENoYW5uZWwgfTtcbiIsImZ1bmN0aW9uIGRlZmVycmVkKCkge1xuICB2YXIgZGVmID0ge307XG4gIGRlZi5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGRlZi5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBkZWYucmVqZWN0ID0gcmVqZWN0O1xuICB9KTtcbiAgcmV0dXJuIGRlZjtcbn1cbmZ1bmN0aW9uIGFycmF5T2ZEZWZlcnJlZChsZW5ndGgpIHtcbiAgdmFyIGFyciA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBhcnIucHVzaChkZWZlcnJlZCgpKTtcbiAgfVxuXG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmVycmVkO1xuZXhwb3J0IHsgYXJyYXlPZkRlZmVycmVkIH07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmV4cG9ydCB2YXIgSFlEUkFURSA9ICdfX05FWFRfUkVEVVhfV1JBUFBFUl9IWURSQVRFX18nO1xuZXhwb3J0IHZhciBTVE9SRUtFWSA9ICdfX05FWFRfUkVEVVhfV1JBUFBFUl9TVE9SRV9fJztcbnZhciBnZXRJc1NlcnZlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnOyB9O1xudmFyIGdldERlc2VyaWFsaXplZFN0YXRlID0gZnVuY3Rpb24gKGluaXRpYWxTdGF0ZSwgX2EpIHtcbiAgICB2YXIgZGVzZXJpYWxpemVTdGF0ZSA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkuZGVzZXJpYWxpemVTdGF0ZTtcbiAgICByZXR1cm4gZGVzZXJpYWxpemVTdGF0ZSA/IGRlc2VyaWFsaXplU3RhdGUoaW5pdGlhbFN0YXRlKSA6IGluaXRpYWxTdGF0ZTtcbn07XG52YXIgZ2V0U2VyaWFsaXplZFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlLCBfYSkge1xuICAgIHZhciBzZXJpYWxpemVTdGF0ZSA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkuc2VyaWFsaXplU3RhdGU7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZVN0YXRlID8gc2VyaWFsaXplU3RhdGUoc3RhdGUpIDogc3RhdGU7XG59O1xudmFyIGdldFN0b3JlS2V5ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHN0b3JlS2V5ID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5zdG9yZUtleTtcbiAgICByZXR1cm4gc3RvcmVLZXkgfHwgU1RPUkVLRVk7XG59O1xudmFyIGluaXRTdG9yZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBtYWtlU3RvcmUgPSBfYS5tYWtlU3RvcmUsIGNvbnRleHQgPSBfYS5jb250ZXh0LCBjb25maWcgPSBfYS5jb25maWc7XG4gICAgdmFyIHN0b3JlS2V5ID0gZ2V0U3RvcmVLZXkoY29uZmlnKTtcbiAgICB2YXIgY3JlYXRlU3RvcmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtYWtlU3RvcmUoY29udGV4dCk7IH07XG4gICAgaWYgKGdldElzU2VydmVyKCkpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0O1xuICAgICAgICB2YXIgcmVxID0gdm9pZCAwO1xuICAgICAgICBpZiAoYy5yZXEpXG4gICAgICAgICAgICByZXEgPSBjLnJlcTtcbiAgICAgICAgaWYgKGMuY3R4ICYmIGMuY3R4LnJlcSlcbiAgICAgICAgICAgIHJlcSA9IGMuY3R4LnJlcTtcbiAgICAgICAgaWYgKHJlcSkge1xuICAgICAgICAgICAgLy8gQVRURU5USU9OISBUSElTIElTIElOVEVSTkFMLCBETyBOT1QgQUNDRVNTIERJUkVDVExZIEFOWVdIRVJFIEVMU0VcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2tpcmlsbC1rb25zaGluL25leHQtcmVkdXgtd3JhcHBlci9wdWxsLzE5NiNpc3N1ZWNvbW1lbnQtNjExNjczNTQ2XG4gICAgICAgICAgICBpZiAoIXJlcS5fX25leHRSZWR1eFdyYXBwZXJTdG9yZSlcbiAgICAgICAgICAgICAgICByZXEuX19uZXh0UmVkdXhXcmFwcGVyU3RvcmUgPSBjcmVhdGVTdG9yZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcS5fX25leHRSZWR1eFdyYXBwZXJTdG9yZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlYXRlU3RvcmUoKTtcbiAgICB9XG4gICAgLy8gTWVtb2l6ZSBzdG9yZSBpZiBjbGllbnRcbiAgICBpZiAoIShzdG9yZUtleSBpbiB3aW5kb3cpKSB7XG4gICAgICAgIHdpbmRvd1tzdG9yZUtleV0gPSBjcmVhdGVTdG9yZSgpO1xuICAgIH1cbiAgICByZXR1cm4gd2luZG93W3N0b3JlS2V5XTtcbn07XG5leHBvcnQgdmFyIGNyZWF0ZVdyYXBwZXIgPSBmdW5jdGlvbiAobWFrZVN0b3JlLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICB2YXIgbWFrZVByb3BzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9hLmNhbGxiYWNrLCBjb250ZXh0ID0gX2EuY29udGV4dCwgX2IgPSBfYS5pc0FwcCwgaXNBcHAgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYjtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmUsIGluaXRpYWxQcm9wcywgX2MsIHN0YXRlO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2QubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBpbml0U3RvcmUoeyBjb250ZXh0OiBjb250ZXh0LCBtYWtlU3RvcmU6IG1ha2VTdG9yZSwgY29uZmlnOiBjb25maWcgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmRlYnVnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMS4gZ2V0UHJvcHMgY3JlYXRlZCBzdG9yZSB3aXRoIHN0YXRlXCIsIHN0b3JlLmdldFN0YXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2MpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWVyZ2luZyBzdG9yZSBpbnRvIGNvbnRleHQgaW5zdGVhZCBvZiBqdXN0IHBhc3NpbmcgYXMgYW5vdGhlciBhcmd1bWVudCBiZWNhdXNlIGl0J3MgaW1wb3NzaWJsZSB0byBvdmVycmlkZSBnZXRJbml0aWFsUHJvcHMgc2lnbmF0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBcHAgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29udGV4dCksIHsgY3R4OiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29udGV4dC5jdHgpLCB7IHN0b3JlOiBzdG9yZSB9KSB9KSA6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyBzdG9yZTogc3RvcmUgfSkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSAoX2Quc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFByb3BzID0gKF9jKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5kZWJ1ZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjMuIGdldFByb3BzIGFmdGVyIGRpc3BhdGNoZXMgaGFzIHN0b3JlIHN0YXRlXCIsIHN0b3JlLmdldFN0YXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZTogZ2V0SXNTZXJ2ZXIoKSA/IGdldFNlcmlhbGl6ZWRTdGF0ZShzdGF0ZSwgY29uZmlnKSA6IHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBnZXRJbml0aWFsUGFnZVByb3BzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBmdW5jdGlvbiAoY29udGV4dCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIG5lZWQgdG8gd3JhcCBwYWdlcyBpZiBfYXBwIHdhcyB3cmFwcGVkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGNhbGxiYWNrKGNvbnRleHQpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBtYWtlUHJvcHMoeyBjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHQgfSldO1xuICAgICAgICB9KTtcbiAgICB9KTsgfTsgfTtcbiAgICB2YXIgZ2V0SW5pdGlhbEFwcFByb3BzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBmdW5jdGlvbiAoY29udGV4dCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIG1ha2VQcm9wcyh7IGNhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dCwgaXNBcHA6IHRydWUgfSldO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgKF9hLnNlbnQoKSldO1xuICAgICAgICB9XG4gICAgfSk7IH0pOyB9OyB9OyAvLyB0aGlzIGlzIGp1c3QgdG8gY29udmluY2UgVFNcbiAgICB2YXIgZ2V0U3RhdGljUHJvcHMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHsgcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0KSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBwcm9wcywgc2V0dGluZ3MsIHdyYXBwZXJQcm9wcztcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgbWFrZVByb3BzKHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBjb250ZXh0OiBjb250ZXh0IH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hID0gX2Muc2VudCgpLCBfYiA9IF9hLmluaXRpYWxQcm9wcywgcHJvcHMgPSBfYi5wcm9wcywgc2V0dGluZ3MgPSBfX3Jlc3QoX2IsIFtcInByb3BzXCJdKSwgd3JhcHBlclByb3BzID0gX19yZXN0KF9hLCBbXCJpbml0aWFsUHJvcHNcIl0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgX19hc3NpZ24oX19hc3NpZ24oe30sIHNldHRpbmdzKSwgeyBwcm9wczogX19hc3NpZ24oX19hc3NpZ24oe30sIHdyYXBwZXJQcm9wcyksIHByb3BzKSB9KV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9OyB9O1xuICAgIHZhciBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHsgcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0KSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRTdGF0aWNQcm9wcyhjYWxsYmFjaykoY29udGV4dCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07IC8vIGp1c3Qgbm90IHRvIHJlcGVhdCBteXNlbGZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07IH07XG4gICAgdmFyIHdpdGhSZWR1eCA9IGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIGRpc3BsYXlOYW1lID0gXCJ3aXRoUmVkdXgoXCIgKyAoQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnKSArIFwiKVwiO1xuICAgICAgICAvL1RPRE8gQ2hlY2sgaWYgcGFnZXMvX2FwcCB3YXMgd3JhcHBlZCBzbyB0aGVyZSdzIG5vIG5lZWQgdG8gd3JhcCBhIHBhZ2UgaXRzZWxmXG4gICAgICAgIHZhciBXcmFwcGVyID0gZnVuY3Rpb24gKF9hLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgX2I7XG4gICAgICAgICAgICB2YXIgaW5pdGlhbFN0YXRlID0gX2EuaW5pdGlhbFN0YXRlLCBpbml0aWFsUHJvcHMgPSBfYS5pbml0aWFsUHJvcHMsIHByb3BzID0gX19yZXN0KF9hLCBbXCJpbml0aWFsU3RhdGVcIiwgXCJpbml0aWFsUHJvcHNcIl0pO1xuICAgICAgICAgICAgdmFyIGlzRmlyc3RSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XG4gICAgICAgICAgICAvLyB0aGlzIGhhcHBlbnMgd2hlbiBBcHAgaGFzIHBhZ2Ugd2l0aCBnZXRTZXJ2ZXJTaWRlUHJvcHMvZ2V0U3RhdGljUHJvcHNcbiAgICAgICAgICAgIHZhciBpbml0aWFsU3RhdGVGcm9tR1NQb3JHU1NSID0gKF9iID0gcHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmluaXRpYWxTdGF0ZTtcbiAgICAgICAgICAgIGlmIChjb25maWcuZGVidWcpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzQuIFdyYXBwZWRBcHAgY3JlYXRlZCBuZXcgc3RvcmUgd2l0aCcsIGRpc3BsYXlOYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGVGcm9tR1NQb3JHU1NSOiBpbml0aWFsU3RhdGVGcm9tR1NQb3JHU1NSLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHN0b3JlID0gdXNlUmVmKGluaXRTdG9yZSh7IG1ha2VTdG9yZTogbWFrZVN0b3JlLCBjb25maWc6IGNvbmZpZywgY29udGV4dDogY29udGV4dCB9KSk7XG4gICAgICAgICAgICB2YXIgaHlkcmF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbFN0YXRlKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jdXJyZW50LmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEhZRFJBVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBnZXREZXNlcmlhbGl6ZWRTdGF0ZShpbml0aWFsU3RhdGUsIGNvbmZpZyksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIEFUVEVOVElPTiEgVGhpcyBjb2RlIGFzc3VtZXMgdGhhdCBQYWdlJ3MgZ2V0U2VydmVyU2lkZVByb3BzIGlzIGV4ZWN1dGVkIGFmdGVyIEFwcC5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkaXNwYXRjaCBpbiB0aGlzIG9yZGVyXG4gICAgICAgICAgICAgICAgaWYgKGluaXRpYWxTdGF0ZUZyb21HU1BvckdTU1IpXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmN1cnJlbnQuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogSFlEUkFURSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGdldERlc2VyaWFsaXplZFN0YXRlKGluaXRpYWxTdGF0ZUZyb21HU1BvckdTU1IsIGNvbmZpZyksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgW2luaXRpYWxTdGF0ZUZyb21HU1BvckdTU1IsIGluaXRpYWxTdGF0ZV0pO1xuICAgICAgICAgICAgLy8gYXBwbHkgc3luY2hyb25vdXNseSBvbiBmaXJzdCByZW5kZXIgKGJvdGggc2VydmVyIHNpZGUgYW5kIGNsaWVudCBzaWRlKVxuICAgICAgICAgICAgaWYgKGlzRmlyc3RSZW5kZXIuY3VycmVudClcbiAgICAgICAgICAgICAgICBoeWRyYXRlKCk7XG4gICAgICAgICAgICAvLyBhcHBseSBhc3luYyBpbiBjYXNlIHByb3BzIGhhdmUgY2hhbmdlZCwgb24gbmF2aWdhdGlvbiBmb3IgZXhhbXBsZVxuICAgICAgICAgICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNGaXJzdFJlbmRlci5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRmlyc3RSZW5kZXIuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGh5ZHJhdGUoKTtcbiAgICAgICAgICAgIH0sIFtoeWRyYXRlXSk7XG4gICAgICAgICAgICAvLyBvcmRlciBpcyBpbXBvcnRhbnQhIE5leHQuanMgb3ZlcndyaXRlcyBwcm9wcyBmcm9tIHBhZ2VzL19hcHAgd2l0aCBnZXRTdGF0aWNQcm9wcyBmcm9tIHBhZ2VcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9pc3N1ZXMvMTE2NDhcbiAgICAgICAgICAgIGlmIChpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLnBhZ2VQcm9wcylcbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaW5pdGlhbFByb3BzLnBhZ2VQcm9wcyksIHByb3BzLnBhZ2VQcm9wcyk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0UHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIC8vIGp1c3Qgc29tZSBjbGVhbnVwIHRvIHByZXZlbnQgcGFzc2luZyBpdCBhcyBwcm9wcywgd2UgbmVlZCB0byBjbG9uZSBwcm9wcyB0byBzYWZlbHkgZGVsZXRlIGluaXRpYWxTdGF0ZVxuICAgICAgICAgICAgaWYgKGluaXRpYWxTdGF0ZUZyb21HU1BvckdTU1IpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRQcm9wcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm9wcyksIHsgcGFnZVByb3BzOiBfX2Fzc2lnbih7fSwgcHJvcHMucGFnZVByb3BzKSB9KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0UHJvcHMucGFnZVByb3BzLmluaXRpYWxTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChQcm92aWRlciwgeyBzdG9yZTogc3RvcmUuY3VycmVudCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfX2Fzc2lnbih7fSwgaW5pdGlhbFByb3BzLCByZXN1bHRQcm9wcykpKSk7XG4gICAgICAgIH07XG4gICAgICAgIFdyYXBwZXIuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgICAgaWYgKCdnZXRJbml0aWFsUHJvcHMnIGluIENvbXBvbmVudClcbiAgICAgICAgICAgIFdyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gZnVuY3Rpb24gKGNvbnRleHQpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgKGNvbnRleHQuY3R4ID8gZ2V0SW5pdGlhbEFwcFByb3BzKGNhbGxiYWNrKSA6IGdldEluaXRpYWxQYWdlUHJvcHMoY2FsbGJhY2spKShjb250ZXh0KV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTsgfTtcbiAgICAgICAgcmV0dXJuIFdyYXBwZXI7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRTZXJ2ZXJTaWRlUHJvcHM6IGdldFNlcnZlclNpZGVQcm9wcyxcbiAgICAgICAgZ2V0U3RhdGljUHJvcHM6IGdldFN0YXRpY1Byb3BzLFxuICAgICAgICB3aXRoUmVkdXg6IHdpdGhSZWR1eCxcbiAgICB9O1xufTtcbi8vIExlZ2FjeVxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChtYWtlU3RvcmUsIGNvbmZpZykge1xuICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgIGNvbnNvbGUud2FybignLyFcXFxcIFlvdSBhcmUgdXNpbmcgbGVnYWN5IGltcGxlbWVudGFpb24uIFBsZWFzZSB1cGRhdGUgeW91ciBjb2RlOiB1c2UgY3JlYXRlV3JhcHBlcigpIGFuZCB3cmFwcGVyLndpdGhSZWR1eCgpLicpO1xuICAgIHJldHVybiBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgY29uZmlnKS53aXRoUmVkdXg7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbXBvc2UgPSByZXF1aXJlKCdyZWR1eCcpLmNvbXBvc2U7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbXBvc2VXaXRoRGV2VG9vbHMgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXG4gICAgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXG4gICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpIHJldHVybiBjb21wb3NlO1xuICAgICAgICByZXR1cm4gY29tcG9zZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgfTtcblxuZXhwb3J0cy5kZXZUb29sc0VuaGFuY2VyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX19cbiAgICA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fXG4gICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobm9vcCkge1xuICAgICAgICAgIHJldHVybiBub29wO1xuICAgICAgICB9O1xuICAgICAgfTtcbiIsImltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZV9fZGVmYXVsdCBmcm9tICdAcmVkdXgtc2FnYS9jb3JlJztcbmV4cG9ydCAqIGZyb20gJ0ByZWR1eC1zYWdhL2NvcmUnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2FnYU1pZGRsZXdhcmVfX2RlZmF1bHQ7XG4iLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyJztcblxuLyoqXG4gKiBBZGFwdGVkIGZyb20gUmVhY3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL21hc3Rlci9wYWNrYWdlcy9zaGFyZWQvZm9ybWF0UHJvZEVycm9yTWVzc2FnZS5qc1xuICpcbiAqIERvIG5vdCByZXF1aXJlIHRoaXMgbW9kdWxlIGRpcmVjdGx5ISBVc2Ugbm9ybWFsIHRocm93IGVycm9yIGNhbGxzLiBUaGVzZSBtZXNzYWdlcyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggZXJyb3IgY29kZXNcbiAqIGR1cmluZyBidWlsZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2RlXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoY29kZSkge1xuICByZXR1cm4gXCJNaW5pZmllZCBSZWR1eCBlcnJvciAjXCIgKyBjb2RlICsgXCI7IHZpc2l0IGh0dHBzOi8vcmVkdXguanMub3JnL0Vycm9ycz9jb2RlPVwiICsgY29kZSArIFwiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIFwiICsgJ3VzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMuICc7XG59XG5cbi8vIElubGluZWQgdmVyc2lvbiBvZiB0aGUgYHN5bWJvbC1vYnNlcnZhYmxlYCBwb2x5ZmlsbFxudmFyICQkb2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlIHx8ICdAQG9ic2VydmFibGUnO1xufSkoKTtcblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiByYW5kb21TdHJpbmcoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbn07XG5cbnZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogXCJAQHJlZHV4L0lOSVRcIiArIHJhbmRvbVN0cmluZygpLFxuICBSRVBMQUNFOiBcIkBAcmVkdXgvUkVQTEFDRVwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFBST0JFX1VOS05PV05fQUNUSU9OOiBmdW5jdGlvbiBQUk9CRV9VTktOT1dOX0FDVElPTigpIHtcbiAgICByZXR1cm4gXCJAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXCIgKyByYW5kb21TdHJpbmcoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IG9iajtcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gcHJvdG87XG59XG5cbi8vIElubGluZWQgLyBzaG9ydGVuZWQgdmVyc2lvbiBvZiBga2luZE9mYCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2tpbmQtb2ZcbmZ1bmN0aW9uIG1pbmlLaW5kT2YodmFsKSB7XG4gIGlmICh2YWwgPT09IHZvaWQgMCkgcmV0dXJuICd1bmRlZmluZWQnO1xuICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybiAnYXJyYXknO1xuICBpZiAoaXNEYXRlKHZhbCkpIHJldHVybiAnZGF0ZSc7XG4gIGlmIChpc0Vycm9yKHZhbCkpIHJldHVybiAnZXJyb3InO1xuICB2YXIgY29uc3RydWN0b3JOYW1lID0gY3Rvck5hbWUodmFsKTtcblxuICBzd2l0Y2ggKGNvbnN0cnVjdG9yTmFtZSkge1xuICAgIGNhc2UgJ1N5bWJvbCc6XG4gICAgY2FzZSAnUHJvbWlzZSc6XG4gICAgY2FzZSAnV2Vha01hcCc6XG4gICAgY2FzZSAnV2Vha1NldCc6XG4gICAgY2FzZSAnTWFwJzpcbiAgICBjYXNlICdTZXQnOlxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yTmFtZTtcbiAgfSAvLyBvdGhlclxuXG5cbiAgcmV0dXJuIHR5cGUuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKTtcbn1cblxuZnVuY3Rpb24gY3Rvck5hbWUodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nID8gdmFsLmNvbnN0cnVjdG9yLm5hbWUgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yKHZhbCkge1xuICByZXR1cm4gdmFsIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIHZhbC5tZXNzYWdlID09PSAnc3RyaW5nJyAmJiB2YWwuY29uc3RydWN0b3IgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5zdGFja1RyYWNlTGltaXQgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHR5cGVvZiB2YWwudG9EYXRlU3RyaW5nID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWwuZ2V0RGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsLnNldERhdGUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGtpbmRPZih2YWwpIHtcbiAgdmFyIHR5cGVPZlZhbCA9IHR5cGVvZiB2YWw7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB0eXBlT2ZWYWwgPSBtaW5pS2luZE9mKHZhbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZU9mVmFsO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKlxuICogKipXZSByZWNvbW1lbmQgdXNpbmcgdGhlIGBjb25maWd1cmVTdG9yZWAgbWV0aG9kXG4gKiBvZiB0aGUgYEByZWR1eGpzL3Rvb2xraXRgIHBhY2thZ2UqKiwgd2hpY2ggcmVwbGFjZXMgYGNyZWF0ZVN0b3JlYC5cbiAqXG4gKiBSZWR1eCBUb29sa2l0IGlzIG91ciByZWNvbW1lbmRlZCBhcHByb2FjaCBmb3Igd3JpdGluZyBSZWR1eCBsb2dpYyB0b2RheSxcbiAqIGluY2x1ZGluZyBzdG9yZSBzZXR1cCwgcmVkdWNlcnMsIGRhdGEgZmV0Y2hpbmcsIGFuZCBtb3JlLlxuICpcbiAqICoqRm9yIG1vcmUgZGV0YWlscywgcGxlYXNlIHJlYWQgdGhpcyBSZWR1eCBkb2NzIHBhZ2U6KipcbiAqICoqaHR0cHM6Ly9yZWR1eC5qcy5vcmcvaW50cm9kdWN0aW9uL3doeS1ydGstaXMtcmVkdXgtdG9kYXkqKlxuICpcbiAqIGBjb25maWd1cmVTdG9yZWAgZnJvbSBSZWR1eCBUb29sa2l0IGlzIGFuIGltcHJvdmVkIHZlcnNpb24gb2YgYGNyZWF0ZVN0b3JlYCB0aGF0XG4gKiBzaW1wbGlmaWVzIHNldHVwIGFuZCBoZWxwcyBhdm9pZCBjb21tb24gYnVncy5cbiAqXG4gKiBZb3Ugc2hvdWxkIG5vdCBiZSB1c2luZyB0aGUgYHJlZHV4YCBjb3JlIHBhY2thZ2UgYnkgaXRzZWxmIHRvZGF5LCBleGNlcHQgZm9yIGxlYXJuaW5nIHB1cnBvc2VzLlxuICogVGhlIGBjcmVhdGVTdG9yZWAgbWV0aG9kIGZyb20gdGhlIGNvcmUgYHJlZHV4YCBwYWNrYWdlIHdpbGwgbm90IGJlIHJlbW92ZWQsIGJ1dCB3ZSBlbmNvdXJhZ2VcbiAqIGFsbCB1c2VycyB0byBtaWdyYXRlIHRvIHVzaW5nIFJlZHV4IFRvb2xraXQgZm9yIGFsbCBSZWR1eCBjb2RlLlxuICpcbiAqIElmIHlvdSB3YW50IHRvIHVzZSBgY3JlYXRlU3RvcmVgIHdpdGhvdXQgdGhpcyB2aXN1YWwgZGVwcmVjYXRpb24gd2FybmluZywgdXNlXG4gKiB0aGUgYGxlZ2FjeV9jcmVhdGVTdG9yZWAgaW1wb3J0IGluc3RlYWQ6XG4gKlxuICogYGltcG9ydCB7IGxlZ2FjeV9jcmVhdGVTdG9yZSBhcyBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnYFxuICpcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYXJndW1lbnRzWzNdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMCkgOiAnSXQgbG9va3MgbGlrZSB5b3UgYXJlIHBhc3Npbmcgc2V2ZXJhbCBzdG9yZSBlbmhhbmNlcnMgdG8gJyArICdjcmVhdGVTdG9yZSgpLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQsIGNvbXBvc2UgdGhlbSAnICsgJ3RvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjY3JlYXRpbmctYS1zdG9yZS13aXRoLWVuaGFuY2VycyBmb3IgYW4gZXhhbXBsZS4nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEpIDogXCJFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihlbmhhbmNlcikgKyBcIidcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgyKSA6IFwiRXhwZWN0ZWQgdGhlIHJvb3QgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKHJlZHVjZXIpICsgXCInXCIpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGlzIG1ha2VzIGEgc2hhbGxvdyBjb3B5IG9mIGN1cnJlbnRMaXN0ZW5lcnMgc28gd2UgY2FuIHVzZVxuICAgKiBuZXh0TGlzdGVuZXJzIGFzIGEgdGVtcG9yYXJ5IGxpc3Qgd2hpbGUgZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIFRoaXMgcHJldmVudHMgYW55IGJ1Z3MgYXJvdW5kIGNvbnN1bWVycyBjYWxsaW5nXG4gICAqIHN1YnNjcmliZS91bnN1YnNjcmliZSBpbiB0aGUgbWlkZGxlIG9mIGEgZGlzcGF0Y2guXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgzKSA6ICdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1RoZSByZWR1Y2VyIGhhcyBhbHJlYWR5IHJlY2VpdmVkIHRoZSBzdGF0ZSBhcyBhbiBhcmd1bWVudC4gJyArICdQYXNzIGl0IGRvd24gZnJvbSB0aGUgdG9wIHJlZHVjZXIgaW5zdGVhZCBvZiByZWFkaW5nIGl0IGZyb20gdGhlIHN0b3JlLicpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDQpIDogXCJFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihsaXN0ZW5lcikgKyBcIidcIik7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDUpIDogJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuc3Vic2NyaWJlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ0lmIHlvdSB3b3VsZCBsaWtlIHRvIGJlIG5vdGlmaWVkIGFmdGVyIHRoZSBzdG9yZSBoYXMgYmVlbiB1cGRhdGVkLCBzdWJzY3JpYmUgZnJvbSBhICcgKyAnY29tcG9uZW50IGFuZCBpbnZva2Ugc3RvcmUuZ2V0U3RhdGUoKSBpbiB0aGUgY2FsbGJhY2sgdG8gYWNjZXNzIHRoZSBsYXRlc3Qgc3RhdGUuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS9zdG9yZSNzdWJzY3JpYmVsaXN0ZW5lciBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNikgOiAnWW91IG1heSBub3QgdW5zdWJzY3JpYmUgZnJvbSBhIHN0b3JlIGxpc3RlbmVyIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGN1cnJlbnRMaXN0ZW5lcnMgPSBudWxsO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG5cblxuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNykgOiBcIkFjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiBJbnN0ZWFkLCB0aGUgYWN0dWFsIHR5cGUgd2FzOiAnXCIgKyBraW5kT2YoYWN0aW9uKSArIFwiJy4gWW91IG1heSBuZWVkIHRvIGFkZCBtaWRkbGV3YXJlIHRvIHlvdXIgc3RvcmUgc2V0dXAgdG8gaGFuZGxlIGRpc3BhdGNoaW5nIG90aGVyIHZhbHVlcywgc3VjaCBhcyAncmVkdXgtdGh1bmsnIHRvIGhhbmRsZSBkaXNwYXRjaGluZyBmdW5jdGlvbnMuIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNC1zdG9yZSNtaWRkbGV3YXJlIGFuZCBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNi1hc3luYy1sb2dpYyN1c2luZy10aGUtcmVkdXgtdGh1bmstbWlkZGxld2FyZSBmb3IgZXhhbXBsZXMuXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg4KSA6ICdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuIFlvdSBtYXkgaGF2ZSBtaXNzcGVsbGVkIGFuIGFjdGlvbiB0eXBlIHN0cmluZyBjb25zdGFudC4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoOSkgOiAnUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG5cblxuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEwKSA6IFwiRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YobmV4dFJlZHVjZXIpKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyOyAvLyBUaGlzIGFjdGlvbiBoYXMgYSBzaW1pbGlhciBlZmZlY3QgdG8gQWN0aW9uVHlwZXMuSU5JVC5cbiAgICAvLyBBbnkgcmVkdWNlcnMgdGhhdCBleGlzdGVkIGluIGJvdGggdGhlIG5ldyBhbmQgb2xkIHJvb3RSZWR1Y2VyXG4gICAgLy8gd2lsbCByZWNlaXZlIHRoZSBwcmV2aW91cyBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgICAvLyB0aGUgbmV3IHN0YXRlIHRyZWUgd2l0aCBhbnkgcmVsZXZhbnQgZGF0YSBmcm9tIHRoZSBvbGQgb25lLlxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUkVQTEFDRVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG5cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnIHx8IG9ic2VydmVyID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTEpIDogXCJFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKG9ic2VydmVyKSArIFwiJ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9IC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgfSk7XG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICpcbiAqICoqV2UgcmVjb21tZW5kIHVzaW5nIGBjb25maWd1cmVTdG9yZWAgZnJvbSB0aGVcbiAqIGBAcmVkdXhqcy90b29sa2l0YCBwYWNrYWdlKiosIHdoaWNoIHJlcGxhY2VzIGBjcmVhdGVTdG9yZWA6XG4gKiAqKmh0dHBzOi8vcmVkdXguanMub3JnL2ludHJvZHVjdGlvbi93aHktcnRrLWlzLXJlZHV4LXRvZGF5KipcbiAqXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cblxudmFyIGxlZ2FjeV9jcmVhdGVTdG9yZSA9IGNyZWF0ZVN0b3JlO1xuXG4vKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cblxuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG5cbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuIFwiVGhlIFwiICsgYXJndW1lbnROYW1lICsgXCIgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcXFwiXCIgKyBraW5kT2YoaW5wdXRTdGF0ZSkgKyBcIlxcXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgXCIgKyAoXCJrZXlzOiBcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgfSk7XG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG4gIGlmIChhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLlJFUExBQ0UpIHJldHVybjtcblxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBcIlVuZXhwZWN0ZWQgXCIgKyAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMSA/ICdrZXlzJyA6ICdrZXknKSArIFwiIFwiICsgKFwiXFxcIlwiICsgdW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIgZm91bmQgaW4gXCIgKyBhcmd1bWVudE5hbWUgKyBcIi4gXCIpICsgXCJFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6IFwiICsgKFwiXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIuIFVuZXhwZWN0ZWQga2V5cyB3aWxsIGJlIGlnbm9yZWQuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTaGFwZShyZWR1Y2Vycykge1xuICBPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuICAgIHZhciBpbml0aWFsU3RhdGUgPSByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMikgOiBcIlRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uIFwiICsgXCJJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgXCIgKyBcImV4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgXCIgKyBcIm5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIFwiICsgXCJ5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5QUk9CRV9VTktOT1dOX0FDVElPTigpXG4gICAgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMykgOiBcIlRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIFwiICsgKFwiRG9uJ3QgdHJ5IHRvIGhhbmRsZSAnXCIgKyBBY3Rpb25UeXBlcy5JTklUICsgXCInIG9yIG90aGVyIGFjdGlvbnMgaW4gXFxcInJlZHV4LypcXFwiIFwiKSArIFwibmFtZXNwYWNlLiBUaGV5IGFyZSBjb25zaWRlcmVkIHByaXZhdGUuIEluc3RlYWQsIHlvdSBtdXN0IHJldHVybiB0aGUgXCIgKyBcImN1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsIFwiICsgXCJpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgXCIgKyBcImFjdGlvbiB0eXBlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZCwgYnV0IGNhbiBiZSBudWxsLlwiKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5cblxuZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGZpbmFsUmVkdWNlcnMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2FybmluZyhcIk5vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7IC8vIFRoaXMgaXMgdXNlZCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Qgd2FybiBhYm91dCB0aGUgc2FtZVxuICAvLyBrZXlzIG11bHRpcGxlIHRpbWVzLlxuXG4gIHZhciB1bmV4cGVjdGVkS2V5Q2FjaGU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcbiAgfVxuXG4gIHZhciBzaGFwZUFzc2VydGlvbkVycm9yO1xuXG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNoYXBlKGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2hhcGVBc3NlcnRpb25FcnJvciA9IGU7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIGlmIChzaGFwZUFzc2VydGlvbkVycm9yKSB7XG4gICAgICB0aHJvdyBzaGFwZUFzc2VydGlvbkVycm9yO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSk7XG5cbiAgICAgIGlmICh3YXJuaW5nTWVzc2FnZSkge1xuICAgICAgICB3YXJuaW5nKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9rZXkgPSBmaW5hbFJlZHVjZXJLZXlzW19pXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1tfa2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVbX2tleV07XG4gICAgICB2YXIgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuXG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE0KSA6IFwiV2hlbiBjYWxsZWQgd2l0aCBhbiBhY3Rpb24gb2YgdHlwZSBcIiArIChhY3Rpb25UeXBlID8gXCJcXFwiXCIgKyBTdHJpbmcoYWN0aW9uVHlwZSkgKyBcIlxcXCJcIiA6ICcodW5rbm93biB0eXBlKScpICsgXCIsIHRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXFxcIlwiICsgX2tleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQuIFwiICsgXCJUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuIFwiICsgXCJJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIik7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG5cbiAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoc3RhdGUpLmxlbmd0aDtcbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhbiBhY3Rpb24gY3JlYXRvciBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZGlzcGF0Y2ggd3JhcHBlZCBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNikgOiBcImJpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgYnV0IGluc3RlYWQgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihhY3Rpb25DcmVhdG9ycykgKyBcIicuIFwiICsgXCJEaWQgeW91IHdyaXRlIFxcXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCIgaW5zdGVhZCBvZiBcXFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCI/XCIpO1xuICB9XG5cbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZ1bmNzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYShiLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5cbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG5cbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTUpIDogJ0Rpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuICcgKyAnT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLicpO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2guYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHZvaWQgMCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0b3JlKSwge30sIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuLypcbiAqIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiAqIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiAqL1xuXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLiAnICsgJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcgKyAnWW91IGNhbiB1c2UgbG9vc2UtZW52aWZ5IChodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9sb29zZS1lbnZpZnkpIGZvciBicm93c2VyaWZ5ICcgKyAnb3Igc2V0dGluZyBtb2RlIHRvIHByb2R1Y3Rpb24gaW4gd2VicGFjayAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25jZXB0cy9tb2RlLykgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnQgeyBBY3Rpb25UeXBlcyBhcyBfX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzLCBhcHBseU1pZGRsZXdhcmUsIGJpbmRBY3Rpb25DcmVhdG9ycywgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlLCBjcmVhdGVTdG9yZSwgbGVnYWN5X2NyZWF0ZVN0b3JlIH07XG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xyXG5cclxuLy8g66Oo7Yq4IOumrOuTgOyEnFxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgLy8g7ISc67KEIOyCrOydtOuTnCDroIzrjZTrp4HsnYQg7JyE7ZW07IScIEhZRFJBVEUg7LaU6rCALCDsm5DrnpjripQgaW5kZXgg7JeG7Ja064+EIOuQqFxyXG4gIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhZRFJBVEVcIiwgYWN0aW9uKTtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1c2VyLFxyXG4gIHBvc3QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjsgLy8g7IKs6rCAIOydtO2Ome2KuFxyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuL3VzZXJcIjtcclxuXHJcbi8vIOyCrOqwgCDsnbTtjpntirhcclxuLy8gZGVsYXksIGRlYm91bmNlLCB0aHJvdHRsZSwgdGFrZUxhdGVzdCwgdGFrZUV2ZXJ5LCB0YWtlTGVhZGluZywgdGFrZU1heWJlXHJcblxyXG4vLyBhbGwg7J2AIOuwsOyXtOydhCDrsJvqs6Ag67Cw7Je07JWI7J2Y6rKD65Ok7J2EIOuPmeyLnOyXkCDsi6TtlontlbTspIxcclxuLy8gcHV0IOydgCBkaXNwYXRjaCDsl63tlaBcclxuLy8gdGFrZSDripQg7ZW064u5IOyalOyyreydtCDrk6TslrTsmKzrlYzquYzsp4Ag6riw64uk66as64qUIOqygywg64+Z6riwXHJcbi8vIHRha2VFdmVyeSB0YWtl7J2YIOu5hOuPmeq4sFxyXG4vLyB0YWtlTGF0ZXN0IO2BtOumrSDsi6TsiJgg67Cp7KeAICwg66eI7KeA66eJIOyalOyyreunjCDsi6TtlolcclxuLy8gZm9ya+uKlCDruYTrj5nquLAg7Zi47LacLCDtlajsiJjslYjsnZjqsoPrk6TsnYQg7Iuk7ZaJXHJcbi8vIGNhbGzsnYAg64+Z6riwIO2YuOy2nCwg7ZWo7IiY7JWI7J2Y6rKD65Ok7J2EIOyLpO2WiVxyXG4vLyBkZWxheSwgc2V0VGltZU91dCDqs7wg7Jet7ZWg7J20IOu5hOyKt+2VqFxyXG5cclxuLy8g7ISc67KE7JeQIOuhnOq3uOyduCDsmpTssq3snYQg67O064OEXHJcblxyXG4vLyBQb3N0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHBvc3RTYWdhKSwgZm9yayh1c2VyU2FnYSldKTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCB7XHJcbiAgYWxsLFxyXG4gIGRlbGF5LFxyXG4gIGZvcmssXHJcbiAgcHV0LFxyXG4gIHRha2VMYXRlc3QsXHJcbiAgdGhyb3R0bGUsXHJcbn0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBnZW5lcmF0ZUR1bW15UG9zdCxcclxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2FwaS9wb3N0c1wiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBnZW5lcmF0ZUR1bW15UG9zdCgxMCksXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0XCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGNvbnRlbnQ6IGFjdGlvbi5kYXRhLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKFwiL2FwaS9wb3N0XCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEZPTExPV19GQUlMVVJFLFxyXG4gIEZPTExPV19SRVFVRVNULFxyXG4gIEZPTExPV19TVUNDRVNTLFxyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICBVTkZPTExPV19TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG4vLyDroZzqt7jsnbhcclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dpblwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNhZ2EgbG9nSW5cIik7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDroZzqt7jslYTsm4NcclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dvdXRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8g7ZqM7JuQ6rCA7J6FXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlclwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDtjJTroZzsmrBcclxuZnVuY3Rpb24gZm9sbG93QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9mb2xsb3dcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdW5mb2xsb3dcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuXHJcbiAgICAvLyBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgLy8gZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgLy8gZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgIC8vIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICAvLyBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG5cclxuICAvLyDrr7jrk6Tsm6jslrRcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID1cclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgLy8g67Cw7Y+s7JqpIOuvuOuTpOybqOyWtFxyXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7IC8vIOqwnOuwnOyaqSDrr7jrk6Tsm6jslrRcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7IC8vIHNhZ2HshKTsoJVcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=