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
                  <li>MySQL</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                </ul>
                <ul>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>JavaScript ES6</li>
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

          <ul className="contact-links">
            <li>
              <a href={`https://github.com/Emilykradke?tab=repositories`}  target={"_blank"}>
                <i class="fab fa-github"></i>
                Github
              </a>
            </li>
            <li>
              <a href={'https://www.dropbox.com/s/j4eoign9tmujl8x/Resume%20%285%29.pdf?dl=0'} target={"_blank"}>
                <i class="far fa-file-alt"></i>
                Resume
              </a>
            </li>
            <li>
              <a href={'https://www.linkedin.com/in/emily-r-b6b859174/'} target={"_blank"}>
                <i class="fab fa-linkedin"></i>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:emilykradke@gmail.com">
                <i class="far fa-envelope"></i>
                Email
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Contact;