import React, { Component } from 'react';
import {  ProductWrapper, 
          ProductCategory, ProductCategoryItem,
          ProductDetail, ProduchDetailTitle, ProductDetailImage, ProductDetailContent,
          TechDataMenu, TechDataMenuItem, TechDataDetail
} from './style';


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <ProductWrapper>
      <ProductCategory>
        <ProductCategoryItem>产品1</ProductCategoryItem>
        <ProductCategoryItem>产品2</ProductCategoryItem>
        <ProductCategoryItem>产品3</ProductCategoryItem>
        <ProductCategoryItem>产品4</ProductCategoryItem>
        <ProductCategoryItem>产品5</ProductCategoryItem>
        <ProductCategoryItem>产品6</ProductCategoryItem>
        <ProductCategoryItem>产品7</ProductCategoryItem>
        <ProductCategoryItem>产品8</ProductCategoryItem>
        <ProductCategoryItem>产品9</ProductCategoryItem>
        <ProductCategoryItem>产品10</ProductCategoryItem>
        <ProductCategoryItem>产品11</ProductCategoryItem>
        
      </ProductCategory>

      <ProductDetail>
        <ProduchDetailTitle>product title 品名</ProduchDetailTitle>
        <ProductDetailImage>product image 产品图片</ProductDetailImage>
        <ProductDetailContent>short intro 产品简介</ProductDetailContent>

        <TechDataMenu>
          <TechDataMenuItem>Usage用处</TechDataMenuItem>
          <TechDataMenuItem>Specs技术指标</TechDataMenuItem>
          <TechDataMenuItem>Features特点</TechDataMenuItem>
          <TechDataMenuItem>Sample案例</TechDataMenuItem>
        </TechDataMenu>

        <TechDataDetail> 
          Details, can change when user hoven or click on different menu item
          技术指标展示，可根据上方菜单选项变换
        </TechDataDetail>

      </ProductDetail>

      

    </ProductWrapper> );
  }
}
 
export default Product;