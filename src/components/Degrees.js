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
          <div className="media-content" style={{ color: "white" }}>
            <div className="content">
              <h3 className="title" style={{ color: "white" }}>
                University of North Carolina at Chapel Hill
              </h3>
              <h5 className="subtitle" style={{ color: "white" }}>
                Bachelor of Arts in Computer Science
              </h5>
            </div>
          </div>
          <div className="media-right" style={{ color: "white" }}>
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
          <div className="media-content" style={{ color: "white" }}>
            <div className="content">
              <h3 className="title" style={{ color: "white" }}>
                University of North Carolina at Chapel Hill
              </h3>
              <h5 className="subtitle" style={{ color: "white" }}>
                Minor in Music
              </h5>
            </div>
          </div>
          <div className="media-right" style={{ color: "white" }}>
            <p>2016 - 2018</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Degrees;
