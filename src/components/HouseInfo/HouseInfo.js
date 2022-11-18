import React from "react";
import { Info } from "../../Info";
import "./HouseInfo.css";
const HouseInfo = () => {
  return (
    <div className="house-cont">
      {Info &&
        Info.map(
          ({
            id,
            HouseType,
            CostOfDevelopment,
            DevelopersEquity,
            FundsRequired,
            SalesPricePerApartment,
            Title,
            Approvals,
            Construction,
            MinimumInvestment,
            CustodianBank,
            LegalAdvisory,
          }) => {
            return (
              <div key={id} className="house-container">
                <div className="house-flex">
                  <div className="house-rw-1">
                    <div className="house-subcont">
                      <div className="house-info">House Type:</div>
                      <div className="house-description1">{HouseType}</div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info">Cost of development</div>
                      <div className="house-description1">
                        <span>&#8358;</span>
                        {CostOfDevelopment}
                      </div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info">Developers Equity:</div>
                      <div className="house-description1">
                        {DevelopersEquity}
                      </div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info">Funds required</div>
                      <div className="house-description1">{FundsRequired}</div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info-spec">
                        Sales price per apartment:
                      </div>
                      <div className="house-description-spec">
                        <div className="pr">
                          <span>&#8358;</span>
                          {SalesPricePerApartment}
                        </div>
                      </div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info">Developers Equity:</div>
                      <div className="house-description1">
                        {DevelopersEquity}
                      </div>
                    </div>
                  </div>
                  <div className="house-rw-1">
                    <div className="house-subcont">
                      <div className="house-info-rt">Title:</div>
                      <div className="house-description-rt">{Title}</div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info-rt">Approvals</div>
                      <div className="house-description-rt">{Approvals}</div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info-const">Construction:</div>
                      <div className="house-description-const">
                        {Construction}
                      </div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info-rt">Minimum Investment</div>
                      <div className="house-description-rt">
                        {MinimumInvestment}
                      </div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info-dian">Custodian:</div>
                      <div className="house-description-dian">
                        {CustodianBank}
                      </div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info-rt">Legal Advisory:</div>
                      <div className="house-description-rt">
                        {LegalAdvisory}
                      </div>
                    </div>
                  </div>

                  {/* <div className="house-rw-2">
                    <div className="house-subcont">
                      <div className="house-info">Title:</div>
                      <div className="house-description">{Title}</div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info">Approvals:</div>
                      <div className="house-description">{Approvals}</div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info-spec">Construction:</div>
                      <div className="house-description-spec">
                        {Construction}
                      </div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info">Minimum Investment:</div>
                      <div className="house-description">
                        <span>&#8358;</span>
                        {MinimumInvestment}
                      </div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info">Custodian Bank:</div>
                      <div className="house-description">{CustodianBank}</div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info">Legal Advisory</div>
                      <div className="house-description">{LegalAdvisory}</div>
                    </div>
                  </div>
                  <div className="house-rw-">
                    <div className="house-subcont">
                      <div className="house-info">Title:</div>
                      <div className="house-description">{Title}</div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info">Approvals:</div>
                      <div className="house-description">{Approvals}</div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info-spec">Construction:</div>
                      <div className="house-description-spec">
                        {Construction}
                      </div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info">Minimum Investment:</div>
                      <div className="house-description">
                        <span>&#8358;</span>
                        {MinimumInvestment}
                      </div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info">Custodian Bank:</div>
                      <div className="house-description">{CustodianBank}</div>
                    </div>
                    <div className="house-subcont">
                      <div className="house-info">Legal Advisory</div>
                      <div className="house-description">{LegalAdvisory}</div>
                    </div>
                  </div> */}
                </div>
              </div>
            );
          }
        )}
    </div>
  );
};

export default HouseInfo;
