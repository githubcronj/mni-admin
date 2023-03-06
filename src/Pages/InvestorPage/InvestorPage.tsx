import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./InvestorPage.css";
import caledar from "../../Assets/images/caledar.svg";
import arrow from "../../Assets/images/arrow.svg";
import DataTable from "../../Common/Datatable";
import { apiClient } from "../../utils/https";
import ActionButtons from "../../Common/Datatable/ActionButtons";
import { InvestorCols } from "../../Common/Datatable/Columns";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import price from "../../Assets/images/price.svg";
import price1 from "../../Assets/images/price1.svg";
import price3 from "../../Assets/images/price3.svg";
import Chartone from "../../Assets/images/Chartone.svg";
import Chart2 from "../../Assets/images/Chart2.svg";
import Chart3 from "../../Assets/images/Chart3.svg";
import { useSelector } from "react-redux";
import TotalUserCard from "../../Components/DashboardComponent/TotalUserCard/TotalUserCard";

export default function InvestorPage() {
  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [date, setDate] = useState(new Date());
  const [investorData, setInvestorData] = useState<any>()

  const main = useSelector((state: any) => state.init.main);

  const mainInvestor = main?.startUps;

  useEffect(() => {
    apiClient.get(`/investor/list`).then((res: any) => {
     setInvestorData(res?.data?.data)
    });
  }, []);

  const basicData = investorData?.filter((item: any) => item?.subscription === "basic");
  const premiumData = investorData?.filter((item: any) => item?.subscription === "premium");

  const handleDelete = (id: any) => {
    apiClient.delete(`investor/block/${id}`).then((res) => {
      if (id.length > 1) fetchData({ page: 1, limit: 5 });
    });
  };

  const StartupData = [
    {
      users: "Total Investors",
      num: main?.investors,
      usersimg: Chartone,
      img1: price,
      userimgWidth: "100px",
    },
    {
      users: "Total Premium Investors",
      num: premiumData?.length,
      usersimg: Chart2,
      img1: price1,
      userimgWidth: "100px",
    },
    {
      users: "Total Basic Investors",
      num: basicData?.length,
      usersimg: Chart3,
      img1: price3,
      userimgWidth: "100px",
    },
  ];


  const fetchData = (params: any) => {
    apiClient
      .get("investor/list", { params })
      .then((res) => {
        const { data } = res.data;
        setTotalRows(data.length);

        const updData = data.map((result: any) => ({
          ...result,
          name: (
            <Stack
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Avatar
                src={
                  result.profilePicture
                    ? result.profilePicture
                    : "/broken-image.jpg"
                }
                sx={{ mr: 2 }}
              />
              {result.name}
            </Stack>
          ),
          subscription: (
            <Box
              sx={{
                backgroundColor:
                  result.subscription === "premium" ? "#e6ffee" : "#8D877F40",
                color: result.subscription === "premium" ? "#138707" : "black",
                borderRadius: "6px",
                textAlign: "center",
                py: "5px",
              }}
            >
              {result.subscription}{" "}
            </Box>
          ),

          action: (
            <ActionButtons
              moreDetails={`/investor-page/investor-details/${result.uId}`}
              onDelete={(e: any) => {
                handleDelete(result.uId);
              }}
              isBlocked={result.isBlocked}
              id={result.uId}
            />
          ),
        }));
        setData(updData);
      })
      .catch((err) => {});
  };
  const options = {
    title: "List of Investors",
    isRowSelectable: true,
    order: "asc",
    orderBy: "name",
    totalRows,
    onDelete: handleDelete,
  };

  const handleDateChange = (date: any) => {
    fetchData({ date: moment(date).format("MMMM Do YYYY"), limit: 5, page: 1 });
    setDate(date);
  };
  return (
    <>
      <Box className="investorPageRoot">
        <Container>
          <Grid sx={{ padding: "10px 0px", marginTop: "20px" }} container>
            <Grid item xs={12} sm={6} md={8}>
              <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
                Investors
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
            columns={InvestorCols}
            investor={true}
          />
        </Container>
      </Box>
    </>
  );
}
