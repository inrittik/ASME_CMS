import React from "react";
import StudentList from "../components/StudentList";
import SidebarMenu from "../components/SidebarMenu";
import Topbar from "../components/Topbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Students = () => {
  return (
    <div className="main">
      <ToastContainer />
      <SidebarMenu />
      <div className="content">
        <Topbar />

        <StudentList />
      </div>
    </div>
  );
};

export default Students;
