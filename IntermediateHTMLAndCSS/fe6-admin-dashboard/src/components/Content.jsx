import React from "react";
import ProjectCard from "./ProjectCard";

const Content = () => {
  return (
    <div style={{ backgroundColor: "#e2e8f0", height: "100%" }}>
      <div>
        <div style={{ }}>Your Projects</div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', padding: '40px', maxWidth: '100%' }}>
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

      {/* <div> */}

      {/*   <div> */}

      {/*     <div> */}
      {/*       Annoucements */}
      {/*     </div> */}

      {/*   </div> */}

      {/*   <div> */}
      {/*      */}
      {/*     <div> */}
      {/*       Trending */}
      {/*     </div> */}

      {/*   </div> */}
      {/*    */}
      {/* </div> */}
    </div>
  );
};

export default Content;
