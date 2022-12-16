import React from "react";
import { Paper, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EventView from "./EventView";
import EventForm from "./EventForm";
import dayjs from "dayjs";
import { deleteEvent } from "../utils/eventServices";

const EventItm = (props) => {
  const itmstyle = {
    margin: "20px auto",
    padding: "20px 10px",
    width: "80vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 600,
  };
  const handleDelete = async () => { 
    await deleteEvent(props._id);
  }
  return (
    <Paper style={itmstyle}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>Event Name: {props.eventName}</Box>
      </Box>
      <Box>StartDate: {dayjs(props.startDate).format("DD/MM/YYYY")}</Box>
      <Box>EndDate: {dayjs(props.endDate).format("DD/MM/YYYY")}</Box>
      <Box display="flex">
        <EventView {...props} />
        <EventForm isEditable={true} _id={props._id} />
        <IconButton sx={{ margin: "0px 5px" }} onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default EventItm;
