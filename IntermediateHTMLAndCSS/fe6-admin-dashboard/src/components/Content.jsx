import React from "react";
import ProjectCard from "./ProjectCard";

const Content = () => {
  return (
    <div style={{ backgroundColor: "#e2e8f0", height: "100%", display: 'flex', }}>
      <div>
        <div style={{ fontFamily: 'Roboto-Medium', fontSize: '20px', padding: '40px', paddingBottom: '20px' }}>Your Projects</div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', paddingLeft: '40px', maxWidth: '87%' }}>
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

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>

        <div>

          <div>
            Annoucements
          </div>

        </div>

        <div>
          
          <div>
            Trending
          </div>

        </div>
        
      </div>

    </div>
  );
};

export default Content;
