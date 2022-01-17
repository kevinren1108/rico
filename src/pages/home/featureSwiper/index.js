import React, { Component } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { connect } from "react-redux";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import { Link } from "react-router-dom";
import IMAGES from "../../../resource/index.js";
import {  FeatureSwiperWrapper, 
          FeatureSwiperImageWrapper, ImageContainer, 
          FeatureSwiperProductWrapper, ProductName, ProductDetail, ProductDetailBtn
        } from "./style";
import { actionCreator } from "../../product/store/index.js";

class FeatureSwiper extends Component {
  
  render() { 
    const productImg = [
      [IMAGES.product1],
      [IMAGES.product2_1],
      [IMAGES.product3],
      [IMAGES.product4],
      [IMAGES.product5],
      [IMAGES.product6],
      [IMAGES.product7],
      [IMAGES.product8],
      [IMAGES.product9],
      [IMAGES.product10],
      [IMAGES.product11]
    ];
    SwiperCore.use([Autoplay]);
    const { products, handleDetailBtn } = this.props;
    const productsObj = products.toJS();
    return ( 
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        spaceBetween={50}
        slidesPerView={1}
      >
      {
          productsObj.map((item,index) => {
              return (
                <SwiperSlide key={item.productName+index}>
                  <FeatureSwiperWrapper>
                    <FeatureSwiperImageWrapper >
                      <ImageContainer src={productImg[index][0]}/>                         
                    </FeatureSwiperImageWrapper>
                    <FeatureSwiperProductWrapper>
                      <ProductName>
                        {item.productName}
                      </ProductName>
                      <ProductDetail>
                        {item.productIntro}
                      </ProductDetail>
                      <Link to="/product"><ProductDetailBtn onClick={() => handleDetailBtn(index)}>More...</ProductDetailBtn></Link>
                    </FeatureSwiperProductWrapper>
                  </FeatureSwiperWrapper>
                </SwiperSlide>
              );
          })
        } 
      </Swiper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.getIn(["product","products"]),
    displayIndex: state.getIn(["product","currentDisplayIndex"]),
    techMenuIndex: state.getIn(["product","currentTechMenuIndex"]),
    thumbIndex: state.getIn(["product","imageBaseOnThumbIndex"])
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    handleDetailBtn(index){  
      dispatch(actionCreator.updateDisplayIndex(index));
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(FeatureSwiper);
