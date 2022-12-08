import React from "react";
import { Paper, IconButton, Box, Checkbox } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";

const EventItm = () => {
  const itmstyle = {
    margin: "20px auto",
    padding: "20px 10px",
    width: "80vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 600,
  };
  return (
    <Paper style={itmstyle}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Checkbox />
        <Box>Event Name</Box>
      </Box>
      <Box>Event Description</Box>
      <Box>Event Date</Box>
      <Box display="flex">
        <IconButton sx={{ margin: "0px 5px" }}>
          <PreviewIcon />
        </IconButton>
        <IconButton sx={{ margin: "0px 5px" }}>
          <EditIcon />
        </IconButton>
        <IconButton sx={{ margin: "0px 5px" }}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default EventItm;
