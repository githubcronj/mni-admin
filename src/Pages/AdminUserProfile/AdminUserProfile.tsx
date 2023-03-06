import {
  Container,
  Box,
  Typography,
  Grid,
  Toolbar,
  Avatar,
  Badge,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import adminuser from "../../Assets/images/AdminUsers.png";
import "./AdminUserProfile.css";
import Calendar from "../../Common/Calendar/Calendar";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import Modal from "@mui/material/Modal";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../utils/constants";
import { apiClient } from "../../utils/https";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};
interface UserProps {
  setFlag?: any;
}

const AdminUserProfile: React.FC<UserProps> = ({ setFlag }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    profilePicture: "",
  });
  // const userData = useSelector((state: any) => state.auth.login);
  const userId = useSelector((state: any) => state.auth.login.userId);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient.get(`/getProfileAdmin?id=${userId}`).then((res: any) => {
      setUserData(res.data.data);
    });
  }, []);

  const handleLogOut = () => {
    dispatch({ type: actionTypes.LOGOUT });
  };
  return (
    <div>
      <Box className="adminuserprofile">
        <Container>
          <Grid
            sx={{ padding: "10px 0px", marginTop: "20px" }}
            container
            spacing={4}
          >
            <Grid item xs={12} sm={6} md={8}>
              <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
                Settings
              </Typography>
            </Grid>
            <Grid item xs={9} sm={6} md={4}>
              {/* <Calendar /> */}
            </Grid>
          </Grid>
          <Box
            className="adminprofile-content"
            sx={{ pb: { md: "30px", sm: "20px", xs: "20px" } }}
          >
            <Box>
              <Toolbar>
                <Typography variant="h5">Admin User Profile</Typography>
              </Toolbar>
            </Box>
            <Grid container spacing={4} className="ap-content">
              <Grid
                item
                xs={12}
                md={4}
                sm={5}
                className="adminuseravatar"
                sx={{ p: { md: "20px" } }}
              >
                <Avatar
                  src={userData.profilePicture}
                  sx={{
                    width: "154px",
                    height: "154px",
                    ml: { md: "30px", sm: "20px", xs: "10px" },
                  }}
                />
                <Typography className="adminbadge">Admin</Typography>
              </Grid>

              <Grid item xs={12} md={3} sm={2}>
                <Typography variant="subtitle1" pt={6.5}>
                  Name
                </Typography>
                <Typography variant="subtitle2" className="admin-info">
                  {userData.name}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} sm={2}>
                <Typography variant="subtitle1" pt={6.5}>
                  Email Id
                </Typography>
                <Typography variant="subtitle2" className="admin-info">
                  {userData.email}
                </Typography>
              </Grid>
            </Grid>
            <Container className="btn-container">
              <Link to={"/editdetail"} style={{ textDecoration: "none" }}>
                <ButtonComponent
                  classNames="editdetailbtn"
                  children="Edit Details"
                />
              </Link>

              <Button
                sx={{
                  color: "#FF5C53",
                  backgroundColor: "#fff",
                  border: "1px solid #FF5C53",
                  padding: "20px",
                  height: "35px",
                  mt: "20px",
                  px: { xs: "1px" },
                  fontSize: { sm: "10px", xs: "9.2px" },
                }}
                onClick={handleLogOut}

              >
                <LogoutIcon sx={{ mr: "10px", width: { xs: "20%" } }} /> Log Out
              </Button>
              {/* -----------------------modal part----------------- */}

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{
                      textAlign: "center",
                      fontSize: "18px",
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    Do you want to logout from your account?
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          color: "#ffffff",
                          backgroundColor: "#FF9A33 !important",
                          borderRadius: "10px",
                          m: 1,
                        }}
                        onClick={handleLogOut}
                      >
                        yes
                      </Button>
                    </Link>
                    <Button
                      sx={{
                        color: "#FF9A33",
                        border: "1px solid #FF9A33",
                        borderRadius: "10px",
                        m: 1,
                      }}
                      onClick={handleClose}
                    >
                      No
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </Container>
          </Box>
        </Container>
      </Box>
    </div>
  );
};
export default AdminUserProfile;
