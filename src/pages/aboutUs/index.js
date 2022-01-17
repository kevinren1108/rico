import React, { Component } from 'react';
import { HoursItem, HoursItemWrapper, HoursItemTime, AboutUsWrapper, Division, DivisionContent, FindUs, FindUsTitle, HoursTitle, Hours} from './style';


class AboutUs extends Component {
  
  render() { 
    return ( 

    <AboutUsWrapper>
      <Division>
        About
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
        <FindUsTitle>Address</FindUsTitle>
        <p>#45 - 6 Ratner St</p>
        <p>Emerald Park, SK</p>
        <p>Canada, S4L0E3</p>
        
      </FindUs>
      <Hours>
        <HoursTitle>Hours</HoursTitle>
        {
          ['Monday','Tuesday','Wednesday','Thursday','Friday'].map((date) => {
            return(
              <HoursItemWrapper key={date}>
                <HoursItem>{date}</HoursItem>
                <HoursItemTime> 9:00 - 12:00</HoursItemTime>
                <HoursItemTime>  2:00 - 5:00</HoursItemTime>
              </HoursItemWrapper>
            )
          })
        }
      </Hours>
      


    </AboutUsWrapper> 
    
    
    );
  }
}
 
export default AboutUs;