import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import './App.css'
import { ProSidebarProvider } from "react-pro-sidebar";
import Events from "./pages/Events";
import Forms from "./pages/Forms";

function App() {
  return (
    <ProSidebarProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </ProSidebarProvider>
  );
}

export default App;
