import React from "react";
import { Box } from "@mui/material";
import Header from "../HomeComponent/Header";
import "./style.css";
import Slideshow from "../HomeComponent/ListTopic";
import CommonSpecial from "../HomeComponent/CommonSpecial";
import TeleMedicine from "../HomeComponent/TeleMedicine";
import OutStandingClinic from "../HomeComponent/OutStandingClinic";
import OutStandingDoctor from "../HomeComponent/OutStandingDoctor";

const HomePage = () => {
  return (
    <Box>
      <Box className="header-slide">
        <Header />
      </Box>
      <Slideshow />
      <TeleMedicine />
      <CommonSpecial />
      <OutStandingClinic />
      <OutStandingDoctor />
    </Box>
  );
};

export default HomePage;
