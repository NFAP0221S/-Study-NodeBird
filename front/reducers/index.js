import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

// 루트 리듀서
const rootReducer = combineReducers({
  // 서버 사이드 렌더링을 위해서 HYDRATE 추가, 원래는 index 없어도 됨
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
