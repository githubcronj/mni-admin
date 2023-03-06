import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
// import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import DTToolbar from "./DTToolbar";
import DTHead from "./DTHead";
import DTRow from "./DTRow";
import { Pagination, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: "#ff9a33",
    },
  },
});

const DataTable = (props: any) => {
  const {
    isRowSelectable,
    title,
    addUrl,
    totalRows,
    orderBy,
    order,
    onDelete,
    loading,
    startUp,
    addUser,
    date,
  } = props.options;


  const [data, setData] = useState<any[]>([]);
  const [selected, setSelected] = useState<any[]>([]);
  const [dtConf, setDtConf] = useState({
    page: 1,
    rowsPerPage: 5,
    sortColumn: orderBy || props.columns[0].id,
    sortOrder: order || "asc",
    limit: 5,
  });

  const [deps, setDeps] = useState(props.dependancies);
 
  useEffect(() => {
    props.fetch({
      ...dtConf,
      page: dtConf.page,

      ...props.dependancies,
    });
  }, [dtConf]);

  useEffect(() => {
    if (props.dependancies !== deps) setDtConf({ ...dtConf, page: 0 });

    setDeps(props.dependancies);
  }, [props.dependancies]);

  useEffect(() => {
    setData(props.data);
    setSelected([]);
  }, [props.data]);

  /** managing the sort order when user clicks on column header */
  const handleSort = (property: any) => {
    let newOrder =
      dtConf.sortColumn === property && dtConf.sortOrder === "asc"
        ? "desc"
        : "asc";
    setDtConf((prevConf) => ({
      ...prevConf,
      sortColumn: property,
      sortOrder: newOrder,
      page: 0,
    }));
  };

  /** Selects all records in the datatable */
  const handleSelectAll = (event: any) => {
    if (event.target.checked)
      setSelected(data.map((row) => (startUp ? row.userId : row.uId)));
    else setSelected([]);
  };

  /** Check the checkbox when user click of single row checkbox */
  const handleCheckClick = (value: any) => {
    const selectedIndex = selected.indexOf(value);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, value);
    } else {
      newSelected = selected.filter((sel) => sel !== value);
    }
    setSelected(newSelected);
  };

  /** Called when user goes to next or previous page of the table */
  const handleChangePage = (event: any, newPage: any) => {
    setDtConf((prevConf) => ({ ...prevConf, page: newPage }));
  };

  /** Manages the number of rows to be shown in single page */

  let rows = data.map((row, index) => (
    <DTRow
      key={`row-${row.userId}`}
      row={row}
      isItemSelected={
        startUp ? selected.includes(row.userId) : selected.includes(row.uId)
      }
      isRowSelectable={isRowSelectable}
      columns={props.columns}
      handleClick={handleCheckClick}
      startUp={startUp}
    />
  ));

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, padding: "30px" }}>
        <DTToolbar
          numSelected={selected.length}
          title={title}
          addUrl={addUrl}
          onDelete={onDelete}
          selected={selected}
          addUser={addUser}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <DTHead
              numSelected={selected.length}
              order={dtConf.sortOrder}
              orderBy={dtConf.sortColumn}
              onSelectAll={handleSelectAll}
              handleSort={handleSort}
              rowCount={data.length}
              columns={props.columns}
              isRowSelectable={isRowSelectable}
            />
            <TableBody>{rows}</TableBody>
          </Table>
        </TableContainer>
        <ThemeProvider theme={theme}>
          <Stack spacing={2}>
            <Pagination
              sx={{ display: "flex", justifyContent: "flex-end", pt: "15px" }}
              count={Math.floor(totalRows / 5 + dtConf.page)}
              page={dtConf.page}
              onChange={handleChangePage}
              shape="rounded"
              color="secondary"
            />
          </Stack>
        </ThemeProvider>
      </Paper>
    </Box>
  );
};

export default DataTable;