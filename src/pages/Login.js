import React, { useEffect, useState } from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../utils/authServices";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";


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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("ASME_Website");
    if (token) {
      navigate("/events");
    }
  }, [navigate]);

  const handleSubmit = async () => { 
    const myUser = new FormData();
    myUser.append("email", email);
    myUser.append("password", password);
    const resp = await login(myUser);
    console.log(resp);
    if (resp.status === 201) {
      const cookies = new Cookies();
      cookies.set("ASME_Website", resp.data.token, { path: "/" });
      navigate("/events");
    }
    else logout();
  }
  return (
    <Grid>
      <ToastContainer />
      <Paper elevation={10} style={paperstyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#1976d2" }}>
            <LockOpenIcon />
          </Avatar>
          <h2 style={{ color: "#1976d2" }}>ASME ADMIN LOGIN</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter Admin Email"
          fullWidth
          required
          style={textstyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          fullWidth
          type={"password"}
          required
          style={textstyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
          style={btnstyle}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;
