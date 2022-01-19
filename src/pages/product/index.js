import React, { Component } from "react";
import {  ProductWrapper, 
          ProductCategory, ProductCategoryItem, ProductCategoryItemActive,
          ProductDetail, ProduchDetailTitle, ProductDetailContent,
          TechDataMenu, TechDataMenuItem, TechDataDetail, TechDataMenuItemActive,TechDataDetailItem,
          ProductDetailImageWrapper, ImageContainer, Thumbnail, ThumbnailWrapper,
          ProductCategorySwiper,SwiperItem
} from "./style";
import { connect } from "react-redux";
import { actionCreator } from "./store/index.js";
import IMAGES from "../../resource/index.js";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

class Product extends Component {
  render() { 
    const { products, displayIndex, techMenuIndex, handleDisplayIndex, handleTechMeunIndex, updateThumbIndex, thumbIndex } = this.props;
    const productsObj = products.toJS();
    const productImg = [
    [IMAGES.product1_1, IMAGES.product1_2, IMAGES.product1_3],
    [IMAGES.product2],
    [IMAGES.product3],
    [IMAGES.product4],
    [IMAGES.product5],
    [IMAGES.product6],
    ];
    SwiperCore.use([Autoplay]);
    return ( 
    <ProductWrapper>
      <ProductCategorySwiper>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          
        }}
        spaceBetween={10}
        slidesPerView={3}
      >
      {
          productsObj.map((item,index) => {
              return (
                <SwiperSlide key={item.productName+index}>
                  <SwiperItem onClick={() => handleDisplayIndex(index)}>{item.productName}</SwiperItem>
                </SwiperSlide>
              );
          })
        }
      </Swiper>
      </ProductCategorySwiper>

      <ProductCategory>
        {
          productsObj.map((item,index) => {
            if(index === displayIndex){
              return (
                <ProductCategoryItemActive onClick={() => handleDisplayIndex(index)} key={item.productName+index}>{item.productName}</ProductCategoryItemActive>
              );
            }else{
              return (
                <ProductCategoryItem onClick={() => handleDisplayIndex(index)} key={item.productName+index}>{item.productName}</ProductCategoryItem>
              );
            }  
          })
        } 
      </ProductCategory>
      <ProductDetail>
        <ProduchDetailTitle>{productsObj[displayIndex].productName}</ProduchDetailTitle>
        <ProductDetailImageWrapper >
          <ImageContainer  src={productImg[displayIndex][thumbIndex]}/>
          <ThumbnailWrapper >
            {
              productImg[displayIndex].map((item,index) => {
                return (
                  <Thumbnail onClick={() => updateThumbIndex(index)} key={item+index} src={productImg[displayIndex][index]}/>
                );
              })
            }
          </ThumbnailWrapper> 
        </ProductDetailImageWrapper>
        <ProductDetailContent>{productsObj[displayIndex].productIntro}</ProductDetailContent>
        <TechDataMenu>
          {["SPECIFICATIONS"].map((item,index)=>{   
              if(index === techMenuIndex){
                return(
                  <TechDataMenuItemActive onClick={() => handleTechMeunIndex(index)} key={item+index} >{item}</TechDataMenuItemActive>
                );
              }else{
                return(
                  <TechDataMenuItem onClick={() => handleTechMeunIndex(index)} key={item+index} >{item}</TechDataMenuItem>
                );
              }
            })
          }
        </TechDataMenu>
        <TechDataDetail>  
          { 
            productsObj[displayIndex].techDetail.map((item,index)=>{
              return(
                <TechDataDetailItem key={item+index}>{item}</TechDataDetailItem>
              )
            })
        
          }
        </TechDataDetail>
      </ProductDetail>
    </ProductWrapper> );
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
    handleDisplayIndex(index){
      dispatch(actionCreator.updateDisplayIndex(index));
    },
    handleTechMeunIndex(index){
      dispatch(actionCreator.updateTechMenuIndex(index));
    },
    updateThumbIndex(index){
      dispatch(actionCreator.updateThumbIndex(index));
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Product);
