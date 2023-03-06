import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import tick from "../../Assets/images/tick.svg";
import ImgchangeModal from "../../Common/Modals/ImgchangeModal/ImgchangeModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  height: 190,
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  p: "30px 60px",
  textAlign: "center",
};

interface modalProps {
  handleClose?: any;
  handleBlock?: any;
  open?: any;
  tickText?: string;
  subText?: string;
  text?: any;
  buttonText1?: string;
  buttonText2?: string;
}

export default function BlockModal(props: modalProps) {
  const [isBlocked, setblocked] = React.useState(false);
  const [nested, setNested] = React.useState(false);
  const {
    handleClose,
    handleBlock,
    open,
    tickText,
    text,
    subText,
    buttonText1,
    buttonText2,
  } = props;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {nested ? (
              <Box className="modalBox" sx={style}>
                {/* {props.img1 ? props.img1 : tick} */}
                <img src={tick} alt="img" />
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  {tickText ? tickText : "Done! The user is blocked!"}
                </Typography>
              </Box>
            ) : (
              <>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "helvetica",
                  }}
                  id="transition-modal-title"
                  component="h2"
                >
                  {text ? text : "Do you want to block this user?"}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {subText ? subText : null}
                </Typography>
                <Button
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#FF9A33 !important",
                    borderRadius: "10px",
                    m: 1,
                  }}
                  onClick={handleBlock}
                >
                  {buttonText1 ? buttonText1 : "Yes"}
                </Button>
                <Button
                  sx={{
                    color: "#FF9A33",
                    border: "1px solid #FF9A33",
                    borderRadius: "10px",
                    m: 1,
                  }}
                  onClick={handleClose}
                >
                  {buttonText2 ? buttonText2 : "No"}
                </Button>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
