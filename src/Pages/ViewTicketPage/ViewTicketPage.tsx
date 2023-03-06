import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import arroww from "../../Assets/images/arroww.svg";
import "./ViewTicketPage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiClient } from "../../utils/https";
import { toast } from "react-toastify";

type RouteParams = {
  id: string;
};

const ViewTicketPage = () => {
  const { id } = useParams<RouteParams>();
  const [form, setForm] = useState({
    name: "",
    uId: "",
    status: "",
    date: "",
    subject: "",
    description: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    apiClient.get(`getTicket/${id}`).then((res) => {
      setForm(res.data.data);
    });
  }, []);



  const handleTicketResolve = () => {
    apiClient.put(`updateSupportTicket/${form?.uId}`).then((res: any) => {
      toast.success("Ticket is resolved");
      navigate("/support-tickets");
    }).catch((error:any) => {
      toast.error(error)
    })
  };

  return (
    <div>
      <Box className="edittestimonialspage">
        <Container>
          <Link to={"/support-tickets"} style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", padding: "30px" }}>
              <img src={arroww} alt="arrow" />

              <Typography
                sx={{ fontSize: "25px", marginLeft: "15px", color: "#000000" }}
                className="textBold"
              >
                View Ticket
              </Typography>
            </Box>
          </Link>
          {/* ---------white Box Container------- */}
          <Box
            sx={{
              backgroundColor: " #ffffff",
              borderRadius: "10px",
              p: { sm: 1, lg: 3 },
            }}
          >
            <Grid container columnSpacing={2} py={5} px={3}>
              <Grid item lg={2} md={4} sm={6} xs={12}>
                <Typography
                  className="vt-heading-Style vt-headpadding"
                  sx={{ fontSize: "18px" }}
                >
                  Ticket ID-#{form.uId}
                </Typography>
              </Grid>
              <Grid item lg={10} md={8} sm={6} xs={12}>
                <Typography
                  className="vt-pendingtext"
                  sx={{
                    mb: ".8rem",
                    color:
                      form.status === "New"
                        ? "green"
                        : form.status === "Solved"
                        ? "orange"
                        : "red",
                    paddingTop: "6px",
                  }}
                >
                  {form.status}
                </Typography>
              </Grid>
              <Grid
                container
                sx={{ backgroundColor: "#FAFAFA", px: "2rem", py: "1rem" }}
              >
                <Grid item lg={2} md={4} sm={6} xs={12}>
                  <Typography className="vt-heading-Style">Name</Typography>
                </Grid>
                <Grid item lg={10} md={8} sm={6} xs={12}>
                  <Typography className="vt-subheading">{form.name}</Typography>
                </Grid>
                <Grid item lg={2} md={4} sm={6} xs={12}>
                  <Typography className="vt-heading-Style">Date</Typography>
                </Grid>
                <Grid item lg={10} md={8} sm={6} xs={12}>
                  <Typography className="vt-subheading">{form.date}</Typography>
                </Grid>
                <Grid item lg={2} md={4} sm={6} xs={12}>
                  <Typography className="vt-heading-Style vt-headpadding">
                    Ticket Title
                  </Typography>
                </Grid>
                <Grid item lg={10} md={8} sm={6} xs={12}>
                  <Typography className="vt-subheading">
                    {form.subject}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor: "#FAFAFA",
                  mt: "1rem",
                  px: "2rem",
                  py: "1rem",
                }}
              >
                <Grid item lg={2} md={4} sm={6} xs={12}>
                  <Typography className="vt-heading-Style ">
                    Ticket In Detail
                  </Typography>
                </Grid>
                <Grid
                  item
                  lg={10}
                  md={8}
                  sm={6}
                  className="vt-subheading"
                  xs={12}
                >
                  <Typography>{form.description}</Typography>
                </Grid>
              </Grid>
              <Grid
                item
                lg={10}
                md={8}
                sm={6}
                className="vt-subheading"
                xs={12}
                pt="2rem"
              >
                <Button
                  onClick={handleTicketResolve}
                  sx={{ backgroundColor: "green", color: "white" }}
                  disabled={form?.status === "Solved" ? true : false}
                >
                  {form?.status === "Solved" ? "Solved" : "Resolve"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default ViewTicketPage;
