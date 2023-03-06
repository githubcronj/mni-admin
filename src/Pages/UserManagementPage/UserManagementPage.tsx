import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import "./UserManagementPage.css";
import Calendar from "../../Common/Calendar/Calendar";
import TableComponent from "../../Components/TableComponent/TableComponent";
import UserManagementTable from "../../Components/UserManagementTable/UserManagementTable";
import ActionButtons from "../../Common/Datatable/ActionButtons";
import { apiClient } from "../../utils/https";
import DataTable from "../../Common/Datatable";
import { UsersCols } from "../../Common/Datatable/Columns";
import moment from "moment";
import DatePicker from "react-datepicker";
import caledar from "../../Assets/images/caledar.svg";
import arrow from "../../Assets/images/arrow.svg";

export default function UserManagementPage() {
  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [date, setDate] = useState(new Date());

  const fetchData = (params: any) => {
    apiClient
      .get("adminList", { params })
      .then((res) => {
        const { results } = res.data.data;

        setTotalRows(results.length);

        const updData = results.map((result: any) => ({
          ...result,
          role: (
            <Box
              sx={{
                backgroundColor:
                  result.role === "Admin"
                    ? "#8D877F40"
                    : result.role === "admin"
                    ? "#8D877F40"
                    : result.role === undefined
                    ? "transparent"
                    : "#e6ffee",
                color:
                  result.role === "Admin"
                    ? "black"
                    : result.role === "admin"
                    ? "black"
                    : "#138707",
                borderRadius: "6px",
                textAlign: "center",
                py: "5px",
              }}
            >
              {result.role}
            </Box>
          ),
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
          action: (
            <ActionButtons
              moreDetails={`/user-management/edit-details/${result.userId}`}
              textDetails="Edit Details"
              onRemove={() => handleDelete(result.userId)}
              role={result.role}
            />
          ),
        }));
        setData(updData);
      })
      .catch((err) => {});
  };

  const handleDelete = (id: any) => {
    apiClient.delete(`deleteUser/${id}`).then((res) => {
      fetchData({ page: 1, limit: 5 });
    });
  };

  const handleDateChange = (date: any) => {
    fetchData({ date: moment(date).format("MMMM Do YYYY"), limit: 5, page: 1 });
    setDate(date);
  };

  const options = {
    title: "Manage Admin Users",
    isRowSelectable: false,
    order: "asc",
    orderBy: "name",
    totalRows,
    onDelete: handleDelete,
    addUser: true,
  };

  return (
    <>
      <Box className="UserManagementPageRoot">
        <Container>
          <Grid sx={{ padding: "10px 0px", marginTop: "20px" }} container>
            <Grid item xs={12} sm={6} md={8}>
              <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
                User Managment
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
          <DataTable
            data={data}
            options={options}
            fetch={fetchData}
            columns={UsersCols}
          />
        </Container>
      </Box>
    </>
  );
}
