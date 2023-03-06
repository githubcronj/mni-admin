import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/material";
import arroww from "../../Assets/images/arroww.svg";
import editTestimonial from "../../Assets/images/editTestimonial.png";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import Textfield from "../../Common/Textfield/Textfield";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditTestimonial.css";
import ImgchangeModal from "../../Common/Modals/ImgchangeModal/ImgchangeModal";
import { apiClient } from "../../utils/https";
import validate from "validate.js";
import { ADD_TEST } from "../../utils/validations";
import SucessModal from "../../Common/Modals/ImgchangeModal/SucessModal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

type RouteParams = {
  id: string;
};

export default function EditTestimonial() {
  const { id } = useParams<RouteParams>(); //to get id from url
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    designation: "",
    testimonialContent: "",
    profilePicture: "",
  });
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState("/broken-image.jpg");
  const handleClose = () => setOpen(false);

  const [errors, setErrors] = useState({
    name: [],
    companyName: [],
    designation: [],
    testimonialContent: [],
  });

  let navigate = useNavigate();

  useEffect(() => {
    apiClient.get(`getTestimonialById/${id}`).then((res) => {
      setForm(res.data.data);
      setImage(res.data.data.profilePicture);
    });
  }, []);

  const handleSubmit = (e: any) => {
    let errors = validate(form, ADD_TEST);
    setErrors({ ...errors });
    if (!errors) {
      const formData = new FormData();
      let key: keyof typeof form;
      for (key in form) {
        formData.append(key, form[key]);
      }
      apiClient.put(`editTestimonials/${id}`, formData).then((res: any) => {
        setOpen(true);
        setTimeout(() => {
          navigate("/pages");
        }, 1000);
      });
    }
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeImage = (e: any) => {
    setForm({ ...form, profilePicture: e.target.files[0] });
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <Box className="edittestimonialspage">
        <Container>
          <Link to={"/pages"} style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", padding: "25px" }}>
              <img src={arroww} alt="arrow" />

              <Typography
                sx={{ fontSize: "24px", color: "#000000", marginLeft: "10px" }}
                className="textBold"
              >
                Edit Testimonial
              </Typography>
            </Box>
          </Link>
          <Box sx={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
            <Grid container>
              <Grid sx={{ padding: "50px" }} xs={12} sm={12} md={6}>
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
                      Change Image
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
              <Grid sx={{ padding: "10px 20px" }} xs={12} sm={12} md={6}>
                <Textfield
                  label="Name"
                  placeholder="Enter the name"
                  name="name"
                  onChange={(e: any) => handleChange(e)}
                  value={form.name}
                />
                {errors ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.name ? errors.name : ""}
                  </FormHelperText>
                ) : null}
                <Grid container spacing={2}>
                  <Grid sx={{ margin: "auto" }} xs={12} sm={12} md={6}>
                    <Textfield
                      label="Company Name"
                      placeholder="Enter the company name"
                      name="companyName"
                      onChange={(e: any) => handleChange(e)}
                      value={form.companyName}
                    />
                    {errors ? (
                      <FormHelperText sx={{ color: "red" }}>
                        {errors.companyName ? errors.companyName : ""}
                      </FormHelperText>
                    ) : null}
                  </Grid>
                  <Grid sx={{ margin: "auto" }} xs={12} sm={12} md={5}>
                    <Textfield
                      label="Designation"
                      placeholder="Enter the designation"
                      name="designation"
                      onChange={(e: any) => handleChange(e)}
                      value={form.designation}
                    />
                    {errors ? (
                      <FormHelperText sx={{ color: "red" }}>
                        {errors.designation ? errors.designation : ""}
                      </FormHelperText>
                    ) : null}
                  </Grid>
                </Grid>

                <Textfield
                  label="Testimonial Content"
                  placeholder="Enter the testimonial content"
                  name="testimonialContent"
                  onChange={(e: any) => handleChange(e)}
                  value={form.testimonialContent}
                />
                {errors ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.testimonialContent ? errors.testimonialContent : ""}
                  </FormHelperText>
                ) : null}
                <Grid sx={{ padding: "20px 10px" }} container spacing={2}>
                  <Grid xs={12} sm={6} md={4}>
                    <SucessModal
                      text="All changes saved!"
                      btntext="Save Changes"
                      onClick={handleSubmit}
                      errors={errors}
                      handleClose={handleClose}
                      open={open}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} md={4}>
                    <Link to={"/pages"} style={{ textDecoration: "none" }}>
                      <ButtonComponent
                        classNames="discardbtn"
                        children="Cancel"
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
  );
}
