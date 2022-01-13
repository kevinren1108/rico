import React, { Component } from 'react';
import {  ProductWrapper, 
          ProductCategory, ProductCategoryItem,
          ProductDetail, ProduchDetailTitle, ProductDetailImage, ProductDetailContent,
          TechDataMenu, TechDataMenuItem, TechDataDetail
} from './style';
import { connect } from 'react-redux';
import image from '../../resource/image/aggregate1.jpg'
import { actionCreator } from './store/index.js';

class Product extends Component {
  render() { 
    const { products, displayIndex, handleDisplayIndex } = this.props;
    const productsObj = products.toJS();
    return ( 
    <ProductWrapper>
      <ProductCategory>
        {
          productsObj.map((item,index) => {
            return (
              <ProductCategoryItem onClick={() => handleDisplayIndex(index)} key={item.productName+index}>{item.productName}</ProductCategoryItem>
            )
          })
        } 
      </ProductCategory>
      
      <ProductDetail>
        <ProduchDetailTitle>{productsObj[displayIndex].productName}</ProduchDetailTitle>
        <ProductDetailImage><img src={image} width='240px' height='240px' /></ProductDetailImage>
        <ProductDetailContent>{productsObj[displayIndex].productIntro}</ProductDetailContent>

        <TechDataMenu>
          <TechDataMenuItem>Usage</TechDataMenuItem>
          <TechDataMenuItem>Specs</TechDataMenuItem>
          <TechDataMenuItem>Features</TechDataMenuItem>
          <TechDataMenuItem>Sample</TechDataMenuItem>
        </TechDataMenu>

        <TechDataDetail> {productsObj[displayIndex].techDetail} </TechDataDetail>
      </ProductDetail>
    </ProductWrapper> );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.getIn(['product','products']),
    displayIndex: state.getIn(['product','currentDisplayIndex'])
  }
};

const mapDispathToProps = (dispatch) => {
  return {
    handleDisplayIndex(index){
      dispatch(actionCreator.updateDisplayIndex(index));
    }
  }
};

export default connect(mapStateToProps, mapDispathToProps)(Product);
