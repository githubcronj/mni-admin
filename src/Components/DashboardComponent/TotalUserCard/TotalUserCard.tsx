import React, { FC } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

import "./TotalUserCard.css";

interface Cardprops {
  TotalUserCardprops: any;

}

const TotalUserCard: FC<Cardprops> = ({ TotalUserCardprops }) => {
  return (
    <Card
      sx={{
        display: "flex",
        padding: "15px 40px",
        width: "max-content",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box>
          <Typography variant="subtitle1" color="#6D6D6D" component="div">
            {TotalUserCardprops.users}
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{ fontWeight: "bold", padding: "5px" }}
            component="div"
            variant="h5"
          >
            {TotalUserCardprops.num}
          </Typography>
        </Box>

        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pl: 1,
            pb: 1,
          }}
        >
          <img src={TotalUserCardprops.img1} alt="img" />

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            than last month
          </Typography>
        </Box> */}
      </Box>
      <Box className="totaluserimg" />
      <img
        style={{ width: TotalUserCardprops.userimgWidth }}
        src={TotalUserCardprops.usersimg}
        alt="img"
      />
    </Card>
  );
};
export default TotalUserCard;
