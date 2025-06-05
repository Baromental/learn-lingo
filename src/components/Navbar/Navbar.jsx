import React from 'react';
import { NavLink } from 'react-router';
import flag from '../../images/flag.svg';
import login from '../../images/login.svg';

import s from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={s.container}>
      <NavLink className={s.logo} to="/">
        <img src={flag} alt="flag"></img>LearnLingo
      </NavLink>
      <div className={s.linksContainer}>
        <NavLink className={s.link} to="/">
          Home
        </NavLink>
        <NavLink className={s.link} to="/teachers">
          Teachers
        </NavLink>
      </div>
      <div className={s.buttonsContainer}>
        <button className={s.logButton}>
          <img className={s.icon} src={login} alt="login"></img>Log in
        </button>
        <button className={s.regButton}>Registration</button>
      </div>
    </div>
  );
};
