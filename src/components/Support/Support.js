import React from "react";
import smbox1 from "../../images/Rectangle 45.png";
import smbox2 from "../../images/Rectangle 44.png";
import lgbox1 from "../../images/Rectangle 43.png";
import lgbox2 from "../../images/Rectangle 42.png";
import "./Support.css";
function Support() {
  return (
    <div className="support-container">
      <div className="lg-boxes">
        <div className="lg-box2">
          {" "}
          <img className="rr1" src={lgbox2} />
        </div>
        <div className="lg-box1">
          {" "}
          <img className="rr2" src={lgbox1} />
        </div>
      </div>
      <div className="Support-cont">
        <div className="support-subcont">
          <div className="support-left">
            <div className="support-text-cont">
              <div className="support-text">Get all the support you need, </div>
              <div className="support-text">Contact our online agent</div>
            </div>

            <div className="support-acct-cont">
              <div className="support-acct">
                Get in touch or create account. We are 24/7 available
              </div>
            </div>
          </div>

          <div className="support-mid">
            <div className="sm-box-2">
              <img src={smbox2} />
            </div>
            <div className="sm-box-1">
              <img src={smbox1} />
            </div>
          </div>

          <div className="support-right">
            <div className="support-contact">
              <button className="contact-us-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
