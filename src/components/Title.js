import React from "react";
import background from "../DSC_4611.jpg";
import background1 from "../DSC_4602.jpg";

function Title() {
  return (
    <section
      className="hero is-dark is-fullheight is-bold"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">Aaron Zhang</h1>
          <h2 className="subtitle">Software Engineer, Photographer, Gamer</h2>
          <a href="https://github.com/aarozhang" style={{ color: "white" }}>
            <span className="icon is-medium">
              <i className="fab fa-github fa-lg"></i>
            </span>
          </a>
          <a
            href="https://www.instagram.com/aarozhang/"
            style={{ color: "white" }}
          >
            <span className="icon is-medium">
              <i className="fab fa-instagram fa-lg"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Title;
