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
        justifyContent: "space-between",
        padding: "10px 10px",
        width: "270px",
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
            sx={{ fontWeight: "bold", padding: "3px" }}
            component="div"
            variant="h5"
          >
            {TotalUserCardprops.numbers}
          </Typography>
        </Box>
      </Box>
      <Box className="totaluserimg">
        <img
          style={{ width: TotalUserCardprops.userimgWidth }}
          src={TotalUserCardprops.usersimg}
          alt="img"
        />
      </Box>
    </Card>
  );
};
export default TotalUserCard;
