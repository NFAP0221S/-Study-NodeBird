import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";
import rootSaga from "../sagas";

const configureStore = (context) => {
  console.log(context);

  // 미들웨어
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares)) // 배포용 미들웨어
      : composeWithDevTools(applyMiddleware(...middlewares)); // 개발용 미들웨어
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga); // saga설정
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
