import React, { Component } from 'react';
import { AboutUsWrapper, Division, DivisionContent, FindUs, Hours} from './style';


class AboutUs extends Component {
  
  render() { 
    return ( 

    <AboutUsWrapper>
      <Division>
        Company Division
        <DivisionContent> 
          <p>100字左右的企业寄语</p>
          <p>DOHO是在有色金属材料领域有着超过70年的经验与业绩的老牌商社，我们也正在不断努力为制造业领域带来更多创新。
          DOHO是在有色金属材料领域有着超过70年的经验与业绩的老牌商社，我们也正在不断努力为制造业领域带来更多创新。
          DOHO是在有色金属材料领域有着超过70年的经验与业绩的老牌商社，我们也正在不断努力为制造业领域带来更多创新。
          DOHO是在有色金属材料领域有着超过70年的经验与业绩的老牌商社，我们也正在不断努力为制造业领域带来更多创新。 
          虽然我们经手的材料都是硬材，但我们有着 ...。。。。 </p>
        </DivisionContent>
      </Division>
      <FindUs>
        <h1>地址</h1>
        <p>123 Big st</p>
        <p>City, Province</p>
        <p>Canada, 邮编</p>
        
      </FindUs>
      <Hours>
        <h1>上班时间</h1>
        <p>周一 9:00 - 6:00</p>
        <p>周一 9:00 - 6:00</p>
        <p>周一 9:00 - 6:00</p>
        <p>周一 9:00 - 6:00</p>
        <p>周一 9:00 - 6:00</p>
        <p>周一 9:00 - 6:00</p>
        <p>周一 9:00 - 6:00</p>
      </Hours>
      


    </AboutUsWrapper> 
    
    
    );
  }
}
 
export default AboutUs;