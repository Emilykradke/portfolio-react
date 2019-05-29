import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <section id="about" className="home">
        <div className="home-container">
          <h1 className="heading-l">Hello, I'm <span className="loud">Emily Radke</span>.</h1>
          <h2 className="heading-l">I'm a full-stack web developer.</h2>
          {/* <p className="paragraph">I have a passion for design and creating clean and user-friendly experiences.</p> */}
        </div>
      </section>
    );
  }
}

export default Home;