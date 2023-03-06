import React, { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,

    backgroundColor: theme.palette.background.paper,
    fontSize: 17,
    padding: "5px 26px 5px 12px",
    transition: theme.transitions.create(["box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,

      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));
interface countryProps {
  setCountryCode?: any;
}
const Dropdown: FC<countryProps> = ({ setCountryCode }) => {
  return (
    <FormControl
      variant="standard"
      sx={{
        marginRight: "20px",
        border: "1px solid #ddd",
        borderRadius: "6px",
      }}
    >
      <Select
        defaultValue="Last 10 Months"
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        sx={{ minWidth: "max-content" }}
        input={<BootstrapInput />}
      >
        <MenuItem value={"menu1"}>Last 10 Months</MenuItem>
        <MenuItem value={"menu2"}>Last 12 Months</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
