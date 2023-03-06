import { type } from "os";
import { call, put } from "redux-saga/effects";
import { actionTypes } from "../../utils/constants";
import { apiAuth } from "../../utils/https";
import { toast } from "react-toastify";

export interface ResponseGenerator {
  value?: any;
  status?: string;
  tokenData?: any;
  data?: any;
  message?: any;
  msg?: any;
}

export function* login(action: any) {
  try {
    const response: ResponseGenerator = yield apiAuth.post(
      "login?key=admin",
      action.payload
    );
    const { tokenData, data } = response.data;
    yield call([localStorage, "setItem"], "_tn", tokenData);
    if (action.isChecked) {
      yield call([localStorage, "setItem"], "lst", JSON.stringify(true));
    } else {
      yield call([sessionStorage, "setItem"], "lst", JSON.stringify(true));
    }

    yield call([localStorage, "setItem"], "_login", JSON.stringify(data));

    yield put({
      type: actionTypes.LOGIN_SUCCESS,
      token: tokenData,
      data: data,
      isChecked: action.isChecked,
    });
  } catch (err: any) {
    toast.error(err.message);
    yield put({
      type: actionTypes.LOGIN_FAILED,
    });
  }
}

export function* logout(action: any) {
  try {
    yield call([localStorage, "clear"]);
    yield call([sessionStorage, "clear"]);
  } catch (err) {
    yield put({
      type: actionTypes.LOGIN_FAILED,
    });
  }
}

export function* forgetpwd(action: any) {
  try {
    const response: ResponseGenerator = yield apiAuth.put(
      `/forgotPassword?key=admin`,
      action.payload
    );
    toast.success("email send successfully");
  } catch (err: any) {
    toast.error(err.message);
    yield put({
      type: actionTypes.FORGOT_PASSWORD_FAILED,
      err: err.message,
    });
  }
}
