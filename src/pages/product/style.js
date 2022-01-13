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
  background: whitesmoke;
  padding-top: 10px;
`

export const ProductCategoryItem = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  border: 1px solid gray;
  height: 60px;
  text-align: center;
  background: darkgray;
  line-height: 60px;
  margin-top: 10px;
`

export const ProductDetail  = styled.div`
  width: 62.3%;
  float:  right;
  padding-top: 10px;
  margin-left: 15px;
  height: 800px;
  line-height: 800px;
  font-size: 40px;
  background: whitesmoke;
  text-align: center;
`

export const ProduchDetailTitle = styled.div`
  float: right;

  height: 100px;
  width: 49%;
  margin-top: 10px;
  margin-left: 1%;
  margin-right: 2%;
  background: darkgray;
  
  font-size: 20px;
  line-height: 100px;
  text-align: center;
`;

export const ProductDetailImage = styled.div`
  font-size: 20px;
  float: left;
  margin-top: 10px;
  background: darkgray;
  height: 325px;
  width: 45%;
  margin-left: 2%;
  line-height: 325px;
  text-align: center;
`;

export const ProductDetailContent = styled.div`
  float: right;

  height: 215px;
  width: 49%;
  margin-top: 10px;
  margin-left: 1%;
  margin-right: 2%;
  background: darkgray;
  
  font-size: 20px;
  line-height: 215px;
  text-align: center;
`;

export const TechDataMenu = styled.div` 
  float: left;
  height: 50px;
  width: 96%;
  margin-top: 10px;
  margin-left: 2%;
  margin-right: 2%;
  background: darkgray;
  
  font-size: 20px;
  line-height: 50px;
  text-align: center;
`;

export const TechDataMenuItem = styled.div`
  float: left;
  height: 50px;
  padding: 0 10px;
  margin: 0 17px;
  background: darkgoldenrod;

  font-size: 20px;
  line-height: 50px;
  text-align: center;
`;


export const TechDataDetail = styled.div`
  float: left;
  height: 380px;
  width: 96%;
  margin-top: 10px;
  margin-left: 2%;
  margin-right: 2%;
  background: darkgray;
  
  font-size: 24px;
  line-height: 50px;
  text-overflow: inherit;
  text-align: center;
`;

