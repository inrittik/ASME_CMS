import { Box, Popover, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StudentItm from "./StudentItm";

const StudentList = ({ events, students }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filter, setFilter] = useState("");
  const [studentArray, setStudentArray] = useState(students);

  useEffect(() => {
    // if (filter.length>0) {
    //   const filteredStudents = studentArray.filter((student) => {
    //     return student.event === filter;
    //   });
    //   setStudentArray(filteredStudents);
    // }
  }, [filter, studentArray]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterClick = (e) => {
    setFilter(e.target.innerText);
    handleClose();
    console.log(filter);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="list">
      <Box style={{ margin: "1rem" }}>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          Filter
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography
            sx={{ p: 2, cursor: "pointer" }}
            onClick={handleFilterClick}
          >
            All
          </Typography>
          <Typography
            sx={{ p: 2, cursor: "pointer" }}
            onClick={handleFilterClick}
          >
            Event 1
          </Typography>
          <Typography
            sx={{ p: 2, cursor: "pointer" }}
            onClick={handleFilterClick}
          >
            Event 2
          </Typography>
        </Popover>
      </Box>
      <Box style={{ margin: "3px" }}>
        <StudentItm />
        <StudentItm />
        <StudentItm />
        <StudentItm />
      </Box>
    </div>
  );
};

export default StudentList;
