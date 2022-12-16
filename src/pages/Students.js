import React from "react";
import StudentList from "../components/StudentList";
import SidebarMenu from "../components/SidebarMenu";
import Topbar from "../components/Topbar";

const Students = () => {
  return (
    <div className="main">
      <SidebarMenu />
      <div className="content">
        <Topbar />

        <StudentList />
      </div>
    </div>
  );
};

export default Students;
