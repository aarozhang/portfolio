import React from "react";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <section className="section" style={{ backgroundColor: "#363636" }}>
      <div className="container">
        <h1 className="title" style={{ color: "hsl(0, 0%, 96%)" }}>
          Projects
        </h1>
        <ProjectCards></ProjectCards>
      </div>
    </section>
  );
}

export default Projects;
