import React from "react";
import backgroundPic from "../../images/bg1.png";
import "./Background.css";

const Background = () => {
  return (
    <div>
      <div className="back-clr">
        <div className="row space-box">
          <div className="col-md-5 " style={{ margin: "auto 0" }}>
            <div className="text-box">
              <h2>TastyMeal</h2>
              <p>Enjoy every meals...</p>
            </div>
          </div>
          <div className="col-md-7 back-img">
            <img
              src={backgroundPic}
              alt=""
              className="d-flex justify-content-center"
            />
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-top-1617821856">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
};

export default Background;
