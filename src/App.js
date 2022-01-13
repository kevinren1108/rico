
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux'
import { Route, Routes} from 'react-router-dom';
import Header from './common/header/index.js';
import store from './store/index.js'

class App extends PureComponent {
  
  render() { 
    return ( 
      <Provider store={store}>
        <Header />
          <Routes>
            
            
          </Routes>
      </Provider>

     );
  }
}
 
export default App;
