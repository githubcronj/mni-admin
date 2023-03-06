import { takeLatest, all } from "redux-saga/effects";
import * as authSagas from "./auth";
import { actionTypes } from "../../utils/constants";
import * as appSagas from "./app";

export function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOGIN_INIT, authSagas.login),
    takeLatest(actionTypes.LOGOUT, authSagas.logout),
    takeLatest(actionTypes.FORGOT_PASSWORD, authSagas.forgetpwd),
    takeLatest(actionTypes.INIT_APP, appSagas.initApp),
  ]);
}
