import React, {useState, useEffect} from 'react';
import './Drawer.scss';
import logo from '../../images/icons/logo.svg'
import CloseIcon from '@material-ui/icons/Close';

const Drawer = (props) => {

  return (
    <div className='drawer-container'>
        <div className="row w-100">
            <div className="col"><img src={logo} /></div>
            <div className="col d-flex justify-content-end"><CloseIcon style={{ color: 'white', fontSize:'2rem'}} onClick={props.toggleOpen}/></div>
        </div>
        <div className="row w-100 list-row">
            <div className="col">
                <ul>
                    <li><a>About</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Events</a></li>
                    <li><a>Products</a></li>
                    <li><a>Support</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Drawer;