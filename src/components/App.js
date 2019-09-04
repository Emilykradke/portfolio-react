import React, { Component } from 'react';

import Nav from './Nav/Nav';
import HamburgerMenu from './Nav/HamburgerMenu';
import Backdrop from './Nav/Backdrop';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';


class App extends Component {
  
  state = {
    burgerMenuOpen: false
  }

  burgerToggleClickHandler = () => {
    this.setState((prevState) =>{
      return {burgerMenuOpen: !prevState.burgerMenuOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({burgerMenuOpen: false})
  }

  render() {

    let burgerMenu;
    let backdrop;

    if (this.state.burgerMenuOpen) {
      burgerMenu = <HamburgerMenu click={this.backdropClickHandler} />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="wrapper">
        
        <Nav 
          burgerClickHandler={this.burgerToggleClickHandler}/>
        {burgerMenu}
        {backdrop}
        <Home />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
