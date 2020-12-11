import React from "react";

function Title() {
  return (
    <section className="hero is-fullheight parallax">
      <div className="hero-body">
        <div className="container">
          <h1
            className="title is-1"
            style={{ color: "white", fontSize: "125px" }}
          >
            Aaron Zhang
          </h1>
          <h2 className="subtitle" style={{ color: "white", fontSize: "25px" }}>
            Software Engineer, Photographer, Gamer
          </h2>
          <a href="https://github.com/aarozhang" style={{ color: "white" }}>
            <span className="icon is-large">
              <i className="fab fa-github fa-2x"></i>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/aaron-zhang-948b79123/"
            style={{ color: "white" }}
          >
            <span className="icon is-large">
              <i className="fab fa-linkedin fa-2x"></i>
            </span>
          </a>
          <a
            href="https://www.instagram.com/aarozhang/"
            style={{ color: "white" }}
          >
            <span className="icon is-large">
              <i className="fab fa-instagram fa-2x"></i>
            </span>
          </a>
          <a href="mailto:aarzhang@live.unc.edu" style={{ color: "white" }}>
            <span className="icon is-large">
              <i className="fas fa-envelope fa-2x"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Title;
