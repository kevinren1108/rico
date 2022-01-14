import React, { Component } from 'react';
import {  HomeWrapper, 
          FeatureSwiperWrapper, 
          WhatWeDOWrapper, 
          ProductSwiperWrapper, 
          
} from './style';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import FeatureSwiper from './featureSwiper';
import CompanyIntro from './companyIntro'

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
        <WhatWeDOWrapper>What we do</WhatWeDOWrapper>
           
        
      </HomeWrapper>
      
    );
  }
}
 
export default Home;