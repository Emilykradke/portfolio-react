import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Hamburger from './Hamburger';

class Nav extends Component {

  render() {
    return (
      <nav>
        <Scrollspy className="nav-list" 
          items={ ['about', 'portfolio', 'contact'] } offset={ -200 }>
          <li>
            <a href={`#about`}>About</a>
            <a href={`#portfolio`}>Portfolio</a>
            <a href={`#contact`}>Contact</a>
            <a href={`https://www.dropbox.com/s/xr6kiy518oho4jh/Resume.pdf?dl=0`}  target={"_blank"}>Resume</a>
          </li>
        </Scrollspy>

        <div className='hamburger-button'>
          <Hamburger
          click={this.props.burgerClickHandler}
          ></Hamburger>
        </div>
      </nav>
    );
  }
}

export default Nav;