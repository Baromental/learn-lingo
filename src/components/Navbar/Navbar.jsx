import React from 'react';
import { NavLink } from 'react-router';
import s from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={s.container}>
      <NavLink className={s.logo} to="/">
        <span></span>LearnLingo
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
          <span></span>Log in
        </button>
        <button className={s.regButton}>Registration</button>
      </div>
    </div>
  );
};
