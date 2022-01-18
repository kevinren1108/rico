import styled from "styled-components";
import media from "../../media.js";

export const ProductWrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 14px;
  justify-content: space-between;
  line-height: 21px;
  margin: 0px auto;
  padding: 25px 0 25px 0;
  word-break: break-word;
  border-bottom: 1px solid #000;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 1170px;
  overflow: hidden;
`;

export const ProductCategory  = styled.div`
  width: 33.6%;
  float: left;
  margin-left: 15px;
  padding-bottom: 20px;
  font-size: 40px;
  padding-top: 10px;
  ${media.tablet`
    display: none;
  `};
`;

export const ProductCategoryItem = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
  padding: 10px 0 10px 10px;
  border: 1px solid gray;
  overflow: hidden;
  text-align: left;
  font-size: 20px;
  color: #0a3343;
  line-height: 30px;
  cursor: pointer;
  &:hover{
    color: white;
    background: #b0bec5;
  }
`;

export const ProductCategoryItemActive = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
  padding: 10px 0 10px 10px;
  border: 1px solid gray;
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  color: white;
  background: #808e95;
`;

export const ProductDetail  = styled.div`
  width: 62.3%;
  float:  right;
  padding-top: 10px;
  margin-left: 15px;
  height: 800px;
  line-height: 800px;
  font-size: 40px;
  text-align: center;
  ${media.tablet`
    height: 100%;
    width: 100%;
    float: left;
  `};
`;

export const ProduchDetailTitle = styled.div`
  float: right;
  height: 50px;
  width: 47%;
  margin-top: 10px;
  margin-left: 1%;
  margin-right: 2%;
  padding: 10px 0 0 10px;
  font-size: 25px;
  line-height: 28px;
  text-align: left;

  ${media.tablet`
    width: 100%;
    float: left;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    padding: 0 0 0 0;
  `};
`;

export const ProductDetailImageWrapper = styled.div`
  font-size: 20px;
  float: left;
  margin-top: 40px;
  height: 325px;
  width: 325px;
  margin-left: 2%;
  line-height: 325px;
`;

export const ImageContainer = styled.img`
  float: left;
  margin: 0 37.5px;
  max-width: 250px;
  max-height: 250px;
`;

export const ThumbnailWrapper = styled.div`
  margin: 12.5px 0;
  height: 50px;
  position: absolute;
  width: 325px;
  top: 295px;
  ${media.tablet`
    top: 475px;
    float: left;
    margin: 12.5px 10px;
  `};
`;

export const Thumbnail = styled.img`
  float: left;
  height: 50px;
  width: 50px;
  max-width: 50px;
  max-height: 50px;
  cursor: pointer;
  border: 4px solid #808e95;
  margin-right: 3px;
`;

export const ProductDetailContent = styled.div`
  float: right;
  height: 215px;
  width: 47%;
  margin-top: 5px;
  margin-left: 1%;
  margin-right: 2%;
  font-size: 16px;
  line-height: 20px;
  text-align: left;

  ${media.tablet`
    width: 83.34%;
    float: left;
    margin: 12.5px 10px;
  `};
`;

export const TechDataMenu = styled.div` 
  float: left;
  height: 50px;
  width: 96%;
  margin-top: 10px;
  margin-left: 2%;
  margin-right: 2%;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  ${media.tablet`
    width: 83.34%;
    float: left;
    margin: 12.5px 10px;
  `};
`;

export const TechDataMenuItem = styled.div`
  float: left;
  height: 50px;
  padding: 0 10px;
  margin: 0 17px;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  ${media.tablet`
    height: 48px;
    width: 42.99%;
    margin: 0 0;
    padding: 0 0;
    float: left;
    margin: 12.5px 10px;
    line-height: 24px;
    font-size: 16px;
  `};
  &:hover{
    border-bottom: 3px solid #000;
  }
`;

export const TechDataMenuItemActive = styled.div`
  float: left;
  height: 50px;
  padding: 0 10px;
  margin: 0 17px;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  border-bottom: 3px solid #000;
  ${media.tablet`
    height: 48px;
    width: 42.99%;
    margin: 0 0;
    padding: 0 0;
    float: left;
    margin: 12.5px 10px;
    line-height: 24px;
    font-size: 16px;
  `};
`;

export const TechDataDetail = styled.div`
  float: left;
  height: 480px;
  width: 96%;
  margin-top: 10px;
  margin-left: 2%;
  margin-right: 2%;
  font-size: 16px;
  line-height: 25px;
  text-align: left;
  ${media.tablet`
    margin-left: 8.33%; 
    width: 83.34%;
    height: 200px;
  `};
`;

export const ProductCategorySwiper = styled.div`
  margin-top: 35px;
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 770px) {
    display: none;
  }
`;

export const SwiperItem = styled.div`
  border-bottom: 3px solid #0a3343;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  height: 64px;
  background: rgba(176,190,197,0.4);
`;