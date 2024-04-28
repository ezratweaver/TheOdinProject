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
  return <Icon path={path} size={size ?? 0.8} color="white" />;
};

const SideBarLiCss = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  fontFamily: "Roboto-Medium",
  fontWeight: 600,
  marginLeft: "18px",
};

const Sidebar = () => {
  return (
    <div
      style={{
        backgroundColor: "#1992d4",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "15px",
        paddingBottom: "100%",
      }}
    >
      <div
        style={{
          margin: "10px",
          paddingBottom: "19px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "Roboto-Bold",
          fontSize: "21px",
        }}
      >
        <StyledIcon path={mdiViewDashboard} size={1.6} />
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
          gap: "14px",
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
        <li style={{ marginBlock: "10px" }}></li>
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
