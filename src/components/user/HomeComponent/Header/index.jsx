import React from "react";
import { Box } from "@mui/material";
import Logo from "../../../../assets/img/Logo.png";
import i18n from "../../../../translations";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profile from "../Profile";

const Header = () => {
  return (
    <Box className="flex pl-[15%] pr-[10%] justify-between bg-white">
      <Box component="div" className="mr-[30px]">
        <img src={Logo} />
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
  );
};

export default Header;
