import "./styles.css";
import React from 'react';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import javascript from '../../assets/images/javascript.png';
import reactLogo from '../../assets/images/react.png';
import bootstrap from '../../assets/images/bootstrap.png';
import php from '../../assets/images/php.png';
import laravel from '../../assets/images/laravel.png';
import redux from '../../assets/images/redux.png';
import axios from '../../assets/images/axios.png';
import webpack from '../../assets/images/webpack.png';
import babel from '../../assets/images/babel.png';
import reactrouter from '../../assets/images/reactrouter.png';
import mysql from '../../assets/images/mysql.png';
import jwt from '../../assets/images/jwt.png';
import git from '../../assets/images/git.png';
import github from '../../assets/images/github.png';


function Carousel() {
  const logos= [ 
    { "url": html, "alt": "logo-html", "figname": "HTML" },
    { "url": css, "alt": "logo-css", "figname": "CSS" }, 
    { "url": javascript, "alt": "logo-javascript", "figname": "JavaScript" },
    { "url": reactLogo, "alt": "logo-react", "figname": "React" },
    { "url": redux, "alt": "logo-redux", "figname": "Redux" },
    { "url": axios, "alt": "logo-axios", "figname": "Axios" },
    { "url": webpack, "alt": "logo-webpack", "figname": "Webpack" },
    { "url": babel, "alt": "logo-babel", "figname": "Babel" },
    { "url": reactrouter, "alt": "logo-reactrouter", "figname": "ReactRouter" },
    { "url": bootstrap, "alt": "logo-bootstrap", "figname": "Bootstrap" },
    { "url": php, "alt": "logo-php", "figname": "PHP" },
    { "url": laravel, "alt": "logo-laravel", "figname": "Laravel" },
    { "url": mysql, "alt": "logo-mysql", "figname": "MYSQL" },
    { "url": jwt, "alt": "logo-jwt", "figname": "JWT" },
    { "url": git, "alt": "logo-git", "figname": "Git" },
    { "url": github, "alt": "logo-github", "figname": "Github" },
  ];




  return (
    <div className="logos-slider">
      <div className="slider">
      <div class="slide-track">
        {logos.map((logo) => (
          <div className="slide">
          <img
            key={logo.alt}
            src={logo.url}
            alt={logo.alt}
            className={`logo-tech ${logo.alt}}`}
          />
          <figcaption>{logo.figname}</figcaption>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Carousel;
