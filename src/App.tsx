import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "./utils/constants";
import MainLayout from "./utils/MainLayout";

const App: FC = () => {
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.isLoggedIn) {
      dispatch({ type: actionTypes.INIT_APP });
    }
  }, [auth.isLoggedIn]);

  return <MainLayout />;
};

export default App;
