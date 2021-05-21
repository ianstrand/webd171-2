import React from 'react';
import './App.css';

import Navbarwith from './components/Navbar.js';
import Footer from './components/Footer.js';

class App extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Navbarwith name="Ian Strand's Navbar" />
          <div className="main-container"> </div>
          <Footer name="Ian Strand's Footer" />
        </React.Fragment>
      );
  }
}

export default App;