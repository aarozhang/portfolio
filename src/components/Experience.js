import React from "react";
import Experiences from "./ExperienceEntries";

function Experience() {
  return (
    <section className="section" style={{ backgroundColor: "#3a3a3a" }}>
      <div className="container">
        <h1 className="title" style={{ color: "hsl(0, 0%, 96%)" }}>
          Experience
        </h1>
        <Experiences></Experiences>
      </div>
    </section>
  );
}

export default Experience;
