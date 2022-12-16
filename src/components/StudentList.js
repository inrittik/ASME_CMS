import {
  Box,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import StudentItm from "./StudentItm";
import { ExpandMore } from "@mui/icons-material";
import { getAllEvents } from "../utils/eventServices";
import { getAllStudentsByEvent } from "../utils/studentServices";

const StudentList = () => {
  const [filter, setFilter] = useState("Select Event");
  const [studentArray, setStudentArray] = useState([]);

  const [events, setEvents] = React.useState([]);
  useEffect(() => {
    async function fetchAllEvents() {
      const response = await getAllEvents();
      const data = response.data;
      setEvents(data.events);
    }
    fetchAllEvents();
  }, []);

  useEffect(() => {
    async function fetchStudentsByEvent() {
      const _id = events.find((event) => event.eventName === filter)._id;
      const response = await getAllStudentsByEvent(_id);
      const data = response.data;
      console.log(data);
      setStudentArray(data.student);
    }

    if (filter !== "Select Event") fetchStudentsByEvent();
  }, [filter, events]);

  const handleFilter = (e) => {
    setFilter(e.target.innerText);
  };
  return (
    <div className="list">
      <Box style={{ margin: "1rem" }}>
        <Accordion
          sx={{ backgroundColor: "#b8e7ff", color: "#1976d2", fontWeight: 600 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{filter}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack>
              {events.map((event) => {
                return (
                  <div
                    style={{
                      padding: "1rem 0",
                      fontSize: "1.1rem",
                      cursor: "pointer",
                    }}
                    onClick={handleFilter}
                  >
                    {event.eventName}
                  </div>
                );
              })}
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box style={{ margin: "3px" }}>
        {studentArray &&
          studentArray.map((student) => {
            return <StudentItm {...student} />;
          })}
      </Box>
    </div>
  );
};

export default StudentList;
