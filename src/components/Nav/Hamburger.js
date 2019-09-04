import React from 'react';


const Hamburger = props => (
  <button className="burgerButton" onClick={props.click}>
    
    <div className='menu-lines'>
      <div className="buttonLine" />
      <div className="buttonLine" />
      <div className="buttonLine" />
    </div>
    
  </button>
)

export default Hamburger;