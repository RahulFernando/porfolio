import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

// assets
import LogoS from '../../assets/images/logo-s.png';
import LogoSub from '../../assets/images/logo_sub.png';

import './index.scss';

const index = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img src={LogoSub} alt="logo_sub" className="sub-logo" />
      </Link>
      <nav>
        <NavLink
          to="/"
          //   style={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/about"
          //   className={({ isActive }) => (isActive ? 'about-link' : undefined)}
          //   style={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/contact"
          //   className={({ isActive }) => (isActive ? 'contact-link' : undefined)}
          //   style={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
    </div>
  );
};

export default index;
