import './styles.css';
import Logo from '../../assets/images/Logo Maxime.png';
import React,{useState} from 'react';
import {Link} from 'react-scroll';




function
Header() {

    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
      setShowLinks(!showLinks);
    };

  return (
    <header className="header">
    <nav className='NavBar'>
        
        <Link to='/' spy={true} smooth={true} offset={0} duration={500} className="logo">
            <img decoding="async" src={Logo} alt="logo-of-the-website"/>
        </Link>
        <div class={`hamburger ${showLinks ? 'toggle' : ''}`} onClick={handleShowLinks}>
            <div className="bars1"></div>
            <div className="bars2"></div>
            <div className="bars3"></div>
        </div>
        <ul class={`nav-links${showLinks ? ' open' : ''}`}>
            <li className={`${showLinks ? 'fade' : ''}`}>
              <Link to="/" spy={true} smooth={true} offset={-200} duration={500} style={{cursor : "pointer"}} >Accueil</Link>
            </li>
            <li className={`${showLinks ? 'fade' : ''}`}>
              <Link to="about" spy={true} smooth={true} offset={-200} duration={500} style={{cursor : "pointer"}}>À propos</Link>
            </li>
            <li className={`${showLinks ? 'fade' : ''}`}>
            <Link to="" spy={true} smooth={true} offset={50} duration={500} style={{cursor : "pointer"}}>CV en ligne</Link>
            </li>
            <li className={`${showLinks ? 'fade' : ''}`}>
            <Link to="" spy={true} smooth={true} offset={50} duration={500} style={{cursor : "pointer"}}>Projets</Link>
            </li>
            <li className={`${showLinks ? 'fade' : ''}`}>
            <Link to="" spy={true} smooth={true} offset={50} duration={500} style={{cursor : "pointer"}}>Contact</Link>
            </li>
        </ul>
    </nav>
    </header>
  )}

  export default Header;
