import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import i18n from "../../../../translations";

const Profile = () => {
  return (
    <Box
      component="div"
      className="flex items-center justify-center cursor-pointer gap-[12px] px-[20px] py-[10px] hover:bg-[#f4fbfc] rounded-[30px] hover:text-[#068079]"
    >
      <Avatar alt="avatar" src="" sx={{ height: "30px", width: "30px" }} />
      <Typography className="!text-sm ">Admin</Typography>
    </Box>
  );
};

export default Profile;
