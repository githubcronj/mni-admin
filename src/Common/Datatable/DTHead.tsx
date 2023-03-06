import React from "react";
import './DatatableStyle.css'
import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";

const DTHead = (props: any) => {
  const {
    isRowSelectable,
    order,
    orderBy,
    columns,
    numSelected,
    onSelectAll,
    handleSort,
    rowCount,
  } = props;

  return (
    <TableHead >
      <TableRow className='tablehead-dt' >
        {isRowSelectable && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAll}
              style={{ paddingLeft: "8px", color:"#FF9A33" }}
            />
          </TableCell>
        )}
        {columns.map((column: any) => (
          <TableCell
            key={column.id}
            align={column.isNumeric ? "right" : column.align || "left"}
            padding={column.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === column.id ? order : false}
            sx={{fontWeight:"bold",paddingLeft:"15px"}}
          >
            {column.sortable !== false ? (
              <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : "asc"}
                onClick={() => handleSort(column.id)}
              >
                {column.label}
                {orderBy === column.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              column.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default DTHead;
