import React, { Component } from 'react';
import {  ProductWrapper, 
          ProductCategory, ProductCategoryItem, ProductCategoryItemActive,
          ProductDetail, ProduchDetailTitle, ProductDetailImage, ProductDetailContent,
          TechDataMenu, TechDataMenuItem, TechDataDetail, TechDataMenuItemActive
} from './style';
import { connect } from 'react-redux';
import image from '../../resource/image/aggregate1.jpg'
import { actionCreator } from './store/index.js';

class Product extends Component {
  render() { 
    const { products, displayIndex, techMenuIndex, handleDisplayIndex, handleTechMeunIndex } = this.props;
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
        <ProductDetailImage><img src={image} width='240px' height='240px' /></ProductDetailImage>
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
    techMenuIndex: state.getIn(['product','currentTechMenuIndex'])
  }
};

const mapDispathToProps = (dispatch) => {
  return {
    handleDisplayIndex(index){
      dispatch(actionCreator.updateDisplayIndex(index));
    },
    handleTechMeunIndex(index){
      dispatch(actionCreator.updateTechMenuIndex(index));
    }
  }
};

export default connect(mapStateToProps, mapDispathToProps)(Product);
