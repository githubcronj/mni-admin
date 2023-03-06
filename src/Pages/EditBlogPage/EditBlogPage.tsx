import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  FormHelperText,
} from "@mui/material";
import "./EditBlogPage.css";
import arroww from "../../Assets/images/arroww.svg";
import uploadSize from "../../Assets/images/uploadSize.svg";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { useDropzone } from "react-dropzone";
import { apiClient } from "../../utils/https";
import SucessModal from "../../Common/Modals/ImgchangeModal/SucessModal";
import { ADD_BLOG } from "../../utils/validations";
import validate from "validate.js";
import { toast } from "react-toastify";

type RouteParams = {
  id: string;
};
const fileTypes = ["JPG", "PNG", "GIF"];

const EditBlogPage = (props: any) => {
  const { id } = useParams<RouteParams>(); //to get id from url
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    heading: "",
    author: "",
    description: "",
    link: "",
    profilePicture: "",
  });
  const [image, setImage] = useState("");

  const handleChangeImage = (e: any) => {
    setForm({ ...form, profilePicture: e.target.files[0] });
    setImage(URL.createObjectURL(e.target.files[0]));
  };


  const [errors, setErrors] = useState({
    heading: [],
    author: [],
    description: [],
    link: [],
  });
  let navigate = useNavigate();

  const handleClose = () => setOpen(false);

  useEffect(() => {
    apiClient.get(`getInBlog/${id}`).then((res) => {
      setImage(res.data.data.profilePicture);
      setForm(res.data.data);
    });
  }, []);

  const handleSubmit = (e: any) => {
    let errors = validate(form, ADD_BLOG);
    setErrors({ ...errors });
    if (!errors) {
      const formData = new FormData();
      let key: keyof typeof form;
      for (key in form) {
        formData.append(key, form[key]);
      }
      apiClient
        .put(`updateBlogs/${id}`, formData)
        .then((res: any) => {
          setOpen(true);
          setTimeout(() => {
            navigate("/pages"); // count is 0 here
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

  return (
    <div>
      <Box className="editblog-page">
        <Container>
          <Link to={"/pages"} style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", padding: "30px" }}>
              <img src={arroww} alt="arrow" />

              <Typography
                sx={{ fontSize: "25px", marginLeft: "15px", color: "#000000" }}
                className="textBold"
              >
                Edit Blog
              </Typography>
            </Box>
          </Link>
          {/* --------------main container-------------------------- */}
          <Box sx={{ backgroundColor: " #ffffff", borderRadius: "10px", p: 3 }}>
            <Grid container>
              <Grid lg={12} md={12} sm={12} xs={12}>
                <Box
                  sx={{
                    border: "2px dashed #8D877F80",
                    borderRadius: "10px",
                    p: 4,
                    marginBottom: "20px",
                  }}
                >
                  <Box className="eb-img-position">
                    <img
                      width="220"
                      height="220"
                      src={image ? image : uploadSize}
                      alt="uploadSize"
                    />
                    <Typography>Select a file or drag and drop here</Typography>
                    <Typography className="eb-txtclr">
                      JPG, PNG or PDF, file size no more than 10MB
                    </Typography>
                    <Button
                      variant="outlined"
                      color="warning"
                      component="label"
                      sx={{ textTransform: "none", borderRadius: "7px" }}
                    >
                      Select File
                      <input
                        hidden
                        accept="image/*"
                        multiple
                        type="file"
                        onChange={(e: any) => handleChangeImage(e)}
                      />
                    </Button>

                    {/* <FileUploader handleChange={handleChangeImg} name="file" label="Select File" multiple={false} /> */}
                  </Box>
                </Box>
              </Grid>
              {/*  ------------------------------textfield part----------------------*/}
              <Grid sx={{ padding: "20px" }} lg={6} md={6} sm={12} xs={12}>
                <Typography className="eb-headingstyle">Heading</Typography>
                <Box
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "100%" },
                  }}
                >
                  <TextField
                    type="text"
                    multiline
                    name="heading"
                    value={form.heading}
                    onChange={(e: any) => handleChange(e)}
                  />
                  {errors ? (
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.heading ? errors.heading : ""}
                    </FormHelperText>
                  ) : null}
                </Box>
              </Grid>
              <Grid sx={{ padding: "20px" }} lg={6} md={6} sm={12} xs={12}>
                <Typography className="eb-headingstyle">Author</Typography>
                <Box
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "100%" },
                  }}
                >
                  <TextField
                    type="text"
                    multiline
                    name="author"
                    value={form.author}
                    onChange={(e: any) => handleChange(e)}
                  />
                  {errors ? (
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.author ? errors.author : ""}
                    </FormHelperText>
                  ) : null}
                </Box>
              </Grid>
              <Grid sx={{ padding: "10px" }} lg={6} md={6} sm={12} xs={12}>
                <Typography className="eb-headingstyle">Description</Typography>
                <Box
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "100%" },
                  }}
                >
                  <TextField
                    type="text"
                    multiline
                    name="description"
                    value={form.description}
                    onChange={(e: any) => handleChange(e)}
                  />
                  {errors ? (
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.description ? errors.description : ""}
                    </FormHelperText>
                  ) : null}
                </Box>
              </Grid>
              <Grid sx={{ padding: "10px" }} lg={6} md={6} sm={12} xs={12}>
                <Typography className="eb-headingstyle">Link</Typography>
                <Box
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "100%" },
                  }}
                >
                  <TextField
                    type="text"
                    multiline
                    name="link"
                    value={form.link}
                    onChange={(e: any) => handleChange(e)}
                  />
                  {errors ? (
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.link ? errors.link : ""}
                    </FormHelperText>
                  ) : null}
                </Box>
              </Grid>
              {/* -----------------sub grid component button ----------------- */}

              <Grid
                container
                sx={{ paddingTop: "10px" }}
                columnSpacing={"20px"}
              >
                <Grid lg={8} md={7}></Grid>
                <Grid xs={12} sm={7} md={3} lg={2.5}>
                  <SucessModal
                    text="All changes saved!"
                    btntext="Save Changes"
                    onClick={handleSubmit}
                    errors={errors}
                    handleClose={handleClose}
                    open={open}
                  />
                </Grid>
                <Grid xs={12} sm={5} md={2} lg={1.5}>
                  <Link to={"/pages"} style={{ textDecoration: "none" }}>
                    <ButtonComponent
                      classNames="eb-cancelbtn"
                      children="Cancel"
                    />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default EditBlogPage;
