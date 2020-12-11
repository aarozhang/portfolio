import React from "react";

function Title() {
  return (
    <section className="hero is-dark is-fullheight is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">Aaron Zhang</h1>
          <h2 className="subtitle">Software Engineer</h2>
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
