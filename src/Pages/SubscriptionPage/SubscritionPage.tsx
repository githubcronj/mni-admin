import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Calendar from "../../Common/Calendar/Calendar";
import TotalUserCard from "../../Components/DashboardComponent/TotalUserCard/TotalUserCard";
import Data from "../../DB/TotalUserCardQArray/SubscriptionCardArray";
import "./SubscriptionPage.css";
import BarChart from "../../Components/BarChart/BarChart";
import DoughnutChart from "../../Components/DoughnutChart/DoughnutChart";
import DoughnutChartBasic from "../../Components/DoughnutChart/DoughnutChartBasic";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SubscriptionTable from "../../Components/SubscriptionTable/SubscriptionTable";
import { rows } from "../../DB/InvestorTableData/SubscriptiontableData";
import { apiClient } from "../../utils/https";
import { useSelector } from "react-redux";
import totaluser from "../../Assets/images/totaluser.svg";
import investors from "../../Assets/images/investors.svg";
// import price2 from "../../Assets/images/price2.svg";
import price1 from "../../Assets/images/price1.svg";
import price3 from "../../Assets/images/price3.svg";
import startups from "../../Assets/images/startups.svg";
import subscription from "../../Assets/images/subscription.svg";
import price from "../../Assets/images/price.svg";


export default function SubscritionPage() {
  const [age, setAge] = React.useState("");
  const [alignment, setAlignment] = React.useState("web");
  const [startupData, setstartupData] = useState<any>()
  const [investorData, setInvestorData] = useState<any>()

  useEffect(() => {
    apiClient.get(`/getStartup`).then((res: any) => {
     setstartupData(res?.data?.data?.results)
    });

    apiClient.get(`/investor/list`).then((res: any) => {
     setInvestorData(res?.data?.data)
    });
  }, []);

  const basicData = startupData?.filter((item: any) => item?.subscription === "basic");
  const premiumData = startupData?.filter((item: any) => item?.subscription === "premium");

  const basicDataInvestor = investorData?.filter((item: any) => item?.subscription === "basic");
  const premiumDataInvestor = investorData?.filter((item: any) => item?.subscription === "premium");

  const main = useSelector((state: any) => state.init.main);

  const handleChange1 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAge(event.target.value);
  };

  const handleChange2 = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  const Data = [
    {
      users: "Total Users",
      num: startupData?.length + investorData?.length,
      usersimg: totaluser,
      img1: price,
      userimgWidth: "40px",
    },
    {
      users: "Total Premium Subscriptions",
      num: premiumData?.length + premiumDataInvestor?.length,
      usersimg: investors,
      img1: price1,
      userimgWidth: "40px",
    },
    {
      users: "Total Basic Subscription",
      num: basicData?.length + basicDataInvestor?.length,
      usersimg: startups,
      img1: price3,
      userimgWidth: "40px",
    },
  ];
  
  return (
    <>
      <Box className="subscriptionPage">
        <Container>
          <Grid sx={{ padding: "10px 0px", marginTop: "20px" }} container>
            <Grid item xs={12} sm={6} md={8}>
              <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
                Subscription
              </Typography>
            </Grid>
            <Grid item xs={9} sm={6} md={4}>
              <Calendar />
            </Grid>
          </Grid>
          
          <Grid container spacing={2}>
            {Data.map((item, index) => (
              <Grid
                key={index}
                sx={{ display: "flex", justifyContent: "space-around" }}
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
              >
                <TotalUserCard TotalUserCardprops={item} key={index} />
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Box
                sx={{
                  boxShadow: "5px 10px 5px 5px #ddd",
                  marginTop: "20px",
                  padding: "10px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "30px 20px",
                  }}
                >
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    Subscriptions Report
                  </Typography>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={age}
                      onChange={handleChange1}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>Last 10 Months</em>
                      </MenuItem>
                      <MenuItem value={10}>Last 12 Months</MenuItem>

                      <MenuItem value={30}>Last 6 Months</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box className="togglebtn">
                  <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleChange2}
                  >
                    <ToggleButton value="web">Investors</ToggleButton>
                    <ToggleButton value="android">Startups</ToggleButton>
                  </ToggleButtonGroup>
                </Box>
                <BarChart />
              </Box>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={3}>
              <Grid>
                <DoughnutChart premiumData={premiumData} premiumDataInvestor={premiumData} />
              </Grid>
              <Grid>
                <DoughnutChartBasic />
              </Grid>
            </Grid> */}
          </Grid>
          <SubscriptionTable />
        </Container>
      </Box>
    </>
  );
}
