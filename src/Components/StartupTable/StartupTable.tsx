import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { rows } from "../../DB/InvestorTableData/StartupPageArr";
import { Avatar, Button, Pagination, Stack } from "@mui/material";
import "./StartupTable.css";
import { Link } from "react-router-dom";
import BlockUserModal from "../BlockUserModal/BockUserModal";

interface Data {
  name: string;
  profile: string;
  subscription: string;
  userId: string;
  industry: string;
  form?: string;
  location: string;
  action: string;
  block: string;
}

type Order = "asc" | "desc";

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
    id: "subscription",
    numeric: true,
    disablePadding: false,
    label: "Subscription",
  },
  {
    id: "userId",
    numeric: true,
    disablePadding: false,
    label: "User ID",
  },
  {
    id: "industry",
    numeric: true,
    disablePadding: false,
    label: "Industry",
  },
  {
    id: "form",
    numeric: true,
    disablePadding: false,
    label: "Form",
  },
  {
    id: "location",
    numeric: true,
    disablePadding: false,
    label: "Location",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
  {
    id: "profile",
    numeric: false,
    disablePadding: false,
    label: "",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

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
        <TableCell padding="checkbox">
          <Checkbox
            sx={{ color: "#FF9A33 !important" }}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            sx={{ fontSize: "16px", fontWeight: "600" }}
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

interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        // ...(numSelected > 0 && {
        //   bgcolor: (theme) =>
        //     alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        // }),
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
        className="tableHeading"
      >
        List Of Start Ups
      </Typography>
      {numSelected > 0 ? <BlockUserModal bockSelected /> : null}
    </Toolbar>
  );
};

export default function TableComponent() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("userId");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [id, setId] = React.useState(["-1"]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  return (
    <Box sx={{ width: "100%" }} className="rootStyle">
      <Paper sx={{ mb: 2, mt: 5, p: { sm: "15px" } }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{
              minWidth: 750,
              borderCollapse: "separate",
              borderSpacing: "0px 10px",
            }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {rows
                .slice(page * rowsPerPage - rowsPerPage, page * rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      sx={{ borderTop: "1px solid #000000 !important" }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => {
                            handleClick(event, row.name);
                          }}
                          onChange={(e: any) => {
                            if (e.target.checked) {
                              if (!id.includes(row.userId)) {
                                setId([...id, row.userId]);
                              }
                            } else {
                              setId(
                                id.filter((item) => {
                                  return item != row.userId;
                                })
                              );
                            }
                          }}
                          sx={{ color: "#FF9A33 !important" }}
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>

                      {/* <TableCell align="right">
                        <Avatar src={row.profile} />
                      </TableCell> */}
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        sx={{ display: "flex", alignItems: "center", p: 2 }}
                      >
                        <Avatar src={row.profile} sx={{ mr: 2 }} />
                        <Typography>{row.name}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          className={
                            row.subscription === "Premium"
                              ? "premiumStyle"
                              : "basicStyle"
                          }
                        >
                          {row.subscription}
                        </Button>
                      </TableCell>
                      <TableCell align="right">{row.userId}</TableCell>
                      <TableCell align="right">{row.industry}</TableCell>
                      <TableCell align="right">{row.form}</TableCell>
                      <TableCell align="right">{row.location}</TableCell>
                      <TableCell align="right">
                        <Link
                          to={"/startup-page/more-details"}
                          style={{ color: "#FF9A33" }}
                        >
                          {row.action}
                        </Link>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>
                          <BlockUserModal />
                        </Typography>
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
          />{" "}
        </Stack>
      </Paper>
    </Box>
  );
}
