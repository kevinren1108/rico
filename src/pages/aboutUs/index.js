import React, { Component } from "react";
import { HoursItem, HoursItemWrapper, HoursItemTime, AboutUsWrapper, Division, DivisionContent, FindUsTitle, HoursTitle, Hours} from "./style";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import IMAGES from "../../resource/index.js";

class AboutUs extends Component {
  
  render() { 
    const images = [
        {
          original: IMAGES.about2, thumbnail: IMAGES.about2,
        },
        {
          original: IMAGES.about3, thumbnail: IMAGES.about3,
        },
      ];

    return ( 

    <AboutUsWrapper>
      <Division>
        About
        <DivisionContent> 
          <p>Founded in 2020, Rico Waterproofing Materials Canada Co.Ltd.  sets out itself to be one of the leading construction material suppliers in Western Canada. </p>
          <p>The company specializes in supplying variety of waterproofing adhesives and paints that suite the climate in Canada. At Rico Waterproofing Materials Canada Co.Ltd., We strive to provide our customers with high quality, affordable waterproofing and building solutions. We value the long term realtion with our customers and archieve complete customer satisifaction is our ultimate goal. </p>
          <p>Choose Rico, Choose peace of mind!</p>
        </DivisionContent>
        <ImageGallery items={images} />


      </Division>
      
      <Hours>
        <FindUsTitle>Address</FindUsTitle>
        <p>#45 - 6 Ratner St</p>
        <p>Emerald Park, SK</p>
        <p>Canada, S4L0E3</p>
      </Hours>
      <Hours>
        <FindUsTitle>Contact</FindUsTitle>
        <p>Tel: 306-209-1298</p>
        <p>Tel: 306-559-4413</p>
        
      </Hours>
      <Hours>
        <HoursTitle>Hours</HoursTitle>
        {
          ["Monday","Tuesday","Wednesday","Thursday","Friday"].map((date) => {
            return(
              <HoursItemWrapper key={date}>
                <HoursItem>{date}</HoursItem>
                <HoursItemTime> 9:00 - 5:00</HoursItemTime>
              </HoursItemWrapper>
            );
          })
        }
      </Hours>
      


    </AboutUsWrapper> 
    
    
    );
  }
}
 
export default AboutUs;