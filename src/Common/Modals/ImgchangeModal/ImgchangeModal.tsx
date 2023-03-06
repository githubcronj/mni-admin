import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import tick from "../../../Assets/images/tick.svg";
import "./imgchangemodal.css";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

interface imgchangemodalprops {
  img1?: string;
  text?: string;
  btntext?: string;
  onClick?: any;
  errors?: any;
}

export default function ImgchangeModal(props: imgchangemodalprops) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    props.onClick();
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <ButtonComponent
        width="170px"
        children={props.btntext ? props.btntext : "delete"}
        handleClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalBox" sx={style}>
          {/* {props.img1 ? props.img1 : tick} */}
          <img src={props.img1 ? props.img1 : tick} alt="img" />
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            {props.text ? props.text : "All changes saved!"}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
