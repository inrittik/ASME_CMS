import { Box, IconButton } from "@mui/material";
import React from "react";
import { PersonOutlined, SettingsOutlined } from "@mui/icons-material";

const Topbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      backgroundColor="#b8e7ff"
      alignItems="center"
      p={2}
    >
      <Box display="flex">
        <IconButton sx={{ margin: "0px 5px" }}>
          <PersonOutlined />
        </IconButton>
        <IconButton sx={{ margin: "0px 5px" }}>
          <SettingsOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
