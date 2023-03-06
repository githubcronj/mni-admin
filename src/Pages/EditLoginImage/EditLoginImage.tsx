import { Box, Container, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./EditLoginImage.css";
import arroww from "../../Assets/images/arroww.svg";
import upload from "../../Assets/images/upload.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import SucessModal from "../../Common/Modals/ImgchangeModal/SucessModal";
import { apiClient } from "../../utils/https";
import { toast } from "react-toastify";

type RouteParams = {
  id: string;
};

export default function EditLoginImage() {
  const [image, setImage] = useState({ url: "", preview: "" });
  const [open, setOpen] = React.useState(false);

  const onDrop = useCallback((acceptedFiles: any) => {
    setImage({
      ...image,
      url: acceptedFiles[0],
      preview: URL.createObjectURL(acceptedFiles[0]),
    });
  }, []);

  const { id } = useParams<RouteParams>();
  let navigate = useNavigate();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
      "doc/pdf": [".pdf"],
    },
    maxSize: 1e7,
  });

  const handleSubmit = (e: any) => {
    const formData = new FormData();
    formData.append("loginImage", image.url);
    apiClient
      .put(`/updateLoginImage?key=${id}`, formData)
      .then((res: any) => {
        setOpen(true);
        setTimeout(() => {
          navigate("/pages");
        }, 1000);
      })
      .catch((err: any) => {
        toast.error("cannot upload same image");
      });
  };

  useEffect(() => {
    apiClient.get(`/getImageLink?key=${id}`).then((res: any) => {
      setImage({
        ...image,
        url: res.data.data.loginImage,
        preview: res.data.data.loginImage,
      });
    });
  }, []);

  return (
    <div>
      <Box className="editloginimage">
        <Container>
          <Link to={"/pages"} style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", padding: "25px" }}>
              <img src={arroww} alt="arrow" />

              <Typography
                sx={{ fontSize: "25px", marginLeft: "15px", color: "#000000" }}
                className="textBold"
              >
                Investor Login Image
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
            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                className="img-upload"
                sx={{ p: { lg: "60px", md: "60px", sm: "20px", xs: "10px" } }}
                {...getRootProps()}
              >
                <Box sx={{ p: 2 }}>
                  <img
                    src={image.preview ? image.preview : upload}
                    alt="upload"
                    width="220"
                    height="220"
                  />
                </Box>
                <Box>
                  <Typography variant="subtitle1" className="selectfile">
                    Select a file or drag and drop here
                  </Typography>
                  <Typography variant="subtitle2" className="filetype">
                    JPG, PNG or PDF, file size no more than 10MB
                  </Typography>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Button
                    variant="outlined"
                    color="warning"
                    component="label"
                    sx={{ textTransform: "none", borderRadius: "7px" }}
                  >
                    Select File
                  </Button>
                </Box>
              </Box>
            </Container>

            <Box sx={{ p: 2 }}>
              <SucessModal
                text="Image saved!"
                btntext="Change Image"
                onClick={handleSubmit}
                handleClose={() => setOpen(false)}
                open={open}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
