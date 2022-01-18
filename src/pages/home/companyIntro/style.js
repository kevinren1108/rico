import styled from "styled-components";
import img from "../../../statics/companyIntro.jpg";
import media from "../../../media.js";


export const BgImage = styled.div`
  background: url(${img});
  filter: blur(6px);
  -webkit-filter: blur(6px);
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${media.tablet`
    margin-top: 25px;
    height: 250px;
  `};
`;

export const BgTextWrapper = styled.div`
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0, 0.4); 
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  left: 50%;
  top: 225px;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
 
  ${media.tablet`
    top: 175px;
    margin-top: 0px;
    height: 180px;
  `};
`;

export const BgTextBusinessName = styled.div`
  float: left;
  margin-top: 25px;
  margin-left: 25px;
  margin-bottom: 25px;
  height: 200px;
  width: 200px;
  text-align: left;
  font-size: 40px;
  line-height: 50px;
  color: white;
  
  ${media.tablet`
    display:none;
  `};
`;

export const SmallFont = styled.div`
  font-size: 25px;
  line-height: 40px;
  color: white;
`;

export const BgTextBusinessIntro = styled.div`
  float: left;
  margin-left: 25px;
  margin-bottom: 25px;
  height: 250px;
  width: 680px;
  text-align: left;
  font-size: 15.5px;
  line-height: 36px;
  color: white;
  overflow: hidden;
  ${media.tablet`
    margin: 0 0;
    width: 100%;
    height: 180px;
    font-size: 16px;
    line-height: 20px;
    color: white;
  `};

  ${media.mobile`
    margin: 0 0;
    width: 100%;
    height: 200px;
    font-size: 13px;
    line-height: 16px;
    color: white;
  `};


`;
