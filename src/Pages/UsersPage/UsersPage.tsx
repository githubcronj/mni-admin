import {
  Box,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import Calendar from "../../Common/Calendar/Calendar";
import Checkbox from "@mui/material/Checkbox";
import "./Users.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TestimonialModals from "../../Common/Modals/TestimonialModals/TestimonialModals";
import BlogModals from "../../Common/Modals/TestimonialModals/BlogModals";
import EditTestimonial from "../AddNewTestimonial/AddNewTestimonial";
import EditTestimonialModal from "../../Common/Modals/TestimonialModals/EditTestimonialModal";
import EditBlogModal from "../../Common/Modals/TestimonialModals/EditBlogModal";
import { apiClient } from "../../utils/https";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function UsersPage() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [selected, setSelected] = React.useState<any[]>([]);
  const [userData, setUserData] = useState<any[]>([]);
  const [selectedBlogs, setSelectedBlogs] = React.useState<any[]>([]);
  const [id, setId] = useState({ pricing: "investor", loginImage: "investor" });

  useEffect(() => {
    apiClient.get(`/trendingStories`).then((res: any) => {
      setUserData(res.data.data);
    });
  }, []);

  useEffect(() => {
    apiClient.get(`/getAllTestimonials`).then((res: any) => {
      setTestimonials(res.data.data);
    });
  }, []);

  const handleDelete = () => {
    apiClient.delete(`deleteTestimonials/${selected}`).then((res) => {
      const newData = testimonials.filter(
        (item) => !selected.includes(item.uId)
      );
      setTestimonials(newData);
      setSelected([]);
    });
  };

  const handleCheckClick = (value: any) => {
    const selectedIndex = selected.indexOf(value);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, value);
    } else {
      newSelected = selected.filter((sel) => sel !== value);
    }
    setSelected(newSelected);
  };

  const handleDeleteBlogs = () => {
    apiClient.delete(`deleteBlogs/${selectedBlogs}`).then((res) => {
      const newData = userData.filter(
        (item) => !selectedBlogs.includes(item.blogId)
      );
      setUserData(newData);
      setSelectedBlogs([]);
    });
  };

  const handleCheckBlogClick = (value: any) => {
    const selectedIndex = selectedBlogs.indexOf(value);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedBlogs, value);
    } else {
      newSelected = selectedBlogs.filter((sel) => sel !== value);
    }
    setSelectedBlogs(newSelected);
  };
  return (
    <>
      <Box className="userspage">
        <Container>
          <Grid sx={{ padding: "10px 0px", marginTop: "20px" }} container>
            <Grid item xs={12} sm={6} md={8}>
              <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
                Pages
              </Typography>
            </Grid>
            <Grid item xs={9} sm={6} md={4}>
              {/* <Calendar /> */}
            </Grid>
          </Grid>
          <Grid
            sx={{
              padding: "10px 20px",
              marginTop: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "15px",
            }}
            container
            spacing={2}
          >
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                sx={{ paddingTop: "25px", paddingLeft: "50px" }}
                className="textBold"
              >
                Add or Edit Testimonial
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TestimonialModals
                testimonials={testimonials}
                handleCheckClick={handleCheckClick}
                handleDelete={handleDelete}
                selected={selected}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <EditTestimonialModal testimonials={testimonials} />

              {/* <Link to={"/edittestimonial"} style={{ textDecoration: "none" }}> */}
              {/* <ButtonComponent
                  children="edit"
                  customStyle={{ color: "#FF9A33", backgroundColor: "#ffffff" }}
                /> */}
              {/* </Link> */}
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Link
                to={"/addnewtestimonial"}
                style={{ textDecoration: "none" }}
              >
                <ButtonComponent children="Add New" />
              </Link>
            </Grid>
          </Grid>
          <Grid
            sx={{
              padding: "10px 20px",
              marginTop: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "15px",
            }}
            container
            spacing={2}
          >
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                sx={{ paddingTop: "25px", paddingLeft: "50px" }}
                className="textBold"
              >
                Add or Edit Blog
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <BlogModals
                userData={userData}
                handleCheckClick={handleCheckBlogClick}
                handleDelete={handleDeleteBlogs}
                selected={selectedBlogs}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <EditBlogModal blogs={userData} />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Link to={"/add-blog-page"} style={{ textDecoration: "none" }}>
                <ButtonComponent children="Add New" />
              </Link>
            </Grid>
          </Grid>
          <Grid
            sx={{
              padding: "10px 20px",
              marginTop: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "15px",
            }}
            container
            spacing={2}
          >
            <Grid sx={{ marginTop: "22px" }} item xs={12} sm={12} md={6}>
              <Box
                className="loginbox"
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Typography sx={{ marginTop: "10px" }} className="textBold">
                  Pricing Plan
                </Typography>

                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="pricing"
                    value={id.pricing}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setId({ ...id, [e.target.name]: e.target.value })
                    }
                  >
                    <FormControlLabel
                      value="investor"
                      control={<Radio />}
                      label="Investor"
                    />
                    <FormControlLabel
                      value="startup"
                      control={<Radio />}
                      label="Startup"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}></Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Box>
                <Link
                  to={`/editpricingplan/${id.pricing}`}
                  style={{ textDecoration: "none" }}
                >
                  <ButtonComponent children="Edit" />
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Grid
            sx={{
              padding: "10px 20px",
              marginTop: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "15px",
            }}
            container
            spacing={2}
          >
            <Grid sx={{ marginTop: "22px" }} item xs={12} sm={12} md={6}>
              <Box
                className="loginbox"
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography sx={{ marginTop: "10px" }} className="textBold">
                  Login Image
                </Typography>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="loginImage"
                    value={id.loginImage}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setId({ ...id, [e.target.name]: e.target.value })
                    }
                  >
                    <FormControlLabel
                      value="investor"
                      control={<Radio />}
                      label="Investor"
                    />
                    <FormControlLabel
                      value="startup"
                      control={<Radio />}
                      label="Startup"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}></Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Link
                to={`/editloginimage/${id.loginImage}`}
                style={{ textDecoration: "none" }}
              >
                <ButtonComponent children="Edit" />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
