import React, { Component } from 'react';


class Hamburger extends Component {
  constructor(props) {
    super(props);
    
    this.menuBtnRef = React.createRef();
  }
  
  
  componentDidUpdate() {
    
  }

  render() {
    const { menuOpen, toggleMenu } = this.props;

    return (
      <button ref={this.menuBtnRef}
        autoFocus="autofocus"
        className="hamburger"
				aria-expanded={this.props.menuOpen ? "true" : "false"}
				onClick={() => {toggleMenu()}}
			>
        <span className={menuOpen ? "hamburger clicked" : "hamburger"}>
          <span className="line" />
        </span>
      </button>
    );
  }
}

export default Hamburger;