import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import "./UserSubscriptionDetails.css";
import crown from "../../Assets/images/crown.png";
import arroww from "../../Assets/images/arroww.svg";

import { FC } from "react";
import { Link } from "react-router-dom";
interface MoreDetailsProps {
  UserSubscriptionDetails: any;
}

const UserSubscriptionDetailsPage: FC<MoreDetailsProps> = ({
  UserSubscriptionDetails,
}) => {
  return (
    <div>
      <Box className="moredetailsPage">
        <Container>
          <Link to={"/subscription-page"} style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", padding: "25px" }}>
              <img src={arroww} alt="arrow" />

              <Typography
                sx={{ color: "#000000",marginLeft: "15px" }}
                className="textBold startupText"
              >
                {UserSubscriptionDetails?.startupdetails}
              </Typography>
            </Box>
          </Link>

          <Box
            sx={{
              backgroundColor: "#ffffff",
              paddingTop: "15px",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex-start",
                backgroundColor: "#138707",
                padding: "5px 10px",
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
                width: "fit-content",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  color: "#ffffff",
                }}
              >
                <img width={"13px"} src={crown} alt="crown" />
                <Typography sx={{ marginTop: "3px", marginLeft: "7px" }}>
                  Premium
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={2}>
              <Grid className="BasicItems" item sm={12} xs={12} md={6}>
                <Box>
                  <img
                    src={UserSubscriptionDetails?.img1}
                    width={"140px"}
                    alt="googleinc"
                  />
                </Box>
                <Typography
                  className="textBold2"
                  sx={{ marginTop: "20px", fontSize: "28px" }}
                >
                  {UserSubscriptionDetails?.username}
                </Typography>
                <Typography sx={{ marginTop: "5px", color: "#FF9A33" }}>
                  {UserSubscriptionDetails?.userid}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                  }}
                ></Box>
              </Grid>
              <Grid className="BasicItems2" item sm={12} xs={12} md={6}>
                <Box>
                  <Box
                    sx={{
                      backgroundColor: "#FAFAFA",
                      padding: "10px 30px",
                      borderRadius: "10px",
                      marginTop: "15px",
                    }}
                  >
                    <Grid container>
                      <Grid className="textBold2" md={6} sm={6} xs={12}>
                        {UserSubscriptionDetails?.EquityOffer}
                      </Grid>
                      <Grid md={6} sm={6} xs={12}>
                        {UserSubscriptionDetails?.EquityOfferValue}
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid className="textBold2" md={6} sm={6} xs={12}>
                        {UserSubscriptionDetails?.AskPrice}
                      </Grid>
                      <Grid md={6} sm={6} xs={12}>
                        {UserSubscriptionDetails?.AskPriceValue}
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid className="textBold2" md={6} sm={6} xs={12}>
                        {UserSubscriptionDetails?.Email}
                      </Grid>

                      <Grid sm={6} md={6} xs={12}>
                        {UserSubscriptionDetails?.EmailId}
                      </Grid>
                    </Grid>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#FAFAFA",
                      padding: "10px 30px",
                      borderRadius: "10px",
                      marginTop: "15px",
                    }}
                  >
                    <Grid container>
                      <Grid className="textBold2" md={6} sm={6} xs={12}>
                        {UserSubscriptionDetails?.signupdate}
                      </Grid>
                      <Grid sm={6} md={6} xs={12}>
                        {UserSubscriptionDetails?.date}
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid className="textBold2" md={6} sm={6} xs={12}>
                        {UserSubscriptionDetails?.industry}
                      </Grid>
                      <Grid sm={6} md={6} xs={12}>
                        {UserSubscriptionDetails?.industryValue}
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};
export default UserSubscriptionDetailsPage;
