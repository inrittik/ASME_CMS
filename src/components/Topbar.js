import { Box, IconButton } from "@mui/material";
import React from "react";
import { PersonOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Topbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const cookies = new Cookies();
    cookies.remove("ASME_Website", { path: "/" });
    navigate("/login");
  }
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      backgroundColor="#b8e7ff"
      alignItems="center"
      p={2}
    >
      <Box display="flex">
        <IconButton sx={{ margin: "0px 5px" }} onClick={handleClick}>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
