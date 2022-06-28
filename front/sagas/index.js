import { all, fork } from "redux-saga/effects"; // 사가 이펙트
import axios from "axios";

import postSaga from "./post";
import userSaga from "./user";

// base url 설정
axios.defaults.baseURL = "http://localhost:3065";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
