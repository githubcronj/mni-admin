import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container, Grid } from "@mui/material";
import cross from "../../../Assets/images/cross.svg";
import FormGroup from "@mui/material/FormGroup";
import "./TestimonialModals.css";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

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
};
const EditTestimonialModal = ({ testimonials }: props) => {
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
              padding: "100px",
            }}
          >
            Edit
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
                  Select the testimonial to Edit
                </Typography>

                <img onClick={handleClose} src={cross} alt="cross" />
              </Box>
              <Box sx={{ padding: "10px" }}>
                <Grid container spacing={2}>
                  {testimonials.map((item, index) => (
                    <Grid xs={12} sm={6} md={6}>
                      <FormGroup className="modalsbox">
                        <Link
                          to={`/edit-testimonial/${item.uId}`}
                          style={{ textDecoration: "none", color: "#FF9A33" }}
                        >
                          <Button variant="text" color="warning">
                            {item.name}
                          </Button>
                        </Link>
                      </FormGroup>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* <ButtonComponent
                handleClick={handleClose}
                classNames="deletebtn"
                children="Edit"
              /> */}
            </Box>
          </Modal>
        </Container>
      </Box>
    </div>
  );
};

export default EditTestimonialModal;
