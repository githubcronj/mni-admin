import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { rows } from "../../DB/InvestorTableData/userTableArr";
import { Avatar, Button, Pagination, Stack } from "@mui/material";
import "./UserManagementTable.css";
import { Link } from "react-router-dom";
import BlockUserModal from "../BlockUserModal/BockUserModal";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

interface Data {
  profile: string;
  name: string;
  role: string;
  emailId: string;
  status: string;
  action: string;
  remove: string;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },

  {
    id: "role",
    numeric: false,
    disablePadding: false,
    label: "Role",
  },
  {
    id: "emailId",
    numeric: false,
    disablePadding: false,
    label: "Email ID",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Action",
  },
  {
    id: "remove",
    numeric: false,
    disablePadding: false,
    label: "",
  },
];

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow
        sx={{
          backgroundColor: "#FFF7EF",
          border: "1px solid #F8E9DB",
          borderRadius: "6px !important",
          m: 2,
        }}
      >
        {headCells.map((headCell) => (
          <TableCell
            className="headTableCell"
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const EnhancedTableToolbar = () => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
        className="tableHeading"
      >
        Manage Admin Users
      </Typography>
      <Link
        to={"/user-management/Add-AdminUser-Page"}
        style={{ textDecoration: "none" }}
      >
        <ButtonComponent width={"120px"} padding={"12px"}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "15px 20px",
            }}
          >
            <AddOutlinedIcon fontSize="small" /> Add User
          </Typography>
        </ButtonComponent>
      </Link>
    </Toolbar>
  );
};

export default function TableComponent() {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [id, setId] = React.useState(["-1"]);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, page * rowsPerPage - rows.length) : 0;
  return (
    <Box sx={{ width: "100%" }} className="rootStyle">
      <Paper sx={{ mb: 2, mt: 5, p: { sm: "15px" } }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            sx={{
              minWidth: 750,
              borderCollapse: "separate",
              borderSpacing: "0px 10px",
            }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {rows
                .slice(page * rowsPerPage - rowsPerPage, page * rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.name}
                      sx={{ borderTop: "1px solid #000000 !important" }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        padding="none"
                        sx={{ display: "flex", alignItems: "center", p: 2 }}
                      >
                        <Avatar src={row.profile} sx={{ mr: 2 }} />
                        <Typography>{row.name}</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          className={
                            row.role === "Super Admin"
                              ? "premiumStyle"
                              : "basicStyle"
                          }
                        >
                          {row.role}
                        </Button>
                      </TableCell>
                      <TableCell align="left" sx={{ px: 3 }}>
                        {row.emailId}
                      </TableCell>
                      <TableCell
                        sx={{ px: 3 }}
                        align="left"
                        className={
                          row.status === "Active"
                            ? "statusActive"
                            : "statusDeactive"
                        }
                      >
                        {row.status}
                      </TableCell>
                      <TableCell align="left" sx={{ px: 3 }}>
                        <Link
                          to={"/user-management/edit-details"}
                          style={{ color: "#FF9A33" }}
                        >
                          {row.action}
                        </Link>
                      </TableCell>
                      <TableCell align="left" sx={{ px: 3, color: "#8D877F" }}>
                        <Link style={{ color: "#8D877F" }} to={"#"}>
                          {row.remove}
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2}>
          <Pagination
            sx={{ display: "flex", justifyContent: "flex-end" }}
            count={Math.floor(rows.length / 5 + 1)}
            page={page}
            onChange={handleChangePage}
            shape="rounded"
          />
        </Stack>
      </Paper>
    </Box>
  );
}
