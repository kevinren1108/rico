import { CssBaseline } from '@mui/material';
import React, { PureComponent } from 'react';

import { HeaderWrapper, LogoWrapper, NavItem, NavWrapper } from './style'

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
      <CssBaseline/>
      <HeaderWrapper>
        <LogoWrapper/>
        <NavWrapper>
          <NavItem>HOME</NavItem>
          <NavItem>PRODUCT</NavItem>
          <NavItem>ABOUT US</NavItem>
        </NavWrapper>
      </HeaderWrapper>
    </div>
      
    );
  }
}
 

export default Header;

//<img alt="logo" src={[require("../../statics/logo.png")]} />