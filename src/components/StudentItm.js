import React from "react";
import { Paper, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import StudentView from "./StudentView";
import { deleteStudentById } from "../utils/studentServices";

const StudentItm = (props) => {
  const itmstyle = {
    margin: "20px auto",
    padding: "20px 10px",
    width: "80vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 600,
  };

  const handleDelete = async() => {
    await deleteStudentById(props._id);
  }
  return (
    <Paper style={itmstyle}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>{props.scholarId}</Box>
      </Box>
      <Box>
        {props.firstName} {props.lastName}
      </Box>
      <Box display="flex">
        <StudentView {...props} />
        <IconButton sx={{ margin: "0px 5px" }}>
          <DeleteIcon onClick={ handleDelete} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default StudentItm;
