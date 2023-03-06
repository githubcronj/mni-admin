import React from "react";
import {
  FormControlLabel,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import BlockUserModal from "../../Components/BlockUserModal/BockUserModal";
import "./DatatableStyle.css";

const ActionButtons = (props: any) => {
  const {
    moreDetails,
    onDelete,
    isBlocked,
    textDetails = "More Details",
    onRemove,
    id,
    role,
  } = props;  
  

  return (
    <Box sx={{ display: "flex" }}>
      {moreDetails && (
        <Typography
          component={Link}
          to={moreDetails}
          sx={{
            color: "#ff9a33!important",
            fontSize: "12px",
            paddingTop: "5.5px",
            mr: 1,
          }}
        >
          {textDetails}
        </Typography>
      )}

      {onRemove && role !=="SuperAdmin" &&(
        <Button
          onClick={onRemove}
          sx={{
            color: "#8D877F!important",
            fontSize: "13px",
            paddingTop: "5.5px",
            textTransform: "none",
          }}
        >
          Remove
        </Button>
      )}
      {onDelete && (
        <BlockUserModal
          isBlocked={isBlocked}
          handleDelete={() => onDelete()}
          // text="Do you want to remove this admin user?"
        />
      )}
    </Box>
  );
};

export default ActionButtons;
