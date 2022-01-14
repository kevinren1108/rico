import React, { Component } from 'react';
import {  HomeWrapper, 
          FeatureSwiperWrapper, 
          WhatWeDOWrapper, 
          ProductSwiperWrapper, 
          WhoWeAreWrapper 
} from './style';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import FeatureSwiper from './featureSwiper';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  render() { 
    
    return (
      <HomeWrapper>  
        <WhatWeDOWrapper>What we do</WhatWeDOWrapper>
        <FeatureSwiper />    
        <WhoWeAreWrapper>who we are</WhoWeAreWrapper>
      </HomeWrapper>
      
    );
  }
}
 
export default Home;