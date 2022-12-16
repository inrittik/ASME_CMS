import { Box } from "@mui/material";
import React, { useEffect } from "react";
import EventItm from "./EventItm";
import EventForm from "./EventForm";
import { getAllEvents } from "../utils/eventServices";

const EventList = () => {
  const [events, setEvents] = React.useState([]);
  useEffect(() => {
    async function fetchAllEvents() {
      const response = await getAllEvents();
      const data = response.data;
      setEvents(data.events);
    }
    fetchAllEvents();
  }, [events]);
  return (
    <div className="list">
      <Box display="flex" alignItems="center" style={{ margin: "3px" }}>
        <EventForm isEditable={false} />
      </Box>
      <div>
        {
          events.map((event) => {
            return <EventItm key={event._id} {...event} />;
          })
        }
      </div>
    </div>
  );
};

export default EventList;
