import {
  all,
  fork,
  call,
  put,
  takeEvery,
  takeLatest,
  delay,
} from "redux-saga/effects"; // 사가 이펙트
import axios from "axios";

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

// 로그인
function logInAPI(data) {
  return axios.post("/api/login", data);
}

// const l = logIn({ type: "LOG_IN_REQUEST", data: { id: "zerocho@gmail.com" } });
// l.next();
// l.next();

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(2000); // 가짜
    yield put({
      type: "LOG_IN_SUCCESS",
      //   data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

// 로그아웃
function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: "LOG_OUT_SUCCESS",
      //   data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

// Post
function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: "ADD_POST_SUCCESS",
      //   data: result.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogout() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}
function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  yield all([
    fork(watchLogin), // call
    fork(watchLogout),
    fork(watchAddPost),
  ]);
}
