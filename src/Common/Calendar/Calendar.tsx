import { Box } from "@mui/material";
import { border } from "@mui/system";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import caledar from "../../Assets/images/caledar.svg";
import arrow from "../../Assets/images/arrow.svg";
import "./Calendar.css";
import moment from "moment";

type Props = {
  fetchData?: any;
};
const Calendar = ({ fetchData }: Props) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setStartDate(date);

    fetchData(moment(date).format("MMMM Do YYYY, h:mm:ss a"));
  };

  return (
    <Box
      className="calenderBox"
      sx={{
        display: "flex",
        width: "max-content",
        border: "1px solid #ddd",
        padding: "5px 5px",
        backgroundColor: "#fff",
        borderRadius: "10px",
      }}
    >
      <img src={caledar} />
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => handleDateChange(date)}
        dateFormat="E,dd-MMMM-yyyy"
      />
      <img src={arrow} />
    </Box>
  );
};

export default Calendar;
