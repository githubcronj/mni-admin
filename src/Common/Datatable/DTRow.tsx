import React from "react";
import { Checkbox, TableCell, TableRow } from "@mui/material";

const DTRow = (props: any) => {
  const {
    row,
    isItemSelected,
    isRowSelectable,
    columns,
    handleClick,
    startUp,
  } = props;
  return (
    <TableRow
      hover
      /* onClick={(event) => handleClick(event, row.name)} */
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.name}
      selected={isItemSelected}
    >
      {isRowSelectable && (
        <TableCell padding="checkbox" sx={{ py: "15px" }}>
          <Checkbox
            color="warning"
            checked={isItemSelected}
            onClick={
              startUp
                ? () => handleClick(row.userId)
                : () => handleClick(row.uId)
            }
            style={{ color: "#FF9A33" }}
          />
        </TableCell>
      )}
      {columns.map((column: any) => (
        <TableCell
          key={`cell-${column.id}`}
          align={column.isNumeric ? "right" : "left"}
        >
          {row[column.id]}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default DTRow;
