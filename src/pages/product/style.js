import styled from 'styled-components'

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
`

export const ProductCategoryItem = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
  padding: 20px 0 0 10px;
  border: 1px solid gray;
  height: 40px;
  text-align: left;
  font-size: 20px;
  color: #0a3343;
  line-height: 20px;

  cursor: pointer;
  &:hover{
    color: white;
    background: #b0bec5;
  }
`

export const ProductCategoryItemActive = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
  padding: 20px 0 0 10px;
  border: 1px solid gray;
  height: 40px;
  text-align: left;
  font-size: 20px;
  line-height: 20px;
  color: white;
  background: #808e95;
  
`

export const ProductDetail  = styled.div`
  width: 62.3%;
  float:  right;
  padding-top: 10px;
  margin-left: 15px;
  height: 800px;
  line-height: 800px;
  font-size: 40px;
  text-align: center;
`

export const ProduchDetailTitle = styled.div`
  float: right;
  height: 100px;
  width: 47%;
  margin-top: 10px;
  margin-left: 1%;
  margin-right: 2%;
  padding: 10px 0 0 10px;
  font-size: 30px;
  line-height: 30px;
  text-align: left;
`;

export const ProductDetailImageWrapper = styled.div`
  font-size: 20px;
  float: left;
  margin-top: 10px;
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
`

export const ThumbnailWrapper = styled.div`
  margin: 12.5px 0;
  height: 50px;
  position: absolute;
  width: 325px;
  top: 295px;
`

export const Thumbnail = styled.img`
  float: left;
  height: 50px;
  width: 50px;
  max-width: 50px;
  max-height: 50px;
  cursor: pointer;
  border: 4px solid #808e95;
  margin-right: 3px;
`

export const ProductDetailContent = styled.div`
  float: right;
  height: 215px;
  width: 47%;
  margin-top: 10px;
  margin-left: 1%;
  margin-right: 2%;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
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
  &:hover{
    border-bottom: 3px solid #000;;
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
  border-bottom: 3px solid #000;;
`;

export const TechDataDetail = styled.div`
  float: left;
  height: 380px;
  width: 96%;
  margin-top: 10px;
  margin-left: 2%;
  margin-right: 2%;

  
  font-size: 16px;
  line-height: 25px;
  text-overflow: inherit;
  text-align: left;
`;

