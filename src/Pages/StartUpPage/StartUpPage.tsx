import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Calendar from "../../Common/Calendar/Calendar";
import DataTable from "../../Common/Datatable";
import ActionButtons from "../../Common/Datatable/ActionButtons";
import { StartUpCols } from "../../Common/Datatable/Columns";
import BlockUserModal from "../../Components/BlockUserModal/BockUserModal";
import TotalUserCard from "../../Components/DashboardComponent/TotalUserCard/TotalUserCard";
import StartupTable from "../../Components/StartupTable/StartupTable";
import Data from "../../DB/TotalUserCardQArray/StartUpCardArray";
import { apiClient } from "../../utils/https";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import caledar from "../../Assets/images/caledar.svg";
import arrow from "../../Assets/images/arrow.svg";
import moment from "moment";

import price from "../../Assets/images/price.svg";
import price1 from "../../Assets/images/price1.svg";
import price3 from "../../Assets/images/price3.svg";
import Chartone from "../../Assets/images/Chartone.svg";
import Chart2 from "../../Assets/images/Chart2.svg";
import Chart3 from "../../Assets/images/Chart3.svg";

import "./StartUpPage.css";
import { useSelector } from "react-redux";

export default function StartUpPage() {
  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [date, setDate] = useState(new Date());
  const [startupData, setstartupData] = useState<any>()
  const main = useSelector((state: any) => state.init.main);
  const mainStartups = main?.startUps;

  const handleDelete = (id: any) => {
    apiClient.delete(`blockStartup/${id}`).then((res) => {
      if (id.length > 1) fetchData({ page: 1, limit: 5 });
    });
  };

  useEffect(() => {
    apiClient.get(`/getStartup`).then((res: any) => {

     setstartupData(res?.data?.data?.results)
    });
  }, []);

  const basicData = startupData?.filter((item: any) => item?.subscription === "basic");
  const premiumData = startupData?.filter((item: any) => item?.subscription === "premium");

 

  // const main = useSelector((state: any) => state.init.main);


  const StartupData = [
    {
      users: "Total Startups",
      num: startupData?.length,
      usersimg: Chartone,
      img1: price,
      userimgWidth: "100px",
    },
    {
      users: "Total Premium Startups",
      num: premiumData?.length,
      usersimg: Chart2,
      img1: price1,
      userimgWidth: "100px",
    },
    {
      users: "Total Basic Startups",
      num: basicData?.length,
      usersimg: Chart3,
      img1: price3,
      userimgWidth: "100px",
    },
  ];

  const fetchData = (params: any) => {
    apiClient
      .get("getStartup", { params })
      .then((res) => {
        const { results } = res.data.data;
        setTotalRows(results.length);

        const updData = results.map((result: any, index: any) => ({
          ...result,
          companyName: (
            <Stack
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {" "}
              <Avatar
                src={
                  result.profilePicture
                    ? result.profilePicture
                    : "/broken-image.jpg"
                }
                sx={{ mr: 2 }}
              />
              {result.companyName}
            </Stack>
          ),
          subscription: (
            <Box
              key={index}
              sx={{
                backgroundColor:
                  result.subscription === "premium" ? "#e6ffee" : "#8D877F40",
                color: result.subscription === "premium" ? "#138707" : "black",
                borderRadius: "6px",
                textAlign: "center",
                py: "5px",
              }}
            >
              {result.subscription}
            </Box>
          ),

          action: (
            <ActionButtons
              moreDetails={`/startup-page/more-details/${result.userId}`}
              onDelete={(e: any) => {
                handleDelete(result.userId);
              }}
              isBlocked={result.isBlocked}
            />
          ),
        }));
        setData(updData);
      })
      .catch((err) => {});
  };
  const options = {
    title: "List of Start Ups",
    isRowSelectable: true,
    order: "asc",
    orderBy: "name",
    totalRows,
    onDelete: handleDelete,
    startUp: true,
  };

  const handleDateChange = (date: any) => {
    fetchData({ date: moment(date).format("MMMM Do YYYY"), limit: 5, page: 1 });
    setDate(date);
  };

  return (
    <>
      <Box className="startuppage">
        <Container>
          <Grid sx={{ padding: "10px 0px", marginTop: "20px" }} container>
            <Grid item xs={12} sm={6} md={8}>
              <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
                Startups
              </Typography>
            </Grid>
            <Grid item xs={9} sm={6} md={4}>
              <Box
                className="calenderBox"
                sx={{
                  display: "flex",
                  width: "max-content",
                  border: "1px solid #ddd",
                  padding: "5px 5px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                }}
              >
                <img src={caledar} />
                <DatePicker
                  selected={date}
                  onChange={(date: Date) => handleDateChange(date)}
                  dateFormat="E,dd-MMMM-yyyy"
                />
                <img src={arrow} />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} mb={5}>
            {StartupData.map((item, index) => (
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

          <DataTable
            data={data}
            options={options}
            fetch={fetchData}
            columns={StartUpCols}
          />
        </Container>
      </Box>
    </>
  );
}
