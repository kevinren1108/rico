import styled from 'styled-components'
import logoImg from '../../statics/logo.png'
import media from "./../../media.js"

export const HeaderWrapper = styled.div`
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
  height: 100px;
  width: 100%;
  max-width: 1170px;
  color: #0a3343;
  ${media.tablet`
    padding: 0px 0px 0px 0px;
    height: 50px;
    position: fixed;
    z-index: 5;
    background: white;
  `};
  

`

export const LogoWrapper = styled.div`
  position: absolute;
  top: 0px;
  background-image: url(${logoImg});
  background-size: contain;
  width: 100px;
  height: 100px;
  ${media.tablet`
    width:45px;
    height: 45px;
    margin: 5px 0 0 5px;
  `};
`

export const NavWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  right: 0px;
  top: 0px;

  ${media.tablet`
    position: absolute;
    right: 0px;
    top: 0px;

  `};
  
`

export const NavItem = styled.div`
  font-weight: bold;
  font-size: 0.875rem;
  margin: 30px 10px 30px 10px;
  padding: 10px 15px 20px 15px;
  box-sizing: border-box;
  display: block;
  float: left;
  position: relative;
  line-height: 21px;
  text-size-adjust: 100%;
  text-align: center;
  color: #0a3343;
  border-bottom: 5px solid transparent;
  &:hover{
    background: rgba(176,190,197,0.4);
    border-bottom: 5px solid #0a3343;
  }
  ${media.tablet`
    margin: 15px 10px 10px 10px;
    padding: 0 0 0 0;
    color: #0a3343;
    border-bottom: 5px solid #0a3343;
    padding: 0 5px 0 5px;
    &:hover{
      background: rgba(176,190,197,0.4);
      border-bottom: 5px solid #0a3343;
  }
  `};
  
 
  
`