import React from "react";
import group from "../../images/Group 1000004766.png";
import "./rightBodyFooter.css";
function rightBodyFooter() {
  return (
    <div className="pp">
      <div className="rightBodyFooter">
        <div className="group-img">
          <img className="right-footer-img" src={group} />
        </div>

        <div className="rightBodyFooterText">
          <div className="rightBodyFooterText1">
            <span className="special">12,000+ people</span> already invested in
            this offer
          </div>
          <div className="rightBodyFooterText2">
            Dont waste this opportunity, invest now!
          </div>
        </div>
      </div>
    </div>
  );
}

export default rightBodyFooter;
