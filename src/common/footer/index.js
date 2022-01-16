import React, { Component } from 'react';
import { FooterWrapper,FooterMenu,MenuItem,CopyRight,Address } from './style.js' 
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() { 
    return ( 
    <FooterWrapper>
      <FooterMenu>
        <Link to='/'><MenuItem>HOME</MenuItem></Link>
        <Link to='/product'><MenuItem>PRODUCT</MenuItem></Link>
        <Link to='/about'><MenuItem>ABOUT US</MenuItem></Link>
        <CopyRight>
          Rico Waterproofing Materials  Canada Co Ltd Copyright © 20222 all rights reserved.
        </CopyRight>
        <Address>
          #45 - 6 Ratner St, Emerald Park, SK S4L0E3 Canada
        </Address>
      </FooterMenu>
      
    </FooterWrapper>
    );
  }
}
 
export default Footer;