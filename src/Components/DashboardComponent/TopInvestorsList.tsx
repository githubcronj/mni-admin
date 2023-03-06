import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";

import "./topinvestorlist.css";

interface TopInvestorsListprops {
  username?: string;
  userid?: string | number;
  profilePicture?: string;
  number?: string | number;
}
interface TopInvestorsListprops {
  TopInvestorsListprops: any;
}

const TopInvestorsList: FC<TopInvestorsListprops> = ({
  TopInvestorsListprops,
} ) =>  {
  
  return (
    <>
      <Box className="listBox">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Avatar
              sx={{ mr: "10px" }}
              src={
                TopInvestorsListprops.profilePicture
                  ? TopInvestorsListprops.profilePicture
                  : "/broken-image.jpg"
              }
            />
          </Box>
          <Box className="midBox">
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              {TopInvestorsListprops.name
                ? TopInvestorsListprops.name
                : TopInvestorsListprops.companyName}
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "#8D877F", mr: "7px" }}>
              {TopInvestorsListprops.userId
                ? "User Id -" + TopInvestorsListprops.userId
                : "User Id -" + TopInvestorsListprops.uId}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "bold", color: "#FF9A33" }}
          >
            {TopInvestorsListprops.connections
              ? TopInvestorsListprops.connections.length
              : "0"}
          </Typography>
          <Typography sx={{ fontSize: "13px", color: "#8D877F" }}>
            Connections
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default TopInvestorsList;
