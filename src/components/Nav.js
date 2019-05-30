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
            <a href={`https://www.dropbox.com/home?preview=Resume+(5).pdf`}  target={"_blank"}>Resume</a>
          </li>
        </Scrollspy>

        <Hamburger 
          menuOpen={this.props.menuOpen}
          toggleMenu={this.props.toggleMenu}
        />
      </nav>
    );
  }
}

export default Nav;