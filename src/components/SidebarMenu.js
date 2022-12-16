import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <Box backgroundColor="#b8e7ff">
      <Sidebar backgroundColor="#b8e7ff">
        <Box
          color="#1976d2"
          fontWeight={600}
          fontSize={24}
          display="flex"
          justifyContent={"center"}
          p={3}
        >
          Admin CMS
        </Box>
        <Box color="#1976d2" textAlign="center">
          <Menu iconShape="square">
            <MenuItem routerLink={<Link to="/events" />}>
              <Typography>Events</Typography>
            </MenuItem>
            <MenuItem routerLink={<Link to="/students" />}>
              <Typography>Students</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default SidebarMenu;
