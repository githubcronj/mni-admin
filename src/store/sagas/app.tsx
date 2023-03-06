import { call, put } from "redux-saga/effects";
import { actionTypes } from "../../utils/constants";
import { apiAuth } from "../../utils/https";

export interface ResponseGenerator {
  topStartUps?: any;
  status?: string;
  data?: any;
}

export function* initApp() {
  try {
    const response: ResponseGenerator = yield apiAuth.get("topStartups");

    const topStartUps = response.data;

    yield put({
      type: actionTypes.INIT_APP_FINISH,
      topStartUps,
    });
  } catch (err) {}
}
