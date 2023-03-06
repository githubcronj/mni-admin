import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { apiClient } from "../../utils/https";
import "./InvestorDetailPage.css";
import crown from "../../Assets/images/crown.png";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import arroww from "../../Assets/images/arroww.svg";
import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlockProfileModal from "../../Components/BlockUserModal/BlockProfileModal";
import BlockModal from "../../Components/BlockUserModal/BlockModal";
import UnBlockModal from "../../Components/BlockUserModal/UnBlockModal";
import moment from "moment";
interface MoreDetailsProps {
  MoreDetail: any;
}
// -----------------------
type RouteParams = {
  id: string;
};
//-------------------------

const InvestorDetails: FC<MoreDetailsProps> = ({ MoreDetail }) => {
  //------------------------------------
  const { id } = useParams<RouteParams>();
  const [form, setForm] = useState({
    0: {
      companyInfo: "",
      equityOffer: "",
      industry: "",
      isBlocked: false,
      signUpDate: "",
      createdAt: "",
      username: "",
      name: "",

      userId: "",
      uId: "",
      status: "",
      askPrice: "",
      email: "",
      form: "",
      location: "",
      subscription: "",
      profilePicture: null,
    },
  });

  const [date, setDate] = useState<any>();

  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(false);

  //    /investor/profile/:investorId
  useEffect(() => {
    apiClient.get(`/investor/details/${id}`).then((res) => {
      setForm(res.data.data);
      const createdAtString  = res?.data?.data[0].createdAt
      const createdAtDate = moment(createdAtString, "YYYY-MM-DD HH:mm:ss").toDate();
      const formattedDate = createdAtDate.toLocaleDateString();
      setDate(formattedDate);
    });
  }, []);

  //   /investor/block/:id
  const handleBlock = () => {
    apiClient.delete(`/investor/block/${id}`).then((res) => {
      setOpen(false);
      const newForm = { ...form };
      newForm[0].isBlocked = true;
      setForm(newForm);
    });
  };
  //      /investor/unblock/:id
  const handleUnBlock = () => {
    apiClient.delete(`/investor/unblock/${id}`).then((res) => {
      setOpen(false);
      const newForm = { ...form };
      newForm[0].isBlocked = false;
      setForm(newForm);
    });
  };
  //------------------------------------
  return (
    <>
      <Box className="moredetailsPage">
        <Container>
          <Link to={"/investor-page"} style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", padding: "25px" }}>
              <img src={arroww} alt="arrow" />

              <Typography
                sx={{ fontSize: "25px", marginLeft: "10px", color: "#000000" }}
                className="textBold"
              >
                Investor Details
              </Typography>
            </Box>
          </Link>

          <Box
            sx={{
              backgroundColor: "#ffffff",
              paddingTop: "15px",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex-start",
                backgroundColor:
                  form[0].subscription === "premium"
                    ? "#138707"
                    : form[0].subscription === "Premium"
                    ? "#138707"
                    : "#686868",
                padding: "5px 10px",
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
                width: "fit-content",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  color: "#ffffff",
                }}
              >
                <img width={"16px"} src={crown} alt="crown" />
                <Typography sx={{ marginTop: "3px", marginLeft: "7px" }}>
                  {form[0].subscription}
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={2}>
              <Grid className="BasicItems" item sm={12} xs={12} md={6}>
                <Box sx={{ ml: { lg: "160px", xs: "55px", sm: "120px" } }}>
                  <Avatar
                    sx={{ width: "222px", height: "222px" }}
                    src={
                      form[0].profilePicture
                        ? form[0].profilePicture
                        : "/broken-image.jpg"
                    }
                  />
                </Box>
                <Typography
                  className="textBold2"
                  sx={{ marginTop: "20px", fontSize: "28px" }}
                >
                  {/* ------------- */}
                  {form[0].name}
                  {/* --------------- */}
                </Typography>
                <Typography sx={{ marginTop: "5px", color: "#FF9A33" }}>
                  {/* ----------- */}
                  {form[0].uId}
                  {/* ---------------- */}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#F0F0F0",
                      borderRadius: "10px",
                      padding: "5px",
                      color: "#6D6D6D",
                      width: "fit-content",
                    }}
                  >
                    {form[0].status}
                  </Box>
                </Box>
              </Grid>
              <Grid className="BasicItems2" item sm={12} xs={12} md={6}>
                <Box>
                  <Typography
                    sx={{ marginBottom: "10px" }}
                    className="textBold"
                  >
                    All Details
                  </Typography>
                  <Box
                    className="investor-details-fontColor"
                    sx={{
                      backgroundColor: "#FAFAFA",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    {form[0].companyInfo
                      ? form[0].companyInfo
                      : "Nothing is Added Yet"}
                  </Box>

                  <Box
                    sx={{
                      backgroundColor: "#FAFAFA",
                      padding: "10px 30px",
                      borderRadius: "10px",
                      marginTop: "15px",
                    }}
                  >
                    <Grid container>
                      <Grid className="textBold2" md={6} sm={6} xs={12}>
                        Email
                      </Grid>
                      <Grid
                        sm={6}
                        md={6}
                        xs={12}
                        className="investor-details-fontColor"
                      >
                        {form[0].email}
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid className="textBold2" md={6} sm={6} xs={12}>
                        Sign Up Date
                      </Grid>
                      <Grid
                        sm={6}
                        md={6}
                        xs={12}
                        className="investor-details-fontColor"
                      >
                        {/* {form[0]?.createdAt
                          ? form[0]?.createdAt
                          : "Not Mentioned"} */}
                        {date ? date : "Not mentioned"} 
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid className="textBold2" md={6} sm={6} xs={12}>
                        Industry
                      </Grid>
                      <Grid
                        sm={6}
                        md={6}
                        xs={12}
                        className="investor-details-fontColor"
                      >
                        {form[0].industry ? form[0].industry : "Not Mentioned"}
                      </Grid>
                    </Grid>
                    {/* <Grid container>
                      <Grid className="textBold2" sm={6} md={6} xs={12}>
                        {MoreDetail?.form}
                      </Grid>
                      <Grid sm={6} md={6} xs={12}>
                        {MoreDetail?.formValue}
                      </Grid>
                    </Grid> */}
                    <Grid container>
                      <Grid className="textBold2" sm={6} md={6} xs={12}>
                        Location
                      </Grid>
                      <Grid
                        sm={6}
                        md={6}
                        xs={12}
                        className="investor-details-fontColor"
                      >
                        {form[0].location}
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box className="blockbtnbox" mt={7}>
                  {form[0].isBlocked ? (
                    <Button
                      variant="contained"
                      color="error"
                      className="blockbtn"
                      sx={{
                        textTransform: "none",
                        borderRadius: "10px",
                        px: "10px",
                        py: "5px",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Unblock This User
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{
                        textTransform: "none",
                        borderRadius: "10px",
                        py: "5px",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Block This User
                    </Button>
                  )}
                  <BlockModal
                    handleBlock={
                      form[0].isBlocked ? handleUnBlock : handleBlock
                    }
                    handleClose={() => setOpen(!open)}
                    open={open}
                    text={
                      form[0].isBlocked
                        ? "Do you want to unblock this user"
                        : null
                    }
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default InvestorDetails;
