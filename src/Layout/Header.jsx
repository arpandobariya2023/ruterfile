import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='App'>
      <h2>
      <nav>
        <ul className='centerline'>
          <li>
            
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Filtter">Filtter</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
          <li>
            <Link to="/Crud">Crud</Link>
          </li>
        </ul>
      </nav>
      </h2>
    </div>
  );
}

export default Header;
