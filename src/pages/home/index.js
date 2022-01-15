import React, { Component } from 'react';
import {  HomeWrapper } from './style';
import 'swiper/css';
import FeatureSwiper from './featureSwiper';
import CompanyIntro from './companyIntro'
import BusinessField from './businessField';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
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