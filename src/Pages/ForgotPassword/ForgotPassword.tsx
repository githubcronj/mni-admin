import { FormControl, FormHelperText, Grid, Typography } from "@mui/material";
import "./ForgotPassword.css";
import Textfield from "../../Common/Textfield/Textfield";
import logoImg from "../../Assets/images/logoImage.png";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import { useSelector, useDispatch } from "react-redux";
import { actionTypes } from "../../utils/constants";
import { useState } from "react";
import { Email } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";
import validate from "validate.js";
import { FORGOT_PASSWORD } from "../../utils/validations";
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [errors, setErrors] = useState({ email: [] });

  const auth = useSelector((state: any) => state.auth);
  let navigate = useNavigate();

  const handleChange = (e: any) => {
    setemail(e.target.value);
  };
  const handleGetPassword = (e: any) => {
    e.preventDefault();
    let errors = validate({ email: email }, FORGOT_PASSWORD);
    setErrors({ ...errors });

    if (!errors) {
      dispatch({
        type: actionTypes.FORGOT_PASSWORD,
        payload: { email: email },
      });
    }
  };

  return (
    <Grid>
      <Grid container spacing={2} className="loginPageGrid">
        <Grid item xs={12} sm={6} className="logoGrid">
          <img src={logoImg} style={{ maxWidth: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={6} className="formGrid">
          <Grid>
            <Typography className="panelHeading">Forgot Password</Typography>
            <Typography sx={{ color: "#6D6D6D", mt: 2 }}>
              We'll send you a link to rest your password
            </Typography>
            <FormControl>
              <Textfield
                name="email"
                type="email"
                value={email}
                placeholder="Enter your Email Address "
                onChange={(e: any) => handleChange(e)}
              />
              {errors ? (
                <FormHelperText sx={{ color: "red" }}>
                  {errors.email ? errors.email : ""}
                </FormHelperText>
              ) : null}
              {/* <FormHelperText sx={{ color: "red" }}>{autherr}</FormHelperText> */}

              <ButtonComponent
                width="350px"
                buttonType="submit"
                handleClick={handleGetPassword}
              >
                Send Link
              </ButtonComponent>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ForgotPassword;
