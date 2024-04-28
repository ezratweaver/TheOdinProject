import React from "react";
import Icon from "@mdi/react";
import { mdiViewDashboard } from "@mdi/js";

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: "#1992d4" }}>
      <div style={{ color: "white" }}>
        <Icon path={mdiViewDashboard} size={1} color="white" />
        Dashboard
      </div>

      <ul style={{ listStyle: "none", color: "white", margin: 0, padding: 0 }}>
        <li>Home</li>
        <li>Profile</li>
        <li>Messages</li>
        <li>History</li>
        <li>Tasks</li>
        <li>Communities</li>
        <li style={{ marginBlock: '20px' }}></li>
        <li>Settings</li>
        <li>Support</li>
        <li>Privacy</li>
      </ul>
    </div>
  );
};

export default Sidebar;
