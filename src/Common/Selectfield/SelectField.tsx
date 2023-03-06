import { useState, ChangeEvent } from "react";
import "./TextField.css";
import {
  InputBase,
  Box,
  InputLabel,
  NativeSelect,
  FormControl,
  alpha,
  styled,
  MenuItem,
  Select,
} from "@mui/material";

interface textfieldProps {
  placeholder?: string;
  label?: string;
  type?: string;
  showBox?: any;
  name?: any;
  value?: any;
  onChange?: any;
  id?: any;
  disabled?: boolean;
  options?: any;
}

const BootstrapInput = styled(Select)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    color: "#777E90",
    border: "1px solid #8D877F40",
    fontSize: 18,
    padding: "15px",
    borderBottom: 0,
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
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
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
      borderBottom: 0,
    },
  },
}));

export default function Selectfield(props: textfieldProps) {
  const [value, setvalue] = useState<string>("10");

  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "auto" },
          gap: 2,
          marginTop: "50px",
        }}
      >
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            {props.label ? props.label : "Role"}
          </InputLabel>
          <BootstrapInput
            placeholder={props.placeholder ? props.placeholder : ""}
            type={props.type ? props.type : "null"}
            id={props.id ? props.id : "bootstrap-input"}
            value={props.value ? props.value : ""}
            name={props.name ? props.name : ""}
            onChange={props.onChange ? (e) => props.onChange(e) : () => {}}
            disabled={props.disabled ? true : false}
          >
            {props.options.map((option: any, index: number) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </BootstrapInput>
        </FormControl>
      </Box>
    </>
  );
}
