import React, { PureComponent } from 'react';
import Button from '@mui/material/Button';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Button variant="contained">你好，世界</Button>
    );
  }
}
 
//https://mui.com/zh/getting-started/installation/

export default Header;