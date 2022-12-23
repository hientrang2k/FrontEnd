import React from "react";
import { Box, InputBase, IconButton, Paper } from "@mui/material";
import Logo from "../../../../assets/img/Logo.png";
import i18n from "../../../../translations";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profile from "../Profile";
import SearchIcon from "@mui/icons-material/Search";
import "../../HomePage/style.css";
import ListSelectHeader from "../ListSelectHeader";

const Header = () => {
  return (
    <Box component="div" className="layer grid">
      <Box className="flex pl-[15%] pr-[10%] justify-between bg-white py-[12px]">
        <Box component="div" className="mr-[30px]">
          <img src={Logo} alt="logo" />
        </Box>
        <Box
          component="div"
          className="flex w-full items-center justify-around mr-[7%]"
        >
          <div className="cursor-pointer text-[#1B262C] hover:text-[#068079]">
            <div className="font-bold ">{i18n.t("header.special")}</div>
            <div>{i18n.t("header.doctorBySpecial")}</div>
          </div>
          <div className="cursor-pointer hover:text-[#068079]">
            <div className="font-bold">{i18n.t("header.clinic")}</div>
            <div>{i18n.t("header.chooseClinic")}</div>
          </div>
          <div className="cursor-pointer hover:text-[#068079]">
            <div className="font-bold">{i18n.t("header.doctor")}</div>
            <div>{i18n.t("header.chooseDoctor")}</div>
          </div>
          <div className="cursor-pointer hover:text-[#068079]">
            <div className="font-bold">{i18n.t("header.combo")}</div>
            <div>{i18n.t("header.generalCheck")}</div>
          </div>
        </Box>
        <Box component="div" className="flex items-center justify-center ">
          <div className="flex items-center justify-center cursor-pointer hover:bg-[#fdf3e7] px-[20px] py-[10px] rounded-[30px] hover:text-[#068079]">
            <div>
              <HelpOutlineIcon
                sx={{ color: "#e1820c", marginRight: "4px" }}
                fontSize="small"
              />
            </div>
            <div className="whitespace-nowrap">{i18n.t("header.support")}</div>
          </div>
        </Box>
        <Box
          component="div"
          className="flex items-center justify-center cursor-pointer ml-[5%]"
        >
          <Profile />
        </Box>
      </Box>
      <Box
        component="div"
        className="flex items-center justify-center text-white text-[34px] uppercase mt-[120px] mb-[50px] flex-col "
      >
        <div className="font-normal text-shadow">{i18n.t("header.title1")}</div>
        <div className="font-bold text-shadow">{i18n.t("header.title2")}</div>
      </Box>
      <Paper
        component="form"
        sx={{
          p: "4px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          borderRadius: "30px",
          margin: "auto",
          backgroundColor: "#4fbdc09c",
          marginBottom: "240px",
        }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, color: "#fff", p: "5px" }}
          placeholder={i18n.t("header.search")}
        />
      </Paper>
      <Box component="div">
        <ListSelectHeader />
      </Box>
    </Box>
  );
};

export default Header;
