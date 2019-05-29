import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="copyright">
          © 2019 
          <a href="mailto:emilykradke@gmail.com"> Emily Radke</a>
        </p>
        <p className="tools">This site was built with great tools like 
          <span className="tool"> HTML, SCSS, </span> 
          and
          <span className="tool"> React.</span>
        </p>
      </footer>
    );
  }
}

export default Footer;