import React, { Component } from 'react';
import emily_img from '../img/emily_resized.png';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="contact-container">
          <h1 className="heading-l">Contact</h1>
          <div className="contact-inner">
            <img className="profile-img" src={emily_img} alt="emily-radke"/>
            <div className="details">
              <p className="paragraph">
                I'm a hyper-passionate web developer with skills ranging from front-end 
                to back-end, including:
              </p>
              <div className="skills-block">
                <ul>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                </ul>
                <ul>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Mongoose</li>
                  <li>Sequelize</li>
                </ul>
              </div>
              <p className="paragraph">
                My applications will work across multiple browsers and devices, focusing 
                on performance and easy-to-use UI/UX!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;