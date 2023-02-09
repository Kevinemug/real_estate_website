import React, { Component } from "react";
import { Link } from "react-router-dom";

const BlogCrads = ({ headerImage, paragraph, description }) => {
  return (
    <>
      <div className="blogContainer">
        <div>
          <img src={headerImage} alt="" className="blogeimgeheader" />
        </div>

        <div className="blogBody">
          <div>
            <div className="blogcontent">
              <img
                src="https://elementor1.contempothemes.com/wp-content/uploads/2020/12/riley-profile.jpg
                    "
                alt=""
                className="bodyImage"
              />
              <p>{paragraph}</p>
            </div>
            <p className="blogdesc">BY RILEY HARPER IN OUR BLOG</p>
          </div>
          <p className="paradesc">{description}</p>
        </div>
        <Link to="aboutBlair">
          <button className="readmore">READ MORE</button>
        </Link>
      </div>
    </>
  );
};

export default BlogCrads;
