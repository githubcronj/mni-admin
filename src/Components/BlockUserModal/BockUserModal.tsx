import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import tick from "../../Assets/images/tick.svg";
import ImgchangeModal from "../../Common/Modals/ImgchangeModal/ImgchangeModal";
import { makeStyles, Theme } from "@mui/material";

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
  text?: string;
  tickText?: String;
  subText?: string;
  buttonText1?: string;
  buttonText2?: string;
  blockText?: string;
  status?: any;
  bockSelected?: any;
  isBlocked?: Boolean;
  handleDelete?: any;
  blockAskText?: string;
  blockedItems?: any;
  id?: string;
}

export default function BlockUserModal(props: modalProps) {
  const [open, setOpen] = React.useState(false);
  const [isBlocked, setblocked] = React.useState(false);
  const [nested, setNested] = React.useState(false);

  const handleOpen = () => {
    if (isBlocked) {
      setOpen(false);
    } else setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleBlock = () => {
    // setOpen(false);
    props.handleDelete();

    setblocked(true);
    setNested(true);
  };

  return (
    <div>
      {props.bockSelected ? (
        <Button
          variant="contained"
          sx={{
            color: "#ffffff",
            backgroundColor: "#F01731",
            textTransform: "none",
            borderRadius: "10px",
            boxShadow: "0px 6px 20px #FF9A33",
          }}
          className="blockButton"
          onClick={handleOpen}
        >
          Block Selected
        </Button>
      ) : isBlocked || props.isBlocked ? (
        <Typography
          sx={{
            color: "#8D877F",
            fontSize: "12px",
            fontWeight: "bold",
            cursor: "no-drop",
            margin: "7px 10px",
          }}
        >
          Blocked
        </Typography>
      ) : (
        <Button sx={{ textTransform: "none" }} onClick={handleOpen}>
          <Typography
            sx={{
              color: "#F0142F",
              textDecoration: "underline",
              fontSize: "14px",
            }}
          >
            Block
          </Typography>
        </Button>
      )}
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
                  {props.tickText ? props.tickText : "All changes saved!"}
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
                  {props.text ? props.text : "Do you want to block this user?"}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {props.subText ? props.subText : null}
                </Typography>
                <Button
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#FF9A33 !important",
                    borderRadius: "10px",
                    m: 1,
                  }}
                  onClick={() => handleBlock()}
                >
                  {props.buttonText1 ? props.buttonText1 : "Yes"}
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
                  {props.buttonText2 ? props.buttonText2 : "No"}
                </Button>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
