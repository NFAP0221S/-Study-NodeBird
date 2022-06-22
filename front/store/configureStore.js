import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
import rootSaga from "../sagas";

const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // if (typeof action === "function") {
    //   return action(dispatch, getState);
    // }
    console.log(action);
    return next(action);
  };

const configureStore = () => {
  const SagaMiddleware = createSagaMiddleware();
  // 미들웨어
  const middlewares = [SagaMiddleware, loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === "prodution"
      ? compose(applyMiddleware(...middlewares)) // 배포용 미들웨어
      : composeWithDevTools(applyMiddleware(...middlewares)); // 개발용 미들웨어
  const store = createStore(reducer, enhancer);
  store.sagaTask = SagaMiddleware.run(rootSaga); // saga설정
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
