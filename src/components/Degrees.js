import React from "react";
import uncLogo from "../uncIcon.png";

function Degrees() {
  return (
    <div className="container">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src={uncLogo}
                alt="UNC Icon"
                style={{ borderRadius: "50%" }}
              ></img>
            </figure>
          </div>
          <div className="media-content" style={{ color: "hsl(0, 0%, 96%)" }}>
            <div className="content">
              <h3 className="title" style={{ color: "hsl(0, 0%, 96%)" }}>
                University of North Carolina at Chapel Hill
              </h3>
              <h5 className="subtitle" style={{ color: "hsl(0, 0%, 96%)" }}>
                Bachelor of Arts in Computer Science
              </h5>
            </div>
          </div>
          <div class="media-right" style={{ color: "hsl(0, 0%, 96%)" }}>
            <p>2016 - 2021</p>
          </div>
        </article>
      </div>

      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src={uncLogo}
                alt="UNC Icon"
                style={{ borderRadius: "50%" }}
              ></img>
            </figure>
          </div>
          <div className="media-content" style={{ color: "hsl(0, 0%, 96%)" }}>
            <div className="content">
              <h3 className="title" style={{ color: "hsl(0, 0%, 96%)" }}>
                University of North Carolina at Chapel Hill
              </h3>
              <h5 className="subtitle" style={{ color: "hsl(0, 0%, 96%)" }}>
                Minor in Music
              </h5>
            </div>
          </div>
          <div class="media-right" style={{ color: "hsl(0, 0%, 96%)" }}>
            <p>2016 - 2018</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Degrees;
