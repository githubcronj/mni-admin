import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import DataTable from "../../Common/Datatable";
import ActionButtons from "../../Common/Datatable/ActionButtons";
import { TicketCols } from "../../Common/Datatable/Columns";
import SupportTicketCard from "../../Components/DashboardComponent/TotalUserCard/SupportTicketCard";
import { apiClient } from "../../utils/https";
import "./SupportTicketPage.css";
import newticket from "../../Assets/images/newticket.svg";
import solvedticket from "../../Assets/images/solvedticket.svg";
import pendingticket from "../../Assets/images/pendingticket.svg";
import DatePicker from "react-datepicker";
import caledar from "../../Assets/images/caledar.svg";
import arrow from "../../Assets/images/arrow.svg";
import moment from "moment";

export default function StartUpPage() {
  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [date, setDate] = useState(new Date());
  const [TicketCount, setTicketCount] = useState<any>([]);

  useEffect(() => {
    apiClient.get(`/getAllTickets`).then((res: any) => {
      setTicketCount(res.data.counts);
    });
  }, []);

  const Data = [
    {
      users: "New Tickets",
      numbers: TicketCount.newTicketCount,
      usersimg: newticket,
      userimgWidth: "60px",
    },
    {
      users: "Solved Tickets",
      numbers: TicketCount.solvedTicketCount,
      usersimg: solvedticket,
      userimgWidth: "60px",
    },
    {
      users: "Pending Tickets",
      numbers: TicketCount.pendingTicketCount,
      usersimg: pendingticket,
      userimgWidth: "60px",
    },
  ];

  const fetchData = (params: any) => {
    apiClient
      .get("getAllTickets", { params })
      .then((res) => {
        const { results } = res.data.counts.data;
        setTotalRows(results.length);
       

        const updData = results.map((result: any) => ({
          ...result,
          status: (
            <Box
              sx={{
                backgroundColor: "#8D877F40",

                color:
                  result.status === "New"
                    ? "green"
                    : result.status === "Solved"
                    ? "orange"
                    : "red",

                borderRadius: "6px",
                textAlign: "center",
                py: "5px",
              }}
            >
              {result.status}
            </Box>
          ),
          action: (
            <ActionButtons
              moreDetails={`/view-ticket/${result.uId}`}
              textDetails="View Ticket"
              styles={{ color: "#8D877F" }}
            />
          ),
        }));
        setData(updData);
      })
      .catch((err) => {});
  };

  const options = {
    title: "Ticket List",
    isRowSelectable: false,
    order: "asc",
    orderBy: "name",
    totalRows,
  };

  const handleDateChange = (date: any) => {
    fetchData({ date: moment(date).format("MMMM Do YYYY"), limit: 5, page: 1 });
    setDate(date);
  };

  return (
    <>
      <Box className="supportTicketPage">
        <Container>
          <Grid sx={{ padding: "10px 0px", marginTop: "20px" }} container>
            <Grid item xs={12} sm={6} md={8}>
              <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
                Support Tickets
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
                <SupportTicketCard TotalUserCardprops={item} key={index} />
              </Grid>
            ))}
          </Grid>
          <DataTable
            data={data}
            options={options}
            fetch={fetchData}
            columns={TicketCols}
          />
        </Container>
      </Box>
    </>
  );
}
