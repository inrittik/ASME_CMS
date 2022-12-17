import React from "react";
import EventList from "../components/EventList";
import SidebarMenu from "../components/SidebarMenu";
import Topbar from "../components/Topbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Events = () => {
  return (
    <div className="main">
        <ToastContainer />
        <SidebarMenu />
        <div className="content">
          <Topbar />

          <EventList />
        </div>
      </div>
  );
};

export default Events;
