import React, { PureComponent } from 'react';
import { Provider } from 'react-redux'
import { Route, Routes} from 'react-router-dom';
import Header from './common/header/index.js';
import store from './store/index.js'
import AboutUs from './pages/aboutUs'
import Home from './pages/home'
import Product from './pages/product';

class App extends PureComponent {
  
  render() { 
    return ( 
      <Provider store={store}>
        <Header />
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/about' exact element={<AboutUs />}></Route>
            <Route path='/product' exact element={<Product />}></Route>
          </Routes>
      </Provider>

     );
  }
}
 
export default App;
