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

const SideBarLiCss = { display: 'flex', alignItems: 'center', gap: '14px', fontWeight: 550 }

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
        <li style={SideBarLiCss}>
          <StyledIcon path={mdiHome} />
          Home
        </li>
        <li style={SideBarLiCss}>
          <StyledIcon path={mdiCardAccountDetailsOutline} />
          Profile
        </li>
        <li style={SideBarLiCss}>
          <StyledIcon path={mdiMessage} />
          Messages
        </li>
        <li style={SideBarLiCss}>
          <StyledIcon path={mdiHistory} />
          History
        </li>
        <li style={SideBarLiCss}>
          <StyledIcon path={mdiFileMultiple} />
          Tasks
        </li>
        <li style={SideBarLiCss}>
          <StyledIcon path={mdiAccountGroup} />
          Communities
        </li>
        <li style={{ marginBlock: "20px" }}></li>
        <li style={SideBarLiCss}>
          <StyledIcon path={mdiCog} />
          Settings
        </li>
        <li style={SideBarLiCss}>
          <StyledIcon path={mdiMessageQuestionOutline} />
          Support
        </li>
        <li style={SideBarLiCss}>
          <StyledIcon path={mdiShieldCheck} />
          Privacy
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
