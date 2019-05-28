import React, { Component } from 'react';

import cookie_store from '../img/cookie_store.png';
import rr from '../img/rr.png';
import game_jam from '../img/game_jam.png';

const projects = [
  {
    name: "Sugar Mama Cookie Shop",
    imagePath: cookie_store,
    skills: "HTML, SCSS, Node.js, React.js, MongoDB, Express.js",
    URL: "https://glacial-waters-31656.herokuapp.com/ "
  },
  {
    name: "Restaurant Roulette",
    imagePath: rr,
    skills: "HTML, CSS, jQuery, Yelp API",
    URL: "https://emilykradke.github.io/Project1/"
  },
  {
    name: "Game Jam",
    imagePath: game_jam,
    skills: "HTML, CSS, jQuery, Node.js, MySQL, Sequelize, Express.js",
    URL: "https://game-jam2019.herokuapp.com/"
  }
]


class Portfolio extends Component {
  constructor(props) {
    super(props);
    
    this.project1Ref = React.createRef();
    this.project2Ref = React.createRef();
    this.project3Ref = React.createRef();
    this.panelRefs = [this.project1Ref, this.project2Ref, this.project3Ref];
  }
  
  
  render() {

    return (
      <section id="portfolio" className="portfolio">
        <div className="portfolio-container">
          <h1 className="heading-l">Portfolio</h1>

          <div className="projects-container">
            {projects.map((project, i) => {
              return (
                <div className="project-block" key={i}
                  ref={i === 0 ? this.project1Ref : 
                        i === 1 ? this.project2Ref : 
                          i === 2 ? this.project3Ref : null}
                >
                  <a href={project.URL} className="project-img-link" target="_blank" rel="noopener noreferrer">
                    <img src={project.imagePath} alt="" />
                  </a>
                  <div className="project-details">
                    <h2 className="heading-m">{project.name}</h2>
                    <p className="paragraph">{project.skills}</p>
                    <a href={project.URL} className="project-link" target="_blank" rel="noopener noreferrer">View project</a>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>
    );
  }
}

export default Portfolio;