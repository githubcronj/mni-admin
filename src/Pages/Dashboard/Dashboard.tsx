import {
  Box,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { apiClient } from "../../utils/https";
import LineChart from "../../Components/DashboardComponent/LineChart/LineChart";
import "./Dashboard.css";
import TopInvestorsList from "../../Components/DashboardComponent/TopInvestorsList";
import price2 from "../../Assets/images/price2.svg";
import websiteTrafficimg from "../../Assets/images/websiteTrafficimg.svg";
import TotalUserCard from "../../Components/DashboardComponent/TotalUserCard/TotalUserCard";
// import Data from "../../DB/TotalUserCardQArray/TotalUserCardQArray";
import price from "../../Assets/images/price.svg";

import totaluser from "../../Assets/images/totaluser.svg";
import investors from "../../Assets/images/investors.svg";
// import price2 from "../../Assets/images/price2.svg";
import price1 from "../../Assets/images/price1.svg";
import price3 from "../../Assets/images/price3.svg";
import startups from "../../Assets/images/startups.svg";
import subscription from "../../Assets/images/subscription.svg";
import { useSelector } from "react-redux";
import moment from "moment";

export default function Dashboard() {
  const [age, setAge] = React.useState("");
  const [data, setData] = React.useState({ investors: [], startup: [] });
  const [startupData, setstartupData] = useState<any>();
  const [investorData, setInvestorData] = useState<any>();
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    apiClient.get(`/dashboard?date=${age}`).then((res: any) => {
      setData({
        ...data,
        investors: res.data.investorCount.map((item: any) => item.total),
        startup: res.data.startupCount.map((item: any) => item.total),
      });
    });
  }, [age]);
  useEffect(() => {
    apiClient.get(`/getStartup`).then((res: any) => {
      setstartupData(res?.data?.data?.results);
    });

    apiClient.get(`/investor/list`).then((res: any) => {
      setInvestorData(res?.data?.data);
    });
  }, []);

  // const basicData = startupData?.filter((item: any) => item?.subscription === "basic");
  const premiumData = startupData?.filter(
    (item: any) => item?.subscription === "premium"
  );

  // const basicDataInvestor = investorData?.filter((item: any) => item?.subscription === "basic");
  const premiumDataInvestor = investorData?.filter(
    (item: any) => item?.subscription === "premium"
  );

  const main = useSelector((state: any) => state.init.main);

  const Data = [
    {
      users: "Total Users",
      num: investorData?.length + startupData?.length,
      usersimg: totaluser,
      img1: price,
      userimgWidth: "40px",
    },
    {
      users: "Total Investors",
      num: investorData?.length,
      usersimg: investors,
      img1: price1,
      userimgWidth: "40px",
    },
    {
      users: "Total Startups",
      num: startupData?.length,
      usersimg: startups,
      img1: price3,
      userimgWidth: "40px",
    },
    {
      users: "Total Premium",
      num: premiumData?.length + premiumDataInvestor?.length,
      // num: 0,
      usersimg: subscription,
      img1: price3,
      userimgWidth: "40px",
    },
  ];

  return (
    <>
      <Box className="dashboardPage">
        <Container>
          <Grid sx={{ padding: "10px 0px", marginTop: "20px" }} container>
            <Grid item xs={12} sm={6} md={8}>
              <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
                Dashboard
              </Typography>
            </Grid>
            <Grid item xs={9} sm={6} md={4}>
              {/* <Calendar /> */}
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {Data.map((item, index) => (
              <Grid
                key={index}
                sx={{ display: "flex", justifyContent: "space-around" }}
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
              >
                <TotalUserCard TotalUserCardprops={item} key={index} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ boxShadow: "5px 10px 5px 5px #ddd", marginTop: "20px" }}>
            <Box
              sx={{
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "space-between",
                padding: "30px 20px",
              }}
            >
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                New Users
              </Typography>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "Without label" }}
                  displayEmpty
                >
                  <MenuItem disabled value="">
                    <em>select users</em>
                  </MenuItem>
                  <MenuItem
                    value={moment().subtract(10, "months").format("YYYY-MM-DD")}
                  >
                    <em>Last 10 Months</em>
                  </MenuItem>
                  <MenuItem
                    value={moment().subtract(6, "months").format("YYYY-MM-DD")}
                  >
                    Last 6 Months
                  </MenuItem>

                  <MenuItem
                    value={moment().subtract(3, "months").format("YYYY-MM-DD")}
                  >
                    Last 3 Months
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <LineChart data={data} />
          </Box>

          <Box sx={{ marginTop: "30px" }}>
            <Grid container spacing={3}>
              <Grid item xs={10} sm={6} md={4} lg={3}>
                <Box className="WebsiteTraffic">
                  <Box
                    sx={{
                      width: "fix-content",
                      padding: "20px",
                      border: "1px solid #dddddd",
                      backgroundColor: "#ffffff",
                      boxShadow: "0px 1px 4px #dddddd",
                      borderRadius: "6px",
                    }}
                  >
                    <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                      Total Website Users
                    </Typography>
                    <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
                      {investorData?.length + startupData?.length}
                    </Typography>
                    {/* <Box sx={{ display: "flex" }}>
                      <img src={price2} alt="img" />
                      <Typography sx={{ fontSize: "12px", color: "#6D6D6D" }}>
                        than last year
                      </Typography>
                    </Box> */}
                    <Box sx={{ marginTop: "105px" }}>
                      <img src={websiteTrafficimg} alt="img" />
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box
                  sx={{
                    padding: "20px",

                    border: "1px solid #dddddd",
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 1px 4px #dddddd",
                    borderRadius: "6px",
                  }}
                >
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    Top Investors
                  </Typography>
                  {main.investor
                    .sort(
                      (a: any, b: any) =>
                        b.connections.length - a.connections.length
                    )
                    .slice(0, 3)
                    .map((item: any, index: number) => (
                      <TopInvestorsList
                        TopInvestorsListprops={item}
                        key={index}
                      />
                    ))}
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box
                  sx={{
                    padding: "20px",
                    border: "1px solid #dddddd",
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 1px 4px #dddddd",
                    borderRadius: "6px",
                  }}
                >
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    Top Startups
                  </Typography>
                  {main.startUps
                    .sort(
                      (a: any, b: any) =>
                        b.connections.length - a.connections.length
                    )
                    .slice(0, 3)
                    .map((item: any, index: number) => (
                      <TopInvestorsList
                        TopInvestorsListprops={item}
                        key={index}
                      />
                    ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
