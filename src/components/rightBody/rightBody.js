import React from "react";
import raisedamt from "../../images/₦1,132,550.png";
import raised from "../../images/Raised.png";
import goal from "../../images/Group 1000000808.png";
import goalamt from "../../images/Group 148.png";
import progress from "../../images/Progressbar [02_100].png";
import user from "../../images/Group.png";
import more from "../../images/4afa0867000b03f315c0b900746bfcce 1.png";

import { data } from "../../Data";
import "./rightBody.css";
const rightBody = () => {
  return (
    <div className="qq">
      <div className="rightBody-cont">
        <div className="rightBody-title-cont">
          <div className="rightBody-cont">
            <button className="rightBodybtn">Open</button>
          </div>
        </div>
        <div className="oo">
          <div className="ded">
            <div className="rightBodyHead-cont">
              <div className="rightBodyHead-subcont">
                <div className="rightBodyHead">
                  <div className="wage">
                    <img className="wage-img" src={raisedamt} />
                  </div>
                  <div className="raised">
                    <img src={raised} />
                  </div>
                </div>
              </div>

              <div className="progress-cont">
                <div className="progress">
                  <img className="progress-img" src={progress} />
                </div>
              </div>

              <div className="goal-cont">
                <div className="goal-subcont">
                  <div className="goal">
                    {" "}
                    <img src={goal} />
                  </div>
                  <div className="goalamt">
                    <img src={goalamt} />
                  </div>
                </div>
              </div>
            </div>
            <div className="rightBody-subcont">
              {data &&
                data.map(({ title, id, amount }) => {
                  return (
                    <div className="sponsor-cont" key={id}>
                      <div className="sponsor-subcont">
                        <div className="user-img">
                          <img className="user-img" src={user} />
                        </div>

                        <div className="spons-cover">
                          <div className="sponsor">Sponsored</div>
                          <div className="sponsoramt">
                            <span>&#8358;</span>
                            {amount}
                          </div>
                        </div>

                        <div className="month">9 months ago</div>
                      </div>

                      <div className="line"></div>
                    </div>
                  );
                })}
            </div>
            <div className="gg">
              {" "}
              <a href="#" className="seeMore-cont">
                <div className="moreIcon">
                  <img src={more} />
                </div>
                <div className="seeMore">
                  <a href="#"> See More</a>
                </div>
              </a>
            </div>

            <div className="rightBodybtns">
              <div className="rightBodybtn1-cont">
                <button className="rightBodybtn1">Invest Now</button>
              </div>
              <div className="rightBodybtn2-cont">
                <button className="rightBodybtn2">Share Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rightBody;
