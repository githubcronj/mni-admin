import { actionTypes } from "../../utils/constants";

const initialState: any = {
  login: JSON.parse(localStorage.getItem("_login") || "{}"),
  error: "",
  loading: false,
  token: localStorage.getItem("_tn"),
  profile: {},
  email: "",
  isChecked: false,
  isLoggedIn: sessionStorage.getItem("lst")
    ? sessionStorage.getItem("lst")
    : localStorage.getItem("lst"),
};

const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOGIN_INIT:
      return { ...state, loading: true };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        login: action.data,
        isLoggedIn: true,
        isChecked: action.isChecked,
      };
    case actionTypes.LOGIN_FAILED:
      return { ...state, isLoggedIn: false };

    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionTypes.FORGOT_PASSWORD:
      return { ...state, loading: true, error: "" };
    case actionTypes.FORGOT_PASSWORD_FAILED:

      return { ...state, error: action.err };
    default:
      return { ...state };
  }
};

export default auth;
