import { all, fork } from "redux-saga/effects"; // 사가 이펙트

import postSaga from "./post";
import userSaga from "./user";

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

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
