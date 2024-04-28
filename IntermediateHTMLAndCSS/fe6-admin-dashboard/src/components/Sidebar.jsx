import React from "react";
import Icon from "@mdi/react";
import {
  mdiViewDashboard,
  mdiHome,
  mdiCardAccountDetailsOutline,
  mdiMessage,
  mdiHistory,
  mdiFileMultiple,
  mdiAccountGroup,
  mdiCog,
  mdiMessageQuestionOutline,
  mdiShieldCheck,
} from "@mdi/js";

const StyledIcon = ({ path, size }) => {
  return <Icon path={path} size={size ?? 1.1} color="white" />;
};

const Sidebar = () => {
  return (
    <div
      style={{
        backgroundColor: "#1992d4",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ paddingBottom: "30px" }}>
        <StyledIcon path={mdiViewDashboard} size={2.2} />
        Dashboard
      </div>

      <ul
        style={{
          listStyle: "none",
          color: "white",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: '14px',
        }}
      >
        <li>
          <StyledIcon path={mdiHome} />
          Home
        </li>
        <li>
          <StyledIcon path={mdiCardAccountDetailsOutline} />
          Profile
        </li>
        <li>
          <StyledIcon path={mdiMessage} />
          Messages
        </li>
        <li>
          <StyledIcon path={mdiHistory} />
          History
        </li>
        <li>
          <StyledIcon path={mdiFileMultiple} />
          Tasks
        </li>
        <li>
          <StyledIcon path={mdiAccountGroup} />
          Communities
        </li>
        <li style={{ marginBlock: "20px" }}></li>
        <li>
          <StyledIcon path={mdiCog} />
          Settings
        </li>
        <li>
          <StyledIcon path={mdiMessageQuestionOutline} />
          Support
        </li>
        <li>
          <StyledIcon path={mdiShieldCheck} />
          Privacy
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
