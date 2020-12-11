import React from "react";

function Title() {
  return (
    <section class="hero is-dark is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">Aaron Zhang</h1>
          <h2 class="subtitle">Software Engineer</h2>
          <a href="https://github.com/aarozhang" style={{ color: "white" }}>
            <span class="icon">
              <i class="fab fa-github"></i>
            </span>
          </a>
          <a
            href="https://www.instagram.com/aarozhang/"
            style={{ color: "white" }}
          >
            <span class="icon">
              <i class="fab fa-instagram"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Title;
