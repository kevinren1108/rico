import { BgImage,BgTextWrapper,BgTextBusinessName,BgTextBusinessIntro,SmallFont } from "./style";
import React, { Component } from "react";


class CompanyIntro extends Component {
  render() { 
    return ( 
      <div>
        <BgTextWrapper>
          <BgTextBusinessName>Rico <SmallFont>Waterproffing  Material  Canada Co Ltd</SmallFont></BgTextBusinessName>
          <BgTextBusinessIntro>DOHO是在有色金属材料领域有着超过70年的经验与业绩的老牌商社，我们也正在不断努力为制造业领域带来更多创新。 DOHO是在有色金属材料领域有着超过70年的经验与业绩的老牌商社，我们也正在不断努力为制造业领域带来更多创新。 DOHO是在有色金属材料领域有着超过70年的经验与业绩的老牌商社，我们也正在不断努力为制造业领域带来更多创新。 DOHO是在有色金属材料领域有着超过70年的经验与业绩的老牌商社，我们也正在不断努力为制造业领域带来更多创新。 虽然我们经手的材料都是硬材，但我们有着......(这是例子)</BgTextBusinessIntro>
        </BgTextWrapper>
        <BgImage />    
      </div>
     );
  }
}
 
export default CompanyIntro;
  