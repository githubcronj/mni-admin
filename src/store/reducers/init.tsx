import { actionTypes } from "../../utils/constants";

const initialState = {
  main: {
    investor: [],
    startUps: [],
  },
};

const init = (state = initialState, action: any) => {

  switch (action.type) {
    case actionTypes.INIT_APP_FINISH:
      return {
        ...state,
        main: action.topStartUps,
      };

    default:
      return { ...state };
  }
};
export default init;
