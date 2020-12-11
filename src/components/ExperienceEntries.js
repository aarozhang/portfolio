import React from "react";
import uncLogo from "../Icons/uncIcon.png";
import vanguardLogo from "../Icons/vanguard.png";
import noLogo from "../Icons/noLogo.png";

function ExperienceEntries() {
  return (
    <div className="container">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src={vanguardLogo}
                alt="Vanguard Icon"
                style={{ borderRadius: "50%" }}
              ></img>
            </figure>
          </div>
          <div className="media-content" style={{ color: "white" }}>
            <div className="content">
              <h3 className="title" style={{ color: "white" }}>
                The Vanguard Group
              </h3>
              <h5 className="subtitle" style={{ color: "white" }}>
                Software Engineer - Global Resources Strategy and Control
              </h5>
            </div>
          </div>
          <div className="media-right" style={{ color: "white" }}>
            <p>Jul 2021 - Present</p>
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
                UNC Summer of Code
              </h3>
              <h5 className="subtitle" style={{ color: "white" }}>
                Product Manager / Developer
              </h5>
            </div>
          </div>
          <div className="media-right" style={{ color: "white" }}>
            <p>Jun 2020 - Aug 2020</p>
          </div>
        </article>
      </div>

      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src={noLogo}
                alt="UNC Icon"
                style={{ borderRadius: "50%" }}
              ></img>
            </figure>
          </div>
          <div className="media-content" style={{ color: "white" }}>
            <div className="content">
              <h3 className="title" style={{ color: "white" }}>
                Second Main Phase LLC
              </h3>
              <h5 className="subtitle" style={{ color: "white" }}>
                Software Engineer Intern
              </h5>
            </div>
          </div>
          <div className="media-right" style={{ color: "white" }}>
            <p>Jun 2019 - Jul 2019</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default ExperienceEntries;
