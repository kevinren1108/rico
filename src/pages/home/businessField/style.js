import styled from "styled-components";
import media from "../../../media.js";

export const BusinessFieldWrapper = styled.div`
  height: 400px;
  margin-top: 10px;
  ${media.tablet`
    margin: 25px 8.33%;
    width: 100%;
    height: 320px;
  `};
`;

export const FieldName = styled.div`
  float: left;
  margin: 25px 0 0 25px;
  font-size: 30px;
  line-height: 30px;
  ${media.tablet`
    margin: 0 0;
    width: 83.34%;
    font-size: 22px;
    line-height: 25px;
  `};
`;

export const FieldIntro = styled.div`
  float: left;
  margin: 25px 0 0 25px;
  font-size: 18px;
  line-height: 36px;
  width: 1120px;
  ${media.tablet`
    margin: 0 0 0 0;
    width: 83.34%;
    height: 350px;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
  `};

`;
