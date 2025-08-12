import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router';
import { ReactComponent as FlagIcon } from '../../images/flag.svg';
import { ReactComponent as LoginIcon } from '../../images/login.svg';
import { Modal } from 'components/Modal/Modal';
import { AuthForm } from 'components/Forms/AuthForm';
import {
  loginThunk,
  logoutThunk,
  registerThunk,
} from '../../redux/auth/operations';
import { loginSchema } from '../../schemas/loginSchema';
import { registerSchema } from '../../schemas/registerSchema';
import { selectIsLoggedIn } from '../../redux/auth/slice';

import s from './Navbar.module.css';

export const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState(null);

  const handleCloseModal = () => {
    setModalType(null);
  };

  const handleLogin = data => {
    dispatch(loginThunk(data));
  };

  const handleRegister = data => {
    dispatch(registerThunk(data));
  };

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

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
        {isLoggedIn && (
          <NavLink className={s.link} to="/favorites">
            Favorites
          </NavLink>
        )}
      </div>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout} className={s.regExButton}>
            Exit
          </button>
        </div>
      ) : (
        <div className={s.buttonsContainer}>
          <button
            onClick={() => {
              setModalType('login');
            }}
            className={s.logButton}
          >
            <LoginIcon className={s.icon} />
            Log in
          </button>
          <button
            onClick={() => {
              setModalType('register');
            }}
            className={s.regExButton}
          >
            Registration
          </button>
        </div>
      )}

      {modalType && (
        <Modal onClose={handleCloseModal}>
          {modalType === 'login' && (
            <AuthForm
              formType="login"
              schema={loginSchema}
              onDataSubmit={handleLogin}
              closeModal={handleCloseModal}
            />
          )}
          {modalType === 'register' && (
            <AuthForm
              formType="register"
              schema={registerSchema}
              onDataSubmit={handleRegister}
              closeModal={handleCloseModal}
            />
          )}
        </Modal>
      )}
    </div>
  );
};
