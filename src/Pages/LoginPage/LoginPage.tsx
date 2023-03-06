import {
  FormControl,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./LoginPage.css";
import Textfield from "../../Common/Textfield/Textfield";
import logoImg from "../../Assets/images/logoImage.png";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import { actionTypes } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import validate from "validate.js";
import { LOGIN } from "../../utils/validations";

interface LoginProps {
  email?: any;
  password?: any;
}
const LoginPage: React.FC<LoginProps> = ({ email, password }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: [], password: [] });
  const [isChecked, setIsChecked] = useState(false);
  const auth = useSelector((state: any) => state.auth);

  let redirect = null;

  if (auth.isLoggedIn) {
    redirect = <Navigate to="/" />;
  }

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    let errors = validate(form, LOGIN);
    setErrors({ ...errors });
    if (!errors)
      dispatch({
        type: actionTypes.LOGIN_INIT,
        payload: form,
        isChecked: isChecked,
      });
  };

  return (
    <>
      {redirect}
      <Grid>
        <Grid container spacing={2} className="loginPageGrid">
          <Grid item xs={12} sm={6} className="logoGrid">
            <img src={logoImg} style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid item xs={12} sm={6} className="formGrid">
            <Grid>
              <Typography className="panelHeading">
                Admin Panel Login
              </Typography>
              <FormControl
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleLogin(e);
                  }
                }}
              >
                <Textfield
                  id="email"
                  placeholder="Enter your email address"
                  type="email"
                  value={form.email}
                  name="email"
                  onChange={handleChange}
                />
                {errors ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.email ? errors.email : ""}
                  </FormHelperText>
                ) : null}

                <Textfield
                  id="password"
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value={form.password}
                  name="password"
                  onChange={handleChange}
                />
                {errors ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.password ? errors.password : ""}
                  </FormHelperText>
                ) : null}
                <Grid sx={{ display: "flex", mt: 3 }}>
                  <FormGroup>
                    <FormControlLabel
                      sx={{ color: "#6D6D6D" }}
                      control={
                        <Checkbox
                          sx={{
                            "&.Mui-checked": {
                              color: "#FF9A33",
                            },
                          }}
                          onChange={(e) => setIsChecked(e.target.checked)}
                          value={isChecked}
                        />
                      }
                      label="Stay Signed In"
                    />
                  </FormGroup>
                  {/* <Typography className="forgotPassword">Forgot Password?</Typography> */}
                  <Link to="/forgot-password" className="forgotPassword">
                    Forgot Password?
                  </Link>
                </Grid>
                <Link to="/Dashboard" style={{ textDecoration: "none" }}>
                  <ButtonComponent
                    handleClick={handleLogin}
                    buttonType="submit"
                  >
                    Log In
                  </ButtonComponent>
                </Link>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default LoginPage;
