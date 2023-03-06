import { Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import BlockUserModal from "../../Components/BlockUserModal/BockUserModal";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const DTToolbar = (props: any) => {
  const { numSelected, onDelete, title, selected, addUser } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => "#ffffff",
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
          style={{ fontWeight: "bold", fontSize: "15px" }}
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
          style={{ fontWeight: "bold", fontSize: "20px" }}
        >
          {title}
        </Typography>
      )}
      {numSelected > 0 && onDelete ? (
        <BlockUserModal
          bockSelected
          handleDelete={() => onDelete(selected)}
          blockedItems={selected}
        />
      ) : (
        <></>
      )}
      {addUser ? (
        <Link to={"/add-user"} style={{ textDecoration: "none" }}>
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
      ) : (
        <></>
      )}
    </Toolbar>
  );
};

export default DTToolbar;
