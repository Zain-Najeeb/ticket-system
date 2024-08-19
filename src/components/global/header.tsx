import  React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
function Header() {

  return (
    <div className="header">
        <div className="header-items">
            <div className="nav-links">
         
                <span className='headerSpan'>New Request</span>
                <span className='headerSpan'>My Requests</span>
                <Link to="areq">
                    <span className='headerSpan'>All Requests</span>
                </Link>
       
            </div>
        <div className="corner"> 
            <span className='headerSpan'>
                Zain Najeeb
            </span>
        </div>

        </div>
    </div>
  );
}

export default Header;
