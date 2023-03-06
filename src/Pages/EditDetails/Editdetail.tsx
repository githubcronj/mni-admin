import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import { FC } from "react";
import arroww from "../../Assets/images/arroww.svg";
import profilepicture2 from "../../Assets/images/profilepicture2.png";

import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import Textfield from "../../Common/Textfield/Textfield";
import "./EditDetails.css";
import { Link, useNavigate } from "react-router-dom";
import ImgchangeModal from "../../Common/Modals/ImgchangeModal/ImgchangeModal";
import { apiClient } from "../../utils/https";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      dark: "#fff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

export default function Editdetail() {
  const userId = useSelector((state: any) => state.auth.login.userId);
  const [form, setForm] = useState({
    name: "",
    email: "",
    profilePicture: "",
  });
  const navigate = useNavigate();

  const [image, setImage] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    apiClient.get(`/getProfileAdmin?id=${userId}`).then((res: any) => {
      setForm(res.data.data);
      setImage(res.data.data.profilePicture);
    });
  }, []);

  const handleChangeImage = (e: any) => {
    setForm({ ...form, profilePicture: e.target.files[0] });
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e: any) => {
    const formData = new FormData();
    let key: keyof typeof form;
    for (key in form) {
      formData.append(key, form[key]);
    }
    apiClient
      .put(`updateProfileAdmin?id=${userId}`, formData)
      .then((res: any) => {
        setTimeout(() => {
          navigate("/setting"); // count is 0 here
        }, 1000);
      })
      .catch((err: any) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      {" "}
      <div>
        <Box className="editdetailspage">
          <Container>
            <Link to={"/setting"} style={{ textDecoration: "none" }}>
              <Box sx={{ display: "flex", padding: "25px" }}>
                <img src={arroww} alt="arrow" />

                <Typography
                  sx={{
                    fontSize: "25px",
                    marginLeft: "15px",
                    color: "#101010",
                  }}
                  className="textBold"
                >
                  Edit Details
                </Typography>
              </Box>
            </Link>
            <Box sx={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
              <Grid container>
                <Grid className="editDetailsBox" xs={12} sm={12} md={6}>
                  <Box className="btnbox">
                    <Avatar
                      sx={{ width: "328px", height: "328px" }}
                      src={image ? image : "/broken-image.jpg"}
                    />
                    <ThemeProvider theme={theme}>
                      <Button
                        variant="contained"
                        color="primary"
                        component="label"
                        sx={{
                          backgroundColor: "#ffffff",
                          color: "#ff9a33",
                          border: "1px solid #ff9a33",
                          borderRadius: "10px",
                          height: "47px",
                          width: "194px",
                          position: "absolute",
                          left: "65px",
                          bottom: "0px",
                          textTransform: "none",
                        }}
                      >
                        Change Profile Picture
                        <input
                          hidden
                          accept="image/*"
                          name="profilePicture"
                          multiple
                          type="file"
                          onChange={(e: any) => handleChangeImage(e)}
                        />
                      </Button>
                    </ThemeProvider>
                  </Box>
                </Grid>
                <Grid sx={{ padding: "10px" }} xs={12} sm={12} md={6}>
                  <Textfield
                    label="Name"
                    name="name"
                    onChange={(e: any) => handleChange(e)}
                    value={form.name}
                  />
                  <Textfield
                    disabled
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                  />

                  <Grid sx={{ paddingTop: "20px" }} container spacing={2}>
                    <Grid xs={12} sm={6} md={4}>
                      <ImgchangeModal
                        btntext="Save Changes"
                        text="All changes saved!"
                        onClick={handleSubmit}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                      <Link to={"/setting"} style={{ textDecoration: "none" }}>
                        <ButtonComponent
                          classNames="discardbtn"
                          children="Discard"
                        />
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </div>
    </div>
  );
}
