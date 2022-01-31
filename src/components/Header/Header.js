import React, {useState, useEffect} from 'react';
import './Header.scss';
import logo from '../../images/icons/logo.svg'
import menu from '../../images/icons/icon-hamburger.svg'

const Header = (props) => {
  const [header, setHeader] = useState('')
  const scrollTrigger = 600;

  useEffect(() => {
      window.addEventListener("scroll", scrollProgress);
  }, [header])

  const scrollProgress = () => {
    //header
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        setHeader('gradient')
      } else {
        setHeader('')
      }

    }

  return (
    <header className={header}>
      <a href="#top"><img src={logo} alt="logo" /></a>
      <img src={menu} className="menu" alt="hamburger menu" onClick={props.toggleOpen}/>
      <ul>
        <li><a>About</a></li>
        <li><a>Careers</a></li>
        <li><a>Events</a></li>
        <li><a>Products</a></li>
        <li><a>Support</a></li>
      </ul>
    </header>
  );
}

export default Header;
