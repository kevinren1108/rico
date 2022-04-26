import { BgImage,BgTextWrapper,BgTextBusinessName,BgTextBusinessIntro,SmallFont } from "./style";
import React, { Component } from "react";


class CompanyIntro extends Component {
  render() { 
    return ( 
      <div>
        <BgTextWrapper>
          <BgTextBusinessName>Rico <SmallFont>Waterproffing  Material  Canada Co Ltd</SmallFont></BgTextBusinessName>
          <BgTextBusinessIntro>
            Founded in 2020, Rico Waterproofing Materials Canada Co.Ltd.  sets out itself to be one of the leading construction material suppliers in Western Canada. 
            The company specializes in supplying variety of waterproofing adhesives and paints that suite the climate in Canada. At Rico Waterproofing Materials Canada Co.Ltd., We strive to provide our customers with high quality, affordable waterproofing and building solutions. We value the long term realtion with our customers and archieve complete customer satisifaction is our ultimate goal. 
            Choose Rico, Choose peace of mind!
          </BgTextBusinessIntro>
        </BgTextWrapper>
        <BgImage />    
      </div>
     );
  }
}
 
export default CompanyIntro;
  