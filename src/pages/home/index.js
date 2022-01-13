import React, { Component } from 'react';
import {  HomeWrapper, 
          FeatureSwiperWrapper, 
          WhatWeDOWrapper, 
          ProductSwiperWrapper, 
          WhoWeAreWrapper 
} from './styled';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <HomeWrapper>
        <FeatureSwiperWrapper>Swiper</FeatureSwiperWrapper>
        <WhatWeDOWrapper>What we do</WhatWeDOWrapper>
        <ProductSwiperWrapper>product swiper</ProductSwiperWrapper>
        <WhoWeAreWrapper>who we are</WhoWeAreWrapper>
      </HomeWrapper>
      
    );
  }
}
 
export default Home;