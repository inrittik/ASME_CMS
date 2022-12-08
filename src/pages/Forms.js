import React from "react";
import FormList from "../components/FormList";
import SidebarMenu from "../components/SidebarMenu";
import Topbar from "../components/Topbar";

const Forms = () => {
  return (
    <div className="main">
      <SidebarMenu />
      <div className="content">
        <Topbar />

        <FormList />
      </div>
    </div>
  );
};

export default Forms;
