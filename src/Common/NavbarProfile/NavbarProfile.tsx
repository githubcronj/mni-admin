import React, { useEffect, useState } from "react";
import "./NavbarProfile.css";
import {
  Grid,
  Typography,
  Avatar,
  Button,
  Divider,
  Box,
  Drawer,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { userInfo } from "../../DB/NavBarProfileArr/NavbarprofileArr";
import Popover from "@mui/material/Popover";
import { actionTypes } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { apiClient } from "../../utils/https";

// interface navProfileProps {
//   name: string;
//   img: string;
// }
const NavbarProfile = () => {
  const [showPop, setShowPop] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const dispatch = useDispatch();
  const { login } = useSelector((state: any) => state.auth);
  const userId = useSelector((state: any) => state.auth.login.userId);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    profilePicture: "",
  });

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handelPop = () => {
    setShowPop(true);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogOut = () => {
    dispatch({ type: actionTypes.LOGOUT });
  };

  useEffect(() => {
    apiClient.get(`/getProfileAdmin?id=${userId}`).then((res: any) => {
      setUserData(res.data.data);
    });
  }, []);

  return (
    <Grid>
      <Grid sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt="Remy Sharp"
          src={
            userData?.profilePicture ? userData?.profilePicture : userInfo?.img
          }
          onClick={handleClick}
        />

        <Drawer
          id="menu-appbar"
          anchor="top"
          open={open}
          onClose={handleClose}
          sx={{
            display: { xs: "block", md: "none", sm: "none" },
            padding: "5px",
            mt: 7,
          }}
        />

        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
              sm: "block",
            },
          }}
        >
          <Typography
            className="navDropdown"
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            {login.name} <KeyboardArrowDownIcon sx={{ color: "#000000" }} />
          </Typography>

          <Popover
            sx={{ top: "20px" }}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box sx={{ width: "200px" }}>
              <Box
                sx={{
                  display: { xs: "block", md: "none", sm: "none" },
                }}
              >
                <Typography
                  className="popOverFont"
                  sx={{ p: 2, textAlign: "center" }}
                >
                  {userInfo?.name}
                </Typography>
              </Box>
              <Link to={"/setting"} style={{ textDecoration: "none" }}>
                <Typography
                  className="popOverFont"
                  sx={{
                    p: 2,
                    textAlign: "center",
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  View Profile
                </Typography>
              </Link>
              <Divider />
              <Typography
                className="popOverFont"
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  color: "red",
                  textAlign: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={handleLogOut}
              >
                <LogoutIcon sx={{ marginRight: "6px", cursor: "pointer" }} />{" "}
                Log Out
              </Typography>
            </Box>
          </Popover>
        </Box>
      </Grid>
    </Grid>
  );
};
export default NavbarProfile;
