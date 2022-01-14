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