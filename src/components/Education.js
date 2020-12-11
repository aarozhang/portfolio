import React from "react";
import Degrees from "./Degrees";

function Education() {
  return (
    <section className="section" style={{ backgroundColor: "#363636" }}>
      <div className="container">
        <h1 className="title" style={{ color: "hsl(0, 0%, 96%)" }}>
          Education
        </h1>
        <Degrees></Degrees>
      </div>
    </section>
  );
}

export default Education;
