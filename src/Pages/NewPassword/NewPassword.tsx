import React from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  FormGroup,
  Link,
} from "@mui/material";
import Textfield from "../../Common/Textfield/Textfield";
import logoImg from "../../Assets/images/logoImage.png";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import './NewPassword.css'

const NewPassword = () => {
  return (
    <Grid>
      <Grid container spacing={2} className="new-pwdPageGrid">
        <Grid item xs={12} sm={6} className="logoGrid">
          <img src={logoImg} style={{ maxWidth: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={6} className="formGrid">
          <Grid className="main-newpwd">
            <Typography className="panelHeading">New Password</Typography>
            <Typography className='subPanelHeading'>Enter your new password for your account</Typography>
            <FormControl  className="text-width">
              <Textfield
                label="New Password"
                placeholder="Enter your new password"
                type="password"
              />
              <Textfield
                label="Confirm Password"
                placeholder="Confirm your new password"
                type="password"
              />
              <ButtonComponent buttonType="submit">Confirm</ButtonComponent>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewPassword;
