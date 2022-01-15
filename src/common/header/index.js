import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { HeaderWrapper, LogoWrapper, NavItem, NavWrapper } from './style'

class Header extends PureComponent {
  render() { 
    return ( <div>

      <HeaderWrapper>
        <Link to='/'><LogoWrapper/></Link>
        <NavWrapper>
          <Link to='/'><NavItem>HOME</NavItem></Link>
          <Link to='/product'><NavItem>PRODUCT</NavItem></Link>
          <Link to='/about'><NavItem>ABOUT</NavItem></Link>
        </NavWrapper>
      </HeaderWrapper>
    </div>
      
    );
  }
}
 

export default Header;

//<img alt="logo" src={[require("../../statics/logo.png")]} />