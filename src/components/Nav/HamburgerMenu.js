import React from 'react';
import Scrollspy from 'react-scrollspy';

const HamburgerMenu = props => (
  <div className='hamburger-nav'>
    <Scrollspy className="nav-list" 
          items={ ['about', 'portfolio', 'contact'] } offset={ -200 }>
          <li>
            <a onClick= {props.click} href={`#about`}>About</a>
            <a onClick= {props.click} href={`#portfolio`}>Portfolio</a>
            <a onClick= {props.click} href={`#contact`}>Contact</a>
            <a onClick= {props.click} href={`https://www.dropbox.com/s/xr6kiy518oho4jh/Resume.pdf?dl=0`}  target={"_blank"}>Resume</a>
          </li>
        </Scrollspy>
  </div>
)

export default HamburgerMenu;