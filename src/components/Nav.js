import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import Hamburger from './Hamburger';

const navItems = [{id: 'about', text: 'About'}, 
                  {id: 'portfolio', text: 'Portfolio'}, 
                  {id: 'contact', text: 'Contact'}];


class Nav extends Component {

  render() {
    const { toggleMenu } = this.props;
    return (
      <nav>
        <Scrollspy className="nav-list" 
          items={ ['about', 'portfolio', 'contact'] } currentClassName="active" offset={ -200 }>
          {navItems.map((item, i) => {
            return (
              <li key={i}>
                <a href={`#${item.id}`}>{item.text}</a>
              </li>
            );
          })}
        </Scrollspy>

        <Hamburger 
          menuOpen={this.props.menuOpen}
          toggleMenu={toggleMenu}
        />
      </nav>
    );
  }
}

export default Nav;