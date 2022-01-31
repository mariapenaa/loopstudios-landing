import React from 'react';
import './Footer.scss';
import logo from '../../images/icons/logo.svg'
import fb from '../../images/icons/icon-facebook.svg'
import ig from '../../images/icons/icon-instagram.svg'
import pn from '../../images/icons/icon-pinterest.svg'
import tw from '../../images/icons/icon-twitter.svg'


const Footer = () => {
  return (
    <footer className="d-flex justify-content-center ">
      <div className="row inner-container d-flex justify-content-between align-items-center w-100">
        <div className="row w-100 d-flex justify-content-between align-items-center footer-row">
          <div className="col d-flex align-items-center "><img src={logo} /></div>
          <div className="col p-0 d-flex justify-content-end d-flex align-items-center">
            <ul className="icon-list">
              <li><a><img src={fb} /></a></li>
              <li><a><img src={tw} /></a></li>
              <li><a><img src={pn} /></a></li>
              <li><a><img src={ig} /></a></li>
            </ul>
          </div>
        </div>
        <div className="row w-100 justify-content-between align-items-center footer-row">
          <div className="col d-flex justify-content-start">
            <ul className="footer-list">
              <li><a>About</a></li>
              <li><a>Careers</a></li>
              <li><a>Events</a></li>
              <li><a>Products</a></li>
              <li><a>Support</a></li>
            </ul>
          </div>
          <div className="col d-flex copyright justify-content-end">
            <p className="m-0 copyright">© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;