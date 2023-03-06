import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
  top: "150%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "10px 20px",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  overflow:"scroll",
};

type props = {
  userData: any[];
  handleCheckClick: any;
  selected: any;
  handleDelete: any;
};

const BlogModals = ({
  userData,
  handleCheckClick,
  selected,
  handleDelete,
}: props) => {
  const [open, setOpen] = React.useState(false);
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
                  Select the blogs to delete
                </Typography>

                <img onClick={handleClose} src={cross} alt="cross" />
              </Box>
              <Box sx={{ paddingTop: "30px", paddingLeft: "10px" }}>
                <Grid container spacing={2}>
                  {userData.map((item, index) => (
                    <Grid xs={12} sm={6} md={6} key={index}>
                      <FormGroup
                        className="modalsbox"
                        key={`checkgroup-${index}`}
                      >
                        <FormControlLabel
                          key={`check-${index}`}
                          control={
                            <Checkbox
                              checked={selected.includes(item.blogId)}
                              onChange={() => handleCheckClick(item.blogId)}
                            />
                          }
                          label={item.heading}
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

export default BlogModals;
