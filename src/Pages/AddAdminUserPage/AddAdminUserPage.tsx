import {
  Avatar,
  Box,
  Container,
  FormControl,
  Grid,
  Typography,
  FormHelperText,
  Button,
  TextField,
  MenuItem,
  InputLabel,
} from "@mui/material";
import arroww from "../../Assets/images/arroww.svg";
import adminimg from "../../Assets/images/adminimg.svg";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import Textfield from "../../Common/Textfield/Textfield";
import "./AddAdminUserPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { validate } from "validate.js";
import { apiClient } from "../../utils/https";
import { ADD_TEST, ADD_USER } from "../../utils/validations";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";
import Selectfield from "../../Common/Selectfield/SelectField";
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
export default function AddAdminUserPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    profilePicture: "",
  });
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    name: [],
    email: [],
    password: [],
    confirmPassword: [],
    role: [],
  });

  const handleSubmit = (e: any) => {
    let errors = validate(form, ADD_USER);
    setErrors({ ...errors });
    if (!errors) {
      const formData = new FormData();
      let key: keyof typeof form;
      for (key in form) {
        formData.append(key, form[key]);
      }
      apiClient
        .post("createUser", formData)
        .then((res: any) => {
          setOpen(true);
          setTimeout(() => {
            navigate("/user-management"); // count is 0 here
          }, 1000);
        })
        .catch((err: any) => {
          toast.error(err.message);
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
      <Box className="editdetailspage">
        <Container>
          <Link to={"/user-management"} style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", padding: "25px" }}>
              <img src={arroww} alt="arrow" />

              <Typography
                sx={{ fontSize: "25px", marginLeft: "5px", color: "#010101" }}
                className="textBold"
              >
                Add Admin User
              </Typography>
            </Box>
          </Link>
          <Box sx={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
            <Grid container>
              <Grid sx={{ padding: "50px" }} xs={12} sm={12} md={6}>
                <Box className="btnbox">
                  <Avatar
                    className="adminimg"
                    src={image ? image : "/broken-image.jpg"}
                  />
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="primary"
                      component="label"
                      sx={{
                        backgroundColor: "#ffffff",
                        color: "black",
                        border: "1px solid black",
                        borderRadius: "10px",
                        height: "47px",
                        width: "194px",
                        position: "absolute",
                        left: "65px",
                        bottom: "0px",
                        textTransform: "none",
                      }}
                    >
                      Add a Profile Picture
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
                  placeholder="Enter the name of the user"
                  onChange={(e: any) => handleChange(e)}
                  name="name"
                  value={form.name}
                />
                {errors ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.name ? errors.name : ""}
                  </FormHelperText>
                ) : null}
                <Textfield
                  label="Email"
                  type="email"
                  placeholder="Enter the email of the user"
                  onChange={(e: any) => handleChange(e)}
                  name="email"
                  value={form.email}
                />
                {errors ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.email ? errors.email : ""}
                  </FormHelperText>
                ) : null}
                <Textfield
                  label="Password"
                  type="password"
                  placeholder="Enter the password"
                  onChange={(e: any) => handleChange(e)}
                  name="password"
                  value={form.password}
                />
                {errors ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.password ? errors.password : ""}
                  </FormHelperText>
                ) : null}

                <Textfield
                  label="Confirm Password"
                  type="password"
                  placeholder="Re-Enter the password"
                  onChange={(e: any) => handleChange(e)}
                  name="confirmPassword"
                  value={form.confirmPassword}
                />
                {errors ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.confirmPassword ? errors.confirmPassword : ""}
                  </FormHelperText>
                ) : null}
                <Selectfield
                  label="Role"
                  onChange={(e: any) => handleChange(e)}
                  name="role"
                  value={form.role}
                  options={["Admin", "SuperAdmin", "Manager"]}
                />

                <Grid sx={{ paddingTop: "20px" }} container spacing={2}>
                  <Grid xs={12} sm={6} md={4}>
                    <ButtonComponent
                      classNames="savechangebtn"
                      children="Add User"
                      handleClick={handleSubmit}
                      isDisabled={false}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} md={4}>
                    <Link
                      to={"/user-management"}
                      style={{ textDecoration: "none" }}
                    >
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
