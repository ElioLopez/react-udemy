import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Principal
        </Link>
        <Link to="/bio" className="item">
          Bio
        </Link>
        <Link to="/pics" className="item">
          Pics
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <GoogleAuth/>
        </div>
      </div>
    );
  };
  
  export default Header;
  