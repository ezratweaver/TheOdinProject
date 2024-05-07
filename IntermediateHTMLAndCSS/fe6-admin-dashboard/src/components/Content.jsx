import React from "react";
import ProjectCard from "./ProjectCard";
import InfoCard from "./InfoCard";

const Content = () => {
  return (
    <div
      style={{ backgroundColor: "#e2e8f0", height: "100%", display: "flex" }}
    >
      <div>
        <div
          style={{
            fontFamily: "Roboto-Medium",
            fontSize: "20px",
            padding: "40px",
            paddingBottom: "20px",
            marginRight: 0,
          }}
        >
          Your Projects
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            paddingLeft: "40px",
          }}
        >
          <ProjectCard
            title="Cool project"
            description="yep this is a super cool project this project is very cool, so wow right? dasdsadsaasdasdsa"
            color="#65459b"
          />
          <ProjectCard
            title="Cool project"
            description="yep this is a super cool project this project is very cool, so wow right? dasdsadsaasdasdsa"
            color="#65459b"
          />
          <ProjectCard
            title="Cool project"
            description="yep this is a super cool project this project is very cool, so wow right? dasdsadsaasdasdsa"
            color="#65459b"
          />
          <ProjectCard
            title="Cool project"
            description="yep this is a super cool project this project is very cool, so wow right? dasdsadsaasdasdsa"
            color="#65459b"
          />
          <ProjectCard
            title="Cool project"
            description="yep this is a super cool project this project is very cool, so wow right? dasdsadsaasdasdsa"
            color="#65459b"
          />
          <ProjectCard
            title="Cool project"
            description="yep this is a super cool project this project is very cool, so wow right? dasdsadsaasdasdsa"
            color="#65459b"
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "30px",
          marginRight: "20px",
          gap: "30px",
        }}
      >
        <div>
          <div
            style={{
              marginBlock: "15px",
              marginLeft: "2px",
              fontFamily: "Roboto-Medium",
              fontSize: "20px",
            }}
          >
            Annoucements
          </div>

          <InfoCard />
        </div>

        <div>
          <div
            style={{
              marginBlock: "15px",
              marginLeft: "2px",
              fontFamily: "Roboto-Medium",
              fontSize: "20px",
            }}
          >
            Trending
          </div>

          <InfoCard />
        </div>
      </div>
    </div>
  );
};

export default Content;
