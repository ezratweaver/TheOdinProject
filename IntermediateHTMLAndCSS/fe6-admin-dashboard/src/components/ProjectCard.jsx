import React from "react";
import Icon from "@mdi/react";
import { mdiEyePlusOutline, mdiSourceFork, mdiStarPlusOutline } from "@mdi/js";

const ProjectCard = ({ title, description, color }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderLeft: `7px solid ${color}`,
        width: "400px",
        height: "230px",
        maxHeight: '230px',
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        boxShadow: "2px 4px 4px -5px black",
      }}
    >
      <div style={{ paddingLeft: "30px" }}>
        <div style={{ fontFamily: "Roboto-Medium", fontSize: "20px" }}>
          {title}
        </div>

        <div style={{ color: '#545454', fontFamily: 'Roboto', fontSize: '14px', maxWidth: '300px', paddingTop: '4px' }}>{description}</div>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          alignSelf: "flex-end",
          gap: "25px",
          top: '10px',
          right: '30px'
        }}
      >
        <Icon path={mdiStarPlusOutline} size={1} />
        <Icon path={mdiEyePlusOutline} size={1} />
        <Icon path={mdiSourceFork} size={1} />
      </div>
    </div>
  );
};

export default ProjectCard;
