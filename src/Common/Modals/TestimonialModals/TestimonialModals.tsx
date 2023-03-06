import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container, Grid } from "@mui/material";
import cross from "../../../Assets/images/cross.svg";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "./TestimonialModals.css";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "10px 20px",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
};

type props = {
  testimonials: any[];
  handleCheckClick: any;
  selected: any;
  handleDelete: any;
};

const TestimonialModals = ({
  testimonials,
  handleCheckClick,
  selected,
  handleDelete,
}: props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box>
        <Container>
          <ButtonComponent
            handleClick={handleOpen}
            customStyle={{
              color: "#FF9A33",
              backgroundColor: "#ffffff",
            }}
          >
            Delete
          </ButtonComponent>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="modalbox" sx={style}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Select the testimonial to delete
                </Typography>

                <img onClick={handleClose} src={cross} alt="cross" />
              </Box>
              <Box sx={{ padding: "10px" }}>
                <Grid container spacing={2}>
                  {testimonials.map((testimonial, index) => (
                    <Grid xs={12} sm={6} md={6}>
                      <FormGroup className="modalsbox">
                        <FormControlLabel
                          control={
                            <Checkbox
                              defaultChecked
                              checked={selected.includes(testimonial.uId)}
                              onChange={() => handleCheckClick(testimonial.uId)}
                            />
                          }
                          label={testimonial.name}
                        />
                      </FormGroup>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <ButtonComponent
                handleClick={handleDelete}
                classNames="deletebtn"
                children="delete"
              />
            </Box>
          </Modal>
        </Container>
      </Box>
    </div>
  );
};

export default TestimonialModals;
