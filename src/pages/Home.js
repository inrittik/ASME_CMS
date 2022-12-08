import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <div className="main">
      <SidebarMenu />
      <div className="content">
        <Topbar />
      </div>
    </div>
  );
};

export default Home;
