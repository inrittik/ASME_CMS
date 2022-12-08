import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import EventItm from "./EventItm";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const EventList = () => {
  return (
    <div className="list">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{ margin: "3px" }}
      >
        <IconButton>
          <AddIcon style={{ color: "white", margin: "0 5px" }} />
          <Typography style={{ color: "white" }}>Create</Typography>
        </IconButton>
        <IconButton>
          <DeleteIcon style={{ color: "white", margin: "0 5px" }} />
          <Typography style={{ color: "white" }}>Delete</Typography>
        </IconButton>
      </Box>
      <div>
        <EventItm />
        <EventItm />
        <EventItm />
        <EventItm />
      </div>
    </div>
  );
};

export default EventList;