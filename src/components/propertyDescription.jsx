import React, { Component } from "react";

const PropertyDescription = () => {
  return (
    <>
      <div className="parent">
        <div className="propertyHeader">
          <div className="leftHeader">
            <p className="leftParagraphUp">5528 La Crescenta</p>
            <p className="leftParagraphDown">Rancho Santa Fe, CA 92067</p>
          </div>
          <div className="rightHeader">
            <button type="button" className="btn btn-dark btn-sm">
              {" "}
              For sale
            </button>
            <p className="rightParagraphUp">$7,800,000</p>
            <p className="rightParagraphDown">Est. Payment $44,583/mo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDescription;
