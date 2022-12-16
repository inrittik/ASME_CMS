import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import './App.css'
import { ProSidebarProvider } from "react-pro-sidebar";
import Events from "./pages/Events";
import Students from "./pages/Students";

function App() {
  return (
    <ProSidebarProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </ProSidebarProvider>
  );
}

export default App;
