import styled from 'styled-components'
import img from '../../../statics/companyIntro.jpg'

export const BgImage = styled.div`
  background: url(${img});
  filter: blur(6px);
  -webkit-filter: blur(6px);
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

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
`

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
  height: 200px;
  width: 680px;
  text-align: left;
  font-size: 18px;
  line-height: 36px;
  color: white;
`;
