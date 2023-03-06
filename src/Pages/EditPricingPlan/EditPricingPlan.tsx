import {
  Typography,
  Box,
  Container,
  Grid,
  FormHelperText,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import "./EditPricingPlan.css";
import React, { useEffect, useState } from "react";
import arroww from "../../Assets/images/arroww.svg";
import Textfield from "../../Common/Textfield/Textfield";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiClient } from "../../utils/https";
import SucessModal from "../../Common/Modals/ImgchangeModal/SucessModal";
import { validate } from "validate.js";
import { PRICING } from "../../utils/validations";
import axios from "axios";

type RouteParams = {
  id: string;
};

export default function EditPricingPlan() {
  const [index, setindex] = useState<number>(8);
  const displayInput = () => {
    setindex((prev) => (prev = prev + 1));
  };

  const [data, setData] = useState<any>();
  const [form, setForm] = useState({ premiumPlan: data?.price, basicPlan: 0 });
  const [startupData, setStartupData] = useState<any>();
  const [open, setOpen] = useState(false);
  const [investorPriceId, setInvestorPriceId] = useState<any>();
  const [startupPriceId, setStartupPriceId] = useState<any>();
  const handleClose = () => setOpen(false);



  const [errors, setErrors] = useState({
    premiumPlan: [],
    basicPlan: [],
  });
  const { id } = useParams<RouteParams>();
  let navigate = useNavigate();



  // useEffect(() => {
  //   apiClient.get(`/getPricing?key=${id}`).then((res: any) => {
  //     setForm(res.data.data);
  //     console.log("result -> ", res.data.data)
  //   });
  // }, []);

  useEffect(() => {
    apiClient.get(`/investorplan`).then((res: any) => {
      setData(res?.data.data);

      setInvestorPriceId(res?.data.data[0]._id);
    });

    apiClient.get(`/startupplan`).then((res: any) => {
      setStartupData(res?.data.data);

      setStartupPriceId(res?.data.data[0]._id);
    });
  }, []);

  // const dataArr = data?.map((item: any) => item.category);
  // console.log("My Data -> ", dataArr);

  const fields = [
    {
      label: "Input fields 1",
      placeholder: "Limited search result (No premium investors)",
    },
    {
      label: "Input fields 6",
      placeholder: "Get access to premium investors",
    },
    {
      label: "Input fields 2",
      placeholder: "One way connection (if investor wants to connect)",
    },
    {
      label: "Input fields 7",
      placeholder: "Unlimited search results",
    },
    {
      label: "Input fields 3",
      placeholder: "Zero commissions on deal",
    },
    {
      label: "Input fields 8",
      placeholder: "Connect to unlimited investors",
    },
    {
      label: "Input fields 4",
      placeholder: "Chat with connected investors",
    },
    {
      label: "Input fields 9",
      placeholder: "Chat with unlimited investors",
    },
    {
      label: "Input fields 5",
      placeholder: "Tagged as premium",
    },
    {
      label: "Input fields 10",
      placeholder: "Tagged as premium",
    },
    {
      label: "Input fields 11",
      placeholder: "Tagged as premium",
    },
    {
      label: "Input fields 12",
      placeholder: "Tagged as premium",
    },
  ];

  const handleSubmit = (e: any) => {
    let errors = validate(form, PRICING);
    setErrors({ ...errors });
    if (!errors && data.length === 0) {
      const dataInput = {
        plan: "premium",
        price: form.premiumPlan,
        // category: "investor",
      };
      apiClient.post(`/admin/investorplan`, dataInput).then((res: any) => {
        setOpen(true);
        // console.log(res);
        setTimeout(() => {
          navigate("/pages");
        }, 1000);
      });
    } else {
      const dataInput = {
        plan: "premium",
        price: form.premiumPlan,
        // category: "investor",
      };
      apiClient
        .put(`/admin/investorplan/${investorPriceId}`, dataInput)
        .then((res: any) => {
          // console.log(res);
          setOpen(true);
          setTimeout(() => {
            navigate("/pages");
          }, 1000);
        });
    }
  };

  const handleSubmitStartup = (e: any) => {
    let errors = validate(form, PRICING);
    setErrors({ ...errors });
    if (!errors && startupData.length === 0) {
      const dataInput = {
        plan: "premium",
        price: form.premiumPlan,
        // category: "startup",
      };
      apiClient.post(`/admin/startupplan`, dataInput).then((res: any) => {
        // console.log(res);
        setOpen(true);
        setTimeout(() => {
          navigate("/pages");
        }, 1000);
      });
    } else {
      const dataInput = {
        plan: "premium",
        price: `${form.premiumPlan}`,
        // category: "startup",
      };

      apiClient
        .put(`/admin/startupplan/${startupPriceId}`, dataInput)
        .then((res: any) => {
          // console.log(res);
          setOpen(true);
          setTimeout(() => {
            navigate("/pages");
          }, 1000);
        });
    }
  };
  const capitalizeFirst = (str: any) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <Box className="editpricingpage">
        <Container>
          <Link to={"/pages"} style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", padding: "25px" }}>
              <img src={arroww} alt="arrow" />

              <Typography
                sx={{ fontSize: "25px", marginLeft: "15px", color: "#000000" }}
                className="textBold"
              >
                {capitalizeFirst(id)} Pricing Plan
              </Typography>
            </Box>
          </Link>
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              columnGap: "30px",
              p: { md: "30px", sm: "20px", xs: "10px" },
            }}
          >
            <Grid container columnSpacing={5}>
              <Grid item xs={12} sm={12} md={6}>
                <Textfield
                  label="Basic Price"
                  type="text"
                  placeholder="0"
                  name="basicPlan"
                  // value={form.basicPlan}
                  onChange={(e: any) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  disabled
                />
                {errors ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.basicPlan ? errors.basicPlan : ""}
                  </FormHelperText>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Textfield
                  label="Premium Price"
                  type="text"
                  placeholder="Enter your premium plan price"
                  name="premiumPlan"
                  value={form.premiumPlan}
                  onChange={(e: any) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                />
                {errors ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.premiumPlan ? errors.premiumPlan : ""}
                  </FormHelperText>
                ) : null}
              </Grid>
            </Grid>
            {/* <Box className="position">
              <ButtonComponent
                classNames="addinputfieldbtn"
                children="Add Input Fields"
                handleClick={displayInput}
              />
            </Box> */}
            {/* <Grid container columnSpacing={5}>
              {fields.map((InputField, counter) =>
                counter <= index ? (
                  <Grid item xs={12} sm={12} md={6} gridTemplateColumns="3,1fr">
                    <Textfield
                      label={InputField.label}
                      type="text"
                      placeholder={InputField.placeholder}
                    />
                  </Grid>
                ) : null
              )}
            </Grid> */}
            <Box className="both-btn">
              {/* <ButtonComponent  width="170px" children="Save Changes" /> */}
              {id === "investor" ? (
                <SucessModal
                  text="All changes saved!"
                  btntext="Save Changes"
                  onClick={handleSubmit}
                  handleClose={handleClose}
                  open={open}
                />
              ) : (
                <SucessModal
                  text="All changes saved!"
                  btntext="Save Changess"
                  onClick={handleSubmitStartup}
                  handleClose={handleClose}
                  open={open}
                />
              )}

              <Link to={"/pages"} style={{ textDecoration: "none" }}>
                <ButtonComponent classNames="discardbtn" children="Discard" />
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
