import React from 'react';
import { Link, NavLink } from 'react-router';
import { ReactComponent as FlagIcon } from '../../images/flag.svg';
import { ReactComponent as LoginIcon } from '../../images/login.svg';

import s from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={s.container}>
      <Link className={s.logo} to="/">
        <FlagIcon />
        LearnLingo
      </Link>
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
          <LoginIcon className={s.icon} />
          Log in
        </button>
        <button className={s.regButton}>Registration</button>
      </div>
    </div>
  );
};
