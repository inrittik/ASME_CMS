import React from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const paperstyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "40px auto",
  };
  const textstyle = {
    margin: "20px 0",
  };
  const btnstyle = {
    margin: "20px 0",
    padding: 10,
  };
  const navigate = useNavigate();
  return (
    <Grid>
      <Paper elevation={10} style={paperstyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#1976d2" }}>
            <LockOpenIcon />
          </Avatar>
          <h2 style={{ color: "#1976d2" }}>ASME ADMIN LOGIN</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter Admin Username"
          fullWidth
          required
          style={textstyle}
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          fullWidth
          type={"password"}
          required
          style={textstyle}
        />
        <Button
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
          style={btnstyle}
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Login
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;
