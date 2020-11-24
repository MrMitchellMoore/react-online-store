import React from 'react';
import {Link} from 'react-router-dom';
import {getCartItems} from '../../../modules/cart';

export default function Header () {
  return (
    <nav>
      <div className="nav-wrapper blue-grey">
        <Link to="/" className="nav-logo brand-logo">Bread</Link>
        <ul id="nav-mobile" className="nav_links right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/products">Our Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart: ({getCartItems ().length || 0})</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
