import React from "react";
import { Box } from "@mui/material";
import i18n from "../../../../translations";
import CheckIcon from "@mui/icons-material/Check";
import appStore from "../../../../assets/img/app-store.png";
import googlePlay from "../../../../assets/img/google-play.png";

const DownloadApp = () => {
  return (
    <Box
      component="div"
      className="py-[34px] flex flex-col items-center justify-center"
    >
      <div className="font-medium text-[24px] mb-[20px]">
        {i18n.t("downloadApp.title")}
      </div>
      <ul>
        <li>
          <CheckIcon
            sx={{
              marginRight: "8px",
              color: "#45c3d2",
            }}
          />
          {i18n.t("downloadApp.advance1")}
        </li>
        <li>
          <CheckIcon
            sx={{
              marginRight: "8px",
              color: "#45c3d2",
            }}
          />
          {i18n.t("downloadApp.advance2")}
        </li>
        <li>
          <CheckIcon
            sx={{
              marginRight: "8px",
              color: "#45c3d2",
            }}
          />
          {i18n.t("downloadApp.advance3")}
        </li>
      </ul>
      <div className="flex gap-[10px] mt-[16px]">
        <div className="w-[150px]">
          <img src={appStore} alt="" />
        </div>
        <div className="h-[50px]">
          <img src={googlePlay} alt="" />
        </div>
      </div>
      <div></div>
    </Box>
  );
};

export default DownloadApp;
