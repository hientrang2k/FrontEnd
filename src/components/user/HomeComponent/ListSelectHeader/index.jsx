import React from "react";
import { Box, Avatar } from "@mui/material";
import i18n from "../../../../translations";
import "../../HomePage/style.css";
import {
  chuyenkhoa,
  xetnghiem,
  nhakhoa,
  tainha,
  tongquat,
  phauthuat,
  suckhoeDN,
  tuxa,
  trinao,
} from "../../../../assets/img-header";

const ListSelectHeader = () => {
  return (
    <Box component="div" className="bgr-gradient pt-[50px]">
      <Box component="div" className="flex flex-col items-center">
        <div className="w-[50px] h-[50px] bg-white items-center justify-center flex rounded-[50%]">
          <img alt="" src={chuyenkhoa} className="w-[34px]" />
        </div>
        <div className="font-medium">{i18n.t("header.listSelect.item1")}</div>
        <div className="font-medium">
          {i18n.t("header.listSelect.sub-item1")}
        </div>
      </Box>
    </Box>
  );
};

export default ListSelectHeader;
