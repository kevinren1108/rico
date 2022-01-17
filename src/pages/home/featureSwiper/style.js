import styled from 'styled-components'
import media from '../../../media.js'

export const FeatureSwiperWrapper = styled.div`
  height: 500px;
  margin-top: 10px;
  font-size: 40px;
  ${media.tablet`
    margin: 0 0;
    width: 100%;
    height: 320px;
  `};
  
`; 

export const FeatureSwiperImageWrapper = styled.div`
  height: 400px;
  width: 520px;
  float: left;
  margin-top: 50px;
  margin-left: 50px;
  ${media.tablet`
    margin: 10px 8.33%;
    width: 83.34%;
    height: 310px;
  `};
`

export const ImageContainer = styled.img`
  float: left;
  max-width: 380px;
  max-height: 380px;
  margin: 10px 0 10px 10px;
  ${media.tablet`
    margin: 0 0;
    max-width: 83.34%;
    max-height: 300px;
  `};
`

export const FeatureSwiperProductWrapper = styled.div`
  height: 400px;
  width: 500px;
  float: left;
  margin-top: 50px;
  margin-left: 50px;
  ${media.tablet`
    margin: 0 8.33%;
    width: 83.34%;
    height: 300px;
  `};
`

export const ProductName = styled.div`
  height: 40px;
  width: 480px;
  float: left;
  line-height: 35px;
  font-size: 30px;
  margin-top: 10px;
  margin-left: 10px;
  text-align: left;
  ${media.tablet`
    margin-left: 0px;
    line-height: 25px;
    font-size: 22px;
    max-width: 83.34%;
  `};
`

export const ProductDetail = styled.div`
  height: 280px;
  width: 480px;
  float: left;
  line-height: 28px;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 10px;
  text-align: left;
  overflow: hidden;
  ${media.tablet`
    margin-left: 0px;
    line-height: 25px;
    font-size: 16px;
    max-height: 200px;
    width: 100%;
    height: 200px;
  `};
`

export const ProductDetailBtn = styled.div`
  height: 30px;
  background: gray;
  width: 100px;
  float: left;
  border: 0px solid rgba(176,190,197,0.4);
  border-radius: 20px;
  background: rgba(176,190,197,0.4);
  margin-top: 10px;
  margin-left: 380px;
  color: black;
  line-height: 26px;
  font-size: 20px;
  text-align: center;
  padding-top: 7px;
  
  ${media.tablet`
    z-index: 5;
    margin-left: 0px;
    line-height: 25px;
    font-size: 16px;
    max-height: 300px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    right: 20px;
    width: 100px;
  `};
`