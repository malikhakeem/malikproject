// import React, { Component } from "react";
// import "./leftbodyimgs.css";
// import Slider from "react-slick";
// // import { baseUrl } from "./config";
// import sm1 from "../../images/Rectangle 4390.png";
// import sm2 from "../../images/Rectangle 4398.png";
// import sm3 from "../../images/Rectangle 4399.png";
// import sm4 from "../../images/Rectangle 4390.png";
// import sm5 from "../../images/Rectangle 4398.png";
// import sm6 from "../../images/Rectangle 4399.png";
// const baseUrl = "si";
// const imagesUrl = [sm1, sm2, sm3, sm4, sm5, sm6];
// class leftbodyimgs extends Component {
//   render() {
//     const settings = {
//       customPaging: function (i) {
//         return (
//           <div className="images">
//             <div className="images-sub">
//               {" "}
//               <img className="io" src={imagesUrl[i]} />
//             </div>
//           </div>
//         );
//       },
//       dots: true,
//       // dotsClass: "slick-dotsx ",
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       className: "redmond",
//     };
//     return (
//       <div className="rtt">
//         {/* <h2>Custom Paging</h2> */}
//         <Slider {...settings} className="lo">
//           {imagesUrl.map((product, index) => (
//             <div className="conta">
//               <img src={product} className="lrg" />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     );
//   }
// }
// export default leftbodyimgs;

import React from "react";
import "./leftbodyimgs.css";
import ntn from "../../images/rec 4399.png";
import ntn2 from "../../images/Rec 4398.png";
function leftbodyimgs() {
  return (
    <div>
      <div className="leftFooter-cont">
        <div className="leftFooter-subcont">
          <div className="leftFooter1-cont">
            <div className="leftFooter-1">
              <div className="ll">
                <div className="leftFooterTitleCont">
                  <div className="leftFooterTitle1-1">Property Devoloper</div>
                  <div className="leftFooterTitle1-2">Information</div>
                </div>

                <div className="leftFooterbtn-cont">
                  <button class="btn">
                    <a className="leftFooterbtn" href="#">
                      Visit Developer Page
                    </a>
                  </button>
                </div>
              </div>

              <div className="ntn">
                <div className="ntn2">
                  {" "}
                  <img className="box" src={ntn2} />
                </div>
                <div className="ntn1">
                  {" "}
                  <img className="box" src={ntn} />
                </div>
              </div>
            </div>
          </div>

          <div className="leftFooter2-cont">
            <div className="leftFooter-2">
              <div className="ll">
                <div className="leftFooterTitleCont">
                  <div className="leftFooterTitle1-1">Enter Deal Room</div>
                  <div className="leftFooterTitle1-2">
                    See All Supporting Documents
                  </div>
                </div>

                <div className="leftFooterbtn-cont">
                  <button class="btn">
                    <a className="leftFooterbtn" href="#">
                      Proceed To Deal Room
                    </a>
                  </button>
                </div>
              </div>
              <div className="ntn">
                <div className="ntn2">
                  {" "}
                  <img className="box" src={ntn2} />
                </div>
                <div className="ntn1">
                  {" "}
                  <img className="box" src={ntn} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default leftbodyimgs;
