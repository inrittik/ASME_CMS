import React from "react";
import EventList from "../components/EventList";
import SidebarMenu from "../components/SidebarMenu";
import Topbar from "../components/Topbar";

const Events = () => {
  return (
    <div className="main">
      <SidebarMenu />
      <div className="content">
        <Topbar />

        <EventList />
      </div>
    </div>
  );
};

export default Events;
