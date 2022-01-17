import styled from "styled-components";
import media from "../../media.js"

export const AboutUsWrapper = styled.div`
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

  ${media.tablet`
    top:25px;
    width: 100%;

  `};
`;

export const Division = styled.div`
  width: 63.6%;
  float: left;
  margin-left: 15px;
  padding-bottom: 20px;
  font-size: 40px;
  color: #0a3343;
  padding-top: 10px;
  height: 500px;
  ${media.tablet`
    top:25px;
    width: 93.67%;
    font-size: 24px;
    line-height: 28px;
    height: 280px;
  `};
`;

export const DivisionContent = styled.div`
  color: #0a3343;
  font-size: 20px;
  margin-top: 40px;
  ${media.tablet`
    margin-top: 5px;
    top:25px;
    width: 93.67%;
    font-size: 14px;
    line-height: 20px;
  `};
`;


export const FindUs = styled.div`
  width: 31.6%;
  float: right;
  margin-left: 15px;
  font-size: 14px;
  color: #0a3343;
  ${media.tablet`
    top:25px;
    width: 100%;
    float: left;
  `};
`;

export const FindUsTitle = styled.div`
  font-size: 40px;
  color: #0a3343;
  ${media.tablet`
    font-size: 24px;
    line-height: 28px;
  `};
`;

export const Hours = styled.div`
  width: 31.6%;
  float: right;
  margin-left: 15px;
  margin-top: 20px;
  font-size: 14px;
  color: #0a3343;
  ${media.tablet`
    top:25px;
    width: 100%;
    float: left;
  `};
`;

export const HoursTitle = styled.div`
  font-size: 40px;
  color: #0a3343;
  margin-bottom: 10px;
  ${media.tablet`
    font-size: 24px;
    line-height: 28px;
  `};
`;

export const HoursItemWrapper = styled.div`
  float:left;
`

export const HoursItem = styled.div`
  float: left;
  margin-left: 10px;
  width: 80px;
  
  ${media.tablet`
    margin-left: 0;
  `};
`

export const HoursItemTime = styled.div`
  float: left;
  margin-left: 10px;
  width: 90px;
`
