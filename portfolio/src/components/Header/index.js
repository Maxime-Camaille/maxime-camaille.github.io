import './styles.css';
import Logo from '../../assets/images/Logo Maxime.png';
import React,{useState} from 'react';



function
Header() {

    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
      setShowLinks(!showLinks);
    };

  return (
    <header className="header">
    <nav className='NavBar'>
        
        <div className="logo">
            <img decoding="async" src={Logo} alt="logo-of-the-website"/>
        </div>
        <div class={`hamburger ${showLinks ? 'toggle' : ''}`} onClick={handleShowLinks}>
            <div className="bars1"></div>
            <div className="bars2"></div>
            <div className="bars3"></div>
        </div>
        <ul class={`nav-links${showLinks ? ' open' : ''}`}>
            <li className={`${showLinks ? 'fade' : ''}`}><a href="/">Accueil</a></li>
            <li className={`${showLinks ? 'fade' : ''}`}><a href="/">À propos</a></li>
            <li className={`${showLinks ? 'fade' : ''}`}><a href="/">CV en ligne</a></li>
            <li className={`${showLinks ? 'fade' : ''}`}><a href="/">Projets</a></li>
            <li className={`${showLinks ? 'fade' : ''}`}><a href="/">Contact</a></li>
        </ul>
    </nav>
    </header>
  )}

  export default Header;
