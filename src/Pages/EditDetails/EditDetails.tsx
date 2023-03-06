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
import { FC, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { validate } from "validate.js";
import arroww from "../../Assets/images/arroww.svg";
import profilePicture from "../../Assets/images/profilePicture.png";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import SucessModal from "../../Common/Modals/ImgchangeModal/SucessModal";
import Textfield from "../../Common/Textfield/Textfield";
import { apiClient } from "../../utils/https";
import { EDIT_USER } from "../../utils/validations";
import "./EditDetails.css";
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

interface EditDetailsProps {
  EditDetail: any;
}

type RouteParams = {
  id: string;
};

const EditDetails: FC<EditDetailsProps> = ({ EditDetail }) => {
  const { id } = useParams<RouteParams>(); //to get id from url
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    profilePicture: "",
  });
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({
    name: [],
    email: [],
    role: [],
  });
  let navigate = useNavigate();

  const handleClose = () => setOpen(false);

  useEffect(() => {
    apiClient.get(`getUserById/${id}`).then((res) => {
      setForm(res.data.data);
      setImage(res.data.data.profilePicture);
    });
  }, []);

  const handleSubmit = (e: any) => {
    let errors = validate(form, EDIT_USER);
    setErrors({ ...errors });

    if (!errors) {
      const formData = new FormData();
      let key: keyof typeof form;
      for (key in form) {
        formData.append(key, form[key]);
      }

      apiClient
        .put(`updateUser/${id}`, formData)
        .then((res: any) => {
          setOpen(true);
          setTimeout(() => {
            navigate("/user-management");
          }, 2000);
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
                sx={{ fontSize: "25px", marginLeft: "15px", color: "#101010" }}
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

                  {/* <ButtonComponent
                    classNames="editchangeProfilebtn"
                    children="Change Profile Picture"
                  /> */}
                </Box>
              </Grid>
              <Grid sx={{ padding: "10px" }} xs={12} sm={12} md={6}>
                <Textfield
                  label="Name"
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
                  onChange={(e: any) => handleChange(e)}
                  name="email"
                  value={form.email}
                />
                {errors ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.email ? errors.email : ""}
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
                    <Link
                      to={"/user-management"}
                      style={{ textDecoration: "none" }}
                    >
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
  );
};
export default EditDetails;
