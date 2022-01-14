import React, { Component } from 'react';
import {  ProductWrapper, 
          ProductCategory, ProductCategoryItem, ProductCategoryItemActive,
          ProductDetail, ProduchDetailTitle, ProductDetailContent,
          TechDataMenu, TechDataMenuItem, TechDataDetail, TechDataMenuItemActive,
          ProductDetailImageWrapper, ImageContainer, Thumbnail, ThumbnailWrapper
} from './style';
import { connect } from 'react-redux';
import product1 from '../../resource/image/product1.jpg'
import product1_1 from '../../resource/image/product1_1.jpg'
import product1_2 from '../../resource/image/product1_2.jpg'
import product2 from '../../resource/image/product2.png'
import product2_1 from '../../resource/image/product2_1.png'
import product2_2 from '../../resource/image/product2_2.jpg'
import product3 from '../../resource/image/product3.jpg'
import product4 from '../../resource/image/product4.png'
import product5 from '../../resource/image/product5.jpg'
import product6 from '../../resource/image/product6.jpg'
import product7 from '../../resource/image/product7.jpg'
import product8 from '../../resource/image/product8.jpg'
import product9 from '../../resource/image/product9.png'
import product10 from '../../resource/image/product10.jpg'
import product11 from '../../resource/image/product11.jpg'
import { actionCreator } from './store/index.js';

class Product extends Component {
  render() { 
    const productImg = [
    [product1, product1_1,product1_2],[product2_1, product2,product2_2,product4],[product3, product2,product3,product4,product5],[product4, product2,product3,product4,product5],[product5, product2,product3,product4,product5],
    [product6, product2,product3,product4,product5],[product7, product2,product3,product4,product5],[product8, product2,product3,product4,product5],[product9, product2,product3,product4,product5],[product10, product2,product3,product4,product5],
    [product11, product2,product3,product4,product5]
    ]
    const { products, displayIndex, techMenuIndex, handleDisplayIndex, handleTechMeunIndex, updateThumbIndex, thumbIndex } = this.props;
    const productsObj = products.toJS();
    return ( 
    <ProductWrapper>
      <ProductCategory>
        {
          productsObj.map((item,index) => {
            if(index === displayIndex){
              return (
                <ProductCategoryItemActive onClick={() => handleDisplayIndex(index)} key={item.productName+index}>{item.productName}</ProductCategoryItemActive>
              )
            }else{
              return (
                <ProductCategoryItem onClick={() => handleDisplayIndex(index)} key={item.productName+index}>{item.productName}</ProductCategoryItem>
              )
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
                )
              })
            }
          </ThumbnailWrapper> 
        </ProductDetailImageWrapper>
        <ProductDetailContent>{productsObj[displayIndex].productIntro}</ProductDetailContent>

        <TechDataMenu>
          {['Usage','Specs','Features','Sample'].map((item,index)=>{
               
              if(index === techMenuIndex){
                return(
                  <TechDataMenuItemActive onClick={() => handleTechMeunIndex(index)} key={item+index} >{item}</TechDataMenuItemActive>
                )
              }else{
                return(
                  <TechDataMenuItem onClick={() => handleTechMeunIndex(index)} key={item+index} >{item}</TechDataMenuItem>
                )
              }
            })
          }
        </TechDataMenu>
        
        <TechDataDetail> {productsObj[displayIndex].techDetail[techMenuIndex]} </TechDataDetail>
      </ProductDetail>
    </ProductWrapper> );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.getIn(['product','products']),
    displayIndex: state.getIn(['product','currentDisplayIndex']),
    techMenuIndex: state.getIn(['product','currentTechMenuIndex']),
    thumbIndex: state.getIn(['product','imageBaseOnThumbIndex'])
  }
};

const mapDispathToProps = (dispatch) => {
  return {
    handleDisplayIndex(index){
      dispatch(actionCreator.updateDisplayIndex(index));
      dispatch(actionCreator.updateTechMenuIndex(0));
      dispatch(actionCreator.updateThumbIndex(0));
    },
    handleTechMeunIndex(index){
      dispatch(actionCreator.updateTechMenuIndex(index));
    },
    updateThumbIndex(index){
      dispatch(actionCreator.updateThumbIndex(index));
    }
  }
};

export default connect(mapStateToProps, mapDispathToProps)(Product);
