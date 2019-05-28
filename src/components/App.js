import React, { Component } from 'react';

import Nav from './Nav';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';


class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      menuOpen: null
    }
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    // const { menuOpen } = this.state;

    return (
      <div className="wrapper">
        
        <Nav 
          toggleMenu={this.toggleMenu}
        />
        <Home />
        <Portfolio />
        <Contact />

      </div>
    );
  }
}

export default App;
