import React, { Component } from "react";
import {  HomeWrapper } from "./style";
import "swiper/css";
import FeatureSwiper from "./featureSwiper";
import CompanyIntro from "./companyIntro";
import BusinessField from "./businessField";

class Home extends Component {
  render() { 
    return (
      <HomeWrapper>  
        <CompanyIntro/>
        <FeatureSwiper /> 
        <BusinessField />
      </HomeWrapper>
      
    );
  }
}
 
export default Home;