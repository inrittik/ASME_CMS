import React from "react";
import { Paper, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import StudentView from "./StudentView";

const StudentItm = () => {
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
        <Box>Scholar Id</Box>
      </Box>
      <Box>Student Name</Box>
      <Box display="flex">
        <StudentView />
        <IconButton sx={{ margin: "0px 5px" }}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default StudentItm;
