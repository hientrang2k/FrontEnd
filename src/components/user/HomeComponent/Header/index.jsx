import React from "react";
import { Box, Grid, Item } from "@mui/material";
import Logo from "../../../../assets/img/Logo.png";
import i18n from "../../../../translations";

const Header = () => {
  return (
    <Box className="flex px-[15%] justify-between bg-white pb-[16px]">
      <Box>
        <img src={Logo} />
      </Box>
      <Box>
        <div>
          <div>{i18n.t("header.special")}</div>
          <div>Tìm bác sĩ theo chuyên khoa</div>
        </div>
        <div>
          <div>Chuyên khoa</div>
          <div>Tìm bác sĩ theo chuyên khoa</div>
        </div>
        <div>
          <div>Chuyên khoa</div>
          <div>Tìm bác sĩ theo chuyên khoa</div>
        </div>
        <div>
          <div>Chuyên khoa</div>
          <div>Tìm bác sĩ theo chuyên khoa</div>
        </div>
      </Box>
    </Box>
  );
};

export default Header;
